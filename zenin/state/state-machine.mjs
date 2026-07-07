/**
 * Maquina de estados de ZENIN.
 *
 * Valida transiciones contra configuracion. Esto evita que la logica de estados
 * quede repartida por la aplicacion.
 */
export class ZeninStateMachine {
  constructor({ states = {}, initialState = "inactive", now = () => Date.now() } = {}) {
    this.states = states;
    this.now = now;
    this.currentState = {
      name: initialState,
      enteredAt: new Date(this.now()).toISOString(),
      metadata: {}
    };
  }

  snapshot() {
    return {
      ...this.currentState,
      definition: this.states[this.currentState.name] || null
    };
  }

  canTransition(nextState) {
    if (this.currentState.name === nextState) return true;
    const currentDefinition = this.states[this.currentState.name];
    if (!currentDefinition) return true;
    return (currentDefinition.allowedTransitions || []).includes(nextState);
  }

  transition(nextState, metadata = {}) {
    if (!this.canTransition(nextState)) {
      throw new Error(`Invalid ZENIN state transition: ${this.currentState.name} -> ${nextState}`);
    }
    this.currentState = {
      name: nextState,
      enteredAt: new Date(this.now()).toISOString(),
      metadata
    };
    return this.snapshot();
  }
}
