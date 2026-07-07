# services

Responsabilidad: exponer una fachada estable para integrar ZENIN con ZENOVA.

La fachada coordina modulos internos, pero no debe renderizar interfaz ni conectarse a OpenAI. En fases futuras, ZENOVA podra iniciar este servicio y publicar eventos sin conocer los detalles internos.

Relaciones:

- construye `brain`;
- conecta `events`, `memory`, `context`, `state`, `scheduler` y `recommendations`;
- sera el punto natural para adaptadores de persistencia o servidor.

Desde la segunda fase tambien conecta:

- `emotion-engine`;
- `relationship-engine`;
- `care-engine`;
- `presence-engine`;
- `behavior-engine`;
- `celebration-engine`;
- `humor-engine`;
- `observation-engine`;
- `emotion-memory`;
- `daily-routine`;
- `proactive-events`;
- `achievement-system`;
- `notification-engine`;
- `voice-ready`.

La fachada no monta UI y no conecta OpenAI. Solo entrega motores inicializados.
