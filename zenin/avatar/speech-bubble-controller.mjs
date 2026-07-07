/**
 * SpeechBubbleController
 *
 * Define burbujas expresivas con escritura progresiva. No usa alertas del
 * navegador y no genera el texto por su cuenta.
 */
export class ZeninSpeechBubbleController {
  buildBubble({ text = "", tone = "calm", actions = [], media = null } = {}) {
    return {
      type: "speech-bubble",
      text,
      tone,
      actions,
      media,
      supportsTypewriter: true,
      supportsCursor: true,
      canAutoDismiss: true,
      surface: "glass-blur-glow"
    };
  }
}
