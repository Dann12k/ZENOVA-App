import { clamp } from "../utils/guards.mjs";

/**
 * Calcula la emocion interna de ZENIN desde senales de producto.
 *
 * No usa IA y no interpreta clinicamente al usuario. Solo prepara una expresion
 * coherente para avatar, presencia y futuras microintervenciones.
 */
export class ZeninEmotionEngine {
  constructor({ states = {}, defaultEmotion = "calm" } = {}) {
    this.states = states;
    this.currentEmotion = defaultEmotion;
  }

  evaluate({ context = {}, relationship = {}, observations = {}, latestEvent = null } = {}) {
    const stress = Number(context.recentState?.latestStressLevel || 0);
    const trend = context.recentState?.emotionalTrend || observations.emotionalTrend || "unknown";
    const completedTool = latestEvent?.type === "tool.completed";
    const achievedGoal = latestEvent?.type === "goal.progress" && Number(latestEvent.payload?.progress || 0) >= 100;
    const sleepHours = Number(observations.averageSleepHours || 0);
    const confidence = Number(relationship.trust || 0);

    let name = "calm";
    let reason = "default-calm-state";

    if (completedTool || achievedGoal) {
      name = achievedGoal ? "celebrating" : "proud";
      reason = achievedGoal ? "goal-achieved" : "tool-completed";
    } else if (trend === "declining" || stress >= 8 || (sleepHours > 0 && sleepHours < 5.5)) {
      name = confidence > 40 ? "empathetic" : "concerned";
      reason = "care-signal-detected";
    } else if (trend === "improving") {
      name = "happy";
      reason = "positive-trend";
    } else if (observations.newPatternDetected) {
      name = "curious";
      reason = "new-pattern";
    } else if (context.recentState?.checkinCount > 0) {
      name = "thoughtful";
      reason = "recent-context";
    }

    this.currentEmotion = name;
    return {
      name,
      reason,
      confidence: clamp(this.scoreEmotionConfidence({ stress, trend, completedTool, achievedGoal }), 0, 100),
      visual: this.states[name] || this.states.calm || null,
      evaluatedAt: new Date().toISOString()
    };
  }

  scoreEmotionConfidence({ stress, trend, completedTool, achievedGoal }) {
    if (completedTool || achievedGoal) return 88;
    if (trend === "declining" || stress >= 8) return 76;
    if (trend === "improving") return 72;
    return 54;
  }
}
