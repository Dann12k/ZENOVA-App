import type { Request, Response } from "express";
import { ZeninBrain } from "../brain/ZeninBrain.js";
import type { ChatRequestBody } from "../types/chat.js";

const brain = new ZeninBrain();

export async function chatController(req: Request, res: Response): Promise<void> {
  const body = req.body as ChatRequestBody;
  const response = await brain.chat({
    message: body.message.trim(),
    userId: body.userId.trim(),
    conversationId: body.conversationId.trim(),
    clientContext: body.clientContext
  });
  res.json(response);
}
