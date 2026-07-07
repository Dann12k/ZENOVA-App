import { ZeninEvent, ZeninMemorySnapshot, ZeninPersonalityState, clamp, createInitialPersonality, nowIso } from "./state";

export class PersonalityEngine {
  private state: ZeninPersonalityState;

  constructor(initial: ZeninPersonalityState = createInitialPersonality()) {
    this.state = initial;
  }

  snapshot(): ZeninPersonalityState {
    return { ...this.state };
  }

  adaptFromEvent(event: ZeninEvent): ZeninPersonalityState {
    const target = { ...this.state };
    if (event.type === "USER_LOGIN") {
      target.closeness += 0.02;
      target.energy += 0.01;
    }
    if (event.type === "TOOL_FINISHED" || event.type === "HABIT_COMPLETED") {
      target.energy += 0.03;
      target.humor += 0.01;
    }
    if (event.type === "MOOD_REGISTERED" || event.type === "CHECKIN_COMPLETED") {
      target.empathy += 0.025;
      target.formality -= 0.01;
    }
    if (event.type === "USER_INACTIVE") {
      target.empathy += 0.02;
      target.energy -= 0.015;
    }
    return this.easeToward(target);
  }

  adaptFromMemory(memory: ZeninMemorySnapshot): ZeninPersonalityState {
    const target = { ...this.state };
    if (memory.activeDays.length > 5) target.closeness += 0.03;
    if (memory.toolsUsed.length > 8) target.curiosity += 0.02;
    if (memory.emotionalHistory.length > 5) target.empathy += 0.02;
    return this.easeToward(target);
  }

  private easeToward(target: ZeninPersonalityState): ZeninPersonalityState {
    const step = 0.06;
    this.state = {
      empathy: ease(this.state.empathy, target.empathy, step),
      energy: ease(this.state.energy, target.energy, step),
      humor: ease(this.state.humor, target.humor, step),
      curiosity: ease(this.state.curiosity, target.curiosity, step),
      formality: ease(this.state.formality, target.formality, step),
      closeness: ease(this.state.closeness, target.closeness, step),
      updatedAt: nowIso()
    };
    return this.snapshot();
  }
}

export function createPersonalityEngine(initial?: ZeninPersonalityState): PersonalityEngine {
  return new PersonalityEngine(initial);
}

function ease(current: number, target: number, step: number): number {
  return clamp(current + (target - current) * step);
}
