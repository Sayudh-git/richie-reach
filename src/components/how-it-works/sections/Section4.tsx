import GateVisual from '@/components/how-it-works/ui/GateVisual'

const RAW_RECORDS = [
  { name: 'Sarah Mitchell', title: 'VP Engineering', company: 'DataLayer Inc', passed: true },
  { name: 'James Okonkwo', title: 'Head of AI', company: 'NovaTech', passed: true },
  { name: 'Priya Ramanathan', title: 'Director of Platform', company: 'ScaleOps', passed: true },
  { name: 'Tom Berkowitz', title: 'Engineering Manager', company: 'BuildCo', passed: true },
  { name: 'Lisa Chen', title: 'CTO', company: 'Meridian Analytics', passed: true },
  {
    name: 'Raj Patel',
    title: 'Software Engineer',
    company: 'BigCorp',
    passed: false,
    failReason: 'Seniority: IC-level',
  },
  {
    name: 'Emma Fischer',
    title: 'VP Product',
    company: 'Stackwise GmbH',
    passed: false,
    failReason: 'Geo: excluded market',
  },
  {
    name: 'Dan Torres',
    title: 'Founder/CEO',
    company: 'SeedStage Co',
    passed: false,
    failReason: 'Size: 8 employees',
  },
]

const PASSED_RECORDS = [
  { name: 'Sarah Mitchell', title: 'VP Engineering', company: 'DataLayer Inc', passed: true },
  { name: 'Priya Ramanathan', title: 'Director of Platform', company: 'ScaleOps', passed: true },
  { name: 'Lisa Chen', title: 'CTO', company: 'Meridian Analytics', passed: true },
  { name: 'Tom Berkowitz', title: 'Engineering Manager', company: 'BuildCo', passed: true },
]

export default function Section4() {
  return (
    <section id="section-icp-gate" className="border-t border-border py-20 scroll-mt-16">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.1em] text-muted-foreground">
          Stage 2 — ICP Gate
        </p>
        <h2 className="mb-5 text-3xl text-foreground">Enrichment starts here. Not before.</h2>
        <p className="mb-8 max-w-xl text-[15px] leading-[1.75] text-muted-foreground">
          Most teams enrich everything and filter later. That wastes enrichment credits and degrades
          deliverability. The gate runs before enrichment. Records that fail hard gates on title,
          geography, or company size are dropped immediately. Records that fail soft gates are scored
          lower and may fall below the delivery threshold later.
        </p>

        <GateVisual rawRecords={RAW_RECORDS} passedRecords={PASSED_RECORDS} />

        <div className="mt-8 flex flex-wrap gap-8 justify-center">
          <div className="text-center">
            <p className="font-mono text-2xl text-foreground">500</p>
            <p className="mt-1 font-mono text-xs text-muted-foreground">signals monitored</p>
          </div>
          <div className="flex items-center text-border font-mono text-xl">→</div>
          <div className="text-center">
            <p className="font-mono text-2xl text-primary">87</p>
            <p className="mt-1 font-mono text-xs text-muted-foreground">passed the gate</p>
          </div>
          <div className="flex items-center text-border font-mono text-xl">→</div>
          <div className="text-center">
            <p className="font-mono text-2xl text-primary">87</p>
            <p className="mt-1 font-mono text-xs text-muted-foreground">sent to enrichment</p>
          </div>
        </div>

        <p className="mt-6 text-xs text-muted-foreground text-center">
          Records that fail hard gates are dropped immediately. Records that fail soft gates are
          scored lower and may fall below the delivery threshold.
        </p>
      </div>
    </section>
  )
}
