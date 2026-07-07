(function initZeninBackendClient(global) {
  "use strict";

  const timeoutMs = 26000;
  const maxRetries = 1;
  const maxChatBodyChars = 18000;
  const localBackends = ["http://127.0.0.1:3001", "http://localhost:3001"];
  let runtimeBackendUrl = "";
  const friendlyOfflineMessage =
    "No puedo conectarme con mi motor de IA en este momento. Podemos seguir con herramientas de respiracion, registro emocional, seguimiento y recordatorios mientras recupero la conexion.";

  const logStyle = {
    info: "color:#7dd3fc;font-weight:700",
    warn: "color:#f5c542;font-weight:700",
    error: "color:#fb7185;font-weight:700"
  };

  function log(level, message, meta) {
    const safeMeta = meta ? { ...meta } : {};
    delete safeMeta.apiKey;
    delete safeMeta.GEMINI_API_KEY;
    delete safeMeta.authorization;
    const payload = Object.keys(safeMeta).length ? safeMeta : "";
    console[level === "error" ? "error" : level === "warn" ? "warn" : "log"](`%c[ZENOVA:FRONTEND:${level.toUpperCase()}] ${message}`, logStyle[level] || logStyle.info, payload);
  }

  function isFileProtocol() {
    return global.location?.protocol === "file:";
  }

  function isLocalHost() {
    return ["localhost", "127.0.0.1", "0.0.0.0", ""].includes(global.location?.hostname || "");
  }

  function baseUrl() {
    const override = global.localStorage?.getItem("zeninBackendUrl");
    if (override) return override.replace(/\/$/, "");
    if (runtimeBackendUrl) return runtimeBackendUrl;
    if (isFileProtocol()) return "";
    return "";
  }

  async function resolveBaseUrl() {
    const override = global.localStorage?.getItem("zeninBackendUrl");
    if (override) return override.replace(/\/$/, "");
    if (runtimeBackendUrl || isFileProtocol()) return baseUrl();
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 600);
    try {
      const response = await fetch(`/zenova-runtime.json?ts=${Date.now()}`, { signal: controller.signal, cache: "no-store" });
      const data = await response.json().catch(() => null);
      if (response.ok && data?.backendUrl) {
        runtimeBackendUrl = String(data.backendUrl).replace(/\/$/, "");
      }
    } catch (error) {
      runtimeBackendUrl = "";
    } finally {
      clearTimeout(timer);
    }
    return baseUrl();
  }

  function unique(items) {
    return [...new Set(items.filter((item) => item !== null && item !== undefined).map((item) => String(item).replace(/\/$/, "")))];
  }

  async function resolveBaseCandidates() {
    const override = global.localStorage?.getItem("zeninBackendUrl");
    await resolveBaseUrl();

    const localOrder = global.location?.hostname === "localhost" ? ["http://localhost:3001", "http://127.0.0.1:3001"] : localBackends;
    return unique([
      override,
      runtimeBackendUrl,
      "",
      ...(isLocalHost() ? localOrder : [])
    ]);
  }

  function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  function safeStringify(value) {
    try {
      return JSON.stringify(value);
    } catch (error) {
      return "{}";
    }
  }

  function clipText(value, max = 220) {
    return String(value ?? "")
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, max);
  }

  function compactValue(value, maxText = 180, depth = 0) {
    if (value === null || value === undefined) return value;
    if (typeof value === "number" || typeof value === "boolean") return value;
    if (typeof value === "string") return clipText(value, maxText);
    if (depth >= 3) return clipText(safeStringify(value), maxText);
    if (Array.isArray(value)) return value.slice(-4).map((item) => compactValue(item, maxText, depth + 1));
    if (typeof value === "object") {
      return Object.fromEntries(
        Object.entries(value)
          .slice(0, 8)
          .map(([key, item]) => [key, compactValue(item, maxText, depth + 1)])
      );
    }
    return clipText(value, maxText);
  }

  function compactConversation(list, max = 6) {
    return (Array.isArray(list) ? list : []).slice(-max).map((message) => ({
      role: message?.role === "user" ? "user" : "zenin",
      content: clipText(message?.content || message?.message || "", 420),
      createdAt: message?.createdAt || ""
    }));
  }

  function compactMemory(memory) {
    if (!memory || typeof memory !== "object") return {};
    return {
      remembered: (memory.remembered || []).slice(0, 5).map((item) => clipText(item, 120)),
      goals: (memory.goals || []).slice(0, 5).map((item) => clipText(item, 120)),
      lastMood: clipText(memory.lastMood || "", 80),
      sleep: clipText(memory.sleep || "", 100),
      updatedAt: memory.updatedAt || ""
    };
  }

  function compactClientContext(context, minimal = false) {
    if (!context || typeof context !== "object") return {};
    if (!minimal && safeStringify(context).length <= maxChatBodyChars - 2500) return context;

    const zenovaContext = context.zenovaContext || {};
    const cognitive = context.cognitive || {};
    const compact = {
      userText: clipText(context.userText, 1200),
      conversation: compactConversation(context.conversation, minimal ? 3 : 6),
      memory: compactMemory(context.memory),
      zenovaContext: {
        generatedAt: zenovaContext.generatedAt || "",
        userProfile: compactValue(zenovaContext.userProfile || {}, 120),
        latestAssessment: compactValue(zenovaContext.latestAssessment || null, 140),
        latestCheckin: compactValue(
          Array.isArray(zenovaContext.recentCheckins) ? zenovaContext.recentCheckins[zenovaContext.recentCheckins.length - 1] : null,
          140
        ),
        goals: minimal ? [] : compactValue(zenovaContext.goals || [], 120),
        timeline: minimal ? [] : compactValue((zenovaContext.timeline || []).slice(0, 3), 120)
      },
      cognitive: {
        mood: compactValue(cognitive.mood || {}, 120),
        currentContext: compactValue(cognitive.currentContext || {}, 120),
        recommendations: minimal ? [] : compactValue((cognitive.recommendations || []).slice(0, 3), 140)
      },
      uiState: compactValue(context.uiState || {}, 80),
      contextReduced: true
    };

    if (!minimal && safeStringify(compact).length <= maxChatBodyChars) return compact;
    return {
      userText: compact.userText,
      conversation: compact.conversation.slice(-3),
      memory: compact.memory,
      zenovaContext: {
        generatedAt: compact.zenovaContext.generatedAt,
        userProfile: compact.zenovaContext.userProfile,
        latestCheckin: compact.zenovaContext.latestCheckin
      },
      cognitive: {
        mood: compact.cognitive.mood,
        currentContext: compact.cognitive.currentContext
      },
      uiState: compact.uiState,
      contextReduced: true
    };
  }

  function buildChatBody(input, minimal = false) {
    const body = {
      message: input.message || "",
      userId: input.userId || "guest",
      conversationId: input.conversationId || "default",
      clientContext: compactClientContext(input.clientContext || {}, minimal)
    };
    if (!minimal && safeStringify(body).length > maxChatBodyChars) return buildChatBody(input, true);
    return body;
  }

  function offlineResponse(reason) {
    return {
      message: friendlyOfflineMessage,
      emotion: "empathetic",
      suggestedTool: "",
      priority: "medium",
      celebrate: false,
      showConfetti: false,
      memorySummary: `Modo offline: ${reason || "backend no disponible"}`,
      conversationId: "offline",
      usedAI: false,
      provider: "offline-client",
      offline: true
    };
  }

  function showFileProtocolWarning() {
    if (!isFileProtocol() || global.document?.getElementById("zenovaFileProtocolWarning")) return;
    const render = () => {
      if (global.document.getElementById("zenovaFileProtocolWarning")) return;
      const panel = global.document.createElement("section");
      panel.id = "zenovaFileProtocolWarning";
      panel.className = "zenova-file-warning";
      panel.innerHTML = `
        <div>
          <strong>ZENOVA debe ejecutarse mediante un servidor local.</strong>
          <p>La forma mas facil es abrir este archivo con doble clic:</p>
          <code>abrir-zenova.bat</code>
          <span>o, si usas una terminal:</span>
          <code>npm run dev</code>
          <span>tambien sirve:</span>
          <code>npm start</code>
        </div>
      `;
      global.document.body.appendChild(panel);
      log("warn", "La pagina se abrio con file://. IA desactivada hasta usar servidor local.");
    };
    if (global.document.readyState === "loading") {
      global.document.addEventListener("DOMContentLoaded", render, { once: true });
      return;
    }
    render();
  }

  async function request(path, options = {}) {
    if (isFileProtocol()) {
      showFileProtocolWarning();
      throw Object.assign(new Error("ZENOVA debe ejecutarse mediante un servidor local."), { code: "ZENOVA_FILE_PROTOCOL" });
    }

    let lastError = null;
    for (let attempt = 0; attempt <= maxRetries; attempt += 1) {
      const bases = await resolveBaseCandidates();
      for (const base of bases) {
        const controller = new AbortController();
        const timer = setTimeout(() => controller.abort(), timeoutMs);
        try {
          const response = await fetch(`${base}${path}`, {
            ...options,
            signal: controller.signal,
            headers: {
              "Content-Type": "application/json",
              ...(options.headers || {})
            }
          });
          const data = await response.json().catch(() => ({}));
          if (response.ok) return data;
          const error = new Error(data?.error?.message || `Backend respondio ${response.status}.`);
          error.code = data?.error?.code || "ZENIN_BACKEND_ERROR";
          error.status = response.status;
          error.base = base || "same-origin";
          lastError = error;
          if (base === "" && response.status === 404) continue;
          if (![408, 429, 500, 502, 503, 504].includes(response.status)) throw error;
        } catch (error) {
          lastError = error;
          if (error?.code === "ZENOVA_FILE_PROTOCOL") throw error;
        } finally {
          clearTimeout(timer);
        }
      }
      if (attempt < maxRetries) await wait(300 * 2 ** attempt);
    }
    throw lastError || new Error("No fue posible conectar con ZENIN backend.");
  }

  async function health() {
    try {
      return await request("/api/health", { method: "GET" });
    } catch (error) {
      log("warn", "Health check en modo offline.", { code: error?.code || "NETWORK_ERROR" });
      return {
        status: "warning",
        backend: "offline",
        gemini: "offline",
        timestamp: new Date().toISOString()
      };
    }
  }

  async function chat(input) {
    try {
      const body = buildChatBody(input);
      return await request("/api/chat", {
        method: "POST",
        body: safeStringify(body)
      });
    } catch (error) {
      if (error?.status === 413 || error?.code === "PAYLOAD_TOO_LARGE") {
        try {
          return await request("/api/chat", {
            method: "POST",
            body: safeStringify(buildChatBody(input, true))
          });
        } catch (retryError) {
          error = retryError;
        }
      }
      log("warn", "ZENIN paso a modo offline.", { code: error?.code || "NETWORK_ERROR", status: error?.status || "unknown" });
      return offlineResponse(error?.code || error?.message);
    }
  }

  showFileProtocolWarning();

  global.ZeninBackendClient = {
    baseUrl,
    health,
    chat,
    isOffline: isFileProtocol,
    status: "backend-client-resilient"
  };
})(window);
