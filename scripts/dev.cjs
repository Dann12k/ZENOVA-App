const { spawn } = require("node:child_process");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const node = process.execPath;

function run(label, cwd, args) {
  const child = spawn(node, args, {
    cwd,
    stdio: "inherit",
    windowsHide: false
  });
  child.on("exit", (code) => {
    if (code) console.warn(`[ZENOVA:${label}] proceso finalizado con codigo ${code}`);
  });
  return child;
}

console.log("[ZENOVA] Iniciando frontend y backend...");
run("backend", path.join(root, "backend"), ["dist/server.js"]);
run("frontend", path.join(root, "outputs", "zenova-web"), ["preview-server.cjs"]);
console.log("[ZENOVA] Frontend: http://127.0.0.1:8787");
console.log("[ZENOVA] Backend health: http://127.0.0.1:3001/api/health");
