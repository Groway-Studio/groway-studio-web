import type { Translations } from './types'

export const en: Translations = {
  nav: {
    approach: 'Approach',
    depth: 'Levels',
    method: 'Method',
    proof: 'Proof',
    startups: 'Startups',
    cta: 'Bring us your problem',
  },
  hero: {
    overline: 'AI AGENCY · ENGINEERING + SCIENCE',
    h1: 'AI engineering and science that ships to production.',
    h1Highlight: 'ships to production',
    subhead:
      "We integrate, build custom, train models, and research what doesn't exist yet. We don't start with the technology — we determine with you how much AI depth your problem actually needs.",
    ctaPrimary: 'Bring us the hard problem',
    ctaSecondary: 'Talk to an engineer',
    scroll: 'Scroll',
  },
  approach: {
    eyebrow: 'THE APPROACH',
    thesis: 'We start with the problem. The technology adapts.',
    body: 'Most AI projects die as pilots: demos that impress and never reach production. We work the other way around. First we understand your problem and decide with you how much AI depth it needs — from an integration to research no one has solved yet — then we build it until it works for real.',
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
      { title: 'Diagnose', body: 'We understand the problem and decide together which depth level it needs.' },
      { title: 'Depth', body: 'We pick the level — integrate, build, train or research — and its scope.' },
      { title: 'Deploy', body: 'We ship it to production inside your systems. No orphan pilots.' },
      { title: 'Prove', body: "We measure it with evals on your real data. If it can't be measured, it doesn't ship." },
    ],
  },
  proof: {
    eyebrow: 'PROOF, NOT PROMISES',
    heading: 'Production and numbers. Not demos.',
    fallback: 'Case studies available on request.',
    teamEyebrow: 'WHO BUILDS IT',
    teamBody:
      "Engineers and data scientists who ship AI systems to production. We work forward-deployed: inside your team, not above it.",
    cases: [
      {
        metric: '[CLIENT]',
        title: 'Business outcome in one line.',
        body: 'RAG over your knowledge base with faithfulness evals; Orchestrate level.',
        sector: 'Sector / client',
      },
      {
        metric: '[CLIENT]',
        title: 'Business outcome in one line.',
        body: 'Custom multi-agent system in production; Engineer level.',
        sector: 'Sector / client',
      },
      {
        metric: '[CLIENT]',
        title: 'Business outcome in one line.',
        body: 'Fine-tuned model on domain data + custom evals; Model level.',
        sector: 'Sector / client',
      },
    ],
  },
  startups: {
    eyebrow: 'THE FAST LANE',
    heading: 'For funded startups that need an AI MVP that actually works.',
    body: 'An accelerated lane, not a cheaper version. Same team, same rigor, scoped down to go from idea to product in weeks.',
    packageTitle: 'MVP Package',
    packageTime: '2–4 weeks',
    includes: [
      'One AI use case in production (Orchestrate or Engineer level).',
      'Evals from day one, so you can show it to investors.',
      'Architecture you own, no lock-in.',
    ],
    cta: 'Talk to an engineer',
  },
  contact: {
    eyebrow: "LET'S TALK",
    heading: 'Bring us the hard problem.',
    subhead: 'No sales demos. You start by talking to whoever will build it.',
    fields: {
      name: 'Name',
      email: 'Work email',
      company: 'Company',
      depth: 'What depth do you think you need?',
      depthOptions: ['Not sure', 'Orchestrate', 'Engineer', 'Model', 'Research'],
      problem: 'Tell us the problem',
    },
    submit: 'Send the problem',
    sending: 'Sending…',
    privacy: 'We reply in under 48h. We only use your data to reply to you.',
    successToast: "Got it. We'll get back to you within 48h.",
    errorToast: 'Something went wrong. Email us directly instead.',
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
