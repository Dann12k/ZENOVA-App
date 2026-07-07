# ZENIN_ARCHITECTURE

## Objetivo

Este nucleo convierte a ZENIN en un companero cognitivo local. No llama a OpenAI, no genera respuestas por IA y no mezcla interfaz con logica interna. Su trabajo es observar eventos, recordar historial, analizar patrones, crear insights, puntuar recomendaciones y esperar el momento correcto para intervenir.

## Modulos

`state.ts`

Define contratos compartidos: eventos, memoria, contexto, prioridades, mood, personalidad, recomendaciones, historial, helpers de rendimiento, debounce, throttle y cola asincrona.

`events.ts`

Implementa `EventBus`. Recibe eventos como `USER_LOGIN`, `TOOL_STARTED`, `CHECKIN_COMPLETED` o `PROGRAM_FINISHED`, normaliza fecha, hora, origen, duracion y resultado, y los distribuye a otros modulos.

`memory.ts`

Implementa `MemoryService`. La memoria persistente usa un proveedor intercambiable. Hoy puede usar LocalStorage, pero luego puede cambiarse a IndexedDB, Supabase, Firebase o backend propio sin tocar componentes visuales.

`history.ts`

Guarda registros append-only. No elimina historial. Permite reconstruir la historia del usuario desde eventos, observaciones, patrones, insights y recomendaciones.

`context.ts`

Implementa `ZeninContextTracker` y `ZeninContextBuilder`. Sabe si el usuario esta en HOME, TOOLS, PROFILE, HABITS, CHECKIN, LIBRARY, PREMIUM o ZENIN_CHAT, y detecta escritura, lectura, tarea activa, inactividad, actividad recien terminada y sesiones largas.

`insights.ts`

Analiza memoria e historial para crear patrones e insights. Ejemplos: varios dias sin registro emocional, respiracion frecuente, uso nocturno, preferencia por herramientas de ansiedad o baja adherencia a programas largos.

`recommendations.ts`

No usa reglas simples. Cada herramienta recibe un score segun senales de estres, ansiedad, sueno, foco, actividad corporal, sesion larga, contexto y patrones detectados.

`scheduler.ts`

Decide cuando ZENIN puede hablar. No aparece mientras el usuario escribe, lee, respira o completa una herramienta. Prioriza momentos posteriores a actividades, login, inactividad o metas cumplidas.

`personality.ts`

Mantiene variables de personalidad simulada: empatia, energia, humor, curiosidad, formalidad y cercania. Cambian lentamente para evitar saltos artificiales.

`mood.ts`

Controla el estado expresivo de ZENIN: Neutral, Curious, Happy, Thoughtful, Proud, Concerned, Motivated, Celebrating y Calm. Cada mood define expresion, halo, colores, animacion, velocidad, parpadeo y tono.

`notifications.ts`

Contiene el sistema de frases y curiosidades. La base supera 400 mensajes por categorias y contiene mas de 250 curiosidades cortas. Evita repetir frases recientes usando `MemoryService`.

`brain.ts`

Orquesta todo. Escucha eventos, actualiza memoria, registra historial, adapta personalidad, cambia mood, ejecuta observaciones asincronas, genera insights, puntua recomendaciones y alimenta el scheduler. Nunca muestra mensajes inmediatamente.

## Flujo completo

1. Ocurre un evento en ZENOVA.
2. `EventBus` lo normaliza.
3. `ZeninBrain` lo recibe en una cola asincrona.
4. `HistoryService` guarda el evento.
5. `MemoryService` actualiza memoria persistente.
6. `ZeninContextTracker` actualiza el contexto.
7. `PersonalityEngine` y `MoodEngine` ajustan el estado interno.
8. `InsightEngine` analiza patrones.
9. `RecommendationEngine` puntua herramientas.
10. `ZeninScheduler` decide si existe una intervencion pendiente.
11. La interfaz puede consultar el scheduler cuando sea seguro mostrar algo.

## Integracion actual en la web

La pagina carga `outputs/zenova-web/services/zenin/zenin-cognitive-core.js`.

Esa capa registra eventos reales desde `ZenovaContextStore`, login y logout. No modifica la experiencia normal. Si se abre la pagina con `?debug=true`, aparece un panel interno con eventos, patrones, insights, prioridades, mood, contexto, memoria, recomendaciones y scheduler.

## Preparacion para OpenAI

`ZeninContextBuilder` genera el objeto futuro para OpenAI:

```ts
{
  profile,
  memory,
  observations,
  habits,
  insights,
  history,
  mood,
  personality,
  recommendations,
  currentContext,
  unfinishedTasks,
  emotionalTrend,
  favoriteTools,
  recentEvents
}
```

Cuando se conecte OpenAI, el modelo solo debera recibir este objeto como contexto. No sera necesario rehacer memoria, eventos, historial, recomendaciones ni scheduler.

## Buenas practicas para ampliar

- Agregar eventos nuevos en `state.ts` y mapearlos en `events.ts`.
- Guardar datos siempre mediante `MemoryService`; no acceder a LocalStorage desde componentes.
- Crear patrones nuevos en `insights.ts`, no dentro de la interfaz.
- Agregar herramientas en `recommendations.ts` con tags y pesos.
- Mantener intervenciones en `scheduler.ts`; no mostrar mensajes desde el brain.
- Usar el panel `?debug=true` para revisar cambios antes de exponerlos al usuario.
- Mantener llamadas externas fuera del nucleo hasta la fase de OpenAI.
