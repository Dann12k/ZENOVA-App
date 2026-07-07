# emotion-memory

Responsabilidad: conservar patrones emocionales utiles y resumidos.

No almacena conversaciones completas. Guarda patrones como "los lunes suele iniciar cansado" o "respiracion reduce ansiedad" para que luego puedan viajar como contexto sintetizado.

Relaciones:

- recibe observaciones desde `observation-engine`;
- alimenta `context`;
- respeta la politica de `memory`.
