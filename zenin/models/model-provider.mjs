/**
 * Contrato abstracto para proveedores de IA.
 *
 * Ningun modulo de ZENIN debe depender directamente de OpenAI. Un proveedor
 * real implementara esta interfaz en una fase posterior.
 */
export class ZeninModelProvider {
  constructor({ id, capabilities = {} } = {}) {
    this.id = id || "abstract-provider";
    this.capabilities = capabilities;
  }

  status() {
    return {
      id: this.id,
      connected: false,
      capabilities: this.capabilities
    };
  }

  async generate() {
    throw new Error("No model provider is connected for ZENIN.");
  }
}

export class NoConnectedModelProvider extends ZeninModelProvider {
  constructor() {
    super({
      id: "no-connected-provider",
      capabilities: {
        streaming: false,
        toolCalling: false,
        memory: false
      }
    });
  }

  status() {
    return {
      ...super.status(),
      reason: "ZENIN architecture is prepared, but no AI provider is connected."
    };
  }
}
