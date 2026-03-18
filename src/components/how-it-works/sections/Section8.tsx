const WATERFALL = [
  {
    tier: 'Tier 1',
    tool: 'Prospeo',
    role: 'Primary enrichment',
    cost: '$0.01 / verified email',
    coverage: '83% match rate',
    api: 'bulk-enrich-person',
  },
  {
    tier: 'Tier 2',
    tool: 'Apollo',
    role: 'Fallback',
    cost: '$0.12 / credit',
    coverage: '+~11% of misses',
    api: 'people/search',
  },
  {
    tier: 'Tier 3',
    tool: 'Hunter',
    role: 'Domain pattern',
    cost: '$0.085 / effective',
    coverage: 'Last resort',
    api: 'email-finder',
  },
]

export default function Section8() {
  return (
    <section id="section-enrichment" className="border-t border-border py-20 scroll-mt-16">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.1em] text-muted-foreground">
          Stage 6 — Enrichment Waterfall
        </p>
        <h2 className="mb-5 text-2xl text-foreground">Three tools. One verified email. $0.87 per run.</h2>
        <p className="mb-8 max-w-xl text-[15px] leading-[1.75] text-muted-foreground">
          Only records that pass the gate and score at or above 0.52 enter the waterfall. Prospeo
          runs first. If no match, Apollo. If no match, Hunter. If all three miss, the record is
          delivered with the LinkedIn URL only and email set to null.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border">
                {['Tier', 'Tool', 'Role', 'Cost', 'Coverage', 'API'].map((h) => (
                  <th key={h} className="pb-3 pr-6 text-left font-mono text-[11px] uppercase tracking-[0.1em] text-muted-foreground">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {WATERFALL.map((row, i) => (
                <tr key={i} className="border-b border-border transition-colors hover:bg-[#0F0F0F]">
                  <td className="py-3 pr-6 font-mono text-xs text-muted-foreground">{row.tier}</td>
                  <td className="py-3 pr-6 font-mono text-sm text-foreground">{row.tool}</td>
                  <td className="py-3 pr-6 text-sm text-muted-foreground">{row.role}</td>
                  <td className="py-3 pr-6 font-mono text-xs text-foreground">{row.cost}</td>
                  <td className="py-3 pr-6 text-sm text-muted-foreground">{row.coverage}</td>
                  <td className="py-3 font-mono text-xs text-muted-foreground">{row.api}</td>
                </tr>
              ))}
              <tr>
                <td colSpan={6} className="py-3 font-mono text-xs text-muted-foreground">
                  All miss → LinkedIn URL only, <span className="text-[#991B1B]">email: null</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded border border-border bg-card px-5 py-4">
            <p className="font-mono text-xs text-muted-foreground">Without ICP gate</p>
            <p className="mt-2 font-mono text-lg text-foreground">$5.00 <span className="text-sm text-muted-foreground">per run</span></p>
            <p className="mt-1 font-mono text-xs text-muted-foreground">500 records × $0.01</p>
          </div>
          <div className="rounded border border-primary bg-emerald-950 px-5 py-4">
            <p className="font-mono text-xs text-muted-foreground">With ICP gate</p>
            <p className="mt-2 font-mono text-lg text-primary">$0.87 <span className="text-sm text-muted-foreground">per run</span></p>
            <p className="mt-1 font-mono text-xs text-muted-foreground">87 records × $0.01</p>
          </div>
        </div>
        <p className="mt-3 font-mono text-xs text-muted-foreground">83% cost reduction from filtering before enrichment.</p>
      </div>
    </section>
  )
}
