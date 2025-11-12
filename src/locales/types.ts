export type Language = 'en' | 'es';

export interface Translations {
  nav: {
    services: string;
    about: string;
    contact: string;
  };
  hero: {
    overline: string;
    title: {
      line1: string;
      highlight: string;
      line2: string;
    };
    description: string;
    cta: string;
  };
  services: {
    overline: string;
    title: string;
    description: string;
    items: {
      strategy: {
        title: string;
        description: string;
      };
      ml: {
        title: string;
        description: string;
      };
      automation: {
        title: string;
        description: string;
      };
      custom: {
        title: string;
        description: string;
      };
    };
  };
  about: {
    overline: string;
    title: string;
    description: string;
    features: {
      design: {
        title: string;
        description: string;
      };
      results: {
        title: string;
        description: string;
      };
      enterprise: {
        title: string;
        description: string;
      };
    };
    differentiators: string[];
  };
  cta: {
    overline: string;
    title: string;
    description: string;
    button: string;
  };
  footer: {
    description: string;
    copyright: string;
  };
}
