const FACTS = [
  {
    label: 'Domains',
    value: 'Separate from primary',
    detail: 'Provisioned per engagement. Kept isolated to protect client brand deliverability.',
  },
  {
    label: 'Mailboxes',
    value: '10-20 per active client',
    detail: 'Each mailbox goes through a 2-3 week warm-up period before entering active sending rotation.',
  },
  {
    label: 'Daily send limit',
    value: '30-40 per mailbox',
    detail: 'Per industry deliverability best practice. Spread across domains and rotated automatically.',
  },
]

export default function Section9() {
  return (
    <section id="section-zapmail" className="border-t border-border py-20 scroll-mt-16">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.1em] text-muted-foreground">
          Stage 7 — Outreach Infrastructure (ZapMail)
        </p>
        <h2 className="mb-5 text-3xl text-foreground">
          Mailboxes provisioned separately from the primary domain.
        </h2>
        <p className="mb-8 max-w-xl text-[15px] leading-[1.75] text-muted-foreground">
          ZapMail provisions and manages the outreach email mailboxes. These are secondary domains,
          kept separate from the client&apos;s primary domain. ZapMail handles provisioning. Lemlist
          handles execution.
        </p>

        <div className="grid gap-4 sm:grid-cols-3">
          {FACTS.map((fact) => (
            <div
              key={fact.label}
              className="rounded border border-border bg-card px-5 py-4"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted-foreground">
                {fact.label}
              </p>
              <p className="mt-2 text-sm text-foreground">{fact.value}</p>
              <p className="mt-1.5 text-xs text-muted-foreground">{fact.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
