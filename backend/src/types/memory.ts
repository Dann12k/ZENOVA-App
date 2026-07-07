import type { ZeninJsonResponse } from "./chat.js";

export interface MemoryConversationTurn {
  id: string;
  role: "user" | "zenin";
  message: string;
  createdAt: string;
  aiUsed?: boolean;
  responseMeta?: Partial<ZeninJsonResponse>;
}

export interface MemoryConversation {
  id: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
  summary: string;
  turns: MemoryConversationTurn[];
}

export interface UserMemory {
  userId: string;
  name: string;
  goals: string[];
  tools: Array<{ key: string; usedAt: string; result?: string }>;
  emotions: Array<{ value: string; createdAt: string; source?: string }>;
  habits: string[];
  progress: Array<{ label: string; value: number; createdAt: string }>;
  achievements: string[];
  conversationSummaries: string[];
  preferences: Record<string, unknown>;
  lastSeenAt: string | null;
  updatedAt: string;
}

export interface MemorySnapshot {
  user: UserMemory;
  conversation: MemoryConversation;
  recentConversations: MemoryConversation[];
}

export interface MemoryStore {
  getUserMemory(userId: string): Promise<UserMemory>;
  saveUserMemory(memory: UserMemory): Promise<void>;
  getConversation(userId: string, conversationId: string): Promise<MemoryConversation>;
  saveConversation(conversation: MemoryConversation): Promise<void>;
  listConversations(userId: string, limit?: number): Promise<MemoryConversation[]>;
}
