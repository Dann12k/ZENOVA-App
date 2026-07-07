import type { NextFunction, Request, Response } from "express";
import { AppError } from "../utils/errors.js";
import { logger } from "../utils/logger.js";

interface HttpBodyError extends Error {
  status?: number;
  type?: string;
  expose?: boolean;
  limit?: number;
  length?: number;
}

export function notFoundMiddleware(req: Request, _res: Response, next: NextFunction): void {
  next(new AppError(`Ruta no encontrada: ${req.method} ${req.path}`, 404, "NOT_FOUND", true));
}

export function errorMiddleware(error: Error, req: Request, res: Response, _next: NextFunction): void {
  const appError = normalizeError(error);
  if (!appError.expose) {
    logger.error(appError.message, {
      code: appError.code,
      method: req.method,
      path: req.path,
      cause: error.message,
      name: error.name
    }, "api");
  }
  res.status(appError.statusCode).json({
    error: {
      code: appError.code,
      message: appError.expose ? appError.message : "Ocurrio un problema interno. Intenta nuevamente."
    }
  });
}

function normalizeError(error: Error): AppError {
  if (error instanceof AppError) return error;

  const bodyError = error as HttpBodyError;
  if (bodyError.type === "entity.too.large" || bodyError.status === 413) {
    return new AppError("El contexto enviado al chat es demasiado grande. Intenta nuevamente.", 413, "PAYLOAD_TOO_LARGE", true);
  }

  if (bodyError.status && bodyError.status >= 400 && bodyError.status < 500 && bodyError.expose) {
    return new AppError(bodyError.message, bodyError.status, "BAD_REQUEST", true);
  }

  return new AppError("Error interno del servidor");
}
