import type { Translations } from './types'

export const ko: Translations = {
  nav: {
    approach: '접근 방식',
    depth: '레벨',
    method: '방법론',
    proof: '성과',
    startups: '스타트업',
    academy: 'Academy',
    cta: '문의하기',
  },
  hero: {
    overline: "인공지능으로 비즈니스의 가능성을 키우세요",
    h1: "인공지능이 함께하면 팀은 더 많은 것을 이룰 수 있습니다.",
    h1Highlight: "팀은 더 많은 것을 이룰 수 있습니다.",
    subhead:
      "시간을 아끼세요. 더 나은 결정을 내리세요. 지금 가진 자원으로 더 많은 것을 이루세요.",
    ctaPrimary: '엔지니어와 상담하기',
    ctaSecondary: '작업 방식 보기',
    scroll: '스크롤',
  },
  approach: {
    thesisLines: ["당신의 비즈니스에는 계획이 있습니다.", "AI와 함께 더 멀리 나아가세요."],
    eyebrow: '우리의 접근',
    thesis: "당신의 비즈니스에는 계획이 있습니다. AI와 함께 더 멀리 나아가세요.",
    body: "비즈니스마다 필요한 해결책은 다릅니다. 이미 잘되는 것을 강화해야 할 때도, 아직 없는 것을 만들어야 할 때도 있습니다. 엔지니어링과 과학을 결합해 비즈니스의 다음 도약을 함께 만듭니다.",
  },
  depth: {
    intro: "AI로 팀의 시간을 아끼고, 새로운 아이디어로 시장을 열고, 데이터를 고유한 경쟁력으로 바꿀 수 있습니다. Groway Studio는 이를 실현하기 위해 비즈니스에 맞는 엔지니어링과 과학을 결합합니다. 아직 길이 없다면 함께 탐구합니다.",
    "eyebrow": "네 가지 깊이 레벨",
    "heading": "AI를 비즈니스의 힘으로 만드는 네 가지 방법.",
    "integrationLabel": "업무 도구에 연결된 AI 에이전트. 다양한 연동 예시가 번갈아 표시됩니다.",
    "integrationCaption": "익숙한 도구. 자체 시스템. 모두 연결됩니다.",
    "closingHeading": "어떤 아이디어를 구상하고 계신가요?",
    "closingBody": "아이디어를 실행으로 옮기는 데 필요한 엔지니어링과 과학의 조합을 제안해 드립니다.",
    "cta": "엔지니어와 상담하기",
    "levels": [
      {
        "id": "orchestrate",
        "num": "01",
        "name": "Orchestrate",
        "title": "통합",
        "desc": "매일 사용하는 도구에 AI를 더합니다. 더 빠른 결과. 더 높은 정확도. 더 적은 수작업.",
        "examples": []
      },
      {
        "id": "engineer",
        "num": "02",
        "name": "Engineer",
        "title": "구축",
        "desc": "맞춤형 AI 솔루션으로 고객을 응대하고, 매출을 높이고, 업무를 간소화하세요.",
        "examples": [
          {
            "title": "대화형 챗봇",
            "body": "고객의 질문에 답하고 상담을 지원합니다."
          },
          {
            "title": "AI CRM",
            "body": "잠재 고객의 우선순위를 정하고 영업을 지원합니다."
          },
          {
            "title": "문서 검색",
            "body": "회사 정보에서 필요한 답을 찾습니다."
          },
          {
            "title": "추천 시스템",
            "body": "고객별로 관련성 높은 제품을 추천합니다."
          },
          {
            "title": "다른 아이디어가 있나요? 함께 만듭니다."
          }
        ],
        "note": "귀사의 업무에 맞춘 자체 제품. 설계부터 AI를 통합합니다."
      },
      {
        "id": "model",
        "num": "03",
        "name": "Model",
        "title": "학습",
        "desc": "기존 모델로 충분하지 않다면 귀사만의 모델을 만듭니다. 귀사의 데이터로 학습하고 비즈니스에 맞게 최적화합니다.",
        "examples": [
          {
            "title": "컴퓨터 비전",
            "body": "이미지와 영상에서 사물을 인식하고 결함을 탐지합니다."
          },
          {
            "title": "언어 모델",
            "body": "문서, 질문, 업계 전문 용어를 이해합니다."
          },
          {
            "title": "음성·오디오 모델",
            "body": "대화를 텍스트로 변환하고 소리와 음향 패턴을 식별합니다."
          },
          {
            "title": "예측 모델",
            "body": "과거 데이터와 실시간 신호로 수요, 고장, 위험을 예측합니다."
          },
          {
            "title": "멀티모달 모델",
            "body": "텍스트, 이미지, 영상, 오디오를 결합해 복잡한 문제를 해결합니다."
          },
          {
            "title": "다른 과제가 있나요? 필요한 모델을 만듭니다."
          }
        ]
      },
      {
        "id": "research",
        "num": "04",
        "name": "Research",
        "title": "연구",
        "desc": "아무도 풀지 못한 과제가 있나요? 업계를 바꿀 아이디어가 있나요? 무엇이 가능한지, 어떻게 실현할지 연구합니다.",
        "examples": []
      }
    ],
    "researchCaption": "아직 발견되지 않은 가능성까지.",
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
    eyebrow: '우리의 방법론',
    name: 'GROWY DEPTH™',
    heading: '어떤 깊이든, 네 단계로.',
    steps: [
      { title: "진단", body: "AI가 비즈니스에 가장 큰 가치를 만들 수 있는 지점을 찾고 실행 경로를 설계합니다. 필요한 만큼의 기술로 시작합니다." },
      { title: "구축", body: "엔지니어와 과학자가 짧은 개발 주기로 작업합니다. 초기 결과물부터 진척을 확인하고 솔루션을 테스트하며 가치를 얻을 수 있습니다." },
      { title: "측정", body: "솔루션이 원하는 성과로 이어지는지 확인합니다. 그렇지 않다면 설계 단계로 돌아갑니다." },
      { title: "최적화", body: "성과가 지속되도록 합니다. 더 빠르게. 더 낮은 비용으로. 더 높은 성능으로." },
    ],
  },
  proof: {
    eyebrow: '약속이 아닌 증명',
    heading: '프로덕션과 숫자로 말합니다. 당신의 데이터로 측정한 결과입니다.',
    fallback: '케이스 스터디는 요청 시 제공됩니다.',
    teamEyebrow: '누가 만드는가',
    teamBody:
      'AI 시스템을 프로덕션까지 보내는 엔지니어와 데이터 사이언티스트. 귀사 팀 위가 아니라 안에서, forward-deployed로 일합니다.',
    // ⚠️ 목업 데이터 — 실제 사례로 교체 필요 (es.ts 참고)
    cases: [
      {
        metric: '−63%',
        title: '고객 지원 응답 시간, 몇 시간에서 몇 분으로.',
        body: '내부 문서 4만 건 RAG + 충실도 평가; Orchestrate 레벨.',
        sector: '이커머스 · LatAm',
      },
      {
        metric: '14시간/일',
        title: '운영 부서의 수작업 제거.',
        body: '맞춤 멀티 에이전트 시스템 프로덕션 운영; Engineer 레벨.',
        sector: '물류 · 200+ 직원',
      },
      {
        metric: '+21pt',
        title: '최고 범용 모델 대비 정확도 향상.',
        body: '도메인 데이터 파인튜닝 + 자체 평가 스위트; Model 레벨.',
        sector: '리걸테크',
      },
    ],
  },
  startups: {
    headingLines: ["AI 네이티브 스타트업을 위해:", "아이디어에서 시장까지", "빠르게."],
    eyebrow: '패스트 레인',
    heading: "AI 네이티브 스타트업을 위해: 아이디어에서 시장까지 빠르게.",
    body: '경쟁력이 모델, 에이전트, 데이터에 있다면 우리가 창업 엔지니어링 팀이 됩니다. 아이디어에서 MVP까지 몇 주 만에, 실제 사용자와 투자자에게 검증할 준비까지 마칩니다.',
    packageTitle: 'MVP 패키지',
    packageTime: '2–4주',
    includes: [
      '완성된 MVP: AI부터 세일즈 데모까지.',
      '비즈니스와 엔지니어링 동반 지원.',
      '출시 후 개발로 전환 가능한 시간 패키지.',
    ],
    cta: '내 MVP 만들기',
  },
  academy: {
    eyebrow: 'GROWAY ACADEMY',
    heading: 'AI를 쓰는 법이 아니라, 만드는 법을 배우세요.',
    body: '고객 시스템을 만들 때와 같은 엔지니어링 수준으로, 이제 당신을 위한 교육을. 당신이 누구인지에 따라 두 가지 길.',
    tracks: [
      {
        title: '공개 과정',
        desc: 'AI를 쓰는 단계에서 직접 만드는 단계로 넘어가려는 전문가를 위해.',
      },
      {
        title: '팀 교육',
        desc: 'AI를 팀의 일상 업무로 들여오는 맞춤 프로그램.',
      },
    ],
    cta: '교육 플랜 설계하기',
  },
  contact: {
    eyebrow: '이야기해요',
    heading: '어떤 과제를 마주하고 계신가요?',
    subhead: '어시스턴트 LucIA에게 말씀해 주시면 즉시 답변해 드립니다.',
    privacy: '데이터는 답변 목적으로만 사용합니다.',
    emailNote: '이메일이 편하시면:',
  },
  chat: {
    launcher: '대화하기',
    title: 'LucIA',
    prefillMvp: '안녕하세요! 스타트업 MVP 패키지에 관심이 있습니다.',
    prefillAcademy: '안녕하세요! Groway Academy에 관심이 있어요. 이런 주제를 배우고 싶어요…',
    greeting: '안녕하세요 👋 Groway의 LucIA예요. AI로 무엇을 해결하고 싶으신가요?',
    error: '앗, 제 쪽에서 문제가 생겼어요. hola@groway.studio 로 직접 메일 주세요.',
    placeholder: '메시지를 입력하세요…',
    send: '보내기',
    close: '채팅 닫기',
    typing: 'LucIA가 입력 중이에요…',
  },
  footer: {
    tagline: 'AI 엔지니어링 + 과학. 통합부터 아무도 풀지 못한 문제까지.',
    servicesTitle: '서비스',
    companyTitle: '회사',
    contactTitle: '연락처',
    contactEmail: 'hola@groway.studio',
    copyright: '© 2026 Groway Studio. All rights reserved.',
  },
  meta: {
    title: 'Groway Studio | 맞춤형 AI 개발 에이전시',
    description:
      '프로덕션에 도달하는 AI 엔지니어링과 과학. 통합, 맞춤 개발, 모델 학습, 응용 AI 연구. 멀티 에이전트 시스템, 맞춤 모델, RAG.',
  },
}
