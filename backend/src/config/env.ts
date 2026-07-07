import dotenv from "dotenv";

dotenv.config();

export type AIProviderName = "gemini";

export interface EnvConfig {
  port: number;
  aiProvider: AIProviderName;
  geminiApiKey: string;
  geminiModel: string;
  geminiTimeoutMs: number;
  corsOrigin: string;
}

function readNumber(value: string | undefined, fallback: number): number {
  const parsed = Number(value);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}

function readProvider(value: string | undefined): AIProviderName {
  if (!value || value === "gemini") return "gemini";
  return "gemini";
}

export const env: EnvConfig = {
  port: readNumber(process.env.PORT, 3001),
  aiProvider: readProvider(process.env.AI_PROVIDER),
  geminiApiKey: process.env.GEMINI_API_KEY || "",
  geminiModel: process.env.GEMINI_MODEL || "gemini-flash-lite-latest",
  geminiTimeoutMs: readNumber(process.env.GEMINI_TIMEOUT_MS, 10000),
  corsOrigin: process.env.CORS_ORIGIN || "*"
};

export function hasGeminiApiKey(): boolean {
  return Boolean(env.geminiApiKey.trim());
}
