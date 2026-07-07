import { env, hasGeminiApiKey } from "../config/env.js";

export interface GeminiHealthStatus {
  status: "online" | "offline";
  checkedAt: string;
  reason?: string;
}

let cached: GeminiHealthStatus | null = null;
let cachedAt = 0;

export async function checkGeminiHealth(timeoutMs = 2500): Promise<GeminiHealthStatus> {
  if (!hasGeminiApiKey()) {
    return {
      status: "offline",
      checkedAt: new Date().toISOString(),
      reason: "missing-api-key"
    };
  }

  if (cached && Date.now() - cachedAt < 30000) return cached;

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(env.geminiModel)}?key=${encodeURIComponent(env.geminiApiKey)}`,
      { method: "GET", signal: controller.signal }
    );
    cached = {
      status: response.ok ? "online" : "offline",
      checkedAt: new Date().toISOString(),
      reason: response.ok ? undefined : `http-${response.status}`
    };
    cachedAt = Date.now();
    return cached;
  } catch (error) {
    cached = {
      status: "offline",
      checkedAt: new Date().toISOString(),
      reason: error instanceof Error && error.name === "AbortError" ? "timeout" : "network-error"
    };
    cachedAt = Date.now();
    return cached;
  } finally {
    clearTimeout(timer);
  }
}
