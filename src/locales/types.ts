export type Language = 'en' | 'es' | 'ko'

export interface DepthLevel {
  id: string
  num: string
  name: string
  tagline: string
  desc: string
  ideal: string
  tags: string[]
  deliverable: string
  time: string
  start: string
  success: string
}

export interface MethodStep {
  title: string
  body: string
}

export interface ProofCase {
  /** Hard metric — the visual hero. Empty / placeholder => card is not rendered. */
  metric: string
  title: string
  body: string
  sector: string
}

export interface Translations {
  nav: {
    approach: string
    depth: string
    method: string
    proof: string
    startups: string
    cta: string
  }
  hero: {
    overline: string
    h1: string
    /** substring of h1 rendered in the signature gradient */
    h1Highlight: string
    subhead: string
    ctaPrimary: string
    ctaSecondary: string
    scroll: string
  }
  approach: {
    eyebrow: string
    thesis: string
    body: string
  }
  depth: {
    eyebrow: string
    heading: string
    axis: string
    labels: {
      ideal: string
      deliverable: string
      time: string
      start: string
      success: string
    }
    levels: DepthLevel[]
  }
  method: {
    eyebrow: string
    name: string
    heading: string
    steps: MethodStep[]
  }
  proof: {
    eyebrow: string
    heading: string
    fallback: string
    teamEyebrow: string
    teamBody: string
    cases: ProofCase[]
  }
  startups: {
    eyebrow: string
    heading: string
    body: string
    packageTitle: string
    packageTime: string
    includes: string[]
    cta: string
  }
  contact: {
    eyebrow: string
    heading: string
    subhead: string
    privacy: string
    emailNote: string
  }
  chat: {
    launcher: string
    title: string
    prefillMvp: string
    greeting: string
    error: string
    placeholder: string
    send: string
    close: string
  }
  footer: {
    tagline: string
    servicesTitle: string
    companyTitle: string
    contactTitle: string
    contactEmail: string
    copyright: string
  }
  meta: {
    title: string
    description: string
  }
}
