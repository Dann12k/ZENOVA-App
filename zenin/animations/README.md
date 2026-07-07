# animations

Responsabilidad: asociar estados internos con animaciones futuras.

Las animaciones no se incrustan en codigo. Este modulo solo mantiene claves, metadatos y contratos para que en el futuro puedan usarse archivos Lottie, Rive o una alternativa CSS.

Relaciones:

- `state` define el estado;
- `avatar` consume la clave de animacion;
- `ui` decide como renderizar el recurso.
