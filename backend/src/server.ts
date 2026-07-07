import cors from "cors";
import express from "express";
import { writeFile } from "node:fs/promises";
import type { Server } from "node:http";
import net from "node:net";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { corsOptions } from "./config/cors.js";
import { env, hasGeminiApiKey } from "./config/env.js";
import { errorMiddleware, notFoundMiddleware } from "./middlewares/errorMiddleware.js";
import { requestLogger } from "./middlewares/requestLogger.js";
import { chatRoutes } from "./routes/chatRoutes.js";
import { healthRoutes } from "./routes/healthRoutes.js";
import { checkGeminiHealth } from "./services/GeminiHealthService.js";
import { logger } from "./utils/logger.js";

const app = express();
const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..");

app.disable("x-powered-by");
app.use(cors(corsOptions));
app.options("*", cors(corsOptions));
app.use(express.json({ limit: "128kb" }));
app.use(requestLogger);

app.use("/api", healthRoutes);
app.use("/api", chatRoutes);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

process.on("unhandledRejection", (error) => {
  logger.error("Promesa no controlada capturada sin cerrar servidor.", { message: error instanceof Error ? error.message : String(error) }, "backend");
});

process.on("uncaughtException", (error) => {
  logger.error("Error no controlado capturado sin exponer detalles al usuario.", { message: error.message }, "backend");
});

function listenOnAvailablePort(port: number, attempts = 20): Promise<{ server: Server; port: number }> {
  return isPortReachable(port).then((occupied) => {
    if (occupied && attempts > 0) {
      logger.warn(`Puerto ${port} ocupado. Probando ${port + 1}.`, {}, "backend");
      return listenOnAvailablePort(port + 1, attempts - 1);
    }
    return new Promise((resolve, reject) => {
      const server = app.listen(port, "0.0.0.0");
      server.once("listening", () => resolve({ server, port }));
      server.once("error", (error: NodeJS.ErrnoException) => {
        server.close();
        if (error.code === "EADDRINUSE" && attempts > 0) {
          logger.warn(`Puerto ${port} ocupado. Probando ${port + 1}.`, {}, "backend");
          listenOnAvailablePort(port + 1, attempts - 1).then(resolve).catch(reject);
          return;
        }
        reject(error);
      });
    });
  });
}

function isPortReachable(port: number): Promise<boolean> {
  return new Promise((resolve) => {
    const socket = net.createConnection({ host: "127.0.0.1", port });
    socket.once("connect", () => {
      socket.destroy();
      resolve(true);
    });
    socket.once("error", () => {
      socket.destroy();
      resolve(false);
    });
    socket.setTimeout(350, () => {
      socket.destroy();
      resolve(false);
    });
  });
}

async function start(): Promise<void> {
  const { port } = await listenOnAvailablePort(env.port);
  await writeRuntimeConfig(port);
  const gemini = await checkGeminiHealth().catch(() => ({ status: "offline" as const }));

  logger.success("ZENIN Backend iniciado.", {}, "backend");
  logger.info(`Puerto: ${port}`, {}, "backend");
  logger[gemini.status === "online" ? "success" : "warn"](
    gemini.status === "online" ? "Gemini conectado" : hasGeminiApiKey() ? "Gemini offline. ZENIN funcionara en modo reducido." : "Falta GEMINI_API_KEY. ZENIN funcionara en modo reducido.",
    { provider: env.aiProvider, model: env.geminiModel },
    "gemini"
  );
  logger.info("Esperando solicitudes...", {}, "api");
}

async function writeRuntimeConfig(port: number): Promise<void> {
  const configPath = path.resolve(projectRoot, "outputs", "zenova-web", "zenova-runtime.json");
  const payload = {
    backendUrl: `http://localhost:${port}`,
    port,
    generatedAt: new Date().toISOString()
  };
  await writeFile(configPath, JSON.stringify(payload, null, 2), "utf8").catch(() => {
    logger.warn("No se pudo escribir zenova-runtime.json. El frontend usara configuracion por defecto.", {}, "backend");
  });
}

start().catch((error) => {
  logger.error("No fue posible iniciar Express.", { message: error instanceof Error ? error.message : String(error) }, "backend");
});
