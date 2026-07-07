/**
 * Genera eventos proactivos candidatos.
 */
export class ZeninProactiveEventEngine {
  constructor({ events = [] } = {}) {
    this.events = events;
  }

  evaluate({ observations = {}, relationship = {}, context = {} } = {}) {
    return this.events
      .map((event) => (this.matches(event.condition, { observations, relationship, context }) ? this.toCandidate(event) : null))
      .filter(Boolean);
  }

  toCandidate(event) {
    return {
      id: `proactive-${event.id}-${Date.now()}`,
      proactiveEventId: event.id,
      priority: 62,
      animation: event.animation,
      message: event.message,
      expression: event.expression,
      farewell: event.farewell,
      createdAt: new Date().toISOString()
    };
  }

  matches(condition = "", { observations, relationship, context }) {
    const [name, rawValue] = condition.split(":");
    if (name === "inactive_days_min") return Number(context.recentState?.inactiveDays || 0) >= Number(rawValue);
    if (name === "habit_days_min") return Number(relationship.consistency || 0) >= 30 || Number(context.habitDays || 0) >= Number(rawValue);
    if (name === "goal_completed_first") return (context.goals || []).some((goal) => Number(goal.progress || 0) >= 100);
    if (name === "best_week") return Boolean(observations.bestWeek);
    if (name === "important_change") return Boolean(observations.newPatternDetected);
    return false;
  }
}
