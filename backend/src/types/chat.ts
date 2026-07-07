export interface ChatRequestBody {
  message: string;
  userId: string;
  conversationId: string;
  clientContext?: Record<string, unknown>;
}

export type ZeninEmotion =
  | "happy"
  | "thinking"
  | "empathetic"
  | "calm"
  | "neutral"
  | "celebrating"
  | "concerned";

export type ZeninPriority = "critical" | "high" | "medium" | "low" | "silent";

export type SuggestedTool =
  | ""
  | "breathing"
  | "journal"
  | "sleep"
  | "meditation"
  | "focus"
  | "grounding"
  | "movement";

export interface ZeninJsonResponse {
  message: string;
  emotion: ZeninEmotion;
  suggestedTool: SuggestedTool;
  priority: ZeninPriority;
  celebrate: boolean;
  showConfetti: boolean;
  memorySummary: string;
}

export interface ChatResponseBody extends ZeninJsonResponse {
  conversationId: string;
  usedAI: boolean;
  provider: string;
}
