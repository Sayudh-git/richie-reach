import Accordion from '@/components/how-it-works/ui/Accordion'
import CodePanel from '@/components/how-it-works/ui/CodePanel'

const SCORING_FORMULA = `
composite_score =
  (signal_type × 0.25)           comment: 1.0  |  share: 0.85  |  reaction: 0.40
  × recency_decay                exp(−0.07 × age_days)  →  half-life ≈ 10 days
  × icp_fit_score                weighted sub-score (below)
  × (engagement_depth × 0.10)   thread 2+ replies: 0.90  |  solo: 0.55

icp_fit_score:
  title_function_match  × 0.28
  seniority_band        × 0.18
  company_size_fit      × 0.18
  industry_vertical     × 0.16
  funding_stage         × 0.10
  tech_stack_signal     × 0.06
  geo_match             × 0.04

Delivery gate:  ≥ 0.52
HIGH:           ≥ 0.74
MED:            0.52 – 0.73
`

const TIERS = [
  {
    label: 'HIGH',
    range: '≥ 0.74',
    desc: 'Enters Lemlist Day 1 sequence. Gets signal_based or whole_offer campaign type.',
    color: 'text-primary',
    borderColor: 'border-primary',
    bgColor: 'bg-emerald-950',
  },
  {
    label: 'MED',
    range: '0.52 – 0.73',
    desc: 'Enters Lemlist sequence. Gets category_engaged copy treatment.',
    color: 'text-amber-400',
    borderColor: 'border-amber-900',
    bgColor: 'bg-amber-950/30',
  },
  {
    label: 'BELOW GATE',
    range: '< 0.52',
    desc: 'Not delivered. Not counted.',
    color: 'text-red-500',
    borderColor: 'border-red-900',
    bgColor: 'bg-red-950/30',
  },
]

export default function Section7() {
  return (
    <section id="section-composite-score" className="border-t border-border py-20 scroll-mt-16">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.1em] text-muted-foreground">
          Stage 5 — Composite Score
        </p>
        <h2 className="mb-5 text-2xl text-foreground">
          Records are scored before delivery. Not all signals are equal.
        </h2>
        <p className="mb-10 max-w-xl text-[15px] leading-[1.75] text-muted-foreground">
          A comment from a VP of Engineering at a Series B SaaS company asking &quot;has anyone
          benchmarked X&quot; scores differently from a reaction from a Marketing Coordinator at a
          bootstrapped 5-person firm. The score is deterministic and auditable.
        </p>

        <Accordion label="Show scoring model">
          <CodePanel code={SCORING_FORMULA} language="plaintext" />
        </Accordion>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {TIERS.map((tier) => (
            <div
              key={tier.label}
              className={`rounded border ${tier.borderColor} ${tier.bgColor} px-5 py-5`}
            >
              <div className="flex items-baseline gap-2">
                <span className={`font-mono text-sm font-semibold ${tier.color}`}>{tier.label}</span>
                <span className="font-mono text-xs text-muted-foreground">{tier.range}</span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{tier.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
