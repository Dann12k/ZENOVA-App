import { ZeninAnimationController } from "./animation-controller.mjs";
import { ZeninEffectController } from "./effect-controller.mjs";
import { ZeninEntranceController } from "./entrance-controller.mjs";
import { ZeninExpressionController } from "./expression-controller.mjs";
import { ZeninSpeechBubbleController } from "./speech-bubble-controller.mjs";

/**
 * Controlador de avatar.
 *
 * No dibuja nada en pantalla. Convierte el estado interno de ZENIN en una
 * instruccion visual que la UI podra renderizar en una fase posterior.
 */
export class ZeninAvatarController {
  constructor({
    avatarConfig = {},
    animationMap = {},
    animationController = new ZeninAnimationController(),
    expressionController = new ZeninExpressionController(),
    effectController = new ZeninEffectController(),
    speechBubbleController = new ZeninSpeechBubbleController(),
    entranceController = new ZeninEntranceController()
  } = {}) {
    this.avatarConfig = avatarConfig;
    this.animationMap = animationMap;
    this.animationController = animationController;
    this.expressionController = expressionController;
    this.effectController = effectController;
    this.speechBubbleController = speechBubbleController;
    this.entranceController = entranceController;
  }

  frameForState(stateSnapshot, options = {}) {
    const stateName = stateSnapshot?.name || "inactive";
    const stateAnimation = this.animationMap.states?.[stateName] || {};

    return {
      state: stateName,
      visible: Boolean(options.forceVisible || stateAnimation.visible),
      expression: stateAnimation.expression || "neutral",
      posture: stateAnimation.posture || "idle",
      animationKey: stateAnimation.animationKey || "avatar.idle",
      renderer: stateAnimation.renderer || "css-fallback",
      theme: options.theme || this.avatarConfig.defaultTheme || "zenova-premium",
      accessibilityLabel: stateAnimation.accessibilityLabel || "ZENIN en espera"
    };
  }

  frameForSignal(signal = {}) {
    const emotion = signal.emotion || "calm";
    const animationState = signal.animationState || emotion;
    return {
      emotion,
      gesture: signal.gesture || "idle",
      animation: this.animationController.animationFor(animationState, signal.animationOptions),
      expressionModel: this.expressionController.expressionFor(emotion),
      effects: this.effectController.effectsFor(animationState),
      speechBubble: signal.text ? this.speechBubbleController.buildBubble({ text: signal.text, tone: signal.tone }) : null,
      entrance: signal.entrance || this.entranceController.nextEntrance(),
      exit: signal.exit || this.entranceController.nextExit(),
      animationKey: signal.animation || "avatar.idle",
      celebration: signal.celebration || null,
      thinking: Boolean(signal.thinking),
      talking: Boolean(signal.talking),
      walking: Boolean(signal.walking),
      floating: signal.floating !== false,
      sleeping: Boolean(signal.sleeping),
      expression: signal.expression || "neutral",
      glowIntensity: signal.glowIntensity ?? 0.32
    };
  }
}
