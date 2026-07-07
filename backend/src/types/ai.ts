import type { ZeninJsonResponse } from "./chat.js";

export interface AIMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

export interface AIProviderRequest {
  messages: AIMessage[];
  responseSchema: Record<string, unknown>;
  timeoutMs: number;
}

export interface AIProviderResult {
  rawText: string;
  json: ZeninJsonResponse;
  model: string;
  provider: string;
}

export interface AIProvider {
  readonly name: string;
  generateJson(request: AIProviderRequest): Promise<AIProviderResult>;
}
