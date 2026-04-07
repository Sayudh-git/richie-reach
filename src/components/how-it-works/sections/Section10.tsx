import Link from 'next/link'
import MultichannelGrid from '@/components/how-it-works/ui/MultichannelGrid'

export default function Section10() {
  return (
    <section id="section-lemlist" className="border-t border-border py-20 scroll-mt-20">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-3 section-label">
          <span className="mr-2 inline-flex items-center rounded-full border border-primary bg-emerald-950 px-2 py-0.5 text-primary">08</span>Lemlist Multichannel
        </p>
        <h2 className="mb-5 text-3xl text-foreground">Email first. LinkedIn second. One coherent sequence.</h2>
        <p className="mb-10 max-w-xl text-[15px] leading-[1.75] text-muted-foreground">
          Every qualified, scored, enriched record is pushed into Lemlist via Clay webhook. Lemlist
          {' '}
          <Link href="/integrations/clay" className="text-primary hover:underline">
            See how Richie Reach delivers records into Clay
          </Link>
          {' '}
          handles the multichannel coordination. Email from ZapMail mailboxes, LinkedIn profile
          visits, connection requests, and direct messages. Reply detection pauses the sequence
          automatically at any step.
        </p>

        <MultichannelGrid />
      </div>
    </section>
  )
}
