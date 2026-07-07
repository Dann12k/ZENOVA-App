import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import type { MemoryConversation, MemoryStore, UserMemory } from "../types/memory.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataDir = path.resolve(__dirname, "../../data");

function safeId(value: string): string {
  return value.replace(/[^a-zA-Z0-9_-]/g, "_").slice(0, 120) || "anonymous";
}

async function ensureDataDir(): Promise<void> {
  await mkdir(dataDir, { recursive: true });
}

async function readJson<T>(filePath: string, fallback: T): Promise<T> {
  try {
    const raw = await readFile(filePath, "utf8");
    return JSON.parse(raw) as T;
  } catch (error) {
    return fallback;
  }
}

async function writeJson(filePath: string, value: unknown): Promise<void> {
  await ensureDataDir();
  await writeFile(filePath, JSON.stringify(value, null, 2), "utf8");
}

function userFile(userId: string): string {
  return path.join(dataDir, `user-${safeId(userId)}.json`);
}

function conversationFile(userId: string): string {
  return path.join(dataDir, `conversations-${safeId(userId)}.json`);
}

function createInitialUserMemory(userId: string): UserMemory {
  return {
    userId,
    name: "",
    goals: [],
    tools: [],
    emotions: [],
    habits: [],
    progress: [],
    achievements: [],
    conversationSummaries: [],
    preferences: {},
    lastSeenAt: null,
    updatedAt: new Date().toISOString()
  };
}

function createInitialConversation(userId: string, conversationId: string): MemoryConversation {
  const now = new Date().toISOString();
  return {
    id: conversationId,
    userId,
    createdAt: now,
    updatedAt: now,
    summary: "",
    turns: []
  };
}

export class LocalMemoryStore implements MemoryStore {
  async getUserMemory(userId: string): Promise<UserMemory> {
    const memory = await readJson<UserMemory>(userFile(userId), createInitialUserMemory(userId));
    return { ...createInitialUserMemory(userId), ...memory, userId };
  }

  async saveUserMemory(memory: UserMemory): Promise<void> {
    await writeJson(userFile(memory.userId), { ...memory, updatedAt: new Date().toISOString() });
  }

  async getConversation(userId: string, conversationId: string): Promise<MemoryConversation> {
    const conversations = await this.readConversations(userId);
    return conversations[conversationId] || createInitialConversation(userId, conversationId);
  }

  async saveConversation(conversation: MemoryConversation): Promise<void> {
    const conversations = await this.readConversations(conversation.userId);
    conversations[conversation.id] = {
      ...conversation,
      turns: conversation.turns.slice(-80),
      updatedAt: new Date().toISOString()
    };
    await writeJson(conversationFile(conversation.userId), conversations);
  }

  async listConversations(userId: string, limit = 10): Promise<MemoryConversation[]> {
    const conversations = await this.readConversations(userId);
    return Object.values(conversations)
      .sort((a, b) => b.updatedAt.localeCompare(a.updatedAt))
      .slice(0, limit);
  }

  private async readConversations(userId: string): Promise<Record<string, MemoryConversation>> {
    return readJson<Record<string, MemoryConversation>>(conversationFile(userId), {});
  }
}
