# brain

Responsabilidad: orquestar el nucleo de ZENIN.

El cerebro no genera texto, no decide la interfaz y no llama a OpenAI. Su tarea es conectar eventos, memoria, contexto, recomendaciones, decisiones, cola de intervenciones y estado interno.

Relaciones:

- recibe eventos desde `events`;
- actualiza `history` y `memory`;
- solicita contexto a `context`;
- pregunta a `decision-engine`;
- envia oportunidades a `scheduler`.
