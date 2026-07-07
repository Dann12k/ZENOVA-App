# context

Responsabilidad: construir un contexto sintetizado y seguro antes de cualquier uso futuro de IA.

Este modulo es la unica puerta autorizada para preparar datos hacia un proveedor de modelo. No debe enviar registros crudos, historiales completos ni datos innecesarios.

Relaciones:

- lee fuentes internas de ZENOVA;
- consulta memoria de `memory`;
- entrega contexto a `decision-engine`, `recommendations` y `models`;
- aplica limites de cantidad, campos permitidos y resumen.
