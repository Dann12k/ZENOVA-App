/**
 * Orquestador del nucleo.
 *
 * Mantiene el flujo principal sin acoplarse a la interfaz. Cada dependencia se
 * inyecta para que ZENIN pueda crecer sin reescribir el sistema.
 */
export class ZeninBrain {
  constructor({
    eventBus,
    historyStore,
    memoryStore,
    contextBuilder,
    decisionEngine,
    interventionQueue,
    recommendationEngine,
    stateMachine,
    observationEngine,
    emotionMemoryStore,
    emotionEngine,
    relationshipEngine,
    careEngine,
    presenceEngine,
    personalityEngine,
    behaviorEngine,
    celebrationEngine,
    humorEngine,
    dailyRoutineEngine,
    proactiveEventEngine,
    achievementSystem,
    notificationEngine
  }) {
    this.eventBus = eventBus;
    this.historyStore = historyStore;
    this.memoryStore = memoryStore;
    this.contextBuilder = contextBuilder;
    this.decisionEngine = decisionEngine;
    this.interventionQueue = interventionQueue;
    this.recommendationEngine = recommendationEngine;
    this.stateMachine = stateMachine;
    this.observationEngine = observationEngine;
    this.emotionMemoryStore = emotionMemoryStore;
    this.emotionEngine = emotionEngine;
    this.relationshipEngine = relationshipEngine;
    this.careEngine = careEngine;
    this.presenceEngine = presenceEngine;
    this.personalityEngine = personalityEngine;
    this.behaviorEngine = behaviorEngine;
    this.celebrationEngine = celebrationEngine;
    this.humorEngine = humorEngine;
    this.dailyRoutineEngine = dailyRoutineEngine;
    this.proactiveEventEngine = proactiveEventEngine;
    this.achievementSystem = achievementSystem;
    this.notificationEngine = notificationEngine;
    this.latestEvent = null;
  }

  observe(eventType, payload = {}, meta = {}) {
    const event = this.eventBus.publish(eventType, payload, meta);
    this.latestEvent = event;
    this.historyStore?.append?.(event);
    this.observationEngine?.record?.(event);
    this.dailyRoutineEngine?.recordEvent?.(event);
    this.relationshipEngine?.ingestEvent?.(event);
    this.safeTransition("observing", { eventType });
    return event;
  }

  evaluate(rawSources = {}) {
    this.safeTransition("analyzing", { reason: "context-evaluation" });
    const observations = this.observationEngine?.snapshot?.(rawSources) || {};
    const emotionalPatterns = this.emotionMemoryStore?.ingestObservation?.(observations) || [];
    const relationship = this.relationshipEngine?.snapshot?.() || {};
    const routine = this.dailyRoutineEngine?.snapshot?.() || {};
    const memorySummary = {
      core: this.memoryStore?.summarize?.() || {},
      emotional: emotionalPatterns
    };
    const context = this.contextBuilder.build({ ...rawSources, memorySummary });
    const recommendations = this.recommendationEngine.suggest(context);
    const emotion = this.emotionEngine?.evaluate?.({ context, relationship, observations, latestEvent: this.latestEvent }) || null;
    const care = this.careEngine?.evaluate?.({ context, observations, relationship }) || { needsCare: false };
    const style = this.personalityEngine?.styleFor?.({ relationship, emotion: emotion || {}, context }) || {};
    const achievements = this.achievementSystem?.evaluate?.({
      event: this.latestEvent,
      context,
      observations,
      relationship
    }) || [];
    const proactiveEvents = this.proactiveEventEngine?.evaluate?.({ observations, relationship, context }) || [];
    const presence = this.presenceEngine?.evaluate?.({
      reason: achievements[0]?.id || care.topSignal?.id || proactiveEvents[0]?.proactiveEventId || this.latestEvent?.type,
      priority: Math.max(achievements[0]?.level === "major" ? 84 : 0, care.topSignal?.severity || 0, proactiveEvents[0]?.priority || 0),
      care,
      event: this.latestEvent
    }) || { allowed: false };
    const behaviorActions = this.behaviorEngine?.decide?.({
      event: this.latestEvent,
      emotion,
      care,
      presence,
      achievements
    }) || [];
    const humorPhrase = this.humorEngine?.pick?.({
      style,
      stressHigh: Number(context.recentState?.latestStressLevel || 0) >= 7,
      careActive: care.needsCare
    }) || null;
    const celebrations = achievements.map((achievement) => this.celebrationEngine?.createCelebration?.({
      achievement,
      phrase: humorPhrase || achievement.message
    })).filter(Boolean);
    const notificationCards = [
      ...celebrations.map((celebration) => this.notificationEngine?.createCard?.({
        id: celebration.id,
        message: celebration.message,
        tone: "celebration",
        priority: 78,
        animation: celebration.animation
      })),
      ...proactiveEvents.map((event) => this.notificationEngine?.createCard?.({
        id: event.id,
        message: event.message,
        tone: "calm",
        priority: event.priority,
        animation: event.animation
      }))
    ].filter(Boolean);
    const decisionContext = {
      ...context,
      events: this.historyStore?.snapshot?.().slice(0, 30) || [],
      recommendations,
      observations,
      relationship,
      routine,
      emotion,
      care,
      achievements,
      proactiveEvents,
      behaviorActions
    };
    const ruleDecisions = this.decisionEngine.evaluate(decisionContext);
    const behaviorDecisions = behaviorActions.map((action) => ({
      id: action.id,
      ruleId: action.behaviorId,
      priority: action.priority,
      interventionType: action.category,
      reason: `Behavior selected: ${action.behaviorId}`,
      cooldownMs: 7200000,
      evidence: action.payload,
      createdAt: action.createdAt
    }));
    const proactiveDecisions = proactiveEvents.map((event) => ({
      id: event.id,
      ruleId: event.proactiveEventId,
      priority: event.priority,
      interventionType: "proactive-event",
      reason: event.message,
      cooldownMs: 21600000,
      evidence: event,
      createdAt: event.createdAt
    }));
    const decisions = [...ruleDecisions, ...behaviorDecisions, ...proactiveDecisions].sort((a, b) => b.priority - a.priority);

    const queued = [];
    decisions.forEach((decision) => {
      queued.push(this.interventionQueue.enqueue(decision));
    });

    if (celebrations.length) this.safeTransition("celebrating", { celebrations: celebrations.length });
    else if (decisions.length) this.safeTransition("suggesting", { decisions: decisions.length });
    else this.safeTransition("waiting", { decisions: decisions.length });

    if (presence.allowed && presence.reason) this.presenceEngine?.markShown?.(presence.reason);

    return {
      context,
      observations,
      emotionalPatterns,
      relationship,
      routine,
      emotion,
      care,
      presence,
      style,
      recommendations,
      proactiveEvents,
      achievements,
      behaviorActions,
      celebrations,
      notificationCards,
      decisions,
      queued: queued.filter(Boolean)
    };
  }

  safeTransition(nextState, metadata = {}) {
    try {
      return this.stateMachine?.transition?.(nextState, metadata);
    } catch (error) {
      return this.stateMachine?.snapshot?.() || null;
    }
  }
}
