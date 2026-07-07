# care-engine

Responsabilidad: responder si el usuario podria necesitar ayuda aunque no la haya pedido.

El motor de cuidado no aparece por aparecer. Devuelve una senal de cuidado con motivo y severidad cuando hay contexto suficiente.

Relaciones:

- consume observaciones, contexto y memoria emocional;
- alimenta `presence-engine` y `behavior-engine`;
- nunca diagnostica ni ordena acciones.
