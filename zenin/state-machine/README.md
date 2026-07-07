# state-machine

Responsabilidad: compatibilidad arquitectonica para la maquina de estados.

La primera fase creo `state/` como implementacion base. Esta carpeta existe para respetar la nueva arquitectura solicitada sin duplicar logica ni reemplazar modulos funcionales.

Regla:

- `state/` conserva la implementacion.
- `state-machine/` actua como alias y punto de extension para maquinas adicionales.
- Ningun modulo debe crear condiciones dispersas para cambiar estados.
