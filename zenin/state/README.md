# state

Responsabilidad: controlar el estado interno de ZENIN mediante una maquina de estados.

Los estados no deben gestionarse con condiciones dispersas. Toda transicion debe validarse contra `states.json`.

Relaciones:

- `brain` cambia estados;
- `avatar` traduce estados a expresion y animacion;
- `scheduler` puede sugerir estados cuando una intervencion se activa.
