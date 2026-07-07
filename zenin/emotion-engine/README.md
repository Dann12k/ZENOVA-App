# emotion-engine

Responsabilidad: calcular el estado emocional interno de ZENIN sin usar IA.

El motor emocional no diagnostica al usuario. Solo traduce senales de uso y progreso en un estado expresivo para el avatar y para futuras intervenciones.

Relaciones:

- recibe contexto desde `context`;
- puede leer patrones desde `observation-engine` y `emotion-memory`;
- entrega estados visuales a `avatar` y `animations`;
- no decide presencia ni redacta mensajes.
