import type { CorsOptions } from "cors";
import { env } from "./env.js";

const defaultAllowedOrigins = [
  /^http:\/\/localhost(?::\d+)?$/,
  /^http:\/\/127\.0\.0\.1(?::\d+)?$/,
  /^http:\/\/0\.0\.0\.0(?::\d+)?$/,
  /^https:\/\/.+\.github\.io$/,
  /^https:\/\/.+\.netlify\.app$/,
  /^https:\/\/.+\.vercel\.app$/,
  /^https:\/\/.+\.railway\.app$/,
  /^https:\/\/.+\.onrender\.com$/
];

const configuredOrigins = env.corsOrigin === "*" ? [] : env.corsOrigin.split(",").map((item) => item.trim()).filter(Boolean);

function isAllowedOrigin(origin?: string): boolean {
  if (!origin) return true;
  if (configuredOrigins.includes(origin)) return true;
  return defaultAllowedOrigins.some((item) => item.test(origin));
}

export const corsOptions: CorsOptions = {
  origin(origin, callback) {
    callback(null, isAllowedOrigin(origin));
  },
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
  optionsSuccessStatus: 204,
  credentials: false
};
