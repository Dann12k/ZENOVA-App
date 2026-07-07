# ZENIN Architecture

Esta carpeta contiene el nucleo independiente de ZENIN.

ZENIN no se define aqui como un chatbot. Se define como un companero digital de bienestar que puede observar eventos de ZENOVA, recordar informacion util con consentimiento, evaluar si debe intervenir y preparar contexto para un futuro proveedor de IA.

Esta fase no modifica la interfaz de ZENOVA, no conecta OpenAI y no simula respuestas inteligentes.

## Mapa de responsabilidades

| Carpeta | Responsabilidad |
| --- | --- |
| `avatar/` | Contratos visuales del avatar: expresion, postura, estado y adaptacion a tema. |
| `animations/` | Mapa configurable entre estados internos y animaciones futuras. |
| `achievement-system/` | Reconoce progreso saludable sin gamificacion excesiva. |
| `behavior-engine/` | Decide que hace ZENIN: celebrar, cuidar, motivar o sugerir. |
| `brain/` | Orquestador del nucleo: conecta eventos, memoria, contexto, decisiones y cola. |
| `care-engine/` | Evalua si el usuario podria necesitar apoyo aunque no lo haya pedido. |
| `celebration-engine/` | Prepara celebraciones suaves, medallas, particulas y mensajes unicos. |
| `conversation/` | Estructuras para sesiones conversacionales futuras, sin generar respuestas. |
| `context/` | Sintetiza datos utiles y evita enviar informacion sin filtrar a un modelo. |
| `decision-engine/` | Evalua oportunidades de intervencion sin redactar mensajes. |
| `daily-routine/` | Aprende horarios y momentos de uso para saludos o sugerencias futuras. |
| `emotion-engine/` | Calcula la emocion interna de ZENIN sin IA. |
| `emotion-memory/` | Guarda patrones emocionales resumidos y utiles. |
| `events/` | Event bus desacoplado para que ZENIN observe la plataforma sin invadirla. |
| `future-openai/` | Contrato de proveedor OpenAI futuro, subordinado a ZENIN. |
| `history/` | Historial tecnico de eventos y decisiones para auditoria local. |
| `humor-engine/` | Humor ligero, ocasional y no repetitivo. |
| `memory/` | Capas de memoria: sesion, corto plazo, largo plazo y contextual. |
| `models/` | Interfaz abstracta para proveedores futuros de IA. |
| `notification-engine/` | Modela tarjetas suaves con blur, autocierre y registro de ignoradas. |
| `observation-engine/` | Detecta patrones de uso sin diagnosticar ni usar IA. |
| `personality/` | Rasgos configurables de personalidad, tono e iniciativa. |
| `personality-engine/` | Convierte rasgos en estilo de comunicacion y limites. |
| `presence-engine/` | Decide cuando ZENIN puede aparecer sin resultar invasivo. |
| `proactive-events/` | Define eventos inteligentes como ausencia, mejora o logro cumplido. |
| `prompts/` | Contratos de prompts futuros; no contiene prompts activos de produccion. |
| `recommendations/` | Motor propio de sugerencias de herramientas, rutinas y recursos. |
| `relationship-engine/` | Modela confianza, constancia, progreso, interaccion y afinidad. |
| `scheduler/` | Cola de intervenciones, prioridades y periodos de enfriamiento. |
| `services/` | Fachada del nucleo para futuras integraciones con ZENOVA. |
| `speech/` | Contratos para voz futura, entrada/salida y accesibilidad. |
| `state/` | Maquina de estados interna de ZENIN. |
| `state-machine/` | Alias y punto de extension para maquinas de estado futuras. |
| `ui/` | Modelos de vista del avatar; no monta componentes visibles. |
| `utils/` | Utilidades compartidas sin dependencia de la interfaz. |
| `voice-ready/` | Capacidades declarativas para voz futura sin pedir permisos. |

## Principio de integracion

ZENOVA debera comunicarse con ZENIN mediante eventos y contratos, nunca llamando directamente a una funcion visual o a un proveedor de IA.

Flujo previsto:

1. ZENOVA publica eventos.
2. ZENIN registra y clasifica esos eventos.
3. La observacion detecta patrones sin diagnosticar.
4. La memoria actualiza solo lo necesario.
5. El contexto sintetiza datos permitidos.
6. Los motores de emocion, relacion, cuidado y presencia evaluan comportamiento.
7. El motor de decisiones y comportamiento crean oportunidades internas.
8. La cola prioriza o descarta intervenciones.
9. El avatar y la UI futura representan el estado sin generar dependencia.
10. Un proveedor de IA futuro solo recibira contexto sintetizado.

## Estado actual

Preparado para desarrollo posterior. No hay conexion a OpenAI, no hay respuestas generadas y no hay funcionalidades visibles nuevas.
