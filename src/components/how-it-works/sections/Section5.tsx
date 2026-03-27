'use client'

import { motion } from 'motion/react'

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
    <section id="section-ai-classification" className="border-t border-border py-20 scroll-mt-20">
      <motion.div
        className="mx-auto max-w-6xl px-6"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.5 }}
      >
        <p className="mb-3 section-label">
          <span className="mr-2 inline-flex items-center rounded-full border border-primary bg-emerald-950 px-2 py-0.5 text-primary">03</span>AI Classification
        </p>
        <h2 className="mb-5 text-3xl text-foreground">What did they actually say, and what does it mean?</h2>
        <p className="mb-8 max-w-xl text-[15px] leading-[1.75] text-muted-foreground">
          OpenAI (via Clay) reads the engagement text and classifies behavioral intent. This is not
          sentiment scoring. It is a behavioral label that determines how claude sonnet 4.6 will write
          the outreach copy in Stage 4.
        </p>

        <div className="relative">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="pb-3 text-left text-[12px] section-label">Class</th>
                <th className="pb-3 text-left text-[12px] section-label">Weight</th>
                <th className="pb-3 text-left text-[12px] section-label">What it means</th>
                <th className="pb-3 text-left text-[12px] section-label">Example trigger</th>
              </tr>
            </thead>
            <tbody>
              {CLASSES.map((c, i) => (
                <tr key={i} className="border-b border-border transition-colors hover:bg-card">
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
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#0A0A0A] to-transparent md:hidden" />
        </div>

        <p className="mt-6 text-sm text-muted-foreground">
          The classification also triggers which campaign type and copy framework claude sonnet 4.6 will
          use in the next stage.
        </p>
      </motion.div>
    </section>
  )
}
