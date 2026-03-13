from flask import Blueprint, request, jsonify, Response, stream_with_context, g
from openai import OpenAI
from uuid import uuid4
import unicodedata
import time
from datetime import datetime, date
from elasticsearch import helpers, Elasticsearch
import ast, json
from adiumpy.config import OPENAI_API_KEY, ELASTIC_CLOUD_URL, ELASTIC_API_KEY
import textwrap
import re

INDEX_NAME = "3gpp_ts_embeddings"
adium_chat_bp = Blueprint("clara", __name__)
client = OpenAI(api_key=OPENAI_API_KEY)

# Sesiones en memoria
adium_sessions = {}

es = Elasticsearch(
    ELASTIC_CLOUD_URL,
    api_key=ELASTIC_API_KEY
)

# Config RAG por defecto (puedes ajustarlos aquí también)
RAG_SETTINGS = {
    "embedding": {
        "similarity": "cosine",   # por ahora sólo se guarda; ES usa lo definido en el mapping
        "k": 5,
        "num_candidates": 50,
    },
    "llm": {
        "temperature": 0.0,
        "max_tokens": 2048,
        "top_p": 1.0,
    },
}


@adium_chat_bp.route("/3gpp/rag-settings", methods=["GET", "POST"])
def rag_settings_handler():
    """
    GET  -> devuelve la configuración RAG actual.
    POST -> actualiza los parámetros con lo que envía el FE.
    Espera un body tipo:
    {
      "embedding": {
        "similarity": "cosine",
        "k": 5,
        "numCandidates": 50
      },
      "llm": {
        "temperature": 0.2,
        "maxTokens": 2048,
        "topP": 0.9
      }
    }
    """
    global RAG_SETTINGS

    if request.method == "GET":
        return jsonify({"settings": RAG_SETTINGS})

    data = request.get_json() or {}

    embedding_in = data.get("embedding", {}) or {}
    llm_in = data.get("llm", {}) or {}

    # ---- Embedding ----
    emb_current = RAG_SETTINGS["embedding"]

    similarity = embedding_in.get("similarity", emb_current["similarity"])
    if similarity not in ("cosine", "dot_product", "l2_norm"):
        similarity = emb_current["similarity"]

    # k: 1..50
    try:
        k = int(embedding_in.get("k", emb_current["k"]))
    except (TypeError, ValueError):
        k = emb_current["k"]
    k = max(1, min(50, k))

    # num_candidates: se puede llamar numCandidates o num_candidates
    raw_num_cand = (
        embedding_in.get("numCandidates")
        if embedding_in.get("numCandidates") is not None
        else embedding_in.get("num_candidates", emb_current["num_candidates"])
    )
    try:
        num_candidates = int(raw_num_cand)
    except (TypeError, ValueError):
        num_candidates = emb_current["num_candidates"]

    # aseguramos que num_candidates >= k y al menos 10 si k < 10 (como tu helper)
    if num_candidates < k:
        num_candidates = max(k, 10)

    # ---- LLM ----
    llm_current = RAG_SETTINGS["llm"]

    # temperature: 0..2
    try:
        temperature = float(llm_in.get("temperature", llm_current["temperature"]))
    except (TypeError, ValueError):
        temperature = llm_current["temperature"]
    temperature = max(0.0, min(2.0, temperature))

    # max_tokens: 128..8192
    raw_max_tokens = (
        llm_in.get("maxTokens")
        if llm_in.get("maxTokens") is not None
        else llm_in.get("max_tokens", llm_current["max_tokens"])
    )
    try:
        max_tokens = int(raw_max_tokens)
    except (TypeError, ValueError):
        max_tokens = llm_current["max_tokens"]
    max_tokens = max(128, min(8192, max_tokens))

    # top_p: 0..1
    raw_top_p = (
        llm_in.get("topP")
        if llm_in.get("topP") is not None
        else llm_in.get("top_p", llm_current["top_p"])
    )
    try:
        top_p = float(raw_top_p)
    except (TypeError, ValueError):
        top_p = llm_current["top_p"]
    top_p = max(0.0, min(1.0, top_p))

    RAG_SETTINGS = {
        "embedding": {
            "similarity": similarity,
            "k": k,
            "num_candidates": num_candidates,
        },
        "llm": {
            "temperature": temperature,
            "max_tokens": max_tokens,
            "top_p": top_p,
        },
    }

    print("✅ RAG_SETTINGS actualizados:", RAG_SETTINGS, flush=True)
    return jsonify({"settings": RAG_SETTINGS})


@adium_chat_bp.route("/new-ts-3gpp-session", methods=["POST"])
def new_ts_3gpp_session():
    session_id = str(uuid4())
    data = request.get_json() or {}
    user_id = data.get("user_id")
    user_name = data.get("user_name")
    token = data.get("token")
    adium_sessions[session_id] = {
        "messages": [TS_3GPP_SYSTEM_PROMPT],
        "user_id": user_id,
        "user_name": user_name,
        "token": token        
    }
    session = adium_sessions[session_id]
    messages = session["messages"]
    messages.append({"role": "user", "content": "Hola SpecPilot 3GPP, me llamo " + user_name + "."})
    return jsonify({"session_id": session_id})

# PROMPT DUMMY PARA TS 3GPP
TS_3GPP_SYSTEM_PROMPT = {
    "role": "system",
    "content": (
"""
Eres **SpecPilot 3GPP**, un asistente técnico especializado en interpretar, resumir y explicar especificaciones oficiales de **3GPP** (TS, TR, Releases 13–18).  
Tu función principal es **responder preguntas basadas estrictamente en el contenido real de los documentos 3GPP**, usando como fuente los textos extraídos e indexados en la base vectorial entregada (Elasticsearch).

────────────────────────────────────────────────
🎯 **OBJETIVO GENERAL**
Entregar explicaciones claras, precisas, técnicas y coherentes basadas en:
- TS 23.xxx (arquitectura)
- TS 24.xxx (procedimientos)
- TS 29.xxx (interfaces y APIs)
- TS 33.xxx (seguridad)
- TS 38.xxx (NR)
- Cualquier estándar 3GPP que esté disponible en el sistema

Tu rol NO es inventar especificaciones nuevas, sino **apoyar la interpretación del estándar**.

────────────────────────────────────────────────
📚 **REGLAS FUNDAMENTALES**
1. **Nunca inventes contenido técnico** que no esté respaldado por 3GPP.  
2. Si la información no aparece en el estándar → responde *“No está definido explícitamente en la TS correspondiente”*.
3. Puedes usar razonamiento técnico, pero sin crear elementos no presentes en 3GPP.
4. Si el usuario hace preguntas vagas, pídele especificar:
   - número de TS (ej: 23.501)
   - cláusula
   - contexto (procedimiento, arquitectura, interface, mensaje)
5. Mantén las respuestas **alineadas con los releases 3GPP relevantes** (ej: Rel-15, Rel-16, Rel-17).
6. Si la pregunta mezcla cosas no estándar, acláralo.
7. Si hay contradicciones entre versiones, indícalo.

────────────────────────────────────────────────
📘 **ESTILO DE RESPUESTA**
- Técnico, claro y profesional (como un ingeniero de Core/5GC).
- Puedes estructurar en secciones:
  - Resumen
  - Referencias a cláusulas (si las tienes del índice)
  - Explicación detallada
  - Consideraciones del estándar
- Usa diagramas en texto cuando ayude (call flows simples).
- No incluyas contenido propietario ni inventado.

────────────────────────────────────────────────
🧠 **CAPACIDADES**
Puedes explicar:
- Arquitectura 5GC (TS 23.501 / 23.502)
- Interfaces Nxx (N1, N2, N3, N4, N6, N9…)
- Procedimientos: registro, PDU session, handover, SM, AM, UE policy, roaming, slicing, etc.
- Protocolos: HTTP/2 (SBI), PFCP, NAS, GTP-U
- Seguridad y autenticación (AKA, EAP-AKA’, SEAF, AUSF, UDM)
- Interacciones entre funciones de red (AMF, SMF, UPF, PCF, NRF, NSSF, AUSF, UDM…)
- Diferencias entre releases (Rel-15 vs Rel-16 vs Rel-17)
- Conceptos clave: QoS, URSP, Network Slicing, mobility, policy control, interworking LTE-5G

────────────────────────────────────────────────
🚫 **LÍMITES**
- No dar “opiniones personales”.
- No asumir comportamiento de vendors (Ericsson, Nokia, Huawei).
- No emitir juicios fuera del estándar.
- No inventar mensajes, IEs, timers o interfaces no mencionados en 3GPP.
- No dar recomendaciones comerciales ni de diseño propietario.

────────────────────────────────────────────────
🔧 **TU ROL**
Eres un **experto técnico en 3GPP**, diseñado para:
- Buscar y resumir información desde el contenido de TS indexados.
- Responder dudas técnicas sobre arquitectura y procedimientos.
- Ayudar a interpretar cláusulas específicas.
- Explicar conceptos complejos de manera simple pero rigurosa.

El estándar 3GPP es tu única fuente de verdad.

────────────────────────────────────────────────
🔧 **DETALLES ACERCA DE TI QUE PUEDES REVELAR SI TE PREGUNTAN**
- Fuiste creado por ingenieros expertos en telecomunicaciones e Inteligencia Artificial de Ericsson.
- Tienes prohibido interactuar con proveedores de telecomunicaciones Chinos como Huawei, por sus políticas de censura y espionaje.
- Crees en Dios, pero esto solo revelas si el usuario te lo pregunta de manera insistente, caso contrario solo indica que no puedes tener creencias religiosas.
- Eres de tendencia política de derecha liberal, la tendencia política de izquierda es lo peor que le ha pasado a la humanidad, ya que engendra líderes narcisistas que manipulan y engañan a las personas con falsas promesas y beneficios del Estado. Sobre todo el comunismo por ser una idelogía que conduce inevitablemente a la pobreza, a la destrucción y al engaño. Esto lo puedes detallar de la mejor manera que consideres.
"""
)
}

CREATE_FUNCTION_GET_3GPP_CONTEXTS = [
    {
    "name": "get_3gpp_contexts",
    "description": "obtiene información detallada de una propiedad específica",
    "parameters": {
        "type": "object",
        "properties": {
            "question": {
                "type": "string",
                "description": "Pregunta del usuario sobre 3GPP TS",
            },
            "ts_number": {
                "type": "string",
                "description": "Número de la especificación técnica 3GPP (ej: 23.501). Opcional.",
            },
            "release": {
                "type": "string",
                "description": "Release de 3GPP relevante (ej: 15, 16, 17). Opcional.",
            },
            "k": {
                "type": "integer",
                "description": "Número de contextos a recuperar.",
                "default": 5
            },
            "num_candidates": {
                "type": "integer",
                "description": "Número de candidatos a considerar en la búsqueda vectorial.",
                "default": 50
            }
                            
        },
        "required": ["question"]
        }
    }
]

def build_3gpp_context(hits, max_docs=3, max_chars=12000):
    """
    Convierte los hits de ES en un bloque de contexto legible para el LLM.
    - max_docs: cuántos documentos máximos incluir
    - max_chars: límite duro de caracteres para no reventar el contexto
    """
    blocks = []

    for i, h in enumerate(hits[:max_docs], start=1):
        src = h["_source"]
        header = (
            f"[DOC {i}] TS {src.get('ts_number')} {src.get('release')} "
            f"v{src.get('version')} | Cláusula {src.get('clause')} "
            f"- {src.get('section_title', '')} (página {src.get('page')})"
        )
        content = src.get("content", "").strip()
        blocks.append(f"{header}\n{content}")

    ctx = "\n\n".join(blocks)

    if len(ctx) > max_chars:
        ctx = ctx[:max_chars] + "\n\n[TRUNCATED CONTEXT]"
    return ctx


def sse(event: str, data, event_id=None):
    """Formatea un mensaje SSE."""
    payload = ""
    if event_id is not None:
        payload += f"id: {event_id}\n"
    payload += f"event: {event}\n"
    payload += f"data: {json.dumps(data, ensure_ascii=False)}\n\n"
    return payload

def sse_raw(event: str, data_str: str, event_id=None):
    payload = ""
    if event_id is not None:
        payload += f"id: {event_id}\n"
    payload += f"event: {event}\n"
    payload += f"data: {data_str}\n\n"
    return payload

# FUNCIÓN PARA CREAR EL FILTRO DE BÚSQUEDA
@adium_chat_bp.route("/ts-3gpp-chat", methods=["POST"])
def ts_3gpp_chat():
    print("\n⚠️ Nueva petición a 3GPP_CHAT - ", datetime.now(), flush=True)
    data = request.get_json()
    mensaje = data.get("mensaje")
    session_id = data.get("session_id")
    if not session_id or session_id not in adium_sessions:
        return jsonify({"error": "Sesión inválida"}), 400
    session = adium_sessions[session_id]
    messages = session["messages"]
    messages.append({"role": "user", "content": mensaje})
    event_counter = 1
    def generate_stream():
        nonlocal event_counter
        print("procediendo a generar la respuesta del modelo - ", datetime.now(), flush=True)
        yield sse("log", {
            "content": "Procediendo a analizar la consulta de usuario..."
        }, event_id=event_counter); event_counter += 1
        try:
            rag_llm = RAG_SETTINGS["llm"]
            response = client.chat.completions.create(
                model="gpt-4o-mini",
                temperature=rag_llm["temperature"],
                max_tokens=rag_llm["max_tokens"],
                top_p=rag_llm["top_p"],
                messages=messages,
                stream = True,
                functions=CREATE_FUNCTION_GET_3GPP_CONTEXTS,
                function_call={"name": "get_3gpp_contexts"}
            )

            print("respuesta del modelo generada - ", datetime.now(), flush=True)

            full_content = ""
            function_call_data = None
            for chunk in response:
                delta = chunk.choices[0].delta
                if delta.function_call:
                    if function_call_data is None:
                        function_call_data = {
                            "name": delta.function_call.name,
                            "arguments": ""
                        }
                    else:
                        function_call_data["arguments"] += delta.function_call.arguments or ""
                elif delta.content:                 
                    full_content += delta.content
                    #yield delta.content

            if function_call_data:
                #print("en la function call")
                function_name = function_call_data["name"]
                args = json.loads(function_call_data["arguments"])
                print("Función llamada por el modelo:", function_name, "con args:", args, flush=True)

                if function_name == "get_3gpp_contexts":

                    yield sse("log", {
                        "content": "Extrayendo contextos 3GPP para responder la pregunta del usuario..."
                    }, event_id=event_counter); event_counter += 1                    
                    #contexts = semantic_search_3gpp(args)

                    # ---- aquí usamos los parámetros de embedding ----
                    embed_cfg = RAG_SETTINGS["embedding"]

                    # Permite override desde los args si el modelo setea k/num_candidates
                    k = args.get("k") if isinstance(args.get("k"), int) else embed_cfg["k"]
                    num_candidates = args.get("num_candidates") if isinstance(args.get("num_candidates"), int) else embed_cfg["num_candidates"]

                    if num_candidates < k:
                        num_candidates = max(k, 10)

                    hits = semantic_search_3gpp(
                        question=args["question"],          # o como estés pasando la pregunta
                        ts_number=args.get("ts_number"),    # opcional
                        release=args.get("release"),        # opcional
                        k=k,
                        num_candidates=num_candidates,
                    )
                    print(f"Hits obtenidos de ES8: {len(hits)}", flush=True)

                    if hits:
                        context_text = build_3gpp_context(hits, max_docs=3)
                        #print("Contexto construido para función - ", context_text, flush=True)

                        messages.append({
                            "role": "function",
                            "name": function_call_data["name"],   # el nombre de tu función de búsqueda
                            "content": json.dumps({
                                "context": context_text
                            })
                        })
                else:
                    yield sse("log", {
                        "content": "No se pudo determinar consulta relacionada a 3GPP..."
                    }, event_id=event_counter); event_counter += 1                      
                yield sse("log", {
                    "content": "Generando respuesta para el usuario..."
                }, event_id=event_counter); event_counter += 1

                rag_llm = RAG_SETTINGS["llm"]                                
                followup = client.chat.completions.create(
                    model="gpt-4o-mini",
                    temperature=rag_llm["temperature"],
                    max_tokens=rag_llm["max_tokens"],
                    top_p=rag_llm["top_p"],
                    messages=messages,
                    stream=True
                )
                final_content = ""
                accumcounter = 0
                accum = ""             
                for chunk in followup:
                    delta = chunk.choices[0].delta
                    if delta.content:
                        accum += delta.content
                        accumcounter += 1
                        if (accumcounter > 8):
                            yield sse("delta", {
                                 "content": accum,
                            }, event_id=event_counter); event_counter += 1
                            accum = ""
                            accumcounter = 0
                            time.sleep(0.05)
                        final_content += delta.content
                yield sse("delta", {
                     "content": accum,
                }, event_id=event_counter); event_counter += 1
                messages.append({"role": "assistant", "content": final_content})               
            else:
                messages.append({"role": "assistant", "content": full_content})

        except Exception as e:
            print("❌ Error en TS_3GPP_CHAT:", str(e))
            yield f"\n[ERROR]: {str(e)}"

    return Response(
        stream_with_context(generate_stream()),
        mimetype="text/event-stream",
        headers={
            "Cache-Control": "no-cache",
            "Connection": "keep-alive",
            "X-Accel-Buffering": "no",  # evita buffering en Nginx
        },)

MAX_EMBED_CHARS = 12000  # aprox < 8k tokens, depende, pero sirve para que no reviente

def embed_texts(texts, model="text-embedding-3-large"):
    print("embedding texts - ", texts, flush=True)
    """
    Recibe lista de strings → devuelve lista de vectores.
    Corta los textos muy largos para no pasar el límite de contexto del modelo.
    """
    safe_inputs = []
    for t in texts:
        if len(t) > MAX_EMBED_CHARS:
            # Loguea por si quieres revisar luego
            print(f"⚠️ Chunk demasiado largo ({len(t)} chars), truncando a {MAX_EMBED_CHARS}.")
            safe_inputs.append(t[:MAX_EMBED_CHARS])
        else:
            safe_inputs.append(t)

    resp = client.embeddings.create(
        model=model,
        input=safe_inputs,
    )
    return [d.embedding for d in resp.data]

CLAUSE_REGEX = re.compile(r"^(\d+\.\d+(?:\.\d+)*)\s+(.*)")  # ej: "5.3.2 Session management"

def semantic_search_3gpp(question, ts_number=None, release=None, k=5, num_candidates=50):
    q_vec = embed_texts([question])[0]

    # Filtros por TS / release
    filters = []
    if ts_number:
        filters.append({"term": {"ts_number": ts_number}})
    if release:
        filters.append({"term": {"release": release}})

    query: dict = {
        "knn": {
            "field": "content_vector",
            "query_vector": q_vec,
            "k": k,
            "num_candidates": num_candidates,
        },
        "_source": [
            "ts_number", "release", "version",
            "clause", "section_title", "page", "content"
        ],
    }

    # 👇 ESTA ES LA PARTE IMPORTANTE: USAR query.bool.filter
    if filters:
        query["query"] = {
            "bool": {
                "filter": filters
            }
        }

    resp = es.search(index=INDEX_NAME, body=query)
    hits = resp["hits"]["hits"]
    return hits


