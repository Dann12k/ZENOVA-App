const { writeFileSync } = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const runtimePath = path.join(root, "outputs", "zenova-web", "zenova-runtime.json");
const backendUrl = String(process.env.ZENIN_BACKEND_URL || "").trim().replace(/\/$/, "");

const payload = {
  backendUrl,
  generatedAt: new Date().toISOString(),
  deployTarget: "netlify"
};

writeFileSync(runtimePath, `${JSON.stringify(payload, null, 2)}\n`, "utf8");

if (!backendUrl) {
  console.warn("[ZENOVA] ZENIN_BACKEND_URL no esta configurado. La web se publicara, pero ZENIN IA necesitara la URL publica de Render.");
} else {
  console.log(`[ZENOVA] Frontend configurado para usar backend: ${backendUrl}`);
}
