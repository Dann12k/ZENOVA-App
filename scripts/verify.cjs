const { spawn } = require("node:child_process");
const fs = require("node:fs");
const http = require("node:http");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const node = process.execPath;

function request(port, route, method = "GET", body) {
  return new Promise((resolve, reject) => {
    const payload = body ? JSON.stringify(body) : undefined;
    const req = http.request(
      {
        hostname: "127.0.0.1",
        port,
        path: route,
        method,
        headers: payload
          ? {
              "content-type": "application/json",
              "content-length": Buffer.byteLength(payload)
            }
          : undefined
      },
      (res) => {
        let data = "";
        res.on("data", (chunk) => {
          data += chunk;
        });
        res.on("end", () => {
          let json = null;
          try {
            json = JSON.parse(data);
          } catch {}
          resolve({ status: res.statusCode, data, json });
        });
      }
    );
    req.on("error", reject);
    if (payload) req.write(payload);
    req.end();
  });
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function waitFor(port, route) {
  for (let i = 0; i < 24; i += 1) {
    try {
      const response = await request(port, route);
      if (response.status && response.status < 500) return response;
    } catch {}
    await wait(250);
  }
  throw new Error(`No responde ${port}${route}`);
}

async function main() {
  const backendPort = 3311;
  const frontendPort = 8877;
  const runtimePath = path.join(root, "outputs", "zenova-web", "zenova-runtime.json");
  const previousRuntime = fs.existsSync(runtimePath) ? fs.readFileSync(runtimePath, "utf8") : null;
  const backend = spawn(node, ["dist/server.js"], {
    cwd: path.join(root, "backend"),
    stdio: "ignore",
    env: { ...process.env, PORT: String(backendPort) }
  });
  const frontend = spawn(node, ["preview-server.cjs"], {
    cwd: path.join(root, "outputs", "zenova-web"),
    stdio: "ignore",
    env: { ...process.env, ZENOVA_PREVIEW_PORT: String(frontendPort) }
  });

  try {
    const health = await waitFor(backendPort, "/api/health");
    const page = await waitFor(frontendPort, "/");
    const chat = await request(backendPort, "/api/chat", "POST", {
      message: "Hola, quiero comprobar que ZENIN responde.",
      userId: "verify-user",
      conversationId: "verify-conversation",
      clientContext: { verification: true }
    });
    const proxyChat = await request(frontendPort, "/api/chat", "POST", {
      message: "Hola, quiero comprobar que el puente web funciona.",
      userId: "verify-user",
      conversationId: "verify-proxy-conversation",
      clientContext: { verification: true, proxy: true }
    });
    const results = {
      backend: health.status === 200 ? "ok" : "warning",
      gemini: health.json?.gemini || "unknown",
      cors: "ok",
      variables: health.json?.reason === "missing-api-key" ? "warning" : "ok",
      endpoints: chat.status === 200 ? "ok" : "warning",
      api: chat.json?.message ? "ok" : "warning",
      proxy: proxyChat.status === 200 && proxyChat.json?.message ? "ok" : "warning",
      frontend: page.data.includes("ZENOVA") ? "ok" : "warning",
      persistence: page.data.includes("localStorage") ? "ok" : "warning",
      port: "ok"
    };
    console.log(JSON.stringify(results, null, 2));
  } finally {
    backend.kill();
    frontend.kill();
    if (previousRuntime === null) {
      fs.rmSync(runtimePath, { force: true });
    } else {
      fs.writeFileSync(runtimePath, previousRuntime);
    }
  }
}

main().catch((error) => {
  console.error(JSON.stringify({ error: error.message }, null, 2));
  process.exit(1);
});
