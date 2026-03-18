const CLASSES = [
  {
    name: 'evaluating',
    weight: '0.82',
    meaning: 'Actively comparing options or asking for recommendations',
    trigger: '"has anyone benchmarked X vs Y"',
    color: 'text-primary',
  },
  {
    name: 'active_buyer',
    weight: '0.78',
    meaning: 'Mentions timeline, budget, or a switching decision',
    trigger: '"we\'re building out X this quarter"',
    color: 'text-[#16A34A]',
  },
  {
    name: 'category_engaged',
    weight: '0.52',
    meaning: 'Thoughtful engagement with the topic, no evaluation language',
    trigger: '"good breakdown of the tradeoffs here"',
    color: 'text-foreground',
  },
  {
    name: 'surface_engagement',
    weight: '0.18',
    meaning: 'Generic positive reaction, minimal signal value',
    trigger: '"great post", "love this"',
    color: 'text-muted-foreground',
  },
  {
    name: 'disqualified',
    weight: '0.00',
    meaning: 'Job posts, self-promotion, off-topic content',
    trigger: '"we\'re hiring for X role"',
    color: 'text-[#991B1B]',
  },
]

export default function Section5() {
  return (
    <section id="section-ai-classification" className="border-t border-border py-20 scroll-mt-16">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.1em] text-muted-foreground">
          Stage 3 — AI Classification
        </p>
        <h2 className="mb-5 text-3xl text-foreground">What did they actually say, and what does it mean?</h2>
        <p className="mb-8 max-w-xl text-[15px] leading-[1.75] text-muted-foreground">
          OpenAI (via Clay) reads the engagement text and classifies behavioral intent. This is not
          sentiment scoring. It is a behavioral label that determines how claude sonnet 4.6 will write
          the outreach copy in Stage 4.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="pb-3 text-left font-mono text-[11px] uppercase tracking-[0.1em] text-muted-foreground">Class</th>
                <th className="pb-3 text-left font-mono text-[11px] uppercase tracking-[0.1em] text-muted-foreground">Weight</th>
                <th className="pb-3 text-left font-mono text-[11px] uppercase tracking-[0.1em] text-muted-foreground">What it means</th>
                <th className="pb-3 text-left font-mono text-[11px] uppercase tracking-[0.1em] text-muted-foreground">Example trigger</th>
              </tr>
            </thead>
            <tbody>
              {CLASSES.map((c, i) => (
                <tr key={i} className="border-b border-[#1E1E1E] transition-colors hover:bg-[#0F0F0F]">
                  <td className="py-4 pr-6">
                    <span className={`font-mono text-sm ${c.color}`}>{c.name}</span>
                  </td>
                  <td className="py-4 pr-6">
                    <span className={`font-mono text-sm ${
                      c.name === 'evaluating' || c.name === 'active_buyer'
                        ? 'text-[#2DD4BF] opacity-70'
                        : 'text-foreground'
                    }`}>{c.weight}</span>
                  </td>
                  <td className="py-4 pr-6 text-sm text-muted-foreground">{c.meaning}</td>
                  <td className="py-4 text-sm italic text-muted-foreground">{c.trigger}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-6 text-sm text-muted-foreground">
          The classification also triggers which campaign type and copy framework claude sonnet 4.6 will
          use in the next stage.
        </p>
      </div>
    </section>
  )
}
