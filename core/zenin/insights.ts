import {
  ZeninHistoryRecord,
  ZeninInsight,
  ZeninMemorySnapshot,
  ZeninPattern,
  ZeninPriority,
  createId,
  daysBetween,
  nowIso,
  uniqueBy
} from "./state";

export interface InsightAnalysisResult {
  patterns: ZeninPattern[];
  insights: ZeninInsight[];
}

export class InsightEngine {
  analyze(memory: ZeninMemorySnapshot, history: ZeninHistoryRecord[] = []): InsightAnalysisResult {
    const patterns = analyzePatterns(memory, history);
    const insights = patterns.map((pattern) => createInsightFromPattern(pattern));
    return {
      patterns: uniqueBy(patterns, (pattern) => pattern.key),
      insights: uniqueBy(insights, (insight) => insight.key)
    };
  }
}

export function analyzePatterns(memory: ZeninMemorySnapshot, history: ZeninHistoryRecord[] = []): ZeninPattern[] {
  const patterns: ZeninPattern[] = [];
  const emotionalHistory = memory.emotionalHistory;
  const toolsUsed = memory.toolsUsed;
  const now = new Date();

  const lastEmotion = readLastDate(emotionalHistory);
  if (daysBetween(lastEmotion, now) >= 4) {
    patterns.push(pattern("emotion-gap-4-days", "No registra emociones hace 4 dias o mas.", ["Ultimo registro emocional alejado"], 0.82, "High"));
  }

  const breathingThisWeek = countToolsByKeyword(toolsUsed, ["respir", "breath"], 7);
  if (breathingThisWeek >= 3) {
    patterns.push(
      pattern("breathing-three-times-week", "La respiracion guiada aparece como rutina frecuente esta semana.", [`Respiracion usada ${breathingThisWeek} veces`], 0.74, "Medium")
    );
  }

  const anxietyTools = countToolsByKeyword(toolsUsed, ["ansiedad", "anxiety", "sensorial", "grounding"], 21);
  if (anxietyTools >= 3) {
    patterns.push(pattern("anxiety-tool-preference", "Tiende a buscar herramientas relacionadas con ansiedad.", [`Herramientas de ansiedad: ${anxietyTools}`], 0.76, "High"));
  }

  if (memory.abandonedPrograms.length >= 2) {
    patterns.push(
      pattern("long-program-abandonment", "Los programas largos tienen baja adherencia.", [`Programas abandonados: ${memory.abandonedPrograms.length}`], 0.7, "Medium")
    );
  }

  const nightUsage = countNightEvents(history);
  if (nightUsage >= 4) {
    patterns.push(pattern("night-usage", "Suele ingresar por la noche.", [`Eventos nocturnos recientes: ${nightUsage}`], 0.69, "Low"));
  }

  const stressTrend = estimateStressTrend(emotionalHistory);
  if (stressTrend === "down") {
    patterns.push(pattern("stress-decreasing", "El estres muestra una disminucion progresiva.", ["Promedio reciente menor al anterior"], 0.72, "Medium"));
  }
  if (stressTrend === "up") {
    patterns.push(pattern("stress-increasing", "El estres parece estar aumentando.", ["Promedio reciente mayor al anterior"], 0.74, "High"));
  }

  const shortCompletion = estimateShortToolPreference(toolsUsed);
  if (shortCompletion) {
    patterns.push(pattern("short-tools-work-better", "Las herramientas cortas parecen funcionar mejor.", ["Mayor finalizacion en ejercicios breves"], 0.71, "Medium"));
  }

  if (memory.habits.length >= 5) {
    patterns.push(pattern("habit-consistency", "Hay constancia visible en habitos.", [`Habitos registrados: ${memory.habits.length}`], 0.66, "Low"));
  }

  return patterns;
}

export function createInsightFromPattern(patternValue: ZeninPattern): ZeninInsight {
  const textByKey: Record<string, string> = {
    "emotion-gap-4-days": "ZENIN detecta varios dias sin registro emocional; conviene priorizar una entrada breve y sin presion.",
    "breathing-three-times-week": "La respiracion guiada se esta convirtiendo en una herramienta util para este usuario.",
    "anxiety-tool-preference": "El historial sugiere que las herramientas de ansiedad y anclaje sensorial son relevantes.",
    "long-program-abandonment": "Las actividades cortas pueden ser mas adecuadas que programas largos en este momento.",
    "night-usage": "Los momentos nocturnos parecen ser una ventana natural para intervenciones suaves.",
    "stress-decreasing": "Los registros muestran una disminucion progresiva del estres.",
    "stress-increasing": "Los registros recientes sugieren aumento de estres y requieren acompanamiento prudente.",
    "short-tools-work-better": "Las herramientas cortas funcionan mejor para mantener continuidad.",
    "habit-consistency": "La constancia con habitos puede usarse como base para objetivos mas pequenos y sostenibles."
  };
  return {
    id: createId("insight"),
    key: `insight-${patternValue.key}`,
    text: textByKey[patternValue.key] || patternValue.label,
    priority: patternValue.priority,
    evidence: patternValue.evidence,
    confidence: patternValue.confidence,
    createdAt: nowIso(),
    visible: false
  };
}

export function assignPriority(metric: number): ZeninPriority {
  if (metric >= 0.9) return "Critical";
  if (metric >= 0.72) return "High";
  if (metric >= 0.5) return "Medium";
  if (metric >= 0.25) return "Low";
  return "Silent";
}

function pattern(key: string, label: string, evidence: string[], confidence: number, priority: ZeninPriority): ZeninPattern {
  const createdAt = nowIso();
  return {
    id: createId("pattern"),
    key,
    label,
    evidence,
    confidence,
    priority,
    detectedAt: createdAt,
    lastUpdatedAt: createdAt
  };
}

function readLastDate(entries: unknown[]): string | null {
  const last = [...entries].reverse().find((entry) => entry && typeof entry === "object");
  if (!last) return null;
  const record = last as { createdAt?: unknown; date?: unknown; timestamp?: unknown };
  return String(record.createdAt || record.date || record.timestamp || "") || null;
}

function countToolsByKeyword(tools: unknown[], keywords: string[], days: number): number {
  const since = Date.now() - days * 86400000;
  return tools.filter((tool) => {
    if (!tool || typeof tool !== "object") return false;
    const record = tool as { key?: unknown; title?: unknown; createdAt?: unknown; lastUsedAt?: unknown };
    const text = `${record.key || ""} ${record.title || ""}`.toLowerCase();
    const date = new Date(String(record.createdAt || record.lastUsedAt || new Date().toISOString())).getTime();
    return date >= since && keywords.some((keyword) => text.includes(keyword));
  }).length;
}

function countNightEvents(history: ZeninHistoryRecord[]): number {
  return history.filter((record) => {
    const hour = new Date(record.createdAt).getHours();
    return hour >= 21 || hour <= 5;
  }).length;
}

function estimateStressTrend(entries: unknown[]): "up" | "down" | "stable" {
  const values = entries
    .map((entry) => {
      if (!entry || typeof entry !== "object") return null;
      const record = entry as { stress?: unknown; stressScore?: unknown; score?: unknown };
      const value = Number(record.stressScore ?? record.stress ?? record.score);
      return Number.isFinite(value) ? value : null;
    })
    .filter((value): value is number => value !== null)
    .slice(-10);
  if (values.length < 5) return "stable";
  const middle = Math.floor(values.length / 2);
  const first = values.slice(0, middle).reduce((sum, value) => sum + value, 0) / middle;
  const second = values.slice(middle).reduce((sum, value) => sum + value, 0) / (values.length - middle);
  if (second - first > 8) return "up";
  if (first - second > 8) return "down";
  return "stable";
}

function estimateShortToolPreference(tools: unknown[]): boolean {
  const completed = tools.filter((tool) => tool && typeof tool === "object" && "secondsUsed" in tool) as Array<{ secondsUsed?: unknown }>;
  if (completed.length < 3) return false;
  const shortCompleted = completed.filter((tool) => Number(tool.secondsUsed) > 0 && Number(tool.secondsUsed) <= 180).length;
  return shortCompleted / completed.length >= 0.6;
}
