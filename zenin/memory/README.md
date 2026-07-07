# memory

Responsabilidad: administrar memoria independiente del proveedor de IA.

La memoria se divide por alcance:

- `session`: solo durante la sesion actual;
- `shortTerm`: dias o semanas recientes;
- `longTerm`: preferencias y patrones estables;
- `contextual`: informacion relevante para una conversacion o intervencion puntual.

Cada entrada debe tener origen, proposito, expiracion y preparacion para consentimiento o eliminacion.

Relaciones:

- recibe senales desde `brain`;
- entrega resumenes a `context`;
- nunca guarda datos innecesarios ni conversaciones completas por defecto.
