# models

Responsabilidad: definir proveedores de modelo intercambiables.

En esta fase no existe conexion con OpenAI ni con otro proveedor. El contrato permite que en el futuro OpenAI pueda sustituirse sin modificar memoria, contexto, decisiones, avatar o recomendaciones.

Relaciones:

- recibe solo contexto sintetizado desde `context`;
- no lee directamente almacenamiento ni eventos;
- debe respetar limites de seguridad definidos en `ZENIN_CORE.md`.

Archivos:

- `model-provider.mjs`: contrato abstracto de proveedor.
- `zenin-types.d.ts`: tipos publicos para eventos, emociones, relacion, decisiones y tarjetas.

Regla: ningun proveedor de IA puede controlar avatar, presencia, personalidad, emociones o recomendaciones.
