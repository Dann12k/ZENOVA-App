# decision-engine

Responsabilidad: decidir si ZENIN debe actuar, sin redactar mensajes.

El motor evalua reglas configurables y devuelve oportunidades de intervencion con prioridad y motivo. No toca la interfaz, no llama a IA y no impone acciones.

Relaciones:

- recibe contexto desde `context`;
- puede leer memoria resumida desde `memory`;
- envia decisiones a `scheduler`;
- puede usar recomendaciones desde `recommendations`.
