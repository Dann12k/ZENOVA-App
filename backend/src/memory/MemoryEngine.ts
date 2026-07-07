import type { ZeninJsonResponse } from "../types/chat.js";
import type { MemoryConversation, MemoryConversationTurn, MemorySnapshot, MemoryStore, UserMemory } from "../types/memory.js";
import { LocalMemoryStore } from "./LocalMemoryStore.js";

function createTurn(role: "user" | "zenin", message: string, meta: Partial<ZeninJsonResponse> = {}, aiUsed = false): MemoryConversationTurn {
  return {
    id: `turn-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    role,
    message,
    createdAt: new Date().toISOString(),
    aiUsed,
    responseMeta: meta
  };
}

export class MemoryEngine {
  constructor(private readonly store: MemoryStore = new LocalMemoryStore()) {}

  async snapshot(userId: string, conversationId: string): Promise<MemorySnapshot> {
    const [user, conversation, recentConversations] = await Promise.all([
      this.store.getUserMemory(userId),
      this.store.getConversation(userId, conversationId),
      this.store.listConversations(userId, 6)
    ]);
    return { user, conversation, recentConversations };
  }

  async appendUserTurn(userId: string, conversationId: string, message: string): Promise<MemoryConversation> {
    const conversation = await this.store.getConversation(userId, conversationId);
    conversation.turns.push(createTurn("user", message));
    await this.store.saveConversation(conversation);
    return conversation;
  }

  async appendZeninTurn(
    userId: string,
    conversationId: string,
    message: string,
    meta: Partial<ZeninJsonResponse>,
    aiUsed: boolean
  ): Promise<void> {
    const conversation = await this.store.getConversation(userId, conversationId);
    conversation.turns.push(createTurn("zenin", message, meta, aiUsed));
    if (meta.memorySummary) conversation.summary = mergeSummary(conversation.summary, meta.memorySummary);
    await this.store.saveConversation(conversation);

    const user = await this.store.getUserMemory(userId);
    applyResponseToUserMemory(user, meta);
    user.lastSeenAt = new Date().toISOString();
    if (meta.memorySummary) user.conversationSummaries = [meta.memorySummary, ...user.conversationSummaries].slice(0, 20);
    await this.store.saveUserMemory(user);
  }

  async rememberUserSignals(userId: string, message: string): Promise<void> {
    const user = await this.store.getUserMemory(userId);
    const normalized = message.toLowerCase();
    if (/(examen|prueba|evaluacion|parcial)/.test(normalized)) pushUnique(user.goals, "Preparar o cerrar examen");
    if (/(dormir|sueno|sueño|descanso)/.test(normalized)) pushUnique(user.habits, "Cuidar descanso");
    if (/(respirar|respiracion|meditar|meditacion)/.test(normalized)) pushUnique(user.tools, { key: "breathing", usedAt: new Date().toISOString() });
    if (/(ansiedad|estres|tension|triste|calma|feliz|mal|bien)/.test(normalized)) {
      user.emotions.push({ value: message.slice(0, 90), createdAt: new Date().toISOString(), source: "conversation" });
      user.emotions = user.emotions.slice(-60);
    }
    user.lastSeenAt = user.lastSeenAt || new Date().toISOString();
    await this.store.saveUserMemory(user);
  }
}

function mergeSummary(previous: string, next: string): string {
  if (!previous) return next.slice(0, 1000);
  if (previous.includes(next)) return previous;
  return `${next}\n${previous}`.slice(0, 1400);
}

function applyResponseToUserMemory(user: UserMemory, meta: Partial<ZeninJsonResponse>): void {
  if (meta.suggestedTool) {
    pushUnique(user.tools, { key: meta.suggestedTool, usedAt: new Date().toISOString(), result: "suggested" });
  }
  if (meta.emotion) {
    user.emotions.push({ value: meta.emotion, createdAt: new Date().toISOString(), source: "zenin" });
    user.emotions = user.emotions.slice(-60);
  }
  if (meta.celebrate) {
    pushUnique(user.achievements, `Avance celebrado ${new Date().toISOString().slice(0, 10)}`);
  }
}

function pushUnique<T>(list: T[], value: T): void {
  const serialized = JSON.stringify(value);
  if (!list.some((item) => JSON.stringify(item) === serialized)) list.unshift(value);
  list.splice(40);
}
