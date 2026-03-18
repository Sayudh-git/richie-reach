import MultichannelGrid from '@/components/how-it-works/ui/MultichannelGrid'

export default function Section10() {
  return (
    <section id="section-lemlist" className="border-t border-border py-20 scroll-mt-16">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.1em] text-muted-foreground">
          Stage 8 — Lemlist Multichannel
        </p>
        <h2 className="mb-5 text-2xl text-foreground">Email first. LinkedIn second. One coherent sequence.</h2>
        <p className="mb-10 max-w-xl text-[15px] leading-[1.75] text-muted-foreground">
          Every qualified, scored, enriched record is pushed into Lemlist via Clay webhook. Lemlist
          handles the multichannel coordination. Email from ZapMail mailboxes, LinkedIn profile
          visits, connection requests, and direct messages. Reply detection pauses the sequence
          automatically at any step.
        </p>

        <MultichannelGrid />
      </div>
    </section>
  )
}
