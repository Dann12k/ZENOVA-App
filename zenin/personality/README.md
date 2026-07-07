# personality

Responsabilidad: definir la personalidad configurable de ZENIN.

Los rasgos viven en JSON para que puedan ajustarse sin reescribir motores. Ningun modulo debe codificar directamente el tono, la iniciativa o el nivel de humor.

Relaciones:

- `conversation` usara estos rasgos para prompts futuros;
- `decision-engine` puede leer limites de iniciativa;
- `ui` y `avatar` pueden adaptar expresion y tono visual.
