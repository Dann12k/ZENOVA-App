(function initZeninService(global) {
  "use strict";

  const storage = {
    draft: "zeninFutureDraft",
    events: "zeninFutureEvents"
  };

  const welcomeMessage =
    "Hola, soy ZENIN.\n\nEstoy preparado para ayudarte a comprender tu bienestar.\n\nMuy pronto podre analizar tus registros, habitos y objetivos para ofrecerte recomendaciones personalizadas.";

  function safeJsonParse(value, fallback) {
    try {
      return JSON.parse(value || "");
    } catch (error) {
      return fallback;
    }
  }

  function readStorage(key, fallback) {
    return safeJsonParse(global.localStorage?.getItem(key), fallback);
  }

  function writeStorage(key, value) {
    global.localStorage?.setItem(key, JSON.stringify(value));
  }

  function snapshotContext() {
    const base = global.ZenovaContextStore?.snapshot?.() || {};
    return {
      generatedAt: new Date().toISOString(),
      profile: base.userProfile || {},
      latestAssessment: base.latestAssessment || null,
      checkins: base.recentCheckins || [],
      habits: base.habits || [],
      goals: base.goals || [],
      agenda: base.agenda || [],
      journals: base.journalEntries || [],
      emotionalEntries: base.emotionalEntries || [],
      timeline: base.timeline || []
    };
  }

  function buildCheckinPayload(input) {
    return {
      version: 1,
      source: "checkin-inteligente",
      createdAt: input.createdAt || new Date().toISOString(),
      selections: input.selections || {},
      followUps: input.followUps || [],
      freeText: input.freeText || "",
      context: snapshotContext(),
      openAIReady: {
        enabled: false,
        supportsStreaming: true,
        supportsTemporaryMemory: true,
        plannedInputs: ["perfil", "registros", "habitos", "objetivos", "biblioteca", "herramientas"],
        note: "Interfaz preparada para OpenAI; esta version no envia datos a ningun servicio externo."
      }
    };
  }

  function readDraft() {
    return readStorage(storage.draft, { text: "", updatedAt: null, context: null });
  }

  function saveDraft(text) {
    const draft = {
      text: String(text || "").trim(),
      updatedAt: new Date().toISOString(),
      context: snapshotContext()
    };
    writeStorage(storage.draft, draft);
    return draft;
  }

  function logEvent(type, payload) {
    const events = readStorage(storage.events, []);
    events.unshift({
      id: global.crypto?.randomUUID?.() || `${Date.now()}-${Math.random().toString(16).slice(2)}`,
      type,
      payload,
      createdAt: new Date().toISOString()
    });
    writeStorage(storage.events, events.slice(0, 60));
  }

  function buildOpenAIRequestDraft(userText) {
    return {
      model: "future-openai-model",
      stream: true,
      messages: [
        {
          role: "system",
          content:
            "Eres ZENIN, asistente de bienestar emocional de ZENOVA. Usa solo contexto de bienestar, habitos, objetivos y registros del usuario."
        },
        {
          role: "user",
          content: userText || ""
        }
      ],
      context: snapshotContext()
    };
  }

  global.ZeninAI = {
    status: "prepared-not-connected",
    chat: {
      welcomeMessage,
      readDraft,
      saveDraft,
      logEvent,
      buildOpenAIRequestDraft
    },
    checkin: {
      buildPayload: buildCheckinPayload
    },
    context: {
      snapshot: snapshotContext
    }
  };
})(window);
