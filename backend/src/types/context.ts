import type { MemoryConversation, UserMemory } from "./memory.js";

export interface ZeninContext {
  userId: string;
  conversationId: string;
  name: string;
  goals: string[];
  emotionalState: string;
  habits: string[];
  toolsUsed: string[];
  historySummary: string;
  localTime: string;
  localDate: string;
  daysSinceLastSeen: number | null;
  progress: Array<{ label: string; value: number }>;
  achievements: string[];
  preferences: Record<string, unknown>;
  conversationTurns: Array<{ role: string; message: string; createdAt: string }>;
  clientContext?: Record<string, unknown>;
}

export interface ContextBuilderInput {
  userMemory: UserMemory;
  conversation: MemoryConversation;
  message: string;
  clientContext?: Record<string, unknown>;
}
