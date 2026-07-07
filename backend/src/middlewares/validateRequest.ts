import type { NextFunction, Request, Response } from "express";
import type { ChatRequestBody } from "../types/chat.js";
import { ValidationError } from "../utils/errors.js";

export function validateChatRequest(req: Request, _res: Response, next: NextFunction): void {
  const body = req.body as Partial<ChatRequestBody>;
  if (!body || typeof body !== "object") throw new ValidationError("La solicitud debe ser JSON.");
  if (typeof body.message !== "string" || !body.message.trim()) throw new ValidationError("message es obligatorio.");
  if (body.message.length > 1200) throw new ValidationError("message no puede superar 1200 caracteres.");
  if (typeof body.userId !== "string" || !body.userId.trim()) throw new ValidationError("userId es obligatorio.");
  if (body.userId.length > 120) throw new ValidationError("userId es demasiado largo.");
  if (typeof body.conversationId !== "string" || !body.conversationId.trim()) {
    throw new ValidationError("conversationId es obligatorio.");
  }
  if (body.conversationId.length > 160) throw new ValidationError("conversationId es demasiado largo.");
  if (body.clientContext !== undefined && (!body.clientContext || typeof body.clientContext !== "object" || Array.isArray(body.clientContext))) {
    throw new ValidationError("clientContext debe ser un objeto JSON.");
  }
  next();
}
