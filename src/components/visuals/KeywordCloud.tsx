/**
 * Background cloud of AI/ML vocabulary: dim monospace rows drifting slowly
 * behind a section's content, individual terms igniting orange at their own
 * cadence. Real text in the DOM (SEO); aria-hidden because it's decorative.
 *
 * Under prefers-reduced-motion the global CSS freezes drift and ignition.
 */

const TERMS: string[][] = [
  [
    'Reinforcement Learning', 'Fine-tuning', 'RAG', 'Multi-Agent Systems',
    'Quantization', 'Computer Vision', 'Embeddings', 'LLMOps',
    'Synthetic Data', 'Speech-to-Text', 'Knowledge Graphs', 'Function Calling',
  ],
  [
    'Deep Learning', 'TinyML', 'Distillation', 'Evals', 'Transformers',
    'RLHF', 'Vector Databases', 'Edge AI', 'Multimodal AI', 'LoRA',
    'Semantic Search', 'Guardrails',
  ],
  [
    'NLP', 'Model Serving', 'Prompt Engineering', 'Anomaly Detection',
    'Time-Series Forecasting', 'Recommendation Systems', 'OCR',
    'Diffusion Models', 'Model Optimization', 'MLOps', 'Agents', 'Observability',
  ],
]

const N_ROWS = 8

function Row({ rowIndex }: { rowIndex: number }) {
  const terms = TERMS[rowIndex % TERMS.length]
  const drift = rowIndex % 2 === 0 ? 'marquee-left' : 'marquee-right'
  const duration = 90 + (rowIndex % 4) * 25 // very slow, desynced

  const half = () => (
    <span className="flex shrink-0 items-center">
      {terms.map((term, i) => (
        <span key={term} className="flex shrink-0 items-center">
          <span
            className="whitespace-nowrap font-mono text-sm text-fg-subtle"
            style={{
              animation: `kw-ignite ${9 + ((i * 2.7 + rowIndex * 1.9) % 7)}s linear infinite`,
              animationDelay: `${-((i * 3.1 + rowIndex * 4.3) % 11)}s`,
            }}
          >
            {term}
          </span>
          <span className="mx-6 h-0.5 w-0.5 shrink-0 rounded-full bg-accent-9/30" />
        </span>
      ))}
    </span>
  )

  return (
    <div
      className="flex w-max"
      style={{
        animation: `${drift} ${duration}s linear infinite`,
        // stagger horizontal starting phase so rows don't align
        marginLeft: `${-(rowIndex * 13) % 40}%`,
      }}
    >
      {half()}
      {half()}
    </div>
  )
}

export function KeywordCloud({ className }: { className?: string }) {
  return (
    <div aria-hidden="true" className={className}>
      <div className="flex h-full flex-col justify-between overflow-hidden py-4">
        {Array.from({ length: N_ROWS }, (_, i) => (
          <Row key={i} rowIndex={i} />
        ))}
      </div>
    </div>
  )
}
