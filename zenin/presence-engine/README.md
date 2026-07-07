# presence-engine

Responsabilidad: decidir cuando ZENIN puede aparecer.

No decide el contenido final ni la emocion. Solo determina si una presencia suave esta permitida segun contexto, enfriamiento e historial.

Relaciones:

- consume senales de `care-engine`, `achievement-system`, `proactive-events` y eventos recientes;
- registra apariciones para evitar molestar;
- alimenta `scheduler`.
