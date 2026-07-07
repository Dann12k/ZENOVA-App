import type { Request, Response } from "express";
import { env } from "../config/env.js";
import { checkGeminiHealth } from "../services/GeminiHealthService.js";

export async function healthController(_req: Request, res: Response): Promise<void> {
  const gemini = await checkGeminiHealth().catch(() => ({
    status: "offline" as const,
    checkedAt: new Date().toISOString(),
    reason: "health-check-failed"
  }));
  res.status(200).json({
    status: gemini.status === "online" ? "ok" : "warning",
    backend: "online",
    gemini: gemini.status,
    provider: env.aiProvider,
    model: env.geminiModel,
    timestamp: new Date().toISOString(),
    reason: gemini.reason
  });
}
