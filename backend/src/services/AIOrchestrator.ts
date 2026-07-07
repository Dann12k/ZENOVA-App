export interface OrchestratorDecision {
  needsAI: boolean;
  reason: string;
}

export class AIOrchestrator {
  decide(message: string): OrchestratorDecision {
    const trimmed = message.trim();
    if (!trimmed) return { needsAI: false, reason: "empty" };
    return { needsAI: true, reason: "conversation-with-context" };
  }
}
