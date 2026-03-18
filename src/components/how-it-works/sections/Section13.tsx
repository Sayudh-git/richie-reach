const MATRIX_ROWS = [
  {
    label: 'Best for',
    signalFeed: 'Teams with their own Clay + sending setup',
    signalRouting: 'Teams that want Clay managed for them',
    managed: 'Teams that want signal-to-reply handled end to end',
  },
  {
    label: 'Client provides',
    signalFeed: 'ICP definition, keyword themes, suppression list',
    signalRouting: 'ICP definition, keyword themes, sending tool access',
    managed: 'ICP definition, keyword themes',
  },
  {
    label: 'Richie Reach owns',
    signalFeed: 'Capture, filtering, classification, scoring, enrichment, delivery',
    signalRouting: 'Everything in Signal Feed + Clay table orchestration + routing',
    managed: 'The entire motion from signal to replied',
  },
  {
    label: 'Client owns',
    signalFeed: 'Clay logic, sequences, sending, CRM',
    signalRouting: 'Sequences, sending, CRM',
    managed: 'The conversations that result',
  },
  {
    label: 'Output format',
    signalFeed: 'CSV, Clay table, or webhook',
    signalRouting: 'Routed into your sending tool',
    managed: 'Replies in your inbox + HubSpot sync',
  },
  {
    label: 'Weekly delivery',
    signalFeed: 'Enriched records with full signal metadata',
    signalRouting: 'Records + delivery report (volume, match rate, suppression)',
    managed: 'Records + copy + performance review (themes, angles, conversions)',
  },
]

const GOOD_FIT = [
  'You sell to a defined ICP and know who you want to reach',
  'Your team has outbound experience but needs better inputs',
  'You want attribution from closed deal back to the original signal',
  'You are tired of buying stale lists and spraying sequences',
  'You value transparency in how your pipeline is built',
]

const NOT_FIT = [
  'You need inbound lead gen or content marketing',
  'Your ICP is undefined or changes every week',
  'You want 10,000 contacts per month at the lowest possible cost',
  'You are not ready to run outbound at all yet',
]

export default function Section13() {
  return (
    <section className="border-t border-border py-20">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.1em] text-muted-foreground">
          How we work together
        </p>
        <h2 className="mb-10 text-2xl text-foreground">Three tiers. Clear ownership at every layer.</h2>

        {/* Ownership matrix table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="pb-3 pr-4 text-left font-mono text-[11px] uppercase tracking-[0.1em] text-muted-foreground w-[140px] min-w-[140px]" />
                <th className="pb-3 px-4 text-left font-mono text-[11px] uppercase tracking-[0.1em] text-muted-foreground">
                  Signal Feed
                </th>
                <th className="pb-3 px-4 text-left font-mono text-[11px] uppercase tracking-[0.1em] text-muted-foreground">
                  Signal Feed + Routing
                </th>
                <th className="pb-3 px-4 text-left font-mono text-[11px] uppercase tracking-[0.1em] text-muted-foreground">
                  <span className="border-b-2 border-primary pb-1">Managed Outbound</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {MATRIX_ROWS.map((row, i) => (
                <tr key={row.label} className={i % 2 === 0 ? 'bg-background' : 'bg-[#0F0F0F]'}>
                  <td className="py-3 pr-4 font-mono text-xs text-muted-foreground align-top min-w-[140px]">
                    {row.label}
                  </td>
                  <td className="py-3 px-4 text-sm text-foreground align-top">{row.signalFeed}</td>
                  <td className="py-3 px-4 text-sm text-foreground align-top">{row.signalRouting}</td>
                  <td className="py-3 px-4 text-sm text-foreground align-top">{row.managed}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Good fit / Not a fit */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          <div className="rounded border border-[#16A34A] bg-[#0D1A0D] px-5 py-5">
            <p className="mb-4 font-mono text-xs font-medium text-[#16A34A]">Good fit if:</p>
            <ul className="space-y-2.5">
              {GOOD_FIT.map((item, i) => (
                <li key={i} className="flex gap-2 text-sm text-foreground">
                  <span className="mt-0.5 shrink-0 text-[#16A34A]">+</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded border border-[#991B1B] bg-[#1A0D0D] px-5 py-5">
            <p className="mb-4 font-mono text-xs font-medium text-[#991B1B]">Probably not if:</p>
            <ul className="space-y-2.5">
              {NOT_FIT.map((item, i) => (
                <li key={i} className="flex gap-2 text-sm text-foreground">
                  <span className="mt-0.5 shrink-0 text-[#991B1B]">-</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Not sure which tier fits?{' '}
          <a href="#contact" className="text-primary hover:underline">Book a 20-minute fit call</a>.
        </p>
      </div>
    </section>
  )
}
