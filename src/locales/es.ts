import type { Translations } from './types'

export const es: Translations = {
  nav: {
    approach: 'Enfoque',
    depth: 'Niveles',
    method: 'Método',
    proof: 'Pruebas',
    startups: 'Startups',
    cta: 'Tráenos tu problema',
  },
  hero: {
    overline: 'AGENCIA DE IA · INGENIERÍA + CIENCIA',
    h1: 'Ingeniería y ciencia de IA que llega a producción.',
    h1Highlight: 'llega a producción',
    subhead:
      'Integramos, construimos a medida, entrenamos modelos e investigamos lo que aún no existe. No empezamos por la tecnología: determinamos contigo cuánta profundidad de IA necesita tu problema.',
    ctaPrimary: 'Tráenos el problema difícil',
    ctaSecondary: 'Habla con un ingeniero',
    scroll: 'Desliza',
  },
  approach: {
    eyebrow: 'EL ENFOQUE',
    thesis: 'Empezamos por el problema. La tecnología se adapta.',
    body: 'La mayoría de proyectos de IA mueren como pilotos: demos que impresionan y nunca entran en producción. Nosotros hacemos el trabajo al revés. Primero entendemos tu problema y decidimos contigo cuánta profundidad de IA necesita —de una integración a una investigación que nadie ha resuelto todavía— y luego lo construimos hasta que funciona en real.',
  },
  depth: {
    "eyebrow": "CUATRO NIVELES DE PROFUNDIDAD",
    "heading": "¿Qué quieres hacer con IA?",
    "integrationLabel": "Agentes de IA conectados a tus herramientas. Las apps van cambiando para mostrar ejemplos de integraciones.",
    "integrationCaption": "Tus herramientas favoritas. Tus propios sistemas. Todo conectado.",
    "closingHeading": "No necesitas saber qué nivel elegir.",
    "closingBody": "Cuéntanos qué quieres resolver y definimos contigo por dónde empezar.",
    "cta": "Habla con un ingeniero",
    "levels": [
      {
        "id": "orchestrate",
        "num": "01",
        "name": "Orchestrate",
        "title": "Integrar",
        "desc": "Potenciamos las herramientas que usas todos los días con IA. Resultados más rápidos. Mayor precisión. Menos trabajo manual.",
        "examples": []
      },
      {
        "id": "engineer",
        "num": "02",
        "name": "Engineer",
        "title": "Construir",
        "desc": "Atiende clientes, impulsa tus ventas y agiliza tu operación con una solución de IA a medida.",
        "examples": [
          {
            "title": "Chatbots conversacionales",
            "body": "Resuelve consultas y atiende a tus clientes."
          },
          {
            "title": "CRM con IA",
            "body": "Prioriza prospectos y da seguimiento a tus ventas."
          },
          {
            "title": "Buscadores de documentos",
            "body": "Encuentra respuestas en la información de tu empresa."
          },
          {
            "title": "Sistemas de recomendación",
            "body": "Ofrece productos relevantes para cada cliente."
          },
          {
            "title": "¿Tienes otra idea? La construimos contigo."
          }
        ],
        "note": "Un producto propio que resuelve tu proceso, con IA integrada desde el diseño."
      },
      {
        "id": "model",
        "num": "03",
        "name": "Model",
        "title": "Entrenar",
        "desc": "Cuando los modelos existentes no son suficientes, creamos el tuyo. Lo entrenamos con tus datos y lo optimizamos para tu negocio.",
        "examples": [
          {
            "title": "Visión por computador",
            "body": "Analiza imágenes y video para reconocer objetos y detectar defectos."
          },
          {
            "title": "Modelos de lenguaje",
            "body": "Comprende documentos, consultas y vocabulario de tu sector."
          },
          {
            "title": "Modelos de voz y audio",
            "body": "Transcribe conversaciones e identifica sonidos y patrones acústicos."
          },
          {
            "title": "Modelos predictivos",
            "body": "Anticipa demanda, fallas y riesgos con tus datos históricos y señales en tiempo real."
          },
          {
            "title": "Modelos multimodales",
            "body": "Combina texto, imágenes, video y audio para resolver problemas más complejos."
          },
          {
            "title": "¿Tu reto es otro? Creamos el modelo que necesitas."
          }
        ]
      },
      {
        "id": "research",
        "num": "04",
        "name": "Research",
        "title": "Investigar",
        "desc": "¿Tienes un reto que nadie ha resuelto? ¿Una idea que podría cambiar tu industria? Investigamos qué es posible y cómo hacerlo realidad.",
        "examples": []
      }
    ],
    "researchCaption": "Y lo que aún está por descubrir.",
    "researchTerms": [
      "TinyML",
      "Edge AI",
      "Computer vision",
      "Reinforcement learning",
      "Robótica",
      "NLP",
      "GraphRAG",
      "RAG",
      "IA generativa",
      "Voz y audio",
      "Multimodal AI",
      "Federated learning",
      "World models",
      "Deep learning",
      "Agentes de IA",
      "Time series",
      "Anomaly detection",
      "Embodied AI",
      "Knowledge graphs",
      "Neuro-symbolic AI",
      "Simulación",
      "Digital twins",
      "Self-supervised learning",
      "Causal AI",
      "Diffusion models",
      "SLAM",
      "Aprendizaje continuo",
      "Model compression",
      "Synthetic data",
      "Graph neural networks"
    ]
  },
  method: {
    eyebrow: 'NUESTRO MÉTODO',
    name: 'GROWY DEPTH™',
    heading: 'Cuatro pasos, sea cual sea la profundidad.',
    steps: [
      { title: 'Diagnose', body: 'Entendemos el problema y decidimos juntos qué nivel de profundidad necesita.' },
      { title: 'Depth', body: 'Elegimos el nivel —integrar, construir, entrenar o investigar— y su alcance.' },
      { title: 'Deploy', body: 'Lo llevamos a producción dentro de tus sistemas. Sin pilotos huérfanos.' },
      { title: 'Prove', body: 'Lo medimos con evals sobre tus datos reales. Si no se puede medir, no se entrega.' },
    ],
  },
  proof: {
    eyebrow: 'PRUEBAS, NO PROMESAS',
    heading: 'Producción y cifras. No demos.',
    fallback: 'Casos de estudio disponibles bajo petición.',
    teamEyebrow: 'QUIÉN LO CONSTRUYE',
    teamBody:
      'Ingenieros y científicos de datos que llevan sistemas de IA a producción. Trabajamos forward-deployed: dentro de tu equipo, no por encima.',
    // Métricas marcadas como plantilla: se muestran con tratamiento de placeholder
    // hasta que el cliente confirme cifras reales. Nunca inventar datos de clientes.
    cases: [
      {
        metric: '[CLIENTE]',
        title: 'Resultado de negocio en una frase.',
        body: 'RAG sobre tu base de conocimiento con evals de fidelidad; nivel Orchestrate.',
        sector: 'Sector / cliente',
      },
      {
        metric: '[CLIENTE]',
        title: 'Resultado de negocio en una frase.',
        body: 'Sistema multi-agente a medida en producción; nivel Engineer.',
        sector: 'Sector / cliente',
      },
      {
        metric: '[CLIENTE]',
        title: 'Resultado de negocio en una frase.',
        body: 'Modelo afinado sobre datos de dominio + evals propias; nivel Model.',
        sector: 'Sector / cliente',
      },
    ],
  },
  startups: {
    eyebrow: 'CARRIL DE VELOCIDAD',
    heading: 'Para startups con financiación que necesitan un MVP de IA que funcione.',
    body: 'Un carril acelerado, no una versión barata. Mismo equipo, mismo rigor, alcance recortado para ir de idea a producto en semanas.',
    packageTitle: 'Paquete MVP',
    packageTime: '2–4 semanas',
    includes: [
      'Un caso de IA en producción (nivel Orchestrate o Engineer).',
      'Evals desde el día uno, para que puedas enseñárselo a inversores.',
      'Arquitectura tuya, sin lock-in.',
    ],
    cta: 'Habla con un ingeniero',
  },
  contact: {
    eyebrow: 'HABLEMOS',
    heading: 'Tráenos el problema difícil.',
    subhead: 'Sin demos de venta. Empiezas hablando con quien va a construirlo.',
    fields: {
      name: 'Nombre',
      email: 'Email de trabajo',
      company: 'Empresa',
      depth: '¿Qué profundidad crees que necesitas?',
      depthOptions: ['No lo sé', 'Orchestrate', 'Engineer', 'Model', 'Research'],
      problem: 'Cuéntanos el problema',
    },
    submit: 'Enviar el problema',
    sending: 'Enviando…',
    privacy: 'Respondemos en menos de 48 h. Solo usamos tus datos para responderte.',
    successToast: 'Recibido. Te respondemos en menos de 48 h.',
    errorToast: 'Algo falló al enviar. Escríbenos directamente por email.',
  },
  footer: {
    tagline: 'Ingeniería + ciencia de IA. De la integración a lo que nadie ha resuelto todavía.',
    servicesTitle: 'Servicios',
    companyTitle: 'Empresa',
    contactTitle: 'Contacto',
    contactEmail: 'hola@groway.studio',
    copyright: '© 2026 Groway Studio. Todos los derechos reservados.',
  },
  meta: {
    title: 'Groway Studio | Agencia de Inteligencia Artificial a Medida',
    description:
      'Ingeniería y ciencia de IA que llega a producción. Integramos, construimos a medida, entrenamos modelos e investigamos IA aplicada. Sistemas multi-agente, modelos propios y RAG.',
  },
}
