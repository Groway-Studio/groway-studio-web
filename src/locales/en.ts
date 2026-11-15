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
    thesisLines: ["Your business has plans.", "AI can take them further."],
    eyebrow: 'THE APPROACH',
    thesis: "Your business has plans. AI can take them further.",
    body: "Every business faces a different challenge. Sometimes, the next step is to strengthen what already works. Other times, it means creating something that does not exist yet. We combine engineering and science to help your business take its next big step.",
  },
  depth: {
    intro: "With AI, your team can save time, your next idea can open a market, and your data can become a competitive advantage. At Groway Studio, we combine engineering and science to make this possible, with the approach your business needs. And if the path does not exist yet, we explore it with you.",
    "eyebrow": "FOUR LEVELS OF DEPTH",
    "heading": "Four ways to put AI to work for you.",
    "integrationLabel": "AI agents connected to your tools. The apps change to show examples of integrations.",
    "integrationCaption": "Your favorite tools. Your own systems. All connected.",
    "closingHeading": "Tell us what you have in mind.",
    "closingBody": "We will show you the combination of engineering and science you need to move from idea to action.",
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
      { title: "Diagnosis", body: "We identify where AI can create the most value for your business and map the way forward. With the right amount of technology for what you need." },
      { title: "Construction", body: "Our engineers and scientists work in short cycles so you can see progress, test the solution and gain value from the first deliveries." },
      { title: "Measurement", body: "We make sure the solution brings you closer to the results you want. If it does not, we go back to the drawing board." },
      { title: "Optimization", body: "We make sure your results last. More speed. Lower cost. Better performance." },
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
    headingLines: ["For AI-native startups:", "from idea to market", "at full speed."],
    eyebrow: 'THE FAST LANE',
    heading: "For AI-native startups: from idea to market at full speed.",
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
