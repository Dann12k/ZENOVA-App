const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const root = __dirname;
const preferredPort = Number(process.env.ZENOVA_PREVIEW_PORT || 8787);
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml"
};

function readBackendUrl() {
  const fallback = `http://127.0.0.1:${process.env.PORT || 3001}`;
  try {
    const runtimePath = path.join(root, "zenova-runtime.json");
    const runtime = JSON.parse(fs.readFileSync(runtimePath, "utf8"));
    return runtime.backendUrl || fallback;
  } catch (error) {
    return fallback;
  }
}

function proxyApiRequest(req, res) {
  const target = new URL(readBackendUrl());
  const proxy = http.request(
    {
      hostname: target.hostname,
      port: target.port || 80,
      path: req.url,
      method: req.method,
      headers: {
        ...req.headers,
        host: target.host
      }
    },
    (proxyRes) => {
      res.writeHead(proxyRes.statusCode || 502, proxyRes.headers);
      proxyRes.pipe(res);
    }
  );

  proxy.on("error", () => {
    res.writeHead(502, { "content-type": "application/json; charset=utf-8" });
    res.end(JSON.stringify({ error: { code: "ZENOVA_PROXY_OFFLINE", message: "Backend ZENIN no disponible." } }));
  });

  req.pipe(proxy);
}

function createServer(port) {
  return http.createServer((req, res) => {
    let route = "/";
    try {
      route = decodeURIComponent(new URL(req.url, `http://127.0.0.1:${port}`).pathname);
    } catch (error) {
      route = "/";
    }

    if (route === "/api" || route.startsWith("/api/")) {
      proxyApiRequest(req, res);
      return;
    }

    if (route === "/") route = "/index.html";
    const filePath = path.resolve(root, `.${route}`);

    if (!filePath.startsWith(root)) {
      res.writeHead(403);
      res.end("Forbidden");
      return;
    }

    fs.readFile(filePath, (error, data) => {
      if (error) {
        res.writeHead(404);
        res.end("Not found");
        return;
      }
      res.writeHead(200, {
        "content-type": types[path.extname(filePath).toLowerCase()] || "application/octet-stream",
        "cache-control": "no-store"
      });
      res.end(data);
    });
  });
}

function listen(port, attempts = 20) {
  const server = createServer(port);
  server.once("error", (error) => {
    if (error.code === "EADDRINUSE" && attempts > 0) {
      console.warn(`[ZENOVA:FRONTEND:WARN] Puerto ${port} ocupado. Probando ${port + 1}.`);
      listen(port + 1, attempts - 1);
      return;
    }
    console.error("[ZENOVA:FRONTEND:ERROR] No fue posible iniciar vista previa.", error.message);
  });
  server.listen(port, "127.0.0.1", () => {
    console.log(`[ZENOVA:FRONTEND:SUCCESS] ZENOVA preview iniciado.`);
    console.log(`[ZENOVA:FRONTEND:INFO] Puerto: ${port}`);
    console.log(`[ZENOVA:FRONTEND:INFO] URL: http://127.0.0.1:${port}`);
  });
}

listen(preferredPort);
