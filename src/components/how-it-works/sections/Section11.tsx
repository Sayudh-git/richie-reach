'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
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
  'Replied - Positive',
  'Meeting Booked',
  'Proposal Sent',
  'Closed',
]

export default function Section11() {
  return (
    <section id="section-hubspot" className="border-t border-border py-20 scroll-mt-20">
      <motion.div
        className="mx-auto max-w-6xl px-6"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.5 }}
      >
        <p className="mb-3 section-label">
          <span className="mr-2 inline-flex items-center rounded-full border border-primary bg-emerald-950 px-2 py-0.5 text-primary">09</span>HubSpot CRM
        </p>
        <h2 className="mb-5 text-3xl text-foreground">Every record is traceable back to its signal.</h2>
        <p className="mb-8 max-w-xl text-[15px] leading-[1.75] text-muted-foreground">
          All active records sync to HubSpot with the full signal metadata attached. Attribution
          from a closed deal back to the signal theme, engagement class, and composite score at time
          of capture is available in the CRM. This is the feedback loop that improves the scoring
          model over time.
          {' '}
          <Link href="/integrations/hubspot" className="text-primary hover:underline">
            See how HubSpot sync works
          </Link>
          {' '}
          Every closed-won deal traces back to the signal theme and engagement class that triggered it -
          which is how the scoring model gets better over time, not just for reporting.
        </p>

        <CodePanel code={HUBSPOT_RECORD} language="json" label="HubSpot contact record - example" />

        <div className="mt-8">
          <p className="mb-3 section-label">
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
      </motion.div>
    </section>
  )
}
