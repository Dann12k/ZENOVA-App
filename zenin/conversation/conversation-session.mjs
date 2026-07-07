/**
 * Sesion conversacional futura.
 *
 * No produce respuestas de IA. Solo estructura turnos y contexto permitido para
 * que una fase posterior pueda conectar un proveedor real.
 */
export class ZeninConversationSession {
  constructor({ id, createdAt = new Date().toISOString(), allowedContext = [] } = {}) {
    this.id = id || `conversation-${Date.now()}`;
    this.createdAt = createdAt;
    this.allowedContext = allowedContext;
    this.turns = [];
  }

  addUserDraft(text, metadata = {}) {
    const turn = {
      role: "user",
      kind: "draft",
      text: String(text || "").trim(),
      metadata,
      createdAt: new Date().toISOString()
    };
    this.turns.push(turn);
    return turn;
  }

  toEnvelope(contextSnapshot = {}) {
    return {
      id: this.id,
      createdAt: this.createdAt,
      allowedContext: this.allowedContext,
      contextSnapshot,
      turns: this.turns.map((turn) => ({ ...turn }))
    };
  }
}
