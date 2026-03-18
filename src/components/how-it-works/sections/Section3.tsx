import CodePanel from '@/components/how-it-works/ui/CodePanel'

const MONITOR_CONFIG = `
{
  "monitor_id": "mon_a4f2",
  "client_id": "clt_7x9k",
  "themes": [
    "AI infrastructure",
    "LLM cost benchmarking",
    "replacing offshore dev",
    "internal AI tooling",
    "vector database selection"
  ],
  "engagement_types": ["comment", "reaction", "share"],
  "recency_window_hours": 168,
  "dedup_method": "linkedin_urn_hash",
  "cron": "0 */4 * * *",
  "noise_filter": {
    "min_engagement_depth": 2,
    "exclude_job_posts": true,
    "exclude_self_promotion": true
  },
  "output": "icp_gate_queue"
}
`

export default function Section3() {
  return (
    <section id="section-signal-monitor" className="border-t border-border py-20 scroll-mt-16">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.1em] text-muted-foreground">
          Stage 1 — Signal Monitor
        </p>
        <h2 className="mb-5 text-2xl text-foreground">The engine runs every 4 hours.</h2>
        <p className="mb-8 max-w-xl text-[15px] leading-[1.75] text-muted-foreground">
          A cron-based monitor polls public LinkedIn engagement around client-defined keyword themes.
          Each captured event includes the profile URL, engagement type, post context, and timestamp.
          Deduplication runs on a LinkedIn URN hash. The same person appearing across multiple posts
          in the same week is merged to one record with engagement count incremented.
        </p>
        <CodePanel
          code={MONITOR_CONFIG}
          language="json"
          label="Monitor config — example client setup"
        />
      </div>
    </section>
  )
}
