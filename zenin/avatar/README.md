# avatar

Responsabilidad: definir como se representa el avatar de ZENIN sin montar todavia una interfaz visible.

Este modulo describe expresion, postura, visibilidad, tema visual y estado emocional de presentacion. No incluye recursos graficos definitivos ni animaciones incrustadas.

Relaciones:

- lee estados desde `state`;
- usa claves de animacion declaradas en `animations`;
- entrega un modelo de vista a `ui`;
- nunca decide cuando intervenir.

Entradas admitidas:

- `emotion`;
- `gesture`;
- `animation`;
- `celebration`;
- `thinking`;
- `talking`;
- `walking`;
- `floating`;
- `sleeping`.
