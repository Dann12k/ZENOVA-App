# notification-engine

Responsabilidad: preparar tarjetas suaves de notificacion.

No usa alertas tradicionales. No monta DOM. Devuelve modelos para tarjetas con blur, deslizamiento, cierre automatico y registro de ignoradas.

Relaciones:

- recibe acciones desde `behavior-engine` o `scheduler`;
- puede representar celebraciones desde `celebration-engine`;
- registra ignoradas para `presence-engine`.
