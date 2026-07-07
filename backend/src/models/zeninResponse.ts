import type { SuggestedTool, ZeninEmotion, ZeninJsonResponse, ZeninPriority } from "../types/chat.js";
import { AIProviderError } from "../utils/errors.js";

const emotions: ZeninEmotion[] = ["happy", "thinking", "empathetic", "calm", "neutral", "celebrating", "concerned"];
const priorities: ZeninPriority[] = ["critical", "high", "medium", "low", "silent"];
const tools: SuggestedTool[] = ["", "breathing", "journal", "sleep", "meditation", "focus", "grounding", "movement"];
const geminiTools = ["none", "breathing", "journal", "sleep", "meditation", "focus", "grounding", "movement"];

const emotionAliases: Record<string, ZeninEmotion> = {
  alegre: "happy",
  alegria: "happy",
  feliz: "happy",
  happy: "happy",
  positivo: "happy",
  pensando: "thinking",
  pensativo: "thinking",
  analizar: "thinking",
  analizando: "thinking",
  thinking: "thinking",
  curioso: "thinking",
  curious: "thinking",
  empatico: "empathetic",
  empatica: "empathetic",
  empathetic: "empathetic",
  calmado: "calm",
  calma: "calm",
  calm: "calm",
  tranquilo: "calm",
  neutral: "neutral",
  celebrando: "celebrating",
  celebrar: "celebrating",
  celebrating: "celebrating",
  orgulloso: "celebrating",
  preocupado: "concerned",
  preocupada: "concerned",
  preocupacion: "concerned",
  concerned: "concerned",
  anxious: "concerned",
  ansiedad: "concerned",
  ansioso: "concerned",
  ansiosa: "concerned",
  triste: "concerned",
  sad: "concerned",
  estres: "concerned",
  stressed: "concerned"
};

const priorityAliases: Record<string, ZeninPriority> = {
  critica: "critical",
  critico: "critical",
  critical: "critical",
  alta: "high",
  alto: "high",
  high: "high",
  media: "medium",
  medio: "medium",
  medium: "medium",
  baja: "low",
  bajo: "low",
  low: "low",
  silenciosa: "silent",
  silencioso: "silent",
  silent: "silent"
};

const toolAliases: Record<string, SuggestedTool> = {
  "": "",
  ninguno: "",
  none: "",
  respiracion: "breathing",
  respirar: "breathing",
  breathing: "breathing",
  diario: "journal",
  journaling: "journal",
  journal: "journal",
  escritura: "journal",
  sueno: "sleep",
  descanso: "sleep",
  dormir: "sleep",
  sleep: "sleep",
  meditacion: "meditation",
  meditation: "meditation",
  meditar: "meditation",
  foco: "focus",
  concentracion: "focus",
  focus: "focus",
  grounding: "grounding",
  anclaje: "grounding",
  "anclaje sensorial": "grounding",
  movimiento: "movement",
  movement: "movement",
  estiramiento: "movement"
};

export const zeninResponseSchema = {
  type: "object",
  properties: {
    message: { type: "string" },
    emotion: { type: "string", enum: emotions },
    suggestedTool: { type: "string", enum: tools },
    priority: { type: "string", enum: priorities },
    celebrate: { type: "boolean" },
    showConfetti: { type: "boolean" },
    memorySummary: { type: "string" }
  },
  required: ["message", "emotion", "suggestedTool", "priority", "celebrate", "showConfetti", "memorySummary"]
};

export const geminiResponseSchema = {
  ...zeninResponseSchema,
  properties: {
    ...zeninResponseSchema.properties,
    suggestedTool: { type: "string", enum: geminiTools }
  }
};

function normalizeKey(value: unknown): string {
  return String(value ?? "")
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function readEmotion(value: unknown): ZeninEmotion {
  const key = normalizeKey(value);
  if (emotions.includes(key as ZeninEmotion)) return key as ZeninEmotion;
  return emotionAliases[key] || "neutral";
}

function readSuggestedTool(value: unknown): SuggestedTool {
  const key = normalizeKey(value);
  if (tools.includes(key as SuggestedTool)) return key as SuggestedTool;
  return toolAliases[key] || "";
}

function readPriority(value: unknown): ZeninPriority {
  const key = normalizeKey(value);
  if (priorities.includes(key as ZeninPriority)) return key as ZeninPriority;
  return priorityAliases[key] || "low";
}

export function parseZeninJsonResponse(rawText: string): ZeninJsonResponse {
  const cleaned = rawText
    .trim()
    .replace(/^```json/i, "")
    .replace(/^```/i, "")
    .replace(/```$/i, "")
    .trim();
  let parsed: unknown;
  try {
    parsed = JSON.parse(cleaned);
  } catch (error) {
    throw new AIProviderError("Gemini no devolvio JSON valido.");
  }
  return validateZeninResponse(parsed);
}

export function validateZeninResponse(value: unknown): ZeninJsonResponse {
  if (!value || typeof value !== "object") throw new AIProviderError("La respuesta de IA no tiene formato de objeto.");
  const record = value as Record<string, unknown>;
  if (typeof record.message !== "string") throw new AIProviderError("La respuesta no incluye message valido.");
  const celebrate = typeof record.celebrate === "boolean" ? record.celebrate : false;
  const showConfetti = typeof record.showConfetti === "boolean" ? record.showConfetti : false;
  const memorySummary = typeof record.memorySummary === "string" ? record.memorySummary : "";
  return {
    message: record.message.slice(0, 1800),
    emotion: readEmotion(record.emotion),
    suggestedTool: readSuggestedTool(record.suggestedTool),
    priority: readPriority(record.priority),
    celebrate,
    showConfetti,
    memorySummary: memorySummary.slice(0, 900)
  };
}

export function createLocalZeninResponse(message: string): ZeninJsonResponse {
  return {
    message,
    emotion: "calm",
    suggestedTool: "",
    priority: "silent",
    celebrate: false,
    showConfetti: false,
    memorySummary: ""
  };
}
