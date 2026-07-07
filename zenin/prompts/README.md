# prompts

Responsabilidad: guardar contratos de prompts futuros.

No hay prompts activos de produccion en esta fase. Este modulo define que todo prompt futuro debe recibir contexto sintetizado, identidad, limites y objetivo de intervencion, nunca datos crudos.

Relaciones:

- consume `personality`;
- consume contexto desde `context`;
- sera usado por `models` cuando exista un proveedor real.
