import { env } from "../config/env.js";
import type { AIProvider } from "../types/ai.js";
import { GeminiProvider } from "./GeminiProvider.js";

export function createAIProvider(): AIProvider {
  if (env.aiProvider === "gemini") return new GeminiProvider();
  return new GeminiProvider();
}
