import React, {
  useState,
  useEffect,
  ChangeEvent,
  FormEvent,
} from "react";
import { X, FileInput, UploadCloud } from "lucide-react";

interface Upload3gppModalProps {
  open: boolean;
  onClose: () => void;
  ingestEndpoint: string; // ej: "/api/3gpp/ingest"
  defaultRelease?: string;
  defaultVersion?: string;
}

export const Upload3gppModal: React.FC<Upload3gppModalProps> = ({
  open,
  onClose,
  ingestEndpoint,
  defaultRelease = "17",
  defaultVersion = "17.10.0",
}) => {
  const [tsNumber, setTsNumber] = useState("");
  const [tsTitle, setTsTitle] = useState("");
  const [release, setRelease] = useState(defaultRelease);
  const [version, setVersion] = useState(defaultVersion);
  const [sourceUrl, setSourceUrl] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  // Reset al abrir
  useEffect(() => {
    if (open) {
      setErrorMsg(null);
      setSuccessMsg(null);
    }
  }, [open]);

  if (!open) return null;

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0] || null;
    setFile(f);
    // Si quisieras precargar algo en source_url, lo podrías hacer acá
    // por ejemplo, el nombre del archivo:
    // if (f && !sourceUrl) setSourceUrl(f.name);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setSuccessMsg(null);

    if (!file) {
      setErrorMsg("Debes seleccionar un documento PDF 3GPP.");
      return;
    }
    if (!tsNumber.trim()) {
      setErrorMsg("El campo TS Number es obligatorio (ej: 23.501).");
      return;
    }
    if (!tsTitle.trim()) {
      setErrorMsg("El título de la especificación (TS Title) es obligatorio.");
      return;
    }

    try {
      setIsSubmitting(true);

      const formData = new FormData();
      formData.append("file", file);
      formData.append("ts_number", tsNumber.trim());
      formData.append("ts_title", tsTitle.trim());
      formData.append("release", release.trim());
      formData.append("version", version.trim());
      formData.append("source_url", sourceUrl.trim());

      const resp = await fetch(ingestEndpoint, {
        method: "POST",
        body: formData,
      });

      if (!resp.ok) {
        const text = await resp.text().catch(() => "");
        throw new Error(
          text || `Error ${resp.status} al enviar el documento.`
        );
      }

      setSuccessMsg("Ingesta iniciada correctamente para este documento 3GPP.");
      // Opcional: limpiar formulario
      setFile(null);
      // e.g.: cerrar automáticamente
      // setTimeout(onClose, 1200);
    } catch (err: unknown) {
      console.error(err);
      if (err instanceof Error) {
        setErrorMsg(err.message || "Ocurrió un error al enviar la ingesta.");
      } else {
        setErrorMsg("Ocurrió un error al enviar la ingesta.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="w-full max-w-xl rounded-2xl bg-white shadow-2xl border border-slate-200">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-full bg-sky-100 flex items-center justify-center">
              <FileInput className="w-4 h-4 text-sky-700" />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-slate-900">
                Ingestar documento 3GPP (PDF)
              </h2>
              <p className="text-xs text-slate-500">
                Sube una TS 3GPP en PDF y define sus metadatos para la ingesta en el RAG.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="inline-flex items-center justify-center rounded-full p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <form onSubmit={handleSubmit} className="px-5 py-4 space-y-4">
          {/* File input */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-medium text-slate-800">
              Documento PDF 3GPP
            </label>
            <label
              className="
                flex items-center justify-between gap-3
                rounded-xl border border-dashed border-sky-300 bg-sky-50/60
                px-3 py-2 text-xs text-sky-900 cursor-pointer
                hover:bg-sky-50 hover:border-sky-400 transition
              "
            >
              <div className="flex items-center gap-2">
                <UploadCloud className="w-4 h-4 text-sky-600" />
                <div className="flex flex-col">
                  <span className="font-semibold">
                    {file ? file.name : "Selecciona un archivo PDF…"}
                  </span>
                  <span className="text-[10px] text-sky-700/80">
                    Solo PDF. Se usará para extraer contenido y generar embeddings.
                  </span>
                </div>
              </div>
              <input
                type="file"
                accept="application/pdf"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
          </div>

          {/* TS metadata */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="flex flex-col gap-1">
              <label className="font-medium text-slate-800">
                TS Number
              </label>
              <input
                type="text"
                placeholder="ej: 23.501"
                value={tsNumber}
                onChange={(e) => setTsNumber(e.target.value)}
                className="
                  rounded-lg border border-slate-200 bg-white px-2 py-1.5
                  text-xs text-slate-800 focus:outline-none focus:ring-1
                  focus:ring-sky-400 focus:border-sky-400
                "
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-medium text-slate-800">
                Release
              </label>
              <input
                type="text"
                placeholder='ej: "Rel-17" o "17"'
                value={release}
                onChange={(e) => setRelease(e.target.value)}
                className="
                  rounded-lg border border-slate-200 bg-white px-2 py-1.5
                  text-xs text-slate-800 focus:outline-none focus:ring-1
                  focus:ring-sky-400 focus:border-sky-400
                "
              />
            </div>

            <div className="flex flex-col gap-1 sm:col-span-2">
              <label className="font-medium text-slate-800">
                TS Title
              </label>
              <input
                type="text"
                placeholder="ej: System architecture for the 5G System (5GS)"
                value={tsTitle}
                onChange={(e) => setTsTitle(e.target.value)}
                className="
                  rounded-lg border border-slate-200 bg-white px-2 py-1.5
                  text-xs text-slate-800 focus:outline-none focus:ring-1
                  focus:ring-sky-400 focus:border-sky-400
                "
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-medium text-slate-800">
                Version
              </label>
              <input
                type="text"
                placeholder="ej: 17.10.0"
                value={version}
                onChange={(e) => setVersion(e.target.value)}
                className="
                  rounded-lg border border-slate-200 bg-white px-2 py-1.5
                  text-xs text-slate-800 focus:outline-none focus:ring-1
                  focus:ring-sky-400 focus:border-sky-400
                "
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-medium text-slate-800">
                Source URL (opcional)
              </label>
              <input
                type="text"
                placeholder="ej: https://www.3gpp.org/ftp/Specs/archive/23_series/23.501.pdf"
                value={sourceUrl}
                onChange={(e) => setSourceUrl(e.target.value)}
                className="
                  rounded-lg border border-slate-200 bg-white px-2 py-1.5
                  text-xs text-slate-800 focus:outline-none focus:ring-1
                  focus:ring-sky-400 focus:border-sky-400
                "
              />
            </div>
          </div>

          {/* Mensajes */}
          {errorMsg && (
            <p className="text-[11px] text-red-600 bg-red-50 border border-red-100 rounded-lg px-3 py-1.5">
              {errorMsg}
            </p>
          )}
          {successMsg && (
            <p className="text-[11px] text-emerald-700 bg-emerald-50 border border-emerald-100 rounded-lg px-3 py-1.5">
              {successMsg}
            </p>
          )}

          {/* Footer */}
          <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-200 mt-2">
            <button
              type="button"
              onClick={onClose}
              className="
                px-3 py-1.5 rounded-lg text-xs font-medium
                text-slate-600 hover:text-slate-800
                hover:bg-slate-100 transition
              "
              disabled={isSubmitting}
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="
                inline-flex items-center gap-1.5
                px-3.5 py-1.5 rounded-lg text-xs font-semibold
                bg-sky-600 text-white hover:bg-sky-700
                disabled:opacity-60 disabled:cursor-not-allowed
                shadow-sm hover:shadow transition
              "
            >
              {isSubmitting && (
                <span className="h-3 w-3 rounded-full border border-white border-t-transparent animate-spin" />
              )}
              <span>{isSubmitting ? "Ingestando..." : "Ingestar TS"}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
