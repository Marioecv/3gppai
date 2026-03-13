from datetime import datetime
import re
import os
from openai import OpenAI
from elasticsearch import helpers, Elasticsearch
from adiumpy.config import ES_HOST, ELASTIC_CLOUD_URL, ELASTIC_API_KEY, OPENAI_API_KEY
from pypdf import PdfReader
import requests
from flask import Flask, request, jsonify, Blueprint
import tempfile

ingest_bp = Blueprint("ingest", __name__)

EMBED_DIMS = 3072  # si estás usando text-embedding-3-large

client = OpenAI(api_key=OPENAI_API_KEY)

es = Elasticsearch(
    ELASTIC_CLOUD_URL,
    api_key=ELASTIC_API_KEY
)

INDEX_NAME = "3gpp_ts_embeddings"

# Datos del TS que vas a ingerir
TS_NUMBER = "23.501"
TS_TITLE = "System architecture for the 5G System (5GS)"
TS_RELEASE = "17"
TS_VERSION = "17.10.0"

# Ruta al PDF local
PDF_PATH = "TS_23.501_v17.10.0.pdf"
SOURCE_URL = "https://www.3gpp.org/..."  # opcional, solo metadata

CLAUSE_REGEX = re.compile(r"^(\d+\.\d+(?:\.\d+)*)\s+(.*)")  # ej: "5.3.2 Session management"

MAX_EMBED_CHARS = 12000  # aprox < 8k tokens, depende, pero sirve para que no reviente

app = Flask(__name__)

@ingest_bp.route("/3gpp/ingest", methods=["POST"])
def ingest_3gpp_pdf():
    """
    Endpoint wrapper:
    - Recibe un PDF 3GPP (multipart/form-data)
    - Recibe metadata: ts_number, ts_title, release, version, source_url
    - Guarda el PDF en un archivo temporal
    - Llama a parse_3gpp_pdf_to_chunks(...)
    - Llama a ingest_chunks_with_embeddings(...)
    """ 

    # 1) Validar archivo
    file = request.files.get("file")
    if not file or file.filename == "":
        return jsonify({"error": "No se recibió archivo PDF en el campo 'file'."}), 400

    # 2) Leer metadatos desde el formulario
    ts_number = (request.form.get("ts_number") or "").strip()
    ts_title = (request.form.get("ts_title") or "").strip()
    release = (request.form.get("release") or "17").strip()
    version = (request.form.get("version") or "17.10.0").strip()
    source_url = (request.form.get("source_url") or "").strip()

    if not ts_number:
        return jsonify({"error": "El campo 'ts_number' es obligatorio."}), 400
    if not ts_title:
        return jsonify({"error": "El campo 'ts_title' es obligatorio."}), 400

    # 3) Guardar el PDF en un archivo temporal
    tmp_path = None
    try:
        with tempfile.NamedTemporaryFile(delete=False, suffix=".pdf") as tmp:
            file.save(tmp)
            tmp_path = tmp.name

        # 4) Generar chunks a partir del PDF subido
        chunks = parse_3gpp_pdf_to_chunks(
            tmp_path,
            ts_number=ts_number,
            ts_title=ts_title,
            release=release,
            version=version,
            source_url=source_url,
        )

        # 5) Ingestar chunks en ES8 con embeddings
        ingest_chunks_with_embeddings(chunks, batch_size=16)

        return jsonify({
            "status": "ok",
            "message": "Ingesta completada",
            "ts_number": ts_number,
            "release": release,
            "version": version,
            "chunks_ingested": len(chunks),
        }), 200

    except Exception as e:
        # log real en prod
        print("❌ Error en ingesta 3GPP:", repr(e))
        return jsonify({
            "error": "Error al procesar el PDF o ingestar los chunks.",
            "detail": str(e),
        }), 500

    finally:
        # 6) Limpiar archivo temporal
        if tmp_path and os.path.exists(tmp_path):
            try:
                os.remove(tmp_path)
            except OSError:
                pass

def embed_texts(texts, model="text-embedding-3-large"):
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

def parse_3gpp_pdf_to_chunks(pdf_path, ts_number, ts_title, release, version, source_url=None):
    """
    Heurística simple:
    - Lee cada página
    - Detecta líneas que empiezan con "x.x" o "x.x.x" como nuevas cláusulas
    - Junta el texto hasta la siguiente cláusula
    """
    reader = PdfReader(pdf_path)

    chunks = []
    current_clause = None
    current_title = None
    current_text_lines = []
    current_page_start = None
    chunk_order = 0

    num_pages = len(reader.pages)
    print(f"📄 Parseando PDF {pdf_path} ({num_pages} páginas)…")

    for page_num in range(num_pages):
        page = reader.pages[page_num]
        try:
            text = page.extract_text() or ""
        except Exception as e:
            print(f"Error extrayendo texto de página {page_num}: {e}")
            continue

        lines = text.splitlines()
        for line in lines:
            line_stripped = line.strip()
            if not line_stripped:
                continue

            m = CLAUSE_REGEX.match(line_stripped)
            if m:
                # Si ya teníamos una cláusula en curso, la cerramos
                if current_clause and current_text_lines:
                    content = "\n".join(current_text_lines).strip()
                    if content:
                        chunk_id = f"{ts_number}-{version}-{current_clause}-{chunk_order:03d}"
                        chunks.append({
                            "ts_number": ts_number,
                            "ts_title": ts_title,
                            "release": release,
                            "version": version,
                            "clause": current_clause,
                            "section_title": current_title,
                            "page": current_page_start,
                            "chunk_id": chunk_id,
                            "chunk_order": chunk_order,
                            "content": content,
                            "source_file": os.path.basename(pdf_path),
                            "source_url": source_url or ""
                        })
                        chunk_order += 1

                # Iniciar nueva cláusula
                current_clause = m.group(1)        # "5.3.2"
                current_title  = m.group(2) or ""  # "Session management..."
                current_text_lines = []
                current_page_start = page_num + 1  # páginas 1-based
            else:
                # Texto dentro de la cláusula
                if current_clause:
                    current_text_lines.append(line_stripped)

    # Cerrar la última cláusula
    if current_clause and current_text_lines:
        content = "\n".join(current_text_lines).strip()
        if content:
            chunk_id = f"{ts_number}-{version}-{current_clause}-{chunk_order:03d}"
            chunks.append({
                "ts_number": ts_number,
                "ts_title": ts_title,
                "release": release,
                "version": version,
                "clause": current_clause,
                "section_title": current_title,
                "page": current_page_start,
                "chunk_id": chunk_id,
                "chunk_order": chunk_order,
                "content": content,
                "source_file": os.path.basename(pdf_path),
                "source_url": source_url or ""
            })

    print(f"✅ Parseo completo: {len(chunks)} chunks generados.")
    return chunks



# ============ 4. INGESTA BULK CON EMBEDDINGS ============

def ingest_chunks_with_embeddings(chunks, batch_size=32, embed_model="text-embedding-3-large"):
    """
    Ingesta en bulk de chunks 3GPP a Elasticsearch ES8 con dense_vector.

    - Usa SIEMPRE el mismo modelo de embedding (por defecto text-embedding-3-large).
    - Valida que la dimensión del vector coincida con EMBED_DIMS (ej: 3072).
    """
    total = 0

    def batched(iterable, n):
        batch = []
        for x in iterable:
            batch.append(x)
            if len(batch) == n:
                yield batch
                batch = []
        if batch:
            yield batch

    for batch in batched(chunks, batch_size):
        texts = [c["content"] for c in batch]

        # 🔥 Embeddings SIEMPRE con el mismo modelo
        vectors = embed_texts(texts, model=embed_model)

        now_iso = datetime.utcnow().isoformat() + "Z"

        actions = []
        for chunk, vec in zip(batch, vectors):
            # 🔍 chequeo defensivo de dimensiones (para no volver a tener el 1536 vs 3072)
            if len(vec) != EMBED_DIMS:
                raise ValueError(
                    f"Dimensión del embedding ({len(vec)}) != EMBED_DIMS ({EMBED_DIMS}). "
                    f"Revisa modelo usado en embed_texts."
                )

            doc = {
                "ts_number": chunk["ts_number"],
                "ts_title": chunk["ts_title"],
                "release": chunk["release"],
                "version": chunk["version"],
                "clause": chunk["clause"],
                "section_title": chunk["section_title"],
                "page": chunk["page"],
                "chunk_id": chunk["chunk_id"],
                "chunk_order": chunk["chunk_order"],
                "content": chunk["content"],
                "content_vector": vec,
                "source_file": chunk["source_file"],
                "source_url": chunk["source_url"],
                "created_at": now_iso,
                "updated_at": now_iso,
            }

            actions.append({
                "_index": INDEX_NAME,
                "_id": chunk["chunk_id"],
                "_source": doc,
            })

        helpers.bulk(es, actions)
        total += len(actions)
        print(f"🔄 Ingeridos {total} documentos en '{INDEX_NAME}'…")

    print(f"✅ Ingesta terminada. Total: {total}.")




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


def download_pdf(url, filename):
    print(f"⬇️ Descargando {url} ...")
    resp = requests.get(url)
    resp.raise_for_status()
    with open(filename, "wb") as f:
        f.write(resp.content)
    print(f"📄 PDF guardado como {filename}")
    return filename

def main():
    # 1) Descargar PDF (si no lo tienes ya)
    PDF_URL = "https://www.etsi.org/deliver/etsi_ts/123500_123599/123501/17.10.00_60/ts_123501v171000p.pdf"
    PDF_PATH = "TS_23.501_v17.10.0.pdf"
    download_pdf(PDF_URL, PDF_PATH)
    # 2) Parsear PDF → chunks
    chunks = parse_3gpp_pdf_to_chunks(
        PDF_PATH,
        ts_number=TS_NUMBER,
        ts_title=TS_TITLE,
        release="17",
        version="17.10.0",
        source_url=PDF_URL
    )
    # 3) Ingestar con embeddings
    ingest_chunks_with_embeddings(chunks, batch_size=16)
    # 4) Prueba de búsqueda
    #question = "What is the role of the SMF in PDU session establishment?"
    #results = semantic_search_3gpp(
    #    question,
    #    ts_number=TS_NUMBER,
    #    release=TS_RELEASE,
    #    k=5,
    #    num_candidates=50
    #)
    #for r in results:
    #    src = r["_source"]
    #    print("------------------------------------------------")
    #    print(f"TS: {src['ts_number']} {src['release']} v{src['version']}")
    #    print(f"Cláusula: {src['clause']} – {src.get('section_title','')}")
    #    print(f"Página: {src.get('page')}")
    #    print(f"Contenido:\n{src['content'][:500]}...")

if __name__ == "__main__":
    main()    