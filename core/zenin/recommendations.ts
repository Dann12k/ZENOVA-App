import {
  ZeninContextSnapshot,
  ZeninInsight,
  ZeninMemorySnapshot,
  ZeninPriority,
  ZeninRecommendation,
  clamp,
  createId,
  nowIso
} from "./state";

export interface ZeninToolCandidate {
  key: string;
  title: string;
  baseScore: number;
  tags: string[];
  durationMinutes: number;
}

export const ZENIN_TOOL_CATALOG: ZeninToolCandidate[] = [
  { key: "guided-breathing", title: "Respiracion guiada", baseScore: 62, tags: ["stress", "breathing", "short", "calm"], durationMinutes: 3 },
  { key: "sensory-anchor", title: "Anclaje sensorial", baseScore: 60, tags: ["anxiety", "grounding", "short"], durationMinutes: 2 },
  { key: "thought-order", title: "Ordenar pensamientos", baseScore: 54, tags: ["rumination", "writing", "focus"], durationMinutes: 5 },
  { key: "sleep-reset", title: "Rutina de sueno", baseScore: 52, tags: ["sleep", "night", "calm"], durationMinutes: 8 },
  { key: "micro-walk", title: "Pausa activa suave", baseScore: 50, tags: ["body", "energy", "short"], durationMinutes: 4 },
  { key: "journal-prompt", title: "Apunte emocional breve", baseScore: 49, tags: ["emotion", "writing", "reflection"], durationMinutes: 5 },
  { key: "focus-pulse", title: "Pulso de concentracion", baseScore: 47, tags: ["focus", "study", "short"], durationMinutes: 6 },
  { key: "progress-review", title: "Revision de progreso", baseScore: 44, tags: ["goals", "habits", "reflection"], durationMinutes: 7 }
];

export class RecommendationEngine {
  score(memory: ZeninMemorySnapshot, context: ZeninContextSnapshot, insights: ZeninInsight[] = []): ZeninRecommendation[] {
    return scoreRecommendations(memory, context, insights);
  }
}

export function scoreRecommendations(
  memory: ZeninMemorySnapshot,
  context: ZeninContextSnapshot,
  insights: ZeninInsight[] = []
): ZeninRecommendation[] {
  const signals = buildSignals(memory, context, insights);
  const recommendations = ZENIN_TOOL_CATALOG.map((tool) => {
    const result = scoreTool(tool, signals);
    return {
      id: createId("recommendation"),
      toolKey: tool.key,
      title: tool.title,
      score: Math.round(clamp(result.score, 0, 100)),
      reasons: result.reasons,
      priority: priorityFromScore(result.score),
      createdAt: nowIso(),
      status: "pending" as const
    };
  });
  return recommendations.sort((a, b) => b.score - a.score).slice(0, 5);
}

function buildSignals(memory: ZeninMemorySnapshot, context: ZeninContextSnapshot, insights: ZeninInsight[]): Record<string, number> {
  const text = JSON.stringify({ insights, emotionalHistory: memory.emotionalHistory.slice(-8), tools: memory.toolsUsed.slice(-12) }).toLowerCase();
  const night = new Date().getHours() >= 21 || new Date().getHours() <= 5 ? 1 : 0;
  return {
    stress: text.includes("estres") || text.includes("stress") ? 0.82 : 0.34,
    anxiety: text.includes("ansiedad") || text.includes("anxiety") || text.includes("sensorial") ? 0.84 : 0.28,
    sleep: text.includes("sueno") || text.includes("sleep") || night ? 0.74 : 0.25,
    focus: text.includes("concentr") || text.includes("study") ? 0.62 : 0.28,
    habits: memory.habits.length > 2 ? 0.58 : 0.25,
    goals: memory.goals.length > 0 ? 0.55 : 0.22,
    writingAllowed: context.isWriting ? 0 : 1,
    shortNeeded: context.longSession || context.isInactive ? 0.75 : 0.42,
    postActivity: context.justFinished ? 0.82 : 0.18,
    bodyNeeded: text.includes("cans") || text.includes("energia baja") ? 0.74 : 0.3
  };
}

function scoreTool(tool: ZeninToolCandidate, signals: Record<string, number>): { score: number; reasons: string[] } {
  let score = tool.baseScore;
  const reasons: string[] = [];

  const weights: Record<string, number> = {
    stress: 18,
    anxiety: 20,
    sleep: 17,
    focus: 15,
    habits: 10,
    goals: 10,
    short: 12,
    body: 12,
    breathing: 14,
    grounding: 14,
    night: 10,
    writing: signals.writingAllowed ? 8 : -18,
    calm: 9,
    energy: 8,
    reflection: 7
  };

  tool.tags.forEach((tag) => {
    const signal = signals[tag] ?? (tag === "short" ? signals.shortNeeded : tag === "body" ? signals.bodyNeeded : 0.35);
    const contribution = (weights[tag] || 6) * signal;
    score += contribution;
    if (contribution >= 8) reasons.push(`Senal ${tag} alta`);
  });

  if (tool.durationMinutes <= 4 && signals.shortNeeded > 0.65) {
    score += 10;
    reasons.push("Poco tiempo o sesion larga");
  }
  if (signals.postActivity > 0.7 && tool.tags.includes("reflection")) {
    score += 9;
    reasons.push("Acaba de completar una actividad");
  }
  if (!reasons.length) reasons.push("Afinidad general con el historial");

  return { score, reasons };
}

function priorityFromScore(score: number): ZeninPriority {
  if (score >= 92) return "Critical";
  if (score >= 78) return "High";
  if (score >= 62) return "Medium";
  if (score >= 42) return "Low";
  return "Silent";
}
