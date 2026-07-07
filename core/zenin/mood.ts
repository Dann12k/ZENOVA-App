import {
  ZeninEvent,
  ZeninInsight,
  ZeninMoodState,
  ZeninMoodVisualState,
  createInitialMood,
  nowIso
} from "./state";

const visualMap: Record<ZeninMoodState, Omit<ZeninMoodVisualState, "mood" | "updatedAt">> = {
  Neutral: {
    expression: "soft-smile",
    halo: "violet-gold",
    colors: ["#783FC6", "#F5C542", "#E9D5FF"],
    animation: "idle-breathing",
    speed: 1,
    blinkRate: 0.55,
    messageTone: "warm"
  },
  Curious: {
    expression: "tilted-head",
    halo: "violet-spark",
    colors: ["#783FC6", "#4C1D95", "#E9D5FF"],
    animation: "curious-lookaround",
    speed: 1.04,
    blinkRate: 0.62,
    messageTone: "curious"
  },
  Happy: {
    expression: "bright-smile",
    halo: "gold-soft",
    colors: ["#F5C542", "#E9D5FF", "#783FC6"],
    animation: "happy-float",
    speed: 1.08,
    blinkRate: 0.5,
    messageTone: "positive"
  },
  Thoughtful: {
    expression: "looking-up",
    halo: "hologram-blue",
    colors: ["#783FC6", "#67E8F9", "#F5C542"],
    animation: "thinking-hologram",
    speed: 0.94,
    blinkRate: 0.7,
    messageTone: "reflective"
  },
  Proud: {
    expression: "closed-eye-smile",
    halo: "gold-pulse",
    colors: ["#F5C542", "#FFFFFF", "#783FC6"],
    animation: "proud-lift",
    speed: 1.02,
    blinkRate: 0.48,
    messageTone: "encouraging"
  },
  Concerned: {
    expression: "soft-concern",
    halo: "dim-violet",
    colors: ["#4C1D95", "#E9D5FF", "#0F0C1B"],
    animation: "empathetic-sway",
    speed: 0.88,
    blinkRate: 0.8,
    messageTone: "gentle"
  },
  Motivated: {
    expression: "focused-smile",
    halo: "gold-violet-pulse",
    colors: ["#F5C542", "#783FC6", "#FFFFFF"],
    animation: "motivating-bounce",
    speed: 1.12,
    blinkRate: 0.52,
    messageTone: "active"
  },
  Celebrating: {
    expression: "wide-smile",
    halo: "confetti-glow",
    colors: ["#F5C542", "#783FC6", "#FFFFFF"],
    animation: "celebrate-hop",
    speed: 1.18,
    blinkRate: 0.46,
    messageTone: "celebratory"
  },
  Calm: {
    expression: "peaceful-smile",
    halo: "slow-violet",
    colors: ["#783FC6", "#E9D5FF", "#0F0C1B"],
    animation: "calm-breathing",
    speed: 0.9,
    blinkRate: 0.65,
    messageTone: "calm"
  }
};

export class MoodEngine {
  private state: ZeninMoodVisualState;

  constructor(initial: ZeninMoodVisualState = createInitialMood()) {
    this.state = initial;
  }

  snapshot(): ZeninMoodVisualState {
    return { ...this.state, colors: [...this.state.colors] };
  }

  reflectEvent(event: ZeninEvent): ZeninMoodVisualState {
    if (event.type === "TOOL_FINISHED" || event.type === "HABIT_COMPLETED" || event.type === "OBJECTIVE_FINISHED") {
      return this.transitionTo("Celebrating");
    }
    if (event.type === "CHECKIN_COMPLETED" || event.type === "MOOD_REGISTERED") {
      return this.transitionTo("Thoughtful");
    }
    if (event.type === "USER_LOGIN") return this.transitionTo("Happy");
    if (event.type === "USER_INACTIVE") return this.transitionTo("Concerned");
    if (event.type === "AI_OPENED") return this.transitionTo("Curious");
    return this.transitionTo("Neutral");
  }

  reflectInsights(insights: ZeninInsight[]): ZeninMoodVisualState {
    if (insights.some((insight) => insight.priority === "Critical" || insight.priority === "High")) {
      return this.transitionTo("Concerned");
    }
    if (insights.some((insight) => insight.key.includes("stress-decreasing") || insight.key.includes("habit-consistency"))) {
      return this.transitionTo("Proud");
    }
    return this.snapshot();
  }

  transitionTo(mood: ZeninMoodState): ZeninMoodVisualState {
    this.state = {
      mood,
      ...visualMap[mood],
      updatedAt: nowIso()
    };
    return this.snapshot();
  }
}

export function createMoodEngine(initial?: ZeninMoodVisualState): MoodEngine {
  return new MoodEngine(initial);
}
