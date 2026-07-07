import { MemoryService } from "./memory";
import { ZeninPriority, ZeninScheduledIntervention, createId } from "./state";

export interface ZeninPhrase {
  id: string;
  category: ZeninPhraseCategory;
  text: string;
  tone: string;
  tags: string[];
}

export interface ZeninCuriosity {
  id: string;
  text: string;
  sourceDomain: "respiration" | "sleep" | "stress" | "attention" | "habits" | "movement" | "emotion";
}

export type ZeninPhraseCategory =
  | "greetings"
  | "farewells"
  | "recognition"
  | "humor"
  | "empathy"
  | "motivation"
  | "curiosities"
  | "breathing"
  | "habits"
  | "sleep"
  | "goals"
  | "anxiety"
  | "focus"
  | "celebration";

const categoryTopics: Record<ZeninPhraseCategory, string[]> = {
  greetings: ["este inicio", "tu espacio", "la sesion", "el dia", "tu regreso", "un paso pequeno", "tu energia", "la calma"],
  farewells: ["la pausa", "el cierre", "manana", "tu descanso", "el avance", "este momento", "la continuidad", "tu ritmo"],
  recognition: ["tu constancia", "tu registro", "tu esfuerzo", "tu claridad", "tu pausa", "tu eleccion", "tu progreso", "tu honestidad"],
  humor: ["modo calma", "bateria emocional", "pausa tecnica", "mente ocupada", "agenda interna", "respiracion premium", "plan pequeno", "cerebro curioso"],
  empathy: ["un dia pesado", "una emocion intensa", "una duda", "el cansancio", "la presion", "un pensamiento repetido", "un mal rato", "una carga"],
  motivation: ["un avance", "una accion pequena", "un minuto util", "una decision amable", "un reinicio", "un paso claro", "una meta simple", "un habito"],
  curiosities: ["el cuerpo", "la atencion", "el sueno", "la respiracion", "la memoria", "la calma", "el movimiento", "los habitos"],
  breathing: ["la exhalacion", "el ritmo", "la pausa", "el abdomen", "la nariz", "el aire", "la cuenta lenta", "el pecho"],
  habits: ["la repeticion", "el recordatorio", "la rutina", "la evidencia", "el pequeno cambio", "la practica", "la continuidad", "el registro"],
  sleep: ["la noche", "el descanso", "la luz", "el horario", "la pantalla", "la cafeina", "la recuperacion", "la memoria"],
  goals: ["la meta", "el objetivo", "el siguiente paso", "el plan", "la prioridad", "la accion", "la revision", "el cierre"],
  anxiety: ["el anclaje", "el presente", "la sensacion", "la seguridad", "la respiracion", "el entorno", "el pensamiento", "la pausa"],
  focus: ["la tarea", "la atencion", "el bloque", "el ruido", "la prioridad", "el descanso", "la lectura", "la concentracion"],
  celebration: ["tu logro", "el cierre", "la victoria pequena", "la herramienta completada", "el habito", "el progreso", "la meta", "el esfuerzo"]
};

const categoryTemplates: Record<ZeninPhraseCategory, string[]> = {
  greetings: [
    "Hola, estoy aqui para acompanar {topic} con calma.",
    "Me alegra verte; podemos empezar por {topic}.",
    "Bienvenido a ZENOVA, hoy cuidamos {topic} sin prisa.",
    "Estoy atento; {topic} puede ser un buen punto de partida."
  ],
  farewells: [
    "Cerramos {topic} con suavidad; lo hecho tambien cuenta.",
    "Podemos dejar {topic} en pausa y retomarlo luego.",
    "Gracias por cuidar {topic}; manana seguimos con calma.",
    "Me quedo guardando {topic} para continuar cuando vuelvas."
  ],
  recognition: [
    "Note {topic}; ese detalle suma mas de lo que parece.",
    "Hay valor en {topic}, incluso si fue breve.",
    "ZENIN registra {topic} como una senal positiva.",
    "Buen movimiento: {topic} ayuda a construir continuidad."
  ],
  humor: [
    "Activando {topic}, version tranquila y sin drama.",
    "Parece que {topic} pidio un descanso elegante.",
    "ZENIN informa: {topic} funciona mejor con un poco de aire.",
    "Mini reporte: {topic} merece una pausa con estilo."
  ],
  empathy: [
    "Si aparece {topic}, podemos ir mas lento.",
    "No tienes que resolver {topic} de golpe.",
    "Estoy aqui para acompanar {topic} sin juzgar.",
    "Podemos darle espacio a {topic} y elegir un paso pequeno."
  ],
  motivation: [
    "{topic} empieza mejor cuando lo hacemos simple.",
    "Un paso hacia {topic} ya cambia la direccion.",
    "No hace falta hacerlo perfecto; basta acercarse a {topic}.",
    "Hoy podemos cuidar {topic} con una accion pequena."
  ],
  curiosities: [
    "Dato breve sobre {topic}: lo pequeno tambien modifica el estado interno.",
    "Curiosidad: {topic} suele mejorar cuando reducimos ruido y prisa.",
    "ZENIN aprendio algo sobre {topic} y lo guardo para el momento adecuado.",
    "Microdato: {topic} responde bien a pausas breves y repetidas."
  ],
  breathing: [
    "Probemos que {topic} sea mas lenta que la inhalacion.",
    "Si cuidamos {topic}, el cuerpo recibe una senal de calma.",
    "ZENIN sugiere observar {topic} sin forzar nada.",
    "Un minuto con {topic} puede ordenar el momento."
  ],
  habits: [
    "{topic} se fortalece cuando es facil de repetir.",
    "Un habito no necesita ser grande; {topic} necesita ser posible.",
    "ZENIN observa {topic} como parte de tu continuidad.",
    "Podemos hacer que {topic} sea visible y amable."
  ],
  sleep: [
    "Para {topic}, lo suave suele funcionar mejor que lo intenso.",
    "Cuidar {topic} tambien cuida la memoria y el animo.",
    "ZENIN sugiere bajar el ritmo antes de {topic}.",
    "Un ritual simple puede preparar {topic}."
  ],
  goals: [
    "{topic} se vuelve mas clara cuando elegimos un siguiente paso.",
    "Podemos dividir {topic} hasta que sea manejable.",
    "ZENIN guardara {topic} como una ruta, no como una presion.",
    "Hoy basta con acercarnos a {topic}."
  ],
  anxiety: [
    "Para {topic}, primero volvemos al cuerpo y al entorno.",
    "Si {topic} sube, usemos una senal concreta del presente.",
    "ZENIN sugiere mirar {topic} con calma, no pelear con ello.",
    "Podemos atravesar {topic} con un ejercicio corto."
  ],
  focus: [
    "{topic} mejora cuando reducimos una distraccion a la vez.",
    "Probemos proteger {topic} durante pocos minutos.",
    "ZENIN puede ayudarte a cerrar ruido alrededor de {topic}.",
    "Una pausa breve tambien forma parte de {topic}."
  ],
  celebration: [
    "Celebramos {topic}; lo pequeno tambien deja huella.",
    "ZENIN registra {topic} como un logro real.",
    "Buen cierre: {topic} merece brillo tranquilo.",
    "Eso cuenta: {topic} fortalece tu progreso."
  ]
};

const curiosityFacts: Array<Omit<ZeninCuriosity, "id">> = [
  { text: "Respirar lento puede aumentar la variabilidad de la frecuencia cardiaca.", sourceDomain: "respiration" },
  { text: "Exhalar mas largo se asocia con mayor activacion parasimpatica.", sourceDomain: "respiration" },
  { text: "Dormir ayuda a consolidar recuerdos.", sourceDomain: "sleep" },
  { text: "La luz de la manana ayuda a sincronizar el ritmo circadiano.", sourceDomain: "sleep" },
  { text: "Caminar aumenta el flujo sanguineo y puede mejorar la atencion.", sourceDomain: "movement" },
  { text: "Pausas breves reducen la fatiga mental durante tareas largas.", sourceDomain: "attention" },
  { text: "Nombrar una emocion puede reducir su intensidad percibida.", sourceDomain: "emotion" },
  { text: "Escribir preocupaciones ayuda a ordenar pensamientos.", sourceDomain: "emotion" },
  { text: "La relajacion muscular progresiva puede reducir tension corporal.", sourceDomain: "stress" },
  { text: "Mindfulness entrena la atencion hacia el presente.", sourceDomain: "attention" },
  { text: "El apoyo social amortigua efectos del estres.", sourceDomain: "stress" },
  { text: "El ruido constante puede aumentar la carga cognitiva.", sourceDomain: "attention" },
  { text: "La hidratacion apoya funciones cognitivas basicas.", sourceDomain: "habits" },
  { text: "La gratitud se asocia con mayor bienestar subjetivo.", sourceDomain: "emotion" },
  { text: "La musica lenta puede reducir la activacion fisiologica.", sourceDomain: "stress" },
  { text: "El estiramiento suave puede disminuir rigidez muscular.", sourceDomain: "movement" },
  { text: "Respirar por la nariz filtra y humedece el aire.", sourceDomain: "respiration" },
  { text: "La actividad fisica regular apoya la calidad del sueno.", sourceDomain: "movement" },
  { text: "Los espacios verdes se asocian con menor estres percibido.", sourceDomain: "stress" },
  { text: "La rumiacion puede prolongar la respuesta de estres.", sourceDomain: "stress" },
  { text: "Las metas pequenas aumentan la probabilidad de adherencia.", sourceDomain: "habits" },
  { text: "El descanso ocular reduce fatiga visual en pantallas.", sourceDomain: "attention" },
  { text: "La cafeina tarde puede interferir con el sueno.", sourceDomain: "sleep" },
  { text: "Un horario constante favorece la regulacion del sueno.", sourceDomain: "sleep" },
  { text: "La atencion sostenida mejora con descansos planificados.", sourceDomain: "attention" },
  { text: "Hablar con alguien confiable puede aliviar carga emocional.", sourceDomain: "emotion" },
  { text: "La postura influye en la comodidad respiratoria.", sourceDomain: "respiration" },
  { text: "Registrar habitos aumenta conciencia de patrones.", sourceDomain: "habits" },
  { text: "Respirar alrededor de seis veces por minuto se usa en relajacion.", sourceDomain: "respiration" },
  { text: "Las tecnicas de grounding orientan la atencion al presente.", sourceDomain: "attention" },
  { text: "Dormir poco puede aumentar reactividad emocional.", sourceDomain: "sleep" },
  { text: "La respiracion diafragmatica moviliza abdomen y pecho bajo.", sourceDomain: "respiration" },
  { text: "La autocompasion se asocia con mayor resiliencia.", sourceDomain: "emotion" },
  { text: "Ordenar tareas reduce carga de memoria de trabajo.", sourceDomain: "attention" },
  { text: "La exposicion a pantallas brillantes de noche puede retrasar el sueno.", sourceDomain: "sleep" },
  { text: "La respiracion consciente puede mejorar la sensacion de control.", sourceDomain: "respiration" }
];

const curiosityPrefixes = [
  "Dato breve",
  "Microdato",
  "Apunte real",
  "Nota util",
  "Curiosidad",
  "Recordatorio",
  "Senal cientifica",
  "Dato ZENIN"
];

export const ZENIN_MESSAGE_LIBRARY: ZeninPhrase[] = createPhraseLibrary();
export const ZENIN_CURIOSITY_LIBRARY: ZeninCuriosity[] = createCuriosityLibrary();

export class PhraseService {
  constructor(private readonly memory?: MemoryService) {}

  async choose(category: ZeninPhraseCategory, options: { priority?: ZeninPriority; tags?: string[] } = {}): Promise<ZeninPhrase> {
    const memory = this.memory ? await this.memory.load() : null;
    const recent = new Set(memory?.shownPhrases.slice(-80) || []);
    const candidates = ZENIN_MESSAGE_LIBRARY.filter((phrase) => phrase.category === category && !recent.has(phrase.id));
    const fallback = ZENIN_MESSAGE_LIBRARY.filter((phrase) => phrase.category === category);
    const pool = candidates.length ? candidates : fallback;
    const phrase = pool[Math.floor(Math.random() * pool.length)] || ZENIN_MESSAGE_LIBRARY[0];
    if (this.memory) await this.memory.rememberPhrase(phrase.id);
    return { ...phrase, tags: [...phrase.tags, ...(options.tags || [])] };
  }

  async curiosity(): Promise<ZeninCuriosity> {
    const memory = this.memory ? await this.memory.load() : null;
    const recent = new Set(memory?.adviceGiven.slice(-80) || []);
    const candidates = ZENIN_CURIOSITY_LIBRARY.filter((curiosity) => !recent.has(curiosity.id));
    const curiosity = (candidates.length ? candidates : ZENIN_CURIOSITY_LIBRARY)[Math.floor(Math.random() * (candidates.length || ZENIN_CURIOSITY_LIBRARY.length))];
    if (this.memory) await this.memory.rememberAdvice(curiosity.id);
    return curiosity;
  }
}

export class NotificationComposer {
  constructor(private readonly phrases = new PhraseService()) {}

  async compose(intervention: ZeninScheduledIntervention): Promise<{
    id: string;
    priority: ZeninPriority;
    text: string;
    kind: ZeninScheduledIntervention["kind"];
    payload: unknown;
  }> {
    if (intervention.kind === "curiosity") {
      const curiosity = await this.phrases.curiosity();
      return {
        id: createId("notification"),
        priority: intervention.priority,
        text: curiosity.text,
        kind: intervention.kind,
        payload: { curiosity, intervention }
      };
    }

    const category = categoryForIntervention(intervention);
    const phrase = await this.phrases.choose(category, { priority: intervention.priority });
    return {
      id: createId("notification"),
      priority: intervention.priority,
      text: phrase.text,
      kind: intervention.kind,
      payload: { phrase, intervention }
    };
  }
}

export function createPhraseLibrary(): ZeninPhrase[] {
  return (Object.keys(categoryTopics) as ZeninPhraseCategory[]).flatMap((category) => {
    const topics = categoryTopics[category];
    const templates = categoryTemplates[category];
    return topics.flatMap((topic, topicIndex) =>
      templates.map((template, templateIndex) => ({
        id: `phrase-${category}-${topicIndex}-${templateIndex}`,
        category,
        text: template.replace("{topic}", topic),
        tone: category === "humor" ? "light" : category === "empathy" ? "gentle" : category === "celebration" ? "bright" : "warm",
        tags: [category, topic]
      }))
    );
  });
}

export function createCuriosityLibrary(): ZeninCuriosity[] {
  return curiosityFacts.flatMap((fact, factIndex) =>
    curiosityPrefixes.map((prefix, prefixIndex) => ({
      id: `curiosity-${factIndex}-${prefixIndex}`,
      text: `${prefix}: ${fact.text}`,
      sourceDomain: fact.sourceDomain
    }))
  );
}

function categoryForIntervention(intervention: ZeninScheduledIntervention): ZeninPhraseCategory {
  if (intervention.kind === "recommendation") return "motivation";
  if (intervention.priority === "Critical" || intervention.priority === "High") return "empathy";
  if (intervention.reason.toLowerCase().includes("complet")) return "celebration";
  return "recognition";
}
