# future-openai

Responsabilidad: preparar un proveedor OpenAI futuro como modulo aislado.

OpenAI no controla avatar, emociones, presencia, personalidad, animaciones ni recomendaciones. Solo podra responder preguntas cuando ZENIN decida pedir generacion de lenguaje y siempre con contexto sintetizado.

Relaciones:

- implementa el contrato de `models`;
- recibe contexto desde `context`;
- no lee eventos, memoria cruda ni interfaz.
