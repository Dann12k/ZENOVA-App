import type { NextFunction, Request, Response } from "express";
import { createRequestId, logger } from "../utils/logger.js";

export function requestLogger(req: Request, res: Response, next: NextFunction): void {
  const startedAt = Date.now();
  const requestId = createRequestId();
  res.setHeader("X-Request-Id", requestId);
  res.on("finish", () => {
    logger.info("request", {
      requestId,
      method: req.method,
      path: req.path,
      status: res.statusCode,
      durationMs: Date.now() - startedAt
    }, "api");
  });
  next();
}
