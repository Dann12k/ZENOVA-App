# AI_ARCHITECTURE

## Objetivo

ZENOVA queda preparada para funcionar como una plataforma de bienestar impulsada por inteligencia artificial mediante Google Gemini, sin exponer claves y sin convertir ZENIN en un chatbot generico.

ZENIN se mantiene como companero digital: observa contexto, recuerda historial, interpreta necesidades, recomienda herramientas y responde con una personalidad propia.

## Seguridad de API Key

Nunca se escribe una API Key en el codigo fuente.

El backend incluye `backend/.env.example` con:

```env
PORT=3001
AI_PROVIDER=gemini
GEMINI_MODEL=gemini-flash-lite-latest
GEMINI_API_KEY=
```

No se creo `backend/.env`. Ese archivo debe crearlo manualmente el usuario.
El modelo se puede cambiar con `GEMINI_MODEL`; ZENOVA usa `gemini-flash-lite-latest` como valor por defecto para consumir menos recursos.

Si `GEMINI_API_KEY` esta vacia, el backend no llama a Gemini. En su lugar responde con el mensaje:

```text
La arquitectura esta lista. Para continuar necesito que el usuario agregue manualmente su API Key de Gemini en el archivo .env. Una vez configurada, continuare con las pruebas de integracion.
```

## Estructura

```text
backend/
  src/
    config/
    controllers/
    routes/
    middlewares/
    providers/
    services/
    brain/
    memory/
    context/
    prompts/
    models/
    types/
    utils/
    server.ts
```

## Flujo

1. El frontend de ZENIN envia `POST /api/chat`.
2. `validateChatRequest` valida longitud y campos.
3. `chatController` entrega la solicitud a `ZeninBrain`.
4. `MemoryEngine` guarda el turno del usuario.
5. `ContextBuilder` arma el contexto con nombre, objetivos, emociones, habitos, herramientas, historial, fecha, hora, progreso, logros y preferencias.
6. `AIOrchestrator` decide si vale la pena usar Gemini.
7. Si no hace falta IA, ZENIN responde localmente.
8. Si hace falta IA, `AIProvider` llama al proveedor configurado.
9. `GeminiProvider` solicita JSON estricto.
10. `zeninResponse` valida que la respuesta cumpla el contrato.
11. `EmotionEngine` interpreta el estado emocional.
12. `ToolEngine` traduce herramientas sugeridas a paneles de ZENOVA.
13. `MemoryEngine` guarda respuesta, resumen y senales.
14. El frontend actualiza avatar, burbujas y herramientas.

## Endpoint Principal

```http
POST /api/chat
Content-Type: application/json
```

Entrada:

```json
{
  "message": "",
  "userId": "",
  "conversationId": ""
}
```

Respuesta:

```json
{
  "message": "",
  "emotion": "calm",
  "suggestedTool": "",
  "priority": "low",
  "celebrate": false,
  "showConfetti": false,
  "memorySummary": "",
  "conversationId": "",
  "usedAI": false,
  "provider": "local-orchestrator"
}
```

## AI Provider

Todo el backend habla con la interfaz `AIProvider`.

Actualmente existe:

- `GeminiProvider`

Para cambiar posteriormente a OpenAI:

1. Crear `OpenAIProvider` que implemente `AIProvider`.
2. Agregar `AI_PROVIDER=openai`.
3. Actualizar `providerFactory.ts`.
4. Mantener el mismo contrato JSON para no redisenar frontend ni cerebro.

## Prompt Builder

Los prompts no se escriben dentro del controlador ni del provider.

- `prompts/zeninPersonality.ts`: personalidad, limites y reglas de identidad.
- `prompts/promptBuilder.ts`: une personalidad, contexto y mensaje.

ZENIN nunca debe decir que es Gemini, IA o modelo de lenguaje.

## Memory Engine

`MemoryEngine` trabaja sobre `MemoryStore`.

Implementacion actual:

- `LocalMemoryStore`
- Archivos JSON locales en `backend/data`

Preparado para migrar a:

- Firebase
- Supabase
- Base de datos propia

Solo se reemplaza la implementacion de `MemoryStore`.

## Conversation Manager

Gestiona:

- historial reciente;
- limite de contexto;
- resumen de conversacion;
- memoria compacta para reducir tokens.

## Emotion Engine

Traduce `emotion` a estado visual:

- happy
- thinking
- empathetic
- calm
- neutral
- celebrating
- concerned

El frontend usa esa senal para avatar, halo, animacion, particulas y expresion.

## Tool Engine

Traduce `suggestedTool` a una accion de ZENOVA:

- breathing
- journal
- sleep
- meditation
- focus
- grounding
- movement

El espacio de ZENIN puede abrir la herramienta dentro de la conversacion.

## AI Orchestrator

No todas las consultas usan Gemini.

No usa IA para:

- "Gracias"
- "Ok"
- "No"
- "Listo"

Usa IA para:

- "Hoy me siento mal"
- "Necesito ayuda"
- "Analiza mi progreso"
- "Quiero hablar"
- mensajes largos o con contexto emocional.

Esto reduce consumo de API.

## Frontend

Se agrego:

- `outputs/zenova-web/services/zenin/zenin-backend-client.js`

La sala inmersiva de ZENIN intenta hablar con el backend. Si no esta disponible o falta configuracion, usa fallback local y no rompe la experiencia.

## Pruebas Pendientes

No se ejecutaron llamadas reales a Gemini porque `GEMINI_API_KEY` debe ser configurada manualmente por el usuario.

Cuando el usuario cree `backend/.env` y agregue su clave real, se deben ejecutar:

```bash
cd backend
npm install
npm run dev
```

Luego probar:

```http
GET http://localhost:3001/api/health
POST /api/chat
```
