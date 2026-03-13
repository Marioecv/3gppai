"use client";

import { Bot, Brain, FileInput, Settings } from "lucide-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDog, faWifi,faPersonSwimming, faTv, faFire, faCar, faUtensils, faShieldAlt, faSun, faWater, faSnowflake, faWheelchair, faMugHot } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect, useRef, forwardRef, useImperativeHandle } from "react";
import { SquarePause, Mic, ArrowUp } from "lucide-react";
import type { ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import React from "react";
import { RagSettingsModal, RagSettings } from "@/components/Setting";
import { Upload3gppModal } from "@/components/UploadRAG";
import {
  Bath,
  Mountain,
  ParkingCircle,
  PlugZap,
} from "lucide-react";

export const amenityMap: Record<
  string,
  { label: string; icon: ReactNode  }
> = {
  wifi: { label: "Wi-Fi", icon: <FontAwesomeIcon icon={faWifi} className="w-3 h-3" /> },
  Automóvil: { label: "Wi-Fi", icon: <FontAwesomeIcon icon={faCar}  className="w-3 h-3" /> },
  estacionamiento: {
    label: "Estacionamiento gratis",
    icon: <ParkingCircle className="w-3 h-3" />,
  },
  jacuzzi: { label: "Jacuzzi", icon: <Bath className="w-3 h-3" /> },
  cocina: { label: "Cocina equipada", icon: <FontAwesomeIcon icon={faUtensils}  className="w-3 h-3" /> },
  calefacción: { label: "Calefacción", icon: <FontAwesomeIcon icon={faFire}  className="w-3 h-3" /> },
  aire_acondicionado: {label: "Aire acondicionado", icon: <FontAwesomeIcon icon={faSnowflake} className="w-3 h-3" />,},
  piscina: { label: "Piscina", icon: <FontAwesomeIcon icon={faPersonSwimming} className="w-3 h-3" /> },
  tv: { label: "Televisión", icon: <FontAwesomeIcon icon={faTv} className="w-3 h-3" /> },
  desayuno: { label: "Desayuno incluido", icon: <FontAwesomeIcon icon={faMugHot} className="w-3 h-3" /> },
  pet_friendly: { label: "Pet-Friendly", icon: <FontAwesomeIcon icon={faDog} className="w-3 h-3" /> },
  vista_montaña: { label: "Vista a la montaña", icon: <Mountain className="w-3 h-3" /> },
  enchufes: { label: "Enchufes", icon: <PlugZap className="w-3 h-3" /> },
  accesibilidad: { label: "Accesibilidad", icon: <FontAwesomeIcon icon={faWheelchair} className="w-3 h-3" /> },
  solarium: { label: "Solárium", icon: <FontAwesomeIcon icon={faSun}  className="w-3 h-3" /> },
  seguridad: { label: "Seguridad 24h", icon: <FontAwesomeIcon icon={faShieldAlt}  className="w-3 h-3" /> },
  frente_al_lago: { label: "Frente al lago", icon: <FontAwesomeIcon icon={faWater}  className="w-3 h-3" /> },
};

interface Mensaje {
  autor: "user" | "bot" | "system" | "log";
  texto: string | React.ReactNode;
}

export interface Guests {
  adults: number;
  children: number;
  infants: number;
  pet: boolean;
}

interface AdiumChatProps {
  initialMessage?: string;
  userId: string | null;
  userName: string | null;
  token: string | null;
}


export interface AdiumChatHandle {
  enviarMensajeDesdeOutside: (texto: string) => void;
}

const AdiumChat = forwardRef<AdiumChatHandle, AdiumChatProps>(({ initialMessage, userId, userName, token }, ref) => {
  //const [mensaje, setMensaje] = useState("");
  const mensaje = useRef("");                         // NO causa render
  const setMensaje = (v: string) => { mensaje.current = v; };
  const [render, setRender] = useState(false)
  const [mensajes, setMensajes] = useState<Mensaje[]>([
    {
      autor: "bot",
      texto: "👋 ¡Hola " + userName +`! Soy SpecPilot, tu asistente especializado en interpretar, explicar y buscar información dentro de las especificaciones técnicas 3GPP (TS, TR, Releases 13–18).

Estoy aquí para ayudarte a entender cualquier aspecto del ecosistema móvil 4G/5G, desde arquitectura del Core Network hasta procedimientos, interfaces, seguridad, políticas y signaling.\n

Puedes preguntarme cosas como:\n\n

• ¿Cuál es la función del AMF/SMF/UPF según la TS 23.501?\n
• ¿Cómo funciona el establecimiento de una PDU Session?\n
• ¿Qué define la cláusula 5.x de una TS específica?\n
• ¿Qué diferencias hay entre Rel-15 vs Rel-16 vs Rel-17?\n
• ¿Cómo operan protocolos como HTTP/2 (SBI), PFCP, NAS o GTP-U?\n
• ¿Cómo se describe un procedimiento de movilidad inter-RAT o handover?\n\n

\nPuedo buscar en las TS indexadas, resumir cláusulas relevantes y ayudarte a interpretar el estándar de forma clara, precisa y alineada con 3GPP.

Cuando quieras, envíame tu consulta técnica. Estoy listo para ayudarte. 🚀📡📘
`,
    },
  ]);

  const [sessionId, setSessionId] = useState<string | null>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const claraChatRef = useRef<HTMLDivElement>(null);
  const mensajesRef = useRef<Mensaje[]>([]);
  //const inputTextRef = useRef<HTMLInputElement>(null);
  const inputTextRef = useRef<HTMLInputElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [didAnimate, setDidAnimate] = useState(false);
  const [isStreaming, setIsStreaming] = useState(false);
  const abortControllerRef = useRef<AbortController | null>(null);
  const dataaccumRef = useRef("");
  const newMessageCreated = useRef(false);
  const [showSetting, setShowSetting] = useState(false);
  const [ragSettings, setRagSettings] = useState<RagSettings>({
    embedding: {
      similarity: "cosine",   // ahora esto sí se infiere como Similarity
      k: 5,
      numCandidates: 50,
    },
    llm: {
      temperature: 0,
      maxTokens: 2048,
      topP: 1,
    },
  });
  const [showUpload3gpp, setShowUpload3gpp] = useState(false);

//  const [isShortHeader, setIsShortHeader] = useState(false);

  type space = {
    property_number?: number;
    check_in?: string;
    check_out?: string;
    adults?: number;
    children?: number;
    infants?: number;
    allow_pets?: boolean;
  }

  useEffect(() => {
    mensajesRef.current = mensajes;    
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [mensajes]);

  const enviarMensajeDesdeProp = async (
    texto: string,
    sessionId: string,
    mensajes: Mensaje[],
    setMensajes: React.Dispatch<React.SetStateAction<Mensaje[]>>
  ) => {
    const controller = new AbortController();
    abortControllerRef.current = controller;
    if (!sessionId) return;
    const nuevos: Mensaje[] = [...mensajes, { autor: "user", texto }];
    setMensajes(nuevos);
    try {
      const res = await fetch("/api/ts-3gpp-chat", {
        method: "POST",
        signal: controller.signal,   // 👈 importante
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ session_id: sessionId, mensaje: texto }),
      });
      if (!res.ok || !res.body) throw new Error("Respuesta inválida del servidor");
      const reader = res.body.getReader();
      const decoder = new TextDecoder("utf-8");
      let result = "";
      //setMensajes(prev => [...prev, { autor: "bot", texto: "" }]);


      function handleEventFrame(e: string) {
        let eventName = "";
        let dataStr = "";
        for (const line of e.split("\n")) {
          if (line.startsWith("event:")) eventName = line.slice(6).trim();
          if (line.startsWith("data:"))  dataStr += line.slice(5).trim();
        }
        if (!dataStr) return;

        if (eventName === "log") {
          if (!newMessageCreated.current) {
            setMensajes(prev => [...prev, { autor: "log", texto: "" }]);
            newMessageCreated.current = true
          }
          setMensajes(prev => {
            const data = JSON.parse(dataStr);
            const actual = [...prev];
            actual[actual.length - 1].autor = "log";
            actual[actual.length - 1].texto = data.content;
            return actual
          });
          return
        }
        if (eventName === "delta") {
          if (!newMessageCreated.current) {
            setMensajes(prev => [...prev, { autor: "bot", texto: "" }]);
            newMessageCreated.current = true
          } 
          const data = JSON.parse(dataStr);
          dataaccumRef.current += data.content;
          const snapshot = dataaccumRef.current;
          console.log("CLARA snapshot: ",snapshot)
          setMensajes(prev => {
            const actual = [...prev];
            actual[actual.length - 1].autor = "bot";
            actual[actual.length - 1].texto = snapshot;
            return actual;
          });
          return
        }
        if (eventName === "results") {
          if (!newMessageCreated.current) {
            setMensajes(prev => [...prev, { autor: "bot", texto: "" }]);
            newMessageCreated.current = true
          } 
          setMensajes(prev => {
            const actual = [...prev];
            actual[actual.length - 1].autor = "bot";
            actual[actual.length - 1].texto = dataStr;
            return actual
          });
          return
        }
        if (eventName === "done") {
          return; // terminó
        }
      }

      function consumeEvents(buf: string) {
        const parts = buf.split("\n\n");
        const rest = parts.pop() || "";
        for (const frame of parts) handleEventFrame(frame);
        return rest;
      }



      while (true) {
        const { value, done } = await reader.read();
        if (done) {
          console.log("⏹ Stream terminado");
          break;
        }
        result += decoder.decode(value, { stream: true });
        if (!result.includes("\n\n")) continue;
        result = consumeEvents(result);
      }

      result += decoder.decode();
      result = consumeEvents(result);  
      dataaccumRef.current = ""
      newMessageCreated.current = false

      return

    } catch (err: unknown) {
      // Caso: abortaste con AbortController → no mostrar error al usuario
      if (err instanceof DOMException && err.name === "AbortError") {
        console.log("⏹ Stream abortado por el usuario");
        return;
      }
      console.error("Error enviando mensaje:", err);
      setMensajes(prev => [...prev, { autor: "bot", texto: "Ocurrió un error 😓 intenta más tarde." }]);
    } finally {
      abortControllerRef.current = null;
    }
  };

  useImperativeHandle(ref, () => ({
    enviarMensajeDesdeOutside: async (texto: string) => {
      if (!texto.trim() || !sessionId) return;
        try {
          setIsStreaming(true);
          await enviarMensajeDesdeProp(texto, sessionId, mensajesRef.current, setMensajes);
          setMensaje("");
        } catch (e) {
          console.error("Error en streaming:", e);
        } finally {
          setIsStreaming(false);
        }     
    },
  }));

  useEffect(() => {
    // Crear sesión
    if (!token || !userId) return;
    if (isSessionIdExisting.current) return;
    isSessionIdExisting.current = true;
    fetch("/api/new-ts-3gpp-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user_id: userId, user_name: userName, token })
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.session_id) setSessionId(data.session_id);
      });
  }, [token, userId]);

  const isSessionIdExisting = useRef(false);
  const alreadySent = useRef(false);

  useEffect(() => {
    if (initialMessage && sessionId && !alreadySent.current) {
      enviarMensajeDesdeProp(initialMessage, sessionId, mensajesRef.current, setMensajes);
      alreadySent.current = true;
    }
  }, [initialMessage, sessionId]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [mensajes]);


  const enviarMensaje = async () => {
    if (!mensaje.current.trim() || !sessionId) return;
    try {
      setIsStreaming(true);
      await enviarMensajeDesdeProp(mensaje.current, sessionId, mensajesRef.current, setMensajes);
      setMensaje("");
    } catch (e) {
      console.error("Error en streaming:", e);
    } finally {
      setIsStreaming(false);
    }
  };

  type ChatContent = string | React.ReactNode | null | undefined;

  function ChatMsg({ content }: { content: ChatContent }) {
    if (content == null) return null;
    if (typeof content === 'string') {
      return  <div className="markdown-content prose prose-sm max-w-none"><ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown></div>;
    }
    // cuando content es JSX/ReactNode
    return <div className="prose max-w-none">{content}</div>;
  }
  

  const isAHiddenMsg = (input: unknown) => {
    if (typeof input !== "string") return null;
    type Payload = { 
      hidden: boolean
    }
    try {
      const data = JSON.parse(input) as Payload;
      const isHidden = data.hidden ?? false;
      console.log("EN CLARACHAT - isHidden:", isHidden)
      return isHidden
    } catch {
      return false;
    }
  }

  const handlePause = () => {
    setIsStreaming(false);                    // UI
    abortControllerRef.current?.abort();      // 👈 corta la request al BE
  };   

  return (
    <div className=" flex-1 flex flex-col min-h-0 mx-0 z-[10] overflow-y-hidden mt-1">
      <div className={`flex-1 flex flex-col min-h-0 z-[10] w-full mx-auto px-4 overflow-y-auto mb-9 sm:mb-21`}>
        <style jsx global>{`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(2px); }
            to   { opacity: 1; transform: translateY(0); }
          }
        `}</style>
        {mensajes.map((msg, i) => (
          <div key={i} className={`mb-2 flex ${msg.autor === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`flex flex-col max-w-[80%] text-sm ${msg.autor === "user" ? "items-end text-right" : "items-start text-left"}`}>
              {!isAHiddenMsg(msg.texto as string) && ( 
                <div className={`px-4 py-2 rounded-lg shadow-sm 
                    
                      ${msg.autor === "user" ? "bg-gray-200 text-gray-800" : ( msg.autor === "log" ? "animate-[blink_1s_infinite] italic bg-emerald-100 text-gray-900" : "bg-blue-50 text-gray-900") }
                      opacity-0 animate-[fadeInUp_900ms_ease-out_forwards]`}   // 👈 fade aquí
                      style={{ animationDelay: `${i * 10}ms` }} 
                    >
                    <div className="mb-1 font-semibold">
                      {msg.autor === "bot" || msg.autor === "log"? (
                        <div className="flex items-center gap-2">
                           <Bot className="w-7 h-7 text-emerald-500" />
                          <span>SpecPilot</span>
                        </div>
                      ) : (
                        "👤 Tú"
                      )}
                    </div>
                    <ChatMsg 
                       content={msg.texto as string}
                    />
                </div>
              )}
            </div>
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>
       <div className="shrink-0 relative absolute top-0 px-0 pt-0 bg-white shadow-md ml-5 mr-5 sm:ml-30 sm:mr-30 lg:ml-60 lg:mr-60 mb-4 rounded-xs h-max">
        <input 
          ref={inputTextRef}
          onChange={(e) => {
            setMensaje(e.target.value);
            } 
          }
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              if (inputTextRef.current && !isStreaming) {
                enviarMensaje();
                inputTextRef.current.value = "";  // limpia
                inputTextRef.current.placeholder = "Ask your 3GPP question..."
                setMensaje("");
              }
              inputTextRef.current?.focus();
            }
          }}
          placeholder="                  Ask your 3GPP question..."
          className="flex sm:hidden absolute bottom-0 rounded-full w-full bg-white flex-grow max-h-50 pl-11 pr-18 py-[9px] border border-gray-300 shadow-sm focus:outline-none focus:ring-[0.5px] focus:ring-blue-900 placeholder:text-sm placeholder:text-gray-500 text-[15px] resize-none overflow-y-auto text-black z-[100]"
        />      
      
        <textarea 
          ref={textAreaRef}
          rows={3}
          onChange={(e) => setMensaje(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              if (textAreaRef.current && !isStreaming) {
                enviarMensaje();
                textAreaRef.current.value = "";  // limpia
                textAreaRef.current.placeholder = "Ask your 3GPP question..."
                setMensaje("");
              }
              textAreaRef.current?.focus();
            }
          }}
          placeholder="Ask your 3GPP question..."
          className="hidden sm:flex absolute bottom-0 w-full bg-white flex-grow max-h-50 pl-5 pr-20 py-2 border border-gray-300 rounded-2xl shadow-sm focus:outline-none focus:ring-[0.5px] focus:ring-blue-900 placeholder:text-sm placeholder:text-gray-500 text-[15px] resize-none z-[100]"
        />


       <button
          disabled={isStreaming}
	        onClick={
            () => {
              if (textAreaRef.current) {
                textAreaRef.current.value = "";    // limpia}
                textAreaRef.current.placeholder = "Setting for Embedding/Hyperparameters..."
              }
              setShowSetting(true)
              textAreaRef.current?.focus();
            }
          }
          title="Setting for Embedding/Hyperparameters"
	        className="absolute bottom-1 left-2 p-[7px] border-blue-200 rounded-full sm:rounded-lg hover:bg-blue-200/50 bg-blue-50 text-blue-700 border-1 border-gray-3000 z-[999]">
          <Settings size={18} />
        </button>
        <button
          disabled={isStreaming}
	        onClick={
            () => {
              setShowUpload3gpp(true);
              if (textAreaRef.current) {
                textAreaRef.current.value = "";    // limpia
                textAreaRef.current.placeholder = "Upload additional additional technical 3GPP spec doc..."
              }
              textAreaRef.current?.focus();
            }
          }
          title="Upload additional technical 3GPP spec doc"
	        className="absolute bottom-1 left-11 sm:left-11 p-[7px] px-1 border-blue-200 rounded-full sm:rounded-lg hover:bg-blue-200/50 bg-blue-50 text-blue-700 border-1 border-gray-3000 z-[999]">
          <div className="flex items-center gap-1 text-xs text-sky-800">
            <FileInput size={18} /><span>→</span><Brain size={18} />
          </div>
        </button>

        <button
          disabled={isStreaming}
          type="button"
          onClick={async () => {
            enviarMensaje();
            if (textAreaRef.current) textAreaRef.current.value = "";    // limpia
            textAreaRef.current?.focus();
          }}
          className={`absolute bottom-1 right-1 sm:right-2 p-[7px] px-[7px] rounded-full sm:rounded-lg hover:bg-blue-900 bg-blue-500 text-white z-[999] ${!isStreaming ? "flex" : "hidden" }`}>
         <ArrowUp size={18} />
        </button>

        <button
          disabled={!isStreaming}
          type="button"
          onClick={() => {
            handlePause();
            if (textAreaRef.current) textAreaRef.current.value = "";    // limpia
            textAreaRef.current?.focus();
          }}
          className={`absolute bottom-1 right-1 sm:right-2 p-[7px] px-[7px] rounded-full sm:rounded-lg hover:bg-blue-900 bg-blue-500 text-white z-[999] ${isStreaming ? "flex" : "hidden" }`}>
         <SquarePause size={18} />
        </button>


        <button disabled={isStreaming} className="absolute bottom-1 right-9 sm:right-11 p-[7px] px-[7px] rounded-full sm:rounded-lg hover:bg-blue-200 text-blue-600 border border-blue-200 z-[999]">
          <Mic size={18} />
        </button>
        <span className="text-[11px] text-center absolute top-0.4 w-full text-gray-500 bg-white">3GPP SpecPilot Demo (c) 2026</span>
      </div>

      {showSetting && (
        <RagSettingsModal
          open={showSetting}
          onClose={() => setShowSetting(false)}
          initialSettings={ragSettings}
          onSave={(updated: RagSettings) => {
            setRagSettings(updated);
          }}
          updateEndpoint="/api/3gpp/rag-settings"
        />
      )}
      {showUpload3gpp && (
        <Upload3gppModal
          open={showUpload3gpp}
          onClose={() => setShowUpload3gpp(false)}
         // ingestEndpoint="/api/3gpp/ingest"
         // ingestEndpoint="http://localhost:5002/3gpp/ingest"
          ingestEndpoint="https://ts-be-897351610590.us-central1.run.app/3gpp/ingest"
          
        />
      )}
     
     
    </div>
  );
});

AdiumChat.displayName = "AdiumChat";

export default AdiumChat;
