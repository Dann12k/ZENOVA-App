import { ZeninAvatarController } from "../avatar/avatar-controller.mjs";
import { ZeninAchievementSystem } from "../achievement-system/achievement-system.mjs";
import { ZeninBehaviorEngine } from "../behavior-engine/behavior-engine.mjs";
import { ZeninBrain } from "../brain/zenin-brain.mjs";
import { ZeninCareEngine } from "../care-engine/care-engine.mjs";
import { ZeninCelebrationEngine } from "../celebration-engine/celebration-engine.mjs";
import { ZeninContextBuilder } from "../context/context-builder.mjs";
import { ZeninDecisionEngine } from "../decision-engine/decision-engine.mjs";
import { ZeninDailyRoutineEngine } from "../daily-routine/daily-routine-engine.mjs";
import { ZeninEmotionEngine } from "../emotion-engine/emotion-engine.mjs";
import { ZeninEmotionMemoryStore } from "../emotion-memory/emotion-memory-store.mjs";
import { ZeninEventBus } from "../events/event-bus.mjs";
import { FutureOpenAIProviderContract } from "../future-openai/openai-provider-contract.mjs";
import { ZeninHistoryStore } from "../history/history-store.mjs";
import { ZeninHumorEngine } from "../humor-engine/humor-engine.mjs";
import { ZeninMemoryStore } from "../memory/memory-store.mjs";
import { NoConnectedModelProvider } from "../models/model-provider.mjs";
import { ZeninNotificationEngine } from "../notification-engine/notification-engine.mjs";
import { ZeninObservationEngine } from "../observation-engine/observation-engine.mjs";
import { ZeninPersonalityEngine } from "../personality-engine/personality-engine.mjs";
import { ZeninPresenceEngine } from "../presence-engine/presence-engine.mjs";
import { ZeninProactiveEventEngine } from "../proactive-events/proactive-event-engine.mjs";
import { ZeninRecommendationEngine } from "../recommendations/recommendation-engine.mjs";
import { ZeninRelationshipEngine } from "../relationship-engine/relationship-engine.mjs";
import { ZeninInterventionQueue } from "../scheduler/intervention-queue.mjs";
import { ZeninStateMachine } from "../state/state-machine.mjs";
import { ZeninVoiceReadyService } from "../voice-ready/voice-ready-service.mjs";

/**
 * Crea el nucleo de ZENIN sin montar UI y sin conectar IA.
 */
export function createZeninCoreService(config = {}) {
  const eventBus = config.eventBus || new ZeninEventBus();
  const historyStore = config.historyStore || new ZeninHistoryStore(config.history);
  const memoryStore = config.memoryStore || new ZeninMemoryStore({ policy: config.memoryPolicy });
  const contextBuilder = config.contextBuilder || new ZeninContextBuilder(config.context);
  const decisionEngine = config.decisionEngine || new ZeninDecisionEngine({ rules: config.decisionRules || [] });
  const interventionQueue = config.interventionQueue || new ZeninInterventionQueue();
  const recommendationEngine = config.recommendationEngine || new ZeninRecommendationEngine({ catalog: config.recommendationCatalog || [] });
  const stateMachine = config.stateMachine || new ZeninStateMachine({ states: config.states || {} });
  const avatarController = config.avatarController || new ZeninAvatarController({ avatarConfig: config.avatarConfig, animationMap: config.animationMap });
  const modelProvider = config.modelProvider || new NoConnectedModelProvider();
  const futureOpenAIProvider = config.futureOpenAIProvider || new FutureOpenAIProviderContract(config.futureOpenAI);
  const observationEngine = config.observationEngine || new ZeninObservationEngine();
  const emotionMemoryStore = config.emotionMemoryStore || new ZeninEmotionMemoryStore(config.emotionMemory);
  const emotionEngine = config.emotionEngine || new ZeninEmotionEngine({ states: config.emotionStates || {} });
  const relationshipEngine = config.relationshipEngine || new ZeninRelationshipEngine(config.relationship);
  const careEngine = config.careEngine || new ZeninCareEngine();
  const presenceEngine = config.presenceEngine || new ZeninPresenceEngine(config.presence);
  const personalityEngine = config.personalityEngine || new ZeninPersonalityEngine({ config: config.personality || {} });
  const behaviorEngine = config.behaviorEngine || new ZeninBehaviorEngine();
  const celebrationEngine = config.celebrationEngine || new ZeninCelebrationEngine();
  const humorEngine = config.humorEngine || new ZeninHumorEngine(config.humor);
  const dailyRoutineEngine = config.dailyRoutineEngine || new ZeninDailyRoutineEngine();
  const proactiveEventEngine = config.proactiveEventEngine || new ZeninProactiveEventEngine({ events: config.proactiveEvents || [] });
  const achievementSystem = config.achievementSystem || new ZeninAchievementSystem({ achievements: config.achievements || [] });
  const notificationEngine = config.notificationEngine || new ZeninNotificationEngine(config.notifications);
  const voiceReadyService = config.voiceReadyService || new ZeninVoiceReadyService();

  const brain = new ZeninBrain({
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
  });

  return {
    status: "prepared-not-connected",
    brain,
    eventBus,
    historyStore,
    memoryStore,
    contextBuilder,
    decisionEngine,
    interventionQueue,
    recommendationEngine,
    stateMachine,
    avatarController,
    modelProvider,
    futureOpenAIProvider,
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
    notificationEngine,
    voiceReadyService
  };
}
