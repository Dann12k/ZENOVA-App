import { hourFromIso } from "../utils/guards.mjs";

/**
 * Aprende rutinas simples por hora del dia.
 */
export class ZeninDailyRoutineEngine {
  constructor() {
    this.hourCounts = new Map();
  }

  recordEvent(event) {
    const hour = hourFromIso(event.createdAt);
    if (hour === null) return this.snapshot();
    this.hourCounts.set(hour, (this.hourCounts.get(hour) || 0) + 1);
    return this.snapshot();
  }

  snapshot(date = new Date()) {
    const currentHour = date.getHours();
    const habitualHour = [...this.hourCounts.entries()].sort((a, b) => b[1] - a[1])[0]?.[0] ?? null;
    return {
      habitualHour,
      currentMoment: this.momentForHour(currentHour),
      shouldSuggestRest: currentHour >= 22 || currentHour <= 4,
      shouldAskDayReview: currentHour >= 17 && currentHour <= 21
    };
  }

  momentForHour(hour) {
    if (hour >= 5 && hour < 12) return "morning";
    if (hour >= 12 && hour < 17) return "afternoon";
    if (hour >= 17 && hour < 22) return "evening";
    return "night";
  }
}
