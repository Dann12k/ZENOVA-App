import type { ZeninEmotion, ZeninJsonResponse } from "../types/chat.js";

export interface EmotionViewModel {
  emotion: ZeninEmotion;
  avatarState: string;
  animation: string;
  halo: string;
  particles: "none" | "soft" | "celebration" | "concern";
  expression: string;
}

const viewModels: Record<ZeninEmotion, EmotionViewModel> = {
  happy: {
    emotion: "happy",
    avatarState: "happy",
    animation: "happy-float",
    halo: "gold-soft",
    particles: "soft",
    expression: "smile"
  },
  thinking: {
    emotion: "thinking",
    avatarState: "thinking",
    animation: "thinking-hologram",
    halo: "violet-hologram",
    particles: "soft",
    expression: "curious"
  },
  empathetic: {
    emotion: "empathetic",
    avatarState: "empathetic",
    animation: "empathetic-sway",
    halo: "violet-soft",
    particles: "concern",
    expression: "soft"
  },
  calm: {
    emotion: "calm",
    avatarState: "calm",
    animation: "calm-breathing",
    halo: "slow-violet",
    particles: "soft",
    expression: "calm"
  },
  neutral: {
    emotion: "neutral",
    avatarState: "listening",
    animation: "idle-breathing",
    halo: "violet-gold",
    particles: "none",
    expression: "neutral"
  },
  celebrating: {
    emotion: "celebrating",
    avatarState: "celebrating",
    animation: "celebrate-hop",
    halo: "confetti-glow",
    particles: "celebration",
    expression: "wide-smile"
  },
  concerned: {
    emotion: "concerned",
    avatarState: "concerned",
    animation: "concerned-sway",
    halo: "dim-violet",
    particles: "concern",
    expression: "concerned"
  }
};

export class EmotionEngine {
  fromResponse(response: ZeninJsonResponse): EmotionViewModel {
    if (response.celebrate || response.showConfetti) return viewModels.celebrating;
    return viewModels[response.emotion] || viewModels.neutral;
  }
}
