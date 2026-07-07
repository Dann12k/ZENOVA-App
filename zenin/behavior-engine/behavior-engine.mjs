/**
 * Decide acciones de ZENIN sin generar texto final.
 */
export class ZeninBehaviorEngine {
  decide({ event = null, emotion = {}, care = {}, presence = {}, achievements = [] } = {}) {
    const actions = [];

    if (!presence.allowed) return actions;

    if (achievements.length) {
      actions.push(this.action("celebrate-achievement", 78, "achievement", { achievements }));
    }

    if (event?.type === "tool.completed") {
      actions.push(this.action("celebrate-tool-completion", 68, "celebration", { tool: event.payload?.key }));
    }

    if (care.needsCare) {
      actions.push(this.action("gentle-care-check", 82, "care", { signal: care.topSignal }));
    }

    if (emotion.name === "happy" || emotion.name === "proud") {
      actions.push(this.action("reinforce-progress", 56, "motivation", { emotion: emotion.name }));
    }

    return actions.sort((a, b) => b.priority - a.priority);
  }

  action(id, priority, category, payload = {}) {
    return {
      id: `${id}-${Date.now()}`,
      behaviorId: id,
      category,
      priority,
      payload,
      createdAt: new Date().toISOString()
    };
  }
}
