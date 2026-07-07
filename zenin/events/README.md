# events

Responsabilidad: permitir que ZENIN observe ZENOVA sin acoplarse a sus componentes.

El event bus acepta eventos de aplicacion y los distribuye a modulos interesados. Esto evita que herramientas, login, calendario o registros llamen directamente al cerebro de ZENIN.

Relaciones:

- publica hacia `brain`;
- alimenta `history`;
- permite que `memory` y `decision-engine` reaccionen sin depender de UI.
