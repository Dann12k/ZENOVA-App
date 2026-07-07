# scheduler

Responsabilidad: administrar la cola de intervenciones.

ZENIN nunca debe mostrar dos intervenciones al mismo tiempo. Este modulo decide que oportunidad puede pasar, cual se pospone y cual se descarta por enfriamiento.

Relaciones:

- recibe decisiones desde `decision-engine`;
- informa cambios a `events`;
- puede modificar el estado en `state`;
- no renderiza UI.
