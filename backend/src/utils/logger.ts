type LogLevel = "info" | "warn" | "error" | "success";
type LogScope = "backend" | "frontend" | "gemini" | "api" | "system";

const levelColor: Record<LogLevel, string> = {
  info: "\x1b[36m",
  warn: "\x1b[33m",
  error: "\x1b[31m",
  success: "\x1b[32m"
};

const reset = "\x1b[0m";
const sensitivePattern = /(api[_-]?key|token|secret|password|authorization|gemini_api_key)/i;

function sanitize(meta: Record<string, unknown>): Record<string, unknown> {
  return Object.fromEntries(
    Object.entries(meta)
      .filter(([key]) => !sensitivePattern.test(key))
      .map(([key, value]) => [key, typeof value === "string" && value.length > 120 ? `${value.slice(0, 120)}...` : value])
  );
}

function write(level: LogLevel, scope: LogScope, message: string, meta: Record<string, unknown> = {}): void {
  const safeMeta = sanitize(meta);
  const payload = Object.keys(safeMeta).length ? ` ${JSON.stringify(safeMeta)}` : "";
  const prefix = `${levelColor[level]}[ZENOVA:${scope.toUpperCase()}:${level.toUpperCase()}]${reset}`;
  const line = `${prefix} ${new Date().toISOString()} ${message}${payload}`;
  if (level === "error") {
    console.error(line);
    return;
  }
  if (level === "warn") {
    console.warn(line);
    return;
  }
  console.log(line);
}

export const logger = {
  info: (message: string, meta?: Record<string, unknown>, scope: LogScope = "system") => write("info", scope, message, meta),
  warn: (message: string, meta?: Record<string, unknown>, scope: LogScope = "system") => write("warn", scope, message, meta),
  error: (message: string, meta?: Record<string, unknown>, scope: LogScope = "system") => write("error", scope, message, meta),
  success: (message: string, meta?: Record<string, unknown>, scope: LogScope = "system") => write("success", scope, message, meta)
};

export function createRequestId(): string {
  return `req-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}
