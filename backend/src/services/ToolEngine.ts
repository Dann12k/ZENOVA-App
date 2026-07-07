import type { SuggestedTool, ZeninJsonResponse } from "../types/chat.js";

export interface ToolAction {
  key: SuggestedTool;
  panel: string;
  label: string;
  autoOpen: boolean;
}

const toolMap: Record<Exclude<SuggestedTool, "">, ToolAction> = {
  breathing: { key: "breathing", panel: "action-breathing", label: "Respiracion guiada", autoOpen: true },
  journal: { key: "journal", panel: "habits", label: "Diario emocional", autoOpen: true },
  sleep: { key: "sleep", panel: "program-sleep", label: "Rutina de sueno", autoOpen: true },
  meditation: { key: "meditation", panel: "action-meditation", label: "Meditacion", autoOpen: true },
  focus: { key: "focus", panel: "program-focus", label: "Concentracion", autoOpen: true },
  grounding: { key: "grounding", panel: "action-grounding", label: "Anclaje sensorial", autoOpen: true },
  movement: { key: "movement", panel: "action-movement", label: "Pausa activa", autoOpen: true }
};

export class ToolEngine {
  fromResponse(response: ZeninJsonResponse): ToolAction | null {
    if (!response.suggestedTool) return null;
    return toolMap[response.suggestedTool] || null;
  }
}
