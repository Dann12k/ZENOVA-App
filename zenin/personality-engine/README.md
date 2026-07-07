# personality-engine

Responsabilidad: convertir la configuracion de personalidad en estilo de comportamiento.

Este motor separa personalidad de IA. ZENIN mantiene identidad propia aunque en el futuro OpenAI genere texto.

Relaciones:

- consume `personality/personality.json`;
- entrega estilo a `behavior-engine`, `conversation` y `future-openai`;
- nunca decide por si solo mostrar una intervencion.
