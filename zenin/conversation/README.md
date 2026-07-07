# conversation

Responsabilidad: preparar estructuras para conversaciones futuras sin convertir ZENIN en un chatbot.

Este modulo no genera respuestas. Solo define sesiones, turnos, permisos de contexto y contratos para que una futura IA pueda conversar de forma limitada, segura y contextual.

Relaciones:

- recibe contexto sintetizado desde `context`;
- puede usar personalidad desde `personality`;
- usara un proveedor desde `models` cuando exista;
- debe respetar la cola de `scheduler`.
