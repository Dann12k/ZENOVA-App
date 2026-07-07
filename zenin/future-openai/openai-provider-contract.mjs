import { ZeninModelProvider } from "../models/model-provider.mjs";

/**
 * Contrato del proveedor OpenAI futuro.
 *
 * No contiene API key, no realiza llamadas de red y no genera respuestas. Su
 * existencia garantiza que OpenAI sea reemplazable y subordinado a ZENIN.
 */
export class FutureOpenAIProviderContract extends ZeninModelProvider {
  constructor(config = {}) {
    super({
      id: "future-openai",
      capabilities: {
        streaming: true,
        toolCalling: false,
        controlledByZenin: true,
        canControlAvatar: false,
        canControlPresence: false,
        canControlPersonality: false,
        canReadRawData: false,
        ...config.capabilities
      }
    });
    this.config = config;
  }

  buildRequestEnvelope({ promptType, synthesizedContext, userText }) {
    return {
      provider: this.id,
      promptType,
      synthesizedContext,
      userText,
      constraints: {
        noDiagnosis: true,
        noMedicalPromises: true,
        respectZeninPersonality: true,
        useOnlyProvidedContext: true
      },
      readyForNetwork: false
    };
  }
}
