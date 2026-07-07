/**
 * Sistema de logros saludables.
 */
export class ZeninAchievementSystem {
  constructor({ achievements = [] } = {}) {
    this.achievements = achievements;
    this.unlocked = new Set();
  }

  evaluate({ event = null, context = {}, observations = {}, relationship = {} } = {}) {
    return this.achievements
      .filter((achievement) => !this.unlocked.has(achievement.id))
      .filter((achievement) => this.matches(achievement.condition, { event, context, observations, relationship }))
      .map((achievement) => {
        this.unlocked.add(achievement.id);
        return {
          ...achievement,
          unlockedAt: new Date().toISOString()
        };
      });
  }

  matches(condition = "", { event, context, observations, relationship }) {
    const [name, rawValue] = condition.split(":");
    if (name === "tool_completed") return event?.type === "tool.completed" && event.payload?.key === rawValue;
    if (name === "active_days_min") return Number(relationship.daysKnown || 0) >= Number(rawValue);
    if (name === "records_min") return Number(context.recentState?.checkinCount || 0) >= Number(rawValue);
    if (name === "goal_completed_first") return (context.goals || []).some((goal) => Number(goal.progress || 0) >= 100);
    if (name === "habits_min") return (context.habits || []).length >= Number(rawValue);
    if (name === "sleep_improved") return Boolean(observations.sleepImproved);
    if (name === "stress_reduced") return context.recentState?.emotionalTrend === "improving";
    return false;
  }
}
