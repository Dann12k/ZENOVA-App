/**
 * Motor de decisiones.
 *
 * Devuelve oportunidades, no mensajes. Las reglas son configurables para evitar
 * condiciones dispersas por la aplicacion.
 */
export class ZeninDecisionEngine {
  constructor({ rules = [] } = {}) {
    this.rules = rules;
  }

  evaluate(context = {}) {
    return this.rules
      .filter((rule) => rule.enabled !== false)
      .map((rule) => this.evaluateRule(rule, context))
      .filter(Boolean)
      .sort((a, b) => b.priority - a.priority);
  }

  evaluateRule(rule, context) {
    const matched = rule.eventType
      ? this.hasEvent(context, rule.eventType)
      : this.matchesCondition(rule.condition, context);

    if (!matched) return null;

    return {
      id: `${rule.id}-${Date.now()}`,
      ruleId: rule.id,
      priority: Number(rule.priority || 0),
      interventionType: rule.interventionType,
      reason: rule.reason,
      cooldownMs: Number(rule.cooldownMs || 0),
      evidence: matched === true ? {} : matched,
      createdAt: new Date().toISOString()
    };
  }

  hasEvent(context, eventType) {
    return (context.events || []).some((event) => event.type === eventType);
  }

  matchesCondition(condition, context) {
    if (!condition) return false;
    if (condition.type === "goal_progress_min") {
      const goal = (context.goals || []).find((item) => Number(item.progress || 0) >= Number(condition.value));
      return goal ? { goalId: goal.id, progress: goal.progress } : false;
    }
    if (condition.type === "emotional_trend") {
      return context.recentState?.emotionalTrend === condition.value ? { trend: condition.value } : false;
    }
    if (condition.type === "inactivity_days_min") {
      return Number(context.recentState?.inactiveDays || 0) >= Number(condition.value)
        ? { inactiveDays: context.recentState.inactiveDays }
        : false;
    }
    return false;
  }
}
