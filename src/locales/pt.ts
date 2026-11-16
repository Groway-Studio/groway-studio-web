import type { Translations } from './types'

export const pt: Translations = {
  nav: {
    approach: 'Abordagem', depth: 'Soluções', method: 'Método', proof: 'Equipe',
    startups: 'Startups', academy: 'Academy', cta: 'Fale com a gente',
  },
  hero: {
    overline: 'POTENCIALIZE SUA EMPRESA COM INTELIGÊNCIA ARTIFICIAL',
    h1: 'Sua equipe pode ir além com a inteligência artificial ao seu lado.',
    h1Highlight: 'com a inteligência artificial ao seu lado.',
    subhead: 'Ganhe tempo. Decida melhor. Faça mais com os recursos que você já tem.',
    ctaPrimary: 'Fale com um engenheiro', ctaSecondary: 'Como trabalhamos', scroll: 'Role para baixo',
  },
  approach: {
    eyebrow: 'NOSSA ABORDAGEM',
    thesis: 'Seu negócio tem planos. A IA pode levá-los mais longe.',
    thesisLines: ['Seu negócio tem planos.', 'A IA pode levá-los mais longe.'],
    body: 'Cada negócio tem um desafio diferente. Às vezes, o próximo passo é potencializar o que já funciona. Em outros casos, é criar algo que ainda não existe. Combinamos engenharia e ciência para o seu negócio dar o próximo grande passo.',
  },
  depth: {
    eyebrow: 'QUATRO NÍVEIS DE PROFUNDIDADE',
    heading: 'Quatro formas de colocar a IA para trabalhar por você.',
    intro: 'Com IA, sua equipe pode ganhar tempo, sua próxima ideia pode abrir um mercado e seus dados podem se tornar uma vantagem competitiva. Na Groway Studio, combinamos engenharia e ciência para tornar isso possível, com a abordagem que seu negócio precisa. E, se o caminho ainda não existe, exploramos com você.',
    integrationLabel: 'Agentes de IA conectados às suas ferramentas. Os aplicativos mudam para mostrar exemplos de integrações.',
    integrationCaption: 'Suas ferramentas favoritas. Seus próprios sistemas. Tudo conectado.',
    closingHeading: 'Conte o que você tem em mente.',
    closingBody: 'Vamos mostrar a combinação de engenharia e ciência que você precisa para passar da ideia à ação.',
    cta: 'Fale com um engenheiro',
    levels: [
      {
        id: 'orchestrate', num: '01', name: 'Orchestrate', title: 'Integrar',
        desc: 'Potencializamos as ferramentas que você usa todos os dias com IA. Resultados mais rápidos. Mais precisão. Menos trabalho manual.',
        examples: [],
      },
      {
        id: 'engineer', num: '02', name: 'Engineer', title: 'Construir',
        desc: 'Atenda seus clientes, impulsione suas vendas e agilize sua operação com uma solução de IA sob medida.',
        note: 'Um produto próprio que resolve seu processo, com IA integrada desde a concepção.',
        examples: [
          { title: 'Chatbots conversacionais', body: 'Responda a dúvidas e atenda seus clientes.' },
          { title: 'CRM com IA', body: 'Priorize oportunidades e acompanhe suas vendas.' },
          { title: 'Busca em documentos', body: 'Encontre respostas nas informações da sua empresa.' },
          { title: 'Sistemas de recomendação', body: 'Ofereça produtos relevantes para cada cliente.' },
          { title: 'Tem outra ideia? Vamos construir com você.' },
        ],
      },
      {
        id: 'model', num: '03', name: 'Model', title: 'Treinar',
        desc: 'Quando os modelos existentes não são suficientes, criamos o seu. Treinamos com seus dados e otimizamos para o seu negócio.',
        examples: [
          { title: 'Visão computacional', body: 'Analise imagens e vídeos para reconhecer objetos e detectar defeitos.' },
          { title: 'Modelos de linguagem', body: 'Compreenda documentos, perguntas e o vocabulário do seu setor.' },
          { title: 'Modelos de voz e áudio', body: 'Transcreva conversas e identifique sons e padrões acústicos.' },
          { title: 'Modelos preditivos', body: 'Antecipe demanda, falhas e riscos com dados históricos e sinais em tempo real.' },
          { title: 'Modelos multimodais', body: 'Combine texto, imagens, vídeo e áudio para resolver problemas mais complexos.' },
          { title: 'Seu desafio é outro? Criamos o modelo que você precisa.' },
        ],
      },
      {
        id: 'research', num: '04', name: 'Research', title: 'Pesquisar',
        desc: 'Você tem um desafio que ninguém resolveu? Uma ideia que pode transformar seu setor? Pesquisamos o que é possível e como tornar isso realidade.',
        examples: [],
      },
    ],
    researchCaption: 'E o que ainda está por descobrir.',
    researchTerms: [
      'TinyML', 'Edge AI', 'Visão computacional', 'Reinforcement learning', 'Robótica',
      'NLP', 'GraphRAG', 'RAG', 'IA generativa', 'Voz e áudio', 'Multimodal AI',
      'Federated learning', 'World models', 'Deep learning', 'Agentes de IA',
      'Time series', 'Anomaly detection', 'Embodied AI', 'Knowledge graphs',
      'Neuro-symbolic AI', 'Simulação', 'Digital twins', 'Self-supervised learning',
      'Causal AI', 'Diffusion models', 'SLAM', 'Aprendizado contínuo',
      'Model compression', 'Synthetic data', 'Graph neural networks',
    ],
  },
  method: {
    eyebrow: 'NOSSO MÉTODO', name: 'GROWY DEPTH™',
    heading: 'Quatro etapas, qualquer que seja a profundidade.',
    steps: [
      { title: 'Diagnóstico', body: 'Identificamos onde a IA pode gerar mais valor para o seu negócio e traçamos o caminho para chegar lá. Com a tecnologia certa para o que você precisa.' },
      { title: 'Construção', body: 'Nossos engenheiros e cientistas trabalham em ciclos curtos para você acompanhar os avanços, testar a solução e obter valor desde as primeiras entregas.' },
      { title: 'Medição', body: 'Garantimos que a solução aproxime você dos resultados que busca. Se isso não acontecer, voltamos ao projeto.' },
      { title: 'Otimização', body: 'Garantimos que seus resultados se sustentem ao longo do tempo. Mais velocidade. Menor custo. Maior desempenho.' },
    ],
  },
  proof: {
    eyebrow: 'PROVAS, NÃO PROMESSAS', heading: 'Soluções em produção e resultados medidos com seus dados.',
    fallback: 'Estudos de caso disponíveis mediante solicitação.', teamEyebrow: 'QUEM CONSTRÓI',
    teamBody: 'Engenheiros e cientistas de dados que levam sistemas de IA à produção. Trabalhamos junto com sua equipe, entendendo sua operação de perto.',
    cases: [],
  },
  startups: {
    eyebrow: 'FAIXA RÁPIDA',
    heading: 'Para startups AI-native: da ideia ao mercado a toda velocidade.',
    headingLines: ['Para startups AI-native:', 'da ideia ao mercado', 'a toda velocidade.'],
    body: 'Se sua vantagem competitiva está no modelo, no agente ou nos dados, somos sua equipe de engenharia desde o início. Da ideia ao MVP em semanas, pronto para validar com usuários e investidores reais.',
    packageTitle: 'Pacote MVP', packageTime: '2–4 semanas',
    includes: [
      'Seu MVP completo: da ideia à demo de vendas.',
      'Acompanhamento de negócios e engenharia.',
      'Pacote de horas para desenvolvimento após o lançamento.',
    ],
    cta: 'Construir meu MVP',
  },
  academy: {
    eyebrow: 'GROWAY ACADEMY', heading: 'Aprenda a construir com IA, não apenas a usar.',
    body: 'O mesmo rigor de engenharia que aplicamos nos projetos dos nossos clientes, agora na sua formação. Dois caminhos para objetivos diferentes.',
    tracks: [
      { title: 'Cursos abertos', desc: 'Para profissionais que querem ir além de usar IA e começar a construir com ela.' },
      { title: 'Treinamento para equipes', desc: 'Programas sob medida que levam a IA para o dia a dia da sua equipe.' },
    ],
    cta: 'Monte seu plano de formação',
  },
  contact: {
    eyebrow: 'VAMOS CONVERSAR', heading: 'Conte qual desafio você está enfrentando.',
    subhead: 'Converse com a LucIA, nossa assistente, e receba uma resposta na hora.',
    privacy: 'Usamos seus dados apenas para responder a você.', emailNote: 'Prefere e-mail?',
  },
  chat: {
    launcher: 'Vamos conversar', title: 'LucIA',
    prefillMvp: 'Olá! Tenho interesse no pacote MVP para startups.',
    prefillAcademy: 'Olá! Tenho interesse na Groway Academy. Quero aprender sobre…',
    greeting: 'Olá 👋 Sou a LucIA, da Groway. Me conta: o que você quer resolver com IA?',
    error: 'Ops, a conexão caiu por aqui. Escreva diretamente para hola@groway.studio.',
    placeholder: 'Escreva sua mensagem…', send: 'Enviar', close: 'Fechar chat', typing: 'LucIA está digitando…',
  },
  footer: {
    tagline: 'Engenharia e ciência de IA. Das integrações ao que ninguém resolveu ainda.',
    servicesTitle: 'Serviços', companyTitle: 'Empresa', contactTitle: 'Contato',
    contactEmail: 'hola@groway.studio', copyright: '© 2026 Groway Studio. Todos os direitos reservados.',
  },
  meta: {
    title: 'Groway Studio | Inteligência Artificial Sob Medida para Empresas',
    description: 'Potencialize sua empresa com inteligência artificial. Integrações, soluções sob medida, modelos próprios e pesquisa aplicada. Engenharia e ciência para transformar ideias em resultados.',
  },
}
