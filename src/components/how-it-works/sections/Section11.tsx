import CodePanel from '@/components/how-it-works/ui/CodePanel'

const HUBSPOT_RECORD = `
{
  "contact_id": "ct_9f2a",
  "signal_theme": "LLM cost benchmarking",
  "engagement_type": "comment",
  "engagement_class": "evaluating",
  "composite_score": 0.81,
  "icp_fit_score": 0.74,
  "enrichment_source": "prospeo_primary",
  "email_verified": true,
  "sequence_id": "seq_7f3k",
  "sequence_stage": "linkedin_connection_sent",
  "reply_status": null,
  "signal_capture_date": "2026-03-14T09:22:00Z",
  "delivery_date": "2026-03-14T18:44:00Z",
  "deal_stage": "sequence_active"
}
`

const DEAL_STAGES = [
  'Signal Captured',
  'Sequence Active',
  'Replied — Positive',
  'Meeting Booked',
  'Proposal Sent',
  'Closed',
]

export default function Section11() {
  return (
    <section id="section-hubspot" className="border-t border-border py-20 scroll-mt-16">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.1em] text-muted-foreground">
          Stage 9 — HubSpot CRM
        </p>
        <h2 className="mb-5 text-2xl text-foreground">Every record is traceable back to its signal.</h2>
        <p className="mb-8 max-w-xl text-[15px] leading-[1.75] text-muted-foreground">
          All active records sync to HubSpot with the full signal metadata attached. Attribution
          from a closed deal back to the signal theme, engagement class, and composite score at time
          of capture is available in the CRM. This is the feedback loop that improves the scoring
          model over time.
        </p>

        <CodePanel code={HUBSPOT_RECORD} language="json" label="HubSpot contact record — example" />

        <div className="mt-8">
          <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.1em] text-muted-foreground">
            Deal stages
          </p>
          <div className="flex flex-wrap gap-2">
            {DEAL_STAGES.map((stage, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="rounded border border-border bg-card px-3 py-1.5 font-mono text-xs text-muted-foreground">
                  {stage}
                </span>
                {i < DEAL_STAGES.length - 1 && (
                  <span className="font-mono text-xs text-border">→</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
