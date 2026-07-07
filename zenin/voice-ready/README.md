# voice-ready

Responsabilidad: preparar la arquitectura para voz futura sin pedir permisos.

Este modulo reemplaza la idea de voz como funcionalidad inmediata por una capa lista para conectar entrada/salida de voz cuando la actividad lo requiera.

Relaciones:

- complementa `speech`;
- nunca activa microfono en esta fase;
- entrega capacidades declarativas a futuras UI.
