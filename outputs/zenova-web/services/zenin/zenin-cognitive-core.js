(function initZeninCognitiveCore(global) {
  "use strict";

  const storage = {
    events: "zenin.cognitive.events.v1",
    memory: "zenin.cognitive.memory.v1",
    context: "zenin.cognitive.context.v1",
    insights: "zenin.cognitive.insights.v1",
    patterns: "zenin.cognitive.patterns.v1",
    recommendations: "zenin.cognitive.recommendations.v1",
    scheduler: "zenin.cognitive.scheduler.v1",
    mood: "zenin.cognitive.mood.v1",
    personality: "zenin.cognitive.personality.v1"
  };

  const kindMap = {
    "checkin.created": "CHECKIN_COMPLETED",
    "habit.completed": "HABIT_COMPLETED",
    "habit.saved": "HABIT_COMPLETED",
    "goal.saved": "OBJECTIVE_CREATED",
    "goal.progress": "GOAL_PROGRESS",
    "journal.created": "JOURNAL_CREATED",
    "agenda.saved": "AGENDA_SAVED",
    "evaluation.multifactor": "MOOD_REGISTERED",
    "tool.started": "TOOL_STARTED",
    "tool.completed": "TOOL_FINISHED",
    "resource.opened": "RESOURCE_OPENED",
    "program.finished": "PROGRAM_FINISHED",
    "program.abandoned": "PROGRAM_ABANDONED",
    "page.changed": "PAGE_CHANGED"
  };

  const toolCatalog = [
    { key: "guided-breathing", title: "Respiracion guiada", tags: ["stress", "breathing", "short"], base: 62 },
    { key: "sensory-anchor", title: "Anclaje sensorial", tags: ["anxiety", "grounding", "short"], base: 60 },
    { key: "thought-order", title: "Ordenar pensamientos", tags: ["writing", "focus"], base: 54 },
    { key: "sleep-reset", title: "Rutina de sueno", tags: ["sleep", "night"], base: 52 },
    { key: "micro-walk", title: "Pausa activa suave", tags: ["body", "energy", "short"], base: 50 },
    { key: "journal-prompt", title: "Apunte emocional breve", tags: ["emotion", "reflection"], base: 49 }
  ];

  const state = {
    writingTimer: null,
    observationTimer: null,
    debugTimer: null
  };

  function safeJson(value, fallback) {
    try {
      return JSON.parse(value || "");
    } catch (error) {
      return fallback;
    }
  }

  function read(key, fallback) {
    return safeJson(global.localStorage?.getItem(key), fallback);
  }

  function write(key, value) {
    global.localStorage?.setItem(key, JSON.stringify(value));
  }

  function id(prefix) {
    return `${prefix}-${global.crypto?.randomUUID?.() || `${Date.now()}-${Math.random().toString(16).slice(2)}`}`;
  }

  function nowIso() {
    return new Date().toISOString();
  }

  function dayKey(date = new Date()) {
    return date.toISOString().slice(0, 10);
  }

  function initialMemory() {
    return {
      schemaVersion: 1,
      updatedAt: nowIso(),
      emotionalHistory: [],
      toolsUsed: [],
      usageHours: {},
      activeDays: [],
      absentDays: [],
      favoriteRoutines: [],
      goals: [],
      habits: [],
      progress: [],
      completedPrograms: [],
      abandonedPrograms: [],
      shownPhrases: [],
      adviceGiven: [],
      lastConversation: [],
      preferences: {},
      observations: [],
      patterns: [],
      recommendations: [],
      suspiciousAttempts: []
    };
  }

  function getMemory() {
    return { ...initialMemory(), ...read(storage.memory, initialMemory()) };
  }

  function saveMemory(memory) {
    write(storage.memory, { ...memory, updatedAt: nowIso(), schemaVersion: 1 });
  }

  function getContext() {
    return {
      area: "UNKNOWN",
      isWriting: false,
      isReading: false,
      isCompletingTask: false,
      isInactive: false,
      justFinished: false,
      longSession: false,
      activeTool: null,
      activeProgram: null,
      sessionStartedAt: null,
      lastInteractionAt: null,
      updatedAt: nowIso(),
      ...read(storage.context, {})
    };
  }

  function saveContext(patch) {
    write(storage.context, { ...getContext(), ...patch, updatedAt: nowIso() });
  }

  function getPersonality() {
    return {
      empathy: 0.82,
      energy: 0.58,
      humor: 0.32,
      curiosity: 0.68,
      formality: 0.42,
      closeness: 0.54,
      updatedAt: nowIso(),
      ...read(storage.personality, {})
    };
  }

  function savePersonality(patch) {
    const current = getPersonality();
    const next = Object.fromEntries(
      Object.entries({ ...current, ...patch }).map(([key, value]) => [
        key,
        typeof value === "number" ? Math.max(0, Math.min(1, value)) : value
      ])
    );
    write(storage.personality, { ...next, updatedAt: nowIso() });
  }

  function getMood() {
    return {
      mood: "Neutral",
      expression: "soft-smile",
      halo: "violet-gold",
      animation: "idle-breathing",
      speed: 1,
      blinkRate: 0.55,
      updatedAt: nowIso(),
      ...read(storage.mood, {})
    };
  }

  function setMood(mood, patch) {
    write(storage.mood, {
      ...getMood(),
      mood,
      ...patch,
      updatedAt: nowIso()
    });
  }

  function publish(type, payload = {}, meta = {}) {
    const createdAt = nowIso();
    const event = {
      id: id("event"),
      type,
      createdAt,
      date: createdAt.slice(0, 10),
      time: createdAt.slice(11, 19),
      durationMs: meta.durationMs ?? null,
      source: meta.source || "zenova-web",
      result: meta.result || "captured",
      payload
    };
    const events = read(storage.events, []);
    events.push(event);
    write(storage.events, events);
    updateMemoryForEvent(event);
    updateContextForEvent(event);
    updatePersonalityForEvent(event);
    updateMoodForEvent(event);
    scheduleObservation(`event:${type}`);
    return event;
  }

  function captureZenovaContextItem(kind, payload) {
    return publish(kindMap[kind] || "OBSERVATION_TICK", payload, {
      source: `ZenovaContextStore:${kind}`,
      result: "captured"
    });
  }

  function updateMemoryForEvent(event) {
    const memory = getMemory();
    const activeDay = dayKey(new Date(event.createdAt));
    if (!memory.activeDays.includes(activeDay)) memory.activeDays.push(activeDay);
    const hour = `${activeDay}T${event.createdAt.slice(11, 13)}`;
    memory.usageHours[hour] = (memory.usageHours[hour] || 0) + 1;

    if (event.type === "CHECKIN_COMPLETED" || event.type === "MOOD_REGISTERED") memory.emotionalHistory.push(event.payload);
    if (event.type === "TOOL_STARTED" || event.type === "TOOL_FINISHED") memory.toolsUsed.push({ ...event.payload, createdAt: event.createdAt });
    if (event.type === "HABIT_COMPLETED") memory.habits.push(event.payload);
    if (event.type === "OBJECTIVE_CREATED" || event.type === "GOAL_PROGRESS") memory.goals.push(event.payload);
    if (event.type === "PROGRAM_FINISHED") memory.completedPrograms.push(event.payload);
    if (event.type === "PROGRAM_ABANDONED") memory.abandonedPrograms.push(event.payload);
    saveMemory(memory);
  }

  function updateContextForEvent(event) {
    if (event.type === "USER_LOGIN") saveContext({ area: "HOME", sessionStartedAt: nowIso(), lastInteractionAt: nowIso(), isInactive: false });
    if (event.type === "USER_LOGOUT") saveContext({ area: "AUTH", isWriting: false, isReading: false, isCompletingTask: false, activeTool: null });
    if (event.type === "TOOL_STARTED") saveContext({ area: "TOOLS", isCompletingTask: true, justFinished: false, activeTool: event.payload?.key || event.payload?.title || null });
    if (event.type === "TOOL_FINISHED") saveContext({ area: "TOOLS", isCompletingTask: false, justFinished: true, activeTool: null });
    if (event.type === "CHECKIN_COMPLETED" || event.type === "MOOD_REGISTERED") saveContext({ area: "CHECKIN", justFinished: true });
    if (event.type === "AI_OPENED") saveContext({ area: "ZENIN_CHAT" });
    if (event.type === "AI_CLOSED") saveContext({ area: "HOME" });
    if (event.type === "PAGE_CHANGED") saveContext({ area: event.payload?.area || inferAreaFromHash(global.location.hash) });
  }

  function updatePersonalityForEvent(event) {
    const personality = getPersonality();
    if (event.type === "USER_LOGIN") savePersonality({ closeness: personality.closeness + 0.015, energy: personality.energy + 0.01 });
    if (event.type === "TOOL_FINISHED") savePersonality({ energy: personality.energy + 0.02, humor: personality.humor + 0.008 });
    if (event.type === "CHECKIN_COMPLETED" || event.type === "MOOD_REGISTERED") savePersonality({ empathy: personality.empathy + 0.02 });
  }

  function updateMoodForEvent(event) {
    if (event.type === "TOOL_FINISHED" || event.type === "HABIT_COMPLETED") {
      setMood("Celebrating", { expression: "wide-smile", halo: "confetti-glow", animation: "celebrate-hop", speed: 1.18 });
      return;
    }
    if (event.type === "CHECKIN_COMPLETED" || event.type === "MOOD_REGISTERED") {
      setMood("Thoughtful", { expression: "looking-up", halo: "hologram-blue", animation: "thinking-hologram", speed: 0.94 });
      return;
    }
    if (event.type === "USER_LOGIN") setMood("Happy", { expression: "bright-smile", halo: "gold-soft", animation: "happy-float", speed: 1.08 });
  }

  function observeNow(reason = "manual") {
    const memory = getMemory();
    const events = read(storage.events, []);
    const patterns = analyzePatterns(memory, events);
    const insights = patterns.map(createInsightFromPattern);
    const recommendations = scoreRecommendations(memory, insights);
    memory.patterns = mergeByKey(patterns, memory.patterns || []);
    memory.observations = mergeByKey(insights, memory.observations || []);
    memory.recommendations = mergeByKey(recommendations, memory.recommendations || []);
    saveMemory(memory);
    write(storage.patterns, memory.patterns);
    write(storage.insights, memory.observations);
    write(storage.recommendations, memory.recommendations);
    updateScheduler(insights, recommendations, reason);
    renderDebugPanel();
    return { patterns, insights, recommendations };
  }

  function analyzePatterns(memory, events) {
    const patterns = [];
    const lastEmotion = latestDateFrom(memory.emotionalHistory);
    if (!lastEmotion || daysSince(lastEmotion) >= 4) {
      patterns.push(pattern("emotion-gap-4-days", "No registra emociones hace 4 dias o mas.", "High", ["Ultimo registro emocional alejado"]));
    }
    const breathing = countTools(memory.toolsUsed, ["respir", "breath"], 7);
    if (breathing >= 3) patterns.push(pattern("breathing-three-times-week", "Respiracion frecuente esta semana.", "Medium", [`Respiracion usada ${breathing} veces`]));
    const anxiety = countTools(memory.toolsUsed, ["ansiedad", "anxiety", "sensorial", "grounding"], 21);
    if (anxiety >= 3) patterns.push(pattern("anxiety-tool-preference", "Prefiere herramientas de ansiedad o anclaje.", "High", [`Herramientas relacionadas: ${anxiety}`]));
    if ((memory.abandonedPrograms || []).length >= 2) {
      patterns.push(pattern("long-program-abandonment", "Los programas largos tienen baja adherencia.", "Medium", [`Abandonos: ${memory.abandonedPrograms.length}`]));
    }
    const nightEvents = events.filter((event) => {
      const hour = new Date(event.createdAt).getHours();
      return hour >= 21 || hour <= 5;
    }).length;
    if (nightEvents >= 4) patterns.push(pattern("night-usage", "Suele ingresar por la noche.", "Low", [`Eventos nocturnos: ${nightEvents}`]));
    return patterns;
  }

  function pattern(key, label, priority, evidence) {
    return {
      id: id("pattern"),
      key,
      label,
      priority,
      evidence,
      confidence: priority === "High" ? 0.78 : priority === "Medium" ? 0.68 : 0.55,
      detectedAt: nowIso(),
      lastUpdatedAt: nowIso()
    };
  }

  function createInsightFromPattern(item) {
    const textByKey = {
      "emotion-gap-4-days": "ZENIN detecta varios dias sin registro emocional; conviene una entrada breve y sin presion.",
      "breathing-three-times-week": "La respiracion guiada se esta convirtiendo en una rutina util.",
      "anxiety-tool-preference": "Las herramientas de ansiedad y anclaje sensorial parecen relevantes.",
      "long-program-abandonment": "Las actividades cortas pueden funcionar mejor que programas largos.",
      "night-usage": "La noche parece ser una ventana natural para intervenciones suaves."
    };
    return {
      id: id("insight"),
      key: `insight-${item.key}`,
      text: textByKey[item.key] || item.label,
      priority: item.priority,
      evidence: item.evidence,
      confidence: item.confidence,
      createdAt: nowIso(),
      visible: false
    };
  }

  function scoreRecommendations(memory, insights) {
    const joined = JSON.stringify({ memory, insights }).toLowerCase();
    const signals = {
      stress: joined.includes("estres") || joined.includes("stress") ? 0.85 : 0.35,
      anxiety: joined.includes("ansiedad") || joined.includes("anxiety") ? 0.85 : 0.3,
      sleep: joined.includes("sueno") || new Date().getHours() >= 21 ? 0.72 : 0.24,
      short: getContext().longSession || getContext().isInactive ? 0.8 : 0.42,
      focus: joined.includes("concentr") ? 0.65 : 0.3,
      body: joined.includes("cans") || joined.includes("energia baja") ? 0.72 : 0.28
    };
    return toolCatalog
      .map((tool) => {
        const score = Math.min(
          100,
          Math.round(
            tool.base +
              tool.tags.reduce((sum, tag) => {
                const value = signals[tag] ?? (tag === "breathing" || tag === "grounding" ? signals.anxiety : 0.35);
                return sum + value * 12;
              }, 0)
          )
        );
        return {
          id: id("recommendation"),
          toolKey: tool.key,
          title: tool.title,
          score,
          reasons: tool.tags.map((tag) => `Senal ${tag}`),
          priority: score >= 78 ? "High" : score >= 62 ? "Medium" : "Low",
          createdAt: nowIso(),
          status: "pending"
        };
      })
      .sort((a, b) => b.score - a.score)
      .slice(0, 5);
  }

  function updateScheduler(insights, recommendations, reason) {
    const scheduler = read(storage.scheduler, { queue: [], lastDeliveredAt: null });
    const items = [
      ...insights.map((insight) => ({ id: id("intervention"), kind: "insight", priority: insight.priority, payload: insight, reason, status: "pending", createdAt: nowIso() })),
      ...recommendations.slice(0, 3).map((recommendation) => ({
        id: id("intervention"),
        kind: "recommendation",
        priority: recommendation.priority,
        payload: recommendation,
        reason,
        status: "pending",
        createdAt: nowIso()
      }))
    ];
    scheduler.queue = mergeByKey(items, scheduler.queue || [], (item) => `${item.kind}-${item.payload?.key || item.payload?.toolKey}`);
    write(storage.scheduler, scheduler);
  }

  function mergeByKey(incoming, previous, keyFor = (item) => item.key || item.toolKey) {
    const seen = new Set();
    return [...incoming, ...previous].filter((item) => {
      const key = keyFor(item);
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }

  function latestDateFrom(items) {
    const dates = items
      .map((item) => item?.createdAt || item?.date || item?.timestamp)
      .filter(Boolean)
      .map((date) => new Date(date).getTime())
      .filter(Number.isFinite);
    return dates.length ? new Date(Math.max(...dates)).toISOString() : null;
  }

  function daysSince(iso) {
    return Math.floor((Date.now() - new Date(iso).getTime()) / 86400000);
  }

  function countTools(tools, keywords, days) {
    const since = Date.now() - days * 86400000;
    return tools.filter((tool) => {
      const text = `${tool?.key || ""} ${tool?.title || ""}`.toLowerCase();
      const date = new Date(tool?.createdAt || tool?.lastUsedAt || new Date()).getTime();
      return date >= since && keywords.some((keyword) => text.includes(keyword));
    }).length;
  }

  function scheduleObservation(reason) {
    clearTimeout(state.observationTimer);
    state.observationTimer = setTimeout(() => observeNow(reason), 250);
  }

  function throttle(fn, wait) {
    let lastRun = 0;
    let timer = null;
    return (...args) => {
      const now = Date.now();
      const remaining = wait - (now - lastRun);
      if (remaining <= 0) {
        lastRun = now;
        fn(...args);
        return;
      }
      if (!timer) {
        timer = setTimeout(() => {
          timer = null;
          lastRun = Date.now();
          fn(...args);
        }, remaining);
      }
    };
  }

  function inferAreaFromHash(hash) {
    const value = String(hash || "").toLowerCase();
    if (value.includes("tool")) return "TOOLS";
    if (value.includes("profile")) return "PROFILE";
    if (value.includes("habit")) return "HABITS";
    if (value.includes("checkin") || value.includes("assessment")) return "CHECKIN";
    if (value.includes("library") || value.includes("resource")) return "LIBRARY";
    if (value.includes("premium") || value.includes("vip")) return "PREMIUM";
    if (value.includes("chat") || value.includes("zenin")) return "ZENIN_CHAT";
    if (value.includes("auth") || value.includes("login")) return "AUTH";
    return "HOME";
  }

  function buildFutureOpenAIContext() {
    const memory = getMemory();
    const profile = read("zenovaUserProfile", {});
    const session = read("zenovaSession", {});
    return {
      profile: {
        ...profile,
        session: {
          name: session?.name || "",
          email: session?.email || "",
          guest: Boolean(session?.guest)
        }
      },
      memory,
      observations: memory.observations,
      habits: memory.habits,
      insights: read(storage.insights, []),
      history: read(storage.events, []),
      mood: getMood(),
      personality: getPersonality(),
      recommendations: read(storage.recommendations, []),
      currentContext: getContext(),
      unfinishedTasks: memory.goals,
      emotionalTrend: "prepared-for-openai",
      favoriteTools: memory.toolsUsed.slice(-20),
      recentEvents: read(storage.events, []).slice(-60)
    };
  }

  function snapshot() {
    return {
      events: read(storage.events, []),
      patterns: read(storage.patterns, []),
      insights: read(storage.insights, []),
      priorities: read(storage.insights, []).reduce((acc, item) => {
        acc[item.priority] = (acc[item.priority] || 0) + 1;
        return acc;
      }, {}),
      mood: getMood(),
      context: getContext(),
      memory: getMemory(),
      recommendations: read(storage.recommendations, []),
      scheduler: read(storage.scheduler, { queue: [] }),
      personality: getPersonality()
    };
  }

  function renderDebugPanel() {
    if (!new URLSearchParams(global.location.search).has("debug")) return;
    const existing = document.getElementById("zeninCognitiveDebug");
    const data = snapshot();
    const html = `
      <div class="zenin-debug-head">
        <strong>ZENIN Core Debug</strong>
        <span>${data.events.length} eventos</span>
      </div>
      <div class="zenin-debug-grid">
        ${debugBlock("Contexto", data.context)}
        ${debugBlock("Mood", data.mood)}
        ${debugBlock("Personalidad", data.personality)}
        ${debugBlock("Prioridades", data.priorities)}
        ${debugBlock("Eventos", data.events.slice(-8).reverse())}
        ${debugBlock("Patrones", data.patterns.slice(0, 8))}
        ${debugBlock("Insights", data.insights.slice(0, 8))}
        ${debugBlock("Recomendaciones", data.recommendations.slice(0, 6))}
        ${debugBlock("Scheduler", data.scheduler)}
        ${debugBlock("Memoria", {
          emotions: data.memory.emotionalHistory.length,
          tools: data.memory.toolsUsed.length,
          activeDays: data.memory.activeDays.length,
          habits: data.memory.habits.length,
          goals: data.memory.goals.length
        })}
      </div>`;
    if (existing) {
      existing.innerHTML = html;
      return;
    }
    const panel = document.createElement("aside");
    panel.id = "zeninCognitiveDebug";
    panel.className = "zenin-debug-panel";
    panel.setAttribute("aria-label", "Panel interno de desarrollo ZENIN");
    panel.innerHTML = html;
    document.body.appendChild(panel);
  }

  function debugBlock(title, value) {
    return `<section><h3>${title}</h3><pre>${escapeHtml(JSON.stringify(value, null, 2))}</pre></section>`;
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[char]);
  }

  function bindPassiveTracking() {
    const markInteraction = throttle(() => saveContext({ isInactive: false, lastInteractionAt: nowIso() }), 900);
    document.addEventListener("input", (event) => {
      const target = event.target;
      if (!target || !("matches" in target)) return;
      if (target.matches("input, textarea, [contenteditable='true']")) {
        saveContext({ isWriting: true, lastInteractionAt: nowIso() });
        clearTimeout(state.writingTimer);
        state.writingTimer = setTimeout(() => saveContext({ isWriting: false }), 1400);
      }
    });
    ["click", "pointerdown", "keydown", "touchstart"].forEach((name) => {
      document.addEventListener(name, markInteraction, { passive: true });
    });
    global.addEventListener("hashchange", () => publish("PAGE_CHANGED", { area: inferAreaFromHash(global.location.hash), hash: global.location.hash }));
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) saveContext({ isInactive: true });
    });
  }

  global.ZeninCognitive = {
    version: "1.0.0-local",
    status: "prepared-without-openai",
    publish,
    captureZenovaContextItem,
    observeNow,
    snapshot,
    trackContext: saveContext,
    buildFutureOpenAIContext,
    events: { publish },
    debug: { render: renderDebugPanel }
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      bindPassiveTracking();
      renderDebugPanel();
      if (new URLSearchParams(global.location.search).has("debug")) {
        state.debugTimer = setInterval(renderDebugPanel, 2000);
      }
    });
  } else {
    bindPassiveTracking();
    renderDebugPanel();
  }
})(window);
