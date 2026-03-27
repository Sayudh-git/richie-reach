'use client'

import { motion } from 'motion/react'

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
    <section id="section-zapmail" className="border-t border-border py-20 scroll-mt-20">
      <motion.div
        className="mx-auto max-w-6xl px-6"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.5 }}
      >
        <p className="mb-3 section-label">
          <span className="mr-2 inline-flex items-center rounded-full border border-primary bg-emerald-950 px-2 py-0.5 text-primary">07</span>Outreach Infrastructure (ZapMail)
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
              className="rounded border border-border bg-card px-5 py-4 shadow-[0_1px_3px_rgba(0,0,0,0.4)] transition-all duration-200 hover:border-white/[0.12] hover:shadow-[0_2px_8px_rgba(0,0,0,0.3)]"
            >
              <p className="section-label">
                {fact.label}
              </p>
              <p className="mt-2 text-sm text-foreground">{fact.value}</p>
              <p className="mt-1.5 text-xs text-muted-foreground">{fact.detail}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
