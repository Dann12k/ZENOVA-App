const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

const text = {
  es: {
    "nav.evaluation": "Evaluación",
    "nav.tools": "Herramientas",
    "nav.tracking": "Seguimiento",
    "nav.chat": "Chat IA",
    "nav.value": "Valor",
    "language.label": "Idioma",
    "auth.login": "Iniciar sesión",
    "auth.logout": "Salir",
    "auth.register": "Registrarme",
    "auth.visual": "Accede a tu espacio personal de bienestar.",
    "auth.loginTitle": "Bienvenido de nuevo",
    "auth.registerTitle": "Crea tu cuenta",
    "auth.email": "Correo",
    "auth.password": "Contraseña",
    "auth.name": "Nombre",
    "auth.enter": "Entrar",
    "auth.create": "Crear cuenta",
    "auth.guest": "Continuar como invitado",
    "mode.calm": "Modo calma",
    "mode.normal": "Modo normal",
    "session.guest": "Sesión de invitado",
    "session.hello": "Hola",
    "hero.eyebrow": "Transformando estrés en bienestar",
    "hero.title": "Panel de bienestar emocional ZENOVA",
    "hero.lede":
      "Una plataforma digital para identificar, reducir y gestionar el estrés con evaluación inicial, intervención inmediata, recursos personalizados y seguimiento diario.",
    "hero.start": "Iniciar evaluación",
    "hero.breathe": "Respirar ahora",
    "hero.estimated": "nivel estimado",
    "metric.sleep": "Sueño",
    "metric.stress": "Estrés",
    "metric.mood": "Ánimo",
    "evaluation.eyebrow": "Evaluación inteligente del estrés",
    "evaluation.title": "Test inicial personalizado",
    "evaluation.text":
      "La evaluación combina ansiedad, sueño, presión diaria y contexto personal para generar un perfil de estrés y un plan de apoyo inmediato.",
    "evaluation.type": "Tipo de estrés principal",
    "evaluation.current": "Estrés actual",
    "evaluation.sleepHours": "Horas de sueño",
    "evaluation.anxiety": "Ansiedad o agitación",
    "evaluation.need": "¿Qué necesitas ahora?",
    "evaluation.generate": "Generar perfil",
    "type.academic": "Académico",
    "type.work": "Laboral",
    "type.family": "Familiar",
    "type.social": "Social",
    "type.finance": "Financiero",
    "need.calm": "Calmar mi mente",
    "need.order": "Organizar mis pensamientos",
    "need.rest": "Descansar mejor",
    "need.focus": "Recuperar enfoque",
    "result.profile": "Perfil generado",
    "result.empty": "Completa el test para recibir una lectura inicial y recomendaciones según tu situación.",
    "result.plan": "Plan recomendado",
    "plan.default1": "Respiración guiada de 2 minutos.",
    "plan.default2": "Registro emocional diario.",
    "plan.default3": "Recursos personalizados por tipo de estrés.",
    "tools.eyebrow": "Intervención emocional inmediata",
    "tools.title": "Herramientas antiestrés",
    "breath.title": "Respiración guiada",
    "breath.text":
      "Secuencia de inhalación, pausa y exhalación para reducir la activación física y recuperar equilibrio.",
    "breath.start": "Iniciar",
    "breath.pause": "Pausar",
    "breath.reset": "Reiniciar",
    "breath.ready": "Listo",
    "breath.inhale": "Inhala",
    "breath.hold": "Mantén",
    "breath.exhale": "Exhala",
    "breath.done": "Completado",
    "tracking.eyebrow": "Seguimiento conductual",
    "tracking.title": "Registro emocional diario",
    "tracking.text":
      "ZENOVA registra patrones de sueño, estrés y ansiedad para detectar momentos críticos y reforzar hábitos saludables.",
    "tracking.todayStress": "Estrés de hoy",
    "tracking.lastSleep": "Sueño de anoche",
    "tracking.moment": "Momento de mayor ansiedad",
    "tracking.note": "Nota breve",
    "tracking.notePlaceholder": "Ej.: examen, reunión, cansancio...",
    "tracking.save": "Guardar registro",
    "tracking.lastEntries": "Últimos registros",
    "tracking.patternTitle": "Patrón detectado",
    "tracking.patternEmpty": "Guarda al menos un registro para que ZENOVA identifique tu tendencia reciente.",
    "moment.morning": "Mañana",
    "moment.afternoon": "Tarde",
    "moment.night": "Noche",
    "moment.work": "Durante clases o trabajo",
    "chat.eyebrow": "Orientacion tematica ZENIN",
    "chat.title": "Consulta sobre estrés y bienestar",
    "chat.text":
      "El asistente responde preguntas relacionadas con ZENOVA, manejo del estrés, respiración, seguimiento emocional y hábitos de bienestar.",
    "chat.quick1": "Estrés académico",
    "chat.quick2": "Ansiedad ahora",
    "chat.quick3": "Cómo funciona",
    "chat.status": "Enfocada en bienestar emocional",
    "chat.placeholder": "Pregunta sobre estrés, sueño, respiración o ZENOVA...",
    "chat.send": "Enviar",
    "visual.text":
      "Tranquilidad, equilibrio emocional e innovación tecnológica en una experiencia accesible y preventiva.",
    "value.eyebrow": "Propuesta de valor",
    "value.title": "Una sola plataforma para prevenir y controlar el estrés",
    "value.text":
      "ZENOVA se diferencia porque no ofrece solo relajación general: identifica causas, personaliza recursos, acompaña el seguimiento y adapta la experiencia al tipo de estrés del usuario.",
    "value.approval": "Aprobación proyectada",
    "value.payment": "Intención de pago",
    "value.premium": "Rango premium accesible",
    "safety.title": "Apoyo responsable",
    "safety.text":
      "ZENOVA es un prototipo de bienestar y no reemplaza la atención psicológica profesional. Si una persona siente riesgo de hacerse daño o está en una emergencia, debe contactar a servicios de emergencia o apoyo especializado de su localidad.",
    "footer.text": "Gestión personalizada del estrés"
  },
  en: {
    "nav.evaluation": "Assessment",
    "nav.tools": "Tools",
    "nav.tracking": "Tracking",
    "nav.chat": "AI Chat",
    "nav.value": "Value",
    "language.label": "Language",
    "auth.login": "Sign in",
    "auth.logout": "Log out",
    "auth.register": "Register",
    "auth.visual": "Enter your personal wellbeing space.",
    "auth.loginTitle": "Welcome back",
    "auth.registerTitle": "Create your account",
    "auth.email": "Email",
    "auth.password": "Password",
    "auth.name": "Name",
    "auth.enter": "Enter",
    "auth.create": "Create account",
    "auth.guest": "Continue as guest",
    "mode.calm": "Calm mode",
    "mode.normal": "Normal mode",
    "session.guest": "Guest session",
    "session.hello": "Hello",
    "hero.eyebrow": "Turning stress into wellbeing",
    "hero.title": "ZENOVA emotional wellbeing panel",
    "hero.lede":
      "A digital platform to identify, reduce, and manage stress with an initial assessment, immediate intervention, personalized resources, and daily tracking.",
    "hero.start": "Start assessment",
    "hero.breathe": "Breathe now",
    "hero.estimated": "estimated level",
    "metric.sleep": "Sleep",
    "metric.stress": "Stress",
    "metric.mood": "Mood",
    "evaluation.eyebrow": "Smart stress assessment",
    "evaluation.title": "Personalized initial test",
    "evaluation.text":
      "The assessment combines anxiety, sleep, daily pressure, and personal context to create a stress profile and an immediate support plan.",
    "evaluation.type": "Main stress type",
    "evaluation.current": "Current stress",
    "evaluation.sleepHours": "Hours of sleep",
    "evaluation.anxiety": "Anxiety or agitation",
    "evaluation.need": "What do you need now?",
    "evaluation.generate": "Generate profile",
    "type.academic": "Academic",
    "type.work": "Work",
    "type.family": "Family",
    "type.social": "Social",
    "type.finance": "Financial",
    "need.calm": "Calm my mind",
    "need.order": "Organize my thoughts",
    "need.rest": "Sleep better",
    "need.focus": "Regain focus",
    "result.profile": "Generated profile",
    "result.empty": "Complete the test to receive an initial reading and recommendations for your situation.",
    "result.plan": "Recommended plan",
    "plan.default1": "Two-minute guided breathing.",
    "plan.default2": "Daily emotional log.",
    "plan.default3": "Personalized resources by stress type.",
    "tools.eyebrow": "Immediate emotional intervention",
    "tools.title": "Anti-stress tools",
    "breath.title": "Guided breathing",
    "breath.text":
      "A sequence of inhale, pause, and exhale to reduce physical activation and restore balance.",
    "breath.start": "Start",
    "breath.pause": "Pause",
    "breath.reset": "Reset",
    "breath.ready": "Ready",
    "breath.inhale": "Inhale",
    "breath.hold": "Hold",
    "breath.exhale": "Exhale",
    "breath.done": "Complete",
    "tracking.eyebrow": "Behavior tracking",
    "tracking.title": "Daily emotional log",
    "tracking.text":
      "ZENOVA records sleep, stress, and anxiety patterns to detect critical moments and reinforce healthy habits.",
    "tracking.todayStress": "Today's stress",
    "tracking.lastSleep": "Last night's sleep",
    "tracking.moment": "Highest anxiety moment",
    "tracking.note": "Short note",
    "tracking.notePlaceholder": "E.g.: exam, meeting, tiredness...",
    "tracking.save": "Save log",
    "tracking.lastEntries": "Latest logs",
    "tracking.patternTitle": "Detected pattern",
    "tracking.patternEmpty": "Save at least one log so ZENOVA can identify your recent trend.",
    "moment.morning": "Morning",
    "moment.afternoon": "Afternoon",
    "moment.night": "Night",
    "moment.work": "During class or work",
    "chat.eyebrow": "Topic-based AI chat",
    "chat.title": "Ask about stress and wellbeing",
    "chat.text":
      "The assistant answers questions related to ZENOVA, stress management, breathing, emotional tracking, and wellbeing habits.",
    "chat.quick1": "Academic stress",
    "chat.quick2": "Anxiety now",
    "chat.quick3": "How it works",
    "chat.status": "Focused on emotional wellbeing",
    "chat.placeholder": "Ask about stress, sleep, breathing, or ZENOVA...",
    "chat.send": "Send",
    "visual.text": "Calm, emotional balance, and technological innovation in an accessible preventive experience.",
    "value.eyebrow": "Value proposition",
    "value.title": "One platform to prevent and control stress",
    "value.text":
      "ZENOVA stands out because it does not offer only general relaxation: it identifies causes, personalizes resources, supports tracking, and adapts the experience to each stress type.",
    "value.approval": "Projected approval",
    "value.payment": "Payment intention",
    "value.premium": "Accessible premium range",
    "safety.title": "Responsible support",
    "safety.text":
      "ZENOVA is a wellbeing prototype and does not replace professional psychological care. If someone feels at risk of self-harm or is in an emergency, they should contact emergency services or specialized local support.",
    "footer.text": "Personalized stress management"
  },
  pt: {
    "nav.evaluation": "Avaliação",
    "nav.tools": "Ferramentas",
    "nav.tracking": "Acompanhamento",
    "nav.chat": "Chat IA",
    "nav.value": "Valor",
    "language.label": "Idioma",
    "auth.login": "Entrar",
    "auth.logout": "Sair",
    "auth.register": "Registrar",
    "auth.visual": "Acesse seu espaço pessoal de bem-estar.",
    "auth.loginTitle": "Bem-vindo de volta",
    "auth.registerTitle": "Crie sua conta",
    "auth.email": "E-mail",
    "auth.password": "Senha",
    "auth.name": "Nome",
    "auth.enter": "Entrar",
    "auth.create": "Criar conta",
    "auth.guest": "Continuar como convidado",
    "mode.calm": "Modo calma",
    "mode.normal": "Modo normal",
    "session.guest": "Sessão de convidado",
    "session.hello": "Olá",
    "hero.eyebrow": "Transformando estresse em bem-estar",
    "hero.title": "Painel de bem-estar emocional ZENOVA",
    "hero.lede":
      "Uma plataforma digital para identificar, reduzir e gerenciar o estresse com avaliação inicial, intervenção imediata, recursos personalizados e acompanhamento diário.",
    "hero.start": "Iniciar avaliação",
    "hero.breathe": "Respirar agora",
    "hero.estimated": "nível estimado",
    "metric.sleep": "Sono",
    "metric.stress": "Estresse",
    "metric.mood": "Ânimo",
    "evaluation.eyebrow": "Avaliação inteligente do estresse",
    "evaluation.title": "Teste inicial personalizado",
    "evaluation.text":
      "A avaliação combina ansiedade, sono, pressão diária e contexto pessoal para gerar um perfil de estresse e um plano de apoio imediato.",
    "evaluation.type": "Tipo principal de estresse",
    "evaluation.current": "Estresse atual",
    "evaluation.sleepHours": "Horas de sono",
    "evaluation.anxiety": "Ansiedade ou agitação",
    "evaluation.need": "O que você precisa agora?",
    "evaluation.generate": "Gerar perfil",
    "type.academic": "Acadêmico",
    "type.work": "Trabalho",
    "type.family": "Família",
    "type.social": "Social",
    "type.finance": "Financeiro",
    "need.calm": "Acalmar minha mente",
    "need.order": "Organizar meus pensamentos",
    "need.rest": "Dormir melhor",
    "need.focus": "Recuperar foco",
    "result.profile": "Perfil gerado",
    "result.empty": "Complete o teste para receber uma leitura inicial e recomendações para sua situação.",
    "result.plan": "Plano recomendado",
    "plan.default1": "Respiração guiada de 2 minutos.",
    "plan.default2": "Registro emocional diário.",
    "plan.default3": "Recursos personalizados por tipo de estresse.",
    "tools.eyebrow": "Intervenção emocional imediata",
    "tools.title": "Ferramentas antiestresse",
    "breath.title": "Respiração guiada",
    "breath.text":
      "Sequência de inspiração, pausa e expiração para reduzir a ativação física e recuperar equilíbrio.",
    "breath.start": "Iniciar",
    "breath.pause": "Pausar",
    "breath.reset": "Reiniciar",
    "breath.ready": "Pronto",
    "breath.inhale": "Inspire",
    "breath.hold": "Segure",
    "breath.exhale": "Expire",
    "breath.done": "Concluído",
    "tracking.eyebrow": "Acompanhamento comportamental",
    "tracking.title": "Registro emocional diário",
    "tracking.text":
      "ZENOVA registra padrões de sono, estresse e ansiedade para detectar momentos críticos e fortalecer hábitos saudáveis.",
    "tracking.todayStress": "Estresse de hoje",
    "tracking.lastSleep": "Sono da noite anterior",
    "tracking.moment": "Momento de maior ansiedade",
    "tracking.note": "Nota breve",
    "tracking.notePlaceholder": "Ex.: prova, reunião, cansaço...",
    "tracking.save": "Salvar registro",
    "tracking.lastEntries": "Últimos registros",
    "tracking.patternTitle": "Padrão detectado",
    "tracking.patternEmpty": "Salve pelo menos um registro para que ZENOVA identifique sua tendência recente.",
    "moment.morning": "Manhã",
    "moment.afternoon": "Tarde",
    "moment.night": "Noite",
    "moment.work": "Durante aula ou trabalho",
    "chat.eyebrow": "Chat com IA temática",
    "chat.title": "Consulte sobre estresse e bem-estar",
    "chat.text":
      "O assistente responde perguntas relacionadas a ZENOVA, manejo do estresse, respiração, acompanhamento emocional e hábitos de bem-estar.",
    "chat.quick1": "Estresse acadêmico",
    "chat.quick2": "Ansiedade agora",
    "chat.quick3": "Como funciona",
    "chat.status": "Focada no bem-estar emocional",
    "chat.placeholder": "Pergunte sobre estresse, sono, respiração ou ZENOVA...",
    "chat.send": "Enviar",
    "visual.text": "Tranquilidade, equilíbrio emocional e inovação tecnológica em uma experiência acessível e preventiva.",
    "value.eyebrow": "Proposta de valor",
    "value.title": "Uma plataforma para prevenir e controlar o estresse",
    "value.text":
      "ZENOVA se diferencia porque não oferece apenas relaxamento geral: identifica causas, personaliza recursos, acompanha o progresso e adapta a experiência ao tipo de estresse.",
    "value.approval": "Aprovação projetada",
    "value.payment": "Intenção de pagamento",
    "value.premium": "Faixa premium acessível",
    "safety.title": "Apoio responsável",
    "safety.text":
      "ZENOVA é um protótipo de bem-estar e não substitui o atendimento psicológico profissional. Se uma pessoa sentir risco de se machucar ou estiver em emergência, deve contatar serviços de emergência ou apoio especializado local.",
    "footer.text": "Gestão personalizada do estresse"
  }
};

const resources = {
  es: {
    academico: {
      title: "Estrés académico",
      summary: "Apoyo para presión por exámenes, tareas, entregas y rendimiento estudiantil.",
      items: [
        "Bloque de estudio 25/5 con descanso activo.",
        "Lista de pendientes dividida en urgentes, importantes y pausables.",
        "Respiración 4-4-6 antes de una evaluación.",
        "Revisión de sueño cuando el cansancio eleva la ansiedad."
      ]
    },
    laboral: {
      title: "Estrés laboral",
      summary: "Recursos para burnout, carga de trabajo, reuniones exigentes y presión de productividad.",
      items: [
        "Pausa de regulación al iniciar y cerrar la jornada.",
        "Mapa de tareas: delegar, aplazar, resolver, pedir apoyo.",
        "Técnica de grounding después de una reunión intensa.",
        "Registro de momentos de mayor ansiedad durante el día."
      ]
    },
    familiar: {
      title: "Estrés familiar",
      summary: "Herramientas para responsabilidades del hogar, conflictos y sobrecarga emocional.",
      items: [
        "Guion breve para expresar necesidades sin escalar el conflicto.",
        "Pausa de respiración antes de responder en una discusión.",
        "Rutina de descanso compartida y límites de horario.",
        "Registro de situaciones repetidas para detectar patrones."
      ]
    },
    social: {
      title: "Estrés social",
      summary: "Apoyo para ansiedad social, presión del entorno y dificultad para pedir ayuda.",
      items: [
        "Preparar una frase de salida para momentos de saturación.",
        "Ejercicio de atención plena de 60 segundos antes de interactuar.",
        "Identificar pensamientos automáticos y reemplazarlos por alternativas realistas.",
        "Elegir una red segura de apoyo."
      ]
    },
    financiero: {
      title: "Estrés financiero",
      summary: "Recursos para preocupación económica, deudas, pagos pendientes y toma de decisiones.",
      items: [
        "Separar gastos fijos, variables y aplazables.",
        "Elegir una acción concreta para las próximas 24 horas.",
        "Respiración guiada antes de revisar cuentas o deudas.",
        "Plan semanal con prioridades realistas."
      ]
    }
  },
  en: {
    academico: {
      title: "Academic stress",
      summary: "Support for exams, tasks, deadlines, and academic performance pressure.",
      items: [
        "Use a 25/5 study block with active breaks.",
        "Split tasks into urgent, important, and pausible.",
        "Try 4-4-6 breathing before an exam.",
        "Review sleep when tiredness increases anxiety."
      ]
    },
    laboral: {
      title: "Work stress",
      summary: "Resources for burnout, workload, demanding meetings, and productivity pressure.",
      items: [
        "Take a regulation pause at the start and end of the workday.",
        "Map tasks as delegate, postpone, solve, or ask for support.",
        "Use grounding after an intense meeting.",
        "Record the moments when anxiety rises."
      ]
    },
    familiar: {
      title: "Family stress",
      summary: "Tools for home responsibilities, conflict, and emotional overload.",
      items: [
        "Use a short script to express needs without escalating conflict.",
        "Pause and breathe before responding in a discussion.",
        "Create shared rest routines and time limits.",
        "Record repeated situations to detect patterns."
      ]
    },
    social: {
      title: "Social stress",
      summary: "Support for social anxiety, pressure from others, and difficulty asking for help.",
      items: [
        "Prepare a simple exit phrase for overwhelming moments.",
        "Do a 60-second mindfulness exercise before interacting.",
        "Identify automatic thoughts and replace them with realistic alternatives.",
        "Choose a safe support network."
      ]
    },
    financiero: {
      title: "Financial stress",
      summary: "Resources for money worries, debt, pending payments, and decisions.",
      items: [
        "Separate fixed, variable, and postponable expenses.",
        "Choose one concrete action for the next 24 hours.",
        "Use guided breathing before reviewing accounts or debt.",
        "Create a weekly plan with realistic priorities."
      ]
    }
  },
  pt: {
    academico: {
      title: "Estresse acadêmico",
      summary: "Apoio para pressão por provas, tarefas, entregas e rendimento estudantil.",
      items: [
        "Use blocos de estudo 25/5 com descanso ativo.",
        "Divida pendências em urgentes, importantes e pausáveis.",
        "Faça respiração 4-4-6 antes de uma avaliação.",
        "Revise o sono quando o cansaço aumenta a ansiedade."
      ]
    },
    laboral: {
      title: "Estresse no trabalho",
      summary: "Recursos para burnout, carga de trabalho, reuniões exigentes e produtividade.",
      items: [
        "Faça uma pausa de regulação ao iniciar e encerrar o dia.",
        "Mapeie tarefas: delegar, adiar, resolver ou pedir apoio.",
        "Use grounding depois de uma reunião intensa.",
        "Registre momentos de maior ansiedade durante o dia."
      ]
    },
    familiar: {
      title: "Estresse familiar",
      summary: "Ferramentas para responsabilidades do lar, conflitos e sobrecarga emocional.",
      items: [
        "Use um roteiro breve para expressar necessidades sem aumentar o conflito.",
        "Pause e respire antes de responder em uma discussão.",
        "Crie rotinas de descanso compartilhadas e limites de horário.",
        "Registre situações repetidas para detectar padrões."
      ]
    },
    social: {
      title: "Estresse social",
      summary: "Apoio para ansiedade social, pressão do ambiente e dificuldade de pedir ajuda.",
      items: [
        "Prepare uma frase de saída para momentos de saturação.",
        "Faça atenção plena por 60 segundos antes de interagir.",
        "Identifique pensamentos automáticos e substitua por alternativas realistas.",
        "Escolha uma rede segura de apoio."
      ]
    },
    financiero: {
      title: "Estresse financeiro",
      summary: "Recursos para preocupação econômica, dívidas, pagamentos e decisões.",
      items: [
        "Separe gastos fixos, variáveis e adiáveis.",
        "Escolha uma ação concreta para as próximas 24 horas.",
        "Faça respiração guiada antes de revisar contas ou dívidas.",
        "Crie um plano semanal com prioridades realistas."
      ]
    }
  }
};

const plans = {
  es: {
    calma: [
      "Respiración guiada durante 2 minutos.",
      "Ejercicio de grounding: nombra 5 cosas que ves y 4 que sientes.",
      "Evita decisiones importantes hasta bajar la activación emocional."
    ],
    orden: [
      "Escribe tres preocupaciones y una acción posible para cada una.",
      "Divide la tarea principal en pasos de 15 minutos.",
      "Marca lo que depende de ti y lo que debe esperar."
    ],
    descanso: [
      "Reduce pantallas 30 minutos antes de dormir.",
      "Prueba respiración lenta antes de acostarte.",
      "Registra horas de sueño para detectar cambios."
    ],
    enfoque: [
      "Activa un bloque de concentración breve.",
      "Cierra una tarea pequeña antes de pasar a otra.",
      "Haz una pausa corporal cuando notes tensión."
    ]
  },
  en: {
    calma: [
      "Use guided breathing for 2 minutes.",
      "Try grounding: name 5 things you see and 4 you feel.",
      "Avoid major decisions until physical activation lowers."
    ],
    orden: [
      "Write three worries and one possible action for each.",
      "Break the main task into 15-minute steps.",
      "Mark what depends on you and what can wait."
    ],
    descanso: [
      "Reduce screens 30 minutes before sleep.",
      "Try slow breathing before bed.",
      "Track sleep hours to notice changes."
    ],
    enfoque: [
      "Activate a short focus block.",
      "Finish one small task before moving to another.",
      "Take a body pause when you notice tension."
    ]
  },
  pt: {
    calma: [
      "Faça respiração guiada por 2 minutos.",
      "Use grounding: nomeie 5 coisas que vê e 4 que sente.",
      "Evite decisões importantes até reduzir a ativação emocional."
    ],
    orden: [
      "Escreva três preocupações e uma ação possível para cada uma.",
      "Divida a tarefa principal em passos de 15 minutos.",
      "Separe o que depende de você do que pode esperar."
    ],
    descanso: [
      "Reduza telas 30 minutos antes de dormir.",
      "Experimente respiração lenta antes de deitar.",
      "Registre horas de sono para observar mudanças."
    ],
    enfoque: [
      "Ative um bloco curto de concentração.",
      "Finalize uma tarefa pequena antes de passar para outra.",
      "Faça uma pausa corporal ao notar tensão."
    ]
  }
};

const chatReplies = {
  es: {
    greeting:
      "Hola, soy ZENIN. Estoy aqui para conversar contigo, escucharte y ayudarte a cuidar tu bienestar paso a paso.",
    offTopic:
      "Creo que ese tema se aleja un poco de mi proposito. Estoy disenado para acompanarte en bienestar emocional, habitos saludables y manejo del estres. Si quieres hablar sobre como eso te afecta, con gusto te acompano.",
    crisis:
      "Si sientes que podrías hacerte daño o estás en una emergencia, busca ayuda inmediata con servicios de emergencia o una persona de confianza. Para este momento, aléjate de objetos de riesgo, respira lento y pide acompañamiento.",
    academic:
      "Para estrés académico, usa bloques 25/5, define una sola prioridad y realiza respiración 4-4-6 antes de estudiar o rendir un examen. ZENOVA también puede registrar sueño y ansiedad para detectar cuándo sube la presión.",
    work:
      "Para estrés laboral, empieza por separar lo urgente de lo importante. Haz una pausa breve antes y después de reuniones intensas y registra en ZENOVA el momento del día en que aparece más ansiedad.",
    anxiety:
      "Si la ansiedad está alta ahora: inhala 4 segundos, mantén 4 y exhala 6. Repite por 2 minutos. Luego nombra 5 cosas que ves, 4 que sientes y 3 que escuchas para volver al presente.",
    sleep:
      "Para dormir mejor, reduce pantallas antes de acostarte, usa respiración lenta y registra tus horas de sueño. Si duermes menos de 6 horas varios días, ZENOVA marcará el sueño como patrón a cuidar.",
    zenova:
      "ZENOVA funciona con evaluación inicial, perfil de estrés, recursos por tipo de estrés, respiración guiada, seguimiento diario y recomendaciones personalizadas. El objetivo es prevenir y controlar el estrés de forma accesible.",
    tracking:
      "El seguimiento diario guarda estrés, sueño, momento de ansiedad y una nota breve. Con esos datos, ZENOVA detecta tendencias como estrés elevado o sueño bajo.",
    breathing:
      "La respiración guiada de ZENOVA alterna inhalar, mantener y exhalar. Sirve para bajar activación fisiológica y recuperar equilibrio antes de tomar decisiones.",
    default:
      "Desde ZENOVA te sugiero empezar con respiración guiada, identificar el tipo de estrés y registrar sueño/ansiedad. Si me das más contexto, puedo orientarte mejor dentro del bienestar emocional."
  },
  en: {
    greeting:
      "Hi, I am ZENIN. I am here to talk with you, listen, and help you care for your wellbeing step by step.",
    offTopic:
      "That topic feels a little outside my purpose. I am here to support emotional wellbeing, healthy habits, and stress management. If you want to talk about how it affects you, I can help with that.",
    crisis:
      "If you feel at risk of harming yourself or are in an emergency, seek immediate help from emergency services or a trusted person. Move away from risky objects, breathe slowly, and ask someone to stay with you.",
    academic:
      "For academic stress, use 25/5 blocks, choose one priority, and do 4-4-6 breathing before studying or taking an exam. ZENOVA can also track sleep and anxiety to detect pressure spikes.",
    work:
      "For work stress, separate urgent from important tasks. Take short pauses before and after intense meetings, and log the time of day when anxiety rises.",
    anxiety:
      "If anxiety is high now: inhale for 4 seconds, hold for 4, and exhale for 6. Repeat for 2 minutes. Then name 5 things you see, 4 you feel, and 3 you hear.",
    sleep:
      "To sleep better, reduce screens before bed, use slow breathing, and track your sleep hours. If you sleep under 6 hours for several days, ZENOVA will mark sleep as a pattern to care for.",
    zenova:
      "ZENOVA works through an initial assessment, stress profile, resources by stress type, guided breathing, daily tracking, and personalized recommendations.",
    tracking:
      "Daily tracking stores stress, sleep, anxiety moment, and a short note. With that data, ZENOVA detects trends like high stress or low sleep.",
    breathing:
      "ZENOVA guided breathing alternates inhale, hold, and exhale. It helps reduce physical activation and restore balance before decisions.",
    default:
      "ZENOVA suggests starting with guided breathing, identifying your stress type, and tracking sleep/anxiety. Give me more context and I can guide you within emotional wellbeing."
  },
  pt: {
    greeting:
      "Ola, sou ZENIN. Estou aqui para conversar com voce, escutar e ajudar a cuidar do seu bem-estar passo a passo.",
    offTopic:
      "Esse tema parece se afastar um pouco do meu proposito. Estou aqui para acompanhar bem-estar emocional, habitos saudaveis e manejo do estresse. Se quiser falar sobre como isso te afeta, posso ajudar.",
    crisis:
      "Se você sente risco de se machucar ou está em emergência, procure ajuda imediata com serviços de emergência ou uma pessoa de confiança. Afaste-se de objetos de risco, respire devagar e peça companhia.",
    academic:
      "Para estresse acadêmico, use blocos 25/5, escolha uma prioridade e faça respiração 4-4-6 antes de estudar ou fazer uma prova. A ZENOVA também acompanha sono e ansiedade.",
    work:
      "Para estresse no trabalho, separe o urgente do importante. Faça pausas antes e depois de reuniões intensas e registre o momento em que a ansiedade aumenta.",
    anxiety:
      "Se a ansiedade está alta agora: inspire por 4 segundos, segure por 4 e expire por 6. Repita por 2 minutos. Depois nomeie 5 coisas que vê, 4 que sente e 3 que escuta.",
    sleep:
      "Para dormir melhor, reduza telas antes de deitar, use respiração lenta e registre suas horas de sono. Se dormir menos de 6 horas por vários dias, ZENOVA indicará o sono como padrão de cuidado.",
    zenova:
      "A ZENOVA funciona com avaliação inicial, perfil de estresse, recursos por tipo de estresse, respiração guiada, acompanhamento diário e recomendações personalizadas.",
    tracking:
      "O acompanhamento diário registra estresse, sono, momento de ansiedade e uma nota breve. Com esses dados, ZENOVA detecta tendências como estresse alto ou sono baixo.",
    breathing:
      "A respiração guiada da ZENOVA alterna inspirar, segurar e expirar. Ajuda a reduzir a ativação física e recuperar equilíbrio.",
    default:
      "A ZENOVA sugere começar com respiração guiada, identificar o tipo de estresse e registrar sono/ansiedade. Dê mais contexto e posso orientar dentro do bem-estar emocional."
  }
};

const state = {
  language: localStorage.getItem("zenovaLanguage") || "es",
  breathInterval: null,
  breathRemaining: 120,
  breathRunning: false,
  entries: JSON.parse(localStorage.getItem("zenovaEntries") || "[]"),
  currentResource: "academico",
  lastAssessment: JSON.parse(localStorage.getItem("zenovaProfile") || "null"),
  session: JSON.parse(localStorage.getItem("zenovaSession") || "null")
};

function t(key) {
  return text[state.language][key] || text.es[key] || key;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function normalize(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function applyLanguage() {
  document.documentElement.lang = state.language;
  $("#languageSelect").value = state.language;
  $$("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
  $$("[data-i18n-placeholder]").forEach((node) => {
    node.placeholder = t(node.dataset.i18nPlaceholder);
  });
  $("#focusModeBtn").textContent = document.body.classList.contains("focus-mode")
    ? t("mode.normal")
    : t("mode.calm");
  updateAuthUi();
  updateResource(state.currentResource);
  if (state.lastAssessment) {
    renderAssessment(state.lastAssessment);
  } else {
    renderDefaultPlan();
    $("#resultSummary").textContent = t("result.empty");
  }
  updatePattern();
  resetChatGreeting();
  resetBreathing(false);
}

function syncRange(inputId, outputId) {
  const input = $(`#${inputId}`);
  const output = $(`#${outputId}`);
  const update = () => {
    output.value = input.value;
  };
  input.addEventListener("input", update);
  update();
}

function renderDefaultPlan() {
  $("#planList").innerHTML = [t("plan.default1"), t("plan.default2"), t("plan.default3")]
    .map((item) => `<li>${item}</li>`)
    .join("");
}

function updateResource(type) {
  state.currentResource = type;
  const data = resources[state.language][type];
  $("#resourceContent").innerHTML = `
    <h3>${escapeHtml(data.title)}</h3>
    <p>${escapeHtml(data.summary)}</p>
    <ul class="resource-list">
      ${data.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
    </ul>
  `;

  $$(".tab").forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.type === type);
  });
}

function calculateProfile({ stressLevel, sleepHours, anxietyLevel }) {
  const sleepPenalty = Math.max(0, 7 - sleepHours) * 5;
  const rawScore = stressLevel * 6 + anxietyLevel * 5 + sleepPenalty;
  const score = Math.min(100, Math.max(10, Math.round(rawScore)));

  if (score >= 72) {
    return {
      score,
      profile: {
        es: "Estrés alto",
        en: "High stress",
        pt: "Estresse alto"
      }[state.language],
      summary: {
        es: "Tu perfil muestra señales de estrés alto. Conviene priorizar regulación inmediata, descanso y apoyo externo si el malestar se mantiene.",
        en: "Your profile shows signs of high stress. Prioritize immediate regulation, rest, and outside support if discomfort continues.",
        pt: "Seu perfil mostra sinais de estresse alto. Priorize regulação imediata, descanso e apoio externo se o mal-estar continuar."
      }[state.language],
      mood: {
        es: "Tenso",
        en: "Tense",
        pt: "Tenso"
      }[state.language]
    };
  }

  if (score >= 45) {
    return {
      score,
      profile: {
        es: "Estrés moderado",
        en: "Moderate stress",
        pt: "Estresse moderado"
      }[state.language],
      summary: {
        es: "Tu perfil indica estrés moderado. ZENOVA recomienda intervenir temprano para que la presión diaria no se convierta en agotamiento.",
        en: "Your profile indicates moderate stress. ZENOVA recommends early intervention so daily pressure does not become exhaustion.",
        pt: "Seu perfil indica estresse moderado. A ZENOVA recomenda intervenção precoce para que a pressão diária não vire esgotamento."
      }[state.language],
      mood: {
        es: "Cargado",
        en: "Loaded",
        pt: "Sobrecarregado"
      }[state.language]
    };
  }

  return {
    score,
    profile: {
      es: "Estrés bajo",
      en: "Low stress",
      pt: "Estresse baixo"
    }[state.language],
    summary: {
      es: "Tu perfil se encuentra en un rango bajo. Mantén hábitos preventivos y registra cambios para sostener el equilibrio.",
      en: "Your profile is in a low range. Keep preventive habits and track changes to maintain balance.",
      pt: "Seu perfil está em uma faixa baixa. Mantenha hábitos preventivos e registre mudanças para sustentar o equilíbrio."
    }[state.language],
    mood: {
      es: "Estable",
      en: "Stable",
      pt: "Estável"
    }[state.language]
  };
}

function renderPlan(items) {
  $("#planList").innerHTML = items.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
}

function renderAssessment(data) {
  const profile = calculateProfile(data);
  const resource = resources[state.language][data.stressType];
  const suffix = {
    es: ` Tipo principal detectado: ${resource.title.toLowerCase()}.`,
    en: ` Main detected type: ${resource.title.toLowerCase()}.`,
    pt: ` Tipo principal detectado: ${resource.title.toLowerCase()}.`
  }[state.language];
  const customPlan = [
    ...plans[state.language][data.needNow],
    {
      es: `Revisar recursos para ${resource.title.toLowerCase()}.`,
      en: `Review resources for ${resource.title.toLowerCase()}.`,
      pt: `Revisar recursos para ${resource.title.toLowerCase()}.`
    }[state.language]
  ];

  $("#profileLabel").textContent = profile.profile;
  $("#scoreValue").textContent = profile.score;
  $("#metricSleep").textContent = `${data.sleepHours} h`;
  $("#metricStress").textContent = `${data.stressLevel}/10`;
  $("#metricMood").textContent = profile.mood;
  $("#resultSummary").textContent = `${profile.summary}${suffix}`;
  renderPlan(customPlan);
  updateResource(data.stressType);
}

function handleAssessment(event) {
  event.preventDefault();
  state.lastAssessment = {
    stressType: $("#stressType").value,
    stressLevel: Number($("#stressLevel").value),
    sleepHours: Number($("#sleepHours").value),
    anxietyLevel: Number($("#anxietyLevel").value),
    needNow: $("#needNow").value
  };
  localStorage.setItem("zenovaProfile", JSON.stringify(state.lastAssessment));
  renderAssessment(state.lastAssessment);
}

function formatTime(seconds) {
  const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");
  return `${mins}:${secs}`;
}

function setBreathPhase() {
  const elapsed = 120 - state.breathRemaining;
  const cycle = elapsed % 14;
  const ring = $("#breathRing");
  ring.classList.remove("inhale", "hold", "exhale");

  if (cycle < 4) {
    $("#breathPhase").textContent = t("breath.inhale");
    ring.classList.add("inhale");
    return;
  }

  if (cycle < 8) {
    $("#breathPhase").textContent = t("breath.hold");
    ring.classList.add("hold");
    return;
  }

  $("#breathPhase").textContent = t("breath.exhale");
  ring.classList.add("exhale");
}

function updateBreathDisplay() {
  $("#breathTimer").textContent = formatTime(state.breathRemaining);
  setBreathPhase();
}

function stopBreathing(done = false) {
  clearInterval(state.breathInterval);
  state.breathInterval = null;
  state.breathRunning = false;
  $("#breathStart").textContent = t("breath.start");

  if (done) {
    $("#breathPhase").textContent = t("breath.done");
    $("#breathRing").classList.remove("inhale", "hold", "exhale");
  }
}

function startBreathing() {
  if (state.breathRunning) {
    stopBreathing();
    return;
  }

  state.breathRunning = true;
  $("#breathStart").textContent = t("breath.pause");
  updateBreathDisplay();

  state.breathInterval = setInterval(() => {
    state.breathRemaining -= 1;
    updateBreathDisplay();

    if (state.breathRemaining <= 0) {
      state.breathRemaining = 0;
      updateBreathDisplay();
      stopBreathing(true);
    }
  }, 1000);
}

function resetBreathing(resetTime = true) {
  stopBreathing();
  if (resetTime) {
    state.breathRemaining = 120;
  }
  $("#breathPhase").textContent = t("breath.ready");
  $("#breathRing").classList.remove("inhale", "hold", "exhale");
  $("#breathTimer").textContent = formatTime(state.breathRemaining);
}

function saveEntries() {
  localStorage.setItem("zenovaEntries", JSON.stringify(state.entries));
}

function shortDateLabel(date) {
  return new Intl.DateTimeFormat(state.language, { day: "2-digit", month: "short" }).format(date);
}

function renderBars() {
  const latest = state.entries.slice(-7);
  const bars = $("#stressBars");

  if (!latest.length) {
    bars.innerHTML = "";
    return;
  }

  bars.innerHTML = latest
    .map((entry) => {
      const height = 28 + entry.stress * 14;
      return `
        <div class="bar" style="height: ${height}px" aria-label="${t("metric.stress")} ${entry.stress}/10">
          <span>${escapeHtml(entry.label)}</span>
        </div>
      `;
    })
    .join("");
}

function updatePattern() {
  if (!state.entries.length) {
    $("#patternText").textContent = t("tracking.patternEmpty");
    return;
  }

  const latest = state.entries.slice(-7);
  const avgStress = latest.reduce((sum, item) => sum + item.stress, 0) / latest.length;
  const avgSleep = latest.reduce((sum, item) => sum + item.sleep, 0) / latest.length;
  const commonMoment = latest
    .map((entry) => entry.moment)
    .sort(
      (a, b) =>
        latest.filter((entry) => entry.moment === b).length -
        latest.filter((entry) => entry.moment === a).length
    )[0];

  if (avgStress >= 7) {
    $("#patternText").textContent = {
      es: `Tendencia de estrés elevada, especialmente en ${commonMoment.toLowerCase()}. Prioriza respiración guiada, descanso y apoyo personal.`,
      en: `High stress trend, especially around ${commonMoment.toLowerCase()}. Prioritize guided breathing, rest, and personal support.`,
      pt: `Tendência de estresse elevada, especialmente em ${commonMoment.toLowerCase()}. Priorize respiração guiada, descanso e apoio pessoal.`
    }[state.language];
    return;
  }

  if (avgSleep < 6) {
    $("#patternText").textContent = {
      es: `El sueño promedio es bajo (${avgSleep.toFixed(1)} h). La recomendación principal es estabilizar horarios de descanso.`,
      en: `Average sleep is low (${avgSleep.toFixed(1)} h). The main recommendation is to stabilize rest schedules.`,
      pt: `O sono médio está baixo (${avgSleep.toFixed(1)} h). A principal recomendação é estabilizar horários de descanso.`
    }[state.language];
    return;
  }

  $("#patternText").textContent = {
    es: `Tendencia manejable. El promedio reciente es ${avgStress.toFixed(1)}/10 y el momento más repetido es ${commonMoment.toLowerCase()}.`,
    en: `Manageable trend. The recent average is ${avgStress.toFixed(1)}/10 and the most repeated moment is ${commonMoment.toLowerCase()}.`,
    pt: `Tendência manejável. A média recente é ${avgStress.toFixed(1)}/10 e o momento mais repetido é ${commonMoment.toLowerCase()}.`
  }[state.language];
}

function handleTracker(event) {
  event.preventDefault();

  const entry = {
    date: new Date().toISOString(),
    label: shortDateLabel(new Date()),
    stress: Number($("#todayStress").value),
    sleep: Number($("#todaySleep").value),
    moment: $("#anxietyMoment").value,
    note: $("#dailyNote").value.trim()
  };

  state.entries.push(entry);
  state.entries = state.entries.slice(-14);
  saveEntries();
  renderBars();
  updatePattern();

  $("#metricSleep").textContent = `${entry.sleep} h`;
  $("#metricStress").textContent = `${entry.stress}/10`;
  $("#dailyNote").value = "";
}

function getAccounts() {
  return JSON.parse(localStorage.getItem("zenovaAccounts") || "[]");
}

function saveAccounts(accounts) {
  localStorage.setItem("zenovaAccounts", JSON.stringify(accounts));
}

function setSession(session) {
  state.session = session;
  localStorage.setItem("zenovaSession", JSON.stringify(session));
  updateAuthUi();
  closeAuth();
}

function openAuth(panel = "loginPanel") {
  $("#authModal").classList.add("is-open");
  switchAuthPanel(panel);
}

function closeAuth() {
  $("#authModal").classList.remove("is-open");
  $("#authMessage").textContent = "";
}

function switchAuthPanel(panelId) {
  $$(".auth-tab").forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.panel === panelId);
  });
  $$(".auth-form").forEach((panel) => {
    panel.classList.toggle("active", panel.id === panelId);
  });
  $("#authMessage").textContent = "";
}

function updateAuthUi() {
  const logged = Boolean(state.session);
  $("#authOpenBtn").classList.toggle("hidden", logged);
  $("#logoutBtn").classList.toggle("hidden", !logged);
  $("#welcomeUser").textContent = logged
    ? `${t("session.hello")}, ${state.session.name}`
    : t("session.guest");
  if ($("#heroUserName")) $("#heroUserName").textContent = logged ? state.session.name || "Invitado" : "Invitado";
  if (!logged) {
    $("#authOpenBtn").textContent = t("auth.login");
  }
}

function handleRegister(event) {
  event.preventDefault();
  const name = $("#registerName").value.trim();
  const email = $("#registerEmail").value.trim().toLowerCase();
  const password = $("#registerPassword").value;
  const accounts = getAccounts();

  if (accounts.some((account) => account.email === email)) {
    $("#authMessage").textContent = {
      es: "Ese correo ya está registrado.",
      en: "That email is already registered.",
      pt: "Esse e-mail já está registrado."
    }[state.language];
    return;
  }

  accounts.push({ name, email, password });
  saveAccounts(accounts);
  setSession({ name, email, guest: false });
  event.target.reset();
}

function handleLogin(event) {
  event.preventDefault();
  const email = $("#loginEmail").value.trim().toLowerCase();
  const password = $("#loginPassword").value;
  const account = getAccounts().find((item) => item.email === email && item.password === password);

  if (!account) {
    $("#authMessage").textContent = {
      es: "Correo o contraseña incorrectos.",
      en: "Incorrect email or password.",
      pt: "E-mail ou senha incorretos."
    }[state.language];
    return;
  }

  setSession({ name: account.name, email: account.email, guest: false });
  event.target.reset();
}

function logout() {
  state.session = null;
  localStorage.removeItem("zenovaSession");
  updateAuthUi();
  if (typeof setAuthRenderState === "function") {
    setAuthRenderState(false);
  }
  openAuth("loginPanel");
}

function addMessage(role, content) {
  const node = document.createElement("div");
  node.className = `message ${role}`;
  node.textContent = content;
  $("#chatMessages").appendChild(node);
  $("#chatMessages").scrollTop = $("#chatMessages").scrollHeight;
}

function resetChatGreeting() {
  $("#chatMessages").innerHTML = "";
  addMessage("ai", chatReplies[state.language].greeting);
}

function generateChatReply(input) {
  const q = normalize(input);

  if (/(suicid|hacerme dano|hacerme daño|self-harm|kill myself|machucar|emergencia|emergency|crisis)/.test(q)) {
    return chatReplies[state.language].crisis;
  }

  if (/(programacion|programming|codigo|code|hack|hackeo|arma|weapon|delito|ilegal|politica|politics|trading|inversion avanzada|finanzas avanzadas)/.test(q)) {
    return chatReplies[state.language].offTopic;
  }

  if (/^(hola|buenos dias|buenos días|buenas tardes|buenas noches|que tal|qué tal|como estas|cómo estás|como va todo|gracias|hasta luego|adios|adiós)/.test(q)) {
    return "Me alegra que me escribas. Estoy aqui contigo, sin prisa. Puedes contarme como va tu dia, si necesitas hablar de algo puntual o si solo quieres ordenar un poco lo que tienes en la cabeza.";
  }

  if (/(feliz|alegre|buen dia|buen día|logre|consegui|me fue bien|gratitud)/.test(q)) {
    return "Eso suena bonito de leer. Me alegra que hoy haya algo positivo para ti 🙂. Si quieres, podemos guardar que fue lo que salio bien para repetirlo o reconocer ese avance en tu seguimiento.";
  }

  if (/(cansad|agotad|frustr|solo|sola|miedo|preocup|no se que hacer|no sé qué hacer|no quiero estudiar|necesito hablar|no me siento bien)/.test(q)) {
    return "Te escucho. No tienes que resolver todo ahora mismo; podemos empezar por ponerle nombre a lo que pasa. ¿Esto se siente mas como cansancio, preocupacion, tristeza, frustracion o una mezcla de varias cosas?";
  }

  if (/(academ|examen|exam|tarea|study|estudio|prova)/.test(q)) return chatReplies[state.language].academic;
  if (/(labor|work|trabajo|trabalho|burnout|reunion|meeting)/.test(q)) return chatReplies[state.language].work;
  if (/(ansiedad|anxiety|ansiedade|panic|panico|pánico|agitacion|agitation)/.test(q)) return chatReplies[state.language].anxiety;
  if (/(sueno|sueño|sleep|sono|dormir|dormi|dormí|descanso|rest)/.test(q)) return chatReplies[state.language].sleep;
  if (/(zenova|funciona|works|como funciona|plataforma|app|perfil|test)/.test(q)) return chatReplies[state.language].zenova;
  if (/(seguimiento|tracking|registro|pattern|patron|padr|diario)/.test(q)) return chatReplies[state.language].tracking;
  if (/(respira|breath|inhala|exhala|inspire|expire|medita|relaja)/.test(q)) return chatReplies[state.language].breathing;

  return chatReplies[state.language].default;
}

function handleChat(event) {
  event.preventDefault();
  const input = $("#chatInput");
  const question = input.value.trim();
  if (!question) return;
  addMessage("user", question);
  input.value = "";

  window.setTimeout(() => {
    addMessage("ai", generateChatReply(question));
  }, 360);
}

function restoreProfile() {
  if (!state.lastAssessment) return;
  $("#stressType").value = state.lastAssessment.stressType;
  $("#stressLevel").value = state.lastAssessment.stressLevel;
  $("#sleepHours").value = state.lastAssessment.sleepHours;
  $("#anxietyLevel").value = state.lastAssessment.anxietyLevel;
  $("#needNow").value = state.lastAssessment.needNow;
  renderAssessment(state.lastAssessment);
}

function bindEvents() {
  ["stressLevel", "sleepHours", "anxietyLevel", "todayStress", "todaySleep"].forEach((id) => {
    const outputMap = {
      stressLevel: "stressOut",
      sleepHours: "sleepOut",
      anxietyLevel: "anxietyOut",
      todayStress: "todayStressOut",
      todaySleep: "todaySleepOut"
    };
    syncRange(id, outputMap[id]);
  });

  $("#languageSelect").addEventListener("change", (event) => {
    state.language = event.target.value;
    localStorage.setItem("zenovaLanguage", state.language);
    applyLanguage();
  });

  $("#stressForm").addEventListener("submit", handleAssessment);
  $("#trackerForm").addEventListener("submit", handleTracker);
  $("#breathStart").addEventListener("click", startBreathing);
  $("#breathReset").addEventListener("click", () => resetBreathing(true));
  $("#focusModeBtn").addEventListener("click", () => {
    document.body.classList.toggle("focus-mode");
    $("#focusModeBtn").textContent = document.body.classList.contains("focus-mode")
      ? t("mode.normal")
      : t("mode.calm");
  });

  $("#authOpenBtn").addEventListener("click", () => openAuth("loginPanel"));
  $("#logoutBtn").addEventListener("click", logout);
  $("#guestBtn").addEventListener("click", () =>
    setSession({ name: { es: "Invitado", en: "Guest", pt: "Convidado" }[state.language], guest: true })
  );
  $("#loginPanel").addEventListener("submit", handleLogin);
  $("#registerPanel").addEventListener("submit", handleRegister);

  $$(".auth-tab").forEach((tab) => {
    tab.addEventListener("click", () => switchAuthPanel(tab.dataset.panel));
  });

  $$(".tab").forEach((tab) => {
    tab.addEventListener("click", () => updateResource(tab.dataset.type));
  });

  $("[data-chat-prompt]").parentElement.addEventListener("click", (event) => {
    const button = event.target.closest("[data-chat-prompt]");
    if (!button) return;
    $("#chatInput").value = button.textContent.trim();
    $("#chatForm").dispatchEvent(new Event("submit", { bubbles: true, cancelable: true }));
  });

  $("#chatForm").addEventListener("submit", handleChat);
}

bindEvents();
applyLanguage();
restoreProfile();
renderBars();
updatePattern();
if (!state.session) {
  openAuth("loginPanel");
}

const expansionText = {
  es: {
    "nav.calendar": "Agenda",
    "options.open": "Opciones",
    "options.eyebrow": "Centro personal",
    "options.title": "Opciones ZENOVA",
    "options.language": "Idioma",
    "options.theme": "Apariencia",
    "options.dark": "Modo oscuro",
    "options.light": "Modo claro",
    "options.records": "Mis registros",
    "options.notes": "Notas",
    "options.alarms": "Alarmas",
    "notes.titlePlaceholder": "Título",
    "notes.bodyPlaceholder": "Escribe un apunte emocional...",
    "notes.save": "Guardar nota",
    "alarms.titlePlaceholder": "Ej.: Pausa consciente",
    "alarms.save": "Guardar alarma",
    "hero.deepTest": "Test profundo",
    "exercise.eyebrow": "Movimiento consciente",
    "exercise.title": "Ejercicios guiados con animación",
    "exercise.bodyScan": "Escaneo corporal",
    "exercise.bodyScanText": "Recorre hombros, cuello y espalda durante un minuto para soltar tensión.",
    "exercise.stretch": "Estiramiento suave",
    "exercise.stretchText": "Eleva brazos, inclina el cuerpo y respira lento para recuperar movilidad.",
    "exercise.walk": "Pausa activa",
    "exercise.walkText": "Camina en el lugar por 45 segundos mientras relajas mandíbula y hombros.",
    "agenda.eyebrow": "Calendario de bienestar",
    "agenda.title": "Actividades y recordatorios",
    "agenda.text": "Organiza pausas, ejercicios, sesiones de seguimiento y actividades antiestrés.",
    "agenda.activity": "Actividad",
    "agenda.placeholder": "Respiración, caminata, journaling...",
    "agenda.date": "Fecha",
    "agenda.time": "Hora",
    "agenda.type": "Tipo",
    "agenda.typeBreath": "Respiración",
    "agenda.typeMove": "Movimiento",
    "agenda.typeNote": "Nota emocional",
    "agenda.typeTest": "Test ZENOVA",
    "agenda.save": "Agregar actividad",
    "agenda.upcoming": "Próximas actividades",
    "lab.back": "Volver",
    "lab.eyebrow": "Laboratorio antiestrés",
    "lab.title": "Test emocional de 7 preguntas",
    "lab.text": "Responde con sinceridad para recibir un informe breve y ejercicios mentales o físicos adaptados.",
    "lab.finish": "Generar informe",
    "lab.report": "Informe breve",
    "lab.recommendations": "Ejercicios recomendados",
    "game.puzzle": "Puzzle de calma",
    "game.puzzleText": "Ordena las piezas del 1 al 9 para entrenar atención suave.",
    "game.shuffle": "Mezclar",
    "game.platform": "Salto de serenidad",
    "game.platformText": "Muévete con ← → y salta con espacio para recoger puntos de calma.",
    "game.start": "Iniciar juego",
    "game.reset": "Reiniciar"
  },
  en: {
    "nav.calendar": "Calendar",
    "options.open": "Options",
    "options.eyebrow": "Personal center",
    "options.title": "ZENOVA options",
    "options.language": "Language",
    "options.theme": "Appearance",
    "options.dark": "Dark mode",
    "options.light": "Light mode",
    "options.records": "My logs",
    "options.notes": "Notes",
    "options.alarms": "Alarms",
    "notes.titlePlaceholder": "Title",
    "notes.bodyPlaceholder": "Write an emotional note...",
    "notes.save": "Save note",
    "alarms.titlePlaceholder": "E.g.: Mindful pause",
    "alarms.save": "Save alarm",
    "hero.deepTest": "Deep test",
    "exercise.eyebrow": "Mindful movement",
    "exercise.title": "Animated guided exercises",
    "exercise.bodyScan": "Body scan",
    "exercise.bodyScanText": "Scan shoulders, neck, and back for one minute to release tension.",
    "exercise.stretch": "Gentle stretch",
    "exercise.stretchText": "Raise your arms, lean softly, and breathe slowly to recover mobility.",
    "exercise.walk": "Active pause",
    "exercise.walkText": "Walk in place for 45 seconds while relaxing jaw and shoulders.",
    "agenda.eyebrow": "Wellbeing calendar",
    "agenda.title": "Activities and reminders",
    "agenda.text": "Organize pauses, exercises, tracking sessions, and anti-stress activities.",
    "agenda.activity": "Activity",
    "agenda.placeholder": "Breathing, walk, journaling...",
    "agenda.date": "Date",
    "agenda.time": "Time",
    "agenda.type": "Type",
    "agenda.typeBreath": "Breathing",
    "agenda.typeMove": "Movement",
    "agenda.typeNote": "Emotional note",
    "agenda.typeTest": "ZENOVA test",
    "agenda.save": "Add activity",
    "agenda.upcoming": "Upcoming activities",
    "lab.back": "Back",
    "lab.eyebrow": "Anti-stress lab",
    "lab.title": "7-question emotional test",
    "lab.text": "Answer honestly to receive a short report and adapted mental or physical exercises.",
    "lab.finish": "Generate report",
    "lab.report": "Short report",
    "lab.recommendations": "Recommended exercises",
    "game.puzzle": "Calm puzzle",
    "game.puzzleText": "Order tiles from 1 to 9 to train gentle attention.",
    "game.shuffle": "Shuffle",
    "game.platform": "Serenity jump",
    "game.platformText": "Move with ← → and jump with space to collect calm points.",
    "game.start": "Start game",
    "game.reset": "Reset"
  },
  pt: {
    "nav.calendar": "Agenda",
    "options.open": "Opções",
    "options.eyebrow": "Centro pessoal",
    "options.title": "Opções ZENOVA",
    "options.language": "Idioma",
    "options.theme": "Aparência",
    "options.dark": "Modo escuro",
    "options.light": "Modo claro",
    "options.records": "Meus registros",
    "options.notes": "Notas",
    "options.alarms": "Alarmes",
    "notes.titlePlaceholder": "Título",
    "notes.bodyPlaceholder": "Escreva uma nota emocional...",
    "notes.save": "Salvar nota",
    "alarms.titlePlaceholder": "Ex.: Pausa consciente",
    "alarms.save": "Salvar alarme",
    "hero.deepTest": "Teste profundo",
    "exercise.eyebrow": "Movimento consciente",
    "exercise.title": "Exercícios guiados com animação",
    "exercise.bodyScan": "Escaneamento corporal",
    "exercise.bodyScanText": "Observe ombros, pescoço e costas por um minuto para soltar tensão.",
    "exercise.stretch": "Alongamento suave",
    "exercise.stretchText": "Levante os braços, incline o corpo e respire devagar para recuperar mobilidade.",
    "exercise.walk": "Pausa ativa",
    "exercise.walkText": "Caminhe no lugar por 45 segundos relaxando mandíbula e ombros.",
    "agenda.eyebrow": "Calendário de bem-estar",
    "agenda.title": "Atividades e lembretes",
    "agenda.text": "Organize pausas, exercícios, acompanhamento e atividades antiestresse.",
    "agenda.activity": "Atividade",
    "agenda.placeholder": "Respiração, caminhada, journaling...",
    "agenda.date": "Data",
    "agenda.time": "Hora",
    "agenda.type": "Tipo",
    "agenda.typeBreath": "Respiração",
    "agenda.typeMove": "Movimento",
    "agenda.typeNote": "Nota emocional",
    "agenda.typeTest": "Teste ZENOVA",
    "agenda.save": "Adicionar atividade",
    "agenda.upcoming": "Próximas atividades",
    "lab.back": "Voltar",
    "lab.eyebrow": "Laboratório antiestresse",
    "lab.title": "Teste emocional de 7 perguntas",
    "lab.text": "Responda com sinceridade para receber um relatório breve e exercícios mentais ou físicos adaptados.",
    "lab.finish": "Gerar relatório",
    "lab.report": "Relatório breve",
    "lab.recommendations": "Exercícios recomendados",
    "game.puzzle": "Puzzle da calma",
    "game.puzzleText": "Ordene as peças de 1 a 9 para treinar atenção suave.",
    "game.shuffle": "Misturar",
    "game.platform": "Salto da serenidade",
    "game.platformText": "Mova com ← → e salte com espaço para coletar pontos de calma.",
    "game.start": "Iniciar jogo",
    "game.reset": "Reiniciar"
  }
};

Object.keys(expansionText).forEach((lang) => Object.assign(text[lang], expansionText[lang]));
text.es["nav.chat"] = "ZENIN";
text.en["nav.chat"] = "ZENIN";
text.pt["nav.chat"] = "ZENIN";
text.es["chat.eyebrow"] = "Chat con ZENIN";
text.en["chat.eyebrow"] = "Chat with ZENIN";
text.pt["chat.eyebrow"] = "Chat com ZENIN";

chatReplies.es.greeting =
  "Hola, soy ZENIN. Puedo ayudarte con estrés, emociones, respiración, sueño, hábitos, calendario y herramientas de ZENOVA.";
chatReplies.en.greeting =
  "Hi, I am ZENIN. I can help with stress, emotions, breathing, sleep, habits, calendar, and ZENOVA tools.";
chatReplies.pt.greeting =
  "Olá, sou ZENIN. Posso ajudar com estresse, emoções, respiração, sono, hábitos, agenda e ferramentas da ZENOVA.";

const zenovaLocal = {
  db: null,
  activities: JSON.parse(localStorage.getItem("zenovaActivities") || "[]"),
  notes: JSON.parse(localStorage.getItem("zenovaNotes") || "[]"),
  alarms: JSON.parse(localStorage.getItem("zenovaAlarms") || "[]"),
  tests: JSON.parse(localStorage.getItem("zenovaDeepTests") || "[]"),
  puzzleExpected: 1,
  platform: null
};

function openZenovaDB() {
  return new Promise((resolve) => {
    if (!("indexedDB" in window)) {
      resolve(null);
      return;
    }
    const request = indexedDB.open("zenovaWellnessDB", 2);
    request.onupgradeneeded = () => {
      const db = request.result;
      ["accounts", "entries", "notes", "alarms", "activities", "tests", "settings", "chat", "checkins", "habits", "goals", "journals", "timeline"].forEach((store) => {
        if (!db.objectStoreNames.contains(store)) {
          db.createObjectStore(store, { keyPath: "id" });
        }
      });
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => resolve(null);
  });
}

function dbPut(store, value) {
  if (!zenovaLocal.db) return;
  const tx = zenovaLocal.db.transaction(store, "readwrite");
  tx.objectStore(store).put({ ...value, id: value.id || crypto.randomUUID() });
}

function dbMirrorExisting() {
  getAccounts().forEach((account) => dbPut("accounts", { ...account, id: account.email }));
  state.entries.forEach((entry, index) => dbPut("entries", { ...entry, id: entry.id || `entry-${index}-${entry.date}` }));
  zenovaLocal.activities.forEach((item) => dbPut("activities", item));
  zenovaLocal.notes.forEach((item) => dbPut("notes", item));
  zenovaLocal.alarms.forEach((item) => dbPut("alarms", item));
  zenovaLocal.tests.forEach((item) => dbPut("tests", item));
}

const oldSaveAccounts = saveAccounts;
saveAccounts = function saveAccountsToDB(accounts) {
  oldSaveAccounts(accounts);
  accounts.forEach((account) => dbPut("accounts", { ...account, id: account.email }));
};

const oldSaveEntries = saveEntries;
saveEntries = function saveEntriesToDB() {
  oldSaveEntries();
  state.entries.forEach((entry, index) => dbPut("entries", { ...entry, id: entry.id || `entry-${index}-${entry.date}` }));
};

const emotionKnowledge = {
  ira: "La ira suele aparecer cuando sentimos injusticia, invasión de límites o frustración. ZENIN sugiere pausar, nombrar la emoción y descargar energía con movimiento suave antes de responder.",
  tristeza:
    "La tristeza pide cuidado y conexión. Puedes escribir lo que extrañas, hacer una pausa corporal y buscar una persona segura. Si dura muchos días o te impide funcionar, conviene pedir apoyo profesional.",
  miedo:
    "El miedo intenta protegerte. Distingue peligro real de preocupación anticipada, vuelve al presente con grounding y elige una acción pequeña y concreta.",
  culpa:
    "La culpa puede ayudarte a reparar, pero si se vuelve excesiva conviene separar responsabilidad real de autocastigo. Escribe qué puedes reparar y qué necesitas soltar.",
  frustracion:
    "La frustración aparece cuando algo bloquea una meta. Divide el problema en pasos pequeños, cambia de estrategia y usa una pausa activa para bajar tensión.",
  soledad:
    "La soledad necesita contacto y rutina amable. Envía un mensaje simple a alguien seguro, agenda una actividad y registra cómo cambia tu ánimo."
};

const previousGenerateChatReply = generateChatReply;
generateChatReply = function generateZeninReply(input) {
  const q = normalize(input);
  if (/(ira|enojo|rabia|anger|raiva)/.test(q)) return emotionKnowledge.ira;
  if (/(triste|tristeza|sad|sadness)/.test(q)) return emotionKnowledge.tristeza;
  if (/(miedo|temor|fear|medo)/.test(q)) return emotionKnowledge.miedo;
  if (/(culpa|guilt|remordimiento)/.test(q)) return emotionKnowledge.culpa;
  if (/(frustr|impotencia)/.test(q)) return emotionKnowledge.frustracion;
  if (/(soledad|solo|lonely|solidão|solidao)/.test(q)) return emotionKnowledge.soledad;
  if (/(emocion|emoción|emotion|sentimiento|sentir|feel)/.test(q)) {
    return "ZENIN puede ayudarte a nombrar emociones como ira, tristeza, miedo, culpa, frustración o soledad. Primero identifica dónde la sientes en el cuerpo, luego elige una acción breve: respirar, escribir, caminar o pedir apoyo.";
  }
  return previousGenerateChatReply(input).replaceAll("ZENOVA IA", "ZENIN");
};

function syncDrawerLanguage() {
  $("#drawerLanguageSelect").value = state.language;
  $("#themeSelect").value = document.body.classList.contains("light-mode") ? "light" : "dark";
}

function openOptions() {
  syncDrawerLanguage();
  renderRecords();
  renderNotes();
  renderAlarms();
  $("#optionsDrawer").classList.add("is-open");
}

function closeOptions() {
  $("#optionsDrawer").classList.remove("is-open");
}

function renderRecords() {
  const records = $("#recordsList");
  const testItems = zenovaLocal.tests.slice(-3).reverse();
  const entryItems = state.entries.slice(-5).reverse();
  const html = [
    ...entryItems.map(
      (entry) =>
        `<div class="drawer-item"><strong>${escapeHtml(entry.label)}</strong>${t("metric.stress")}: ${entry.stress}/10 · ${t("metric.sleep")}: ${entry.sleep} h</div>`
    ),
    ...testItems.map(
      (test) =>
        `<div class="drawer-item"><strong>Test ZENOVA</strong>${escapeHtml(test.level)} · ${new Date(test.date).toLocaleDateString()}</div>`
    )
  ].join("");
  records.innerHTML = html || `<div class="drawer-item">${t("tracking.patternEmpty")}</div>`;
}

function saveCollection(name, list) {
  localStorage.setItem(name, JSON.stringify(list));
}

function renderNotes() {
  $("#notesList").innerHTML =
    zenovaLocal.notes
      .slice()
      .reverse()
      .map((note) => `<div class="drawer-item"><strong>${escapeHtml(note.title)}</strong>${escapeHtml(note.body)}</div>`)
      .join("") || `<div class="drawer-item">Sin notas guardadas.</div>`;
}

function renderAlarms() {
  $("#alarmsList").innerHTML =
    zenovaLocal.alarms
      .slice()
      .sort((a, b) => `${a.date} ${a.time}`.localeCompare(`${b.date} ${b.time}`))
      .map((alarm) => `<div class="drawer-item"><strong>${escapeHtml(alarm.title)}</strong>${alarm.date} · ${alarm.time}</div>`)
      .join("") || `<div class="drawer-item">Sin alarmas guardadas.</div>`;
}

function renderActivities() {
  const sorted = zenovaLocal.activities
    .slice()
    .sort((a, b) => `${a.date} ${a.time}`.localeCompare(`${b.date} ${b.time}`));
  $("#activitiesList").innerHTML =
    sorted
      .slice(0, 8)
      .map((item) => `<div class="drawer-item"><strong>${escapeHtml(item.title)}</strong>${item.date} · ${item.time} · ${escapeHtml(item.type)}</div>`)
      .join("") || `<div class="drawer-item">Agenda una actividad de bienestar.</div>`;
  renderCalendarStrip(sorted);
}

function renderCalendarStrip(items) {
  const today = new Date();
  const days = Array.from({ length: 7 }, (_, index) => {
    const date = new Date(today);
    date.setDate(today.getDate() + index);
    const iso = date.toISOString().slice(0, 10);
    const dayItems = items.filter((item) => item.date === iso);
    return `
      <div class="calendar-day">
        <strong>${date.toLocaleDateString(state.language, { weekday: "short", day: "2-digit" })}</strong>
        ${dayItems.map((item) => `<span class="calendar-chip">${escapeHtml(item.time)} · ${escapeHtml(item.title)}</span>`).join("")}
      </div>`;
  });
  $("#calendarStrip").innerHTML = days.join("");
}

function addActivity(event) {
  event.preventDefault();
  const item = {
    id: crypto.randomUUID(),
    title: $("#activityTitle").value.trim(),
    date: $("#activityDate").value,
    time: $("#activityTime").value,
    type: $("#activityType").value
  };
  zenovaLocal.activities.push(item);
  saveCollection("zenovaActivities", zenovaLocal.activities);
  dbPut("activities", item);
  event.target.reset();
  setDefaultDates();
  renderActivities();
}

function setDefaultDates() {
  const today = new Date().toISOString().slice(0, 10);
  ["activityDate", "alarmDate"].forEach((id) => {
    const input = $(`#${id}`);
    if (input && !input.value) input.value = today;
  });
}

const deepQuestionsData = [
  "¿Qué tan cargada sientes tu mente hoy?",
  "¿Qué tanto te cuesta concentrarte?",
  "¿Qué tan tenso está tu cuerpo?",
  "¿Qué tan reparador fue tu descanso?",
  "¿Qué tanta ansiedad apareció hoy?",
  "¿Qué tan acompañado o apoyado te sientes?",
  "¿Qué tanta energía tienes para resolver tus pendientes?"
];

function renderDeepQuestions() {
  $("#deepQuestions").innerHTML = deepQuestionsData
    .map(
      (question, index) => `
      <label class="deep-question">
        <span>${index + 1}. ${question}</span>
        <input type="range" name="q${index}" min="1" max="5" value="3" />
      </label>`
    )
    .join("");
}

function openLab() {
  $("#labScreen").classList.add("is-open");
  renderDeepQuestions();
  resetPuzzle();
  drawPlatformGame();
}

function closeLab() {
  $("#labScreen").classList.remove("is-open");
}

function handleDeepTest(event) {
  event.preventDefault();
  const values = $$("input[name^='q']").map((input) => Number(input.value));
  const score = values.reduce((sum, value) => sum + value, 0);
  let level = "Equilibrio manejable";
  let report =
    "Tu estado actual se ve manejable. Mantén pausas breves, registra tus emociones y usa ejercicios preventivos.";
  let recommendations = ["Puzzle de calma", "Pausa activa de 45 segundos", "Nota emocional breve"];

  if (score >= 25) {
    level = "Sobrecarga emocional alta";
    report =
      "Tus respuestas sugieren tensión elevada. Prioriza regular el cuerpo, reducir estímulos y pedir apoyo si el malestar continúa.";
    recommendations = ["Respiración guiada", "Escaneo corporal", "Salto de serenidad"];
  } else if (score >= 17) {
    level = "Estrés moderado";
    report =
      "Aparecen señales de estrés moderado. Conviene alternar ejercicios mentales con movimiento suave para recuperar claridad.";
    recommendations = ["Puzzle de calma", "Estiramiento suave", "Registro emocional"];
  }

  const result = { id: crypto.randomUUID(), date: new Date().toISOString(), score, level, report };
  zenovaLocal.tests.push(result);
  saveCollection("zenovaDeepTests", zenovaLocal.tests);
  dbPut("tests", result);
  $("#deepReport").textContent = `${level}: ${report}`;
  $("#deepRecommendations").innerHTML = recommendations.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
  $("#labResults").classList.remove("hidden");
  renderRecords();
}

function resetPuzzle() {
  zenovaLocal.puzzleExpected = 1;
  const numbers = Array.from({ length: 9 }, (_, index) => index + 1).sort(() => Math.random() - 0.5);
  $("#puzzleBoard").innerHTML = numbers
    .map((number) => `<button class="puzzle-tile" type="button" data-number="${number}">${number}</button>`)
    .join("");
}

function handlePuzzleClick(event) {
  const tile = event.target.closest(".puzzle-tile");
  if (!tile) return;
  const number = Number(tile.dataset.number);
  if (number === zenovaLocal.puzzleExpected) {
    tile.disabled = true;
    tile.style.opacity = "0.35";
    zenovaLocal.puzzleExpected += 1;
  }
  if (zenovaLocal.puzzleExpected === 10) {
    $("#deepReport").textContent += " Puzzle completado: atención sostenida activada.";
  }
}

function drawPlatformGame() {
  const canvas = $("#platformGame");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#080712";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#e6b96e";
  ctx.font = "16px sans-serif";
  ctx.fillText("Presiona iniciar para saltar entre plataformas de calma", 34, 42);
}

function startPlatformGame() {
  const canvas = $("#platformGame");
  const ctx = canvas.getContext("2d");
  const keys = {};
  const platforms = [
    { x: 0, y: 250, w: 520, h: 30 },
    { x: 90, y: 196, w: 120, h: 16 },
    { x: 260, y: 150, w: 120, h: 16 },
    { x: 390, y: 104, w: 90, h: 16 }
  ];
  const orbs = [
    { x: 130, y: 164, taken: false },
    { x: 310, y: 118, taken: false },
    { x: 430, y: 74, taken: false }
  ];
  const player = { x: 32, y: 210, w: 24, h: 34, vx: 0, vy: 0, grounded: false };
  let score = 0;

  window.onkeydown = (event) => {
    keys[event.key] = true;
    if (event.key === " ") event.preventDefault();
  };
  window.onkeyup = (event) => {
    keys[event.key] = false;
  };

  function loop() {
    player.vx = (keys.ArrowRight ? 3 : 0) - (keys.ArrowLeft ? 3 : 0);
    if (keys[" "] && player.grounded) {
      player.vy = -8.5;
      player.grounded = false;
    }
    player.vy += 0.35;
    player.x += player.vx;
    player.y += player.vy;
    player.grounded = false;
    platforms.forEach((platform) => {
      const falling = player.vy >= 0;
      const overX = player.x + player.w > platform.x && player.x < platform.x + platform.w;
      const overY = player.y + player.h > platform.y && player.y + player.h < platform.y + platform.h + 12;
      if (falling && overX && overY) {
        player.y = platform.y - player.h;
        player.vy = 0;
        player.grounded = true;
      }
    });
    if (player.y > 290) {
      player.x = 32;
      player.y = 210;
      player.vy = 0;
    }
    orbs.forEach((orb) => {
      if (!orb.taken && Math.abs(player.x - orb.x) < 26 && Math.abs(player.y - orb.y) < 30) {
        orb.taken = true;
        score += 1;
      }
    });

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#080712";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#6b2ab6";
    platforms.forEach((p) => ctx.fillRect(p.x, p.y, p.w, p.h));
    orbs.forEach((orb) => {
      if (!orb.taken) {
        ctx.beginPath();
        ctx.fillStyle = "#e6b96e";
        ctx.arc(orb.x, orb.y, 9, 0, Math.PI * 2);
        ctx.fill();
      }
    });
    ctx.fillStyle = "#f6efe5";
    ctx.fillRect(player.x, player.y, player.w, player.h);
    ctx.fillStyle = "#ffe0a1";
    ctx.font = "16px sans-serif";
    ctx.fillText(`Calma: ${score}/3`, 16, 24);
    if (score < 3) {
      zenovaLocal.platform = requestAnimationFrame(loop);
    } else {
      ctx.fillText("Respira. Lo lograste.", 190, 48);
    }
  }
  cancelAnimationFrame(zenovaLocal.platform);
  loop();
}

function resetPlatformGame() {
  cancelAnimationFrame(zenovaLocal.platform);
  drawPlatformGame();
}

function initExpansionEvents() {
  $("#optionsOpenBtn").addEventListener("click", openOptions);
  $("#optionsCloseBtn").addEventListener("click", closeOptions);
  $("#drawerLogoutBtn").addEventListener("click", logout);
  $("#drawerLanguageSelect").addEventListener("change", (event) => {
    $("#languageSelect").value = event.target.value;
    $("#languageSelect").dispatchEvent(new Event("change", { bubbles: true }));
    syncDrawerLanguage();
  });
  $("#themeSelect").addEventListener("change", (event) => {
    document.body.classList.toggle("light-mode", event.target.value === "light");
    localStorage.setItem("zenovaTheme", event.target.value);
    dbPut("settings", { id: "theme", value: event.target.value });
  });
  $$(".drawer-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      $$(".drawer-tab").forEach((item) => item.classList.toggle("active", item === tab));
      $$(".drawer-section").forEach((section) =>
        section.classList.toggle("active", section.id === `${tab.dataset.drawerTab}Panel`)
      );
    });
  });
  $("#noteForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const note = {
      id: crypto.randomUUID(),
      title: $("#noteTitle").value.trim(),
      body: $("#noteBody").value.trim(),
      date: new Date().toISOString()
    };
    zenovaLocal.notes.push(note);
    saveCollection("zenovaNotes", zenovaLocal.notes);
    dbPut("notes", note);
    event.target.reset();
    renderNotes();
  });
  $("#alarmForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const alarm = {
      id: crypto.randomUUID(),
      title: $("#alarmTitle").value.trim(),
      date: $("#alarmDate").value,
      time: $("#alarmTime").value,
      fired: false
    };
    zenovaLocal.alarms.push(alarm);
    saveCollection("zenovaAlarms", zenovaLocal.alarms);
    dbPut("alarms", alarm);
    event.target.reset();
    setDefaultDates();
    renderAlarms();
  });
  $("#activityForm").addEventListener("submit", addActivity);
  $("#openLabBtn").addEventListener("click", openLab);
  $("#labBackBtn").addEventListener("click", closeLab);
  $("#deepTestForm").addEventListener("submit", handleDeepTest);
  $("#puzzleBoard").addEventListener("click", handlePuzzleClick);
  $("#shufflePuzzleBtn").addEventListener("click", resetPuzzle);
  $("#startPlatformBtn").addEventListener("click", startPlatformGame);
  $("#resetPlatformBtn").addEventListener("click", resetPlatformGame);
}

function checkAlarms() {
  const now = new Date();
  const stamp = `${now.toISOString().slice(0, 10)} ${String(now.getHours()).padStart(2, "0")}:${String(
    now.getMinutes()
  ).padStart(2, "0")}`;
  let changed = false;
  zenovaLocal.alarms.forEach((alarm) => {
    if (!alarm.fired && `${alarm.date} ${alarm.time}` <= stamp) {
      alarm.fired = true;
      changed = true;
      if (typeof sendZenovaNotification === "function") {
        sendZenovaNotification("ZENOVA", alarm.title);
      } else if (typeof showZenovaToast === "function") {
        showZenovaToast(`ZENOVA: ${alarm.title}`);
      }
    }
  });
  if (changed) {
    saveCollection("zenovaAlarms", zenovaLocal.alarms);
    renderAlarms();
  }
}

async function initZenovaExpansion() {
  zenovaLocal.db = await openZenovaDB();
  dbMirrorExisting();
  document.body.classList.toggle("light-mode", localStorage.getItem("zenovaTheme") === "light");
  initExpansionEvents();
  setDefaultDates();
  renderActivities();
  renderNotes();
  renderAlarms();
  renderRecords();
  renderDeepQuestions();
  resetPuzzle();
  drawPlatformGame();
  applyLanguage();
  resetChatGreeting();
  window.setInterval(checkAlarms, 30000);
}

initZenovaExpansion();

const assessmentUpgradeText = {
  es: {
    "hero.deepTest": "Test profundo",
    "cinematic.login": "ZENIN está preparando tu espacio de calma...",
    "cinematic.ready": "Listo. Respira, estás entrando a ZENOVA."
  },
  en: {
    "hero.deepTest": "Deep test",
    "cinematic.login": "ZENIN is preparing your calm space...",
    "cinematic.ready": "Ready. Breathe, you are entering ZENOVA."
  },
  pt: {
    "hero.deepTest": "Teste profundo",
    "cinematic.login": "ZENIN está preparando seu espaço de calma...",
    "cinematic.ready": "Pronto. Respire, você está entrando na ZENOVA."
  }
};

Object.keys(assessmentUpgradeText).forEach((lang) => Object.assign(text[lang], assessmentUpgradeText[lang]));

const profileCopy = {
  es: {
    low: {
      title: "Equilibrio activo",
      lines: [
        "Tu resultado muestra una base emocional estable. La prioridad no es exigirte más, sino sostener lo que ya está funcionando.",
        "ZENOVA detecta que puedes beneficiarte de rutinas preventivas: pausas breves, movimiento consciente y registro de hábitos.",
        "Si aparece presión durante el día, usa una intervención corta antes de que el estrés suba."
      ],
      insights: ["Prevención", "Claridad", "Hábitos sostenibles", "Energía estable"]
    },
    moderate: {
      title: "Presión acumulada",
      lines: [
        "Tu perfil sugiere una carga emocional intermedia. No es una crisis, pero sí una señal para intervenir temprano.",
        "El sistema recomienda alternar regulación física con organización mental para reducir la sensación de saturación.",
        "La meta de hoy es bajar un nivel la activación y dejar una tarea pequeña resuelta."
      ],
      insights: ["Pausa necesaria", "Orden mental", "Sueño a cuidar", "Rutina flexible"]
    },
    high: {
      title: "Sobrecarga emocional",
      lines: [
        "Tu resultado indica alta activación. ZENOVA prioriza ejercicios que bajen tensión corporal antes de pedirte concentración.",
        "Conviene reducir estímulos, respirar con guía, mover el cuerpo de forma suave y pedir apoyo si el malestar continúa.",
        "Hoy no necesitas resolver todo: necesitas recuperar seguridad, ritmo y un primer paso manejable."
      ],
      insights: ["Regular primero", "Reducir estímulos", "Apoyo cercano", "Descanso protegido"]
    }
  }
};

profileCopy.en = profileCopy.es;
profileCopy.pt = profileCopy.es;

const contextVariants = {
  academico: {
    calma: ["Antes de estudiar, prueba una ronda 4-4-6.", "Divide tu siguiente tarea en 15 minutos."],
    orden: ["Crea una lista de 3 pendientes reales.", "Marca una sola prioridad académica."],
    descanso: ["Si dormiste poco, baja la dificultad del bloque de estudio.", "Haz pausa visual cada 25 minutos."],
    enfoque: ["Cierra notificaciones durante un bloque corto.", "Empieza por la parte más fácil."]
  },
  laboral: {
    calma: ["Antes de responder mensajes, respira 60 segundos.", "Después de una reunión, camina un minuto."],
    orden: ["Separa urgente, importante y delegable.", "Agenda una pausa real en tu calendario."],
    descanso: ["Cierra la jornada con una lista para mañana.", "Evita revisar trabajo justo antes de dormir."],
    enfoque: ["Trabaja en una tarea por bloque.", "Silencia interrupciones durante 20 minutos."]
  },
  familiar: {
    calma: ["Haz una pausa antes de responder en tensión.", "Usa una frase simple: necesito un momento."],
    orden: ["Distingue responsabilidades tuyas y compartidas.", "Anota qué conversación necesitas tener."],
    descanso: ["Protege un espacio breve sin demandas.", "Relaja cuello y mandíbula antes de dormir."],
    enfoque: ["Resuelve una acción doméstica pequeña.", "Evita intentar arreglar todo a la vez."]
  },
  social: {
    calma: ["Prepara una frase de salida amable.", "Antes de interactuar, nota tus pies en el suelo."],
    orden: ["Elige una persona segura para hablar.", "Define cuánto tiempo quieres quedarte."],
    descanso: ["Después de socializar, agenda recuperación.", "Registra qué situación te drenó más."],
    enfoque: ["Concéntrate en una conversación a la vez.", "No necesitas agradar a todos."]
  },
  financiero: {
    calma: ["Respira antes de mirar cuentas.", "No tomes decisiones con activación alta."],
    orden: ["Separa pagos fijos y aplazables.", "Elige una acción financiera de 10 minutos."],
    descanso: ["Evita revisar deudas antes de dormir.", "Agenda la revisión económica en horario diurno."],
    enfoque: ["Trabaja un solo número a la vez.", "Busca claridad, no perfección."]
  }
};

function profileLevelFromScore(score) {
  if (score >= 72) return "high";
  if (score >= 45) return "moderate";
  return "low";
}

function writeTypewriter(node, content) {
  window.clearInterval(node._typeTimer);
  node.textContent = "";
  node.classList.remove("done");
  let index = 0;
  node._typeTimer = window.setInterval(() => {
    node.textContent = content.slice(0, index);
    index += 2;
    if (index > content.length + 1) {
      window.clearInterval(node._typeTimer);
      node.textContent = content;
      node.classList.add("done");
    }
  }, 18);
}

const previousRenderAssessmentEnhanced = renderAssessment;
renderAssessment = function renderAssessmentEnhanced(data) {
  previousRenderAssessmentEnhanced(data);
  const profile = calculateProfile(data);
  const level = profileLevelFromScore(profile.score);
  const pack = profileCopy[state.language]?.[level] || profileCopy.es[level];
  const resource = resources[state.language][data.stressType];
  const variants = contextVariants[data.stressType]?.[data.needNow] || [];
  const profileExperience = $("#profileExperience");
  const scene = $("#profileScene");

  profileExperience.classList.remove("hidden");
  scene.classList.remove("low", "moderate", "high");
  scene.classList.add(level);
  $("#profileDynamicEyebrow").textContent = `${resource.title} · ${profile.profile}`;
  $("#profileDynamicTitle").textContent = pack.title;
  $("#profileTags").innerHTML = [
    resource.title,
    profile.profile,
    {
      calma: t("need.calm"),
      orden: t("need.order"),
      descanso: t("need.rest"),
      enfoque: t("need.focus")
    }[data.needNow],
    `${profile.score}/100`
  ]
    .map((tag) => `<span>${escapeHtml(tag)}</span>`)
    .join("");

  const variedText = [...pack.lines, ...variants].join(" ");
  writeTypewriter($("#profileTypewriter"), variedText);
  $("#insightGrid").innerHTML = [...pack.insights, ...variants.slice(0, 2)]
    .slice(0, 6)
    .map((item) => `<span>${escapeHtml(item)}</span>`)
    .join("");
  profileExperience.scrollIntoView({ behavior: "smooth", block: "center" });
};

const previousSetSessionAnimated = setSession;
setSession = function setSessionAnimated(session) {
  state.session = session;
  localStorage.setItem("zenovaSession", JSON.stringify(session));
  updateAuthUi();
  closeAuth();
  const cinematic = $("#welcomeCinematic");
  $("#cinematicText").textContent = t("cinematic.login");
  cinematic.classList.add("is-playing");
  window.setTimeout(() => {
    $("#cinematicText").textContent = t("cinematic.ready");
  }, 1300);
  window.setTimeout(() => {
    cinematic.classList.remove("is-playing");
    $("#panel").scrollIntoView({ behavior: "smooth" });
  }, 3200);
};

function setupMotionReveal() {
  const targets = $$("section, .result-card, .exercise-card, .calendar-card, .chat-card, .vip-card");
  targets.forEach((target) => target.classList.add("motion-reveal"));
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    },
    { threshold: 0.12 }
  );
  targets.forEach((target) => observer.observe(target));
}

function setupFloatingOptions() {
  $("#floatingOptionsBtn").addEventListener("click", openOptions);
}

setupMotionReveal();
setupFloatingOptions();
applyLanguage();
if (state.lastAssessment) {
  renderAssessment(state.lastAssessment);
}

const featureUpgradeText = {
  es: {
    "nav.progress": "Progreso",
    "nav.library": "Biblioteca",
    "options.sound": "Sonido suave",
    "options.soundOff": "Silencio",
    "options.soundOn": "Activado",
    "options.notifications": "Activar notificaciones",
    "options.profile": "Perfil",
    "profile.namePlaceholder": "Nombre",
    "profile.agePlaceholder": "Edad",
    "profile.goalPlaceholder": "Objetivo personal: dormir mejor, bajar ansiedad, estudiar con calma...",
    "profile.save": "Guardar perfil",
    "progress.eyebrow": "Progreso emocional",
    "progress.title": "Lectura semanal de bienestar",
    "progress.text": "ZENOVA cruza tus registros, test y actividades para mostrar cambios semanales y sugerencias mas precisas.",
    "progress.chartTitle": "Grafica semanal",
    "progress.recommendations": "Recomendaciones por historial",
    "progress.achievements": "Insignias de avance",
    "library.eyebrow": "Biblioteca de recursos",
    "library.title": "Guia rapida por situacion",
    "library.text": "Explora recursos sobre ansiedad, estres academico, familia, cansancio, presion social y descanso.",
    "reminder.pause": "Pausa 20 min",
    "reminder.breath": "Respirar 10 min",
    "reminder.sleep": "Descanso noche",
    "game.puzzleText": "Reconstruye la imagen: solo se mueve una pieza que toque el espacio vacio.",
    "game.platformText": "Usa flechas para moverte, espacio para saltar, evita obstaculos y toma los puntos dorados.",
    "game.puzzleStep1": "1. Busca el cuadro vacio.",
    "game.puzzleStep2": "2. Toca una pieza pegada al espacio.",
    "game.puzzleStep3": "3. Reconstruye la imagen sin prisa.",
    "game.platformStep1": "Flechas: moverse",
    "game.platformStep2": "Espacio: saltar",
    "game.platformStep3": "Puntos dorados: calma"
  },
  en: {
    "nav.progress": "Progress",
    "nav.library": "Library",
    "options.sound": "Soft sound",
    "options.soundOff": "Silent",
    "options.soundOn": "On",
    "options.notifications": "Enable notifications",
    "options.profile": "Profile",
    "profile.namePlaceholder": "Name",
    "profile.agePlaceholder": "Age",
    "profile.goalPlaceholder": "Personal goal: sleep better, reduce anxiety, study calmly...",
    "profile.save": "Save profile",
    "progress.eyebrow": "Emotional progress",
    "progress.title": "Weekly wellness reading",
    "progress.text": "ZENOVA combines your logs, tests, and activities to show weekly changes and more precise suggestions.",
    "progress.chartTitle": "Weekly chart",
    "progress.recommendations": "History-based recommendations",
    "progress.achievements": "Progress badges",
    "library.eyebrow": "Resource library",
    "library.title": "Quick guide by situation",
    "library.text": "Explore resources for anxiety, academic stress, family tension, fatigue, social pressure, and rest.",
    "reminder.pause": "Pause 20 min",
    "reminder.breath": "Breathe 10 min",
    "reminder.sleep": "Night rest",
    "game.puzzleText": "Rebuild the image: only a tile touching the empty space can move.",
    "game.platformText": "Use arrows to move, space to jump, avoid obstacles, and collect golden calm points.",
    "game.puzzleStep1": "1. Find the empty square.",
    "game.puzzleStep2": "2. Tap a tile next to it.",
    "game.puzzleStep3": "3. Rebuild the image calmly.",
    "game.platformStep1": "Arrows: move",
    "game.platformStep2": "Space: jump",
    "game.platformStep3": "Gold points: calm"
  },
  pt: {
    "nav.progress": "Progresso",
    "nav.library": "Biblioteca",
    "options.sound": "Som suave",
    "options.soundOff": "Silencio",
    "options.soundOn": "Ativado",
    "options.notifications": "Ativar notificacoes",
    "options.profile": "Perfil",
    "profile.namePlaceholder": "Nome",
    "profile.agePlaceholder": "Idade",
    "profile.goalPlaceholder": "Objetivo pessoal: dormir melhor, reduzir ansiedade, estudar com calma...",
    "profile.save": "Salvar perfil",
    "progress.eyebrow": "Progresso emocional",
    "progress.title": "Leitura semanal de bem-estar",
    "progress.text": "A ZENOVA cruza registros, testes e atividades para mostrar mudancas semanais e sugestoes mais precisas.",
    "progress.chartTitle": "Grafico semanal",
    "progress.recommendations": "Recomendacoes pelo historico",
    "progress.achievements": "Insignias de progresso",
    "library.eyebrow": "Biblioteca de recursos",
    "library.title": "Guia rapido por situacao",
    "library.text": "Explore recursos sobre ansiedade, estresse academico, familia, cansaco, pressao social e descanso.",
    "reminder.pause": "Pausa 20 min",
    "reminder.breath": "Respirar 10 min",
    "reminder.sleep": "Descanso noite",
    "game.puzzleText": "Reconstrua a imagem: so uma peca encostada no espaco vazio pode se mover.",
    "game.platformText": "Use setas para mover, espaco para saltar, evite obstaculos e colete pontos dourados.",
    "game.puzzleStep1": "1. Encontre o quadrado vazio.",
    "game.puzzleStep2": "2. Toque uma peca vizinha.",
    "game.puzzleStep3": "3. Reconstrua a imagem com calma.",
    "game.platformStep1": "Setas: mover",
    "game.platformStep2": "Espaco: saltar",
    "game.platformStep3": "Pontos dourados: calma"
  }
};

Object.keys(featureUpgradeText).forEach((lang) => Object.assign(text[lang], featureUpgradeText[lang]));

const featureLibrary = {
  es: [
    {
      key: "ansiedad",
      title: "Ansiedad",
      image: "assets/meditation.png",
      summary: "Para cuando hay agitacion, pensamientos acelerados o sensacion de alerta.",
      tips: ["Respira 4-4-6 por dos minutos.", "Nombra 5 cosas que ves y 4 que sientes.", "Reduce estimulos antes de decidir."]
    },
    {
      key: "academico",
      title: "Estres academico",
      image: "assets/brand-app-preview.png",
      summary: "Para examenes, trabajos pendientes, exposiciones o dificultad para concentrarte.",
      tips: ["Divide la tarea en bloques de 15 minutos.", "Empieza por la parte mas facil.", "Haz una pausa visual cada 25 minutos."]
    },
    {
      key: "familiar",
      title: "Tension familiar",
      image: "assets/wave-bg.png",
      summary: "Para discusiones, responsabilidades compartidas o sensacion de carga en casa.",
      tips: ["Pide un momento antes de responder.", "Distingue lo tuyo de lo compartido.", "Escribe una necesidad concreta."]
    },
    {
      key: "cansancio",
      title: "Cansancio",
      image: "assets/zenova-summary.png",
      summary: "Para baja energia, saturacion o necesidad de descanso real.",
      tips: ["Baja la dificultad de la siguiente tarea.", "Estira cuello y hombros.", "Agenda una pausa sin pantalla."]
    },
    {
      key: "social",
      title: "Presion social",
      image: "assets/logo-zenova.png",
      summary: "Para comparacion, miedo a quedar mal o necesidad de agradar.",
      tips: ["Define cuanto tiempo quieres quedarte.", "Prepara una frase de salida amable.", "Habla con una persona segura."]
    },
    {
      key: "descanso",
      title: "Descanso y sueno",
      image: "assets/meditation.png",
      summary: "Para noches irregulares, dificultad para desconectar o despertares cansados.",
      tips: ["Reduce pantallas antes de dormir.", "Anota pendientes para manana.", "Usa respiracion lenta al acostarte."]
    }
  ]
};

featureLibrary.en = featureLibrary.es;
featureLibrary.pt = featureLibrary.es;

const featureAchievements = [
  {
    key: "profile",
    icon: "01",
    title: "Perfil personal",
    detail: "Guardaste tus datos y objetivo.",
    unlocked: () => Boolean(getUserProfile().name || getUserProfile().goal)
  },
  {
    key: "record",
    icon: "02",
    title: "Primer registro",
    detail: "Registraste tu estado diario.",
    unlocked: () => state.entries.length > 0
  },
  {
    key: "history",
    icon: "03",
    title: "Historial util",
    detail: "Ya hay varios datos para personalizar recomendaciones.",
    unlocked: () => state.entries.length >= 3 || zenovaLocal.tests.length >= 2
  },
  {
    key: "test",
    icon: "04",
    title: "Test completado",
    detail: "Generaste un informe emocional.",
    unlocked: () => zenovaLocal.tests.length > 0
  },
  {
    key: "agenda",
    icon: "05",
    title: "Actividad programada",
    detail: "Agendaste una accion de bienestar.",
    unlocked: () => zenovaLocal.activities.length > 0 || zenovaLocal.alarms.length > 0
  },
  {
    key: "notes",
    icon: "06",
    title: "Apunte consciente",
    detail: "Guardaste una nota o reflexion.",
    unlocked: () => zenovaLocal.notes.length > 0
  }
];

function getUserProfile() {
  return JSON.parse(localStorage.getItem("zenovaUserProfile") || "{}");
}

function saveUserProfile(profile) {
  localStorage.setItem("zenovaUserProfile", JSON.stringify(profile));
  dbPut("settings", { id: "userProfile", value: profile });
}

function getSoundMode() {
  return localStorage.getItem("zenovaSoundMode") || "off";
}

function showZenovaToast(message) {
  let stack = $("#toastStack");
  if (!stack) {
    stack = document.createElement("div");
    stack.id = "toastStack";
    stack.className = "toast-stack";
    document.body.appendChild(stack);
  }
  const toast = document.createElement("div");
  toast.className = "zenova-toast";
  toast.textContent = message;
  stack.appendChild(toast);
  window.setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(8px)";
  }, 2600);
  window.setTimeout(() => toast.remove(), 3100);
}

function microAnimate(node) {
  if (!node) return;
  node.classList.remove("micro-saved");
  void node.offsetWidth;
  node.classList.add("micro-saved");
}

function playSoftTone(frequency = 392, duration = 0.18) {
  if (getSoundMode() !== "on") return;
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;
  const context = new AudioContext();
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  oscillator.type = "sine";
  oscillator.frequency.value = frequency;
  gain.gain.setValueAtTime(0.0001, context.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.045, context.currentTime + 0.03);
  gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + duration);
  oscillator.connect(gain);
  gain.connect(context.destination);
  oscillator.start();
  oscillator.stop(context.currentTime + duration + 0.03);
}

function sendZenovaNotification(title, body) {
  if ("Notification" in window && Notification.permission === "granted") {
    try {
      new Notification(title, { body, icon: "assets/logo-zenova.png" });
    } catch {
      showZenovaToast(`${title}: ${body}`);
    }
    return;
  }
  showZenovaToast(`${title}: ${body}`);
}

function updateNotificationStatus() {
  const status = $("#notificationStatus");
  if (!status) return;
  if (!("Notification" in window)) {
    status.textContent = "Este navegador no permite notificaciones.";
    return;
  }
  status.textContent =
    Notification.permission === "granted"
      ? "Notificaciones activas para alarmas y actividades."
      : Notification.permission === "denied"
        ? "Permiso bloqueado en el navegador."
        : "Puedes activar recordatorios del navegador.";
}

async function enableZenovaNotifications() {
  if (!("Notification" in window)) {
    showZenovaToast("Tu navegador no permite notificaciones.");
    updateNotificationStatus();
    return;
  }
  const permission = await Notification.requestPermission();
  updateNotificationStatus();
  if (permission === "granted") {
    sendZenovaNotification("ZENOVA", "Notificaciones activadas. Tus recordatorios apareceran aqui.");
  }
}

function addQuickReminder(type) {
  const now = new Date();
  const reminder = {
    pause: { minutes: 20, title: "Pausa consciente", kind: "movimiento" },
    breath: { minutes: 10, title: "Respiracion guiada", kind: "respiracion" },
    sleep: { minutes: 0, title: "Preparar descanso", kind: "respiracion", hour: 22, minute: 30 }
  }[type];
  if (!reminder) return;
  const due = new Date(now);
  if (typeof reminder.hour === "number") {
    due.setHours(reminder.hour, reminder.minute, 0, 0);
    if (due <= now) due.setDate(due.getDate() + 1);
  } else {
    due.setMinutes(due.getMinutes() + reminder.minutes);
  }
  const alarm = {
    id: crypto.randomUUID(),
    title: reminder.title,
    date: due.toISOString().slice(0, 10),
    time: `${String(due.getHours()).padStart(2, "0")}:${String(due.getMinutes()).padStart(2, "0")}`,
    fired: false
  };
  zenovaLocal.alarms.push(alarm);
  saveCollection("zenovaAlarms", zenovaLocal.alarms);
  dbPut("alarms", alarm);
  renderAlarms();
  renderFeatureDashboard();
  showZenovaToast(`Recordatorio creado: ${alarm.title} a las ${alarm.time}.`);
}

function renderWeeklyChart() {
  const chart = $("#weeklyChart");
  if (!chart) return;
  const latest = state.entries.slice(-7);
  if (!latest.length) {
    $("#weeklySummary").textContent = "Aun no hay registros. Guarda tu primer registro diario para activar la grafica.";
    chart.innerHTML = `
      <defs><linearGradient id="stressGradient" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stop-color="#e6b96e"/><stop offset="100%" stop-color="#9e42ff"/></linearGradient></defs>
      <line class="chart-axis" x1="38" y1="218" x2="606" y2="218"></line>
      <text x="52" y="116">Sin datos todavia</text>
    `;
    return;
  }

  const width = 640;
  const baseY = 218;
  const chartHeight = 168;
  const gap = latest.length > 1 ? 520 / (latest.length - 1) : 0;
  const points = latest.map((entry, index) => {
    const x = latest.length === 1 ? width / 2 : 60 + index * gap;
    return {
      x,
      stressY: baseY - (entry.stress / 10) * chartHeight,
      sleepY: baseY - (Math.min(10, entry.sleep) / 10) * chartHeight,
      stress: entry.stress,
      sleep: entry.sleep,
      label: entry.label || shortDateLabel(new Date(entry.date))
    };
  });
  const avgStress = latest.reduce((sum, item) => sum + item.stress, 0) / latest.length;
  const avgSleep = latest.reduce((sum, item) => sum + item.sleep, 0) / latest.length;
  $("#weeklySummary").textContent = `Promedio semanal: estres ${avgStress.toFixed(1)}/10 y descanso ${avgSleep.toFixed(1)} h.`;
  const bars = points
    .map((point, index) => {
      const barHeight = baseY - point.stressY;
      return `
        <rect class="stress-bar" x="${point.x - 18}" y="${point.stressY}" width="36" height="${barHeight}" style="animation-delay:${index * 0.06}s"></rect>
        <text x="${point.x - 18}" y="244">${escapeHtml(point.label)}</text>
      `;
    })
    .join("");
  const linePath = points.map((point, index) => `${index ? "L" : "M"} ${point.x} ${point.sleepY}`).join(" ");
  const dots = points.map((point) => `<circle class="sleep-dot" cx="${point.x}" cy="${point.sleepY}" r="5"></circle>`).join("");
  chart.innerHTML = `
    <defs><linearGradient id="stressGradient" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stop-color="#e6b96e"/><stop offset="100%" stop-color="#9e42ff"/></linearGradient></defs>
    <line class="chart-axis" x1="38" y1="218" x2="606" y2="218"></line>
    <line class="chart-axis" x1="38" y1="50" x2="38" y2="218"></line>
    ${bars}
    <path class="sleep-line" d="${linePath}"></path>
    ${dots}
    <text x="42" y="34">Estres: barras / Sueno: linea</text>
  `;
}

function buildHistoryRecommendations() {
  const latest = state.entries.slice(-7);
  const profile = getUserProfile();
  const recs = [];
  if (!latest.length && !state.lastAssessment && !zenovaLocal.tests.length) {
    return [
      "Guarda un registro diario para que ZENOVA detecte patrones reales.",
      "Completa el test inicial o el test profundo para activar recomendaciones por perfil.",
      "Agenda una actividad breve para que el calendario tambien alimente el seguimiento."
    ];
  }
  if (latest.length) {
    const avgStress = latest.reduce((sum, item) => sum + item.stress, 0) / latest.length;
    const avgSleep = latest.reduce((sum, item) => sum + item.sleep, 0) / latest.length;
    const notes = latest.map((entry) => normalize(entry.note || "")).join(" ");
    if (avgStress >= 7) recs.push("Tu historial muestra estres alto: prioriza respiracion guiada antes de tareas exigentes.");
    if (avgSleep < 6) recs.push("El descanso aparece bajo: crea una alarma nocturna y evita pantallas antes de dormir.");
    if (/(examen|tarea|clase|estudio|universidad)/.test(notes)) recs.push("Tus notas apuntan a carga academica: divide pendientes en bloques de 15 minutos.");
    if (/(familia|casa|discusion)/.test(notes)) recs.push("Aparece tension familiar: escribe una necesidad concreta antes de conversar.");
  }
  if (state.lastAssessment) {
    const resource = resources.es[state.lastAssessment.stressType];
    recs.push(`Por tu ultimo perfil, revisa la biblioteca de ${resource.title.toLowerCase()} y agenda una accion pequena.`);
  }
  if (zenovaLocal.tests.length >= 2) recs.push("Tienes varios informes: compara si el puntaje sube o baja antes de elegir ejercicios intensos.");
  if (profile.goal) recs.push(`Objetivo personal detectado: ${profile.goal}. Conviertelo en una actividad semanal concreta.`);
  return recs.slice(0, 5);
}

function renderHistoryRecommendations() {
  const list = $("#historyRecommendations");
  if (!list) return;
  list.innerHTML = buildHistoryRecommendations().map((item) => `<li>${escapeHtml(item)}</li>`).join("");
}

function renderAchievements() {
  const grid = $("#achievementGrid");
  if (!grid) return;
  grid.innerHTML = featureAchievements
    .map((item) => {
      const unlocked = item.unlocked();
      return `
        <article class="achievement-badge ${unlocked ? "unlocked" : ""}">
          <span>${item.icon}</span>
          <strong>${escapeHtml(item.title)}</strong>
          <p>${escapeHtml(unlocked ? item.detail : "Pendiente: sigue usando ZENOVA para desbloquearla.")}</p>
        </article>
      `;
    })
    .join("");
}

function renderResourceLibrary() {
  const grid = $("#resourceLibraryGrid");
  if (!grid) return;
  const items = featureLibrary[state.language] || featureLibrary.es;
  grid.innerHTML = items
    .map(
      (item) => `
        <article class="library-card">
          <div class="library-visual" style="--library-image: url('${item.image}')"></div>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.summary)}</p>
          <ul>${item.tips.map((tip) => `<li>${escapeHtml(tip)}</li>`).join("")}</ul>
        </article>
      `
    )
    .join("");
}

function renderUserProfile() {
  const profile = getUserProfile();
  const nameInput = $("#profileNameInput");
  if (!nameInput) return;
  nameInput.value = profile.name || state.session?.name || "";
  $("#profileAgeInput").value = profile.age || "";
  $("#profileContextInput").value = profile.context || state.lastAssessment?.stressType || "academico";
  $("#profileGoalInput").value = profile.goal || "";
  $("#profileSummary").innerHTML = `
    <div class="drawer-item">
      <strong>${escapeHtml(profile.name || state.session?.name || "Perfil sin nombre")}</strong>
      ${escapeHtml(profile.goal || "Agrega un objetivo para personalizar mejor las sugerencias.")}
    </div>
    <div class="drawer-item">
      <strong>Contexto principal</strong>
      ${escapeHtml((resources[state.language]?.[profile.context || "academico"] || resources.es.academico).title)}
    </div>
  `;
}

function handleUserProfileSave(event) {
  event.preventDefault();
  const profile = {
    name: $("#profileNameInput").value.trim(),
    age: $("#profileAgeInput").value,
    context: $("#profileContextInput").value,
    goal: $("#profileGoalInput").value.trim(),
    updatedAt: new Date().toISOString()
  };
  saveUserProfile(profile);
  if (profile.name && state.session) {
    state.session.name = profile.name;
    localStorage.setItem("zenovaSession", JSON.stringify(state.session));
    updateAuthUi();
  }
  renderUserProfile();
  renderFeatureDashboard();
  microAnimate(event.target);
  showZenovaToast("Perfil actualizado. Las recomendaciones se adaptaron a tu objetivo.");
}

function renderFeatureDashboard() {
  renderWeeklyChart();
  renderHistoryRecommendations();
  renderAchievements();
  renderResourceLibrary();
}

function setupFeatureUpgradeEvents() {
  $("#soundSelect").value = getSoundMode();
  $("#soundSelect")?.addEventListener("change", (event) => {
    localStorage.setItem("zenovaSoundMode", event.target.value);
    if (event.target.value === "on") {
      playSoftTone(432, 0.24);
      showZenovaToast("Sonido suave activado.");
    }
  });
  $("#notificationEnableBtn")?.addEventListener("click", enableZenovaNotifications);
  $$(".quick-reminders [data-reminder]").forEach((button) => {
    button.addEventListener("click", () => addQuickReminder(button.dataset.reminder));
  });
  $("#userProfileForm")?.addEventListener("submit", handleUserProfileSave);
  $("#trackerForm")?.addEventListener("submit", (event) => {
    window.setTimeout(() => {
      renderFeatureDashboard();
      microAnimate(event.target);
      showZenovaToast("Registro guardado. El progreso semanal se actualizo.");
    }, 0);
  });
  $("#noteForm")?.addEventListener("submit", (event) => {
    window.setTimeout(() => {
      renderFeatureDashboard();
      microAnimate(event.target);
      showZenovaToast("Nota guardada.");
    }, 0);
  });
  $("#alarmForm")?.addEventListener("submit", (event) => {
    window.setTimeout(() => {
      renderFeatureDashboard();
      microAnimate(event.target);
      showZenovaToast("Alarma guardada.");
    }, 0);
  });
  $("#activityForm")?.addEventListener("submit", (event) => {
    window.setTimeout(() => {
      renderFeatureDashboard();
      microAnimate(event.target);
      showZenovaToast("Actividad agregada al calendario.");
    }, 0);
  });
  $("#breathStart")?.addEventListener("click", () => {
    localStorage.setItem("zenovaBreathingUsed", "true");
    playSoftTone(396, 0.18);
  });
}

function checkActivityNotifications() {
  const now = new Date();
  const stamp = `${now.toISOString().slice(0, 10)} ${String(now.getHours()).padStart(2, "0")}:${String(
    now.getMinutes()
  ).padStart(2, "0")}`;
  const notified = JSON.parse(localStorage.getItem("zenovaNotifiedActivities") || "[]");
  let changed = false;
  zenovaLocal.activities.forEach((activity) => {
    const key = activity.id;
    if (!notified.includes(key) && `${activity.date} ${activity.time}` <= stamp) {
      notified.push(key);
      changed = true;
      sendZenovaNotification("Actividad ZENOVA", `${activity.title} - ${activity.type}`);
    }
  });
  if (changed) {
    localStorage.setItem("zenovaNotifiedActivities", JSON.stringify(notified.slice(-80)));
  }
}

const previousSetBreathPhaseFeatureSound = setBreathPhase;
setBreathPhase = function setBreathPhaseWithSound() {
  previousSetBreathPhaseFeatureSound();
  const phase = $("#breathRing").classList.contains("inhale")
    ? "inhale"
    : $("#breathRing").classList.contains("hold")
      ? "hold"
      : "exhale";
  if (phase !== setBreathPhase._lastSoundPhase) {
    setBreathPhase._lastSoundPhase = phase;
    playSoftTone(phase === "inhale" ? 432 : phase === "hold" ? 528 : 336, 0.12);
  }
};

const previousRenderDeepResultFeature = renderDeepResult;
renderDeepResult = function renderDeepResultWithDashboard(result) {
  previousRenderDeepResultFeature(result);
  window.setTimeout(() => {
    renderFeatureDashboard();
    showZenovaToast("Informe listo. Se actualizaron recomendaciones e insignias.");
  }, 80);
};

const previousRenderAssessmentFeatureDashboard = renderAssessment;
renderAssessment = function renderAssessmentWithDashboard(data) {
  previousRenderAssessmentFeatureDashboard(data);
  renderFeatureDashboard();
};

const previousApplyLanguageFeatureUpgrade = applyLanguage;
applyLanguage = function applyLanguageFeatureUpgrade() {
  previousApplyLanguageFeatureUpgrade();
  renderUserProfile();
  renderFeatureDashboard();
  updateNotificationStatus();
};

setupFeatureUpgradeEvents();
renderUserProfile();
renderFeatureDashboard();
updateNotificationStatus();
window.setInterval(checkActivityNotifications, 30000);
applyLanguage();

const latestInteractionText = {
  es: {
    "game.puzzleText": "Reconstruye la imagen moviendo piezas hacia el espacio libre.",
    "game.platformText": "Muevete con izquierda/derecha y salta con espacio. Cada nivel aumenta la dificultad."
  },
  en: {
    "game.puzzleText": "Rebuild the image by sliding pieces into the empty space.",
    "game.platformText": "Move left/right and jump with space. Each level gets harder."
  },
  pt: {
    "game.puzzleText": "Reconstrua a imagem movendo pecas para o espaco livre.",
    "game.platformText": "Mova para esquerda/direita e salte com espaco. Cada nivel fica mais dificil."
  }
};

Object.keys(latestInteractionText).forEach((lang) => Object.assign(text[lang], latestInteractionText[lang]));

const exerciseVisualLibrary = {
  breathing: {
    title: "Respiracion guiada visual",
    detail: "Sigue el circulo y deja que la imagen marque inhalar, sostener y soltar.",
    image: "assets/meditation.png"
  },
  stretch: {
    title: "Movilidad suave",
    detail: "Hombros, cuello y manos en movimientos lentos para descargar tension.",
    image: "assets/brand-app-preview.png"
  },
  notes: {
    title: "Nota emocional breve",
    detail: "Escribe una emocion, una causa probable y una accion pequena.",
    image: "assets/logo-zenova.png"
  },
  puzzle: {
    title: "Puzzle de calma",
    detail: "Ordena la imagen con movimientos suaves para entrenar atencion sin presion.",
    image: "assets/wave-bg.png"
  },
  platform: {
    title: "Salto de serenidad",
    detail: "Completa niveles cortos para transformar tension en movimiento controlado.",
    image: "assets/zenova-summary.png"
  },
  grounding: {
    title: "Anclaje 5-4-3-2-1",
    detail: "Nombra lo que ves, sientes, escuchas, hueles y saboreas para volver al presente.",
    image: "assets/meditation.png"
  }
};

const deepProfileLibrary = {
  body: {
    name: "Perfil corporal",
    line: "Tu cuerpo parece estar avisando antes que tus pensamientos. Conviene empezar por movimientos lentos, respiracion y descarga muscular.",
    exercises: ["breathing", "stretch", "platform"]
  },
  mind: {
    name: "Perfil mental",
    line: "La carga principal esta en la concentracion y el ruido mental. Te ayudara pasar de ideas grandes a pasos cortos y visibles.",
    exercises: ["puzzle", "notes", "grounding"]
  },
  rest: {
    name: "Perfil de descanso",
    line: "Tu energia pide recuperacion. La meta no es exigirte mas, sino bajar intensidad y proteger pausas reales.",
    exercises: ["breathing", "grounding", "stretch"]
  },
  support: {
    name: "Perfil de apoyo",
    line: "La sensacion de acompanamiento puede mejorar. Usa acciones simples: pedir ayuda concreta, escribir lo que necesitas y reducir aislamiento.",
    exercises: ["notes", "grounding", "breathing"]
  },
  energy: {
    name: "Perfil de energia baja",
    line: "Hay senales de cansancio o baja disposicion. Funcionan mejor ejercicios breves, claros y con logro rapido.",
    exercises: ["stretch", "puzzle", "platform"]
  }
};

function deepStressScore(values) {
  return values[0] + values[1] + values[2] + values[4] + (6 - values[3]) + (6 - values[5]) + (6 - values[6]);
}

function chooseDeepProfile(values) {
  const candidates = [
    { key: "body", value: values[2] + values[4] },
    { key: "mind", value: values[0] + values[1] },
    { key: "rest", value: 12 - values[3] - values[6] },
    { key: "support", value: 6 - values[5] },
    { key: "energy", value: 6 - values[6] }
  ];
  return candidates.sort((a, b) => b.value - a.value)[0].key;
}

function buildDeepResult(values) {
  const score = deepStressScore(values);
  const profileKey = chooseDeepProfile(values);
  const profile = deepProfileLibrary[profileKey];
  let level = "Equilibrio manejable";
  let intro = "Tus respuestas muestran un estado manejable. La recomendacion es sostener habitos preventivos y actuar antes de que la tension suba.";

  if (score >= 25) {
    level = "Sobrecarga emocional alta";
    intro = "Tus respuestas sugieren activacion elevada. ZENOVA prioriza bajar tension fisica, ordenar estimulos y recuperar sensacion de seguridad.";
  } else if (score >= 17) {
    level = "Estres moderado";
    intro = "Aparecen senales claras de estres moderado. Conviene combinar regulacion corporal con ejercicios de atencion breve.";
  }

  const recommendations = profile.exercises.map((key) => exerciseVisualLibrary[key]);
  const report = `${level} - ${profile.name}: ${intro} ${profile.line} Empieza con una rutina corta de 3 a 7 minutos y registra como cambia tu energia despues.`;
  return { score, level, profileKey, profileName: profile.name, report, recommendations };
}

function renderRecommendedVisuals(recommendations) {
  $("#recommendedVisuals").innerHTML = recommendations
    .map(
      (item) => `
        <article class="recommended-visual">
          <img src="${item.image}" alt="${escapeHtml(item.title)}" />
          <strong>${escapeHtml(item.title)}</strong>
          <span>${escapeHtml(item.detail)}</span>
        </article>`
    )
    .join("");
}

function renderDeepResult(result) {
  const stored = {
    id: crypto.randomUUID(),
    date: new Date().toISOString(),
    score: result.score,
    level: result.level,
    report: result.report
  };
  zenovaLocal.tests.push(stored);
  saveCollection("zenovaDeepTests", zenovaLocal.tests);
  dbPut("tests", stored);
  writeTypewriter($("#deepReport"), result.report);
  $("#deepRecommendations").innerHTML = result.recommendations
    .map((item) => `<li><strong>${escapeHtml(item.title)}:</strong> ${escapeHtml(item.detail)}</li>`)
    .join("");
  renderRecommendedVisuals(result.recommendations);
  $("#labResults").classList.remove("hidden");
  $("#labResults").scrollIntoView({ behavior: "smooth", block: "start" });
  renderRecords();
}

function handleDeepTestWithLoading(event) {
  event.preventDefault();
  const values = $$("input[name^='q']").map((input) => Number(input.value));
  const result = buildDeepResult(values);
  $("#labResults").classList.add("hidden");
  $("#labLoading").classList.remove("hidden");
  window.clearTimeout(zenovaLocal.deepLoadingTimer);
  zenovaLocal.deepLoadingTimer = window.setTimeout(() => {
    $("#labLoading").classList.add("hidden");
    renderDeepResult(result);
  }, 2400);
}

handleDeepTest = handleDeepTestWithLoading;

const imagePuzzleState = {
  order: [],
  empty: 8,
  moves: 0,
  justMoved: null,
  image: "assets/meditation.png"
};

function puzzleNeighbors(index) {
  const row = Math.floor(index / 3);
  const col = index % 3;
  return [index - 3, index + 3, index - 1, index + 1].filter((next) => {
    if (next < 0 || next > 8) return false;
    const nextRow = Math.floor(next / 3);
    const nextCol = next % 3;
    return Math.abs(row - nextRow) + Math.abs(col - nextCol) === 1;
  });
}

function isImagePuzzleSolved() {
  return imagePuzzleState.order.every((tile, index) => tile === index);
}

function renderImagePuzzle(statusText) {
  const board = $("#puzzleBoard");
  if (!board) return;
  board.innerHTML = imagePuzzleState.order
    .map((tile, index) => {
      if (tile === 8) {
        return `<button class="puzzle-tile empty" type="button" data-index="${index}" aria-label="Espacio vacio"></button>`;
      }
      const row = Math.floor(tile / 3);
      const col = tile % 3;
      const moving = imagePuzzleState.justMoved === index ? " is-moving" : "";
      return `<button class="puzzle-tile${moving}" type="button" data-index="${index}" style="--tile-image: url('${imagePuzzleState.image}'); --tile-position: ${col * 50}% ${row * 50}%;" aria-label="Pieza de imagen"></button>`;
    })
    .join("");
  const status = $("#puzzleStatus");
  if (status) {
    status.textContent = statusText || `Movimientos: ${imagePuzzleState.moves}. Mueve una pieza junto al espacio libre.`;
  }
}

function resetImagePuzzle() {
  imagePuzzleState.order = Array.from({ length: 9 }, (_, index) => index);
  imagePuzzleState.empty = 8;
  imagePuzzleState.moves = 0;
  imagePuzzleState.justMoved = null;
  let previous = -1;
  for (let step = 0; step < 70; step += 1) {
    const options = puzzleNeighbors(imagePuzzleState.empty).filter((index) => index !== previous);
    const chosen = options[Math.floor(Math.random() * options.length)];
    previous = imagePuzzleState.empty;
    imagePuzzleState.order[imagePuzzleState.empty] = imagePuzzleState.order[chosen];
    imagePuzzleState.order[chosen] = 8;
    imagePuzzleState.empty = chosen;
  }
  renderImagePuzzle("Imagen mezclada. Busca el espacio libre y reconstruye la escena.");
}

function handleImagePuzzleClick(event) {
  const tile = event.target.closest(".puzzle-tile");
  if (!tile) return;
  const index = Number(tile.dataset.index);
  if (!puzzleNeighbors(imagePuzzleState.empty).includes(index)) {
    $("#puzzleStatus").textContent = "Esa pieza no toca el espacio libre. Prueba una pieza vecina.";
    return;
  }
  imagePuzzleState.order[imagePuzzleState.empty] = imagePuzzleState.order[index];
  imagePuzzleState.order[index] = 8;
  imagePuzzleState.justMoved = imagePuzzleState.empty;
  imagePuzzleState.empty = index;
  imagePuzzleState.moves += 1;
  renderImagePuzzle();
  if (isImagePuzzleSolved()) {
    $("#puzzleStatus").textContent = `Puzzle completado en ${imagePuzzleState.moves} movimientos. Excelente atencion suave.`;
  }
}

resetPuzzle = resetImagePuzzle;
handlePuzzleClick = handleImagePuzzleClick;

const platformKeys = { ArrowLeft: false, ArrowRight: false, " ": false };
const platformLevels = [
  {
    name: "Respira",
    start: { x: 28, y: 210 },
    platforms: [
      { x: 0, y: 250, w: 180, h: 24 },
      { x: 220, y: 220, w: 118, h: 14 },
      { x: 384, y: 188, w: 112, h: 14 }
    ],
    orbs: [
      { x: 92, y: 220 },
      { x: 274, y: 190 },
      { x: 438, y: 156 }
    ],
    hazards: [{ x: 184, y: 260, w: 34, h: 12 }],
    exit: { x: 474, y: 146, w: 28, h: 42 }
  },
  {
    name: "Orden",
    start: { x: 24, y: 212 },
    platforms: [
      { x: 0, y: 250, w: 126, h: 24 },
      { x: 164, y: 214, w: 98, h: 14 },
      { x: 310, y: 178, w: 92, h: 14 },
      { x: 424, y: 136, w: 78, h: 14 }
    ],
    orbs: [
      { x: 74, y: 220 },
      { x: 206, y: 184 },
      { x: 352, y: 146 },
      { x: 462, y: 104 }
    ],
    hazards: [
      { x: 132, y: 260, w: 38, h: 12, minX: 132, maxX: 238, vx: 1.25 },
      { x: 270, y: 260, w: 42, h: 12 }
    ],
    exit: { x: 482, y: 94, w: 28, h: 42 }
  },
  {
    name: "Enfoque",
    start: { x: 24, y: 212 },
    platforms: [
      { x: 0, y: 250, w: 104, h: 24 },
      { x: 138, y: 210, w: 84, h: 14 },
      { x: 250, y: 170, w: 78, h: 14, minX: 226, maxX: 326, vx: 0.9 },
      { x: 372, y: 132, w: 88, h: 14 },
      { x: 90, y: 92, w: 78, h: 14 }
    ],
    orbs: [
      { x: 174, y: 178 },
      { x: 292, y: 138 },
      { x: 414, y: 100 },
      { x: 126, y: 60 }
    ],
    hazards: [
      { x: 110, y: 260, w: 44, h: 12 },
      { x: 338, y: 260, w: 42, h: 12, minX: 300, maxX: 410, vx: 1.45 }
    ],
    exit: { x: 102, y: 50, w: 28, h: 42 }
  },
  {
    name: "Calma profunda",
    start: { x: 24, y: 212 },
    platforms: [
      { x: 0, y: 250, w: 96, h: 24 },
      { x: 140, y: 224, w: 76, h: 14, minX: 120, maxX: 230, vx: 1.05 },
      { x: 270, y: 188, w: 78, h: 14 },
      { x: 408, y: 152, w: 74, h: 14, minX: 350, maxX: 430, vx: -0.95 },
      { x: 224, y: 106, w: 80, h: 14 },
      { x: 58, y: 72, w: 82, h: 14 }
    ],
    orbs: [
      { x: 178, y: 192 },
      { x: 310, y: 156 },
      { x: 444, y: 120 },
      { x: 264, y: 74 },
      { x: 98, y: 40 }
    ],
    hazards: [
      { x: 104, y: 260, w: 42, h: 12, minX: 100, maxX: 238, vx: 1.6 },
      { x: 356, y: 260, w: 46, h: 12, minX: 316, maxX: 460, vx: -1.4 },
      { x: 196, y: 136, w: 34, h: 12 }
    ],
    exit: { x: 66, y: 30, w: 28, h: 42 }
  }
];

const platformRuntime = {
  levelIndex: 0,
  player: null,
  level: null,
  message: "Presiona iniciar para comenzar.",
  running: false
};

function cloneLevel(level) {
  return {
    ...level,
    platforms: level.platforms.map((item) => ({ ...item })),
    hazards: level.hazards.map((item) => ({ ...item })),
    orbs: level.orbs.map((item) => ({ ...item, taken: false })),
    exit: { ...level.exit }
  };
}

function rectsOverlap(a, b) {
  return a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y;
}

function setPlatformStatus(extra) {
  const status = $("#platformStatus");
  const level = platformRuntime.level || platformLevels[platformRuntime.levelIndex] || platformLevels[0];
  if (status) {
    status.textContent = `Nivel ${platformRuntime.levelIndex + 1}/${platformLevels.length} - ${level.name}. ${extra}`;
  }
}

function drawAdvancedPlatformGame() {
  const canvas = $("#platformGame");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const level = platformRuntime.level;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient.addColorStop(0, "#080712");
  gradient.addColorStop(1, "#1a0c24");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < 24; i += 1) {
    ctx.fillStyle = i % 2 === 0 ? "rgba(230,185,110,0.12)" : "rgba(103,220,255,0.1)";
    ctx.beginPath();
    ctx.arc((i * 73) % canvas.width, (i * 41) % canvas.height, 2 + (i % 4), 0, Math.PI * 2);
    ctx.fill();
  }

  if (!level || !platformRuntime.player) {
    ctx.fillStyle = "#e6b96e";
    ctx.font = "16px sans-serif";
    ctx.fillText("Presiona iniciar: 4 niveles con obstaculos y puntos de calma.", 28, 42);
    setPlatformStatus("Recolecta todos los puntos y llega al portal.");
    return;
  }

  ctx.fillStyle = "rgba(158,66,255,0.86)";
  level.platforms.forEach((platform) => {
    ctx.fillRect(platform.x, platform.y, platform.w, platform.h);
    ctx.fillStyle = "rgba(230,185,110,0.45)";
    ctx.fillRect(platform.x, platform.y, platform.w, 3);
    ctx.fillStyle = "rgba(158,66,255,0.86)";
  });

  level.hazards.forEach((hazard) => {
    ctx.fillStyle = "rgba(220,35,139,0.92)";
    ctx.fillRect(hazard.x, hazard.y, hazard.w, hazard.h);
    ctx.fillStyle = "rgba(255,255,255,0.75)";
    ctx.fillRect(hazard.x + 4, hazard.y + 3, hazard.w - 8, 2);
  });

  level.orbs.forEach((orb) => {
    if (orb.taken) return;
    const pulse = 1 + Math.sin(Date.now() / 220 + orb.x) * 0.15;
    ctx.beginPath();
    ctx.fillStyle = "#e6b96e";
    ctx.arc(orb.x, orb.y, 8 * pulse, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "rgba(230,185,110,0.4)";
    ctx.lineWidth = 2;
    ctx.stroke();
  });

  const exitReady = level.orbs.every((orb) => orb.taken);
  ctx.fillStyle = exitReady ? "rgba(103,220,255,0.9)" : "rgba(255,255,255,0.24)";
  ctx.fillRect(level.exit.x, level.exit.y, level.exit.w, level.exit.h);
  ctx.strokeStyle = "rgba(230,185,110,0.7)";
  ctx.strokeRect(level.exit.x, level.exit.y, level.exit.w, level.exit.h);

  const player = platformRuntime.player;
  ctx.fillStyle = "#f6efe5";
  ctx.fillRect(player.x, player.y, player.w, player.h);
  ctx.fillStyle = "#e6b96e";
  ctx.fillRect(player.x + 5, player.y + 7, player.w - 10, 5);

  const taken = level.orbs.filter((orb) => orb.taken).length;
  ctx.fillStyle = "#ffe0a1";
  ctx.font = "15px sans-serif";
  ctx.fillText(`Nivel ${platformRuntime.levelIndex + 1}/${platformLevels.length}: ${level.name}`, 14, 22);
  ctx.fillText(`Calma ${taken}/${level.orbs.length}`, 14, 42);
  ctx.fillText(platformRuntime.message, 14, 264);
}

function resetPlayerToLevelStart(message) {
  const level = platformRuntime.level;
  platformRuntime.player = {
    x: level.start.x,
    y: level.start.y,
    w: 24,
    h: 34,
    vx: 0,
    vy: 0,
    grounded: false,
    carry: 0
  };
  platformRuntime.message = message || "Vuelve al ritmo. Respira y salta otra vez.";
  setPlatformStatus(platformRuntime.message);
}

function loadPlatformLevel(index) {
  platformRuntime.levelIndex = index;
  platformRuntime.level = cloneLevel(platformLevels[index]);
  resetPlayerToLevelStart("Recolecta todos los puntos y llega al portal.");
}

function updateMovingRects(items) {
  items.forEach((item) => {
    if (!item.vx) return;
    item.x += item.vx;
    if (item.x < item.minX || item.x + item.w > item.maxX) {
      item.vx *= -1;
      item.x += item.vx;
    }
  });
}

function stepAdvancedPlatform() {
  const canvas = $("#platformGame");
  const level = platformRuntime.level;
  const player = platformRuntime.player;
  if (!canvas || !level || !player) return;

  updateMovingRects(level.platforms);
  updateMovingRects(level.hazards);

  player.vx = (platformKeys.ArrowRight ? 3.1 : 0) - (platformKeys.ArrowLeft ? 3.1 : 0);
  if (platformKeys[" "] && player.grounded) {
    player.vy = -9.2;
    player.grounded = false;
  }
  player.vy += 0.42;
  player.vy = Math.min(player.vy, 9.5);

  const previousBottom = player.y + player.h;
  player.x += player.vx + (player.carry || 0);
  player.x = Math.max(0, Math.min(canvas.width - player.w, player.x));
  player.y += player.vy;
  player.grounded = false;
  player.carry = 0;

  level.platforms.forEach((platform) => {
    const nextBottom = player.y + player.h;
    const overX = player.x + player.w > platform.x && player.x < platform.x + platform.w;
    const landing = player.vy >= 0 && previousBottom <= platform.y + 8 && nextBottom >= platform.y && nextBottom <= platform.y + platform.h + 12;
    if (overX && landing) {
      player.y = platform.y - player.h;
      player.vy = 0;
      player.grounded = true;
      player.carry = platform.vx || 0;
    }
  });

  if (player.y > canvas.height + 40) {
    resetPlayerToLevelStart("Caida detectada. Reinicia desde un punto seguro.");
  }

  level.hazards.forEach((hazard) => {
    if (rectsOverlap(player, hazard)) {
      resetPlayerToLevelStart("Tocaste tension. Pausa, respira y vuelve a intentarlo.");
    }
  });

  level.orbs.forEach((orb) => {
    if (!orb.taken && Math.abs(player.x + player.w / 2 - orb.x) < 24 && Math.abs(player.y + player.h / 2 - orb.y) < 28) {
      orb.taken = true;
      platformRuntime.message = "Punto de calma recuperado.";
    }
  });

  const allOrbs = level.orbs.every((orb) => orb.taken);
  if (allOrbs && rectsOverlap(player, level.exit)) {
    if (platformRuntime.levelIndex < platformLevels.length - 1) {
      loadPlatformLevel(platformRuntime.levelIndex + 1);
      platformRuntime.message = "Nuevo nivel desbloqueado. La dificultad sube.";
    } else {
      platformRuntime.running = false;
      platformRuntime.message = "Completaste todos los niveles. Excelente control.";
      setPlatformStatus("Juego completado. Excelente control y respiracion.");
      drawAdvancedPlatformGame();
      return;
    }
  }

  const taken = level.orbs.filter((orb) => orb.taken).length;
  setPlatformStatus(allOrbs ? "Portal abierto. Llega a la salida." : `Recolecta puntos de calma: ${taken}/${level.orbs.length}.`);
}

function platformLoop() {
  if (!platformRuntime.running) return;
  stepAdvancedPlatform();
  drawAdvancedPlatformGame();
  zenovaLocal.platform = requestAnimationFrame(platformLoop);
}

function startAdvancedPlatformGame() {
  cancelAnimationFrame(zenovaLocal.platform);
  platformRuntime.running = true;
  loadPlatformLevel(0);
  platformLoop();
}

function resetAdvancedPlatformGame() {
  cancelAnimationFrame(zenovaLocal.platform);
  platformRuntime.running = false;
  platformRuntime.level = null;
  platformRuntime.player = null;
  platformRuntime.levelIndex = 0;
  platformRuntime.message = "Presiona iniciar para comenzar.";
  drawAdvancedPlatformGame();
}

drawPlatformGame = drawAdvancedPlatformGame;
startPlatformGame = startAdvancedPlatformGame;
resetPlatformGame = resetAdvancedPlatformGame;

document.addEventListener("keydown", (event) => {
  if (!(event.key in platformKeys)) return;
  if (!$("#labScreen")?.classList.contains("is-open")) return;
  platformKeys[event.key] = true;
  if (event.key === " ") event.preventDefault();
});

document.addEventListener("keyup", (event) => {
  if (event.key in platformKeys) platformKeys[event.key] = false;
});

function openPaymentScreen() {
  $("#paymentScreen")?.classList.add("is-open");
  $("#paymentMessage").textContent = "";
}

function closePaymentScreen() {
  $("#paymentScreen")?.classList.remove("is-open");
}

function selectVipPlan(button) {
  $$(".plan-card").forEach((card) => card.classList.toggle("selected", card.contains(button)));
  $("#selectedPlan").value = button.dataset.plan;
  $("#paymentMessage").textContent = `Plan seleccionado: ${button.dataset.plan}. Completa los datos para simular el pago.`;
}

function setupLatestInteractionEvents() {
  $("#deepTestForm")?.addEventListener(
    "submit",
    (event) => {
      event.preventDefault();
      event.stopImmediatePropagation();
      handleDeepTestWithLoading(event);
    },
    true
  );
  $("#puzzleBoard")?.addEventListener(
    "click",
    (event) => {
      event.preventDefault();
      event.stopImmediatePropagation();
      handleImagePuzzleClick(event);
    },
    true
  );
  $("#shufflePuzzleBtn")?.addEventListener(
    "click",
    (event) => {
      event.preventDefault();
      event.stopImmediatePropagation();
      resetImagePuzzle();
    },
    true
  );
  $("#startPlatformBtn")?.addEventListener(
    "click",
    (event) => {
      event.preventDefault();
      event.stopImmediatePropagation();
      startAdvancedPlatformGame();
    },
    true
  );
  $("#resetPlatformBtn")?.addEventListener(
    "click",
    (event) => {
      event.preventDefault();
      event.stopImmediatePropagation();
      resetAdvancedPlatformGame();
    },
    true
  );
  $("#vipOpenBtn")?.addEventListener("click", openPaymentScreen);
  $("#paymentCloseBtn")?.addEventListener("click", closePaymentScreen);
  $("#paymentScreen")?.addEventListener("click", (event) => {
    if (event.target.id === "paymentScreen") closePaymentScreen();
  });
  $$(".plan-card button[data-plan]").forEach((button) => {
    button.addEventListener("click", () => selectVipPlan(button));
  });
  $("#paymentForm")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const selectedPlan = $("#selectedPlan").value || "VIP Balance";
    $("#selectedPlan").value = selectedPlan;
    $("#paymentMessage").textContent = `Pago simulado aprobado para ${selectedPlan}. En la version real se conectaria una pasarela segura.`;
  });
}

const previousRenderAssessmentProfileMedia = renderAssessment;
renderAssessment = function renderAssessmentWithMedia(data) {
  previousRenderAssessmentProfileMedia(data);
  const image = $("#profileFloatingImage");
  if (!image) return;
  const profile = calculateProfile(data);
  const level = profileLevelFromScore(profile.score);
  const mediaByLevel = {
    low: "assets/logo-zenova.png",
    moderate: "assets/brand-app-preview.png",
    high: "assets/meditation.png"
  };
  image.src = mediaByLevel[level];
  image.alt = `Imagen animada del perfil ${level}`;
  image.classList.remove("is-moving");
  void image.offsetWidth;
  image.classList.add("is-moving");
};

setupLatestInteractionEvents();
resetImagePuzzle();
drawAdvancedPlatformGame();
applyLanguage();
if (state.lastAssessment) {
  renderAssessment(state.lastAssessment);
}

Object.keys(featureUpgradeText).forEach((lang) => Object.assign(text[lang], featureUpgradeText[lang]));
$$("[data-i18n]").forEach((node) => {
  if (featureUpgradeText[state.language]?.[node.dataset.i18n]) {
    node.textContent = t(node.dataset.i18n);
  }
});

const authRedesignText = {
  es: {
    "auth.heroTitle": "Bienestar emocional con una experiencia premium.",
    "auth.highlight1": "Seguimiento emocional",
    "auth.highlight2": "ZENIN personalizado",
    "auth.highlight3": "Rutinas antiestrés"
  },
  en: {
    "auth.heroTitle": "Emotional wellness with a premium experience.",
    "auth.highlight1": "Emotional tracking",
    "auth.highlight2": "Personalized ZENIN",
    "auth.highlight3": "Anti-stress routines"
  },
  pt: {
    "auth.heroTitle": "Bem-estar emocional com uma experiencia premium.",
    "auth.highlight1": "Acompanhamento emocional",
    "auth.highlight2": "ZENIN personalizado",
    "auth.highlight3": "Rotinas antiestresse"
  }
};

Object.keys(authRedesignText).forEach((lang) => Object.assign(text[lang], authRedesignText[lang]));
$$("[data-i18n]").forEach((node) => {
  if (authRedesignText[state.language]?.[node.dataset.i18n]) {
    node.textContent = t(node.dataset.i18n);
  }
});

const recoveryText = {
  es: {
    "recovery.forgot": "¿Olvidaste tu contraseña?",
    "recovery.back": "Volver al inicio de sesión",
    "recovery.title": "Recuperar contraseña",
    "recovery.emailText": "Ingresa tu correo. Si está registrado, recibirás un código de recuperación.",
    "recovery.sendCode": "Enviar código de recuperación",
    "recovery.codeTitle": "Verifica tu código",
    "recovery.codeText": "Escribe los 6 dígitos enviados al correo. El código vence en 10 minutos.",
    "recovery.resend": "Reenviar código",
    "recovery.verify": "Verificar código",
    "recovery.preview": "Ver correo de prueba",
    "recovery.newPasswordTitle": "Crea una nueva contraseña",
    "recovery.newPasswordText": "Usa una contraseña segura con mayúscula, número y carácter especial.",
    "recovery.newPassword": "Nueva contraseña",
    "recovery.confirmPassword": "Confirmar contraseña",
    "recovery.show": "Mostrar",
    "recovery.hide": "Ocultar",
    "recovery.ruleLength": "Mínimo 8 caracteres",
    "recovery.ruleUpper": "Al menos una mayúscula",
    "recovery.ruleNumber": "Al menos un número",
    "recovery.ruleSpecial": "Al menos un carácter especial",
    "recovery.updatePassword": "Actualizar contraseña",
    "recovery.successTitle": "Contraseña actualizada",
    "recovery.successText": "Tu contraseña fue actualizada. En unos segundos volverás al inicio de sesión."
  },
  en: {
    "recovery.forgot": "Forgot your password?",
    "recovery.back": "Back to sign in",
    "recovery.title": "Recover password",
    "recovery.emailText": "Enter your email. If it is registered, you will receive a recovery code.",
    "recovery.sendCode": "Send recovery code",
    "recovery.codeTitle": "Verify your code",
    "recovery.codeText": "Type the 6 digits sent to your email. The code expires in 10 minutes.",
    "recovery.resend": "Resend code",
    "recovery.verify": "Verify code",
    "recovery.preview": "View test email",
    "recovery.newPasswordTitle": "Create a new password",
    "recovery.newPasswordText": "Use a secure password with uppercase, number, and special character.",
    "recovery.newPassword": "New password",
    "recovery.confirmPassword": "Confirm password",
    "recovery.show": "Show",
    "recovery.hide": "Hide",
    "recovery.ruleLength": "At least 8 characters",
    "recovery.ruleUpper": "At least one uppercase letter",
    "recovery.ruleNumber": "At least one number",
    "recovery.ruleSpecial": "At least one special character",
    "recovery.updatePassword": "Update password",
    "recovery.successTitle": "Password updated",
    "recovery.successText": "Your password was updated. You will return to sign in in a few seconds."
  },
  pt: {
    "recovery.forgot": "Esqueceu sua senha?",
    "recovery.back": "Voltar ao login",
    "recovery.title": "Recuperar senha",
    "recovery.emailText": "Digite seu e-mail. Se estiver registrado, você receberá um código de recuperação.",
    "recovery.sendCode": "Enviar código de recuperação",
    "recovery.codeTitle": "Verifique seu código",
    "recovery.codeText": "Digite os 6 dígitos enviados ao e-mail. O código expira em 10 minutos.",
    "recovery.resend": "Reenviar código",
    "recovery.verify": "Verificar código",
    "recovery.preview": "Ver e-mail de teste",
    "recovery.newPasswordTitle": "Crie uma nova senha",
    "recovery.newPasswordText": "Use uma senha segura com maiúscula, número e caractere especial.",
    "recovery.newPassword": "Nova senha",
    "recovery.confirmPassword": "Confirmar senha",
    "recovery.show": "Mostrar",
    "recovery.hide": "Ocultar",
    "recovery.ruleLength": "Mínimo de 8 caracteres",
    "recovery.ruleUpper": "Ao menos uma letra maiúscula",
    "recovery.ruleNumber": "Ao menos um número",
    "recovery.ruleSpecial": "Ao menos um caractere especial",
    "recovery.updatePassword": "Atualizar senha",
    "recovery.successTitle": "Senha atualizada",
    "recovery.successText": "Sua senha foi atualizada. Em alguns segundos você voltará ao login."
  }
};

Object.keys(recoveryText).forEach((lang) => Object.assign(text[lang], recoveryText[lang]));

function refreshRecoveryI18n() {
  $$("[data-i18n]").forEach((node) => {
    if (recoveryText[state.language]?.[node.dataset.i18n]) {
      node.textContent = t(node.dataset.i18n);
    }
  });
}

function setAuthRenderState(isAuthenticated) {
  const root = document.documentElement;
  root.classList.remove("auth-pending");
  root.classList.toggle("session-valid", Boolean(isAuthenticated));
  root.classList.toggle("session-missing", !isAuthenticated);
}

setAuthRenderState(Boolean(state.session));

const previousSetSessionRenderGate = setSession;
setSession = function setSessionWithRenderGate(session) {
  previousSetSessionRenderGate(session);
  setAuthRenderState(Boolean(state.session));
};

const previousApplyLanguageRecovery = applyLanguage;
applyLanguage = function applyLanguageWithRecovery() {
  previousApplyLanguageRecovery();
  refreshRecoveryI18n();
};

const recoveryRuntime = {
  email: "",
  accountExists: false,
  timer: null,
  expiresAt: 0,
  verified: false,
  nonce: ""
};

function recoveryMessage(message) {
  $("#authMessage").textContent = message;
}

function recoveryGenericSentMessage() {
  return {
    es: "Si el correo está registrado, recibirás un código de recuperación.",
    en: "If the email is registered, you will receive a recovery code.",
    pt: "Se o e-mail estiver registrado, você receberá um código de recuperação."
  }[state.language];
}

function recoveryInvalidMessage() {
  return {
    es: "Código inválido, vencido o con demasiados intentos. Solicita uno nuevo.",
    en: "Invalid, expired, or over-attempted code. Request a new one.",
    pt: "Código inválido, expirado ou com muitas tentativas. Solicite um novo."
  }[state.language];
}

function recoverySecurityLog(reason, email) {
  const log = JSON.parse(localStorage.getItem("zenovaRecoverySecurityLog") || "[]");
  log.push({ reason, email: email || recoveryRuntime.email || "unknown", date: new Date().toISOString() });
  localStorage.setItem("zenovaRecoverySecurityLog", JSON.stringify(log.slice(-80)));
}

function getRecoveryRateState() {
  return JSON.parse(localStorage.getItem("zenovaRecoveryRate") || "{}");
}

function saveRecoveryRateState(value) {
  localStorage.setItem("zenovaRecoveryRate", JSON.stringify(value));
}

function trackRecoveryRequest(email) {
  const hour = 60 * 60 * 1000;
  const now = Date.now();
  const key = email || "unknown";
  const rates = getRecoveryRateState();
  const recent = (rates[key] || []).filter((stamp) => now - stamp < hour);
  if (recent.length >= 3) {
    recoverySecurityLog("request-rate-limit", key);
    rates[key] = recent;
    saveRecoveryRateState(rates);
    return false;
  }
  recent.push(now);
  rates[key] = recent;
  saveRecoveryRateState(rates);
  return true;
}

function generateRecoveryCode() {
  const values = new Uint32Array(1);
  if (crypto.getRandomValues) {
    crypto.getRandomValues(values);
    return String(values[0] % 1000000).padStart(6, "0");
  }
  return String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
}

function recoveryNonce() {
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function simpleRecoveryHash(value) {
  let hash = 0;
  for (let index = 0; index < value.length; index += 1) {
    hash = (hash << 5) - hash + value.charCodeAt(index);
    hash |= 0;
  }
  return `fallback-${Math.abs(hash)}`;
}

async function hashRecoveryCode(code, email, nonce) {
  const payload = `${email}:${code}:${nonce}:zenova-recovery-v1`;
  if (!crypto.subtle || !window.TextEncoder) {
    return simpleRecoveryHash(payload);
  }
  const bytes = new TextEncoder().encode(payload);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

function recoveryStateKey(email = recoveryRuntime.email) {
  return `zenovaRecoveryOtp:${email}`;
}

function saveRecoveryOtp(stateValue) {
  localStorage.setItem(recoveryStateKey(stateValue.email), JSON.stringify(stateValue));
}

function getRecoveryOtp(email = recoveryRuntime.email) {
  return JSON.parse(localStorage.getItem(recoveryStateKey(email)) || "null");
}

function clearRecoveryOtp(email = recoveryRuntime.email) {
  if (email) localStorage.removeItem(recoveryStateKey(email));
}

function buildRecoveryEmailHtml(account, email, code) {
  const name = account?.name || "usuario";
  return `
    <article style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto;background:#080610;color:#fff8e8;border-radius:24px;overflow:hidden;border:1px solid rgba(230,185,110,.28)">
      <div style="padding:28px;background:linear-gradient(135deg,#0b0714,#221033)">
        <img src="assets/logo-zenova.png" alt="ZENOVA" style="width:64px;height:64px;border-radius:50%;border:1px solid #e6b96e" />
        <h1 style="margin:18px 0 6px;color:#e6b96e">Código de recuperación ZENOVA</h1>
        <p style="margin:0;color:#c9bdd7">Hola ${escapeHtml(name)}, usa este código para crear una nueva contraseña.</p>
      </div>
      <div style="padding:30px;text-align:center">
        <div style="font-size:42px;letter-spacing:10px;font-weight:900;color:#fff3c7;background:rgba(230,185,110,.12);border:1px solid rgba(230,185,110,.28);border-radius:18px;padding:18px">${code}</div>
        <p style="color:#c9bdd7;margin:22px 0 0">Este código vence en 10 minutos y solo puede usarse una vez.</p>
        <p style="color:#e6b96e;font-weight:800">No compartas este código con nadie.</p>
        <a href="mailto:soporte@zenova.local" style="color:#e6b96e">Contactar soporte</a>
      </div>
    </article>
  `;
}

function sendRecoveryEmail(account, email, code) {
  const html = buildRecoveryEmailHtml(account, email, code);
  const outbox = JSON.parse(localStorage.getItem("zenovaRecoveryOutbox") || "[]");
  outbox.push({ email, subject: "Código de recuperación ZENOVA", html, date: new Date().toISOString() });
  localStorage.setItem("zenovaRecoveryOutbox", JSON.stringify(outbox.slice(-10)));
  if (location.protocol === "file:" || ["localhost", "127.0.0.1"].includes(location.hostname)) {
    $("#recoveryEmailHtml").innerHTML = html;
    $("#recoveryEmailPreview").classList.remove("hidden");
  }
}

function setRecoveryMode(active) {
  $("#guestBtn").classList.toggle("hidden", active);
  $(".auth-tabs")?.classList.toggle("recovery-active", active);
}

function switchRecoveryStep(step) {
  $$(".recovery-step").forEach((node) => {
    node.classList.toggle("active", node.dataset.recoveryStep === step);
  });
  if (step === "code") {
    $(".otp-input")?.focus();
  }
}

function clearOtpInputs() {
  $$(".otp-input").forEach((input) => {
    input.value = "";
  });
}

function formatRecoveryTime(ms) {
  const total = Math.max(0, Math.ceil(ms / 1000));
  return `${String(Math.floor(total / 60)).padStart(2, "0")}:${String(total % 60).padStart(2, "0")}`;
}

function startRecoveryTimer(expiresAt) {
  recoveryRuntime.expiresAt = expiresAt;
  window.clearInterval(recoveryRuntime.timer);
  const update = () => {
    const remaining = expiresAt - Date.now();
    $("#recoveryTimer").textContent = formatRecoveryTime(remaining);
    $("#recoveryResendBtn").disabled = remaining > 0;
    if (remaining <= 0) {
      window.clearInterval(recoveryRuntime.timer);
    }
  };
  update();
  recoveryRuntime.timer = window.setInterval(update, 1000);
}

async function requestRecoveryCode(email) {
  const normalizedEmail = email.trim().toLowerCase();
  recoveryRuntime.email = normalizedEmail;
  recoveryRuntime.verified = false;
  clearRecoveryOtp(normalizedEmail);
  if (!trackRecoveryRequest(normalizedEmail)) {
    recoveryMessage(recoveryGenericSentMessage());
    return false;
  }
  const accounts = getAccounts();
  const account = accounts.find((item) => item.email === normalizedEmail);
  const code = generateRecoveryCode();
  const nonce = recoveryNonce();
  const expiresAt = Date.now() + 10 * 60 * 1000;
  const codeHash = await hashRecoveryCode(code, normalizedEmail, nonce);
  recoveryRuntime.accountExists = Boolean(account);
  recoveryRuntime.nonce = nonce;
  saveRecoveryOtp({
    email: normalizedEmail,
    codeHash,
    nonce,
    expiresAt,
    used: false,
    attempts: 0,
    accountExists: Boolean(account),
    createdAt: new Date().toISOString()
  });
  sendRecoveryEmail(account, normalizedEmail, code);
  recoveryMessage(recoveryGenericSentMessage());
  clearOtpInputs();
  startRecoveryTimer(expiresAt);
  switchRecoveryStep("code");
  return true;
}

async function handleRecoveryEmail(event) {
  event.preventDefault();
  $("#recoveryEmailPreview").classList.add("hidden");
  await requestRecoveryCode($("#recoveryEmail").value);
}

async function verifyRecoveryCode(event) {
  event.preventDefault();
  const stateValue = getRecoveryOtp();
  const code = $$(".otp-input").map((input) => input.value).join("");
  if (!stateValue || stateValue.used || Date.now() > stateValue.expiresAt || code.length !== 6) {
    recoveryMessage(recoveryInvalidMessage());
    recoverySecurityLog("invalid-or-expired-code");
    $("#recoveryResendBtn").disabled = false;
    return;
  }
  if (stateValue.attempts >= 5) {
    recoveryMessage(recoveryInvalidMessage());
    recoverySecurityLog("verification-rate-limit", stateValue.email);
    $("#recoveryResendBtn").disabled = false;
    return;
  }
  const codeHash = await hashRecoveryCode(code, stateValue.email, stateValue.nonce);
  if (codeHash !== stateValue.codeHash) {
    stateValue.attempts += 1;
    saveRecoveryOtp(stateValue);
    recoveryMessage(recoveryInvalidMessage());
    recoverySecurityLog("wrong-code", stateValue.email);
    return;
  }
  stateValue.used = true;
  saveRecoveryOtp(stateValue);
  recoveryRuntime.verified = true;
  recoveryRuntime.accountExists = stateValue.accountExists;
  recoveryMessage("");
  switchRecoveryStep("password");
  $("#newRecoveryPassword").focus();
}

function passwordChecks(password) {
  return {
    length: password.length >= 8,
    upper: /[A-ZÁÉÍÓÚÑ]/.test(password),
    number: /\d/.test(password),
    special: /[^A-Za-zÁÉÍÓÚáéíóúÑñ0-9]/.test(password)
  };
}

function updatePasswordStrength() {
  const password = $("#newRecoveryPassword").value;
  const checks = passwordChecks(password);
  const score = Object.values(checks).filter(Boolean).length;
  const meter = $(".strength-meter");
  const colors = ["#b14b4b", "#bd7c36", "#d4ad52", "#e6b96e", "#75e6a7"];
  const labels = {
    es: ["Seguridad baja", "Seguridad básica", "Seguridad media", "Seguridad alta", "Seguridad fuerte"],
    en: ["Low security", "Basic security", "Medium security", "High security", "Strong security"],
    pt: ["Segurança baixa", "Segurança básica", "Segurança média", "Segurança alta", "Segurança forte"]
  }[state.language];
  meter.style.setProperty("--strength-width", `${score * 25}%`);
  meter.style.setProperty("--strength-color", colors[score]);
  $("#strengthText").textContent = labels[score];
  Object.entries(checks).forEach(([rule, valid]) => {
    $(`#passwordRules [data-rule="${rule}"]`)?.classList.toggle("valid", valid);
  });
  return score === 4;
}

function handleRecoveryPassword(event) {
  event.preventDefault();
  const stateValue = getRecoveryOtp();
  const password = $("#newRecoveryPassword").value;
  const confirm = $("#confirmRecoveryPassword").value;
  if (!recoveryRuntime.verified || !stateValue?.used) {
    recoveryMessage(recoveryInvalidMessage());
    return;
  }
  if (!updatePasswordStrength()) {
    recoveryMessage("La contraseña aún no cumple todos los requisitos.");
    return;
  }
  if (password !== confirm) {
    recoveryMessage("Las contraseñas no coinciden.");
    return;
  }
  const accounts = getAccounts();
  const index = accounts.findIndex((item) => item.email === stateValue.email);
  if (index >= 0) {
    accounts[index] = { ...accounts[index], password };
    saveAccounts(accounts);
  }
  clearRecoveryOtp(stateValue.email);
  recoveryRuntime.verified = false;
  recoveryMessage("");
  switchRecoveryStep("success");
  window.setTimeout(() => {
    resetRecoveryFlow();
    setRecoveryMode(false);
    switchAuthPanel("loginPanel");
    $("#loginEmail").value = stateValue.email;
    $("#loginPassword").focus();
  }, 1800);
}

function resetRecoveryFlow() {
  window.clearInterval(recoveryRuntime.timer);
  recoveryRuntime.email = "";
  recoveryRuntime.accountExists = false;
  recoveryRuntime.verified = false;
  recoveryRuntime.expiresAt = 0;
  $("#recoveryEmailForm").reset();
  $("#recoveryCodeForm").reset();
  $("#recoveryPasswordForm").reset();
  $("#recoveryEmailPreview").classList.add("hidden");
  $("#recoveryEmailHtml").innerHTML = "";
  clearOtpInputs();
  updatePasswordStrength();
  $("#recoveryResendBtn").disabled = true;
  $("#recoveryTimer").textContent = "10:00";
  switchRecoveryStep("email");
}

function openRecoveryFlow() {
  setRecoveryMode(true);
  resetRecoveryFlow();
  switchAuthPanel("recoveryPanel");
  recoveryMessage("");
  $("#recoveryEmail").focus();
}

function setupRecoveryOtpInputs() {
  const inputs = $$(".otp-input");
  inputs.forEach((input, index) => {
    input.addEventListener("input", () => {
      input.value = input.value.replace(/\D/g, "").slice(0, 1);
      if (input.value && inputs[index + 1]) inputs[index + 1].focus();
    });
    input.addEventListener("keydown", (event) => {
      if (event.key === "Backspace" && !input.value && inputs[index - 1]) {
        inputs[index - 1].focus();
      }
    });
    input.addEventListener("paste", (event) => {
      event.preventDefault();
      const digits = event.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
      digits.split("").forEach((digit, digitIndex) => {
        if (inputs[digitIndex]) inputs[digitIndex].value = digit;
      });
      inputs[Math.min(digits.length, inputs.length) - 1]?.focus();
    });
  });
}

function setupPasswordRecovery() {
  $("#forgotPasswordBtn")?.addEventListener("click", openRecoveryFlow);
  $("#recoveryBackBtn")?.addEventListener("click", () => {
    resetRecoveryFlow();
    setRecoveryMode(false);
    switchAuthPanel("loginPanel");
  });
  $$(".auth-tab").forEach((tab) => {
    tab.addEventListener("click", () => setRecoveryMode(false));
  });
  $("#recoveryEmailForm")?.addEventListener("submit", handleRecoveryEmail);
  $("#recoveryCodeForm")?.addEventListener("submit", verifyRecoveryCode);
  $("#recoveryPasswordForm")?.addEventListener("submit", handleRecoveryPassword);
  $("#recoveryResendBtn")?.addEventListener("click", () => {
    if (!$("#recoveryResendBtn").disabled && recoveryRuntime.email) {
      requestRecoveryCode(recoveryRuntime.email);
    }
  });
  $("#newRecoveryPassword")?.addEventListener("input", updatePasswordStrength);
  $$("[data-password-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      const input = $(`#${button.dataset.passwordToggle}`);
      input.type = input.type === "password" ? "text" : "password";
      button.textContent = input.type === "password" ? t("recovery.show") : t("recovery.hide");
    });
  });
  setupRecoveryOtpInputs();
  refreshRecoveryI18n();
}

setupPasswordRecovery();

const landingRedesignText = {
  es: {
    "hero.eyebrow": "Bienestar emocional de uso diario",
    "hero.title": "Tu plataforma diaria de bienestar",
    "hero.lede":
      "Herramientas practicas para registrar tu estado, construir habitos, organizar objetivos y convertir el cuidado emocional en acciones diarias.",
    "hero.start": "Comenzar ahora",
    "hero.more": "Conocer más",
    "hero.aiTag": "Datos utiles",
    "hero.focusTag": "Seguimiento personal",
    "hero.habitTag": "Hábitos saludables",
    "hero.discover": "Descubre más",
    "phone.note": "Tu próxima pausa puede empezar con 2 minutos de respiración guiada.",
    "nav.benefits": "Beneficios",
    "nav.how": "Cómo funciona",
    "trust.ai": "Datos estructurados",
    "trust.aiText": "Cada registro queda listo para futuras recomendaciones.",
    "trust.privacy": "Privacidad local",
    "trust.privacyText": "La memoria del perfil se guarda en tu navegador.",
    "trust.tracking": "Seguimiento continuo",
    "trust.trackingText": "Lectura progresiva de hábitos, sueño y estrés.",
    "trust.habits": "Hábitos saludables",
    "trust.habitsText": "Acciones simples para sostener el bienestar diario.",
    "benefits.eyebrow": "Beneficios reales",
    "benefits.title": "Bienestar que se adapta a tu día",
    "benefits.text": "ZENOVA no solo muestra herramientas: aprende de tus patrones y te ayuda a convertir el cuidado emocional en acciones pequeñas.",
    "benefits.card1Title": "Comprendes tus patrones",
    "benefits.card1Text": "Relaciona estrés, sueño, notas y contexto para detectar qué está influyendo en tu bienestar.",
    "benefits.card2Title": "Recibes apoyo accionable",
    "benefits.card2Text": "Cada recomendación se convierte en una práctica concreta, breve y posible de realizar.",
    "benefits.card3Title": "Construyes hábitos sostenibles",
    "benefits.card3Text": "El sistema prioriza rutinas, recordatorios y recursos que encajan con tus metas personales.",
    "how.eyebrow": "Cómo funciona",
    "how.title": "Tres pasos para personalizar tu calma",
    "how.step1Title": "Evalúas tu estado",
    "how.step1Text": "Registras estrés, sueño, ansiedad y necesidad actual.",
    "how.step2Title": "ZENIN interpreta contexto",
    "how.step2Text": "La memoria combina historial, objetivos, hábitos y patrones recientes.",
    "how.step3Title": "Recibes un plan claro",
    "how.step3Text": "Obtienes ejercicios, recursos y una explicación sencilla de por qué se recomiendan."
  },
  en: {
    "hero.eyebrow": "Daily emotional wellbeing",
    "hero.title": "Your daily wellbeing platform",
    "hero.lede":
      "Practical tools to log your state, build habits, organize goals, and turn emotional care into daily actions.",
    "hero.start": "Start now",
    "hero.more": "Learn more",
    "hero.aiTag": "Useful data",
    "hero.focusTag": "Personal tracking",
    "hero.habitTag": "Healthy habits",
    "hero.discover": "Discover more",
    "phone.note": "Your next pause can start with 2 minutes of guided breathing.",
    "nav.benefits": "Benefits",
    "nav.how": "How it works",
    "trust.ai": "Structured data",
    "trust.aiText": "Every log is prepared for future recommendations.",
    "trust.privacy": "Local privacy",
    "trust.privacyText": "Profile memory is stored in your browser.",
    "trust.tracking": "Continuous tracking",
    "trust.trackingText": "Progressive reading of habits, sleep, and stress.",
    "trust.habits": "Healthy habits",
    "trust.habitsText": "Simple actions to sustain daily wellbeing.",
    "benefits.eyebrow": "Real benefits",
    "benefits.title": "Wellbeing that adapts to your day",
    "benefits.text": "ZENOVA does more than show tools: it learns from patterns and helps turn emotional care into small actions.",
    "benefits.card1Title": "Understand your patterns",
    "benefits.card1Text": "Connects stress, sleep, notes, and context to detect what is influencing wellbeing.",
    "benefits.card2Title": "Receive actionable support",
    "benefits.card2Text": "Each recommendation becomes a concrete, short, and realistic practice.",
    "benefits.card3Title": "Build sustainable habits",
    "benefits.card3Text": "The system prioritizes routines, reminders, and resources aligned with personal goals.",
    "how.eyebrow": "How it works",
    "how.title": "Three steps to personalize calm",
    "how.step1Title": "Assess your state",
    "how.step1Text": "Log stress, sleep, anxiety, and your current need.",
    "how.step2Title": "ZENIN reads context",
    "how.step2Text": "Memory combines history, goals, habits, and recent patterns.",
    "how.step3Title": "Receive a clear plan",
    "how.step3Text": "Get exercises, resources, and a simple explanation of why they are recommended."
  },
  pt: {
    "hero.eyebrow": "Bem-estar emocional diario",
    "hero.title": "Sua plataforma diaria de bem-estar",
    "hero.lede":
      "Ferramentas praticas para registrar seu estado, criar habitos, organizar metas e transformar cuidado emocional em acoes diarias.",
    "hero.start": "Começar agora",
    "hero.more": "Conhecer mais",
    "hero.aiTag": "Dados uteis",
    "hero.focusTag": "Acompanhamento pessoal",
    "hero.habitTag": "Hábitos saudáveis",
    "hero.discover": "Descubra mais",
    "phone.note": "Sua próxima pausa pode começar com 2 minutos de respiração guiada.",
    "nav.benefits": "Benefícios",
    "nav.how": "Como funciona",
    "trust.ai": "Dados estruturados",
    "trust.aiText": "Recomendações ajustadas ao contexto emocional.",
    "trust.privacy": "Privacidade local",
    "trust.privacyText": "A memória do perfil fica salva no navegador.",
    "trust.tracking": "Acompanhamento contínuo",
    "trust.trackingText": "Leitura progressiva de hábitos, sono e estresse.",
    "trust.habits": "Hábitos saudáveis",
    "trust.habitsText": "Ações simples para sustentar o bem-estar diário.",
    "benefits.eyebrow": "Benefícios reais",
    "benefits.title": "Bem-estar que se adapta ao seu dia",
    "benefits.text": "A ZENOVA não apenas mostra ferramentas: aprende com seus padrões e ajuda a transformar cuidado emocional em pequenas ações.",
    "benefits.card1Title": "Entenda seus padrões",
    "benefits.card1Text": "Relaciona estresse, sono, notas e contexto para detectar o que influencia seu bem-estar.",
    "benefits.card2Title": "Receba apoio acionável",
    "benefits.card2Text": "Cada recomendação vira uma prática concreta, breve e possível de realizar.",
    "benefits.card3Title": "Construa hábitos sustentáveis",
    "benefits.card3Text": "O sistema prioriza rotinas, lembretes e recursos alinhados com metas pessoais.",
    "how.eyebrow": "Como funciona",
    "how.title": "Três passos para personalizar sua calma",
    "how.step1Title": "Avalie seu estado",
    "how.step1Text": "Registre estresse, sono, ansiedade e necessidade atual.",
    "how.step2Title": "ZENIN interpreta contexto",
    "how.step2Text": "A memória combina histórico, objetivos, hábitos e padrões recentes.",
    "how.step3Title": "Receba um plano claro",
    "how.step3Text": "Obtenha exercícios, recursos e uma explicação simples do motivo da recomendação."
  }
};

Object.keys(landingRedesignText).forEach((lang) => Object.assign(text[lang], landingRedesignText[lang]));

function setupLandingNavbar() {
  const header = $(".site-header");
  if (!header) return;
  const syncHeader = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 12);
  };
  syncHeader();
  window.addEventListener("scroll", syncHeader, { passive: true });
}

setupLandingNavbar();

// Personalization layer: enriches existing profiles without changing authentication or stored legacy data.
const personalizationKnowledgeBase = [
  {
    id: "stress-reset",
    category: "manejo-estres",
    tags: ["stress", "regulation", "breathing", "calma"],
    contexts: ["academico", "laboral", "familiar", "social", "financiero"],
    needs: ["calma"],
    copy: {
      es: { title: "Regulación breve", action: "Haz 2 minutos de respiración 4-4-6 antes de continuar.", why: "tu nivel de activación necesita una pausa inmediata." },
      en: { title: "Brief regulation", action: "Do 2 minutes of 4-4-6 breathing before continuing.", why: "your activation level needs an immediate pause." },
      pt: { title: "Regulação breve", action: "Faça 2 minutos de respiração 4-4-6 antes de continuar.", why: "seu nível de ativação pede uma pausa imediata." }
    }
  },
  {
    id: "sleep-recovery",
    category: "descanso",
    tags: ["sleep", "rest", "habits", "descanso"],
    contexts: ["academico", "laboral"],
    needs: ["descanso", "calma"],
    copy: {
      es: { title: "Recuperar descanso", action: "Define una hora de cierre y agenda una alarma suave para preparar sueño.", why: "el descanso aparece bajo o irregular en tus datos recientes." },
      en: { title: "Recover rest", action: "Set a shutdown time and schedule a soft reminder to prepare for sleep.", why: "recent data shows low or irregular rest." },
      pt: { title: "Recuperar descanso", action: "Defina um horário de encerramento e um lembrete suave para preparar o sono.", why: "seus dados recentes mostram descanso baixo ou irregular." }
    }
  },
  {
    id: "anxiety-grounding",
    category: "ansiedad",
    tags: ["anxiety", "mindfulness", "regulation", "self-care"],
    contexts: ["academico", "laboral", "familiar", "social"],
    needs: ["calma"],
    copy: {
      es: { title: "Anclaje sensorial", action: "Nombra 5 cosas que ves, 4 que sientes y 3 sonidos antes de tomar una decisión.", why: "la ansiedad baja mejor cuando vuelves al presente con señales concretas." },
      en: { title: "Sensory grounding", action: "Name 5 things you see, 4 you feel, and 3 sounds before deciding.", why: "anxiety lowers better when you return to the present with concrete cues." },
      pt: { title: "Ancoragem sensorial", action: "Nomeie 5 coisas que vê, 4 que sente e 3 sons antes de decidir.", why: "a ansiedade reduz melhor quando você volta ao presente com sinais concretos." }
    }
  },
  {
    id: "habit-anchor",
    category: "habitos-saludables",
    tags: ["habits", "motivation", "self-care", "routine"],
    contexts: ["academico", "laboral", "familiar", "social", "financiero"],
    needs: ["orden", "descanso", "enfoque"],
    copy: {
      es: { title: "Ancla de hábito", action: "Une una acción de bienestar a algo que ya haces, como cerrar cuaderno, apagar pantalla o lavarte la cara.", why: "los hábitos se sostienen mejor cuando nacen de una rutina existente." },
      en: { title: "Habit anchor", action: "Attach one wellbeing action to something you already do, like closing a notebook or turning off a screen.", why: "habits last longer when they grow from an existing routine." },
      pt: { title: "Âncora de hábito", action: "Una uma ação de bem-estar a algo que você já faz, como fechar o caderno ou desligar a tela.", why: "hábitos se mantêm melhor quando nascem de uma rotina existente." }
    }
  },
  {
    id: "time-clarity",
    category: "organizacion-tiempo",
    tags: ["time", "productivity", "focus", "orden"],
    contexts: ["academico", "laboral"],
    needs: ["orden", "enfoque"],
    copy: {
      es: { title: "Orden de carga", action: "Elige una tarea pequeña de 15 minutos y deja lo demás en una nota.", why: "tu contexto apunta a sobrecarga y necesidad de claridad." },
      en: { title: "Load clarity", action: "Choose one small 15-minute task and leave the rest in a note.", why: "your context suggests overload and a need for clarity." },
      pt: { title: "Ordem da carga", action: "Escolha uma tarefa pequena de 15 minutos e deixe o resto em uma nota.", why: "seu contexto indica sobrecarga e necessidade de clareza." }
    }
  },
  {
    id: "mindful-focus",
    category: "concentracion",
    tags: ["mindfulness", "focus", "concentration", "enfoque"],
    contexts: ["academico", "laboral"],
    needs: ["enfoque"],
    copy: {
      es: { title: "Bloque de enfoque", action: "Trabaja 20 minutos con una sola pestaña abierta y registra cómo te sientes al terminar.", why: "tu objetivo necesita concentración protegida y medición simple." },
      en: { title: "Focus block", action: "Work for 20 minutes with one tab open and log how you feel afterward.", why: "your goal needs protected concentration and simple measurement." },
      pt: { title: "Bloco de foco", action: "Trabalhe 20 minutos com uma aba aberta e registre como se sente ao terminar.", why: "seu objetivo precisa de concentração protegida e medição simples." }
    }
  },
  {
    id: "emotional-naming",
    category: "inteligencia-emocional",
    tags: ["emotions", "self-awareness", "regulation"],
    contexts: ["familiar", "social", "academico", "laboral"],
    needs: ["calma", "orden"],
    copy: {
      es: { title: "Nombrar emoción", action: "Escribe una emoción, una causa posible y una necesidad concreta.", why: "nombrar lo que ocurre reduce ambigüedad emocional." },
      en: { title: "Name the emotion", action: "Write one emotion, one possible cause, and one concrete need.", why: "naming what is happening reduces emotional ambiguity." },
      pt: { title: "Nomear emoção", action: "Escreva uma emoção, uma possível causa e uma necessidade concreta.", why: "nomear o que acontece reduz ambiguidade emocional." }
    }
  },
  {
    id: "resilience-loop",
    category: "resiliencia",
    tags: ["resilience", "motivation", "habits"],
    contexts: ["academico", "laboral", "financiero"],
    needs: ["orden", "enfoque"],
    copy: {
      es: { title: "Cierre de avance", action: "Anota una acción que sí completaste y una mejora mínima para mañana.", why: "tu progreso mejora cuando conviertes presión en evidencia de avance." },
      en: { title: "Progress closure", action: "Write one action you completed and one tiny improvement for tomorrow.", why: "progress improves when pressure becomes evidence of movement." },
      pt: { title: "Fechamento de avanço", action: "Anote uma ação concluída e uma melhoria mínima para amanhã.", why: "o progresso melhora quando a pressão vira evidência de avanço." }
    }
  },
  {
    id: "social-boundary",
    category: "relaciones-sociales",
    tags: ["social", "boundaries", "self-care"],
    contexts: ["social", "familiar"],
    needs: ["calma", "orden"],
    copy: {
      es: { title: "Límite amable", action: "Prepara una frase corta para pedir espacio o tiempo antes de responder.", why: "tu contexto social o familiar puede requerir regulación antes de conversar." },
      en: { title: "Kind boundary", action: "Prepare a short phrase to ask for space or time before replying.", why: "your social or family context may need regulation before talking." },
      pt: { title: "Limite gentil", action: "Prepare uma frase curta para pedir espaço ou tempo antes de responder.", why: "seu contexto social ou familiar pode exigir regulação antes da conversa." }
    }
  },
  {
    id: "life-balance",
    category: "equilibrio-vida-estudio",
    tags: ["balance", "self-care", "habits"],
    contexts: ["academico", "laboral"],
    needs: ["descanso", "orden"],
    copy: {
      es: { title: "Balance mínimo", action: "Agenda una pausa real de 10 minutos entre estudio/trabajo y descanso.", why: "tu bienestar necesita separar exigencia y recuperación." },
      en: { title: "Minimum balance", action: "Schedule a real 10-minute pause between study/work and rest.", why: "wellbeing needs separation between demand and recovery." },
      pt: { title: "Equilíbrio mínimo", action: "Agende uma pausa real de 10 minutos entre estudo/trabalho e descanso.", why: "o bem-estar precisa separar exigência e recuperação." }
    }
  }
];

function defaultPersonalizationMemory() {
  return {
    version: 2,
    updatedAt: null,
    profile: {
      habits: [],
      routines: [],
      sleepQuality: "unknown",
      workload: "unknown",
      socialLoad: "unknown",
      activityLevel: "unknown",
      interests: [],
      motivations: [],
      goals: [],
      stressors: [],
      dominantEmotion: "unknown",
      behaviorPatterns: [],
      learningPreference: "practical",
      frequency: "new",
      historicalTrend: "stable"
    },
    history: [],
    recommendations: []
  };
}

function getPersonalizationMemory() {
  const base = defaultPersonalizationMemory();
  try {
    const saved = JSON.parse(localStorage.getItem("zenovaPersonalizationMemory") || "null");
    if (!saved || typeof saved !== "object") return base;
    return {
      ...base,
      ...saved,
      profile: { ...base.profile, ...(saved.profile || {}) },
      history: Array.isArray(saved.history) ? saved.history : [],
      recommendations: Array.isArray(saved.recommendations) ? saved.recommendations : []
    };
  } catch (error) {
    return base;
  }
}

function savePersonalizationMemory(memory) {
  const next = { ...memory, updatedAt: new Date().toISOString() };
  localStorage.setItem("zenovaPersonalizationMemory", JSON.stringify(next));
  dbPut("settings", { id: "personalizationMemory", value: next });
}

function averageNumber(items, selector) {
  const values = items.map(selector).filter((value) => Number.isFinite(value));
  if (!values.length) return null;
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function uniqueCompact(items) {
  return [...new Set(items.filter(Boolean).map((item) => String(item).trim()).filter(Boolean))];
}

function buildPersonalizationContext(data = {}) {
  const memory = getPersonalizationMemory();
  const userProfile = getUserProfile();
  const entries = state.entries.slice(-14);
  const recent = entries.slice(-7);
  const previous = entries.slice(-14, -7);
  const avgStress = averageNumber(recent, (entry) => Number(entry.stress));
  const avgSleep = averageNumber(recent, (entry) => Number(entry.sleep));
  const previousStress = averageNumber(previous, (entry) => Number(entry.stress));
  const notes = normalize(entries.map((entry) => entry.note || "").join(" "));
  const context = data.stressType || userProfile.context || state.lastAssessment?.stressType || "academico";
  const goal = userProfile.goal || "";
  const stressors = uniqueCompact([
    context,
    /(examen|tarea|clase|estudio|universidad|proyecto)/.test(notes) ? "academico" : "",
    /(trabajo|reunion|cliente|jefe|turno)/.test(notes) ? "laboral" : "",
    /(familia|casa|discusion|pareja)/.test(notes) ? "familiar" : "",
    /(amigos|social|grupo|comparacion)/.test(notes) ? "social" : "",
    /(dinero|pago|deuda|finanza)/.test(notes) ? "financiero" : ""
  ]);
  const sleepValue = Number.isFinite(data.sleepHours) ? data.sleepHours : avgSleep;
  const stressValue = Number.isFinite(data.stressLevel) ? data.stressLevel : avgStress;
  const anxietyValue = Number.isFinite(data.anxietyLevel) ? data.anxietyLevel : null;
  const historicalTrend =
    avgStress !== null && previousStress !== null && avgStress - previousStress > 1
      ? "rising"
      : avgStress !== null && previousStress !== null && previousStress - avgStress > 1
        ? "improving"
        : "stable";
  return {
    memory,
    userProfile,
    context,
    needNow: data.needNow || state.lastAssessment?.needNow || "",
    goal,
    stressors,
    sleepQuality: sleepValue !== null && sleepValue < 6 ? "low" : sleepValue !== null && sleepValue < 7 ? "variable" : "stable",
    workload: ["academico", "laboral", "financiero"].includes(context) || stressValue >= 7 ? "high" : "moderate",
    socialLoad: stressors.some((item) => ["social", "familiar"].includes(item)) ? "sensitive" : "neutral",
    activityLevel: zenovaLocal.activities.length + zenovaLocal.alarms.length >= 3 ? "structured" : "light",
    interests: uniqueCompact([data.needNow, userProfile.context, goal && normalize(goal).includes("dorm") ? "descanso" : ""]),
    motivations: uniqueCompact([goal, data.needNow === "enfoque" ? "concentracion" : "", data.needNow === "orden" ? "claridad" : ""]),
    goals: uniqueCompact([goal]),
    dominantEmotion: anxietyValue >= 7 ? "anxiety" : stressValue >= 7 ? "tension" : "balance",
    behaviorPatterns: uniqueCompact([
      historicalTrend === "rising" ? "estres-en-aumento" : "",
      avgSleep !== null && avgSleep < 6 ? "descanso-bajo" : "",
      entries.length >= 5 ? "registro-frecuente" : "registro-inicial"
    ]),
    learningPreference: data.needNow === "orden" ? "structured" : data.needNow === "calma" ? "guided" : "practical",
    frequency: entries.length + zenovaLocal.tests.length + zenovaLocal.activities.length >= 8 ? "consistent" : entries.length ? "occasional" : "new",
    historicalTrend,
    avgStress,
    avgSleep
  };
}

function scoreKnowledgeItem(item, context) {
  let score = 0;
  if (item.contexts.includes(context.context)) score += 3;
  if (item.needs.includes(context.needNow || "")) score += 2;
  if (context.sleepQuality === "low" && item.tags.some((tag) => ["sleep", "rest", "descanso"].includes(tag))) score += 5;
  if (context.workload === "high" && item.tags.some((tag) => ["time", "productivity", "focus", "stress"].includes(tag))) score += 3;
  if (context.socialLoad === "sensitive" && item.tags.some((tag) => ["social", "boundaries", "self-care", "emotions"].includes(tag))) score += 4;
  if (context.dominantEmotion === "anxiety" && item.tags.some((tag) => ["mindfulness", "breathing", "regulation"].includes(tag))) score += 4;
  if (context.goal && item.tags.some((tag) => normalize(context.goal).includes(tag))) score += 2;
  if (context.historicalTrend === "rising" && item.tags.some((tag) => ["regulation", "stress", "resilience"].includes(tag))) score += 3;
  if (context.frequency === "new" && item.tags.some((tag) => ["habits", "breathing"].includes(tag))) score += 2;
  return score;
}

function explainRecommendation(item, context) {
  const lang = state.language;
  if (context.sleepQuality === "low" && item.tags.some((tag) => ["sleep", "rest", "descanso"].includes(tag))) {
    return { es: "porque tu descanso reciente aparece bajo.", en: "because recent rest appears low.", pt: "porque seu descanso recente aparece baixo." }[lang];
  }
  if (context.historicalTrend === "rising") {
    return { es: "porque tu historial muestra una subida reciente de estrés.", en: "because your history shows a recent stress increase.", pt: "porque seu histórico mostra aumento recente de estresse." }[lang];
  }
  if (context.goal) {
    return { es: `porque lo conectamos con tu objetivo: ${context.goal}.`, en: `because it connects with your goal: ${context.goal}.`, pt: `porque se conecta ao seu objetivo: ${context.goal}.` }[lang];
  }
  if (context.socialLoad === "sensitive") {
    return { es: "porque tu contexto social o familiar requiere cuidado conversacional.", en: "because your social or family context needs careful communication.", pt: "porque seu contexto social ou familiar pede cuidado na comunicação." }[lang];
  }
  return item.copy[lang]?.why || item.copy.es.why;
}

function buildPersonalizedRecommendations(data = {}, profile = calculateProfile(data)) {
  const context = buildPersonalizationContext(data);
  const ranked = personalizationKnowledgeBase
    .map((item) => ({ item, score: scoreKnowledgeItem(item, context) }))
    .sort((a, b) => b.score - a.score);
  const selected = ranked.slice(0, 4).map(({ item }) => {
    const copy = item.copy[state.language] || item.copy.es;
    return {
      id: item.id,
      title: copy.title,
      action: copy.action,
      reason: explainRecommendation(item, context),
      category: item.category,
      tags: item.tags,
      score: profile.score
    };
  });
  return { context, items: selected };
}

function updatePersonalizationMemory(context, data, recommendations) {
  const memory = context.memory || getPersonalizationMemory();
  const snapshot = {
    at: new Date().toISOString(),
    source: "assessment",
    context: context.context,
    stress: data.stressLevel,
    sleep: data.sleepHours,
    anxiety: data.anxietyLevel,
    need: data.needNow,
    trend: context.historicalTrend
  };
  const next = {
    ...memory,
    profile: {
      ...memory.profile,
      habits: uniqueCompact([...memory.profile.habits, ...context.behaviorPatterns]),
      routines: uniqueCompact([...memory.profile.routines, context.activityLevel]),
      sleepQuality: context.sleepQuality,
      workload: context.workload,
      socialLoad: context.socialLoad,
      activityLevel: context.activityLevel,
      interests: uniqueCompact([...memory.profile.interests, ...context.interests]),
      motivations: uniqueCompact([...memory.profile.motivations, ...context.motivations]),
      goals: uniqueCompact([...memory.profile.goals, ...context.goals]),
      stressors: uniqueCompact([...memory.profile.stressors, ...context.stressors]),
      dominantEmotion: context.dominantEmotion,
      behaviorPatterns: uniqueCompact([...memory.profile.behaviorPatterns, ...context.behaviorPatterns]),
      learningPreference: context.learningPreference,
      frequency: context.frequency,
      historicalTrend: context.historicalTrend
    },
    history: [...memory.history, snapshot].slice(-30),
    recommendations: recommendations.map((item) => ({
      id: item.id,
      category: item.category,
      reason: item.reason,
      at: snapshot.at
    })).slice(0, 12)
  };
  savePersonalizationMemory(next);
}

const baseRenderPlanPersonalization = renderPlan;
renderPlan = function renderPlanPersonalized(items) {
  if (!items.length || typeof items[0] === "string") {
    baseRenderPlanPersonalization(items);
    return;
  }
  const whyLabel = { es: "Por qué", en: "Why", pt: "Por quê" }[state.language] || "Por qué";
  $("#planList").innerHTML = items
    .map(
      (item) => `
        <li class="personalized-plan-item">
          <strong>${escapeHtml(item.title)}</strong>
          <span>${escapeHtml(item.action)}</span>
          <small>${escapeHtml(`${whyLabel}: ${item.reason}`)}</small>
        </li>
      `
    )
    .join("");
};

const baseCalculateProfilePersonalization = calculateProfile;
calculateProfile = function calculateProfilePersonalized(data) {
  const base = baseCalculateProfilePersonalization(data);
  const context = buildPersonalizationContext(data);
  let modifier = 0;
  if (context.sleepQuality === "low") modifier += 8;
  if (context.workload === "high") modifier += 5;
  if (context.historicalTrend === "rising") modifier += 6;
  if (context.dominantEmotion === "anxiety") modifier += 4;
  if (context.frequency === "consistent" && context.historicalTrend !== "rising") modifier -= 4;
  const score = Math.min(100, Math.max(10, Math.round(base.score + modifier)));
  const level = score >= 72 ? "high" : score >= 45 ? "moderate" : "low";
  const labels = {
    es: {
      high: "Alta carga emocional",
      moderate: "Carga moderada",
      low: "Balance estable"
    },
    en: {
      high: "High emotional load",
      moderate: "Moderate load",
      low: "Stable balance"
    },
    pt: {
      high: "Alta carga emocional",
      moderate: "Carga moderada",
      low: "Equilíbrio estável"
    }
  };
  const focus = context.sleepQuality === "low" ? "descanso" : context.workload === "high" ? context.context : context.dominantEmotion;
  const summaries = {
    es: `Tu perfil considera estrés actual, sueño, ansiedad, historial reciente y objetivo personal. La prioridad ahora es ${focus}, con acciones breves y medibles.`,
    en: `Your profile considers current stress, sleep, anxiety, recent history, and personal goal. The current priority is ${focus}, with short and measurable actions.`,
    pt: `Seu perfil considera estresse atual, sono, ansiedade, histórico recente e objetivo pessoal. A prioridade agora é ${focus}, com ações curtas e mensuráveis.`
  };
  return {
    ...base,
    score,
    profile: labels[state.language]?.[level] || labels.es[level],
    summary: summaries[state.language] || summaries.es,
    dimensions: context
  };
};

const baseRenderAssessmentPersonalization = renderAssessment;
renderAssessment = function renderAssessmentPersonalized(data) {
  baseRenderAssessmentPersonalization(data);
  const profile = calculateProfile(data);
  const recommendationSet = buildPersonalizedRecommendations(data, profile);
  $("#profileLabel").textContent = profile.profile;
  $("#scoreValue").textContent = profile.score;
  $("#resultSummary").textContent = profile.summary;
  renderPlan(recommendationSet.items);
  updatePersonalizationMemory(recommendationSet.context, data, recommendationSet.items);
  renderHistoryRecommendations();
};

const baseSaveUserProfilePersonalization = saveUserProfile;
saveUserProfile = function saveUserProfileExpanded(profile) {
  const expanded = {
    habits: [],
    routines: [],
    interests: [],
    motivations: [],
    stressors: [],
    learningPreference: "practical",
    ...profile,
    personalizationVersion: 2
  };
  baseSaveUserProfilePersonalization(expanded);
  const context = buildPersonalizationContext(state.lastAssessment || {});
  const memory = context.memory;
  savePersonalizationMemory({
    ...memory,
    profile: {
      ...memory.profile,
      goals: uniqueCompact([...memory.profile.goals, expanded.goal]),
      stressors: uniqueCompact([...memory.profile.stressors, expanded.context]),
      learningPreference: expanded.learningPreference || memory.profile.learningPreference
    }
  });
};

const baseBuildHistoryRecommendationsPersonalization = buildHistoryRecommendations;
buildHistoryRecommendations = function buildHistoryRecommendationsPersonalized() {
  if (!state.lastAssessment && !state.entries.length) return baseBuildHistoryRecommendationsPersonalization();
  const data =
    state.lastAssessment || {
      stressType: getUserProfile().context || "academico",
      stressLevel: Math.round(averageNumber(state.entries.slice(-7), (entry) => Number(entry.stress)) || 5),
      sleepHours: Math.round(averageNumber(state.entries.slice(-7), (entry) => Number(entry.sleep)) || 6),
      anxietyLevel: 4,
      needNow: "orden"
    };
  return buildPersonalizedRecommendations(data)
    .items.map((item) => `${item.title}: ${item.action} ${item.reason}`)
    .slice(0, 5);
};

const designSystemText = {
  es: {
    "nav.daily": "Centro",
    "daily.eyebrow": "Centro diario",
    "daily.title": "Tu tablero de bienestar para hoy",
    "daily.text":
      "Reune busqueda, accesos rapidos, metas, tareas, favoritos, notificaciones y actividad reciente en un solo espacio.",
    "daily.searchKicker": "Busqueda global",
    "daily.searchTitle": "Encuentra recursos y herramientas",
    "daily.live": "Activo",
    "daily.searchLabel": "Buscar en ZENOVA",
    "daily.searchPlaceholder": "Ej.: ansiedad, respirar, calendario...",
    "daily.quickTest": "Test inicial",
    "daily.quickBreath": "Respirar",
    "daily.quickCalendar": "Calendario",
    "daily.quickZenin": "ZENIN",
    "daily.goalKicker": "Objetivo personal",
    "daily.goalTitle": "Meta de bienestar",
    "daily.goalInputLabel": "Meta personal",
    "daily.goalPlaceholder": "Ej.: llegar a la noche con menos tension",
    "daily.saveGoal": "Guardar",
    "daily.tasksKicker": "Tareas de bienestar",
    "daily.tasksTitle": "Acciones pequenas para hoy",
    "daily.taskPlaceholder": "Ej.: caminar 5 minutos",
    "daily.taskCalm": "Calma",
    "daily.taskMove": "Movimiento",
    "daily.taskRest": "Descanso",
    "daily.taskOrder": "Orden mental",
    "daily.centerKicker": "Centro de actividad",
    "daily.notificationsTitle": "Notificaciones y registros",
    "daily.clear": "Limpiar",
    "daily.favoritesTitle": "Favoritos",
    "daily.recentTitle": "Actividad reciente",
    "daily.emptySearch": "Busca recursos, ejercicios, calendario, seguimiento o ZENIN.",
    "daily.noResults": "No encontre resultados. Prueba con ansiedad, sueno, respirar o notas.",
    "daily.noGoal": "Define una meta breve para que ZENOVA ajuste mejor tus sugerencias.",
    "daily.goalSaved": "Meta guardada. Las recomendaciones se ajustaron a tu objetivo.",
    "daily.noTasks": "Agrega una tarea pequena para iniciar tu cuidado diario.",
    "daily.taskAdded": "Tarea agregada al centro diario.",
    "daily.taskDone": "Tarea completada. Buen avance.",
    "daily.notificationsEmpty": "Sin notificaciones pendientes por ahora.",
    "daily.recentEmpty": "Aun no hay actividad reciente. Guarda un registro o agenda una pausa.",
    "daily.favoriteHint": "Marca tus recursos frecuentes para tenerlos a mano.",
    "daily.progress": "Progreso de hoy",
    "daily.continuity": "Continuidad semanal",
    "daily.open": "Abrir",
    "daily.favorite": "Favorito",
    "daily.markFavorite": "Marcar favorito",
    "daily.remove": "Quitar"
  },
  en: {
    "nav.daily": "Center",
    "daily.eyebrow": "Daily center",
    "daily.title": "Your wellbeing board for today",
    "daily.text": "Search, quick actions, goals, tasks, favorites, notifications, and recent activity in one place.",
    "daily.searchKicker": "Global search",
    "daily.searchTitle": "Find resources and tools",
    "daily.live": "Live",
    "daily.searchLabel": "Search ZENOVA",
    "daily.searchPlaceholder": "E.g.: anxiety, breathing, calendar...",
    "daily.quickTest": "Initial test",
    "daily.quickBreath": "Breathe",
    "daily.quickCalendar": "Calendar",
    "daily.quickZenin": "ZENIN",
    "daily.goalKicker": "Personal goal",
    "daily.goalTitle": "Wellbeing goal",
    "daily.goalInputLabel": "Personal goal",
    "daily.goalPlaceholder": "E.g.: reach the night with less tension",
    "daily.saveGoal": "Save",
    "daily.tasksKicker": "Wellbeing tasks",
    "daily.tasksTitle": "Small actions for today",
    "daily.taskPlaceholder": "E.g.: walk for 5 minutes",
    "daily.taskCalm": "Calm",
    "daily.taskMove": "Movement",
    "daily.taskRest": "Rest",
    "daily.taskOrder": "Mental order",
    "daily.centerKicker": "Activity center",
    "daily.notificationsTitle": "Notifications and records",
    "daily.clear": "Clear",
    "daily.favoritesTitle": "Favorites",
    "daily.recentTitle": "Recent activity",
    "daily.emptySearch": "Search resources, exercises, calendar, tracking, or ZENIN.",
    "daily.noResults": "No results found. Try anxiety, sleep, breathing, or notes.",
    "daily.noGoal": "Set a short goal so ZENOVA can adjust your suggestions.",
    "daily.goalSaved": "Goal saved. Recommendations now reflect your objective.",
    "daily.noTasks": "Add one small task to begin daily care.",
    "daily.taskAdded": "Task added to the daily center.",
    "daily.taskDone": "Task completed. Nice progress.",
    "daily.notificationsEmpty": "No pending notifications for now.",
    "daily.recentEmpty": "No recent activity yet. Save a log or schedule a pause.",
    "daily.favoriteHint": "Mark frequent resources to keep them close.",
    "daily.progress": "Today's progress",
    "daily.continuity": "Weekly continuity",
    "daily.open": "Open",
    "daily.favorite": "Favorite",
    "daily.markFavorite": "Mark favorite",
    "daily.remove": "Remove"
  },
  pt: {
    "nav.daily": "Centro",
    "daily.eyebrow": "Centro diario",
    "daily.title": "Seu painel de bem-estar para hoje",
    "daily.text": "Busca, acessos rapidos, metas, tarefas, favoritos, notificacoes e atividade recente em um so lugar.",
    "daily.searchKicker": "Busca global",
    "daily.searchTitle": "Encontre recursos e ferramentas",
    "daily.live": "Ativo",
    "daily.searchLabel": "Buscar na ZENOVA",
    "daily.searchPlaceholder": "Ex.: ansiedade, respirar, calendario...",
    "daily.quickTest": "Teste inicial",
    "daily.quickBreath": "Respirar",
    "daily.quickCalendar": "Calendario",
    "daily.quickZenin": "ZENIN",
    "daily.goalKicker": "Objetivo pessoal",
    "daily.goalTitle": "Meta de bem-estar",
    "daily.goalInputLabel": "Meta pessoal",
    "daily.goalPlaceholder": "Ex.: chegar a noite com menos tensao",
    "daily.saveGoal": "Salvar",
    "daily.tasksKicker": "Tarefas de bem-estar",
    "daily.tasksTitle": "Pequenas acoes para hoje",
    "daily.taskPlaceholder": "Ex.: caminhar 5 minutos",
    "daily.taskCalm": "Calma",
    "daily.taskMove": "Movimento",
    "daily.taskRest": "Descanso",
    "daily.taskOrder": "Ordem mental",
    "daily.centerKicker": "Centro de atividade",
    "daily.notificationsTitle": "Notificacoes e registros",
    "daily.clear": "Limpar",
    "daily.favoritesTitle": "Favoritos",
    "daily.recentTitle": "Atividade recente",
    "daily.emptySearch": "Busque recursos, exercicios, calendario, acompanhamento ou ZENIN.",
    "daily.noResults": "Nao encontrei resultados. Tente ansiedade, sono, respirar ou notas.",
    "daily.noGoal": "Defina uma meta breve para que a ZENOVA ajuste melhor as sugestoes.",
    "daily.goalSaved": "Meta salva. As recomendacoes foram ajustadas ao seu objetivo.",
    "daily.noTasks": "Adicione uma pequena tarefa para iniciar seu cuidado diario.",
    "daily.taskAdded": "Tarefa adicionada ao centro diario.",
    "daily.taskDone": "Tarefa concluida. Bom progresso.",
    "daily.notificationsEmpty": "Sem notificacoes pendentes por enquanto.",
    "daily.recentEmpty": "Ainda nao ha atividade recente. Salve um registro ou agende uma pausa.",
    "daily.favoriteHint": "Marque recursos frequentes para mante-los por perto.",
    "daily.progress": "Progresso de hoje",
    "daily.continuity": "Continuidade semanal",
    "daily.open": "Abrir",
    "daily.favorite": "Favorito",
    "daily.markFavorite": "Marcar favorito",
    "daily.remove": "Remover"
  }
};

Object.keys(designSystemText).forEach((lang) => Object.assign(text[lang], designSystemText[lang]));

const ZenovaDesignSystem = {
  storage: {
    tasks: "zenovaWellbeingTasks",
    goal: "zenovaDailyGoal",
    favorites: "zenovaDailyFavorites",
    notifications: "zenovaDailyNotifications",
    dismissed: "zenovaDismissedNotifications"
  },
  components: {
    emptyState(message) {
      return `<div class="empty-state"><p>${escapeHtml(message)}</p></div>`;
    },
    notice(item) {
      return `
        <article class="notification-item ${escapeHtml(item.type || "info")}">
          <div>
            <strong>${escapeHtml(item.title)}</strong>
            <p>${escapeHtml(item.body)}</p>
          </div>
        </article>
      `;
    }
  }
};

window.ZenovaDesignSystem = ZenovaDesignSystem;

const favoriteCatalog = [
  { key: "breathing", title: "Respiracion guiada", target: "#herramientas", icon: "B" },
  { key: "library", title: "Biblioteca emocional", target: "#biblioteca", icon: "R" },
  { key: "calendar", title: "Calendario", target: "#agenda", icon: "C" },
  { key: "tracking", title: "Registro diario", target: "#seguimiento", icon: "S" },
  { key: "zenin", title: "ZENIN", target: "#chat", icon: "Z" },
  { key: "progress", title: "Progreso semanal", target: "#progreso", icon: "P" }
];

const dailyCenterState = {
  tasks: JSON.parse(localStorage.getItem(ZenovaDesignSystem.storage.tasks) || "[]"),
  goal: JSON.parse(localStorage.getItem(ZenovaDesignSystem.storage.goal) || "null"),
  favorites: JSON.parse(localStorage.getItem(ZenovaDesignSystem.storage.favorites) || "[]"),
  notifications: JSON.parse(localStorage.getItem(ZenovaDesignSystem.storage.notifications) || "[]"),
  dismissed: JSON.parse(localStorage.getItem(ZenovaDesignSystem.storage.dismissed) || "[]")
};

function saveDailyState(key) {
  localStorage.setItem(ZenovaDesignSystem.storage[key], JSON.stringify(dailyCenterState[key]));
}

function todayIso() {
  return new Date().toISOString().slice(0, 10);
}

function formatRelativeDate(value) {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString(state.language, { day: "2-digit", month: "short" });
}

function goToSection(target) {
  const node = $(target);
  if (!node) return;
  node.scrollIntoView({ behavior: "smooth", block: "start" });
}

function addDailyNotification(title, body, type = "info") {
  const notification = {
    id: `daily-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    title,
    body,
    type,
    createdAt: new Date().toISOString()
  };
  dailyCenterState.notifications = [notification, ...dailyCenterState.notifications].slice(0, 18);
  saveDailyState("notifications");
  renderDailyNotifications();
}

const baseShowZenovaToastDesignSystem = showZenovaToast;
showZenovaToast = function showZenovaToastWithCenter(message, type = "info") {
  baseShowZenovaToastDesignSystem(message);
  if ($("#dailyNotificationList")) {
    addDailyNotification("ZENOVA", message, type);
  }
};

function buildGlobalSearchIndex() {
  const items = [
    {
      title: "Test inicial",
      body: "Genera un perfil de estres y recomendaciones personalizadas.",
      target: "#evaluacion",
      tags: "evaluacion test perfil estres ansiedad"
    },
    {
      title: "Respiracion guiada",
      body: "Ejercicio de dos minutos para bajar activacion fisica.",
      target: "#herramientas",
      tags: "respirar calma ansiedad respiracion herramienta"
    },
    {
      title: "Calendario y recordatorios",
      body: "Agenda pausas, movimiento, notas y test ZENOVA.",
      target: "#agenda",
      tags: "calendario actividad alarma recordatorio"
    },
    {
      title: "Registro emocional",
      body: "Guarda estres, sueno, ansiedad y notas diarias.",
      target: "#seguimiento",
      tags: "seguimiento registro diario sueno estres nota"
    },
    {
      title: "ZENIN",
      body: "Pregunta sobre estres, emociones, habitos y herramientas de ZENOVA.",
      target: "#chat",
      tags: "chat ia zenin preguntas emociones"
    },
    {
      title: "Progreso semanal",
      body: "Consulta graficas, recomendaciones por historial e insignias.",
      target: "#progreso",
      tags: "progreso grafica historial recomendaciones"
    }
  ];

  Object.entries(resources[state.language] || resources.es).forEach(([key, resource]) => {
    items.push({
      title: resource.title,
      body: resource.summary,
      target: "#herramientas",
      resource: key,
      tags: `${key} ${resource.title} ${resource.summary} ${resource.items.join(" ")}`
    });
  });

  (featureLibrary[state.language] || featureLibrary.es).forEach((item) => {
    items.push({
      title: item.title,
      body: item.summary,
      target: "#biblioteca",
      favoriteKey: `library-${item.key}`,
      tags: `${item.key} ${item.title} ${item.summary} ${item.tips.join(" ")}`
    });
  });

  buildHistoryRecommendations().forEach((recommendation, index) => {
    items.push({
      title: `Recomendacion ${index + 1}`,
      body: recommendation,
      target: "#progreso",
      tags: recommendation
    });
  });

  return items;
}

function renderGlobalSearch(query = "") {
  const container = $("#globalSearchResults");
  if (!container) return;
  const cleanQuery = normalize(query.trim());
  if (!cleanQuery) {
    container.innerHTML = ZenovaDesignSystem.components.emptyState(t("daily.emptySearch"));
    return;
  }

  const terms = cleanQuery.split(/\s+/).filter(Boolean);
  const results = buildGlobalSearchIndex()
    .map((item) => {
      const source = normalize(`${item.title} ${item.body} ${item.tags}`);
      const score = terms.reduce((sum, term) => sum + (source.includes(term) ? 1 : 0), 0);
      return { ...item, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);

  if (!results.length) {
    container.innerHTML = ZenovaDesignSystem.components.emptyState(t("daily.noResults"));
    return;
  }

  container.innerHTML = results
    .map(
      (item, index) => `
        <button class="search-result-item" type="button" data-search-result="${index}">
          <div>
            <strong>${escapeHtml(item.title)}</strong>
            <p>${escapeHtml(item.body)}</p>
          </div>
          <span class="ds-status-pill">${t("daily.open")}</span>
        </button>
      `
    )
    .join("");

  $$("#globalSearchResults [data-search-result]").forEach((button) => {
    button.addEventListener("click", () => {
      const result = results[Number(button.dataset.searchResult)];
      if (result.resource) updateResource(result.resource);
      goToSection(result.target);
    });
  });
}

function dailyTaskTypeLabel(type) {
  const key = {
    calma: "daily.taskCalm",
    movimiento: "daily.taskMove",
    descanso: "daily.taskRest",
    orden: "daily.taskOrder"
  }[type];
  return key ? t(key) : type;
}

function completedTaskDates() {
  return dailyCenterState.tasks
    .filter((task) => task.completedAt)
    .map((task) => task.completedAt.slice(0, 10))
    .filter((value, index, list) => list.indexOf(value) === index);
}

function continuityDays() {
  const dates = new Set(completedTaskDates());
  let total = 0;
  const cursor = new Date();
  while (dates.has(cursor.toISOString().slice(0, 10))) {
    total += 1;
    cursor.setDate(cursor.getDate() - 1);
  }
  return total;
}

function renderDailyGoal() {
  const input = $("#dailyGoalInput");
  const summary = $("#dailyGoalSummary");
  const meter = $("#dailyStreakMeter");
  const ring = $("#dailyProgressRing");
  if (!input || !summary || !meter || !ring) return;

  const profile = getUserProfile();
  const goal = dailyCenterState.goal?.title || profile.goal || "";
  input.value = goal;
  summary.innerHTML = goal
    ? `<strong>${escapeHtml(goal)}</strong><p>${escapeHtml(buildHistoryRecommendations()[0] || t("daily.progress"))}</p>`
    : ZenovaDesignSystem.components.emptyState(t("daily.noGoal"));

  const todaysTasks = dailyCenterState.tasks.filter((task) => task.date === todayIso());
  const completed = todaysTasks.filter((task) => task.completedAt).length;
  const progress = todaysTasks.length ? Math.round((completed / todaysTasks.length) * 100) : 0;
  ring.textContent = `${progress}%`;
  ring.style.setProperty("--progress", `${progress * 3.6}deg`);

  const continuity = continuityDays();
  const continuityProgress = Math.min(100, Math.round((continuity / 7) * 100));
  meter.innerHTML = `
    <div class="streak-track" aria-hidden="true"><span style="--streak-width: ${continuityProgress}%"></span></div>
    <small>${escapeHtml(t("daily.continuity"))}: ${continuity}/7</small>
  `;
}

function renderWellbeingTasks() {
  const list = $("#wellbeingTaskList");
  const count = $("#dailyTaskCount");
  if (!list || !count) return;
  const todayTasks = dailyCenterState.tasks
    .filter((task) => task.date === todayIso() || !task.completedAt)
    .slice(-8)
    .reverse();
  const completedToday = todayTasks.filter((task) => task.completedAt).length;
  count.textContent = `${completedToday}/${todayTasks.length || 0}`;

  if (!todayTasks.length) {
    list.innerHTML = ZenovaDesignSystem.components.emptyState(t("daily.noTasks"));
    renderDailyGoal();
    return;
  }

  list.innerHTML = todayTasks
    .map(
      (task) => `
        <article class="wellbeing-task ${task.completedAt ? "completed" : ""}">
          <label>
            <input type="checkbox" data-task-toggle="${task.id}" ${task.completedAt ? "checked" : ""} />
            <span>
              <strong>${escapeHtml(task.title)}</strong>
              <span class="task-type-pill">${escapeHtml(dailyTaskTypeLabel(task.type))}</span>
            </span>
          </label>
          <button class="task-remove-button" type="button" data-task-remove="${task.id}" aria-label="${t("daily.remove")}">×</button>
        </article>
      `
    )
    .join("");

  $$("[data-task-toggle]").forEach((input) => {
    input.addEventListener("change", () => {
      const task = dailyCenterState.tasks.find((item) => item.id === input.dataset.taskToggle);
      if (!task) return;
      task.completedAt = input.checked ? new Date().toISOString() : "";
      saveDailyState("tasks");
      renderDailyCenter();
      if (input.checked) showZenovaToast(t("daily.taskDone"), "success");
    });
  });

  $$("[data-task-remove]").forEach((button) => {
    button.addEventListener("click", () => {
      dailyCenterState.tasks = dailyCenterState.tasks.filter((task) => task.id !== button.dataset.taskRemove);
      saveDailyState("tasks");
      renderDailyCenter();
    });
  });

  renderDailyGoal();
}

function buildDerivedNotifications() {
  const notifications = [];
  const latest = state.entries.slice(-7);
  const profile = getUserProfile();
  if (!profile.goal && !dailyCenterState.goal?.title) {
    notifications.push({
      id: "derived-goal",
      type: "info",
      title: t("daily.goalTitle"),
      body: t("daily.noGoal")
    });
  }
  if (!dailyCenterState.tasks.some((task) => task.date === todayIso())) {
    notifications.push({
      id: "derived-task",
      type: "warning",
      title: t("daily.tasksTitle"),
      body: t("daily.noTasks")
    });
  }
  if (latest.length) {
    const avgStress = latest.reduce((sum, entry) => sum + entry.stress, 0) / latest.length;
    const avgSleep = latest.reduce((sum, entry) => sum + entry.sleep, 0) / latest.length;
    if (avgStress >= 7) {
      notifications.push({
        id: "derived-stress",
        type: "danger",
        title: "Estres elevado",
        body: "Tus registros recientes sugieren priorizar respiracion y pausas breves."
      });
    }
    if (avgSleep < 6) {
      notifications.push({
        id: "derived-sleep",
        type: "warning",
        title: "Descanso bajo",
        body: "Considera una alarma nocturna y una pausa sin pantalla."
      });
    }
  }
  zenovaLocal.activities
    .filter((activity) => activity.date === todayIso())
    .slice(0, 3)
    .forEach((activity) => {
      notifications.push({
        id: `activity-${activity.id}`,
        type: "success",
        title: "Actividad de hoy",
        body: `${activity.time} - ${activity.title}`
      });
    });
  zenovaLocal.alarms
    .filter((alarm) => !alarm.fired)
    .slice(0, 3)
    .forEach((alarm) => {
      notifications.push({
        id: `alarm-${alarm.id}`,
        type: "info",
        title: "Recordatorio activo",
        body: `${alarm.date} ${alarm.time} - ${alarm.title}`
      });
    });
  return notifications;
}

function renderDailyNotifications() {
  const list = $("#dailyNotificationList");
  if (!list) return;
  const notifications = [...dailyCenterState.notifications, ...buildDerivedNotifications()]
    .filter((item) => !dailyCenterState.dismissed.includes(item.id))
    .slice(0, 5);
  if (!notifications.length) {
    list.innerHTML = ZenovaDesignSystem.components.emptyState(t("daily.notificationsEmpty"));
    return;
  }
  list.innerHTML = notifications.map((item) => ZenovaDesignSystem.components.notice(item)).join("");
}

function renderFavorites() {
  const list = $("#favoriteResourceList");
  if (!list) return;
  const libraryFavorites = (featureLibrary[state.language] || featureLibrary.es).map((item) => ({
    key: `library-${item.key}`,
    title: item.title,
    target: "#biblioteca",
    icon: item.title.slice(0, 1).toUpperCase()
  }));
  list.innerHTML = [...favoriteCatalog, ...libraryFavorites]
    .map((item) => {
      const active = dailyCenterState.favorites.includes(item.key);
      return `
        <button class="favorite-chip ${active ? "is-active" : ""}" type="button" data-favorite-toggle="${item.key}" data-target="${item.target}">
          <span>${escapeHtml(item.icon)}</span>
          <strong>${escapeHtml(item.title)}</strong>
        </button>
      `;
    })
    .join("");

  $$("[data-favorite-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      const key = button.dataset.favoriteToggle;
      const active = dailyCenterState.favorites.includes(key);
      dailyCenterState.favorites = active
        ? dailyCenterState.favorites.filter((item) => item !== key)
        : [...dailyCenterState.favorites, key];
      saveDailyState("favorites");
      renderFavorites();
      if (!active) goToSection(button.dataset.target);
    });
  });
}

function recentActivityItems() {
  const items = [
    ...state.entries.map((entry) => ({
      icon: "S",
      title: "Registro emocional",
      body: `${entry.stress}/10 - ${entry.sleep} h`,
      date: entry.date
    })),
    ...zenovaLocal.activities.map((activity) => ({
      icon: "C",
      title: activity.title,
      body: `${activity.date} ${activity.time}`,
      date: `${activity.date}T${activity.time || "00:00"}`
    })),
    ...zenovaLocal.notes.map((note) => ({
      icon: "N",
      title: note.title,
      body: note.body,
      date: note.date
    })),
    ...zenovaLocal.tests.map((test) => ({
      icon: "T",
      title: "Test ZENOVA",
      body: test.level || test.profile || "Informe emocional",
      date: test.date
    })),
    ...dailyCenterState.tasks
      .filter((task) => task.completedAt)
      .map((task) => ({
        icon: "V",
        title: task.title,
        body: dailyTaskTypeLabel(task.type),
        date: task.completedAt
      }))
  ];
  return items
    .filter((item) => item.date)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 6);
}

function renderRecentActivity() {
  const list = $("#recentActivityList");
  if (!list) return;
  const items = recentActivityItems();
  if (!items.length) {
    list.innerHTML = ZenovaDesignSystem.components.emptyState(t("daily.recentEmpty"));
    return;
  }
  list.innerHTML = items
    .map(
      (item) => `
        <article class="recent-item">
          <span>${escapeHtml(item.icon)}</span>
          <div>
            <strong>${escapeHtml(item.title)}</strong>
            <p>${escapeHtml(formatRelativeDate(item.date))} - ${escapeHtml(item.body || "")}</p>
          </div>
        </article>
      `
    )
    .join("");
}

function bindDailyCenterEvents() {
  $("#globalSearchInput")?.addEventListener("input", (event) => renderGlobalSearch(event.target.value));
  $("[data-quick-target]") &&
    $$("[data-quick-target]").forEach((button) => {
      button.addEventListener("click", () => goToSection(button.dataset.quickTarget));
    });
  $("#dailyGoalForm")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const title = $("#dailyGoalInput").value.trim();
    if (!title) return;
    dailyCenterState.goal = { title, updatedAt: new Date().toISOString() };
    saveDailyState("goal");
    const profile = getUserProfile();
    saveUserProfile({ ...profile, goal: title, updatedAt: new Date().toISOString() });
    renderDailyCenter();
    showZenovaToast(t("daily.goalSaved"), "success");
  });
  $("#wellbeingTaskForm")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const title = $("#wellbeingTaskInput").value.trim();
    if (!title) return;
    dailyCenterState.tasks.push({
      id: crypto.randomUUID(),
      title,
      type: $("#wellbeingTaskType").value,
      date: todayIso(),
      createdAt: new Date().toISOString(),
      completedAt: ""
    });
    dailyCenterState.tasks = dailyCenterState.tasks.slice(-40);
    saveDailyState("tasks");
    event.target.reset();
    renderDailyCenter();
    showZenovaToast(t("daily.taskAdded"), "success");
  });
  $("#clearDailyNotificationsBtn")?.addEventListener("click", () => {
    const visible = [...dailyCenterState.notifications, ...buildDerivedNotifications()].map((item) => item.id);
    dailyCenterState.dismissed = [...new Set([...dailyCenterState.dismissed, ...visible])].slice(-80);
    dailyCenterState.notifications = [];
    saveDailyState("dismissed");
    saveDailyState("notifications");
    renderDailyNotifications();
  });
}

function renderDailyCenter() {
  renderGlobalSearch($("#globalSearchInput")?.value || "");
  renderWellbeingTasks();
  renderDailyGoal();
  renderDailyNotifications();
  renderFavorites();
  renderRecentActivity();
}

function initDailyCenter() {
  if (!$("#centro-diario")) return;
  bindDailyCenterEvents();
  renderDailyCenter();
}

const baseRenderResourceLibraryDesignSystem = renderResourceLibrary;
renderResourceLibrary = function renderResourceLibraryWithFavorites() {
  const grid = $("#resourceLibraryGrid");
  if (!grid) {
    baseRenderResourceLibraryDesignSystem();
    return;
  }
  const items = featureLibrary[state.language] || featureLibrary.es;
  grid.innerHTML = items
    .map(
      (item) => `
        <article class="library-card">
          <div class="library-visual" style="--library-image: url('${item.image}')"></div>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.summary)}</p>
          <ul>${item.tips.map((tip) => `<li>${escapeHtml(tip)}</li>`).join("")}</ul>
          <button class="ds-button ds-button--tertiary" type="button" data-library-favorite="${item.key}">
            ${dailyCenterState.favorites.includes(`library-${item.key}`) ? t("daily.favorite") : t("daily.markFavorite")}
          </button>
        </article>
      `
    )
    .join("");
  $$("[data-library-favorite]").forEach((button) => {
    button.addEventListener("click", () => {
      const key = `library-${button.dataset.libraryFavorite}`;
      dailyCenterState.favorites = dailyCenterState.favorites.includes(key)
        ? dailyCenterState.favorites.filter((item) => item !== key)
        : [...dailyCenterState.favorites, key];
      saveDailyState("favorites");
      renderResourceLibrary();
      renderFavorites();
    });
  });
};

const baseRenderFeatureDashboardDesignSystem = renderFeatureDashboard;
renderFeatureDashboard = function renderFeatureDashboardWithDailyCenter() {
  baseRenderFeatureDashboardDesignSystem();
  renderDailyCenter();
};

const baseApplyLanguageDesignSystem = applyLanguage;
applyLanguage = function applyLanguageDesignSystem() {
  baseApplyLanguageDesignSystem();
  renderDailyCenter();
};

// Product platform layer: daily tools that create structured data without depending on AI.
Object.assign(ZenovaDesignSystem.storage, {
  checkins: "zenovaSmartCheckins",
  habits: "zenovaHabits",
  goals: "zenovaPersonalGoals",
  journals: "zenovaJournalEntries",
  toolStats: "zenovaToolExperienceStats",
  widgets: "zenovaWidgetSettings",
  timeline: "zenovaStructuredTimeline"
});

const productPlatformText = {
  es: {
    "hero.eyebrow": "Bienestar emocional de uso diario",
    "hero.title": "Tu plataforma diaria de bienestar",
    "hero.lede":
      "Registra tu estado, construye habitos, organiza objetivos y consulta recursos practicos. ZENOVA funciona hoy sin IA y queda preparada para interpretar mejor tus datos en el futuro.",
    "hero.aiTag": "Datos utiles",
    "hero.focusTag": "Seguimiento personal",
    "hero.habitTag": "Habitos saludables",
    "phone.note": "Tu siguiente accion puede ser un check-in rapido, una pausa o una meta pequena.",
    "chat.eyebrow": "Orientacion tematica ZENIN",
    "chat.title": "Guia de bienestar dentro de ZENOVA",
    "chat.text":
      "ZENIN se mantiene como apoyo tematico local para preguntas sobre estres, respiracion, sueno, habitos y uso de la plataforma. La integracion con OpenAI queda preparada para una fase posterior.",
    "dashboard.eyebrow": "Dashboard configurable",
    "dashboard.title": "Widgets que se adaptan a tu uso diario",
    "dashboard.restore": "Restaurar widgets",
    "dashboard.quickCheckin": "Check-in rapido",
    "dashboard.hide": "Ocultar",
    "dashboard.up": "Subir",
    "dashboard.down": "Bajar",
    "suite.eyebrow": "Herramientas diarias",
    "suite.title": "Habitos, objetivos y diario personal",
    "suite.text": "Cada accion guarda datos estructurados para generar seguimiento util ahora y preparar analisis futuros.",
    "checkin.eyebrow": "Check-in inteligente",
    "checkin.title": "Registra tu estado sin escribir",
    "checkin.deepen": "Quiero profundizar",
    "checkin.freeText": "Texto libre opcional",
    "checkin.freePlaceholder": "Puedes describir cualquier situacion; se guardara para analisis futuro, sin IA por ahora.",
    "checkin.save": "Guardar check-in",
    "checkin.structure": "Las respuestas se almacenan como historial estructurado para futuras recomendaciones.",
    "tracking.manual": "Modo manual detallado",
    "habits.eyebrow": "Sistema de habitos",
    "habits.title": "Rutinas de bienestar",
    "habits.placeholder": "Ej.: pausa activa",
    "habits.categoryBreath": "Respiracion",
    "habits.categoryMove": "Movimiento",
    "habits.categorySleep": "Sueno",
    "habits.categoryOrder": "Orden",
    "habits.daily": "Diario",
    "habits.weekdays": "Lunes a viernes",
    "habits.weekly": "Semanal",
    "habits.reminder": "Crear recordatorio sugerido",
    "habits.save": "Guardar habito",
    "goals.eyebrow": "Objetivos personales",
    "goals.title": "Metas con progreso real",
    "goals.placeholder": "Ej.: dormir mejor esta semana",
    "goals.description": "Descripcion breve",
    "goals.priorityMedium": "Prioridad media",
    "goals.priorityHigh": "Prioridad alta",
    "goals.priorityLow": "Prioridad baja",
    "goals.subtasks": "Subtareas separadas por coma",
    "goals.save": "Guardar objetivo",
    "journal.eyebrow": "Diario personal",
    "journal.title": "Entrada emocional estructurada",
    "journal.tags": "Etiquetas: estudio, familia, descanso",
    "journal.placeholder": "Escribe libremente lo que paso...",
    "journal.attachments": "Estructura preparada para imagenes y archivos futuros.",
    "journal.save": "Guardar entrada",
    "agenda.kind": "Elemento",
    "agenda.kindActivity": "Actividad",
    "agenda.kindTask": "Tarea",
    "agenda.kindReminder": "Recordatorio",
    "agenda.kindEvent": "Evento",
    "agenda.repeat": "Repeticion",
    "agenda.repeatNone": "Sin repetir",
    "agenda.repeatDaily": "Diaria",
    "agenda.repeatWeekly": "Semanal",
    "agenda.repeatMonthly": "Mensual",
    "library.search": "Buscar recurso",
    "library.searchPlaceholder": "Ej.: sueno, concentracion, ansiedad...",
    "library.category": "Categoria",
    "library.difficulty": "Dificultad",
    "library.all": "Todas",
    "library.easy": "Facil",
    "library.medium": "Media",
    "library.deep": "Profunda",
    "library.time": "Tiempo",
    "library.anyTime": "Cualquiera",
    "library.short": "Hasta 5 min",
    "library.mediumTime": "6-15 min",
    "library.long": "Mas de 15 min"
  }
};
productPlatformText.en = productPlatformText.es;
productPlatformText.pt = productPlatformText.es;
Object.keys(productPlatformText).forEach((lang) => Object.assign(text[lang], productPlatformText[lang]));

const zenovaProductState = {
  checkins: JSON.parse(localStorage.getItem(ZenovaDesignSystem.storage.checkins) || "[]"),
  habits: JSON.parse(localStorage.getItem(ZenovaDesignSystem.storage.habits) || "[]"),
  goals: JSON.parse(localStorage.getItem(ZenovaDesignSystem.storage.goals) || "[]"),
  journals: JSON.parse(localStorage.getItem(ZenovaDesignSystem.storage.journals) || "[]"),
  timeline: JSON.parse(localStorage.getItem(ZenovaDesignSystem.storage.timeline) || "[]"),
  widgets: JSON.parse(
    localStorage.getItem(ZenovaDesignSystem.storage.widgets) ||
      '{"order":["wellbeing","checkin","habits","goals","agenda","journal","progress","microtip","resources"],"hidden":[]}'
  ),
  checkinDraft: {},
  followUps: new Set(),
  journalEmotions: new Set()
};

function saveProductCollection(name, value) {
  localStorage.setItem(ZenovaDesignSystem.storage[name], JSON.stringify(value));
}

const ZenovaContextStore = {
  push(kind, payload) {
    const item = {
      id: crypto.randomUUID(),
      kind,
      createdAt: new Date().toISOString(),
      schemaVersion: 1,
      payload
    };
    zenovaProductState.timeline = [item, ...zenovaProductState.timeline].slice(0, 120);
    saveProductCollection("timeline", zenovaProductState.timeline);
    dbPut("timeline", item);
    return item;
  },
  buildOpenAIReadyContext() {
    return {
      schemaVersion: 1,
      generatedAt: new Date().toISOString(),
      userProfile: getUserProfile(),
      latestAssessment: state.lastAssessment,
      recentCheckins: zenovaProductState.checkins.slice(-10),
      habits: zenovaProductState.habits,
      goals: zenovaProductState.goals,
      agenda: zenovaLocal.activities.slice(-20),
      journalEntries: zenovaProductState.journals.slice(-10),
      emotionalEntries: state.entries.slice(-14),
      timeline: zenovaProductState.timeline.slice(0, 40)
    };
  }
};
window.ZenovaContextStore = ZenovaContextStore;

const baseZenovaContextPushForZeninCore = ZenovaContextStore.push.bind(ZenovaContextStore);
ZenovaContextStore.push = function pushWithZeninCognitiveCore(kind, payload) {
  const item = baseZenovaContextPushForZeninCore(kind, payload);
  window.ZeninCognitive?.captureZenovaContextItem?.(kind, payload, item);
  return item;
};

const checkinOptionData = [
  {
    key: "mood",
    label: "Estado emocional",
    options: [
      { value: "calma", label: "Calma", score: 86 },
      { value: "neutral", label: "Neutral", score: 62 },
      { value: "tristeza", label: "Tristeza", score: 36 },
      { value: "irritacion", label: "Irritacion", score: 30 }
    ]
  },
  {
    key: "energy",
    label: "Energia",
    options: [
      { value: "alta", label: "Alta", score: 84 },
      { value: "media", label: "Media", score: 60 },
      { value: "baja", label: "Baja", score: 28 }
    ]
  },
  {
    key: "stress",
    label: "Estres",
    options: [
      { value: "bajo", label: "Bajo", score: 2 },
      { value: "medio", label: "Medio", score: 5 },
      { value: "alto", label: "Alto", score: 8 }
    ]
  },
  {
    key: "sleepQuality",
    label: "Sueno",
    options: [
      { value: "reparador", label: "Reparador", score: 8 },
      { value: "irregular", label: "Irregular", score: 6 },
      { value: "pobre", label: "Pobre", score: 4 }
    ]
  },
  {
    key: "body",
    label: "Estado fisico",
    options: [
      { value: "relajado", label: "Relajado", score: 80 },
      { value: "tension", label: "Tension", score: 44 },
      { value: "dolor", label: "Dolor", score: 28 }
    ]
  },
  {
    key: "motivation",
    label: "Motivacion",
    options: [
      { value: "clara", label: "Clara", score: 82 },
      { value: "variable", label: "Variable", score: 56 },
      { value: "baja", label: "Baja", score: 30 }
    ]
  },
  {
    key: "workload",
    label: "Carga academica/laboral",
    options: [
      { value: "ligera", label: "Ligera", score: 78 },
      { value: "normal", label: "Normal", score: 60 },
      { value: "alta", label: "Alta", score: 32 }
    ]
  },
  {
    key: "movement",
    label: "Actividad fisica",
    options: [
      { value: "activa", label: "Activa", score: 78 },
      { value: "poca", label: "Poca", score: 48 },
      { value: "nula", label: "Nula", score: 30 }
    ]
  },
  {
    key: "social",
    label: "Estado social",
    options: [
      { value: "acompanado", label: "Acompanado", score: 78 },
      { value: "neutral", label: "Neutral", score: 58 },
      { value: "aislado", label: "Aislado", score: 32 }
    ]
  },
  {
    key: "nutrition",
    label: "Alimentacion",
    options: [
      { value: "regular", label: "Regular", score: 72 },
      { value: "desordenada", label: "Desordenada", score: 42 },
      { value: "insuficiente", label: "Insuficiente", score: 28 }
    ]
  },
  {
    key: "hydration",
    label: "Hidratacion",
    options: [
      { value: "bien", label: "Bien", score: 76 },
      { value: "poca", label: "Poca", score: 44 },
      { value: "olvide", label: "Olvide", score: 30 }
    ]
  }
];

const followUpPool = [
  { id: "examen", label: "Examen o entrega", when: (d) => d.workload === "alta" || d.stress === "alto" },
  { id: "conflicto", label: "Conversacion dificil", when: (d) => d.social === "aislado" || d.mood === "irritacion" },
  { id: "pantallas", label: "Muchas pantallas", when: (d) => d.sleepQuality === "pobre" || d.energy === "baja" },
  { id: "cuerpo", label: "Tension corporal", when: (d) => d.body === "tension" || d.body === "dolor" },
  { id: "desorden", label: "Muchos pendientes", when: (d) => d.workload === "alta" || d.motivation === "baja" },
  { id: "recuperacion", label: "Necesito descanso", when: (d) => d.energy === "baja" || d.sleepQuality === "pobre" },
  { id: "rutina", label: "Quiero sostener rutina", when: () => true }
];

const smartCheckinPrimaryGroups = [
  { key: "mood", label: "Estado emocional", hint: "Como te sientes ahora", values: ["calma", "neutral", "tristeza", "irritacion"] },
  { key: "energy", label: "Energia", hint: "Nivel para continuar el dia", values: ["alta", "media", "baja"] },
  { key: "sleepQuality", label: "Sueno", hint: "Calidad del descanso reciente", values: ["reparador", "irregular", "pobre"] },
  { key: "stress", label: "Estres", hint: "Presion percibida", values: ["bajo", "medio", "alto"] },
  {
    key: "dayGoal",
    label: "Objetivo del dia",
    hint: "Que necesitas priorizar",
    options: [
      { value: "calmarme", label: "Calmarme", score: 70 },
      { value: "enfocarme", label: "Enfocarme", score: 74 },
      { value: "descansar", label: "Descansar", score: 68 },
      { value: "ordenarme", label: "Ordenarme", score: 72 }
    ]
  },
  { key: "body", label: "Estado fisico", hint: "Senales del cuerpo", values: ["relajado", "tension", "dolor"] }
];

const smartCheckinContextGroups = [
  { key: "workload", label: "Carga", values: ["ligera", "normal", "alta"] },
  { key: "movement", label: "Movimiento", values: ["activa", "poca", "nula"] },
  { key: "social", label: "Entorno social", values: ["acompanado", "neutral", "aislado"] },
  { key: "nutrition", label: "Alimentacion", values: ["regular", "desordenada", "insuficiente"] },
  { key: "hydration", label: "Hidratacion", values: ["bien", "poca", "olvide"] }
];

const journalEmotionOptions = ["calma", "alegria", "ansiedad", "tristeza", "enojo", "cansancio", "gratitud", "confusion"];

const richResourceLibrary = [
  {
    key: "respiracion-446",
    title: "Respiracion 4-4-6",
    category: "ansiedad",
    subcategory: "respiracion guiada",
    difficulty: "facil",
    minutes: 3,
    objective: "Bajar activacion fisica antes de decidir.",
    usefulWhen: "Ansiedad, presion antes de estudiar o tension corporal.",
    benefits: "Puede favorecer calma, pausa y sensacion de control.",
    limitations: "No reemplaza apoyo profesional si hay crisis o riesgo.",
    related: ["grounding-54321", "pausa-activa"],
    image: "assets/meditation.png",
    tags: ["ansiedad", "respiracion", "calma"],
    summary: "Una tecnica breve para ordenar el ritmo respiratorio y reducir activacion.",
    tips: ["Inhala 4 segundos.", "Mantiene 4 segundos.", "Exhala 6 segundos durante 3 minutos."]
  },
  {
    key: "grounding-54321",
    title: "Anclaje 5-4-3-2-1",
    category: "mindfulness",
    subcategory: "atencion presente",
    difficulty: "facil",
    minutes: 5,
    objective: "Volver al presente cuando hay pensamientos acelerados.",
    usefulWhen: "Rumiacion, nervios, miedo anticipado o saturacion.",
    benefits: "Ayuda a orientar la atencion hacia senales concretas.",
    limitations: "Si aumenta el malestar, conviene parar y buscar apoyo.",
    related: ["respiracion-446", "diario-tres-lineas"],
    image: "assets/wave-bg.png",
    tags: ["mindfulness", "ansiedad", "presente"],
    summary: "Ejercicio sensorial para recuperar estabilidad sin escribir demasiado.",
    tips: ["Nombra 5 cosas que ves.", "Luego 4 que sientes.", "Cierra con una accion pequena."]
  },
  {
    key: "higiene-sueno",
    title: "Cierre nocturno sin pantalla",
    category: "sueno",
    subcategory: "habitos de descanso",
    difficulty: "media",
    minutes: 15,
    objective: "Preparar el descanso con menor estimulacion.",
    usefulWhen: "Sueno irregular, cansancio o dificultad para desconectar.",
    benefits: "Puede mejorar consistencia y preparacion mental para dormir.",
    limitations: "Problemas persistentes de sueno requieren orientacion profesional.",
    related: ["descarga-pendientes", "respiracion-446"],
    image: "assets/zenova-summary.png",
    tags: ["sueno", "descanso", "rutina"],
    summary: "Rutina breve para cerrar pendientes y reducir estimulos antes de dormir.",
    tips: ["Anota tres pendientes para manana.", "Baja brillo y notificaciones.", "Repite una respiracion lenta."]
  },
  {
    key: "bloque-15",
    title: "Bloque de enfoque de 15 minutos",
    category: "productividad",
    subcategory: "concentracion",
    difficulty: "facil",
    minutes: 15,
    objective: "Empezar una tarea sin convertirla en una carga enorme.",
    usefulWhen: "Procrastinacion, presion academica o baja motivacion.",
    benefits: "Reduce friccion inicial y deja evidencia de avance.",
    limitations: "No soluciona exceso de carga; ayuda a iniciar.",
    related: ["descarga-pendientes", "pausa-activa"],
    image: "assets/brand-app-preview.png",
    tags: ["concentracion", "estudio", "productividad"],
    summary: "Un microbloque para avanzar sin exigir una sesion larga.",
    tips: ["Elige una tarea pequena.", "Pon temporizador de 15 minutos.", "Cierra con una nota de avance."]
  },
  {
    key: "diario-tres-lineas",
    title: "Diario de tres lineas",
    category: "emociones",
    subcategory: "escritura emocional",
    difficulty: "facil",
    minutes: 4,
    objective: "Nombrar emocion, causa probable y siguiente accion.",
    usefulWhen: "Confusion emocional, tristeza o frustracion.",
    benefits: "Facilita claridad sin escribir una pagina completa.",
    limitations: "No debe usarse para forzarse a resolver todo.",
    related: ["grounding-54321", "descarga-pendientes"],
    image: "assets/logo-zenova.png",
    tags: ["diario", "emociones", "claridad"],
    summary: "Formato simple para transformar una sensacion en informacion util.",
    tips: ["Hoy siento...", "Puede estar relacionado con...", "Mi siguiente paso pequeno es..."]
  },
  {
    key: "pausa-activa",
    title: "Pausa activa suave",
    category: "estres",
    subcategory: "movimiento",
    difficulty: "facil",
    minutes: 5,
    objective: "Descargar tension fisica sin ejercicio intenso.",
    usefulWhen: "Hombros tensos, cansancio mental o muchas horas sentado.",
    benefits: "Puede mejorar activacion corporal y romper la inercia.",
    limitations: "Evitar movimientos dolorosos o contraindicados.",
    related: ["respiracion-446", "bloque-15"],
    image: "assets/meditation.png",
    tags: ["movimiento", "estres", "cuerpo"],
    summary: "Movimientos sencillos de cuello, hombros y manos para pausar.",
    tips: ["Rota hombros lentamente.", "Estira manos.", "Camina un minuto y vuelve."]
  },
  {
    key: "descarga-pendientes",
    title: "Descarga de pendientes",
    category: "productividad",
    subcategory: "organizacion personal",
    difficulty: "media",
    minutes: 10,
    objective: "Convertir ruido mental en lista accionable.",
    usefulWhen: "Sensacion de saturacion o muchas obligaciones.",
    benefits: "Ayuda a separar urgente, importante y postergable.",
    limitations: "La lista debe cerrar con una accion realista.",
    related: ["bloque-15", "diario-tres-lineas"],
    image: "assets/brand-app-preview.png",
    tags: ["organizacion", "estres", "estudio"],
    summary: "Una tecnica para ordenar la mente sin intentar resolver todo.",
    tips: ["Escribe todo sin ordenar.", "Marca tres prioridades.", "Elige una accion de 10 minutos."]
  },
  {
    key: "emocion-limite",
    title: "Emocion y limite",
    category: "emociones",
    subcategory: "inteligencia emocional",
    difficulty: "profunda",
    minutes: 12,
    objective: "Identificar que necesidad o limite aparece detras de una emocion.",
    usefulWhen: "Enojo, culpa, frustracion o discusiones.",
    benefits: "Puede mejorar comunicacion y reducir respuestas impulsivas.",
    limitations: "No busca justificar dano; busca claridad y reparacion.",
    related: ["diario-tres-lineas", "grounding-54321"],
    image: "assets/wave-bg.png",
    tags: ["emociones", "limites", "comunicacion"],
    summary: "Guia breve para entender una emocion antes de responder.",
    tips: ["Nombra la emocion.", "Pregunta que limite toca.", "Elige una frase clara y respetuosa."]
  }
];

featureLibrary.es = richResourceLibrary;
featureLibrary.en = richResourceLibrary;
featureLibrary.pt = richResourceLibrary;

function timeBucket(minutes) {
  if (minutes <= 5) return "short";
  if (minutes <= 15) return "medium";
  return "long";
}

function latestCheckin() {
  return zenovaProductState.checkins[zenovaProductState.checkins.length - 1] || null;
}

function computeWellbeingIndex() {
  const checkin = latestCheckin();
  if (checkin?.derived?.wellbeingIndex) return checkin.derived.wellbeingIndex;
  if (state.entries.length) {
    const latest = state.entries.slice(-5);
    const avgStress = averageNumber(latest, (entry) => Number(entry.stress)) || 5;
    const avgSleep = averageNumber(latest, (entry) => Number(entry.sleep)) || 6;
    return Math.round(Math.max(0, Math.min(100, 100 - avgStress * 7 + avgSleep * 4)));
  }
  return 62;
}

function contextMicroTip() {
  const checkin = latestCheckin();
  const latest = state.entries.slice(-7);
  if (checkin?.selections?.sleepQuality === "pobre") return "Tu ultimo check-in marca descanso bajo: agenda un cierre nocturno y reduce pantallas antes de dormir.";
  if (checkin?.selections?.workload === "alta") return "Hay carga alta: elige un bloque de 15 minutos y define una sola tarea visible.";
  if (checkin?.selections?.hydration === "olvide") return "Hidratacion baja: toma agua ahora y agrega un recordatorio breve para la tarde.";
  if (latest.length && (averageNumber(latest, (entry) => Number(entry.stress)) || 0) >= 7) return "Tu tendencia reciente muestra estres alto: prioriza una pausa fisica antes de tareas exigentes.";
  if (zenovaProductState.habits.some((habit) => !habit.completions?.includes(todayIso()))) return "Tienes habitos pendientes: completa uno pequeno para mantener continuidad.";
  return "Hoy puedes usar ZENOVA con una accion minima: check-in rapido, una pausa o una nota de tres lineas.";
}

function renderCheckinOptions() {
  const grid = $("#checkinOptionGrid");
  if (!grid) return;
  grid.innerHTML = checkinOptionData
    .map(
      (group) => `
        <fieldset class="checkin-group">
          <strong>${escapeHtml(group.label)}</strong>
          <div class="checkin-choice-row">
            ${group.options
              .map(
                (option) => `
                  <button
                    class="checkin-choice ${zenovaProductState.checkinDraft[group.key] === option.value ? "is-active" : ""}"
                    type="button"
                    data-checkin-field="${group.key}"
                    data-checkin-value="${option.value}"
                    data-checkin-score="${option.score}"
                  >
                    ${escapeHtml(option.label)}
                  </button>
                `
              )
              .join("")}
          </div>
        </fieldset>
      `
    )
    .join("");
  $$("[data-checkin-field]").forEach((button) => {
    button.addEventListener("click", () => {
      zenovaProductState.checkinDraft[button.dataset.checkinField] = button.dataset.checkinValue;
      renderCheckinOptions();
      renderCheckinFollowUp();
    });
  });
  renderCheckinFollowUp();
}

function renderCheckinFollowUp() {
  const follow = $("#checkinFollowUp");
  if (!follow) return;
  const candidates = followUpPool.filter((item) => item.when(zenovaProductState.checkinDraft));
  follow.innerHTML = candidates
    .map(
      (item) => `
        <button class="followup-chip ${zenovaProductState.followUps.has(item.id) ? "is-active" : ""}" type="button" data-followup="${item.id}">
          ${escapeHtml(item.label)}
        </button>
      `
    )
    .join("");
  $$("[data-followup]").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.dataset.followup;
      if (zenovaProductState.followUps.has(id)) {
        zenovaProductState.followUps.delete(id);
      } else {
        zenovaProductState.followUps.add(id);
      }
      renderCheckinFollowUp();
    });
  });
}

function deriveCheckinMetrics(selections) {
  const scoreFor = (key, fallback) => checkinOptionData.find((group) => group.key === key)?.options.find((option) => option.value === selections[key])?.score ?? fallback;
  const stress = scoreFor("stress", 5);
  const sleep = scoreFor("sleepQuality", 6);
  const positives = ["mood", "energy", "body", "motivation", "workload", "movement", "social", "nutrition", "hydration"].map((key) => scoreFor(key, 58));
  const wellbeingIndex = Math.round(Math.max(0, Math.min(100, (positives.reduce((sum, value) => sum + value, 0) / positives.length) * 0.72 + (10 - stress) * 2.8)));
  return { stress, sleep, wellbeingIndex };
}

function persistSmartCheckin(selections = {}, freeText = "") {
  const derived = deriveCheckinMetrics(selections);
  const createdAt = new Date().toISOString();
  const followUps = [...zenovaProductState.followUps];
  const zeninPayload =
    window.ZeninAI?.checkin?.buildPayload?.({
      createdAt,
      selections,
      followUps,
      freeText
    }) || null;
  const record = {
    id: crypto.randomUUID(),
    createdAt,
    source: "smart-checkin",
    schemaVersion: 2,
    selections,
    followUps,
    freeText,
    attachments: { images: [], files: [] },
    derived,
    zenin: zeninPayload,
    futureAI: {
      ready: true,
      service: "services/zenin/zenin-service.js",
      streamingReady: true,
      note: "Registro estructurado preparado para interpretacion futura; no se analiza con IA en esta version."
    }
  };
  zenovaProductState.checkins.push(record);
  zenovaProductState.checkins = zenovaProductState.checkins.slice(-60);
  saveProductCollection("checkins", zenovaProductState.checkins);
  dbPut("checkins", record);
  ZenovaContextStore.push("checkin.created", record);

  const entry = {
    date: record.createdAt,
    label: shortDateLabel(new Date(record.createdAt)),
    stress: Math.max(1, Math.min(10, Number(derived.stress))),
    sleep: Math.max(0, Math.min(10, Number(derived.sleep))),
    moment: "Check-in",
    note: freeText || record.followUps.join(", ")
  };
  state.entries.push(entry);
  state.entries = state.entries.slice(-14);
  saveEntries();
  renderBars();
  updatePattern();
  $("#metricSleep") && ($("#metricSleep").textContent = `${entry.sleep} h`);
  $("#metricStress") && ($("#metricStress").textContent = `${entry.stress}/10`);
  $("#metricMood") && ($("#metricMood").textContent = selections.mood || "Check-in");
  renderProductPlatform();
  renderFeatureDashboard();
  return record;
}

function handleSmartCheckin(event) {
  event.preventDefault();
  const selections = { ...zenovaProductState.checkinDraft };
  const freeText = $("#checkinFreeText")?.value.trim() || "";
  persistSmartCheckin(selections, freeText);
  $("#checkinFreeText").value = "";
  showZenovaToast("Check-in guardado como historial estructurado.", "success");
}

function habitStreak(habit) {
  const dates = new Set(habit.completions || []);
  let streak = 0;
  const cursor = new Date();
  while (dates.has(cursor.toISOString().slice(0, 10))) {
    streak += 1;
    cursor.setDate(cursor.getDate() - 1);
  }
  return streak;
}

function renderHabits() {
  const list = $("#habitList");
  const pill = $("#habitSummaryPill");
  if (!list || !pill) return;
  const doneToday = zenovaProductState.habits.filter((habit) => habit.completions?.includes(todayIso())).length;
  pill.textContent = `${doneToday}/${zenovaProductState.habits.length}`;
  if (!zenovaProductState.habits.length) {
    list.innerHTML = ZenovaDesignSystem.components.emptyState("Crea un habito pequeno para empezar a medir continuidad.");
    return;
  }
  list.innerHTML = zenovaProductState.habits
    .map((habit) => {
      const completed = habit.completions?.includes(todayIso());
      const lastSeven = Array.from({ length: 7 }, (_, index) => {
        const date = new Date();
        date.setDate(date.getDate() - (6 - index));
        return date.toISOString().slice(0, 10);
      });
      return `
        <article class="product-item">
          <header>
            <div>
              <h4>${escapeHtml(habit.title)}</h4>
              <p>${escapeHtml(habit.category)} Â· ${escapeHtml(habit.frequency)} Â· racha ${habitStreak(habit)}</p>
            </div>
            <span class="ds-status-pill">${completed ? "Hecho" : "Pendiente"}</span>
          </header>
          <div class="habit-calendar" aria-label="Ultimos 7 dias">
            ${lastSeven.map((day) => `<span class="${habit.completions?.includes(day) ? "done" : ""}"></span>`).join("")}
          </div>
          <div class="product-item-actions">
            <button class="ds-button ds-button--secondary" type="button" data-habit-complete="${habit.id}">${completed ? "Desmarcar" : "Completar hoy"}</button>
            <button class="ds-button ds-button--text" type="button" data-habit-edit="${habit.id}">Editar</button>
            <button class="ds-button ds-button--text" type="button" data-habit-delete="${habit.id}">Eliminar</button>
          </div>
        </article>
      `;
    })
    .join("");
  $$("[data-habit-complete]").forEach((button) =>
    button.addEventListener("click", () => {
      const habit = zenovaProductState.habits.find((item) => item.id === button.dataset.habitComplete);
      if (!habit) return;
      habit.completions = habit.completions || [];
      habit.completions = habit.completions.includes(todayIso())
        ? habit.completions.filter((day) => day !== todayIso())
        : [...habit.completions, todayIso()];
      habit.updatedAt = new Date().toISOString();
      saveProductCollection("habits", zenovaProductState.habits);
      dbPut("habits", habit);
      ZenovaContextStore.push("habit.completed", habit);
      renderProductPlatform();
      showZenovaToast("Habito actualizado.", "success");
    })
  );
  $$("[data-habit-edit]").forEach((button) =>
    button.addEventListener("click", () => {
      const habit = zenovaProductState.habits.find((item) => item.id === button.dataset.habitEdit);
      if (!habit) return;
      $("#habitEditId").value = habit.id;
      $("#habitTitle").value = habit.title;
      $("#habitCategory").value = habit.category;
      $("#habitFrequency").value = habit.frequency;
      $("#habitTime").value = habit.time || "";
      $("#habitTarget").value = habit.targetDays || 7;
      $("#habitReminder").checked = Boolean(habit.reminder);
    })
  );
  $$("[data-habit-delete]").forEach((button) =>
    button.addEventListener("click", () => {
      zenovaProductState.habits = zenovaProductState.habits.filter((habit) => habit.id !== button.dataset.habitDelete);
      saveProductCollection("habits", zenovaProductState.habits);
      renderProductPlatform();
    })
  );
}

function handleHabitSave(event) {
  event.preventDefault();
  const id = $("#habitEditId").value || crypto.randomUUID();
  const existing = zenovaProductState.habits.find((habit) => habit.id === id);
  const habit = {
    id,
    title: $("#habitTitle").value.trim(),
    category: $("#habitCategory").value,
    frequency: $("#habitFrequency").value,
    time: $("#habitTime").value,
    targetDays: Number($("#habitTarget").value || 7),
    reminder: $("#habitReminder").checked,
    completions: existing?.completions || [],
    createdAt: existing?.createdAt || new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  zenovaProductState.habits = existing
    ? zenovaProductState.habits.map((item) => (item.id === id ? habit : item))
    : [...zenovaProductState.habits, habit];
  saveProductCollection("habits", zenovaProductState.habits);
  dbPut("habits", habit);
  ZenovaContextStore.push("habit.saved", habit);
  if (habit.reminder && habit.time) {
    const activity = {
      id: crypto.randomUUID(),
      title: habit.title,
      date: todayIso(),
      time: habit.time,
      type: habit.category,
      kind: "recordatorio",
      repeat: habit.frequency,
      fired: false
    };
    zenovaLocal.activities.push(activity);
    saveCollection("zenovaActivities", zenovaLocal.activities);
    dbPut("activities", activity);
    renderActivities();
  }
  event.target.reset();
  $("#habitEditId").value = "";
  $("#habitTarget").value = 7;
  renderProductPlatform();
  showZenovaToast("Habito guardado.", "success");
}

function goalProgress(goal) {
  if (!goal.subtasks?.length) return goal.progress || 0;
  return Math.round((goal.subtasks.filter((task) => task.done).length / goal.subtasks.length) * 100);
}

function renderPersonalGoals() {
  const list = $("#personalGoalList");
  const pill = $("#goalSummaryPill");
  if (!list || !pill) return;
  const averageProgress = Math.round(averageNumber(zenovaProductState.goals, goalProgress) || 0);
  pill.textContent = `${averageProgress}%`;
  if (!zenovaProductState.goals.length) {
    list.innerHTML = ZenovaDesignSystem.components.emptyState("Crea un objetivo con subtareas para medir avance real.");
    return;
  }
  list.innerHTML = zenovaProductState.goals
    .map(
      (goal) => `
        <article class="product-item">
          <header>
            <div>
              <h4>${escapeHtml(goal.title)}</h4>
              <p>${escapeHtml(goal.priority)}${goal.dueDate ? ` Â· ${escapeHtml(goal.dueDate)}` : ""}</p>
            </div>
            <span class="ds-status-pill">${goalProgress(goal)}%</span>
          </header>
          <p>${escapeHtml(goal.description || "Sin descripcion.")}</p>
          <div class="mini-progress"><span style="--value: ${goalProgress(goal)}%"></span></div>
          <div>
            ${(goal.subtasks || [])
              .map(
                (task) => `
                  <label class="subtask-row">
                    <input type="checkbox" data-goal-subtask="${goal.id}" data-subtask-id="${task.id}" ${task.done ? "checked" : ""} />
                    <span>${escapeHtml(task.title)}</span>
                  </label>
                `
              )
              .join("")}
          </div>
          <div class="product-item-actions">
            <button class="ds-button ds-button--text" type="button" data-goal-edit="${goal.id}">Editar</button>
            <button class="ds-button ds-button--text" type="button" data-goal-delete="${goal.id}">Eliminar</button>
          </div>
        </article>
      `
    )
    .join("");
  $$("[data-goal-subtask]").forEach((input) =>
    input.addEventListener("change", () => {
      const goal = zenovaProductState.goals.find((item) => item.id === input.dataset.goalSubtask);
      const task = goal?.subtasks.find((item) => item.id === input.dataset.subtaskId);
      if (!task) return;
      task.done = input.checked;
      goal.progress = goalProgress(goal);
      goal.updatedAt = new Date().toISOString();
      saveProductCollection("goals", zenovaProductState.goals);
      dbPut("goals", goal);
      ZenovaContextStore.push("goal.progress", goal);
      renderProductPlatform();
    })
  );
  $$("[data-goal-edit]").forEach((button) =>
    button.addEventListener("click", () => {
      const goal = zenovaProductState.goals.find((item) => item.id === button.dataset.goalEdit);
      if (!goal) return;
      $("#goalEditId").value = goal.id;
      $("#goalTitle").value = goal.title;
      $("#goalDescription").value = goal.description || "";
      $("#goalDueDate").value = goal.dueDate || "";
      $("#goalPriority").value = goal.priority || "media";
      $("#goalSubtasks").value = (goal.subtasks || []).map((task) => task.title).join(", ");
    })
  );
  $$("[data-goal-delete]").forEach((button) =>
    button.addEventListener("click", () => {
      zenovaProductState.goals = zenovaProductState.goals.filter((goal) => goal.id !== button.dataset.goalDelete);
      saveProductCollection("goals", zenovaProductState.goals);
      renderProductPlatform();
    })
  );
}

function handleGoalSave(event) {
  event.preventDefault();
  const id = $("#goalEditId").value || crypto.randomUUID();
  const existing = zenovaProductState.goals.find((goal) => goal.id === id);
  const previousTasks = existing?.subtasks || [];
  const subtasks = $("#goalSubtasks")
    .value.split(",")
    .map((item) => item.trim())
    .filter(Boolean)
    .map((title) => previousTasks.find((task) => task.title === title) || { id: crypto.randomUUID(), title, done: false });
  const goal = {
    id,
    title: $("#goalTitle").value.trim(),
    description: $("#goalDescription").value.trim(),
    dueDate: $("#goalDueDate").value,
    priority: $("#goalPriority").value,
    subtasks,
    progress: 0,
    createdAt: existing?.createdAt || new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  goal.progress = goalProgress(goal);
  zenovaProductState.goals = existing
    ? zenovaProductState.goals.map((item) => (item.id === id ? goal : item))
    : [...zenovaProductState.goals, goal];
  saveProductCollection("goals", zenovaProductState.goals);
  dbPut("goals", goal);
  ZenovaContextStore.push("goal.saved", goal);
  event.target.reset();
  $("#goalEditId").value = "";
  renderProductPlatform();
  showZenovaToast("Objetivo guardado.", "success");
}

function renderJournalEmotionPicker() {
  const picker = $("#journalEmotionPicker");
  if (!picker) return;
  picker.innerHTML = journalEmotionOptions
    .map(
      (emotion) => `
        <button class="${zenovaProductState.journalEmotions.has(emotion) ? "is-active" : ""}" type="button" data-journal-emotion="${emotion}">
          ${escapeHtml(emotion)}
        </button>
      `
    )
    .join("");
  $$("[data-journal-emotion]").forEach((button) =>
    button.addEventListener("click", () => {
      const emotion = button.dataset.journalEmotion;
      if (zenovaProductState.journalEmotions.has(emotion)) {
        zenovaProductState.journalEmotions.delete(emotion);
      } else {
        zenovaProductState.journalEmotions.add(emotion);
      }
      renderJournalEmotionPicker();
    })
  );
}

function renderJournalEntries() {
  const list = $("#journalList");
  const pill = $("#journalSummaryPill");
  if (!list || !pill) return;
  pill.textContent = zenovaProductState.journals.length;
  if (!zenovaProductState.journals.length) {
    list.innerHTML = ZenovaDesignSystem.components.emptyState("Guarda una entrada para construir tu diario emocional.");
    return;
  }
  list.innerHTML = zenovaProductState.journals
    .slice(-4)
    .reverse()
    .map(
      (entry) => `
        <article class="product-item">
          <header>
            <div>
              <h4>${escapeHtml(formatRelativeDate(entry.createdAt))}</h4>
              <p>${escapeHtml(entry.emotions.join(", ") || "Sin emocion marcada")}</p>
            </div>
            <span class="ds-status-pill">${entry.tags.length}</span>
          </header>
          <p>${escapeHtml(entry.text)}</p>
          <div class="library-meta">${entry.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}</div>
        </article>
      `
    )
    .join("");
}

function handleJournalSave(event) {
  event.preventDefault();
  const entry = {
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    emotions: [...zenovaProductState.journalEmotions],
    tags: $("#journalTags").value.split(",").map((tag) => tag.trim()).filter(Boolean),
    text: $("#journalText").value.trim(),
    attachments: { images: [], files: [] },
    schemaVersion: 1,
    futureAI: { ready: true, source: "journal" }
  };
  zenovaProductState.journals.push(entry);
  zenovaProductState.journals = zenovaProductState.journals.slice(-80);
  saveProductCollection("journals", zenovaProductState.journals);
  dbPut("journals", entry);
  ZenovaContextStore.push("journal.created", entry);
  zenovaProductState.journalEmotions.clear();
  event.target.reset();
  renderProductPlatform();
  showZenovaToast("Entrada del diario guardada.", "success");
}

function renderDynamicWidgets() {
  const grid = $("#dynamicWidgetGrid");
  if (!grid) return;
  const hidden = new Set(zenovaProductState.widgets.hidden || []);
  const widgetMap = {
    wellbeing: {
      title: "Indice de bienestar",
      body: `<div class="widget-metric"><strong>${computeWellbeingIndex()}</strong><p>Estimacion no diagnostica basada en registros recientes.</p></div>`
    },
    checkin: {
      title: "Ultimo check-in",
      body: latestCheckin()
        ? `<div class="widget-mini-list"><span>${escapeHtml(formatRelativeDate(latestCheckin().createdAt))}</span><span>${escapeHtml(Object.values(latestCheckin().selections).slice(0, 3).join(" Â· "))}</span></div>`
        : ZenovaDesignSystem.components.emptyState("Aun no hay check-in rapido.")
    },
    habits: {
      title: "Habitos",
      body: `<div class="widget-metric"><strong>${zenovaProductState.habits.filter((habit) => habit.completions?.includes(todayIso())).length}/${zenovaProductState.habits.length}</strong><p>Completados hoy</p></div>`
    },
    goals: {
      title: "Objetivos",
      body: `<div class="widget-metric"><strong>${Math.round(averageNumber(zenovaProductState.goals, goalProgress) || 0)}%</strong><p>Avance promedio</p></div>`
    },
    agenda: {
      title: "Agenda",
      body: `<div class="widget-mini-list">${zenovaLocal.activities.slice(-3).reverse().map((item) => `<span>${escapeHtml(item.title)} Â· ${escapeHtml(item.date)}</span>`).join("") || "<span>Sin actividades proximas.</span>"}</div>`
    },
    journal: {
      title: "Diario",
      body: `<div class="widget-metric"><strong>${zenovaProductState.journals.length}</strong><p>Entradas guardadas</p></div>`
    },
    progress: {
      title: "Progreso semanal",
      body: `<div class="widget-mini-list"><span>${escapeHtml(buildHistoryRecommendations()[0] || "Agrega datos para ver tendencias.")}</span></div>`
    },
    microtip: {
      title: "Dato contextual",
      body: `<div class="widget-mini-list"><span>${escapeHtml(contextMicroTip())}</span></div>`
    },
    resources: {
      title: "Recurso recomendado",
      body: `<div class="widget-mini-list"><span>${escapeHtml(selectContextResource().title)}</span><span>${escapeHtml(selectContextResource().summary)}</span></div>`
    }
  };
  const mandatoryWidgets = ["wellbeing", "checkin", "habits", "goals"];
  const configuredWidgets = (zenovaProductState.widgets.order || Object.keys(widgetMap)).filter((key) => widgetMap[key] && !hidden.has(key));
  const visibleWidgets = [...mandatoryWidgets, ...configuredWidgets.filter((key) => !mandatoryWidgets.includes(key))].slice(0, 4);
  grid.innerHTML = visibleWidgets
    .map(
      (key) => `
        <article class="ds-card dashboard-widget" data-widget="${key}">
          <div class="ds-card-header">
            <div>
              <p class="ds-kicker">ZENOVA</p>
              <h3>${escapeHtml(widgetMap[key].title)}</h3>
            </div>
            <div class="widget-actions">
              <button class="ds-button ds-button--icon ds-button--secondary" type="button" data-widget-up="${key}" aria-label="${t("dashboard.up")}">↑</button>
              <button class="ds-button ds-button--icon ds-button--secondary" type="button" data-widget-down="${key}" aria-label="${t("dashboard.down")}">↓</button>
              <button class="ds-button ds-button--icon ds-button--secondary" type="button" data-widget-hide="${key}" aria-label="${t("dashboard.hide")}">×</button>
            </div>
          </div>
          ${widgetMap[key].body}
        </article>
      `
    )
    .join("");
  bindWidgetControls();
}

function saveWidgetSettings() {
  localStorage.setItem(ZenovaDesignSystem.storage.widgets, JSON.stringify(zenovaProductState.widgets));
}

function bindWidgetControls() {
  const move = (key, direction) => {
    const order = zenovaProductState.widgets.order;
    const index = order.indexOf(key);
    const next = index + direction;
    if (index < 0 || next < 0 || next >= order.length) return;
    [order[index], order[next]] = [order[next], order[index]];
    saveWidgetSettings();
    renderDynamicWidgets();
  };
  $$("[data-widget-up]").forEach((button) => button.addEventListener("click", () => move(button.dataset.widgetUp, -1)));
  $$("[data-widget-down]").forEach((button) => button.addEventListener("click", () => move(button.dataset.widgetDown, 1)));
  $$("[data-widget-hide]").forEach((button) =>
    button.addEventListener("click", () => {
      zenovaProductState.widgets.hidden = [...new Set([...(zenovaProductState.widgets.hidden || []), button.dataset.widgetHide])];
      saveWidgetSettings();
      renderDynamicWidgets();
    })
  );
}

function selectContextResource() {
  const checkin = latestCheckin();
  if (checkin?.selections?.sleepQuality === "pobre") return richResourceLibrary.find((item) => item.key === "higiene-sueno");
  if (checkin?.selections?.workload === "alta") return richResourceLibrary.find((item) => item.key === "bloque-15");
  if (checkin?.selections?.stress === "alto") return richResourceLibrary.find((item) => item.key === "respiracion-446");
  return richResourceLibrary.find((item) => item.key === "diario-tres-lineas") || richResourceLibrary[0];
}

function renderRichResourceLibrary() {
  const grid = $("#resourceLibraryGrid");
  if (!grid) return;
  const query = normalize($("#librarySearch")?.value || "");
  const category = $("#libraryCategory")?.value || "all";
  const difficulty = $("#libraryDifficulty")?.value || "all";
  const time = $("#libraryTime")?.value || "all";
  const items = richResourceLibrary.filter((item) => {
    const haystack = normalize(`${item.title} ${item.summary} ${item.objective} ${item.tags.join(" ")} ${item.category}`);
    return (
      (!query || haystack.includes(query)) &&
      (category === "all" || item.category === category) &&
      (difficulty === "all" || item.difficulty === difficulty) &&
      (time === "all" || timeBucket(item.minutes) === time)
    );
  });
  grid.innerHTML = items.length
    ? items
        .map(
          (item) => `
            <article class="library-card">
              <div class="library-visual" style="--library-image: url('${item.image}')"></div>
              <h3>${escapeHtml(item.title)}</h3>
              <p>${escapeHtml(item.summary)}</p>
              <div class="library-meta">
                <span>${escapeHtml(item.category)}</span>
                <span>${escapeHtml(item.difficulty)}</span>
                <span>${item.minutes} min</span>
              </div>
              <ul class="library-detail-list">
                <li><strong>Util:</strong> ${escapeHtml(item.usefulWhen)}</li>
                <li><strong>Objetivo:</strong> ${escapeHtml(item.objective)}</li>
                <li><strong>Beneficio:</strong> ${escapeHtml(item.benefits)}</li>
                <li><strong>Limite:</strong> ${escapeHtml(item.limitations)}</li>
              </ul>
              <ul>${item.tips.map((tip) => `<li>${escapeHtml(tip)}</li>`).join("")}</ul>
              <button class="ds-button ds-button--tertiary" type="button" data-library-favorite="${item.key}">
                ${dailyCenterState.favorites.includes(`library-${item.key}`) ? t("daily.favorite") : t("daily.markFavorite")}
              </button>
            </article>
          `
        )
        .join("")
    : ZenovaDesignSystem.components.emptyState("No hay recursos con esos filtros.");
  $$("[data-library-favorite]").forEach((button) => {
    button.addEventListener("click", () => {
      const key = `library-${button.dataset.libraryFavorite}`;
      dailyCenterState.favorites = dailyCenterState.favorites.includes(key)
        ? dailyCenterState.favorites.filter((item) => item !== key)
        : [...dailyCenterState.favorites, key];
      saveDailyState("favorites");
      renderRichResourceLibrary();
      renderFavorites();
    });
  });
}

const baseRenderResourceLibraryProduct = renderResourceLibrary;
renderResourceLibrary = function renderResourceLibraryProduct() {
  if ($("#librarySearch")) {
    renderRichResourceLibrary();
  } else {
    baseRenderResourceLibraryProduct();
  }
};

const baseRenderActivitiesProduct = renderActivities;
renderActivities = function renderActivitiesProduct() {
  const sorted = zenovaLocal.activities
    .slice()
    .sort((a, b) => `${a.date} ${a.time}`.localeCompare(`${b.date} ${b.time}`));
  const list = $("#activitiesList");
  if (list) {
    list.innerHTML =
      sorted
        .slice(0, 8)
        .map(
          (item) => `
            <div class="drawer-item">
              <strong>${escapeHtml(item.title)}</strong>
              ${escapeHtml(item.date)} Â· ${escapeHtml(item.time)} Â· ${escapeHtml(item.kind || "actividad")} Â· ${escapeHtml(item.type)}${item.repeat && item.repeat !== "none" ? ` Â· ${escapeHtml(item.repeat)}` : ""}
            </div>
          `
        )
        .join("") || `<div class="drawer-item">Agenda una actividad de bienestar.</div>`;
  } else {
    baseRenderActivitiesProduct();
  }
  renderCalendarStrip(sorted);
  renderDynamicWidgets();
  renderDailyCenter();
};

function setupAgendaEnhancements() {
  const form = $("#activityForm");
  if (!form) return;
  form.addEventListener(
    "submit",
    () => {
      form._zenovaAgendaMeta = {
        kind: $("#activityKind")?.value || "actividad",
        repeat: $("#activityRepeat")?.value || "none"
      };
    },
    true
  );
  form.addEventListener("submit", () => {
    window.setTimeout(() => {
      const last = zenovaLocal.activities[zenovaLocal.activities.length - 1];
      if (!last || !form._zenovaAgendaMeta) return;
      Object.assign(last, form._zenovaAgendaMeta);
      saveCollection("zenovaActivities", zenovaLocal.activities);
      dbPut("activities", last);
      ZenovaContextStore.push("agenda.saved", last);
      renderActivities();
    }, 0);
  });
}

function setupProductPlatformEvents() {
  $("#smartCheckinForm")?.addEventListener("submit", handleSmartCheckin);
  $("#habitForm")?.addEventListener("submit", handleHabitSave);
  $("#personalGoalForm")?.addEventListener("submit", handleGoalSave);
  $("#journalForm")?.addEventListener("submit", handleJournalSave);
  $("#restoreWidgetsBtn")?.addEventListener("click", () => {
    zenovaProductState.widgets = {
      order: ["wellbeing", "checkin", "habits", "goals", "agenda", "journal", "progress", "microtip", "resources"],
      hidden: []
    };
    saveWidgetSettings();
    renderDynamicWidgets();
  });
  ["#librarySearch", "#libraryCategory", "#libraryDifficulty", "#libraryTime"].forEach((selector) => {
    $(selector)?.addEventListener("input", renderRichResourceLibrary);
    $(selector)?.addEventListener("change", renderRichResourceLibrary);
  });
  setupAgendaEnhancements();
}

function renderProductPlatform() {
  renderCheckinOptions();
  renderJournalEmotionPicker();
  renderHabits();
  renderPersonalGoals();
  renderJournalEntries();
  renderDynamicWidgets();
  renderRichResourceLibrary();
}

function initProductPlatform() {
  setupProductPlatformEvents();
  renderProductPlatform();
}

const baseBuildGlobalSearchIndexProduct = buildGlobalSearchIndex;
buildGlobalSearchIndex = function buildGlobalSearchIndexProduct() {
  return [
    ...baseBuildGlobalSearchIndexProduct(),
    { title: "Check-in inteligente", body: "Registro rapido por botones y texto libre opcional.", target: "#seguimiento", tags: "checkin registro botones estado emocional" },
    { title: "Habitos", body: "Rutinas, recordatorios, cumplimiento y rachas.", target: "#plan-personal", tags: "habitos rutinas rachas bienestar" },
    { title: "Objetivos personales", body: "Metas con subtareas, prioridad y progreso.", target: "#plan-personal", tags: "objetivos metas progreso subtareas" },
    { title: "Diario personal", body: "Entrada emocional con etiquetas y estructura futura para archivos.", target: "#plan-personal", tags: "diario emociones etiquetas texto libre" },
    ...richResourceLibrary.map((item) => ({
      title: item.title,
      body: item.summary,
      target: "#biblioteca",
      tags: `${item.category} ${item.tags.join(" ")} ${item.objective}`
    }))
  ];
};

const baseRenderFeatureDashboardProduct = renderFeatureDashboard;
renderFeatureDashboard = function renderFeatureDashboardProduct() {
  baseRenderFeatureDashboardProduct();
  renderProductPlatform();
};

const baseApplyLanguageProduct = applyLanguage;
applyLanguage = function applyLanguageProduct() {
  baseApplyLanguageProduct();
  renderProductPlatform();
};

// Multifactor assessment engine: rule-based today, structured for future OpenAI integration.
Object.assign(text.es, {
  "evaluation.title": "Asistente multifactor",
  "evaluation.text":
    "Responde una pregunta por vez. ZENOVA hara el cruce con tu historial.",
  "evaluation.generate": "Generar evaluacion",
  "tools.eyebrow": "Haz algo ahora",
  "tools.title": "Acciones inmediatas",
  "exercise.eyebrow": "Rutinas completas",
  "exercise.title": "Programas guiados"
});
Object.assign(text.en, {
  "evaluation.title": "Multifactor assistant",
  "evaluation.text":
    "Answer one question at a time. ZENOVA will connect it with your history.",
  "evaluation.generate": "Generate assessment",
  "tools.eyebrow": "Do something now",
  "tools.title": "Immediate actions",
  "exercise.eyebrow": "Complete routines",
  "exercise.title": "Guided programs"
});
Object.assign(text.pt, {
  "evaluation.title": "Assistente multifatorial",
  "evaluation.text":
    "Responda uma pergunta por vez. ZENOVA vai cruzar com seu historico.",
  "evaluation.generate": "Gerar avaliacao",
  "tools.eyebrow": "Faca algo agora",
  "tools.title": "Acoes imediatas",
  "exercise.eyebrow": "Rotinas completas",
  "exercise.title": "Programas guiados"
});

const multifactorStorage = {
  context: "zenovaMultifactorContext",
  signature: "zenovaMultifactorSignature"
};

let multifactorSubmitPending = false;
let multifactorEvolutionRange = "today";
let assessmentWizardStep = 0;
let assessmentWizardDirection = "next";

function mfClamp(value, min = 0, max = 100) {
  return Math.min(max, Math.max(min, Number.isFinite(value) ? value : min));
}

function mfPercent(value) {
  return `${Math.round(mfClamp(value))}%`;
}

function mfAverage(items, selector) {
  return averageNumber(items, selector) ?? 0;
}

function mfSafeText(value) {
  return String(value || "").trim();
}

function mfKeyText(value) {
  return normalize(mfSafeText(value));
}

function mfTodayWindow(days) {
  return Array.from({ length: days }, (_, index) => {
    const date = new Date();
    date.setDate(date.getDate() - index);
    return date.toISOString().slice(0, 10);
  });
}

const assessmentVisualConfig = [
  {
    id: "stressType",
    title: "Donde sientes mas presion",
    hint: "Elige el contexto que pesa mas hoy.",
    control: "stressType",
    type: "card",
    options: [
      { value: "academico", symbol: "A", label: "Academico", detail: "Tareas, examenes, clases o proyectos." },
      { value: "laboral", symbol: "L", label: "Laboral", detail: "Trabajo, entregas, reuniones o carga externa." },
      { value: "familiar", symbol: "F", label: "Familiar", detail: "Convivencia, conversaciones o responsabilidades." },
      { value: "social", symbol: "S", label: "Social", detail: "Presion grupal, comparacion o relaciones." },
      { value: "financiero", symbol: "$", label: "Financiero", detail: "Pagos, dinero, recursos o incertidumbre." }
    ]
  },
  {
    id: "stressLevel",
    title: "Presion actual",
    hint: "ZENOVA lo convierte en carga emocional.",
    control: "stressLevel",
    type: "card",
    options: [
      { value: 2, symbol: "B", label: "Ligera", detail: "Puedo avanzar con pequenos ajustes." },
      { value: 5, symbol: "M", label: "Media", detail: "Necesito ordenar y bajar ritmo." },
      { value: 8, symbol: "A", label: "Alta", detail: "Estoy saturado y necesito regularme." }
    ]
  },
  {
    id: "sleepHours",
    title: "Descanso reciente",
    hint: "Solo se usa como indicador, no como diagnostico.",
    control: "sleepHours",
    type: "card",
    options: [
      { value: 8, symbol: "R", label: "Reparador", detail: "Dormi bien o me siento recuperado." },
      { value: 6, symbol: "I", label: "Irregular", detail: "Descanse, pero no del todo." },
      { value: 4, symbol: "P", label: "Pobre", detail: "Dormir fue dificil o insuficiente." }
    ]
  },
  {
    id: "anxietyLevel",
    title: "Activacion mental",
    hint: "Pensamientos, nervios o agitacion corporal.",
    control: "anxietyLevel",
    type: "card",
    options: [
      { value: 2, symbol: "C", label: "Calma", detail: "Mi mente esta relativamente estable." },
      { value: 5, symbol: "V", label: "Alerta", detail: "Hay inquietud, pero puedo decidir." },
      { value: 8, symbol: "T", label: "Tensa", detail: "Me cuesta soltar pensamientos o tension." }
    ]
  },
  {
    id: "needNow",
    title: "Lo que necesitas ahora",
    hint: "La ruta de accion se ajusta a esta prioridad.",
    control: "needNow",
    type: "chip",
    options: [
      { value: "calma", label: "Calma" },
      { value: "orden", label: "Orden mental" },
      { value: "descanso", label: "Descanso" },
      { value: "enfoque", label: "Enfoque" }
    ]
  }
];

function mfNearestOption(options, value) {
  return options.reduce((best, option) => (Math.abs(Number(option.value) - value) < Math.abs(Number(best.value) - value) ? option : best), options[0]);
}

function mfSelectedValue(config) {
  const control = $(`#${config.control}`);
  if (!control) return config.options[0]?.value;
  if (control.tagName === "SELECT") return control.value;
  const numeric = Number(control.value);
  return mfNearestOption(config.options, numeric)?.value;
}

function mfSetControlValue(controlId, value) {
  const control = $(`#${controlId}`);
  if (!control) return;
  control.value = value;
  control.dispatchEvent(new Event("input", { bubbles: true }));
  const outputMap = {
    stressLevel: "stressOut",
    sleepHours: "sleepOut",
    anxietyLevel: "anxietyOut"
  };
  const output = outputMap[controlId] ? $(`#${outputMap[controlId]}`) : null;
  if (output) output.value = value;
}

function renderAssessmentVisualForm() {
  const container = $("#assessmentVisualFields");
  if (!container) return;
  assessmentWizardStep = Math.max(0, Math.min(assessmentWizardStep, assessmentVisualConfig.length - 1));
  const config = assessmentVisualConfig[assessmentWizardStep];
  const selected = String(mfSelectedValue(config));
  const progress = Math.round(((assessmentWizardStep + 1) / assessmentVisualConfig.length) * 100);
  const secondsLeft = Math.max(10, (assessmentVisualConfig.length - assessmentWizardStep - 1) * 10);
  const options =
    config.type === "chip"
      ? `<div class="assessment-chip-row wizard-options">${config.options
          .map(
            (option) => `
              <button class="assessment-chip ${String(option.value) === selected ? "is-selected" : ""}" type="button" data-mf-control="${config.control}" data-mf-value="${option.value}">
                ${escapeHtml(option.label)}
              </button>
            `
          )
          .join("")}</div>`
      : `<div class="assessment-choice-grid wizard-options">${config.options
          .map(
            (option) => `
              <button class="assessment-choice ${String(option.value) === selected ? "is-selected" : ""}" type="button" data-mf-control="${config.control}" data-mf-value="${option.value}">
                <span class="choice-symbol">${escapeHtml(option.symbol)}</span>
                <span>${escapeHtml(option.label)}</span>
              </button>
            `
          )
          .join("")}</div>`;
  container.innerHTML = `
    <div class="assessment-wizard-progress" aria-label="Progreso del asistente">
      <div>
        <strong>Paso ${assessmentWizardStep + 1} de ${assessmentVisualConfig.length}</strong>
        <span>${progress}%</span>
      </div>
      <div class="wizard-progress-track"><span style="--wizard-progress: ${progress}%"></span></div>
      <small>Tiempo restante aproximado: ${secondsLeft} segundos</small>
    </div>
    <section class="assessment-question assessment-question--wizard is-${assessmentWizardDirection}">
      <header>
        <div>
          <strong>${escapeHtml(config.title)}</strong>
          <small>${escapeHtml(config.hint)}</small>
        </div>
      </header>
      ${options}
    </section>
    <footer class="assessment-wizard-footer">
      <button class="ds-button ds-button--secondary" type="button" data-wizard-prev ${assessmentWizardStep === 0 ? "disabled" : ""}>Anterior</button>
      ${
        assessmentWizardStep === assessmentVisualConfig.length - 1
          ? `<button class="ds-button ds-button--primary" type="submit">Generar evaluación</button>`
          : `<button class="ds-button ds-button--primary" type="button" data-wizard-next>Siguiente</button>`
      }
    </footer>
  `;
  $$("[data-mf-control]").forEach((button) => {
    button.addEventListener("click", () => {
      mfSetControlValue(button.dataset.mfControl, button.dataset.mfValue);
      renderAssessmentVisualForm();
      if (assessmentWizardStep < assessmentVisualConfig.length - 1) {
        window.setTimeout(() => {
          assessmentWizardDirection = "next";
          assessmentWizardStep += 1;
          renderAssessmentVisualForm();
        }, 180);
      }
    });
  });
  $("[data-wizard-prev]")?.addEventListener("click", () => {
    assessmentWizardDirection = "prev";
    assessmentWizardStep -= 1;
    renderAssessmentVisualForm();
  });
  $("[data-wizard-next]")?.addEventListener("click", () => {
    assessmentWizardDirection = "next";
    assessmentWizardStep += 1;
    renderAssessmentVisualForm();
  });
}

function mfHabitCompletionRatio(days = 7) {
  if (!zenovaProductState.habits.length) return null;
  const dates = new Set(mfTodayWindow(days));
  const completed = zenovaProductState.habits.reduce(
    (sum, habit) => sum + (habit.completions || []).filter((day) => dates.has(day)).length,
    0
  );
  return completed / Math.max(1, zenovaProductState.habits.length * days);
}

function mfAgendaSlice(days = 7) {
  const today = todayIso();
  const limit = new Date();
  limit.setDate(limit.getDate() + days);
  const max = limit.toISOString().slice(0, 10);
  return zenovaLocal.activities.filter((item) => item.date >= today && item.date <= max);
}

function mfMostUsedTool() {
  const counts = new Map();
  const labelFor = {
    "checkin.created": "Check-in inteligente",
    "habit.completed": "Habitos",
    "habit.saved": "Habitos",
    "goal.progress": "Objetivos",
    "goal.saved": "Objetivos",
    "journal.created": "Diario",
    "agenda.saved": "Agenda",
    "evaluation.multifactor": "Test multifactor"
  };
  zenovaProductState.timeline.forEach((item) => {
    const label = labelFor[item.kind] || item.kind || "Actividad ZENOVA";
    counts.set(label, (counts.get(label) || 0) + 1);
  });
  dailyCenterState.favorites.forEach((item) => {
    const label = item.replace("library-", "Biblioteca: ").replace("-", " ");
    counts.set(label, (counts.get(label) || 0) + 1);
  });
  if (!counts.size) return { label: "Sin herramienta dominante", count: 0 };
  const [label, count] = [...counts.entries()].sort((a, b) => b[1] - a[1])[0];
  return { label, count };
}

function mfMainGoal() {
  const activeGoal = zenovaProductState.goals
    .slice()
    .sort((a, b) => (b.priority === "alta" ? 1 : 0) - (a.priority === "alta" ? 1 : 0) || goalProgress(a) - goalProgress(b))
    .find((goal) => goalProgress(goal) < 100);
  if (activeGoal) return { title: activeGoal.title, progress: goalProgress(activeGoal), source: "Objetivos personales" };
  if (dailyCenterState.goal?.title) return { title: dailyCenterState.goal.title, progress: 35, source: "Centro diario" };
  const profileGoal = getUserProfile().goal;
  if (profileGoal) return { title: profileGoal, progress: 25, source: "Perfil" };
  return { title: "Definir un objetivo de bienestar", progress: 0, source: "Pendiente" };
}

function buildMultifactorContext(data = {}) {
  const profile = calculateProfile(data);
  const entries = state.entries.slice(-30);
  const recentEntries = entries.slice(-7);
  const previousEntries = entries.slice(-14, -7);
  const checkins = zenovaProductState.checkins.slice(-14);
  const journals = zenovaProductState.journals.slice(-10);
  const agenda = mfAgendaSlice(7);
  const todayAgenda = agenda.filter((item) => item.date === todayIso());
  const habitRatio = mfHabitCompletionRatio(7);
  const doneToday = zenovaProductState.habits.filter((habit) => habit.completions?.includes(todayIso())).length;
  const strongestHabit = zenovaProductState.habits
    .slice()
    .sort((a, b) => habitStreak(b) - habitStreak(a) || (b.completions?.length || 0) - (a.completions?.length || 0))[0];
  const attentionHabit =
    zenovaProductState.habits.find((habit) => !(habit.completions || []).includes(todayIso())) ||
    zenovaProductState.habits.slice().sort((a, b) => (a.completions?.length || 0) - (b.completions?.length || 0))[0];
  const mainGoal = mfMainGoal();
  const goalAverage = Math.round(averageNumber(zenovaProductState.goals, goalProgress) || mainGoal.progress || 0);
  const avgStress = mfAverage(recentEntries, (entry) => Number(entry.stress));
  const prevStress = mfAverage(previousEntries, (entry) => Number(entry.stress));
  const avgSleep = mfAverage(recentEntries, (entry) => Number(entry.sleep));
  const latestCheck = latestCheckin();
  const trendDelta = recentEntries.length && previousEntries.length ? avgStress - prevStress : 0;
  const stressLoad = mfClamp(Math.round(data.stressLevel * 6.2 + data.anxietyLevel * 4.4 + Math.max(0, 6 - data.sleepHours) * 5 + trendDelta * 6));
  const restFromCheckin =
    latestCheck?.selections?.sleepQuality === "reparador" ? 92 : latestCheck?.selections?.sleepQuality === "pobre" ? 38 : null;
  const restScore = mfClamp(Math.round(((data.sleepHours / 8) * 78 + (avgSleep ? avgSleep * 4 : 18) + (restFromCheckin ?? 62)) / 2.2));
  const consistencyScore =
    habitRatio === null ? mfClamp(entries.length * 8 + checkins.length * 6 + journals.length * 5, 18, 58) : Math.round(habitRatio * 100);
  const organizationScore = mfClamp(Math.round(goalAverage * 0.42 + Math.min(agenda.length, 6) * 8 + (data.needNow === "orden" ? 10 : 4)));
  const baseWellbeing = computeWellbeingIndex();
  const testWellbeing = mfClamp(100 - stressLoad * 0.68 + restScore * 0.28 + consistencyScore * 0.12);
  const wellbeingScore = mfClamp(Math.round(baseWellbeing * 0.36 + testWellbeing * 0.38 + organizationScore * 0.14 + consistencyScore * 0.12));
  const weeklyProgress = mfClamp(
    Math.round(
      (trendDelta < -0.5 ? 28 : trendDelta > 0.5 ? 8 : 18) +
        consistencyScore * 0.28 +
        goalAverage * 0.22 +
        Math.min(zenovaProductState.timeline.length, 12) * 2
    )
  );
  const mostUsedTool = mfMostUsedTool();
  const journalText = mfKeyText(journals.map((entry) => `${entry.text || ""} ${(entry.tags || []).join(" ")} ${(entry.emotions || []).join(" ")}`).join(" "));
  const availability = {
    test: Boolean(data.stressType),
    history: entries.length + checkins.length,
    habits: zenovaProductState.habits.length,
    goals: zenovaProductState.goals.length || dailyCenterState.goal?.title ? 1 : 0,
    agenda: agenda.length,
    journal: journals.length,
    tools: zenovaProductState.timeline.length + dailyCenterState.favorites.length
  };
  const context = {
    generatedAt: new Date().toISOString(),
    data,
    profile,
    userProfile: getUserProfile(),
    entries,
    recentEntries,
    previousEntries,
    checkins,
    latestCheckin: latestCheck,
    habits: zenovaProductState.habits,
    goals: zenovaProductState.goals,
    agenda,
    todayAgenda,
    journals,
    journalText,
    libraryUsage: dailyCenterState.favorites.filter((item) => item.startsWith("library-")),
    timeline: zenovaProductState.timeline.slice(0, 40),
    metrics: {
      wellbeingScore,
      stressLoad,
      restScore,
      consistencyScore,
      organizationScore,
      weeklyProgress,
      avgStress,
      avgSleep,
      trendDelta,
      doneToday,
      habitTotal: zenovaProductState.habits.length,
      agendaToday: todayAgenda.length,
      goalAverage
    },
    highlights: {
      mainGoal,
      strongestHabit: strongestHabit ? { title: strongestHabit.title, streak: habitStreak(strongestHabit), category: strongestHabit.category } : null,
      attentionHabit: attentionHabit ? { title: attentionHabit.title, category: attentionHabit.category } : null,
      mostUsedTool
    },
    availability
  };
  context.weights = buildMultifactorWeights(context);
  context.insights = buildDetectedInsights(context);
  context.actions = buildActionRoute(context);
  context.scenarios = buildWhatIfScenarios(context);
  context.futureAIContext = buildFutureAIContext(context);
  return context;
}

function buildMultifactorWeights(context) {
  const base = [
    { key: "test", label: "Test de hoy", raw: 16, reason: `Presion ${context.data.stressLevel}/10, ansiedad ${context.data.anxietyLevel}/10 y descanso ${context.data.sleepHours} h.` },
    { key: "history", label: "Historial emocional", raw: context.availability.history ? 20 : 6, reason: `${context.entries.length} registros y ${context.checkins.length} check-ins recientes.` },
    { key: "habits", label: "Habitos", raw: context.availability.habits ? 20 : 6, reason: `${context.metrics.doneToday}/${context.metrics.habitTotal || 0} habitos completados hoy.` },
    { key: "goals", label: "Objetivos", raw: context.availability.goals ? 16 : 5, reason: `${context.highlights.mainGoal.title} con ${context.highlights.mainGoal.progress}% de avance estimado.` },
    { key: "agenda", label: "Agenda", raw: context.availability.agenda ? 12 : 4, reason: `${context.metrics.agendaToday} acciones programadas para hoy.` },
    { key: "journal", label: "Diario y emociones", raw: context.availability.journal ? 10 : 3, reason: `${context.journals.length} entradas recientes usadas como contexto.` },
    { key: "tools", label: "Uso de herramientas", raw: context.availability.tools ? 10 : 4, reason: `${context.highlights.mostUsedTool.label} es la herramienta con mas senales.` }
  ];
  const total = base.reduce((sum, item) => sum + item.raw, 0) || 1;
  return base.map((item) => ({ ...item, value: Math.round((item.raw / total) * 100) }));
}

function buildDetectedInsights(context) {
  const insights = [];
  const { metrics, data, highlights } = context;
  const goalText = mfKeyText(highlights.mainGoal.title);
  const journal = context.journalText;
  if (!context.availability.history && !context.availability.habits && !context.availability.goals) {
    insights.push({
      title: "Lectura inicial con poca historia",
      detail: `Como aun hay pocos datos guardados, ZENOVA peso mas tu test actual: ${data.stressLevel}/10 de presion, ${data.anxietyLevel}/10 de activacion y ${data.sleepHours} h de descanso.`
    });
  }
  if (metrics.stressLoad >= 70 && metrics.restScore < 62) {
    insights.push({
      title: "Carga alta con recuperacion baja",
      detail: "La combinacion de presion, activacion mental y descanso sugiere empezar por regulacion fisica antes de tareas exigentes."
    });
  } else if (metrics.stressLoad <= 42 && metrics.consistencyScore >= 55) {
    insights.push({
      title: "Base estable para mantener",
      detail: "Tu carga actual no aparece alta y la continuidad registrada permite usar acciones preventivas, no intensivas."
    });
  }
  if (metrics.trendDelta > 0.8) {
    insights.push({
      title: "Tendencia reciente en aumento",
      detail: `El promedio semanal de estres subio aproximadamente ${metrics.trendDelta.toFixed(1)} puntos frente al periodo anterior.`
    });
  } else if (metrics.trendDelta < -0.8) {
    insights.push({
      title: "Mejora reciente detectada",
      detail: `El estres promedio bajo cerca de ${Math.abs(metrics.trendDelta).toFixed(1)} puntos; conviene repetir la accion que mas te funciono.`
    });
  }
  if (highlights.strongestHabit) {
    insights.push({
      title: "Habito fuerte identificado",
      detail: `${highlights.strongestHabit.title} destaca con una continuidad de ${highlights.strongestHabit.streak} dia(s). Puede usarse como ancla del dia.`
    });
  }
  if (highlights.attentionHabit && metrics.habitTotal) {
    insights.push({
      title: "Habito que necesita atencion",
      detail: `${highlights.attentionHabit.title} aparece como rutina pendiente o menos constante; una version de 3 minutos seria suficiente hoy.`
    });
  }
  if (context.todayAgenda.length >= 2 || data.needNow === "orden") {
    insights.push({
      title: "Orden mental como prioridad practica",
      detail: `Hay ${context.todayAgenda.length} elemento(s) en agenda y tu necesidad marcada fue ${data.needNow}; conviene cerrar con una lista accionable corta.`
    });
  }
  if (/familia|discusion|pareja|social|amigos/.test(journal) || ["familiar", "social"].includes(data.stressType)) {
    insights.push({
      title: "Contexto relacional sensible",
      detail: "Las senales sociales o familiares sugieren priorizar comunicacion lenta, limites claros y una pausa antes de responder."
    });
  }
  if (/dorm|sueno|descanso/.test(goalText) || data.needNow === "descanso") {
    insights.push({
      title: "Objetivo orientado al descanso",
      detail: "Tu meta o necesidad actual apunta a recuperar energia; las recomendaciones reducen estimulos y evitan tareas largas al final del dia."
    });
  }
  if (/enfoque|estudi|concentr|proyecto/.test(goalText) || data.needNow === "enfoque" || data.stressType === "academico") {
    insights.push({
      title: "Enfoque con carga cognitiva",
      detail: "La ruta recomienda bloques breves porque el contexto academico o de concentracion responde mejor a avances visibles y cortos."
    });
  }
  return insights.slice(0, 5);
}

function buildActionRoute(context) {
  const actions = [];
  const add = (action) => {
    if (!actions.some((item) => item.title === action.title)) actions.push(action);
  };
  const { metrics, data, highlights } = context;
  const goalText = mfKeyText(highlights.mainGoal.title);
  if (metrics.stressLoad >= 62 || data.needNow === "calma") {
    add({
      title: "Pausa de regulacion 4-4-6",
      duration: "3 min",
      description: "Haz una ronda guiada de respiracion y espera 60 segundos antes de decidir la siguiente tarea.",
      reason: "Se eligio porque tu activacion mental pesa en el resultado.",
      target: "#herramientas",
      image: "assets/meditation.png"
    });
  }
  if (metrics.restScore < 62 || /dorm|sueno|descanso/.test(goalText) || data.needNow === "descanso") {
    add({
      title: "Cierre de descanso sin pantalla",
      duration: "12 min",
      description: "Anota tres pendientes de manana, reduce estimulos y usa una respiracion lenta para cerrar el dia.",
      reason: "Conecta el descanso bajo con tu meta o necesidad actual.",
      target: "#biblioteca",
      image: "assets/zenova-summary.png"
    });
  }
  if (data.needNow === "orden" || context.todayAgenda.length >= 2 || metrics.organizationScore < 52) {
    add({
      title: "Descarga de pendientes",
      duration: "10 min",
      description: "Transforma ruido mental en tres prioridades y agenda una accion pequena, no toda la solucion.",
      reason: "Tu agenda y organizacion influyeron en la recomendacion.",
      target: "#agenda",
      image: "assets/brand-app-preview.png"
    });
  }
  if (data.needNow === "enfoque" || data.stressType === "academico" || /enfoque|estudi|concentr|proyecto/.test(goalText)) {
    add({
      title: "Bloque de enfoque visible",
      duration: "15 min",
      description: "Elige una tarea minima, avanza sin multitarea y registra una nota breve al terminar.",
      reason: "El contexto academico o de concentracion funciona mejor con avances pequenos.",
      target: "#plan-personal",
      image: "assets/brand-app-preview.png"
    });
  }
  if (metrics.consistencyScore < 45 && highlights.attentionHabit) {
    add({
      title: `Version corta de ${highlights.attentionHabit.title}`,
      duration: "4 min",
      description: "Completa solo una version minima del habito para sostener continuidad sin exigirte de mas.",
      reason: "El motor detecto una rutina pendiente o poco constante.",
      target: "#plan-personal",
      image: "assets/meditation.png"
    });
  }
  if (!context.journals.length || /familia|social|tristeza|ansiedad|confusion/.test(context.journalText)) {
    add({
      title: "Diario de tres lineas",
      duration: "4 min",
      description: "Escribe: hoy siento, puede venir de, mi siguiente paso pequeno es.",
      reason: "Ayuda cuando falta claridad emocional o hay poca informacion registrada.",
      target: "#plan-personal",
      image: "assets/logo-zenova.png"
    });
  }
  add({
    title: "Check-in de cierre",
    duration: "2 min",
    description: "Al terminar una accion, guarda un check-in para que la proxima recomendacion use tu evolucion real.",
    reason: "Mejora el historial que ZENOVA puede usar sin IA externa.",
    target: "#seguimiento",
    image: "assets/wave-bg.png"
  });
  return actions.slice(0, 4);
}

function buildWhatIfScenarios(context) {
  const { metrics } = context;
  return [
    {
      id: "habit",
      label: "completo un habito",
      title: "Si completas un habito hoy",
      detail: `La consistencia podria subir de ${mfPercent(metrics.consistencyScore)} a ${mfPercent(metrics.consistencyScore + 10)} y el resumen daria mas peso a continuidad que al test.`
    },
    {
      id: "agenda",
      label: "ordeno mi agenda",
      title: "Si agendas una pausa realista",
      detail: `La organizacion podria mejorar hasta ${mfPercent(metrics.organizationScore + 12)} porque reduces decisiones abiertas y evitas saturacion.`
    },
    {
      id: "rest",
      label: "duermo 7 h",
      title: "Si descansas cerca de 7 horas",
      detail: `El descanso pasaria de ${mfPercent(metrics.restScore)} a un rango cercano a ${mfPercent(metrics.restScore + 16)}, bajando la prioridad de regulacion intensa.`
    },
    {
      id: "journal",
      label: "escribo 3 lineas",
      title: "Si escribes una entrada breve",
      detail: "ZENOVA tendria mas contexto emocional y podria distinguir mejor entre estres academico, familiar, social o cansancio."
    }
  ];
}

function buildEvolutionItems(context, range = "today") {
  const { metrics } = context;
  if (range === "week") {
    return [
      { label: "Estres semanal", value: mfClamp(100 - metrics.stressLoad), detail: metrics.trendDelta > 0 ? "Necesita contencion esta semana." : "Se mantiene o mejora frente al periodo anterior." },
      { label: "Habitos", value: metrics.consistencyScore, detail: `${metrics.doneToday}/${metrics.habitTotal || 0} completados hoy y continuidad semanal calculada.` },
      { label: "Metas", value: metrics.goalAverage, detail: "Promedio de objetivos personales y subtareas marcadas." },
      { label: "Actividad ZENOVA", value: mfClamp(context.timeline.length * 8), detail: `${context.timeline.length} senales recientes entre herramientas y registros.` }
    ];
  }
  if (range === "month") {
    return [
      { label: "Historial disponible", value: mfClamp(context.entries.length * 4 + context.checkins.length * 5), detail: `${context.entries.length} registros emocionales y ${context.checkins.length} check-ins recientes.` },
      { label: "Diario emocional", value: mfClamp(context.journals.length * 12), detail: `${context.journals.length} entradas recientes aportan variedad contextual.` },
      { label: "Agenda y alarmas", value: mfClamp(context.agenda.length * 10), detail: `${context.agenda.length} acciones proximas relacionadas con bienestar.` },
      { label: "Bienestar estimado", value: metrics.wellbeingScore, detail: "Sintesis entre test, historial, habitos, metas y descanso." }
    ];
  }
  return [
    { label: "Bienestar hoy", value: metrics.wellbeingScore, detail: "Resultado combinado de test y contexto actual." },
    { label: "Carga de estres", value: mfClamp(100 - metrics.stressLoad), detail: "Mientras mas alta esta barra, menor carga detectada." },
    { label: "Descanso", value: metrics.restScore, detail: `${context.data.sleepHours} h reportadas y senales recientes de sueno.` },
    { label: "Organizacion", value: metrics.organizationScore, detail: `${context.todayAgenda.length} elemento(s) en agenda para hoy.` }
  ];
}

function buildFutureAIContext(context) {
  return {
    schemaVersion: 2,
    source: "zenova-rule-based-multifactor-assessment",
    noExternalAIUsed: true,
    generatedAt: context.generatedAt,
    executiveSummary: {
      wellbeingScore: context.metrics.wellbeingScore,
      stressLoad: context.metrics.stressLoad,
      restScore: context.metrics.restScore,
      consistencyScore: context.metrics.consistencyScore,
      organizationScore: context.metrics.organizationScore,
      weeklyProgress: context.metrics.weeklyProgress,
      mainGoal: context.highlights.mainGoal,
      strongestHabit: context.highlights.strongestHabit,
      habitNeedingAttention: context.highlights.attentionHabit,
      mostUsedTool: context.highlights.mostUsedTool
    },
    inputs: {
      test: context.data,
      userProfile: context.userProfile,
      emotionalHistory: context.entries,
      checkins: context.checkins,
      habits: context.habits,
      goals: context.goals,
      agenda: context.agenda,
      journalEntries: context.journals,
      libraryUsage: context.libraryUsage,
      toolsTimeline: context.timeline
    },
    trends: {
      avgStressRecent: context.metrics.avgStress,
      avgSleepRecent: context.metrics.avgSleep,
      stressTrendDelta: context.metrics.trendDelta,
      weeklyProgress: context.metrics.weeklyProgress
    },
    ruleBasedFindings: context.insights,
    recommendedActions: context.actions,
    explainabilityWeights: context.weights,
    whatIfScenarios: context.scenarios
  };
}

function renderExecutiveSummary(context) {
  const status = $("#executiveStatusPill");
  const title = $("#executiveSummaryTitle");
  const narrative = $("#executiveNarrative");
  if (status) {
    status.textContent = context.metrics.stressLoad >= 70 ? "Atencion alta" : context.metrics.wellbeingScore >= 70 ? "Buen avance" : "En seguimiento";
  }
  if (title) title.textContent = context.profile.profile || "Resumen Ejecutivo";
  const narrativeText =
    context.metrics.stressLoad >= 70
      ? `ZENOVA detecto una carga importante. La prioridad no es hacer mas, sino regular primero y elegir una accion pequena ligada a ${context.highlights.mainGoal.title}.`
      : `ZENOVA detecto un punto de partida manejable. Tu ruta de hoy se apoya en ${context.highlights.mostUsedTool.label} y en una accion concreta para ${context.highlights.mainGoal.title}.`;
  if (narrative) mfTypeText(narrative, narrativeText);
  const metrics = [
    { label: "Bienestar", value: context.metrics.wellbeingScore, detail: "Sintesis general", primary: true, goodHigh: true },
    { label: "Carga de estres", value: context.metrics.stressLoad, detail: "Mayor porcentaje significa mas presion", goodHigh: false },
    { label: "Descanso", value: context.metrics.restScore, detail: `${context.data.sleepHours} h reportadas`, goodHigh: true },
    { label: "Consistencia", value: context.metrics.consistencyScore, detail: `${context.metrics.doneToday}/${context.metrics.habitTotal || 0} habitos hoy`, goodHigh: true },
    { label: "Organizacion", value: context.metrics.organizationScore, detail: `${context.metrics.agendaToday} accion(es) hoy`, goodHigh: true },
    { label: "Progreso semanal", value: context.metrics.weeklyProgress, detail: "Tendencia y actividad reciente", goodHigh: true },
    { label: "Objetivo principal", value: context.highlights.mainGoal.progress, detail: context.highlights.mainGoal.title, goodHigh: true },
    {
      label: "Habito fuerte",
      value: context.highlights.strongestHabit ? mfClamp(context.highlights.strongestHabit.streak * 14) : 0,
      detail: context.highlights.strongestHabit ? context.highlights.strongestHabit.title : "Crea un habito para medir continuidad",
      goodHigh: true
    },
    {
      label: "Herramienta usada",
      value: context.highlights.mostUsedTool.count ? mfClamp(context.highlights.mostUsedTool.count * 16) : 0,
      detail: context.highlights.mostUsedTool.label,
      goodHigh: true
    }
  ];
  const grid = $("#executiveSummaryGrid");
  if (!grid) return;
  grid.innerHTML = metrics
    .map(
      (item) => `
        <article class="summary-metric-card ${item.primary ? "is-primary" : ""} ${item.goodHigh && item.value >= 72 ? "is-improved" : ""}">
          <small>${escapeHtml(item.label)}</small>
          <strong>${mfPercent(item.value)}</strong>
          <div class="metric-track"><span class="metric-fill" style="--value: ${mfPercent(item.value)}"></span></div>
          <span>${escapeHtml(item.detail)}</span>
        </article>
      `
    )
    .join("");
}

function renderDetectedInsights(context) {
  const list = $("#detectedInsightsList");
  if (!list) return;
  list.innerHTML = context.insights
    .map(
      (item, index) => `
        <article class="detected-insight">
          <span class="insight-marker">${String(index + 1).padStart(2, "0")}</span>
          <div>
            <strong>${escapeHtml(item.title)}</strong>
            <p>${escapeHtml(item.detail)}</p>
          </div>
        </article>
      `
    )
    .join("");
}

function renderActionRoute(context) {
  const list = $("#actionRouteList");
  if (!list) return;
  list.innerHTML = context.actions
    .map(
      (item) => `
        <article class="action-card">
          <img class="action-visual" src="${escapeHtml(item.image)}" alt="${escapeHtml(item.title)}" />
          <div>
            <h4>${escapeHtml(item.title)}</h4>
            <p>${escapeHtml(item.description)}</p>
            <footer>
              <span class="action-duration">${escapeHtml(item.duration)}</span>
              <button type="button" data-action-target="${escapeHtml(item.target)}">Abrir herramienta</button>
            </footer>
            <p>${escapeHtml(item.reason)}</p>
          </div>
        </article>
      `
    )
    .join("");
  $$("[data-action-target]").forEach((button) => button.addEventListener("click", () => goToSection(button.dataset.actionTarget)));
}

function renderFactorWeights(context) {
  const bars = $("#factorWeightBars");
  if (!bars) return;
  bars.innerHTML = context.weights
    .map(
      (item) => `
        <article class="factor-row">
          <header>
            <strong>${escapeHtml(item.label)}</strong>
            <span>${item.value}%</span>
          </header>
          <div class="factor-track"><span class="factor-fill" style="--value: ${item.value}%"></span></div>
          <p>${escapeHtml(item.reason)}</p>
        </article>
      `
    )
    .join("");
}

function renderWhatIf(context) {
  const buttons = $("#scenarioButtons");
  const output = $("#scenarioOutput");
  if (!buttons || !output) return;
  buttons.innerHTML = context.scenarios
    .map((item, index) => `<button class="${index === 0 ? "is-active" : ""}" type="button" data-scenario-id="${item.id}">Si ${escapeHtml(item.label)}</button>`)
    .join("");
  const showScenario = (id) => {
    const scenario = context.scenarios.find((item) => item.id === id) || context.scenarios[0];
    output.innerHTML = `<strong>${escapeHtml(scenario.title)}</strong><p>${escapeHtml(scenario.detail)}</p>`;
    $$("[data-scenario-id]").forEach((button) => button.classList.toggle("is-active", button.dataset.scenarioId === scenario.id));
  };
  $$("[data-scenario-id]").forEach((button) => button.addEventListener("click", () => showScenario(button.dataset.scenarioId)));
  showScenario(context.scenarios[0]?.id);
}

function renderEvolution(context, range = multifactorEvolutionRange) {
  const tabs = $("#evolutionTabs");
  const timeline = $("#evolutionTimeline");
  if (!timeline) return;
  multifactorEvolutionRange = range;
  if (tabs) {
    $$("[data-evolution-range]").forEach((button) => {
      button.classList.toggle("is-active", button.dataset.evolutionRange === range);
      button.onclick = () => renderEvolution(context, button.dataset.evolutionRange);
    });
  }
  timeline.innerHTML = buildEvolutionItems(context, range)
    .map(
      (item) => `
        <article class="evolution-item">
          <header>
            <strong>${escapeHtml(item.label)}</strong>
            <span>${mfPercent(item.value)}</span>
          </header>
          <div class="evolution-track"><span class="evolution-fill" style="--value: ${mfPercent(item.value)}"></span></div>
          <p>${escapeHtml(item.detail)}</p>
        </article>
      `
    )
    .join("");
}

function mfTypeText(node, textValue) {
  if (!node) return;
  window.clearInterval(node._mfTypeTimer);
  const textString = mfSafeText(textValue);
  if (node.dataset.lastMfText === textString && node.textContent) return;
  node.dataset.lastMfText = textString;
  node.textContent = "";
  let index = 0;
  node._mfTypeTimer = window.setInterval(() => {
    index += 2;
    node.textContent = textString.slice(0, index);
    if (index >= textString.length) {
      window.clearInterval(node._mfTypeTimer);
    }
  }, 14);
}

function persistMultifactorContext(context) {
  localStorage.setItem(multifactorStorage.context, JSON.stringify(context.futureAIContext));
  const signature = JSON.stringify({
    data: context.data,
    wellbeing: context.metrics.wellbeingScore,
    stress: context.metrics.stressLoad,
    habits: context.metrics.doneToday,
    goals: context.metrics.goalAverage,
    agenda: context.metrics.agendaToday
  });
  const previous = localStorage.getItem(multifactorStorage.signature);
  if (signature !== previous) {
    localStorage.setItem(multifactorStorage.signature, signature);
    ZenovaContextStore.push("evaluation.multifactor", context.futureAIContext);
  }
  if (multifactorSubmitPending) {
    const record = {
      id: crypto.randomUUID(),
      type: "multifactor",
      date: new Date().toISOString(),
      level: context.profile.profile,
      score: context.metrics.wellbeingScore,
      stressLoad: context.metrics.stressLoad,
      summary: context.insights[0]?.title || "Resumen multifactor",
      futureAIContext: context.futureAIContext
    };
    zenovaLocal.tests.push(record);
    zenovaLocal.tests = zenovaLocal.tests.slice(-30);
    saveCollection("zenovaDeepTests", zenovaLocal.tests);
    dbPut("tests", record);
    showZenovaToast("Resumen multifactor listo. La ruta de hoy se actualizo.", "success");
  }
}

function renderMultifactorAssessment(data = {}) {
  const context = buildMultifactorContext(data);
  $("#profileExperience")?.classList.add("hidden");
  renderExecutiveSummary(context);
  renderDetectedInsights(context);
  renderActionRoute(context);
  renderFactorWeights(context);
  renderWhatIf(context);
  renderEvolution(context);
  persistMultifactorContext(context);
  if (multifactorSubmitPending) {
    window.setTimeout(() => $("#executiveSummaryPanel")?.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
    multifactorSubmitPending = false;
  }
  return context;
}

function renderMultifactorEmpty() {
  const fallback = {
    stressType: $("#stressType")?.value || "academico",
    stressLevel: Number($("#stressLevel")?.value || 5),
    sleepHours: Number($("#sleepHours")?.value || 6),
    anxietyLevel: Number($("#anxietyLevel")?.value || 4),
    needNow: $("#needNow")?.value || "calma"
  };
  const context = buildMultifactorContext(fallback);
  renderExecutiveSummary(context);
  if ($("#executiveStatusPill")) $("#executiveStatusPill").textContent = "Pendiente";
  if ($("#executiveSummaryTitle")) $("#executiveSummaryTitle").textContent = "Completa el test para activar el motor";
  if ($("#executiveNarrative")) {
    window.clearInterval($("#executiveNarrative")._mfTypeTimer);
    $("#executiveNarrative").textContent =
      "ZENOVA ya puede leer tus datos guardados, pero necesita el test de hoy para generar una ruta personalizada.";
  }
  renderDetectedInsights({
    ...context,
    insights: [
      {
        title: "Motor listo para combinar datos",
        detail: "Al generar el resumen, ZENOVA cruzara test, historial, habitos, objetivos, agenda, diario y herramientas usadas."
      },
      {
        title: "Sin IA externa por ahora",
        detail: "La evaluacion funciona con reglas locales y deja un contexto estructurado para una futura integracion."
      }
    ]
  });
  renderActionRoute({
    ...context,
    actions: [
      {
        title: "Completar test multifactor",
        duration: "2 min",
        description: "Responde las tarjetas visuales para activar el resumen ejecutivo y la ruta de accion.",
        reason: "El test de hoy es el punto de entrada, pero no sera la unica fuente.",
        target: "#evaluacion",
        image: "assets/zenova-summary.png"
      }
    ]
  });
  renderFactorWeights(context);
  renderWhatIf(context);
  renderEvolution(context);
}

const baseRenderAssessmentMultifactor = renderAssessment;
renderAssessment = function renderAssessmentMultifactor(data) {
  baseRenderAssessmentMultifactor(data);
  renderAssessmentVisualForm();
  renderMultifactorAssessment(data);
};

const baseApplyLanguageMultifactor = applyLanguage;
applyLanguage = function applyLanguageMultifactor() {
  baseApplyLanguageMultifactor();
  renderAssessmentVisualForm();
  if (!state.lastAssessment) renderMultifactorEmpty();
};

const baseBuildOpenAIReadyContextMultifactor = ZenovaContextStore.buildOpenAIReadyContext.bind(ZenovaContextStore);
ZenovaContextStore.buildOpenAIReadyContext = function buildOpenAIReadyContextMultifactor() {
  let multifactor = null;
  try {
    multifactor = JSON.parse(localStorage.getItem(multifactorStorage.context) || "null");
  } catch (error) {
    multifactor = null;
  }
  return {
    ...baseBuildOpenAIReadyContextMultifactor(),
    multifactorEvaluation: multifactor,
    futureOpenAIContract: {
      ready: true,
      note: "Contexto estructurado para usar en una fase futura. Esta version no llama a ningun modelo externo."
    }
  };
};

const baseBuildOpenAIReadyContextZeninCore = ZenovaContextStore.buildOpenAIReadyContext.bind(ZenovaContextStore);
ZenovaContextStore.buildOpenAIReadyContext = function buildOpenAIReadyContextZeninCore() {
  return {
    ...baseBuildOpenAIReadyContextZeninCore(),
    zeninCognitiveCore: window.ZeninCognitive?.buildFutureOpenAIContext?.() || null
  };
};

function initMultifactorAssessment() {
  renderAssessmentVisualForm();
  $("#stressForm")?.addEventListener(
    "submit",
    () => {
      multifactorSubmitPending = true;
    },
    true
  );
  if (!state.lastAssessment) renderMultifactorEmpty();
}

initMultifactorAssessment();

// Minimal workspace layer: keeps the dashboard focused and moves secondary context into drawers.
Object.assign(text.es, {
  "nav.home": "Inicio",
  "nav.tools": "Herramientas",
  "nav.progress": "Progreso",
  "nav.resources": "Recursos",
  "nav.profile": "Perfil"
});
Object.assign(text.en, {
  "nav.home": "Home",
  "nav.tools": "Tools",
  "nav.progress": "Progress",
  "nav.resources": "Resources",
  "nav.profile": "Profile"
});
Object.assign(text.pt, {
  "nav.home": "Inicio",
  "nav.tools": "Ferramentas",
  "nav.progress": "Progresso",
  "nav.resources": "Recursos",
  "nav.profile": "Perfil"
});

const workspacePanelState = {
  active: "",
  activityFilter: "all",
  activitySearch: "",
  habitGoal: "stress",
  librarySearch: "",
  libraryCategory: "all",
  toolSearch: "",
  toolCategory: "all",
  checkinNote: "",
  premiumPlan: "Balance"
};

let experienceTimer = null;
let experienceRemaining = 0;
let experienceTotal = 0;
let toolExperienceSession = null;

const toolExperienceStats = JSON.parse(localStorage.getItem(ZenovaDesignSystem.storage.toolStats) || "{}");

function saveToolExperienceStats() {
  localStorage.setItem(ZenovaDesignSystem.storage.toolStats, JSON.stringify(toolExperienceStats));
}

function toolStatsFor(key) {
  if (!toolExperienceStats[key]) {
    toolExperienceStats[key] = {
      starts: 0,
      completions: 0,
      totalSeconds: 0,
      lastUsedAt: "",
      streak: 0,
      bestWeek: 0,
      completionDates: {},
      weekly: {},
      xp: 0
    };
  }
  return toolExperienceStats[key];
}

function weekKeyFromDate(date = new Date()) {
  const cursor = new Date(date);
  cursor.setHours(0, 0, 0, 0);
  cursor.setDate(cursor.getDate() - cursor.getDay() + 1);
  return cursor.toISOString().slice(0, 10);
}

function computeToolStreak(completionDates = {}) {
  let streak = 0;
  const cursor = new Date();
  while (completionDates[cursor.toISOString().slice(0, 10)]) {
    streak += 1;
    cursor.setDate(cursor.getDate() - 1);
  }
  return streak;
}

function registerToolStart(key, title) {
  const stats = toolStatsFor(key);
  stats.starts += 1;
  stats.lastUsedAt = new Date().toISOString();
  saveToolExperienceStats();
  ZenovaContextStore.push("tool.started", { key, title, stats });
}

function registerToolCompletion(key, data, secondsUsed) {
  const stats = toolStatsFor(key);
  const today = todayIso();
  const week = weekKeyFromDate();
  const completedSeconds = Math.max(15, Math.min(Number(secondsUsed) || data.duration, data.duration));
  stats.completions += 1;
  stats.totalSeconds += completedSeconds;
  stats.lastUsedAt = new Date().toISOString();
  stats.completionDates[today] = (stats.completionDates[today] || 0) + 1;
  stats.weekly[week] = (stats.weekly[week] || 0) + 1;
  stats.streak = computeToolStreak(stats.completionDates);
  stats.bestWeek = Math.max(stats.bestWeek || 0, ...Object.values(stats.weekly || {}));
  stats.xp += 20;
  saveToolExperienceStats();
  ZenovaContextStore.push("tool.completed", { key, title: data.title, secondsUsed: completedSeconds, stats });
  return stats;
}

function toolCompletionRate(stats) {
  return stats.starts ? Math.round((stats.completions / stats.starts) * 100) : 0;
}

function formatUsageDuration(seconds) {
  const safeSeconds = Math.max(0, Math.round(Number(seconds) || 0));
  if (safeSeconds < 60) return `${safeSeconds} s`;
  return `${Math.round(safeSeconds / 60)} min`;
}

function isToolFavorite(key) {
  return dailyCenterState.favorites.includes(`tool-${key}`);
}

function toggleToolFavorite(key) {
  const favoriteKey = `tool-${key}`;
  dailyCenterState.favorites = dailyCenterState.favorites.includes(favoriteKey)
    ? dailyCenterState.favorites.filter((entry) => entry !== favoriteKey)
    : [...dailyCenterState.favorites, favoriteKey];
  saveDailyState("favorites");
  renderDashboardRecommendations();
}

function vibrateSoft(pattern = 16) {
  if (navigator.vibrate) {
    try {
      navigator.vibrate(pattern);
    } catch (error) {}
  }
}

const workspaceWidgetCatalog = [
  { key: "wellbeing", icon: "B", title: "Bienestar", description: "Indice general y estado inmediato." },
  { key: "checkin", icon: "C", title: "Check-in", description: "Ultimo registro rapido." },
  { key: "habits", icon: "H", title: "Habitos", description: "Rutinas completadas hoy." },
  { key: "goals", icon: "O", title: "Objetivos", description: "Avance promedio de metas." },
  { key: "agenda", icon: "A", title: "Agenda", description: "Proximas actividades." },
  { key: "journal", icon: "D", title: "Diario", description: "Entradas emocionales guardadas." },
  { key: "progress", icon: "P", title: "Progreso", description: "Tendencia semanal resumida." },
  { key: "microtip", icon: "M", title: "Microtip", description: "Sugerencia contextual breve." },
  { key: "resources", icon: "R", title: "Recurso", description: "Recomendacion de biblioteca." }
];

const habitStarterKits = {
  sleep: {
    label: "Dormir mejor",
    habits: [
      { title: "Cierre nocturno sin pantalla", category: "sueno", time: "21:30" },
      { title: "Respiracion lenta antes de dormir", category: "respiracion", time: "22:00" },
      { title: "Preparar pendientes de manana", category: "orden", time: "20:30" }
    ]
  },
  stress: {
    label: "Reducir estres",
    habits: [
      { title: "Respiracion 4-4-6", category: "respiracion", time: "10:00" },
      { title: "Pausa activa suave", category: "movimiento", time: "16:00" },
      { title: "Diario de tres lineas", category: "orden", time: "19:00" }
    ]
  },
  focus: {
    label: "Mejorar concentracion",
    habits: [
      { title: "Bloque de enfoque de 15 minutos", category: "orden", time: "09:00" },
      { title: "Pausa sin pantalla", category: "respiracion", time: "11:30" },
      { title: "Cerrar una tarea visible", category: "orden", time: "18:00" }
    ]
  },
  order: {
    label: "Organizarme mejor",
    habits: [
      { title: "Descarga de pendientes", category: "orden", time: "08:30" },
      { title: "Elegir tres prioridades", category: "orden", time: "09:00" },
      { title: "Revision breve de agenda", category: "orden", time: "20:00" }
    ]
  },
  movement: {
    label: "Incrementar actividad fisica",
    habits: [
      { title: "Caminar cinco minutos", category: "movimiento", time: "12:30" },
      { title: "Estirar hombros y manos", category: "movimiento", time: "16:30" },
      { title: "Respirar despues de moverte", category: "respiracion", time: "17:00" }
    ]
  },
  custom: {
    label: "Otro objetivo",
    habits: [
      { title: "Check-in emocional", category: "orden", time: "09:00" },
      { title: "Pausa consciente", category: "respiracion", time: "15:00" },
      { title: "Nota de cierre", category: "orden", time: "20:00" }
    ]
  }
};

function workspaceVisibleWidgets() {
  const all = workspaceWidgetCatalog.map((item) => item.key);
  const order = zenovaProductState.widgets.order?.length ? zenovaProductState.widgets.order : all;
  const hidden = new Set(zenovaProductState.widgets.hidden || []);
  return order.filter((key) => all.includes(key) && !hidden.has(key)).slice(0, 4);
}

function workspaceSetVisibleWidgets(keys) {
  const all = workspaceWidgetCatalog.map((item) => item.key);
  const unique = [...new Set(keys)].filter((key) => all.includes(key)).slice(0, 4);
  zenovaProductState.widgets.order = [...unique, ...all.filter((key) => !unique.includes(key))];
  zenovaProductState.widgets.hidden = all.filter((key) => !unique.includes(key));
  saveWidgetSettings();
  renderDynamicWidgets();
  renderMinimalDashboard();
}

function minimalGoalData() {
  const activeGoal = zenovaProductState.goals.find((goal) => goalProgress(goal) < 100);
  if (activeGoal) return { title: activeGoal.title, progress: goalProgress(activeGoal) };
  if (dailyCenterState.goal?.title) return { title: dailyCenterState.goal.title, progress: 35 };
  const profile = getUserProfile();
  if (profile.goal) return { title: profile.goal, progress: 25 };
  return { title: "Definir meta", progress: 0 };
}

function minimalNextAction() {
  const latest = latestCheckin();
  const incompleteHabit = zenovaProductState.habits.find((habit) => !habit.completions?.includes(todayIso()));
  const todayActivity = zenovaLocal.activities.find((item) => item.date === todayIso());
  const avgStress = averageNumber(state.entries.slice(-5), (entry) => Number(entry.stress)) || 0;
  if (!latest && !state.entries.length) {
    return { title: "Completar check-in", reason: "Asi ZENOVA ajusta el estado de hoy.", panel: "checkin" };
  }
  if (avgStress >= 7 || latest?.selections?.stress === "alto") {
    return { title: "Pausa de regulacion", reason: "Tus senales recientes priorizan calma fisica.", panel: "actions" };
  }
  if (incompleteHabit) {
    return { title: `Completar ${incompleteHabit.title}`, reason: "Una version corta sostiene continuidad.", panel: "habits" };
  }
  if (todayActivity) {
    return { title: todayActivity.title, reason: `${todayActivity.time || "Hoy"} en tu agenda.`, panel: "activity" };
  }
  return { title: "Diario de tres lineas", reason: "Cierra el dia con una nota breve.", panel: "habits" };
}

function renderMinimalDashboard() {
  const profile = getUserProfile();
  const name = state.session?.name || profile.name || "Invitado";
  const wellbeing = computeWellbeingIndex();
  const action = minimalNextAction();
  const latest = latestCheckin();
  const stress = latest?.derived?.stress || state.lastAssessment?.stressLevel || "--";
  const sleep = latest?.derived?.sleep || state.lastAssessment?.sleepHours || "--";
  const upcoming = zenovaLocal.activities
    .filter((item) => item.date >= todayIso())
    .sort((a, b) => `${a.date} ${a.time || ""}`.localeCompare(`${b.date} ${b.time || ""}`))[0];
  const displayName = typeof name === "object" ? name[state.language] || "Invitado" : name;
  if ($("#dashboardUserName")) $("#dashboardUserName").textContent = displayName;
  if ($("#heroUserName")) $("#heroUserName").textContent = displayName;
  if ($("#minimalMoodLabel")) $("#minimalMoodLabel").textContent = latest?.selections?.mood || state.lastAssessment ? "En seguimiento" : "Listo";
  if ($("#minimalWellbeingScore")) $("#minimalWellbeingScore").textContent = wellbeing;
  if ($("#minimalWellbeingBar")) $("#minimalWellbeingBar").style.width = `${mfClamp(wellbeing)}%`;
  if ($("#minimalAgendaTitle")) $("#minimalAgendaTitle").textContent = upcoming?.title || "Sin actividad";
  if ($("#minimalAgendaMeta")) $("#minimalAgendaMeta").textContent = upcoming ? `${upcoming.date} ${upcoming.time || ""}` : "Hoy";
  if ($("#minimalNextAction")) $("#minimalNextAction").textContent = action.title;
  if ($("#minimalNextReason")) $("#minimalNextReason").textContent = action.reason;
  if ($("#minimalStateTags")) {
    $("#minimalStateTags").innerHTML = [
      `Estres ${stress}/10`,
      `Descanso ${sleep} h`,
      `${zenovaProductState.habits.filter((habit) => habit.completions?.includes(todayIso())).length}/${zenovaProductState.habits.length || 0} habitos`
    ]
      .map((item) => `<span>${escapeHtml(item)}</span>`)
      .join("");
  }
  renderDashboardRecommendations();
  const button = $("#minimalNextActionBtn");
  if (button) {
    button.onclick = () => {
      const next = minimalNextAction();
      if (next.panel) openWorkspacePanel(next.panel);
      if (next.target) goToSection(next.target);
    };
  }
}

function setWorkspacePanelFooter(html = "") {
  const footer = $("#workspacePanelFooter");
  if (!footer) return;
  footer.innerHTML = html;
  footer.hidden = !html;
}

function closeWorkspacePanel() {
  window.clearInterval(experienceTimer);
  experienceTimer = null;
  $("#workspacePanel")?.classList.remove("is-open");
  $("#workspacePanelBackdrop")?.classList.remove("is-open");
  document.body.classList.remove("workspace-panel-open");
  window.setTimeout(() => {
    if ($("#workspacePanel") && !$("#workspacePanel").classList.contains("is-open")) $("#workspacePanel").hidden = true;
    if ($("#workspacePanelBackdrop") && !$("#workspacePanelBackdrop").classList.contains("is-open")) $("#workspacePanelBackdrop").hidden = true;
  }, 340);
}

function openWorkspacePanel(kind) {
  workspacePanelState.active = kind;
  const panel = $("#workspacePanel");
  const backdrop = $("#workspacePanelBackdrop");
  if (!panel || !backdrop) return;
  panel.hidden = false;
  backdrop.hidden = false;
  document.body.classList.add("workspace-panel-open");
  requestAnimationFrame(() => {
    panel.classList.add("is-open");
    backdrop.classList.add("is-open");
  });
  $("#workspacePanelBody").innerHTML = "";
  setWorkspacePanelFooter("");
  renderWorkspacePanel(kind);
}

function workspacePanelMeta(kind) {
  if (kind.startsWith("action-")) return ["Accion inmediata", "Aprende haciendo"];
  if (kind.startsWith("program-")) return ["Programa guiado", "Rutina inmersiva"];
  if (kind.startsWith("resource-")) return ["Recurso", "Detalle compacto"];
  return {
    activity: ["Centro de actividad", "Hoy y proximos pasos"],
    widgets: ["Personalizar Dashboard", "Maximo cuatro widgets visibles"],
    checkin: ["Check-in Inteligente", "Registro rapido + ZENIN"],
    zenin: ["ZENIN", "Asistente inteligente de bienestar"],
    actions: ["Herramientas", "Acciones inmediatas"],
    programs: ["Programas guiados", "Catalogo compacto"],
    habits: ["Habitos", "Asistente simple"],
    goals: ["Objetivos", "Metas y avance"],
    agenda: ["Agenda", "Proximas acciones"],
    library: ["Recursos", "Biblioteca compacta"],
    stats: ["Progreso", "Indicadores clave"],
    profile: ["Perfil", "Contexto personal"],
    premium: ["ZENOVA Premium", "Fase beta"],
    settings: ["Configuracion", "Preferencias"]
  }[kind] || ["ZENOVA", "Panel"];
}

function renderWorkspacePanel(kind = workspacePanelState.active) {
  const [title, eyebrow] = workspacePanelMeta(kind);
  $("#workspacePanelTitle").textContent = title;
  $("#workspacePanelEyebrow").textContent = eyebrow;
  const body = $("#workspacePanelBody");
  if (!body) return;
  if (kind.startsWith("action-")) return renderActionExperiencePanel(body, kind);
  if (kind.startsWith("program-")) return renderProgramExperiencePanel(body, kind);
  if (kind.startsWith("resource-")) return renderResourceDetailWorkspacePanel(body, kind.replace("resource-", ""));
  if (kind === "activity") return renderActivityPanel(body);
  if (kind === "widgets") return renderWidgetPanel(body);
  if (kind === "checkin") return renderCheckinWorkspacePanel(body);
  if (kind === "zenin") return renderZeninWorkspacePanel(body);
  if (kind === "actions") return renderActionsWorkspacePanel(body);
  if (kind === "programs") return renderProgramsWorkspacePanel(body);
  if (kind === "habits") return renderHabitPanel(body);
  if (kind === "goals") return renderGoalsWorkspacePanel(body);
  if (kind === "agenda") return renderAgendaWorkspacePanel(body);
  if (kind === "library") return renderLibraryWorkspacePanel(body);
  if (kind === "stats") return renderStatsWorkspacePanel(body);
  if (kind === "profile") return renderProfileWorkspacePanel(body);
  if (kind === "premium") return renderPremiumWorkspacePanel(body);
  return renderSettingsWorkspacePanel(body);
}

function panelTimelineItem(item) {
  return `
    <article class="workspace-timeline-item">
      <span>${escapeHtml(item.icon || "•")}</span>
      <div>
        <strong>${escapeHtml(item.title)}</strong>
        <p>${escapeHtml(item.body || "")}</p>
      </div>
    </article>
  `;
}

function panelCloseFooter(label = "Cerrar") {
  setWorkspacePanelFooter(`<button class="ds-button ds-button--secondary" type="button" data-panel-close>${escapeHtml(label)}</button>`);
  $("[data-panel-close]")?.addEventListener("click", closeWorkspacePanel);
}

function workspaceIcon(label = "") {
  return String(label).trim().slice(0, 1).toUpperCase() || "Z";
}

function renderCompactLaunchCard(item) {
  return `
    <article class="compact-launch-card">
      <span>${escapeHtml(item.icon || workspaceIcon(item.title))}</span>
      <div>
        <strong>${escapeHtml(item.title)}</strong>
        <small>${escapeHtml(item.meta || "")}</small>
      </div>
      <button class="ds-button ds-button--primary" type="button" data-panel-open="${escapeHtml(item.panel)}">${escapeHtml(item.action || "Iniciar")}</button>
    </article>
  `;
}

function bindPanelOpenButtons() {
  $$("[data-panel-open]").forEach((button) => {
    button.onclick = () => {
      openWorkspacePanel(button.dataset.panelOpen);
    };
  });
}

function checkinOptionFor(key, value) {
  const group = checkinOptionData.find((item) => item.key === key);
  return group?.options.find((option) => option.value === value) || null;
}

function smartCheckinOptions(group) {
  if (group.options) return group.options;
  return (group.values || []).map((value) => checkinOptionFor(group.key, value)).filter(Boolean);
}

function renderSmartCheckinGroup(group, compact = false) {
  return `
    <article class="smart-checkin-group ${compact ? "is-compact" : ""}">
      <div>
        <strong>${escapeHtml(group.label)}</strong>
        ${group.hint ? `<small>${escapeHtml(group.hint)}</small>` : ""}
      </div>
      <div class="smart-choice-row">
        ${smartCheckinOptions(group)
          .map(
            (option) => `
              <button
                class="${zenovaProductState.checkinDraft[group.key] === option.value ? "is-active" : ""}"
                type="button"
                data-panel-checkin-field="${group.key}"
                data-panel-checkin-value="${option.value}"
              >
                ${escapeHtml(option.label)}
              </button>
            `
          )
          .join("")}
      </div>
    </article>
  `;
}

function renderCheckinWorkspacePanel(body) {
  const requiredKeys = smartCheckinPrimaryGroups.map((group) => group.key);
  const selectedCount = requiredKeys.filter((key) => zenovaProductState.checkinDraft[key]).length;
  const note = workspacePanelState.checkinNote || "";
  body.innerHTML = `
    <section class="smart-checkin-panel" aria-label="Check-in Inteligente">
      <div class="smart-checkin-hero">
        <span>CI</span>
        <div>
          <strong>Check-in Inteligente</strong>
          <p>Completa un registro rapido o conversa con ZENIN para obtener un analisis mas preciso.</p>
        </div>
      </div>
      <div class="checkin-mode-grid" aria-label="Modos de uso">
        <button class="is-active" type="button" data-checkin-mode="quick">
          <strong>Registro rapido</strong>
          <small>Botones, sin escribir, menos de un minuto.</small>
        </button>
        <button type="button" data-panel-open="zenin" data-checkin-mode="zenin">
          <strong>Hablar con ZENIN</strong>
          <small>Panel listo para OpenAI, sin respuestas falsas.</small>
        </button>
      </div>
      <div class="smart-checkin-progress" aria-live="polite">
        <span>${selectedCount}/${requiredKeys.length}</span>
        <div>
          <strong>Senales clave</strong>
          <small>${selectedCount === requiredKeys.length ? "Listo para guardar." : "Selecciona lo que aplique ahora."}</small>
        </div>
      </div>
      <div class="smart-checkin-grid">
        ${smartCheckinPrimaryGroups.map((group) => renderSmartCheckinGroup(group)).join("")}
      </div>
      <details class="smart-context-details">
        <summary>Agregar contexto sin hacerlo largo</summary>
        <div class="smart-context-grid">
          ${smartCheckinContextGroups.map((group) => renderSmartCheckinGroup(group, true)).join("")}
        </div>
      </details>
      <label class="ds-field panel-note-field smart-checkin-note">
        <span>Quieres contarle algo mas a ZENIN?</span>
        <textarea
          class="ds-textarea"
          id="panelCheckinNote"
          rows="3"
          maxlength="360"
          placeholder="Hoy tuve un examen importante y dormi poco."
        >${escapeHtml(note)}</textarea>
      </label>
      <p class="structured-hint">Este registro se guarda como historial estructurado y queda preparado para la futura integracion con ZENIN y OpenAI.</p>
    </section>
  `;
  setWorkspacePanelFooter(`
    <button class="ds-button ds-button--secondary" id="panelCheckinCancel" type="button">Cancelar</button>
    <button class="ds-button ds-button--secondary" id="panelCheckinSave" type="button">Guardar</button>
    <button class="ds-button ds-button--primary" id="panelCheckinSaveClose" type="button">Guardar y cerrar</button>
  `);
  $$("[data-panel-checkin-field]").forEach((button) => {
    button.addEventListener("click", () => {
      workspacePanelState.checkinNote = $("#panelCheckinNote")?.value.trim() || workspacePanelState.checkinNote;
      zenovaProductState.checkinDraft[button.dataset.panelCheckinField] = button.dataset.panelCheckinValue;
      renderCheckinWorkspacePanel(body);
    });
  });
  $("#panelCheckinNote")?.addEventListener("input", (event) => {
    workspacePanelState.checkinNote = event.target.value;
  });
  bindPanelOpenButtons();
  const savePanelCheckin = (closeAfter = false) => {
    const finalNote = $("#panelCheckinNote")?.value.trim() || workspacePanelState.checkinNote.trim();
    persistSmartCheckin({ ...zenovaProductState.checkinDraft }, finalNote);
    workspacePanelState.checkinNote = "";
    $("#panelCheckinNote") && ($("#panelCheckinNote").value = "");
    renderMinimalDashboard();
    showZenovaToast("Check-in guardado como historial estructurado.", "success");
    if (closeAfter) closeWorkspacePanel();
  };
  $("#panelCheckinCancel")?.addEventListener("click", closeWorkspacePanel);
  $("#panelCheckinSave")?.addEventListener("click", () => savePanelCheckin(false));
  $("#panelCheckinSaveClose")?.addEventListener("click", () => savePanelCheckin(true));
}

function renderZeninAvatarShell(modifier = "mini", state = "listening", expression = "calm") {
  return `
    <div class="zenin-live-avatar zenin-live-avatar--${escapeHtml(modifier)}" data-zenin-avatar data-zenin-state="${escapeHtml(state)}" data-zenin-expression="${escapeHtml(expression)}" role="img" aria-label="ZENIN ${escapeHtml(state)}">
      <div class="zenin-avatar-aura" aria-hidden="true"></div>
      <div class="zenin-avatar-particles" aria-hidden="true"><i></i><i></i><i></i></div>
      <div class="zenin-avatar-hologram" aria-hidden="true"><span></span><span></span><span></span></div>
      <div class="zenin-avatar-antenna" aria-hidden="true"><i></i></div>
      <div class="zenin-avatar-head">
        <div class="zenin-avatar-face">
          <span class="zenin-eye zenin-eye--left"></span>
          <span class="zenin-eye zenin-eye--right"></span>
          <span class="zenin-mouth"></span>
        </div>
      </div>
      <div class="zenin-avatar-body">
        <span class="zenin-core"></span>
        <span class="zenin-arm zenin-arm--left"></span>
        <span class="zenin-arm zenin-arm--right"></span>
        <span class="zenin-foot zenin-foot--left"></span>
        <span class="zenin-foot zenin-foot--right"></span>
      </div>
    </div>
  `;
}

function renderZeninWorkspacePanel(body) {
  body.innerHTML = `
    <section class="zenin-assistant-panel zenin-assistant-panel--launch" aria-label="Entrada al espacio ZENIN">
      <div class="zenin-assistant-card zenin-assistant-card--portal">
        <div class="zenin-assistant-profile">
          ${renderZeninAvatarShell("mini", "greeting", "happy")}
          <div>
            <strong>ZENIN</strong>
            <small>Tu espacio de conversacion inteligente</small>
          </div>
        </div>
        <p class="structured-hint">Entra al lugar donde vive ZENIN. La conversacion se abre en una experiencia inmersiva con memoria local, avatar vivo, sugerencias y herramientas dentro del mismo espacio.</p>
        <div class="zenin-readiness-row" aria-label="Preparado para futuras funciones">
          <span>Avatar vivo</span>
          <span>Memoria local</span>
          <span>Historial</span>
          <span>OpenAI futuro</span>
        </div>
        <button class="ds-button ds-button--primary" type="button" data-zenin-room-open>Hablar con ZENIN</button>
      </div>
    </section>
  `;
  $("[data-zenin-room-open]")?.addEventListener("click", () => {
    closeWorkspacePanel();
    window.ZeninConversationExperience?.open?.();
  });
  panelCloseFooter("Cerrar ZENIN");
}

function renderActionsWorkspacePanel(body) {
  body.innerHTML = `
    <section class="panel-catalog">
      <div class="panel-compact-head">
        <span>4</span>
        <div>
          <strong>Acciones inmediatas</strong>
          <small>Ejercicios cortos para usar bajo demanda.</small>
        </div>
      </div>
      <div class="compact-launch-grid">
        ${Object.entries(immediateActionExperiences)
          .map(([key, item]) =>
            renderCompactLaunchCard({
              icon: item.icon,
              title: item.title,
              meta: `${formatTime(item.duration)} - ${item.objective}`,
              panel: key,
              action: "Comenzar"
            })
          )
          .join("")}
      </div>
    </section>
  `;
  panelCloseFooter();
  bindPanelOpenButtons();
}

function renderProgramsWorkspacePanel(body) {
  body.innerHTML = `
    <section class="panel-catalog">
      <div class="panel-compact-head">
        <span>6</span>
        <div>
          <strong>Programas guiados</strong>
          <small>Catalogo compacto con una rutina por panel.</small>
        </div>
      </div>
      <div class="compact-program-grid">
        ${Object.entries(guidedProgramExperiences)
          .map(([key, item]) =>
            renderCompactLaunchCard({
              icon: item.icon,
              title: item.title,
              meta: `${formatTime(item.duration)} - ${item.difficulty} - ${item.objective}`,
              panel: key,
              action: "Iniciar"
            })
          )
          .join("")}
      </div>
    </section>
  `;
  panelCloseFooter();
  bindPanelOpenButtons();
}

function resourcePanelId(key) {
  return `resource-${encodeURIComponent(key)}`;
}

function findResourceByKey(key) {
  const decoded = decodeURIComponent(key || "");
  return richResourceLibrary.find((item) => item.key === decoded) || selectContextResource() || richResourceLibrary[0];
}

function renderCompactResourceCard(item, badge = "") {
  return `
    <article class="compact-tool-card">
      <span>${escapeHtml(workspaceIcon(item.title))}</span>
      <div>
        <strong>${escapeHtml(item.title)}</strong>
        <small>${escapeHtml(badge || item.category)} - ${item.minutes} min</small>
      </div>
      <button class="ds-button ds-button--primary" type="button" data-panel-open="${resourcePanelId(item.key)}">Iniciar</button>
    </article>
  `;
}

function renderResourceDetailWorkspacePanel(body, key) {
  const item = findResourceByKey(key);
  $("#workspacePanelTitle").textContent = item.title;
  $("#workspacePanelEyebrow").textContent = "Recurso ZENOVA";
  body.innerHTML = `
    <section class="resource-detail-panel">
      <div class="resource-detail-visual" style="--library-image: url('${item.image}')">
        <span>${item.minutes} min</span>
      </div>
      <div class="program-meta">
        <small>${escapeHtml(item.category)}</small>
        <small>${escapeHtml(item.difficulty)}</small>
        <small>${escapeHtml(item.objective)}</small>
      </div>
      <div class="panel-checklist">
        ${item.tips.map((tip) => `<article><span>OK</span><strong>${escapeHtml(tip)}</strong></article>`).join("")}
      </div>
      <div class="panel-microcopy-grid">
        <article><small>Util cuando</small><strong>${escapeHtml(item.usefulWhen)}</strong></article>
        <article><small>Beneficio</small><strong>${escapeHtml(item.benefits)}</strong></article>
      </div>
    </section>
  `;
  setWorkspacePanelFooter(`
    <button class="ds-button ds-button--secondary" type="button" data-panel-open="library">Volver</button>
    <button class="ds-button ds-button--primary" type="button" id="resourceFavoriteBtn">${dailyCenterState.favorites.includes(`library-${item.key}`) ? "Favorito" : "Guardar favorito"}</button>
  `);
  bindPanelOpenButtons();
  $("#resourceFavoriteBtn")?.addEventListener("click", () => {
    const favoriteKey = `library-${item.key}`;
    dailyCenterState.favorites = dailyCenterState.favorites.includes(favoriteKey)
      ? dailyCenterState.favorites.filter((entry) => entry !== favoriteKey)
      : [...dailyCenterState.favorites, favoriteKey];
    saveDailyState("favorites");
    showZenovaToast("Biblioteca actualizada.", "success");
    renderResourceDetailWorkspacePanel(body, item.key);
  });
}

function filteredWorkspaceResources() {
  const query = mfKeyText(workspacePanelState.librarySearch);
  const category = workspacePanelState.libraryCategory;
  return richResourceLibrary.filter((item) => {
    const haystack = mfKeyText(`${item.title} ${item.summary} ${item.objective} ${item.tags.join(" ")} ${item.category}`);
    return (!query || haystack.includes(query)) && (category === "all" || item.category === category);
  });
}

const immediateActionExperiences = {
  "action-breathing": {
    title: "Respiracion guiada",
    duration: 120,
    icon: "R",
    objective: "Regular activacion",
    steps: ["Inhala 4 segundos", "Mantén 4 segundos", "Exhala 6 segundos", "Repite sin forzar"]
  },
  "action-grounding": {
    title: "Anclaje sensorial",
    duration: 180,
    icon: "A",
    objective: "Volver al presente",
    steps: ["Nombra 5 cosas que ves", "Reconoce 4 sensaciones", "Escucha 3 sonidos", "Elige una accion pequeña"]
  },
  "action-movement": {
    title: "Pausa activa",
    duration: 300,
    icon: "M",
    objective: "Soltar tension",
    steps: ["Rota hombros lento", "Estira manos", "Camina suave", "Respira antes de volver"]
  },
  "action-order": {
    title: "Orden mental",
    duration: 240,
    icon: "O",
    objective: "Reducir ruido mental",
    steps: ["Escribe pendientes", "Marca tres prioridades", "Elige una accion de 5 min", "Cierra lo demas por ahora"]
  },
  "action-meditation": {
    title: "Meditacion breve",
    duration: 360,
    icon: "M",
    objective: "Bajar ritmo interno",
    steps: ["Suelta hombros", "Observa el aire", "Cuenta cinco respiraciones", "Cierra con gratitud"]
  }
};

Object.assign(immediateActionExperiences["action-breathing"], {
  kind: "breathing",
  steps: ["Inhala", "Manten", "Exhala", "Repite"],
  miniGoals: ["Ritmo estable", "Hombros sueltos", "Exhalacion larga"],
  reward: "Tu ritmo cardiaco deberia comenzar a estabilizarse."
});

Object.assign(immediateActionExperiences["action-grounding"], {
  kind: "grounding",
  steps: ["Cinco cosas", "Cuatro sensaciones", "Tres sonidos", "Dos aromas", "Una accion"],
  miniGoals: ["Mirar", "Sentir", "Escuchar", "Elegir"],
  reward: "Tu atencion regreso a senales concretas."
});

Object.assign(immediateActionExperiences["action-movement"], {
  kind: "movement",
  steps: ["Hombros", "Manos", "Cuello", "Camina", "Respira"],
  miniGoals: ["Soltar cuello", "Activar cuerpo", "Volver suave"],
  reward: "Tu cuerpo recibio una pausa real."
});

Object.assign(immediateActionExperiences["action-order"], {
  kind: "order",
  steps: ["Descarga", "Agrupa", "Prioriza", "Cierra"],
  miniGoals: ["Pendientes visibles", "Una prioridad", "Menos ruido"],
  reward: "Convertiste ruido mental en una accion pequena."
});

Object.assign(immediateActionExperiences["action-meditation"], {
  kind: "meditation",
  steps: ["Suelta hombros", "Respira lento", "Observa", "Cierra"],
  phrases: ["Suelta los hombros.", "Respira lentamente.", "No necesitas apresurarte.", "Observa sin forzar."],
  miniGoals: ["Mirada suave", "Respiracion lenta", "Presencia"],
  reward: "Tu mente practico una pausa sin exigencia."
});

Object.assign(immediateActionExperiences, {
  "action-stretch": {
    title: "Estiramiento guiado",
    duration: 260,
    icon: "E",
    kind: "stretch",
    objective: "Liberar tension corporal",
    steps: ["Lado derecho", "Lado izquierdo", "Espalda", "Respira"],
    miniGoals: ["Postura suave", "Sin dolor", "Respirar con el movimiento"],
    reward: "Tu postura tiene mas espacio para descansar."
  },
  "action-focus": {
    title: "Bloque de enfoque",
    duration: 480,
    icon: "F",
    kind: "focus",
    objective: "Entrar en concentracion",
    steps: ["Semilla", "Brote", "Planta", "Arbol", "Arbol grande"],
    miniGoals: ["Una tarea", "Sin multitarea", "Cierre breve"],
    reward: "Tu enfoque crecio con una accion concreta."
  },
  "action-journal": {
    title: "Diario emocional",
    duration: 180,
    icon: "D",
    kind: "journal",
    objective: "Nombrar lo que sientes",
    steps: ["Emocion", "Causa", "Necesidad", "Siguiente paso"],
    miniGoals: ["Registrar", "Comparar", "Cerrar"],
    reward: "Tu registro emocional suma claridad al historial."
  }
});

const guidedProgramExperiences = {
  "program-anxiety": {
    title: "Calmar ansiedad",
    duration: 480,
    icon: "01",
    objective: "Bajar activacion",
    difficulty: "Facil",
    steps: ["Respiracion lenta", "Anclaje sensorial", "Relaja mandibula", "Define una accion segura"]
  },
  "program-study": {
    title: "Antes de estudiar",
    duration: 720,
    icon: "02",
    objective: "Entrar en foco",
    difficulty: "Media",
    steps: ["Ordena la mesa", "Respira 60 segundos", "Elige una tarea", "Bloque de enfoque corto"]
  },
  "program-exam": {
    title: "Despues de un examen",
    duration: 600,
    icon: "03",
    objective: "Soltar tension",
    difficulty: "Facil",
    steps: ["Camina suave", "Descarga pensamientos", "Toma agua", "Cierra con una nota"]
  },
  "program-sleep": {
    title: "Dormir mejor",
    duration: 900,
    icon: "04",
    objective: "Preparar descanso",
    difficulty: "Media",
    steps: ["Baja estimulos", "Anota pendientes", "Respira lento", "Cierra pantallas"]
  },
  "program-focus": {
    title: "Recuperar concentracion",
    duration: 540,
    icon: "05",
    objective: "Volver al foco",
    difficulty: "Facil",
    steps: ["Pausa visual", "Respiracion breve", "Una tarea visible", "Temporizador corto"]
  },
  "program-work": {
    title: "Estres laboral",
    duration: 660,
    icon: "06",
    objective: "Reiniciar ritmo",
    difficulty: "Media",
    steps: ["Respira antes de responder", "Ordena pendientes", "Define limite", "Retoma una accion"]
  }
};

const toolDisplayMeta = {
  "action-breathing": { category: "calma", level: "Facil", image: "assets/meditation.png" },
  "action-grounding": { category: "presente", level: "Facil", image: "assets/wave-bg.png" },
  "action-movement": { category: "movimiento", level: "Facil", image: "assets/brand-app-preview.png" },
  "action-order": { category: "orden", level: "Media", image: "assets/zenova-summary.png" },
  "action-meditation": { category: "descanso", level: "Facil", image: "assets/meditation.png" },
  "action-stretch": { category: "movimiento", level: "Facil", image: "assets/brand-app-preview.png" },
  "action-focus": { category: "enfoque", level: "Media", image: "assets/zenova-summary.png" },
  "action-journal": { category: "emociones", level: "Facil", image: "assets/logo-zenova.png" }
};

const programDisplayMeta = {
  "program-anxiety": { image: "assets/wave-bg.png" },
  "program-study": { image: "assets/brand-app-preview.png" },
  "program-exam": { image: "assets/zenova-summary.png" },
  "program-sleep": { image: "assets/meditation.png" },
  "program-focus": { image: "assets/brand-app-preview.png" },
  "program-work": { image: "assets/wave-bg.png" }
};

function toolCatalog() {
  return Object.entries(immediateActionExperiences).map(([key, item]) => ({
    key,
    ...item,
    ...(toolDisplayMeta[key] || { category: "calma", level: "Facil", image: "assets/meditation.png" })
  }));
}

function recommendedToolKeys() {
  const latest = latestCheckin();
  const latestEntries = state.entries.slice(-5);
  const avgStress = averageNumber(latestEntries, (entry) => Number(entry.stress)) || Number(state.lastAssessment?.stressLevel || 0);
  const keys = [];
  const add = (...items) => items.forEach((item) => !keys.includes(item) && keys.push(item));
  if (latest?.selections?.sleepQuality === "pobre" || Number(state.lastAssessment?.sleepHours || 7) <= 5) add("action-meditation", "action-breathing", "action-order");
  if (avgStress >= 7 || latest?.selections?.stress === "alto") add("action-breathing", "action-grounding", "action-order");
  if (latest?.selections?.body === "tension" || latest?.selections?.body === "dolor") add("action-movement");
  if (latest?.selections?.workload === "alta" || state.lastAssessment?.needNow === "orden") add("action-order", "action-breathing");
  add("action-breathing", "action-grounding", "action-movement", "action-meditation");
  return keys.slice(0, 4);
}

function recommendedProgramKeys() {
  const latest = latestCheckin();
  const keys = [];
  const add = (...items) => items.forEach((item) => !keys.includes(item) && keys.push(item));
  if (latest?.selections?.sleepQuality === "pobre" || state.lastAssessment?.needNow === "descanso") add("program-sleep");
  if (latest?.selections?.stress === "alto" || state.lastAssessment?.anxietyLevel >= 7) add("program-anxiety");
  if (state.lastAssessment?.stressType === "academico") add("program-study", "program-exam");
  if (latest?.selections?.workload === "alta") add("program-work");
  add("program-focus", "program-anxiety", "program-sleep");
  return keys.slice(0, 3);
}

function renderDashboardToolCard(tool) {
  return `
    <article class="recommended-tool-card" style="--tool-image: url('${tool.image}')">
      <div class="recommended-tool-visual"><span>${escapeHtml(tool.icon)}</span></div>
      <div>
        <strong>${escapeHtml(tool.title)}</strong>
        <div class="program-meta"><small>${formatTime(tool.duration)}</small><small>${escapeHtml(tool.level)}</small></div>
      </div>
      <button class="ds-button ds-button--primary" type="button" data-panel-open="${escapeHtml(tool.key)}">Iniciar</button>
    </article>
  `;
}

function renderDashboardProgramCard(key) {
  const program = guidedProgramExperiences[key];
  const meta = programDisplayMeta[key] || { image: "assets/meditation.png" };
  return `
    <article class="featured-program-card" style="--program-image: url('${meta.image}')">
      <div class="featured-program-visual"><span>${escapeHtml(program.icon)}</span></div>
      <div>
        <strong>${escapeHtml(program.title)}</strong>
        <div class="program-meta"><small>${formatTime(program.duration)}</small><small>${escapeHtml(program.objective)}</small></div>
      </div>
      <button class="ds-button ds-button--primary" type="button" data-panel-open="${escapeHtml(key)}">Iniciar</button>
    </article>
  `;
}

function renderDashboardRecommendations() {
  const toolGrid = $("#dashboardRecommendedTools");
  if (toolGrid) {
    const catalog = toolCatalog();
    toolGrid.innerHTML = recommendedToolKeys()
      .map((key) => catalog.find((tool) => tool.key === key))
      .filter(Boolean)
      .map(renderDashboardToolCard)
      .join("");
  }
  const programGrid = $("#dashboardFeaturedPrograms");
  if (programGrid) {
    programGrid.innerHTML = recommendedProgramKeys().map(renderDashboardProgramCard).join("");
  }
  bindPanelOpenButtons();
}

function filteredToolCatalog() {
  const query = mfKeyText(workspacePanelState.toolSearch);
  const category = workspacePanelState.toolCategory;
  return toolCatalog().filter((tool) => {
    const haystack = mfKeyText(`${tool.title} ${tool.objective} ${tool.category} ${tool.level}`);
    return (!query || haystack.includes(query)) && (category === "all" || tool.category === category);
  });
}

function renderCompactToolCard(tool, badge = "") {
  const stats = toolStatsFor(tool.key);
  return `
    <article class="compact-tool-card">
      <span>${escapeHtml(tool.icon)}</span>
      <div>
        <strong>${escapeHtml(tool.title)}</strong>
        <small>${formatTime(tool.duration)} - ${escapeHtml(tool.level)}${badge ? ` - ${escapeHtml(badge)}` : ""}</small>
        <small>${stats.completions} sesiones - ${formatUsageDuration(stats.totalSeconds)} - racha ${stats.streak || 0}</small>
      </div>
      <button class="ds-button ds-button--primary" type="button" data-panel-open="${escapeHtml(tool.key)}">Iniciar</button>
    </article>
  `;
}

function renderActionsWorkspacePanel(body) {
  const catalog = toolCatalog();
  const filtered = filteredToolCatalog();
  const recommended = recommendedToolKeys().map((key) => catalog.find((tool) => tool.key === key)).filter(Boolean);
  const favorites = catalog.filter((tool) => dailyCenterState.favorites.includes(`tool-${tool.key}`));
  const recentKeys = zenovaProductState.timeline
    .filter((item) => item.kind === "tool.started")
    .map((item) => item.payload?.key)
    .filter(Boolean);
  const recent = [...new Set(recentKeys)].map((key) => catalog.find((tool) => tool.key === key)).filter(Boolean).slice(0, 4);
  body.innerHTML = `
    <section class="tools-panel-content">
      <div class="workspace-panel-tools">
        <input class="ds-input" id="workspaceToolSearch" type="search" placeholder="Buscar herramienta..." value="${escapeHtml(workspacePanelState.toolSearch)}" />
        <div class="workspace-filter-row">
          ${["all", "calma", "presente", "movimiento", "orden", "descanso", "enfoque", "emociones"]
            .map((key) => `<button class="${workspacePanelState.toolCategory === key ? "is-active" : ""}" type="button" data-tool-filter="${key}">${key === "all" ? "Todo" : key}</button>`)
            .join("")}
        </div>
      </div>
      <section class="compact-resource-section">
        <h3>Recomendadas</h3>
        <div class="compact-tool-grid">${recommended.map((tool) => renderCompactToolCard(tool, "Sugerida")).join("")}</div>
      </section>
      <section class="compact-resource-section">
        <h3>Favoritos</h3>
        <div class="compact-tool-grid">${favorites.length ? favorites.map((tool) => renderCompactToolCard(tool, "Favorita")).join("") : `<p class="panel-empty">Tus favoritas apareceran aqui.</p>`}</div>
      </section>
      <section class="compact-resource-section">
        <h3>Recientes</h3>
        <div class="compact-tool-grid">${recent.length ? recent.map((tool) => renderCompactToolCard(tool, "Reciente")).join("") : `<p class="panel-empty">Inicia una herramienta para verla aqui.</p>`}</div>
      </section>
      <section class="compact-resource-section">
        <h3>Herramientas</h3>
        <div class="compact-tool-grid">${filtered.length ? filtered.map((tool) => renderCompactToolCard(tool)).join("") : `<p class="panel-empty">Sin coincidencias.</p>`}</div>
      </section>
    </section>
  `;
  $("#workspaceToolSearch")?.addEventListener("input", (event) => {
    workspacePanelState.toolSearch = event.target.value;
    renderActionsWorkspacePanel(body);
  });
  $$("[data-tool-filter]").forEach((button) =>
    button.addEventListener("click", () => {
      workspacePanelState.toolCategory = button.dataset.toolFilter;
      renderActionsWorkspacePanel(body);
    })
  );
  panelCloseFooter();
  bindPanelOpenButtons();
}

function renderToolStatsCards(key) {
  const stats = toolStatsFor(key);
  const average = stats.completions ? Math.round(stats.totalSeconds / stats.completions) : 0;
  return `
    <div class="tool-stats-grid" aria-label="Estadisticas de herramienta">
      <article><small>Sesiones</small><strong>${stats.completions}</strong></article>
      <article><small>Tiempo</small><strong>${formatUsageDuration(stats.totalSeconds)}</strong></article>
      <article><small>Racha</small><strong>${stats.streak || 0} dias</strong></article>
      <article><small>Mejor semana</small><strong>${stats.bestWeek || 0}</strong></article>
      <article><small>Ultima vez</small><strong>${stats.lastUsedAt ? formatRelativeDate(stats.lastUsedAt) : "Nueva"}</strong></article>
      <article><small>Finalizacion</small><strong>${toolCompletionRate(stats)}%</strong></article>
      <article><small>Promedio</small><strong>${formatUsageDuration(average)}</strong></article>
      <article><small>XP</small><strong>${stats.xp || 0}</strong></article>
    </div>
  `;
}

function renderToolStage(data, kind) {
  const goals = data.steps || [];
  if (data.kind === "breathing") {
    return `
      <div class="breathing-stage" aria-hidden="true">
        <div class="tool-particles"><i></i><i></i><i></i><i></i><i></i></div>
        <div class="breath-orb"><span id="toolCue">Inhala</span></div>
      </div>
    `;
  }
  if (data.kind === "grounding") {
    return `
      <div class="grounding-stage">
        ${["5 cosas que ves", "4 sensaciones", "3 sonidos", "2 aromas", "1 accion pequena"]
          .map((label, index) => `<button type="button" data-grounding-card="${index}"><span>${5 - index}</span><strong>${escapeHtml(label)}</strong></button>`)
          .join("")}
      </div>
    `;
  }
  if (data.kind === "movement" || data.kind === "stretch") {
    return `
      <div class="movement-stage ${data.kind === "stretch" ? "is-stretch" : ""}" aria-hidden="true">
        <div class="motion-ring"><span></span></div>
        <div class="motion-person">
          <i class="head"></i><i class="body"></i><i class="arm left"></i><i class="arm right"></i><i class="leg left"></i><i class="leg right"></i>
        </div>
        <strong id="toolCue">${escapeHtml(goals[0] || "Sigue el movimiento")}</strong>
      </div>
    `;
  }
  if (data.kind === "meditation") {
    return `
      <div class="meditation-stage" aria-hidden="true">
        <div class="tool-particles"><i></i><i></i><i></i><i></i><i></i></div>
        <div class="meditation-orb"></div>
        <strong id="toolCue">${escapeHtml(data.phrases?.[0] || "Respira lentamente.")}</strong>
      </div>
    `;
  }
  if (data.kind === "focus") {
    return `
      <div class="focus-tree-stage" aria-hidden="true">
        <div class="tool-tree" id="toolTree"><span class="seed"></span><span class="stem"></span><span class="leaf left"></span><span class="leaf right"></span><span class="crown"></span></div>
        <strong id="toolCue">Semilla</strong>
      </div>
    `;
  }
  if (data.kind === "journal") {
    return `
      <div class="journal-stage" aria-hidden="true">
        <article><span>1</span><strong>Registro agregado</strong></article>
        <article><span>2</span><strong>Nivel emocional</strong></article>
        <article><span>3</span><strong>Comparacion con ayer</strong></article>
        <article><span>4</span><strong>Siguiente paso</strong></article>
      </div>
    `;
  }
  return `
    <div class="order-stage" aria-hidden="true">
      ${(data.steps || []).map((step, index) => `<article><span>${index + 1}</span><strong>${escapeHtml(step)}</strong></article>`).join("")}
      <strong id="toolCue">${escapeHtml(data.steps?.[0] || "Empieza suave")}</strong>
    </div>
  `;
}

function renderToolReward(data, stats, secondsUsed) {
  return `
    <section class="tool-reward-panel is-visible" aria-live="polite">
      <div class="tool-reward-mark">OK</div>
      <div>
        <p class="eyebrow">Actividad completada</p>
        <h3>Excelente.</h3>
        <p>${escapeHtml(data.reward || "Tu practica quedo registrada.")}</p>
      </div>
      <div class="tool-reward-grid">
        <article><small>XP</small><strong>+20</strong></article>
        <article><small>Racha</small><strong>${stats.streak || 0} dias</strong></article>
        <article><small>Tiempo dedicado</small><strong>${formatUsageDuration(secondsUsed)}</strong></article>
        <article><small>Bienestar estimado</small><strong>+3%</strong></article>
      </div>
    </section>
  `;
}

function updateInteractiveToolExperience(data, kind) {
  if (!toolExperienceSession) return;
  const elapsed = experienceTotal - experienceRemaining;
  const progress = Math.round((elapsed / Math.max(1, experienceTotal)) * 100);
  const stepIndex = Math.min((data.steps || []).length - 1, Math.floor((progress / 100) * (data.steps || []).length));
  const currentStep = (data.steps || [data.objective])[Math.max(0, stepIndex)] || data.objective;
  $("#experienceTimer") && ($("#experienceTimer").textContent = formatTime(experienceRemaining));
  $("#toolProgressFill") && ($("#toolProgressFill").style.width = `${mfClamp(progress)}%`);
  $("#toolProgressPercent") && ($("#toolProgressPercent").textContent = `${mfClamp(progress)}%`);
  $("#toolActiveStep") && ($("#toolActiveStep").textContent = currentStep);
  const stage = $("#interactiveToolStage");
  if (stage) {
    stage.dataset.step = String(stepIndex);
    stage.dataset.progress = String(progress);
  }
  let cue = currentStep;
  if (data.kind === "breathing") {
    const cycle = elapsed % 14;
    cue = cycle < 4 ? "Inhala" : cycle < 8 ? "Manten" : "Exhala";
    stage && (stage.dataset.phase = cue.toLowerCase());
  }
  if (data.kind === "meditation") cue = data.phrases?.[stepIndex % data.phrases.length] || currentStep;
  $("#toolCue") && ($("#toolCue").textContent = cue);
  $$("[data-mini-goal]").forEach((node, index) => node.classList.toggle("is-done", progress >= ((index + 1) / Math.max(1, data.miniGoals?.length || 1)) * 100));
}

function completeInteractiveToolExperience(data, kind, manual = false) {
  if (!toolExperienceSession || toolExperienceSession.completed) return;
  window.clearInterval(experienceTimer);
  experienceTimer = null;
  const secondsUsed = manual ? Math.max(20, Math.round((Date.now() - toolExperienceSession.startedAt) / 1000)) : experienceTotal;
  const stats = registerToolCompletion(kind, data, secondsUsed);
  toolExperienceSession.completed = true;
  experienceRemaining = 0;
  updateInteractiveToolExperience(data, kind);
  $("#experienceStartBtn") && ($("#experienceStartBtn").textContent = "Completado");
  $("#toolRewardMount") && ($("#toolRewardMount").innerHTML = renderToolReward(data, stats, secondsUsed));
  $("#toolStatsMount") && ($("#toolStatsMount").innerHTML = renderToolStatsCards(kind));
  playSoftTone(528, 0.22);
  vibrateSoft([18, 24, 18]);
  showZenovaToast("Actividad completada. +20 XP", "success");
  window.ZeninAvatarExperience?.react?.("tool.completed", { key: kind });
}

function resetInteractiveToolExperience(data, kind) {
  window.clearInterval(experienceTimer);
  experienceTimer = null;
  experienceRemaining = data.duration;
  toolExperienceSession = { key: kind, startedAt: Date.now(), completed: false };
  $("#experienceStartBtn") && ($("#experienceStartBtn").textContent = "Comenzar");
  $("#toolRewardMount") && ($("#toolRewardMount").innerHTML = "");
  $$("[data-grounding-card]").forEach((node) => node.classList.remove("is-cleared"));
  updateInteractiveToolExperience(data, kind);
}

function bindInteractiveToolControls(data, kind) {
  $("#experienceStartBtn")?.addEventListener("click", () => {
    if (toolExperienceSession?.completed) return;
    if (experienceTimer) {
      window.clearInterval(experienceTimer);
      experienceTimer = null;
      $("#experienceStartBtn").textContent = "Continuar";
      return;
    }
    $("#experienceStartBtn").textContent = "Pausar";
    playSoftTone(392, 0.12);
    vibrateSoft(10);
    experienceTimer = window.setInterval(() => {
      experienceRemaining = Math.max(0, experienceRemaining - 1);
      updateInteractiveToolExperience(data, kind);
      if (experienceRemaining <= 0) completeInteractiveToolExperience(data, kind);
    }, 1000);
  });
  $("#experienceResetBtn")?.addEventListener("click", () => resetInteractiveToolExperience(data, kind));
  $("#experienceFinishBtn")?.addEventListener("click", () => completeInteractiveToolExperience(data, kind, true));
  $("#toolFavoriteBtn")?.addEventListener("click", () => {
    toggleToolFavorite(kind);
    $("#toolFavoriteBtn").classList.toggle("is-active", isToolFavorite(kind));
    $("#toolFavoriteBtn").setAttribute("aria-pressed", String(isToolFavorite(kind)));
  });
  $$("[data-grounding-card]").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.classList.contains("is-cleared")) return;
      button.classList.add("is-cleared");
      const total = $$("[data-grounding-card]").length;
      const cleared = $$("[data-grounding-card].is-cleared").length;
      experienceRemaining = Math.max(0, Math.round(data.duration * (1 - cleared / Math.max(1, total))));
      updateInteractiveToolExperience(data, kind);
      vibrateSoft(8);
      if (cleared === total) completeInteractiveToolExperience(data, kind, true);
    });
  });
}

function renderInteractiveToolExperience(body, data, kind) {
  window.clearInterval(experienceTimer);
  experienceTimer = null;
  experienceTotal = data.duration;
  experienceRemaining = data.duration;
  toolExperienceSession = { key: kind, startedAt: Date.now(), completed: false };
  registerToolStart(kind, data.title);
  const meta = toolDisplayMeta[kind] || {};
  const stats = toolStatsFor(kind);
  const favorite = isToolFavorite(kind);
  body.innerHTML = `
    <section class="tool-experience-shell" data-tool-kind="${escapeHtml(data.kind || "default")}">
      <header class="tool-experience-header">
        <div class="tool-title-cluster">
          <span>${escapeHtml(data.icon)}</span>
          <div>
            <strong>${escapeHtml(data.title)}</strong>
            <small>${escapeHtml(data.objective)}</small>
          </div>
        </div>
        <div class="tool-meta-cluster">
          <span>${escapeHtml(meta.level || data.difficulty || "Accion")}</span>
          <span>${formatTime(data.duration)}</span>
          <button class="tool-favorite-btn ${favorite ? "is-active" : ""}" id="toolFavoriteBtn" type="button" aria-pressed="${favorite}" aria-label="Favorito">*</button>
        </div>
      </header>
      <section class="interactive-tool-stage" id="interactiveToolStage" data-step="0">
        ${renderToolStage(data, kind)}
      </section>
      <section class="tool-progress-panel">
        <div class="tool-progress-head">
          <span id="toolProgressPercent">0%</span>
          <strong id="toolActiveStep">${escapeHtml(data.steps?.[0] || data.objective)}</strong>
          <span id="experienceTimer">${formatTime(data.duration)}</span>
        </div>
        <div class="experience-progress"><span id="toolProgressFill"></span></div>
        <div class="tool-mini-goals">
          ${(data.miniGoals || data.steps || []).slice(0, 4).map((goal, index) => `<span data-mini-goal="${index}">${escapeHtml(goal)}</span>`).join("")}
        </div>
      </section>
      <div class="experience-controls">
        <button class="ds-button ds-button--primary" id="experienceStartBtn" type="button">Comenzar</button>
        <button class="ds-button ds-button--secondary" id="experienceResetBtn" type="button">Reiniciar</button>
        <button class="ds-button ds-button--tertiary" id="experienceFinishBtn" type="button">Completar</button>
      </div>
      <section id="toolStatsMount">${renderToolStatsCards(kind)}</section>
      <div id="toolRewardMount"></div>
    </section>
  `;
  bindInteractiveToolControls(data, kind);
  updateInteractiveToolExperience(data, kind);
  panelCloseFooter();
}

function renderExperienceSession(body, data, kind) {
  window.clearInterval(experienceTimer);
  experienceTimer = null;
  experienceTotal = data.duration;
  experienceRemaining = data.duration;
  body.innerHTML = `
    <section class="experience-session" data-experience-kind="${escapeHtml(kind)}">
      <div class="experience-visual" aria-hidden="true">
        <span>${escapeHtml(data.icon)}</span>
        <div class="experience-orbit"><i></i><i></i><i></i></div>
      </div>
      <div class="experience-status">
        <strong>${escapeHtml(data.title)}</strong>
        <div class="program-meta">
          <small>${formatTime(data.duration)}</small>
          <small>${escapeHtml(data.difficulty || "Accion")}</small>
          <small>${escapeHtml(data.objective)}</small>
        </div>
      </div>
      <div class="experience-progress"><span id="experienceProgressFill"></span></div>
      <div class="experience-timer" id="experienceTimer">${formatTime(data.duration)}</div>
      <div class="experience-controls">
        <button class="ds-button ds-button--primary" id="experienceStartBtn" type="button">Comenzar</button>
        <button class="ds-button ds-button--secondary" id="experienceResetBtn" type="button">Reiniciar</button>
      </div>
      <div class="experience-steps">
        ${data.steps.map((step, index) => `<article class="${index === 0 ? "is-active" : ""}"><span>${index + 1}</span><strong>${escapeHtml(step)}</strong></article>`).join("")}
      </div>
      <div class="audio-placeholder">
        <span>Audio futuro</span>
        <small>Estructura preparada para sonidos suaves y voz guiada.</small>
      </div>
    </section>
  `;
  bindExperienceControls(data);
  panelCloseFooter();
}

function updateExperienceProgress(data) {
  const elapsed = experienceTotal - experienceRemaining;
  const progress = experienceTotal ? Math.round((elapsed / experienceTotal) * 100) : 0;
  $("#experienceTimer") && ($("#experienceTimer").textContent = formatTime(experienceRemaining));
  $("#experienceProgressFill") && ($("#experienceProgressFill").style.width = `${progress}%`);
  const stepIndex = Math.min(data.steps.length - 1, Math.floor((elapsed / Math.max(1, experienceTotal)) * data.steps.length));
  $$(".experience-steps article").forEach((node, index) => node.classList.toggle("is-active", index === stepIndex));
}

function bindExperienceControls(data) {
  const start = $("#experienceStartBtn");
  const reset = $("#experienceResetBtn");
  if (!start || !reset) return;
  start.addEventListener("click", () => {
    if (experienceTimer) {
      window.clearInterval(experienceTimer);
      experienceTimer = null;
      start.textContent = "Continuar";
      return;
    }
    start.textContent = "Pausar";
    experienceTimer = window.setInterval(() => {
      experienceRemaining = Math.max(0, experienceRemaining - 1);
      updateExperienceProgress(data);
      if (experienceRemaining <= 0) {
        window.clearInterval(experienceTimer);
        experienceTimer = null;
        start.textContent = "Completado";
        showZenovaToast("Sesion completada.", "success");
      }
    }, 1000);
  });
  reset.addEventListener("click", () => {
    window.clearInterval(experienceTimer);
    experienceTimer = null;
    experienceRemaining = data.duration;
    start.textContent = "Comenzar";
    updateExperienceProgress(data);
  });
  updateExperienceProgress(data);
}

function renderActionExperiencePanel(body, kind) {
  const data = immediateActionExperiences[kind] || immediateActionExperiences["action-breathing"];
  $("#workspacePanelTitle").textContent = data.title;
  $("#workspacePanelEyebrow").textContent = "Experiencia interactiva";
  renderInteractiveToolExperience(body, data, kind);
}

function renderProgramExperiencePanel(body, kind) {
  const data = guidedProgramExperiences[kind] || guidedProgramExperiences["program-anxiety"];
  $("#workspacePanelTitle").textContent = data.title;
  $("#workspacePanelEyebrow").textContent = "Programa guiado";
  renderExperienceSession(body, data, kind);
}

function renderActivityPanel(body) {
  const search = workspacePanelState.activitySearch;
  const todayItems = [
    ...buildDerivedNotifications().map((item) => ({ icon: "!", title: item.title, body: item.body })),
    ...dailyCenterState.tasks.filter((task) => task.date === todayIso()).map((task) => ({ icon: task.completedAt ? "✓" : "T", title: task.title, body: dailyTaskTypeLabel(task.type) }))
  ];
  const weekItems = zenovaLocal.activities.slice(0, 8).map((item) => ({ icon: "A", title: item.title, body: `${item.date} ${item.time || ""}` }));
  const historyItems = recentActivityItems().map((item) => ({ icon: item.icon, title: item.title, body: `${formatRelativeDate(item.date)} - ${item.body}` }));
  const completedItems = dailyCenterState.tasks.filter((task) => task.completedAt).slice(-6).map((task) => ({ icon: "✓", title: task.title, body: formatRelativeDate(task.completedAt) }));
  const upcomingItems = zenovaLocal.activities.filter((item) => item.date >= todayIso()).slice(0, 6).map((item) => ({ icon: "→", title: item.title, body: `${item.date} ${item.time || ""}` }));
  const sections = [
    ["today", "Hoy", todayItems],
    ["week", "Esta semana", weekItems],
    ["history", "Historial reciente", historyItems],
    ["completed", "Actividades completadas", completedItems],
    ["upcoming", "Proximas acciones", upcomingItems]
  ];
  const filtered = sections
    .filter(([key]) => workspacePanelState.activityFilter === "all" || workspacePanelState.activityFilter === key)
    .map(([key, label, items]) => [
      key,
      label,
      items.filter((item) => mfKeyText(`${item.title} ${item.body}`).includes(mfKeyText(search)))
    ]);
  body.innerHTML = `
    <div class="workspace-panel-tools">
      <input class="ds-input" id="workspaceActivitySearch" type="search" placeholder="Buscar actividad..." value="${escapeHtml(search)}" />
      <div class="workspace-filter-row">
        ${["all", "today", "week", "history", "completed", "upcoming"]
          .map((key) => `<button class="${workspacePanelState.activityFilter === key ? "is-active" : ""}" type="button" data-activity-filter="${key}">${key === "all" ? "Todo" : key}</button>`)
          .join("")}
      </div>
    </div>
    <form class="workspace-inline-form" id="workspaceTaskForm">
      <input class="ds-input" id="workspaceTaskInput" type="text" maxlength="90" required placeholder="Nueva accion breve..." />
      <select class="ds-select" id="workspaceTaskType">
        <option value="calma">Calma</option>
        <option value="movimiento">Movimiento</option>
        <option value="descanso">Descanso</option>
        <option value="orden">Orden</option>
      </select>
      <button class="ds-button ds-button--primary" type="submit">Agregar</button>
    </form>
    <div class="workspace-timeline">
      ${filtered
        .map(
          ([, label, items]) => `
            <section>
              <h3>${escapeHtml(label)}</h3>
              ${items.length ? items.map(panelTimelineItem).join("") : `<p class="panel-empty">Sin elementos para mostrar.</p>`}
            </section>
          `
        )
        .join("")}
    </div>
  `;
  $("#workspaceActivitySearch")?.addEventListener("input", (event) => {
    workspacePanelState.activitySearch = event.target.value;
    renderActivityPanel(body);
  });
  $$("[data-activity-filter]").forEach((button) =>
    button.addEventListener("click", () => {
      workspacePanelState.activityFilter = button.dataset.activityFilter;
      renderActivityPanel(body);
    })
  );
  $("#workspaceTaskForm")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const title = $("#workspaceTaskInput").value.trim();
    if (!title) return;
    dailyCenterState.tasks.push({ id: crypto.randomUUID(), title, type: $("#workspaceTaskType").value, date: todayIso(), createdAt: new Date().toISOString(), completedAt: "" });
    saveDailyState("tasks");
    renderDailyCenter();
    renderActivityPanel(body);
    showZenovaToast("Accion agregada al centro de actividad.", "success");
  });
  panelCloseFooter();
}

function renderWidgetPanel(body) {
  const active = workspaceVisibleWidgets();
  body.innerHTML = `
    <p class="panel-hint">Elige hasta cuatro widgets. Si agregas uno nuevo cuando ya hay cuatro, reemplazara el ultimo visible.</p>
    <div class="widget-picker-grid">
      ${workspaceWidgetCatalog
        .map(
          (item) => `
            <button class="widget-picker-card ${active.includes(item.key) ? "is-active" : ""}" type="button" data-widget-pick="${item.key}">
              <span>${escapeHtml(item.icon)}</span>
              <strong>${escapeHtml(item.title)}</strong>
              <small>${escapeHtml(item.description)}</small>
            </button>
          `
        )
        .join("")}
    </div>
  `;
  $$("[data-widget-pick]").forEach((button) =>
    button.addEventListener("click", () => {
      const key = button.dataset.widgetPick;
      const current = workspaceVisibleWidgets();
      const next = current.includes(key) ? current.filter((item) => item !== key) : current.length >= 4 ? [...current.slice(0, 3), key] : [...current, key];
      workspaceSetVisibleWidgets(next);
      renderWidgetPanel(body);
    })
  );
  panelCloseFooter();
}

function habitIcon(category) {
  return { respiracion: "R", movimiento: "M", sueno: "S", orden: "O" }[category] || "H";
}

function renderHabitPanel(body) {
  const kit = habitStarterKits[workspacePanelState.habitGoal] || habitStarterKits.stress;
  body.innerHTML = `
    <section class="habit-assistant">
      <h3>Que deseas mejorar?</h3>
      <div class="habit-goal-row">
        ${Object.entries(habitStarterKits)
          .map(([key, item]) => `<button class="${workspacePanelState.habitGoal === key ? "is-active" : ""}" type="button" data-habit-goal="${key}">${escapeHtml(item.label)}</button>`)
          .join("")}
      </div>
      <div class="habit-suggestion-grid">
        ${kit.habits
          .map(
            (habit, index) => `
              <label class="habit-suggestion">
                <input type="checkbox" data-suggested-habit="${index}" checked />
                <span>${habitIcon(habit.category)}</span>
                <strong>${escapeHtml(habit.title)}</strong>
                <small>${escapeHtml(habit.time)} · ${escapeHtml(habit.category)}</small>
              </label>
            `
          )
          .join("")}
      </div>
      <button class="ds-button ds-button--primary full" id="confirmHabitKitBtn" type="button">Confirmar propuesta</button>
    </section>
    <section>
      <h3>Habitos activos</h3>
      <div class="compact-habit-list">
        ${zenovaProductState.habits.length ? zenovaProductState.habits.map(renderCompactHabitCard).join("") : `<p class="panel-empty">Aun no hay habitos. Confirma una propuesta para empezar.</p>`}
      </div>
    </section>
  `;
  $$("[data-habit-goal]").forEach((button) =>
    button.addEventListener("click", () => {
      workspacePanelState.habitGoal = button.dataset.habitGoal;
      renderHabitPanel(body);
    })
  );
  $("#confirmHabitKitBtn")?.addEventListener("click", () => {
    const selected = $$("[data-suggested-habit]")
      .filter((input) => input.checked)
      .map((input) => kit.habits[Number(input.dataset.suggestedHabit)])
      .filter(Boolean);
    selected.forEach((item) => {
      if (zenovaProductState.habits.some((habit) => mfKeyText(habit.title) === mfKeyText(item.title))) return;
      const habit = {
        id: crypto.randomUUID(),
        title: item.title,
        category: item.category,
        frequency: "daily",
        time: item.time,
        targetDays: 7,
        reminder: Boolean(item.time),
        completions: [],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      zenovaProductState.habits.push(habit);
      dbPut("habits", habit);
    });
    saveProductCollection("habits", zenovaProductState.habits);
    renderProductPlatform();
    renderHabitPanel(body);
    showZenovaToast("Habitos sugeridos agregados.", "success");
  });
  $$("[data-compact-habit]").forEach((button) =>
    button.addEventListener("click", () => {
      const habit = zenovaProductState.habits.find((item) => item.id === button.dataset.compactHabit);
      if (!habit) return;
      habit.completions = habit.completions || [];
      habit.completions = habit.completions.includes(todayIso()) ? habit.completions.filter((day) => day !== todayIso()) : [...habit.completions, todayIso()];
      habit.updatedAt = new Date().toISOString();
      saveProductCollection("habits", zenovaProductState.habits);
      dbPut("habits", habit);
      renderProductPlatform();
      renderHabitPanel(body);
      showZenovaToast("Habito actualizado.", "success");
    })
  );
  panelCloseFooter();
}

function renderCompactHabitCard(habit) {
  const done = habit.completions?.includes(todayIso());
  const streak = habitStreak(habit);
  return `
    <article class="compact-habit-card ${done ? "is-complete" : ""}">
      <span>${habitIcon(habit.category)}</span>
      <div>
        <strong>${escapeHtml(habit.title)}</strong>
        <div class="mini-progress"><span style="--value: ${mfPercent(Math.min(100, streak * 14))}"></span></div>
        <small>racha ${streak} · ${escapeHtml(habit.category)}</small>
      </div>
      <button class="ds-button ds-button--secondary" type="button" data-compact-habit="${habit.id}">${done ? "Hecho" : "Completar"}</button>
    </article>
  `;
}

function renderGoalsWorkspacePanel(body) {
  body.innerHTML = `
    <div class="workspace-list">
      ${zenovaProductState.goals.length ? zenovaProductState.goals.map((goal) => `<article class="workspace-summary-card"><strong>${escapeHtml(goal.title)}</strong><div class="mini-progress"><span style="--value: ${goalProgress(goal)}%"></span></div><small>${goalProgress(goal)}% · ${escapeHtml(goal.priority || "media")}</small></article>`).join("") : `<p class="panel-empty">Aun no tienes objetivos activos.</p>`}
    </div>
    <button class="ds-button ds-button--primary full" type="button" data-panel-jump="#plan-personal">Abrir editor completo</button>
  `;
  bindPanelJump();
}

function renderAgendaWorkspacePanel(body) {
  const upcoming = zenovaLocal.activities.filter((item) => item.date >= todayIso()).slice(0, 8);
  body.innerHTML = `
    <div class="workspace-timeline">
      <section>
        <h3>Proximas acciones</h3>
        ${upcoming.length ? upcoming.map((item) => panelTimelineItem({ icon: "A", title: item.title, body: `${item.date} ${item.time || ""} · ${item.type}` })).join("") : `<p class="panel-empty">Agenda una pausa o actividad.</p>`}
      </section>
    </div>
    <button class="ds-button ds-button--primary full" type="button" data-panel-jump="#agenda">Abrir agenda completa</button>
  `;
  bindPanelJump();
}

function renderLibraryWorkspacePanel(body) {
  const items = (featureLibrary[state.language] || featureLibrary.es).slice(0, 4);
  body.innerHTML = `
    <div class="workspace-list">
      ${items.map((item) => `<article class="workspace-summary-card"><strong>${escapeHtml(item.title)}</strong><p>${escapeHtml(item.summary)}</p><small>${escapeHtml(item.category)} · ${item.minutes || 5} min</small></article>`).join("")}
    </div>
    <button class="ds-button ds-button--primary full" type="button" data-panel-jump="#biblioteca">Abrir biblioteca completa</button>
  `;
  bindPanelJump();
}

function renderStatsWorkspacePanel(body) {
  const wellbeing = computeWellbeingIndex();
  const completed = zenovaProductState.habits.filter((habit) => habit.completions?.includes(todayIso())).length;
  const goals = Math.round(averageNumber(zenovaProductState.goals, goalProgress) || 0);
  body.innerHTML = `
    <div class="stats-panel-grid">
      ${[
        ["Bienestar", wellbeing],
        ["Habitos hoy", zenovaProductState.habits.length ? Math.round((completed / zenovaProductState.habits.length) * 100) : 0],
        ["Objetivos", goals],
        ["Actividad", Math.min(100, recentActivityItems().length * 16)]
      ]
        .map(([label, value]) => `<article class="workspace-summary-card"><strong>${value}%</strong><div class="mini-progress"><span style="--value: ${value}%"></span></div><small>${label}</small></article>`)
        .join("")}
    </div>
    <button class="ds-button ds-button--primary full" type="button" data-panel-jump="#progreso">Ver progreso completo</button>
  `;
  bindPanelJump();
}

function renderProfileWorkspacePanel(body) {
  const profile = getUserProfile();
  body.innerHTML = `
    <div class="workspace-summary-card">
      <strong>${escapeHtml(profile.name || state.session?.name || "Usuario ZENOVA")}</strong>
      <p>${escapeHtml(profile.goal || dailyCenterState.goal?.title || "Sin objetivo definido.")}</p>
      <small>${escapeHtml(profile.context || state.lastAssessment?.stressType || "contexto pendiente")}</small>
    </div>
    <button class="ds-button ds-button--primary full" type="button" id="openProfileSettingsBtn">Editar perfil</button>
  `;
  $("#openProfileSettingsBtn")?.addEventListener("click", () => {
    closeWorkspacePanel();
    openOptions();
    switchDrawerTab("profile");
  });
}

function switchDrawerTab(tabName) {
  $$(".drawer-tab").forEach((tab) => tab.classList.toggle("active", tab.dataset.drawerTab === tabName));
  $$(".drawer-section").forEach((section) => section.classList.remove("active"));
  $(`#${tabName}Panel`)?.classList.add("active");
}

function renderSettingsWorkspacePanel(body) {
  body.innerHTML = `
    <div class="workspace-list">
      <button class="workspace-summary-card as-button" type="button" id="openFullSettingsBtn"><strong>Opciones completas</strong><p>Idioma, tema, sonidos, registros, notas y alarmas.</p></button>
      <button class="workspace-summary-card as-button" type="button" data-panel-jump="#evaluacion"><strong>Test multifactor</strong><p>Actualizar lectura personalizada.</p></button>
    </div>
  `;
  $("#openFullSettingsBtn")?.addEventListener("click", () => {
    closeWorkspacePanel();
    openOptions();
  });
  bindPanelJump();
}

function bindPanelJump() {
  $$("[data-panel-jump]").forEach((button) =>
    button.addEventListener("click", () => {
      const target = button.dataset.panelJump;
      closeWorkspacePanel();
      window.setTimeout(() => goToSection(target), 120);
    })
  );
}

function renderGoalsWorkspacePanel(body) {
  body.innerHTML = `
    <form class="workspace-inline-form workspace-goal-form" id="workspaceGoalForm">
      <input class="ds-input" id="workspaceGoalTitle" type="text" maxlength="80" required placeholder="Nueva meta..." />
      <select class="ds-select" id="workspaceGoalPriority">
        <option value="media">Media</option>
        <option value="alta">Alta</option>
        <option value="baja">Baja</option>
      </select>
      <button class="ds-button ds-button--primary" type="submit">Guardar</button>
    </form>
    <div class="workspace-list">
      ${
        zenovaProductState.goals.length
          ? zenovaProductState.goals
              .map((goal) => `<article class="workspace-summary-card"><strong>${escapeHtml(goal.title)}</strong><div class="mini-progress"><span style="--value: ${goalProgress(goal)}%"></span></div><small>${goalProgress(goal)}% - ${escapeHtml(goal.priority || "media")}</small></article>`)
              .join("")
          : `<p class="panel-empty">Aun no tienes objetivos activos.</p>`
      }
    </div>
  `;
  $("#workspaceGoalForm")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const title = $("#workspaceGoalTitle").value.trim();
    if (!title) return;
    const goal = {
      id: crypto.randomUUID(),
      title,
      description: "",
      dueDate: "",
      priority: $("#workspaceGoalPriority").value,
      subtasks: [],
      progress: 0,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    zenovaProductState.goals.push(goal);
    saveProductCollection("goals", zenovaProductState.goals);
    dbPut("goals", goal);
    ZenovaContextStore.push("goal.saved", goal);
    renderProductPlatform();
    renderGoalsWorkspacePanel(body);
    showZenovaToast("Objetivo guardado.", "success");
  });
  panelCloseFooter();
}

function renderAgendaWorkspacePanel(body) {
  const upcoming = zenovaLocal.activities
    .filter((item) => item.date >= todayIso())
    .sort((a, b) => `${a.date} ${a.time || ""}`.localeCompare(`${b.date} ${b.time || ""}`))
    .slice(0, 8);
  body.innerHTML = `
    <form class="workspace-inline-form workspace-agenda-form" id="workspaceAgendaForm">
      <input class="ds-input" id="workspaceAgendaTitle" type="text" maxlength="80" required placeholder="Nueva actividad..." />
      <input class="ds-input" id="workspaceAgendaDate" type="date" value="${todayIso()}" required />
      <button class="ds-button ds-button--primary" type="submit">Agregar</button>
      <input class="ds-input" id="workspaceAgendaTime" type="time" />
      <select class="ds-select" id="workspaceAgendaType">
        <option value="respiracion">Respiracion</option>
        <option value="movimiento">Movimiento</option>
        <option value="nota">Nota</option>
        <option value="test">Test</option>
      </select>
    </form>
    <div class="workspace-timeline">
      <section>
        <h3>Proximas acciones</h3>
        ${upcoming.length ? upcoming.map((item) => panelTimelineItem({ icon: "A", title: item.title, body: `${item.date} ${item.time || ""} - ${item.type}` })).join("") : `<p class="panel-empty">Agenda una pausa o actividad.</p>`}
      </section>
    </div>
  `;
  $("#workspaceAgendaForm")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const activity = {
      id: crypto.randomUUID(),
      title: $("#workspaceAgendaTitle").value.trim(),
      date: $("#workspaceAgendaDate").value || todayIso(),
      time: $("#workspaceAgendaTime").value || "",
      type: $("#workspaceAgendaType").value,
      kind: "actividad",
      repeat: "none",
      fired: false
    };
    if (!activity.title) return;
    zenovaLocal.activities.push(activity);
    saveCollection("zenovaActivities", zenovaLocal.activities);
    dbPut("activities", activity);
    ZenovaContextStore.push("agenda.saved", activity);
    renderActivities();
    renderMinimalDashboard();
    renderAgendaWorkspacePanel(body);
    showZenovaToast("Actividad agregada.", "success");
  });
  panelCloseFooter();
}

function renderLibraryWorkspacePanel(body) {
  const items = filteredWorkspaceResources();
  const favorites = richResourceLibrary.filter((item) => dailyCenterState.favorites.includes(`library-${item.key}`));
  const recommended = [selectContextResource(), ...items].filter(Boolean).filter((item, index, array) => array.findIndex((entry) => entry.key === item.key) === index).slice(0, 4);
  const recent = richResourceLibrary.filter((item) => zenovaProductState.timeline.some((entry) => mfKeyText(JSON.stringify(entry.payload || "")).includes(mfKeyText(item.key)))).slice(0, 3);
  body.innerHTML = `
    <div class="workspace-panel-tools">
      <input class="ds-input" id="workspaceLibrarySearch" type="search" placeholder="Buscar recurso..." value="${escapeHtml(workspacePanelState.librarySearch)}" />
      <div class="workspace-filter-row">
        ${["all", "ansiedad", "estres", "sueno", "productividad", "emociones", "mindfulness"]
          .map((key) => `<button class="${workspacePanelState.libraryCategory === key ? "is-active" : ""}" type="button" data-library-filter="${key}">${key === "all" ? "Todo" : key}</button>`)
          .join("")}
      </div>
    </div>
    <section class="compact-resource-section">
      <h3>Recomendadas</h3>
      <div class="compact-tool-grid">${recommended.map((item) => renderCompactResourceCard(item, "Recomendada")).join("")}</div>
    </section>
    <section class="compact-resource-section">
      <h3>Favoritos</h3>
      <div class="compact-tool-grid">${favorites.length ? favorites.map((item) => renderCompactResourceCard(item, "Favorito")).join("") : `<p class="panel-empty">Guarda recursos para verlos aqui.</p>`}</div>
    </section>
    <section class="compact-resource-section">
      <h3>Recientes</h3>
      <div class="compact-tool-grid">${recent.length ? recent.map((item) => renderCompactResourceCard(item, "Reciente")).join("") : `<p class="panel-empty">Aun no hay recursos recientes.</p>`}</div>
    </section>
    <section class="compact-resource-section">
      <h3>Resultados</h3>
      <div class="compact-tool-grid">${items.length ? items.slice(0, 8).map((item) => renderCompactResourceCard(item)).join("") : `<p class="panel-empty">Sin coincidencias.</p>`}</div>
    </section>
  `;
  $("#workspaceLibrarySearch")?.addEventListener("input", (event) => {
    workspacePanelState.librarySearch = event.target.value;
    renderLibraryWorkspacePanel(body);
  });
  $$("[data-library-filter]").forEach((button) =>
    button.addEventListener("click", () => {
      workspacePanelState.libraryCategory = button.dataset.libraryFilter;
      renderLibraryWorkspacePanel(body);
    })
  );
  panelCloseFooter();
  bindPanelOpenButtons();
}

function renderStatsWorkspacePanel(body) {
  const wellbeing = computeWellbeingIndex();
  const completed = zenovaProductState.habits.filter((habit) => habit.completions?.includes(todayIso())).length;
  const goals = Math.round(averageNumber(zenovaProductState.goals, goalProgress) || 0);
  body.innerHTML = `
    <div class="stats-panel-grid">
      ${[
        ["Bienestar", wellbeing],
        ["Habitos hoy", zenovaProductState.habits.length ? Math.round((completed / zenovaProductState.habits.length) * 100) : 0],
        ["Objetivos", goals],
        ["Actividad", Math.min(100, recentActivityItems().length * 16)]
      ]
        .map(([label, value]) => `<article class="workspace-summary-card"><strong>${value}%</strong><div class="mini-progress"><span style="--value: ${value}%"></span></div><small>${label}</small></article>`)
        .join("")}
    </div>
    <section class="compact-resource-section">
      <h3>Recomendaciones</h3>
      <div class="workspace-list">
        ${buildHistoryRecommendations().slice(0, 4).map((item) => `<article class="workspace-summary-card"><strong>${escapeHtml(item)}</strong></article>`).join("") || `<p class="panel-empty">Guarda registros para ver sugerencias.</p>`}
      </div>
    </section>
  `;
  panelCloseFooter();
}

function renderProfileWorkspacePanel(body) {
  const profile = getUserProfile();
  body.innerHTML = `
    <div class="workspace-summary-card premium-mini-card">
      <span>${escapeHtml(workspaceIcon(profile.name || state.session?.name || "Usuario"))}</span>
      <strong>${escapeHtml(profile.name || state.session?.name || "Usuario ZENOVA")}</strong>
      <small>${escapeHtml(profile.context || state.lastAssessment?.stressType || "contexto pendiente")}</small>
    </div>
    <div class="workspace-list">
      <article class="workspace-summary-card"><strong>Objetivo</strong><small>${escapeHtml(profile.goal || dailyCenterState.goal?.title || "Sin objetivo definido.")}</small></article>
      <article class="workspace-summary-card"><strong>Historial</strong><small>${zenovaProductState.checkins.length} check-ins - ${zenovaProductState.journals.length} notas</small></article>
    </div>
  `;
  setWorkspacePanelFooter(`
    <button class="ds-button ds-button--secondary" type="button" id="openProfileSettingsBtn">Editar perfil</button>
    <button class="ds-button ds-button--primary" type="button" data-panel-close>Cerrar</button>
  `);
  $("#openProfileSettingsBtn")?.addEventListener("click", () => {
    closeWorkspacePanel();
    openOptions();
    switchDrawerTab("profile");
  });
  $("[data-panel-close]")?.addEventListener("click", closeWorkspacePanel);
}

function renderPremiumWorkspacePanel(body) {
  const features = ["Historial ampliado", "Informes inteligentes", "Alarmas", "Sincronizacion", "ZENIN IA"];
  const plans = [
    { key: "Basico", price: "S/15", tag: "Inicio" },
    { key: "Balance", price: "S/22", tag: "Popular" },
    { key: "Plus", price: "S/30", tag: "Completo" }
  ];
  body.innerHTML = `
    <section class="premium-panel">
      <article class="premium-mini-card">
        <span>*</span>
        <strong>ZENOVA Premium</strong>
        <small>Funciones avanzadas en fase beta.</small>
      </article>
      <div class="premium-compare-grid">
        <article><strong>Gratuito</strong><small>Check-in, herramientas, agenda basica.</small></article>
        <article class="is-premium"><strong>Premium</strong><small>Mas historial, informes y ZENIN mejorado.</small></article>
      </div>
      <div class="panel-checklist">
        ${features.map((item) => `<article><span>OK</span><strong>${escapeHtml(item)}</strong></article>`).join("")}
      </div>
      <div class="premium-plan-grid">
        ${plans
          .map(
            (plan) => `
              <button class="${workspacePanelState.premiumPlan === plan.key ? "is-active" : ""}" type="button" data-premium-plan="${plan.key}">
                <small>${plan.tag}</small>
                <strong>${plan.key}</strong>
                <span>${plan.price}</span>
              </button>
            `
          )
          .join("")}
      </div>
      <form class="payment-form panel-payment-form" id="workspacePremiumForm">
        <input type="text" readonly value="Plan ${escapeHtml(workspacePanelState.premiumPlan)}" />
        <div class="form-row">
          <input type="text" placeholder="Nombre en tarjeta" required />
          <input type="text" placeholder="0000 0000 0000 0000" required />
        </div>
        <div class="form-row">
          <input type="text" placeholder="MM/AA" required />
          <input type="text" placeholder="CVV" required />
        </div>
      </form>
      <p class="payment-message" id="workspacePremiumMessage"></p>
    </section>
  `;
  setWorkspacePanelFooter(`
    <button class="ds-button ds-button--secondary" type="button" data-panel-close>Cerrar</button>
    <button class="ds-button ds-button--primary" id="workspacePremiumSubmit" type="button">Suscribirme</button>
  `);
  $$("[data-premium-plan]").forEach((button) =>
    button.addEventListener("click", () => {
      workspacePanelState.premiumPlan = button.dataset.premiumPlan;
      renderPremiumWorkspacePanel(body);
    })
  );
  $("#workspacePremiumSubmit")?.addEventListener("click", () => {
    $("#workspacePremiumMessage").textContent = `Solicitud registrada para el plan ${workspacePanelState.premiumPlan}.`;
    showZenovaToast("Pago simulado preparado.", "success");
  });
  $("[data-panel-close]")?.addEventListener("click", closeWorkspacePanel);
}

function renderSettingsWorkspacePanel(body) {
  body.innerHTML = `
    <div class="workspace-list">
      <button class="workspace-summary-card as-button" type="button" id="openFullSettingsBtn"><strong>Opciones completas</strong><small>Idioma, tema, registros, notas y alarmas.</small></button>
      <button class="workspace-summary-card as-button" type="button" data-panel-open="checkin"><strong>Check-in Inteligente</strong><small>Registro rapido o conversacion futura con ZENIN.</small></button>
      <button class="workspace-summary-card as-button" type="button" data-panel-open="premium"><strong>ZENOVA Premium</strong><small>Beneficios y planes.</small></button>
    </div>
  `;
  $("#openFullSettingsBtn")?.addEventListener("click", () => {
    closeWorkspacePanel();
    openOptions();
  });
  bindPanelOpenButtons();
  panelCloseFooter();
}

function initMinimalWorkspace() {
  $$("[data-workspace-panel]").forEach((button) =>
    button.addEventListener("click", (event) => {
      event.preventDefault();
      openWorkspacePanel(button.dataset.workspacePanel);
    })
  );
  $$("[data-experience-panel]").forEach((button) =>
    button.addEventListener("click", (event) => {
      event.preventDefault();
      openWorkspacePanel(button.dataset.experiencePanel);
    })
  );
  $("#workspacePanelClose")?.addEventListener("click", closeWorkspacePanel);
  $("#workspacePanelBackdrop")?.addEventListener("click", closeWorkspacePanel);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && $("#workspacePanel")?.classList.contains("is-open")) closeWorkspacePanel();
  });
  renderMinimalDashboard();
}

const baseRenderDailyCenterMinimal = renderDailyCenter;
renderDailyCenter = function renderDailyCenterMinimal() {
  baseRenderDailyCenterMinimal();
  renderMinimalDashboard();
  if ($("#workspacePanel")?.classList.contains("is-open")) renderWorkspacePanel();
};

const baseRenderProductPlatformMinimal = renderProductPlatform;
renderProductPlatform = function renderProductPlatformMinimal() {
  baseRenderProductPlatformMinimal();
  renderMinimalDashboard();
  if ($("#workspacePanel")?.classList.contains("is-open")) renderWorkspacePanel();
};

const baseApplyLanguageMinimal = applyLanguage;
applyLanguage = function applyLanguageMinimal() {
  baseApplyLanguageMinimal();
  renderMinimalDashboard();
};

initMinimalWorkspace();

initProductPlatform();

initDailyCenter();
renderFeatureDashboard();

applyLanguage();

const ZeninAvatarExperience = (() => {
  const root = document.documentElement;
  const entranceKeys = ["from-right", "from-bottom", "small-jump"];
  const stateExpressions = {
    calm: "calm",
    greeting: "happy",
    listening: "calm",
    thinking: "curious",
    analyzing: "curious",
    talking: "happy",
    celebrating: "happy",
    proud: "happy",
    curious: "curious",
    concerned: "concerned",
    empathetic: "calm",
    sleeping: "calm",
    surprised: "curious",
    leaving: "calm"
  };
  let typewriterTimer = null;
  let returnTimer = null;

  function avatars(scope = document) {
    return [...scope.querySelectorAll("[data-zenin-avatar]")];
  }

  function choose(values) {
    return values[Math.floor(Math.random() * values.length)];
  }

  function setAvatarState(target, stateName, options = {}) {
    if (!target) return;
    target.dataset.zeninState = stateName;
    target.dataset.zeninExpression = options.expression || stateExpressions[stateName] || "calm";
    if (options.entrance) target.dataset.zeninEntrance = options.entrance;
    if (options.label) target.setAttribute("aria-label", options.label);
  }

  function setAll(stateName, options = {}) {
    avatars().forEach((avatar) => setAvatarState(avatar, stateName, options));
  }

  function loginGreeting() {
    const hour = new Date().getHours();
    const stats = safeJson(localStorage.getItem(ZenovaDesignSystem.storage?.toolStats || "zenovaToolExperienceStats"), {});
    const totalCompletions = Object.values(stats || {}).reduce((sum, item) => sum + Number(item?.completions || 0), 0);
    const previousLogin = localStorage.getItem("zeninAvatarLastLoginAt");
    const absentDays = previousLogin ? Math.floor((Date.now() - Date.parse(previousLogin)) / 86400000) : 0;
    localStorage.setItem("zeninAvatarLastLoginAt", new Date().toISOString());

    if (absentDays >= 7) return "Que gusto volver a verte. Llevabas varios dias sin entrar.";
    if (totalCompletions >= 5) return "He visto avances importantes. Hoy podemos seguir con calma.";
    if (hour < 12) return "Buenos dias. Estoy aqui, vamos paso a paso.";
    if (hour < 19) return "Buenas tardes. Podemos cuidar este momento juntos.";
    return "Buenas noches. Hoy podemos ir con calma.";
  }

  function safeJson(value, fallback) {
    try {
      return JSON.parse(value || "");
    } catch (error) {
      return fallback;
    }
  }

  function writeBubble(text, options = {}) {
    const node = options.node || $("#cinematicText");
    if (!node) return;
    window.clearInterval(typewriterTimer);
    const finalText = String(text || "");
    const prefersReduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (prefersReduced || options.instant) {
      node.textContent = finalText;
      return;
    }
    node.textContent = "";
    let index = 0;
    typewriterTimer = window.setInterval(() => {
      index += 1;
      node.textContent = finalText.slice(0, index);
      if (index >= finalText.length) window.clearInterval(typewriterTimer);
    }, options.speed || 22);
  }

  function prepareLoginIntro() {
    const avatar = $("#welcomeCinematic [data-zenin-avatar]");
    const entrance = choose(entranceKeys);
    setAvatarState(avatar, "greeting", { entrance, label: "ZENIN saludando al iniciar sesion" });
    writeBubble(loginGreeting());
    window.setTimeout(() => setAvatarState(avatar, "proud", { entrance }), 1400);
    window.setTimeout(() => setAvatarState(avatar, "calm", { entrance }), 3100);
    return 4600;
  }

  function leaveIntro() {
    const avatar = $("#welcomeCinematic [data-zenin-avatar]");
    setAvatarState(avatar, "leaving", { label: "ZENIN despidiendose" });
  }

  function react(kind, payload = {}) {
    const chatAvatar = $(".chat-card [data-zenin-avatar]");
    if (!chatAvatar) return;
    window.clearTimeout(returnTimer);
    if (kind === "tool.completed") {
      setAvatarState(chatAvatar, "celebrating", { label: "ZENIN celebrando una herramienta completada" });
      returnTimer = window.setTimeout(() => setAvatarState(chatAvatar, "listening"), 3600);
      return;
    }
    if (kind === "user.typing") {
      setAvatarState(chatAvatar, payload.active ? "listening" : "calm");
      return;
    }
    if (kind === "thinking") {
      setAvatarState(chatAvatar, "thinking", { label: "ZENIN pensando" });
      return;
    }
    if (kind === "talking") {
      setAvatarState(chatAvatar, "talking", { label: "ZENIN hablando" });
      returnTimer = window.setTimeout(() => setAvatarState(chatAvatar, "listening"), 2600);
    }
  }

  function bind() {
    $("#cinematicSkipBtn")?.addEventListener("click", () => {
      document.dispatchEvent(new CustomEvent("zenin:intro-skip"));
    });
    $("#chatInput")?.addEventListener("input", (event) => {
      react("user.typing", { active: Boolean(event.target.value.trim()) });
    });
    $("#chatForm")?.addEventListener(
      "submit",
      () => {
        react("thinking");
        window.setTimeout(() => react("talking"), 560);
      },
      true
    );
    document.addEventListener("visibilitychange", () => {
      root.classList.toggle("zenin-motion-paused", document.hidden);
    });
    window.matchMedia?.("(prefers-reduced-motion: reduce)")?.addEventListener?.("change", (event) => {
      root.classList.toggle("zenin-motion-paused", event.matches);
    });
  }

  return {
    bind,
    prepareLoginIntro,
    leaveIntro,
    react,
    setAvatarState,
    setAll,
    writeBubble
  };
})();

window.ZeninAvatarExperience = ZeninAvatarExperience;
ZeninAvatarExperience.bind();

const ZenovaLifecycle = (() => {
  const root = document.documentElement;
  const scrollKeys = new Set(["ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight", "PageDown", "PageUp", "Home", "End", " "]);
  let scrollLocked = false;
  let splashTimer = null;
  let scrollBehaviorFrame = null;
  let previousRootScrollBehavior = null;
  let previousBodyScrollBehavior = null;

  function protectedShell() {
    return $$("[data-protected-shell]");
  }

  function resetViewport() {
    if (previousRootScrollBehavior === null) {
      previousRootScrollBehavior = root.style.scrollBehavior;
      previousBodyScrollBehavior = document.body.style.scrollBehavior;
    }
    if (scrollBehaviorFrame) {
      window.cancelAnimationFrame(scrollBehaviorFrame);
    }
    root.style.scrollBehavior = "auto";
    document.body.style.scrollBehavior = "auto";
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    scrollBehaviorFrame = window.requestAnimationFrame(() => {
      root.style.scrollBehavior = previousRootScrollBehavior;
      document.body.style.scrollBehavior = previousBodyScrollBehavior;
      previousRootScrollBehavior = null;
      previousBodyScrollBehavior = null;
      scrollBehaviorFrame = null;
    });
  }

  function lockScroll() {
    scrollLocked = true;
    resetViewport();
    root.classList.add("zenova-scroll-locked");
    document.body.classList.add("zenova-scroll-locked");
  }

  function unlockScroll() {
    scrollLocked = false;
    root.classList.remove("zenova-scroll-locked");
    document.body.classList.remove("zenova-scroll-locked");
    resetViewport();
  }

  function blockScroll(event) {
    if (!scrollLocked) return;
    if (event.type === "keydown" && !scrollKeys.has(event.key)) return;
    event.preventDefault();
  }

  function enforceLockedScroll() {
    if (!scrollLocked) return;
    if (window.scrollX === 0 && window.scrollY === 0) return;
    resetViewport();
  }

  function bindScrollGuards() {
    window.addEventListener("wheel", blockScroll, { capture: true, passive: false });
    window.addEventListener("touchmove", blockScroll, { capture: true, passive: false });
    window.addEventListener("keydown", blockScroll, { capture: true });
    window.addEventListener("scroll", enforceLockedScroll, { capture: true, passive: true });
  }

  function setProtectedVisible(visible) {
    protectedShell().forEach((node) => {
      node.hidden = !visible;
      if (visible) {
        node.removeAttribute("inert");
      } else {
        node.setAttribute("inert", "");
      }
    });
  }

  function setRootMode(mode) {
    root.classList.remove("auth-pending", "session-valid", "session-missing", "zenova-auth-active", "zenova-app-ready", "zenova-splash-active");
    if (mode === "auth") {
      root.classList.add("session-missing", "zenova-auth-active");
      return;
    }
    if (mode === "splash") {
      root.classList.add("session-valid", "zenova-splash-active");
      return;
    }
    root.classList.add("session-valid", "zenova-app-ready");
  }

  function hideSplash(immediate = false) {
    const splash = $("#welcomeCinematic");
    window.clearTimeout(splashTimer);
    splash.classList.remove("is-leaving");
    if (immediate) {
      splash.classList.remove("is-playing");
      return;
    }
    if (!splash.classList.contains("is-playing")) return;
    splash.classList.add("is-leaving");
    splashTimer = window.setTimeout(() => {
      splash.classList.remove("is-playing", "is-leaving");
    }, 460);
  }

  function showAuth(panel = "loginPanel") {
    window.clearTimeout(splashTimer);
    setProtectedVisible(false);
    hideSplash(true);
    setRootMode("auth");
    $("#authModal").classList.add("is-open");
    baseSwitchAuthPanel(panel);
    lockScroll();
    resetViewport();
  }

  function showAppInstant() {
    window.clearTimeout(splashTimer);
    setProtectedVisible(true);
    hideSplash(true);
    $("#authModal").classList.remove("is-open");
    setRootMode("app");
    unlockScroll();
    resetViewport();
  }

  function showSplashThenApp() {
    const splash = $("#welcomeCinematic");
    window.clearTimeout(splashTimer);
    setProtectedVisible(true);
    $("#authModal").classList.remove("is-open");
    setRootMode("splash");
    lockScroll();
    resetViewport();
    splash.classList.remove("is-leaving");
    splash.classList.add("is-playing");
    const introDuration = window.ZeninAvatarExperience?.prepareLoginIntro?.() || 4200;
    let finished = false;

    const finishIntro = () => {
      if (finished) return;
      finished = true;
      window.ZeninAvatarExperience?.leaveIntro?.();
      window.setTimeout(() => {
        hideSplash(false);
        setRootMode("app");
        unlockScroll();
        resetViewport();
      }, 520);
    };

    document.addEventListener("zenin:intro-skip", finishIntro, { once: true });

    window.setTimeout(() => {
      window.ZeninAvatarExperience?.writeBubble?.(t("cinematic.ready"));
    }, Math.min(2600, Math.max(900, introDuration - 1600)));

    splashTimer = window.setTimeout(finishIntro, Math.min(7600, Math.max(3200, introDuration)));
  }

  function boot() {
    bindScrollGuards();
    if (state.session) {
      showAppInstant();
    } else {
      showAuth("loginPanel");
    }
  }

  return {
    boot,
    lockScroll,
    resetViewport,
    setProtectedVisible,
    showAuth,
    showAppInstant,
    showSplashThenApp
  };
})();

const baseSwitchAuthPanel = switchAuthPanel;
switchAuthPanel = function switchAuthPanelLifecycle(panelId) {
  baseSwitchAuthPanel(panelId);
  ZenovaLifecycle.resetViewport();
};

const baseSwitchRecoveryStep = switchRecoveryStep;
switchRecoveryStep = function switchRecoveryStepLifecycle(step) {
  baseSwitchRecoveryStep(step);
  ZenovaLifecycle.resetViewport();
};

openAuth = function openAuthLifecycle(panel = "loginPanel") {
  ZenovaLifecycle.showAuth(panel);
};

closeAuth = function closeAuthLifecycle() {
  if (state.session) {
    ZenovaLifecycle.showAppInstant();
    return;
  }
  ZenovaLifecycle.showAuth("loginPanel");
};

setAuthRenderState = function setAuthRenderStateLifecycle(isAuthenticated) {
  if (isAuthenticated) {
    ZenovaLifecycle.showAppInstant();
  } else {
    ZenovaLifecycle.showAuth("loginPanel");
  }
};

setSession = function setSessionLifecycle(session) {
  state.session = session;
  localStorage.setItem("zenovaSession", JSON.stringify(session));
  window.ZeninCognitive?.events?.publish?.("USER_LOGIN", { name: session?.name, email: session?.email, guest: Boolean(session?.guest) }, { source: "auth", result: "success" });
  updateAuthUi();
  ZenovaLifecycle.showSplashThenApp();
};

logout = function logoutLifecycle() {
  window.ZeninCognitive?.events?.publish?.("USER_LOGOUT", { email: state.session?.email || "", guest: Boolean(state.session?.guest) }, { source: "auth", result: "success" });
  state.session = null;
  localStorage.removeItem("zenovaSession");
  updateAuthUi();
  resetRecoveryFlow();
  setRecoveryMode(false);
  ZenovaLifecycle.showAuth("loginPanel");
};

const ZeninConversationExperience = (() => {
  const storage = {
    messages: "zenin.room.messages.v1",
    memory: "zenin.room.memory.v1",
    lastOpen: "zenin.room.lastOpen.v1",
    greetingIndex: "zenin.room.greetingIndex.v1"
  };
  const placeholders = [
    "Como te sientes?",
    "En que puedo ayudarte?",
    "Que ocurrio hoy?",
    "Quieres contarme algo?",
    "Que necesitas cuidar ahora?"
  ];
  const activities = [
    "Listo para ayudarte",
    "Analizando tu progreso",
    "Aprendiendo de tus habitos",
    "Cuidando tu espacio",
    "Escuchando con calma"
  ];
  const toolCards = [
    { key: "guided-breathing", title: "Respiracion guiada", detail: "3 minutos para bajar activacion.", panel: "action-breathing", state: "calm" },
    { key: "sensory-anchor", title: "Anclaje sensorial", detail: "Vuelve al presente con 5 sentidos.", panel: "action-grounding", state: "listening" },
    { key: "meditation", title: "Meditacion breve", detail: "Pausa suave para observar sin juzgar.", panel: "action-meditation", state: "thinking" },
    { key: "active-break", title: "Pausa activa", detail: "Movimiento ligero para soltar tension.", panel: "action-movement", state: "motivating" },
    { key: "sleep-routine", title: "Rutina sueno", detail: "Prepara descanso con un cierre tranquilo.", panel: "program-sleep", state: "calm" },
    { key: "journal-prompt", title: "Diario breve", detail: "Ordena lo ocurrido con una nota guiada.", panel: "habits", state: "empathetic" },
    { key: "focus-pulse", title: "Pulso de enfoque", detail: "Recupera concentracion con una pausa corta.", panel: "program-focus", state: "thinking" }
  ];
  const backendToolMap = {
    breathing: "guided-breathing",
    grounding: "sensory-anchor",
    meditation: "meditation",
    movement: "active-break",
    sleep: "sleep-routine",
    journal: "journal-prompt",
    focus: "focus-pulse"
  };
  const runtime = {
    open: false,
    thinking: false,
    typingTimer: null,
    placeholderTimer: null,
    placeholderIndex: 0,
    toolOpen: false,
    openedAt: 0,
    previousAccess: "",
    farewellPending: false
  };

  function readJson(key, fallback) {
    try {
      return JSON.parse(localStorage.getItem(key) || "");
    } catch (error) {
      return fallback;
    }
  }

  function writeJson(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  function roomId(prefix) {
    return `${prefix}-${crypto.randomUUID?.() || `${Date.now()}-${Math.random().toString(16).slice(2)}`}`;
  }

  function nowTime() {
    return new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  }

  function readMessages() {
    const messages = readJson(storage.messages, []);
    if (Array.isArray(messages) && messages.length) return messages;
    const firstMessages = [
      {
        id: roomId("zenin-message"),
        role: "zenin",
        content: greetingText(),
        createdAt: new Date().toISOString(),
        cards: []
      }
    ];
    saveMessages(firstMessages);
    return firstMessages;
  }

  function saveMessages(messages) {
    writeJson(storage.messages, messages.slice(-80));
  }

  function readMemory() {
    return {
      remembered: [],
      goals: [],
      lastMood: "Calma",
      sleep: "",
      updatedAt: "",
      ...readJson(storage.memory, {})
    };
  }

  function saveMemory(memory) {
    writeJson(storage.memory, { ...memory, updatedAt: new Date().toISOString() });
  }

  function userId() {
    return state.session?.email || localStorage.getItem("zenovaGuestId") || "guest";
  }

  function conversationId() {
    const key = `zenin.room.conversation.${userId()}`;
    let value = localStorage.getItem(key);
    if (!value) {
      value = roomId("conversation");
      localStorage.setItem(key, value);
    }
    return value;
  }

  function cognitiveSnapshot() {
    return window.ZeninCognitive?.snapshot?.() || {};
  }

  function greetingText() {
    const profileName = typeof state.session?.name === "object" ? state.session.name[state.language] : state.session?.name;
    const name = profileName || getUserProfile().name || "amigo";
    const memory = readMemory();
    const rememberedExam = memory.remembered.find((item) => /examen/i.test(item));
    const previousAccess = runtime.previousAccess || localStorage.getItem(storage.lastOpen) || "";
    const absentDays = previousAccess ? Math.floor((Date.now() - new Date(previousAccess).getTime()) / 86400000) : 0;
    const hour = new Date().getHours();
    const moment = hour < 12 ? "Buenos dias" : hour < 19 ? "Buenas tardes" : "Buenas noches";
    const groups = {
      today: [
        `${moment}, ${name}. Me alegra volver a verte.`,
        `Hola nuevamente, ${name}. Estoy aqui contigo.`,
        `${moment}. Podemos continuar con calma desde donde lo dejamos.`
      ],
      away: [
        `Que gusto volver a verte, ${name}. Hace algunos dias que no conversabamos.`,
        `${moment}, ${name}. Espero que todo haya ido bien estos dias.`,
        `Volviste, ${name}. Podemos retomar sin prisa y cuidar este momento.`
      ],
      first: [
        `${moment}, ${name}. Este es mi espacio dentro de ZENOVA.`,
        `Hola ${name}. Estoy aqui para escucharte, recordar lo importante y ayudarte con calma.`,
        `Bienvenido a mi espacio, ${name}. Podemos hablar con calma sobre lo que necesites.`
      ]
    };
    const group = absentDays >= 2 ? "away" : previousAccess ? "today" : "first";
    const template = nextGreetingTemplate(groups[group]);
    if (rememberedExam) return `${template} Tambien recuerdo que mencionaste un examen. Como termino?`;
    return template;
  }

  function nextGreetingTemplate(templates) {
    const current = Number(localStorage.getItem(storage.greetingIndex) || 0);
    const template = templates[current % templates.length];
    localStorage.setItem(storage.greetingIndex, String(current + 1));
    return template;
  }

  function confidenceScore() {
    const memory = readMemory();
    const cognitive = cognitiveSnapshot().memory || {};
    const count =
      readMessages().length +
      (state.entries?.length || 0) +
      (zenovaProductState.checkins?.length || 0) +
      (zenovaProductState.habits?.length || 0) +
      (cognitive.toolsUsed?.length || 0) +
      memory.remembered.length * 2;
    return Math.min(90, Math.max(15, 15 + count * 4));
  }

  function dynamicInsight() {
    const memory = readMemory();
    const cognitive = cognitiveSnapshot().memory || {};
    const latest = latestCheckin();
    if (memory.sleep) return `Recuerdo que hablaste de dormir ${memory.sleep}. Puedo ayudarte a cuidar ese descanso.`;
    if (latest?.derived?.sleep) return `Hoy noto que registraste ${latest.derived.sleep} horas de sueno.`;
    if ((cognitive.toolsUsed || []).length) return "Terminaste o abriste herramientas de bienestar recientemente.";
    if (daysSinceLastActive(cognitive.activeDays || []) >= 3) return "Hace unos dias no hablabamos. Podemos retomar sin prisa.";
    return "Estoy aprendiendo de tus registros para darte respuestas mas personales.";
  }

  function daysSinceLastActive(activeDays) {
    if (!activeDays.length) return 0;
    const last = activeDays[activeDays.length - 1];
    return Math.floor((Date.now() - new Date(last).getTime()) / 86400000);
  }

  function currentMood() {
    const mood = cognitiveSnapshot().mood?.mood || "Calm";
    const map = {
      Happy: "Feliz",
      Thoughtful: "Pensando",
      Concerned: "Empatico",
      Celebrating: "Celebrando",
      Curious: "Curioso",
      Calm: "Tranquilo",
      Neutral: "Disponible"
    };
    return map[mood] || mood;
  }

  function ensurePortal() {
    let portal = $("#zeninConversationPortal");
    if (portal) return portal;
    portal = document.createElement("section");
    portal.id = "zeninConversationPortal";
    portal.className = "zenin-room-portal";
    portal.hidden = true;
    portal.setAttribute("aria-label", "Espacio de conversacion con ZENIN");
    portal.innerHTML = `
      <div class="zenin-room-backdrop" data-zenin-room-close></div>
      <div class="zenin-room-light-field" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></div>
      <article class="zenin-room-panel" role="dialog" aria-modal="true" aria-labelledby="zeninRoomTitle">
        <button class="zenin-room-close" type="button" data-zenin-room-close aria-label="Cerrar ZENIN">x</button>
        <aside class="zenin-room-presence">
          <div class="zenin-room-avatar-stage" id="zeninRoomAvatarStage"></div>
          <div class="zenin-room-profile">
            <p class="eyebrow">ZENIN</p>
            <h2 id="zeninRoomTitle">Tu companero digital</h2>
            <div class="zenin-room-state-grid">
              <span><strong id="zeninRoomAvailability">Disponible</strong><small>Estado</small></span>
              <span><strong id="zeninRoomMood">Tranquilo</strong><small>Emocion</small></span>
              <span><strong id="zeninRoomTime">--:--</strong><small>Hora</small></span>
              <span><strong id="zeninRoomActivity">Analizando</strong><small>Actividad</small></span>
            </div>
          </div>
          <div class="zenin-room-insight-card">
            <small>Hoy noto</small>
            <p id="zeninRoomInsight">Estoy aprendiendo de tus registros.</p>
          </div>
          <div class="zenin-room-confidence">
            <div><span>ZENIN te conoce</span><strong id="zeninRoomConfidenceLabel">15%</strong></div>
            <i><b id="zeninRoomConfidenceBar"></b></i>
          </div>
        </aside>
        <section class="zenin-room-chat">
          <header class="zenin-room-chat-head">
            <div>
              <p class="eyebrow">ZENIN</p>
              <h3>Tu companero digital</h3>
            </div>
            <div class="zenin-room-head-actions">
              <span class="zenin-room-status-pill" id="zeninRoomTopStatus">● Disponible</span>
              <button class="zenin-room-now" type="button" id="zeninRoomNotNow">No ahora</button>
            </div>
          </header>
          <div class="zenin-room-glow-line" aria-hidden="true"></div>
          <div class="zenin-room-context-loader" id="zeninRoomContextLoader" aria-live="polite" hidden>
            <span data-context-step="history">&#10003; Recuperando historial</span>
            <span data-context-step="context">&#10003; Preparando contexto</span>
            <span data-context-step="habits">&#10003; Analizando habitos</span>
            <span data-context-step="memory">&#10003; Cargando memoria</span>
            <span data-context-step="ready">&#10003; Todo listo</span>
          </div>
          <div class="zenin-room-memory" id="zeninRoomMemory"></div>
          <div class="zenin-room-messages" id="zeninRoomMessages" role="log" aria-live="polite"></div>
          <div class="zenin-room-tool-stage" id="zeninRoomToolStage" hidden></div>
          <form class="zenin-room-composer" id="zeninRoomForm">
            <div class="zenin-room-quick-actions" id="zeninRoomQuickActions" aria-label="Mensajes rapidos para ZENIN">
              <button type="button" data-zenin-quick="¿Cómo me siento hoy?">¿Cómo me siento hoy?</button>
              <button type="button" data-zenin-quick="Analiza mi progreso">Analiza mi progreso</button>
              <button type="button" data-zenin-quick="Necesito motivación">Necesito motivación</button>
              <button type="button" data-zenin-quick="Estoy estresado">Estoy estresado</button>
              <button type="button" data-zenin-quick="Quiero hablar">Quiero hablar</button>
              <button type="button" data-zenin-quick="Ayúdame a organizar mi día">Ayúdame a organizar mi día</button>
              <button type="button" data-zenin-quick="Dormí mal">Dormí mal</button>
            </div>
            <div class="zenin-room-input-shell">
              <textarea id="zeninRoomInput" rows="2" maxlength="1200" autocomplete="off" placeholder="Como te sientes?"></textarea>
              <button type="button" id="zeninRoomAttach" aria-label="Adjuntar registro">+</button>
              <button type="button" id="zeninRoomVoice" aria-label="Grabar voz">Voz</button>
              <button type="button" id="zeninRoomEmoji" aria-label="Emoji">:)</button>
              <button type="button" id="zeninRoomTools" aria-label="Herramientas">Tools</button>
              <button type="submit" aria-label="Enviar">Enviar</button>
            </div>
          </form>
        </section>
      </article>
    `;
    document.body.appendChild(portal);
    bindPortalEvents(portal);
    return portal;
  }

  function ensureFloatingLauncher() {
    let launcher = $("#zeninFloatingLauncher");
    if (launcher) return launcher;
    launcher = document.createElement("button");
    launcher.id = "zeninFloatingLauncher";
    launcher.className = "zenin-floating-launcher";
    launcher.type = "button";
    launcher.dataset.zeninRoomOpen = "";
    launcher.setAttribute("aria-label", "Hablar con ZENIN");
    launcher.setAttribute("data-protected-shell", "");
    launcher.hidden = true;
    launcher.setAttribute("inert", "");
    launcher.innerHTML = `
      <span class="zenin-floating-avatar">${renderZeninAvatarShell("micro", "listening", "calm")}</span>
      <span class="zenin-floating-label">Hablar con ZENIN</span>
    `;
    document.body.appendChild(launcher);
    return launcher;
  }

  function bindPortalEvents(portal) {
    portal.addEventListener("click", (event) => {
      const closeTarget = event.target.closest("[data-zenin-room-close]");
      if (closeTarget) closeWithFarewell(false);
      const toolButton = event.target.closest("[data-zenin-tool]");
      if (toolButton) openInlineTool(toolButton.dataset.zeninTool);
      const quickButton = event.target.closest("[data-zenin-quick]");
      if (quickButton) {
        handleUserMessage(quickButton.dataset.zeninQuick || quickButton.textContent.trim());
      }
    });
    $("#zeninRoomNotNow")?.addEventListener("click", () => closeWithFarewell(true));
    $("#zeninRoomTools")?.addEventListener("click", () => {
      appendZeninMessage("Claro. Puedo abrir una herramienta sin sacarte de esta conversacion.", toolCards);
      setAvatarState("thinking");
    });
    $("#zeninRoomAttach")?.addEventListener("click", attachLatestRecord);
    $("#zeninRoomVoice")?.addEventListener("click", () => appendZeninMessage("La voz quedara lista para una fase futura. Por ahora puedo guardar lo que escribas aqui.", []));
    $("#zeninRoomEmoji")?.addEventListener("click", () => appendZeninMessage("Puedes responder con una palabra simple: calma, ansiedad, cansancio, alegria o tension. Yo la tomare como pista emocional.", []));
    $("#zeninRoomForm")?.addEventListener("submit", (event) => {
      event.preventDefault();
      const input = $("#zeninRoomInput");
      const value = input.value.trim();
      if (!value) return;
      input.value = "";
      autoSizeInput(input);
      handleUserMessage(value);
    });
    $("#zeninRoomInput")?.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" || event.shiftKey) return;
      event.preventDefault();
      $("#zeninRoomForm")?.requestSubmit();
    });
    $("#zeninRoomInput")?.addEventListener("input", (event) => {
      autoSizeInput(event.target);
      setAvatarState("listening");
      window.ZeninCognitive?.trackContext?.({ area: "ZENIN_CHAT", isWriting: true });
    });
    portal.addEventListener("pointermove", (event) => {
      const stage = $("#zeninRoomAvatarStage");
      if (!stage) return;
      const box = stage.getBoundingClientRect();
      const x = Math.max(-1, Math.min(1, (event.clientX - (box.left + box.width / 2)) / (box.width / 2)));
      const y = Math.max(-1, Math.min(1, (event.clientY - (box.top + box.height / 2)) / (box.height / 2)));
      stage.style.setProperty("--zenin-room-look-x", `${x * 5}px`);
      stage.style.setProperty("--zenin-room-look-y", `${y * 3}px`);
    });
  }

  function autoSizeInput(input) {
    if (!input) return;
    input.style.height = "auto";
    const lineHeight = Number.parseFloat(getComputedStyle(input).lineHeight) || 22;
    const maxHeight = lineHeight * 8 + 22;
    input.style.height = `${Math.min(input.scrollHeight, maxHeight)}px`;
    input.style.overflowY = input.scrollHeight > maxHeight ? "auto" : "hidden";
  }

  function render() {
    ensurePortal();
    $("#zeninRoomAvatarStage").innerHTML = renderZeninAvatarShell("conversation", runtime.thinking ? "thinking" : "listening", "calm");
    $("#zeninRoomMood").textContent = currentMood();
    $("#zeninRoomTime").textContent = nowTime();
    $("#zeninRoomActivity").textContent = activities[(new Date().getMinutes() + readMessages().length) % activities.length];
    $("#zeninRoomInsight").textContent = dynamicInsight();
    const confidence = confidenceScore();
    $("#zeninRoomConfidenceLabel").textContent = `${confidence}%`;
    $("#zeninRoomConfidenceBar").style.width = `${confidence}%`;
    renderMemorySummary();
    renderMessages();
    autoSizeInput($("#zeninRoomInput"));
  }

  function setZeninStatus(status, avatarState = "") {
    if ($("#zeninRoomTopStatus")) $("#zeninRoomTopStatus").textContent = `● ${status}`;
    if ($("#zeninRoomAvailability")) $("#zeninRoomAvailability").textContent = status;
    if ($("#zeninRoomActivity")) $("#zeninRoomActivity").textContent = status;
    if (avatarState) setAvatarState(avatarState);
  }

  function startContextLoader(done) {
    const loader = $("#zeninRoomContextLoader");
    if (!loader) {
      done?.();
      return;
    }
    const steps = [...loader.querySelectorAll("[data-context-step]")];
    const labels = ["Recuperando historial", "Preparando contexto", "Analizando habitos", "Cargando memoria", "Todo listo"];
    loader.hidden = false;
    loader.classList.add("is-active");
    steps.forEach((step) => step.classList.remove("is-done"));
    labels.forEach((label, index) => {
      window.setTimeout(() => {
        steps[index]?.classList.add("is-done");
        setZeninStatus(label, index < 4 ? "thinking" : "listening");
      }, index * 170);
    });
    window.setTimeout(() => {
      loader.classList.remove("is-active");
      loader.hidden = true;
      setZeninStatus("Disponible", "listening");
      done?.();
    }, 960);
  }

  function renderMemorySummary() {
    const memory = readMemory();
    const latest = latestCheckin();
    const items = [
      memory.remembered[0] ? `Recuerda: ${memory.remembered[0]}` : "Recuerda: conversacion local",
      memory.goals[0] ? `Meta: ${memory.goals[0]}` : "Meta: elegir un paso pequeno",
      memory.sleep ? `Dormiste: ${memory.sleep}` : latest?.derived?.sleep ? `Dormiste ${latest.derived.sleep} h` : "Sueno: sin registro reciente",
      `Ultimo animo: ${memory.lastMood || latest?.selections?.mood || "Calma"}`
    ];
    $("#zeninRoomMemory").innerHTML = items.map((item) => `<span>${escapeHtml(item)}</span>`).join("");
  }

  function renderMessages() {
    const messages = readMessages();
    const list = $("#zeninRoomMessages");
    list.innerHTML = messages
      .map((message) => {
        const isUser = message.role === "user";
        const cards = message.cards?.length ? renderToolCards(message.cards) : "";
        return `
          <article class="zenin-room-message ${isUser ? "is-user" : "is-zenin"}" data-message-id="${escapeHtml(message.id)}">
            ${isUser ? "" : renderZeninAvatarShell("micro", message.status === "typing" ? "talking" : "listening", "calm")}
            <div class="zenin-room-bubble-wrap">
              <div class="zenin-room-message-meta">${isUser ? "Tu" : "ZENIN"} - ${new Date(message.createdAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</div>
              <p class="zenin-room-bubble">${escapeHtml(message.content)}</p>
              ${cards}
            </div>
          </article>
        `;
      })
      .join("");
    if (runtime.thinking) {
      list.insertAdjacentHTML(
        "beforeend",
        `<article class="zenin-room-message is-zenin is-thinking">${renderZeninAvatarShell("micro", "thinking", "curious")}<div class="zenin-room-bubble-wrap"><div class="zenin-room-message-meta">ZENIN - pensando</div><p class="zenin-room-bubble zenin-thinking-dots"><i></i><i></i><i></i></p></div></article>`
      );
    }
    list.scrollTop = list.scrollHeight;
  }

  function renderToolCards(cards = toolCards) {
    return `
      <div class="zenin-room-tool-cards">
        ${cards
          .map(
            (tool) => `
              <button type="button" data-zenin-tool="${escapeHtml(tool.key)}">
                <strong>${escapeHtml(tool.title)}</strong>
                <span>${escapeHtml(tool.detail)}</span>
              </button>
            `
          )
          .join("")}
      </div>
    `;
  }

  function open(options = {}) {
    const portal = ensurePortal();
    closeWorkspacePanel();
    runtime.previousAccess = localStorage.getItem(storage.lastOpen) || "";
    runtime.openedAt = Date.now();
    runtime.farewellPending = false;
    portal.hidden = false;
    render();
    document.body.classList.add("zenin-room-open");
    window.ZeninCognitive?.events?.publish?.("AI_OPENED", { surface: "zenin-room" }, { source: "zenin-room", result: "open" });
    requestAnimationFrame(() => portal.classList.add("is-open"));
    startPlaceholderLoop();
    startContextLoader(() => {
      localStorage.setItem(storage.lastOpen, new Date().toISOString());
      $("#zeninRoomInput")?.focus({ preventScroll: true });
    });
    if (options.initialPrompt) {
      window.setTimeout(() => handleUserMessage(options.initialPrompt), 920);
    } else {
      maybeSpontaneousMessage();
    }
  }

  function closeWithFarewell(fromNoNow) {
    const stayedLongEnough = runtime.openedAt && Date.now() - runtime.openedAt > 22000;
    if (!fromNoNow && stayedLongEnough && !runtime.farewellPending) {
      runtime.farewellPending = true;
      appendZeninMessage("Hasta luego. Recuerda que aqui estare cuando me necesites.", []);
      setAvatarState("leaving");
      window.setTimeout(closeNow, 900);
      return;
    }
    if (fromNoNow) {
      appendZeninMessage("Entendido. Aqui estare cuando me necesites.", []);
      setAvatarState("leaving");
      window.setTimeout(closeNow, 900);
      return;
    }
    closeNow();
  }

  function closeNow() {
    const portal = ensurePortal();
    portal.classList.remove("is-open");
    document.body.classList.remove("zenin-room-open");
    window.clearInterval(runtime.placeholderTimer);
    runtime.placeholderTimer = null;
    window.ZeninCognitive?.events?.publish?.("AI_CLOSED", { surface: "zenin-room" }, { source: "zenin-room", result: "close" });
    window.setTimeout(() => {
      if (!portal.classList.contains("is-open")) portal.hidden = true;
    }, 360);
  }

  function handleUserMessage(text) {
    appendMessage({ role: "user", content: text, cards: [] });
    updateConversationMemory(text);
    window.ZeninCognitive?.events?.publish?.("AI_OPENED", { userMessageLength: text.length }, { source: "zenin-room", result: "message" });
    runtime.thinking = true;
    setZeninStatus("Pensando", "thinking");
    renderMessages();
    window.clearTimeout(runtime.typingTimer);
    runtime.typingTimer = window.setTimeout(() => {
      resolveZeninReply(text);
    }, 760);
  }

  async function resolveZeninReply(text) {
    try {
      const backendResponse = await window.ZeninBackendClient?.chat?.({
        message: text,
        userId: userId(),
        conversationId: conversationId(),
        clientContext: buildModelPayload(text)
      });
      runtime.thinking = false;
      setZeninStatus("Analizando", "analyzing");
      typeZeninReply(fromBackendResponse(backendResponse, text));
    } catch (error) {
      runtime.thinking = false;
      if (error?.code === "AI_CONFIGURATION_REQUIRED") {
        typeZeninReply({
          content:
            "La arquitectura esta lista. Para continuar necesito que agregues manualmente tu API Key de Gemini en el archivo .env del backend. Cuando la configures, podre seguir con las pruebas de integracion.",
          cards: []
        });
        return;
      }
      setZeninStatus("Recordando", "empathetic");
      typeZeninReply(createReply(text));
    }
  }

  function fromBackendResponse(response, originalText) {
    const toolKey = backendToolMap[response?.suggestedTool] || "";
    const cards = toolKey ? toolCards.filter((tool) => tool.key === toolKey) : createReply(originalText).cards;
    if (response?.emotion) setAvatarState(emotionToAvatarState(response.emotion));
    return {
      content: response?.message || createReply(originalText).content,
      cards,
      autoToolKey: toolKey,
      backend: response
    };
  }

  function emotionToAvatarState(emotion) {
    return {
      happy: "happy",
      thinking: "thinking",
      empathetic: "empathetic",
      calm: "calm",
      neutral: "listening",
      celebrating: "celebrating",
      concerned: "concerned"
    }[emotion] || "listening";
  }

  function appendMessage(message) {
    const messages = readMessages();
    messages.push({
      id: roomId("zenin-message"),
      createdAt: new Date().toISOString(),
      ...message
    });
    saveMessages(messages);
    renderMessages();
  }

  function appendZeninMessage(content, cards = []) {
    appendMessage({ role: "zenin", content, cards });
  }

  function typeZeninReply(reply) {
    const messages = readMessages();
    const message = {
      id: roomId("zenin-message"),
      role: "zenin",
      content: "",
      createdAt: new Date().toISOString(),
      status: "typing",
      cards: []
    };
    messages.push(message);
    saveMessages(messages);
    renderMessages();
    setZeninStatus("Respondiendo", "talking");
    const words = reply.content.split(" ");
    let index = 0;
    const interval = window.setInterval(() => {
      index += 1;
      const current = readMessages();
      const target = current.find((item) => item.id === message.id);
      if (!target) {
        window.clearInterval(interval);
        return;
      }
      target.content = words.slice(0, index).join(" ");
      if (index >= words.length) {
        target.content = reply.content;
        target.status = "done";
        target.cards = reply.cards || [];
        window.clearInterval(interval);
        setZeninStatus(reply.cards?.length ? "Motivando" : "Disponible", reply.cards?.length ? "motivating" : "listening");
        if (reply.autoToolKey) window.setTimeout(() => openInlineTool(reply.autoToolKey), 420);
      }
      saveMessages(current);
      renderMessages();
    }, Math.max(32, Math.min(92, 1200 / Math.max(words.length, 1))));
  }

  function createReply(text) {
    const normalized = normalize(text);
    const memory = readMemory();
    const cards =
      /(nerv|ansiedad|ansioso|estres|panico|tension|agobio|cansad|dormir|sueno|respir)/.test(normalized) ? toolCards : [];
    let content = generateChatReply(text);
    if (/(examen|exam|prueba)/.test(normalized)) {
      content = "Voy a recordarlo. Si quieres, podemos preparar una pausa corta antes o despues del examen para que tu cuerpo no se quede en modo alerta.";
    }
    if (/(nerv|ansiedad|ansioso|panico)/.test(normalized)) {
      content = "Te escucho. Si estas muy nervioso, primero bajemos la exigencia: un ejercicio breve, algo sensorial o respiracion lenta puede ayudarte a recuperar control sin forzarte.";
    }
    if (memory.remembered.some((item) => /examen/i.test(item)) && /(termin|acabe|acab|salio|resultado)/.test(normalized)) {
      content = "Gracias por contarmelo. Tenia presente lo del examen. Ahora podemos cerrar esa tension con una pausa breve o registrar como te quedaste despues.";
    }
    return { content, cards };
  }

  function updateConversationMemory(text) {
    const memory = readMemory();
    const normalized = normalize(text);
    if (/(examen|exam|prueba)/.test(normalized)) pushUnique(memory.remembered, "Examen mencionado");
    if (/(dormir antes|11|once|sueno|sueÃ±o|sleep)/.test(normalized)) {
      memory.sleep = text.match(/\b\d{1,2}\s*h/i)?.[0] || memory.sleep || "objetivo de descanso";
    }
    if (/(meta|objetivo|quiero|necesito)/.test(normalized)) pushUnique(memory.goals, text.slice(0, 80));
    if (/(calma|tranquil)/.test(normalized)) memory.lastMood = "Calma";
    if (/(ansiedad|nerv|tension|estres)/.test(normalized)) memory.lastMood = "Tension";
    saveMemory(memory);
  }

  function pushUnique(list, value) {
    if (!list.includes(value)) list.unshift(value);
    list.splice(8);
  }

  function attachLatestRecord() {
    const latest = latestCheckin();
    if (!latest) {
      appendZeninMessage("Aun no encuentro un registro reciente. Puedes contarme como estas y lo guardare como memoria de conversacion.", []);
      return;
    }
    appendZeninMessage(`Adjunte mentalmente tu ultimo registro: animo ${latest.selections?.mood || "sin dato"}, energia ${latest.selections?.energy || "sin dato"} y estres ${latest.derived?.stress || "sin dato"}.`, []);
  }

  function openInlineTool(key) {
    const tool = toolCards.find((item) => item.key === key) || toolCards[0];
    const stage = $("#zeninRoomToolStage");
    runtime.toolOpen = true;
    setAvatarState(tool.state || "motivating");
    stage.hidden = false;
    stage.innerHTML = `
      <div class="zenin-room-inline-tool">
        <div>
          <small>Herramienta dentro de ZENIN</small>
          <strong>${escapeHtml(tool.title)}</strong>
          <p>${escapeHtml(tool.detail)}</p>
        </div>
        <ol>
          <li>Observa tu cuerpo por diez segundos.</li>
          <li>Haz una accion pequena y repetible.</li>
          <li>Cuando termines, cierra el ejercicio aqui mismo.</li>
        </ol>
        <div>
          <button class="zenin-room-now" type="button" id="zeninRoomToolClose">Cerrar</button>
          <button class="ds-button ds-button--primary" type="button" id="zeninRoomToolDone">Completar</button>
        </div>
      </div>
    `;
    window.ZeninCognitive?.captureZenovaContextItem?.("tool.started", { key: tool.key, title: tool.title });
    $("#zeninRoomToolClose")?.addEventListener("click", () => {
      runtime.toolOpen = false;
      stage.hidden = true;
      setAvatarState("listening");
    });
    $("#zeninRoomToolDone")?.addEventListener("click", () => {
      runtime.toolOpen = false;
      stage.hidden = true;
      window.ZeninCognitive?.captureZenovaContextItem?.("tool.completed", { key: tool.key, title: tool.title, secondsUsed: 60 });
      appendZeninMessage("Excelente trabajo. Lo registro como una accion de cuidado dentro de esta conversacion.", []);
      setAvatarState("celebrating");
    });
  }

  function setAvatarState(name) {
    const avatar = $("#zeninConversationPortal [data-zenin-avatar]");
    if (!avatar) return;
    avatar.dataset.zeninState = name;
    avatar.dataset.zeninExpression = name === "celebrating" ? "happy" : name === "thinking" ? "curious" : "calm";
    const statusMap = {
      thinking: "Pensando",
      talking: "Respondiendo",
      analyzing: "Analizando",
      empathetic: "Recordando",
      concerned: "Escuchando",
      leaving: "Despidiendose",
      celebrating: "Celebrando",
      motivating: "Motivando",
      listening: "Disponible",
      calm: "Disponible"
    };
    const status = statusMap[name] || "Disponible";
    if ($("#zeninRoomAvailability")) $("#zeninRoomAvailability").textContent = status;
    if ($("#zeninRoomTopStatus")) $("#zeninRoomTopStatus").textContent = `● ${status}`;
  }

  function startPlaceholderLoop() {
    const input = $("#zeninRoomInput");
    window.clearInterval(runtime.placeholderTimer);
    runtime.placeholderTimer = window.setInterval(() => {
      if (!input) return;
      runtime.placeholderIndex = (runtime.placeholderIndex + 1) % placeholders.length;
      input.placeholder = placeholders[runtime.placeholderIndex];
    }, 2600);
  }

  function maybeSpontaneousMessage() {
    const messages = readMessages();
    const last = messages[messages.length - 1];
    if (!last || last.role !== "zenin") return;
    renderMessages();
  }

  function upgradeLegacyChatLaunch() {
    const messages = $("#chatMessages");
    const form = $("#chatForm");
    if (messages) {
      messages.innerHTML = `
        <div class="zenin-room-launch-card">
          <strong>El chat ahora vive en ZENIN</strong>
          <p>Entra a una experiencia completa con avatar, memoria, herramientas y conversacion preparada para OpenAI.</p>
          <button class="primary-action" type="button" data-zenin-room-open>Hablar con ZENIN</button>
        </div>
      `;
    }
    form?.classList.add("zenin-legacy-chat-form");
  }

  function bindGlobalLaunchers() {
    document.addEventListener(
      "click",
      (event) => {
        const promptButton = event.target.closest("#chat [data-chat-prompt]");
        const launcher = event.target.closest("[data-zenin-room-open], [data-panel-open='zenin'], [data-workspace-panel='zenin']");
        if (!promptButton && !launcher) return;
        event.preventDefault();
        event.stopImmediatePropagation();
        if (launcher && $("#zeninConversationPortal")?.classList.contains("is-open")) {
          closeWithFarewell(false);
          return;
        }
        const prompt = promptButton?.dataset.chatPrompt || promptButton?.textContent?.trim() || "";
        open(prompt ? { initialPrompt: prompt } : {});
      },
      true
    );
    $("#chatForm")?.addEventListener(
      "submit",
      (event) => {
        event.preventDefault();
        event.stopImmediatePropagation();
        const textValue = $("#chatInput")?.value.trim() || "";
        if ($("#chatInput")) $("#chatInput").value = "";
        open(textValue ? { initialPrompt: textValue } : {});
      },
      true
    );
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && $("#zeninConversationPortal")?.classList.contains("is-open")) closeWithFarewell(false);
    });
  }

  function init() {
    Object.assign(text.es, {
      "hero.zeninTalk": "✨ Hablar con ZENIN",
      "nav.chat": "ZENIN",
      "chat.eyebrow": "Espacio exclusivo ZENIN",
      "chat.title": "Entra al lugar donde vive ZENIN",
      "chat.text":
        "No es un chat tradicional: es una sala inmersiva con avatar vivo, memoria local, herramientas y conversacion preparada para IA futura.",
      "chat.status": "Disponible en su espacio",
      "chat.placeholder": "Escribe para entrar con ZENIN...",
      "chat.send": "Entrar"
    });
    Object.assign(text.en, {
      "hero.zeninTalk": "✨ Talk with ZENIN",
      "nav.chat": "ZENIN",
      "chat.eyebrow": "Exclusive ZENIN space",
      "chat.title": "Enter the place where ZENIN lives",
      "chat.text":
        "This is not a traditional chat: it is an immersive room with a living avatar, local memory, tools, and a future AI-ready conversation.",
      "chat.status": "Available in its space",
      "chat.placeholder": "Write to enter with ZENIN...",
      "chat.send": "Enter"
    });
    Object.assign(text.pt, {
      "hero.zeninTalk": "✨ Falar com ZENIN",
      "nav.chat": "ZENIN",
      "chat.eyebrow": "Espaco exclusivo ZENIN",
      "chat.title": "Entre no lugar onde ZENIN vive",
      "chat.text":
        "Nao e um chat tradicional: e uma sala imersiva com avatar vivo, memoria local, ferramentas e conversa pronta para IA futura.",
      "chat.status": "Disponivel em seu espaco",
      "chat.placeholder": "Escreva para entrar com ZENIN...",
      "chat.send": "Entrar"
    });
    ensureFloatingLauncher();
    applyLanguage();
    upgradeLegacyChatLaunch();
    bindGlobalLaunchers();
  }

  function clipModelText(value, max = 220) {
    return String(value ?? "")
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, max);
  }

  function compactModelValue(value, maxText = 180, depth = 0) {
    if (value === null || value === undefined) return value;
    if (typeof value === "number" || typeof value === "boolean") return value;
    if (typeof value === "string") return clipModelText(value, maxText);
    if (depth >= 3) return clipModelText(safeModelStringify(value), maxText);
    if (Array.isArray(value)) return value.slice(-4).map((item) => compactModelValue(item, maxText, depth + 1));
    if (typeof value === "object") {
      return Object.fromEntries(
        Object.entries(value)
          .slice(0, 8)
          .map(([key, item]) => [key, compactModelValue(item, maxText, depth + 1)])
      );
    }
    return clipModelText(value, maxText);
  }

  function safeModelStringify(value) {
    try {
      return JSON.stringify(value);
    } catch (error) {
      return "";
    }
  }

  function modelPayloadSize(value) {
    return safeModelStringify(value).length;
  }

  function compactMessagesForModel(messages) {
    return (Array.isArray(messages) ? messages : []).slice(-8).map((message) => ({
      role: message.role === "user" ? "user" : "zenin",
      content: clipModelText(message.content, 420),
      createdAt: message.createdAt || ""
    }));
  }

  function compactMemoryForModel(memory) {
    return {
      remembered: (memory.remembered || []).slice(0, 6).map((item) => clipModelText(item, 120)),
      goals: (memory.goals || []).slice(0, 6).map((item) => clipModelText(item, 120)),
      lastMood: clipModelText(memory.lastMood || "Calma", 80),
      sleep: clipModelText(memory.sleep || "", 100),
      updatedAt: memory.updatedAt || ""
    };
  }

  function compactAssessmentForModel(assessment) {
    if (!assessment || typeof assessment !== "object") return null;
    return {
      score: assessment.score ?? assessment.total ?? assessment.value ?? null,
      result: clipModelText(assessment.result || assessment.level || assessment.summary || assessment.label || "", 220),
      selections: compactModelValue(assessment.selections || assessment.answers || {}, 120),
      derived: compactModelValue(assessment.derived || assessment.metrics || {}, 120)
    };
  }

  function compactRecordForModel(record) {
    if (!record || typeof record !== "object") return null;
    return {
      createdAt: record.createdAt || record.date || "",
      title: clipModelText(record.title || record.kind || record.type || "", 120),
      mood: clipModelText(record.selections?.mood || record.mood || record.emotion || "", 100),
      stress: clipModelText(record.derived?.stress || record.stress || "", 100),
      summary: clipModelText(record.summary || record.text || record.content || record.note || "", 220)
    };
  }

  function compactZenovaContextForModel() {
    const profile = getUserProfile();
    return {
      generatedAt: new Date().toISOString(),
      userProfile: {
        name: clipModelText(profile?.name || state.session?.name || "", 120),
        language: state.language || "es",
        guest: Boolean(state.session?.guest)
      },
      latestAssessment: compactAssessmentForModel(state.lastAssessment),
      recentCheckins: (zenovaProductState.checkins || []).slice(-4).map(compactRecordForModel).filter(Boolean),
      habits: (zenovaProductState.habits || []).slice(-6).map((habit) => compactModelValue(habit, 120)),
      goals: (zenovaProductState.goals || []).slice(-6).map((goal) => compactModelValue(goal, 120)),
      agenda: (zenovaLocal.activities || []).slice(-6).map((item) => compactModelValue(item, 120)),
      journalEntries: (zenovaProductState.journals || []).slice(-3).map(compactRecordForModel).filter(Boolean),
      emotionalEntries: (state.entries || []).slice(-5).map((entry) => compactModelValue(entry, 120)),
      timeline: (zenovaProductState.timeline || []).slice(0, 8).map((item) => ({
        kind: item.kind || "",
        createdAt: item.createdAt || "",
        payload: compactModelValue(item.payload || {}, 120)
      }))
    };
  }

  function compactCognitiveForModel() {
    const snapshot = cognitiveSnapshot();
    const memory = snapshot.memory || {};
    return {
      mood: compactModelValue(snapshot.mood || {}, 120),
      currentContext: compactModelValue(snapshot.context || {}, 120),
      personality: compactModelValue(snapshot.personality || {}, 80),
      activeDays: (memory.activeDays || []).slice(-10),
      toolsUsed: (memory.toolsUsed || []).slice(-8).map((tool) => compactModelValue(tool, 120)),
      goals: (memory.goals || []).slice(-6).map((goal) => compactModelValue(goal, 120)),
      habits: (memory.habits || []).slice(-6).map((habit) => compactModelValue(habit, 120)),
      observations: (memory.observations || snapshot.insights || []).slice(0, 5).map((item) => compactModelValue(item, 140)),
      recommendations: (snapshot.recommendations || memory.recommendations || []).slice(0, 5).map((item) => compactModelValue(item, 140))
    };
  }

  function fitModelPayload(payload) {
    if (modelPayloadSize(payload) <= 18000) return payload;

    const compact = {
      ...payload,
      conversation: payload.conversation.slice(-5),
      zenovaContext: {
        ...payload.zenovaContext,
        agenda: payload.zenovaContext.agenda.slice(-4),
        journalEntries: [],
        emotionalEntries: [],
        timeline: payload.zenovaContext.timeline.slice(0, 4)
      },
      cognitive: {
        ...payload.cognitive,
        toolsUsed: payload.cognitive.toolsUsed.slice(-4),
        goals: payload.cognitive.goals.slice(-3),
        habits: [],
        observations: payload.cognitive.observations.slice(0, 3),
        recommendations: payload.cognitive.recommendations.slice(0, 3)
      },
      contextReduced: true
    };
    if (modelPayloadSize(compact) <= 18000) return compact;

    const latestCheckin = compact.zenovaContext.recentCheckins[compact.zenovaContext.recentCheckins.length - 1] || null;
    return {
      userText: clipModelText(payload.userText, 1200),
      conversation: compact.conversation.slice(-3),
      memory: compact.memory,
      zenovaContext: {
        generatedAt: compact.zenovaContext.generatedAt,
        userProfile: compact.zenovaContext.userProfile,
        latestAssessment: compact.zenovaContext.latestAssessment,
        latestCheckin
      },
      cognitive: {
        mood: compact.cognitive.mood,
        currentContext: compact.cognitive.currentContext,
        recommendations: compact.cognitive.recommendations.slice(0, 2)
      },
      uiState: payload.uiState,
      contextReduced: true
    };
  }

  function buildModelPayload(userText = "") {
    const payload = {
      userText: clipModelText(userText, 1200),
      conversation: compactMessagesForModel(readMessages()),
      memory: compactMemoryForModel(readMemory()),
      zenovaContext: compactZenovaContextForModel(),
      cognitive: compactCognitiveForModel(),
      uiState: {
        mood: currentMood(),
        confidence: confidenceScore(),
        toolOpen: runtime.toolOpen
      }
    };
    return fitModelPayload(payload);
  }

  return {
    init,
    open,
    close: closeNow,
    buildModelPayload,
    futureModelHook: {
      buildModelPayload,
      localFallback: createReply
    }
  };
})();

window.ZeninConversationExperience = ZeninConversationExperience;
ZeninConversationExperience.init();

function runZenovaStartupCheck() {
  const checks = {
    frontend: "ok",
    variables: window.ZeninBackendClient?.baseUrl ? "ok" : "warning",
    persistence: (() => {
      try {
        localStorage.setItem("zenova.selfcheck", "ok");
        localStorage.removeItem("zenova.selfcheck");
        return "ok";
      } catch (error) {
        return "warning";
      }
    })(),
    state: state.session ? "ok" : "guest",
    fileProtocol: location.protocol === "file:" ? "warning" : "ok"
  };
  const style = "color:#f5c542;font-weight:800";
  console.log("%c[ZENOVA:FRONTEND:INFO] Verificacion inicial", style, checks);
  window.ZeninBackendClient?.health?.().then((health) => {
    console.log("%c[ZENOVA:API:INFO] Backend/Gemini", style, {
      backend: health.backend || health.status,
      gemini: health.gemini || "unknown",
      timestamp: health.timestamp || new Date().toISOString()
    });
  });
}

runZenovaStartupCheck();

const baseOpenWorkspacePanelForZeninConversation = openWorkspacePanel;
openWorkspacePanel = function openWorkspacePanelWithZeninConversation(kind) {
  if (kind === "zenin") {
    window.ZeninConversationExperience?.open?.();
    return;
  }
  baseOpenWorkspacePanelForZeninConversation(kind);
};

ZenovaLifecycle.boot();
