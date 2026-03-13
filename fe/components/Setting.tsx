import React, { useState } from "react";
import { X, SlidersHorizontal, BrainCircuit } from "lucide-react";

type Similarity = "cosine" | "dot_product" | "l2_norm";

export interface EmbeddingSettings {
  similarity: Similarity;
  k: number;
  numCandidates: number;
}

export interface LlmSettings {
  temperature: number;
  maxTokens: number;
  topP: number;
}

export interface RagSettings {
  embedding: EmbeddingSettings;
  llm: LlmSettings;
}

interface RagSettingsModalProps {
  open: boolean;
  onClose: () => void;
  initialSettings: RagSettings;
  onSave: (settings: RagSettings) => void;
  /** Endpoint BE para actualizar settings, ej: "/api/3gpp/rag-settings" */
  updateEndpoint: string;
}

export const RagSettingsModal: React.FC<RagSettingsModalProps> = ({
  open,
  onClose,
  initialSettings,
  onSave,
  updateEndpoint,
}) => {
  const [settings, setSettings] = useState<RagSettings>(initialSettings);
  const [isSaving, setIsSaving] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  if (!open) return null;

  const handleChangeEmbedding = <K extends keyof EmbeddingSettings>(
    key: K,
    value: EmbeddingSettings[K]
  ) => {
    setSettings((prev) => ({
      ...prev,
      embedding: {
        ...prev.embedding,
        [key]: value,
      },
    }));
  };

  const handleChangeLlm = <K extends keyof LlmSettings>(
    key: K,
    value: LlmSettings[K]
  ) => {
    setSettings((prev) => ({
      ...prev,
      llm: {
        ...prev.llm,
        [key]: value,
      },
    }));
  };

  const handleSave = async () => {
    setIsSaving(true);
    setErrorMsg(null);

    try {
      const resp = await fetch(updateEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // Si tu BE espera otro shape (ej: { rag_settings: {...} }),
        // ajusta este body.
        body: JSON.stringify(settings),
      });

      if (!resp.ok) {
        const text = await resp.text();
        throw new Error(
          text || `Error al guardar settings (HTTP ${resp.status})`
        );
      }

      // Si el backend devuelve los settings normalizados, puedes leerlos aquí.
      // Por ahora asumimos que lo que guardamos es lo que quedó.
      // const data = (await resp.json()) as { settings?: RagSettings };
      // const effectiveSettings = data.settings ?? settings;

      const effectiveSettings = settings;

      onSave(effectiveSettings);
      onClose();
    } catch (err: unknown) {
      console.error("Error guardando RAG settings:", err);
      setErrorMsg(
        (err instanceof Error ? err.message : null) ??
          "Ocurrió un error al guardar los parámetros. Intenta nuevamente."
      );
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div
        className="
          w-full max-w-xl rounded-2xl bg-white shadow-2xl
          border border-slate-200
          animate-in fade-in zoom-in duration-150
        "
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-5 h-5 text-sky-600" />
            <div>
              <h2 className="text-sm font-semibold text-slate-900">
                Parámetros de RAG 3GPP
              </h2>
              <p className="text-xs text-slate-500">
                Ajusta búsqueda vectorial en ES8 y los hiperparámetros del
                modelo.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="inline-flex items-center justify-center rounded-full p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition"
            disabled={isSaving}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="px-5 py-4 space-y-5 max-h-[70vh] overflow-y-auto">
          {errorMsg && (
            <div className="mb-2 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-[11px] text-red-700">
              {errorMsg}
            </div>
          )}

          {/* ES8 / Embeddings */}
          <section className="rounded-xl border border-sky-100 bg-sky-50/60 px-4 py-3">
            <div className="flex items-center gap-2 mb-3">
              <div className="h-7 w-7 rounded-full bg-sky-100 flex items-center justify-center">
                <BrainCircuit className="w-4 h-4 text-sky-700" />
              </div>
              <div>
                <h3 className="text-xs font-semibold text-sky-900">
                  Búsqueda vectorial ES8
                </h3>
                <p className="text-[11px] text-sky-700/80">
                  Controla similarity, K y número de candidatos (HNSW).
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              {/* Similarity */}
              <div className="flex flex-col gap-1">
                <label className="font-medium text-slate-800">Similarity</label>
                <select
                  value={settings.embedding.similarity}
                  onChange={(e) =>
                    handleChangeEmbedding(
                      "similarity",
                      e.target.value as Similarity
                    )
                  }
                  className="
                    rounded-lg border border-slate-200 bg-white px-2 py-1.5
                    text-xs text-slate-800 focus:outline-none focus:ring-1
                    focus:ring-sky-400 focus:border-sky-400
                  "
                >
                  <option value="cosine">cosine</option>
                  <option value="dot_product">dot_product</option>
                  <option value="l2_norm">l2_norm</option>
                </select>
                <p className="text-[10px] text-slate-500">
                  cosine recomendado para embeddings de texto.
                </p>
              </div>

              {/* K */}
              <div className="flex flex-col gap-1">
                <label className="font-medium text-slate-800">K (vecinos)</label>
                <input
                  type="number"
                  min={1}
                  max={50}
                  value={settings.embedding.k}
                  onChange={(e) =>
                    handleChangeEmbedding("k", Number(e.target.value) || 1)
                  }
                  className="
                    rounded-lg border border-slate-200 bg-white px-2 py-1.5
                    text-xs text-slate-800 focus:outline-none focus:ring-1
                    focus:ring-sky-400 focus:border-sky-400
                  "
                />
                <p className="text-[10px] text-slate-500">
                  Cantidad de chunks usados como contexto.
                </p>
              </div>

              {/* num_candidates */}
              <div className="flex flex-col gap-1">
                <label className="font-medium text-slate-800">
                  num_candidates
                </label>
                <input
                  type="number"
                  min={kToMinCandidates(settings.embedding.k)}
                  value={settings.embedding.numCandidates}
                  onChange={(e) =>
                    handleChangeEmbedding(
                      "numCandidates",
                      Number(e.target.value) || settings.embedding.k
                    )
                  }
                  className="
                    rounded-lg border border-slate-200 bg-white px-2 py-1.5
                    text-xs text-slate-800 focus:outline-none focus:ring-1
                    focus:ring-sky-400 focus:border-sky-400
                  "
                />
                <p className="text-[10px] text-slate-500">
                  Candidatos que evalúa HNSW antes de elegir los K mejores.
                </p>
              </div>
            </div>
          </section>

          {/* LLM Hyperparams */}
          <section className="rounded-xl border border-slate-200 bg-slate-50/80 px-4 py-3">
            <div className="flex items-center gap-2 mb-3">
              <div className="h-7 w-7 rounded-full bg-slate-200 flex items-center justify-center">
                <BrainCircuit className="w-4 h-4 text-slate-800" />
              </div>
              <div>
                <h3 className="text-xs font-semibold text-slate-900">
                  Hiperparámetros del modelo
                </h3>
                <p className="text-[11px] text-slate-600">
                  Ajusta creatividad, longitud de respuesta y sampling.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              {/* Temperature */}
              <div className="flex flex-col gap-1">
                <label className="font-medium text-slate-800">
                  Temperature
                </label>
                <input
                  type="number"
                  min={0}
                  max={2}
                  step={0.1}
                  value={settings.llm.temperature}
                  onChange={(e) =>
                    handleChangeLlm(
                      "temperature",
                      Number(e.target.value) || 0
                    )
                  }
                  className="
                    rounded-lg border border-slate-200 bg-white px-2 py-1.5
                    text-xs text-slate-800 focus:outline-none focus:ring-1
                    focus:ring-sky-400 focus:border-sky-400
                  "
                />
                <p className="text-[10px] text-slate-500">
                  0 = determinista, &gt;0 = más creativo.
                </p>
              </div>

              {/* max_tokens */}
              <div className="flex flex-col gap-1">
                <label className="font-medium text-slate-800">max_tokens</label>
                <input
                  type="number"
                  min={128}
                  max={8192}
                  step={64}
                  value={settings.llm.maxTokens}
                  onChange={(e) =>
                    handleChangeLlm(
                      "maxTokens",
                      Number(e.target.value) || 256
                    )
                  }
                  className="
                    rounded-lg border border-slate-200 bg-white px-2 py-1.5
                    text-xs text-slate-800 focus:outline-none focus:ring-1
                    focus:ring-sky-400 focus:border-sky-400
                  "
                />
                <p className="text-[10px] text-slate-500">
                  Límite máximo de tokens de la respuesta.
                </p>
              </div>

              {/* top_p */}
              <div className="flex flex-col gap-1">
                <label className="font-medium text-slate-800">top_p</label>
                <input
                  type="number"
                  min={0}
                  max={1}
                  step={0.05}
                  value={settings.llm.topP}
                  onChange={(e) =>
                    handleChangeLlm("topP", Number(e.target.value) || 1)
                  }
                  className="
                    rounded-lg border border-slate-200 bg-white px-2 py-1.5
                    text-xs text-slate-800 focus:outline-none focus:ring-1
                    focus:ring-sky-400 focus:border-sky-400
                  "
                />
                <p className="text-[10px] text-slate-500">
                  Nucleus sampling. 1 = desactivado, &lt;1 = recorta la cola.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-2 px-5 py-3 border-t border-slate-200 bg-slate-50/80">
          <button
            onClick={onClose}
            className="
              px-3 py-1.5 rounded-lg text-xs font-medium
              text-slate-600 hover:text-slate-800
              hover:bg-slate-100 transition
            "
            disabled={isSaving}
          >
            Cancelar
          </button>
          <button
            onClick={handleSave}
            disabled={isSaving}
            className="
              px-3.5 py-1.5 rounded-lg text-xs font-semibold
              bg-sky-600 text-white hover:bg-sky-700
              shadow-sm hover:shadow transition
              disabled:opacity-60 disabled:cursor-not-allowed
            "
          >
            {isSaving ? "Guardando..." : "Guardar cambios"}
          </button>
        </div>
      </div>
    </div>
  );
};

// Helper opcional para evitar num_candidates < k
function kToMinCandidates(k: number): number {
  if (k <= 0) return 1;
  if (k < 10) return 10;
  return k;
}
