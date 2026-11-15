import type { Translations } from './types'

export const en: Translations = {
  nav: {
    approach: 'Approach',
    depth: 'Levels',
    method: 'Method',
    proof: 'Proof',
    startups: 'Startups',
    academy: 'Academy',
    cta: 'Write to us',
  },
  hero: {
    overline: 'AI AGENCY · ENGINEERING + SCIENCE',
    h1: 'AI engineering and science that ships to production.',
    h1Highlight: 'ships to production',
    subhead:
      "One discipline at four depths — integrate, build, train, or research. We don't start with the technology: we decide with you how far your challenge needs to go.",
    ctaPrimary: 'Talk to an engineer',
    ctaSecondary: 'How we work',
    scroll: 'Scroll',
  },
  approach: {
    eyebrow: 'THE APPROACH',
    thesis: 'We start with the challenge. The technology adapts.',
    body: 'Most AI projects stall as pilots that impress and never reach production. We work the other way around. First we understand your challenge and decide with you how much AI depth it needs — from an integration to research no one has solved yet — then we build it until it works for real.',
  },
  depth: {
    "eyebrow": "FOUR LEVELS OF DEPTH",
    "heading": "What do you want to do with AI?",
    "integrationLabel": "AI agents connected to your tools. The apps change to show examples of integrations.",
    "integrationCaption": "Your favorite tools. Your own systems. All connected.",
    "closingHeading": "You don’t need to pick a level.",
    "closingBody": "Tell us what you want to solve. We’ll find the right starting point together.",
    "cta": "Talk to an engineer",
    "levels": [
      {
        "id": "orchestrate",
        "num": "01",
        "name": "Orchestrate",
        "title": "Integrate",
        "desc": "We power the tools you use every day with AI. Faster results. Greater accuracy. Less manual work.",
        "examples": []
      },
      {
        "id": "engineer",
        "num": "02",
        "name": "Engineer",
        "title": "Build",
        "desc": "Serve customers, grow sales and streamline operations with a custom AI solution.",
        "examples": [
          {
            "title": "Conversational chatbots",
            "body": "Answer questions and support your customers."
          },
          {
            "title": "AI-powered CRM",
            "body": "Prioritize leads and follow up on sales."
          },
          {
            "title": "Document search",
            "body": "Find answers in your company’s information."
          },
          {
            "title": "Recommendation systems",
            "body": "Offer relevant products to each customer."
          },
          {
            "title": "Have another idea? Let’s build it together."
          }
        ],
        "note": "Your own product, built around your process, with AI designed in from the start."
      },
      {
        "id": "model",
        "num": "03",
        "name": "Model",
        "title": "Train",
        "desc": "When existing models aren’t enough, we create yours. Trained on your data. Optimized for your business.",
        "examples": [
          {
            "title": "Computer vision",
            "body": "Analyze images and video to recognize objects and detect defects."
          },
          {
            "title": "Language models",
            "body": "Understand documents, questions and your industry’s vocabulary."
          },
          {
            "title": "Speech and audio models",
            "body": "Transcribe conversations and identify sounds and acoustic patterns."
          },
          {
            "title": "Predictive models",
            "body": "Anticipate demand, failures and risks using historical data and real-time signals."
          },
          {
            "title": "Multimodal models",
            "body": "Combine text, images, video and audio to solve more complex problems."
          },
          {
            "title": "A different challenge? We’ll build the model you need."
          }
        ]
      },
      {
        "id": "research",
        "num": "04",
        "name": "Research",
        "title": "Research",
        "desc": "Facing a challenge no one has solved? An idea that could change your industry? We research what’s possible and how to make it happen.",
        "examples": []
      }
    ],
    "researchCaption": "And what’s still waiting to be discovered.",
    "researchTerms": [
      "TinyML",
      "Edge AI",
      "Computer vision",
      "Reinforcement learning",
      "Robotics",
      "NLP",
      "GraphRAG",
      "RAG",
      "Generative AI",
      "Speech and audio",
      "Multimodal AI",
      "Federated learning",
      "World models",
      "Deep learning",
      "AI agents",
      "Time series",
      "Anomaly detection",
      "Embodied AI",
      "Knowledge graphs",
      "Neuro-symbolic AI",
      "Simulation",
      "Digital twins",
      "Self-supervised learning",
      "Causal AI",
      "Diffusion models",
      "SLAM",
      "Continual learning",
      "Model compression",
      "Synthetic data",
      "Graph neural networks"
    ]
  },
  method: {
    eyebrow: 'OUR METHOD',
    name: 'GROWY DEPTH™',
    heading: 'Four steps, whatever the depth.',
    steps: [
      { title: 'Diagnose', body: 'We understand the challenge and decide together which depth level it needs.' },
      { title: 'Depth', body: 'We pick the level — integrate, build, train or research — and its scope.' },
      { title: 'Deploy', body: 'We ship it to production inside your systems. No orphan pilots.' },
      { title: 'Prove', body: "We measure it with evals on your real data. If it can't be measured, it doesn't ship." },
    ],
  },
  proof: {
    eyebrow: 'PROOF, NOT PROMISES',
    heading: 'Production and numbers, measured on your data.',
    fallback: 'Case studies available on request.',
    teamEyebrow: 'WHO BUILDS IT',
    teamBody:
      "Engineers and data scientists who ship AI systems to production. We work forward-deployed: inside your team, not above it.",
    // ⚠️ MOCK DATA for design preview — replace with client-confirmed cases before launch.
    cases: [
      {
        metric: '−63%',
        title: 'Support response time, from hours to minutes.',
        body: 'RAG over 40k internal documents with faithfulness evals; Orchestrate level.',
        sector: 'E-commerce · LatAm',
      },
      {
        metric: '14 h/day',
        title: 'Of manual operations work eliminated.',
        body: 'Custom multi-agent system in production; Engineer level.',
        sector: 'Logistics · 200+ employees',
      },
      {
        metric: '+21 pts',
        title: 'Accuracy over the best generalist model.',
        body: 'Fine-tuning on domain data + custom eval suite; Model level.',
        sector: 'Legal tech',
      },
    ],
  },
  startups: {
    eyebrow: 'THE FAST LANE',
    heading: 'For AI-native startups — where AI is the product.',
    body: "If your competitive edge is the model, the agent or the data, we're your founding engineering team. From idea to MVP in weeks, ready to validate with real users and investors.",
    packageTitle: 'MVP Package',
    packageTime: '2–4 weeks',
    includes: [
      'Your full MVP: from the AI to the sales demo.',
      'Business and engineering guidance throughout.',
      'A bundle of hours redeemable for post-launch development.',
    ],
    cta: 'Build my MVP',
  },
  academy: {
    eyebrow: 'GROWAY ACADEMY',
    heading: 'Learn to build with AI, not just use it.',
    body: 'The same engineering rigor we build client systems with, now to train you. Two paths, depending on who you are.',
    tracks: [
      {
        title: 'Open courses',
        desc: 'For professionals ready to go from using AI to building with it.',
      },
      {
        title: 'Team training',
        desc: "Tailored programs that bring AI into your team's daily work.",
      },
    ],
    cta: 'Design your training plan',
  },
  contact: {
    eyebrow: "LET'S TALK",
    heading: 'Tell us what challenge you’re facing.',
    subhead: 'Tell LucIA, our assistant, and get an instant response.',
    privacy: 'We only use your data to reply to you.',
    emailNote: 'Prefer email?',
  },
  chat: {
    launcher: "Let's chat",
    title: 'LucIA',
    prefillMvp: "Hi! I'm interested in the startup MVP package.",
    prefillAcademy: "Hi! I'm interested in Groway Academy. I'd like to train in…",
    greeting: "Hi 👋 I'm LucIA, from Groway. Tell me: what do you want to solve with AI?",
    error: 'Oops, something broke on my end. Email us directly at hola@groway.studio.',
    placeholder: 'Type your message…',
    send: 'Send',
    close: 'Close chat',
    typing: 'LucIA is typing…',
  },
  footer: {
    tagline: 'AI engineering + science. From integration to what no one has solved yet.',
    servicesTitle: 'Services',
    companyTitle: 'Company',
    contactTitle: 'Contact',
    contactEmail: 'hola@groway.studio',
    copyright: '© 2026 Groway Studio. All rights reserved.',
  },
  meta: {
    title: 'Groway Studio | Custom AI Development Agency',
    description:
      'AI engineering and science that ships to production. We integrate, build custom, train models and do applied AI research. Multi-agent systems, custom models and RAG.',
  },
}
