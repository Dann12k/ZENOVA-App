# ui

Responsabilidad: preparar modelos de vista para la futura presencia visual de ZENIN.

Este modulo no modifica el dashboard ni monta componentes. Solo define como una capa visual podria recibir estado, avatar e intervenciones.

Relaciones:

- consume `avatar`;
- puede leer intervenciones activas desde `scheduler`;
- debe respetar reglas de no interrupcion definidas en `ZENIN_CORE.md`.
