import { Router } from "express";
import { chatController } from "../controllers/chatController.js";
import { validateChatRequest } from "../middlewares/validateRequest.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const chatRoutes = Router();

chatRoutes.post("/chat", validateChatRequest, asyncHandler(chatController));
