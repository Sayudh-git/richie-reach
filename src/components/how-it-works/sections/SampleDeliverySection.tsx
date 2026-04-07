'use client'

import { motion } from 'motion/react'

type EngClass = 'evaluating' | 'active_buyer' | 'category_engaged' | 'surface_engagement'

interface DeliveryRow {
  name: string
  title: string
  companyVisible: string
  companyHidden: string | null
  size: string
  industry: string
  location: string
  engType: string
  theme: string
  age: string
  engClass: EngClass
  score: number
  emailDisplay: string
  emailBlurred: boolean
  routing: string
  belowGate: boolean
}

const ROWS: DeliveryRow[] = [
  {
    name: 'J. Hartmann',
    title: 'VP Data Engineering',
    companyVisible: 'Financial',
    companyHidden: '██████',
    size: '2,000–5,000',
    industry: 'Financial Services',
    location: 'New York, NY',
    engType: 'Comment',
    theme: 'Databricks lakehouse migration',
    age: '2 days ago',
    engClass: 'evaluating',
    score: 0.84,
    emailDisplay: 'j.h█████@██████.com',
    emailBlurred: true,
    routing: 'Clay → Sequence A',
    belowGate: false,
  },
  {
    name: 'A. Patel',
    title: 'Head of AI',
    companyVisible: 'Meridian Analytics',
    companyHidden: null,
    size: '500–1,000',
    industry: 'Data & Analytics',
    location: 'San Francisco, CA',
    engType: 'Comment',
    theme: 'LLM cost benchmarking',
    age: '1 day ago',
    engClass: 'active_buyer',
    score: 0.79,
    emailDisplay: '██████@meridian████',
    emailBlurred: true,
    routing: 'Clay → Sequence B',
    belowGate: false,
  },
  {
    name: 'S. Okafor',
    title: 'Director of Platform Eng',
    companyVisible: 'Health',
    companyHidden: '██████',
    size: '1,000–2,000',
    industry: 'Healthcare Tech',
    location: 'Chicago, IL',
    engType: 'Share',
    theme: 'AI in healthcare ops',
    age: '3 days ago',
    engClass: 'category_engaged',
    score: 0.61,
    emailDisplay: 's.o████@██████.com',
    emailBlurred: true,
    routing: 'Clay → Sequence A',
    belowGate: false,
  },
  {
    name: 'M. Lindqvist',
    title: 'CTO',
    companyVisible: 'Stackwise Labs',
    companyHidden: null,
    size: '50–200',
    industry: 'Dev Tools / SaaS',
    location: 'London, UK',
    engType: 'Comment',
    theme: 'Replacing offshore dev capacity',
    age: '4 hours ago',
    engClass: 'evaluating',
    score: 0.91,
    emailDisplay: 'm.l████@stackwise.io',
    emailBlurred: true,
    routing: 'Clay → Sequence B',
    belowGate: false,
  },
  {
    name: 'R. Nakamura',
    title: 'Engineering Manager',
    companyVisible: 'Corp',
    companyHidden: '██████',
    size: '5,000+',
    industry: 'Enterprise SaaS',
    location: 'Austin, TX',
    engType: 'Reaction',
    theme: 'Internal AI tooling decisions',
    age: '6 days ago',
    engClass: 'surface_engagement',
    score: 0.41,
    emailDisplay: '-',
    emailBlurred: false,
    routing: '',
    belowGate: true,
  },
]

const CLASS_COLORS: Record<EngClass, string> = {
  evaluating: 'text-[#2DD4BF]',
  active_buyer: 'text-[#16A34A]',
  category_engaged: 'text-foreground',
  surface_engagement: 'text-muted-foreground',
}

function scoreColor(score: number): string {
  if (score >= 0.74) return 'text-[#2DD4BF]'
  if (score >= 0.52) return 'text-[#16A34A]'
  return 'text-[#991B1B]'
}

const HEADERS = ['NAME', 'TITLE', 'COMPANY', 'SIZE', 'INDUSTRY', 'LOCATION', 'TYPE', 'THEME', 'AGE', 'CLASS', 'SCORE', 'EMAIL', 'ROUTING']

export default function SampleDeliverySection() {
  return (
    <section className="border-t border-border py-20 scroll-mt-20">
      <motion.div
        className="mx-auto max-w-6xl px-6"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.5 }}
      >
        <p className="mb-3 section-label">
          What arrives each week
        </p>
        <h2 className="mb-3 text-3xl text-foreground">
          The delivered record. Every field, every week.
        </h2>
        <p className="mb-8 max-w-xl text-[15px] leading-[1.75] text-muted-foreground">
          This is what lands in your Clay table, CSV, or webhook endpoint after the full
          pipeline runs.
        </p>

        <div className="relative">
          <div className="overflow-x-auto pb-2">
          <table className="w-full border-collapse border border-border">
            <thead>
              <tr className="border-b border-border">
                {HEADERS.map((h) => (
                  <th
                    key={h}
                    className={`px-3 py-2 text-left font-mono text-[12px] text-muted-foreground tracking-wider whitespace-nowrap${h === 'NAME' ? ' sticky left-0 z-10 bg-[#0A0A0A]' : ''}`}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row, i) => (
                <tr
                  key={i}
                  className={`border-b border-border ${i % 2 === 0 ? 'bg-[#0A0A0A]' : 'bg-background'} ${row.belowGate ? 'opacity-40' : ''}`}
                >
                  <td className="px-3 py-2 font-mono text-[12px] text-foreground whitespace-nowrap sticky left-0 z-10 bg-[#0A0A0A]">{row.name}</td>
                  <td className="px-3 py-2 font-mono text-[12px] text-foreground whitespace-nowrap">{row.title}</td>
                  <td className="px-3 py-2 font-mono text-[12px] text-foreground whitespace-nowrap">
                    {row.companyHidden ? (
                      <><span className="select-none" style={{ filter: 'blur(2px)' }}>{row.companyHidden}</span> {row.companyVisible}</>
                    ) : row.companyVisible}
                  </td>
                  <td className="px-3 py-2 font-mono text-[12px] text-foreground whitespace-nowrap">{row.size}</td>
                  <td className="px-3 py-2 font-mono text-[12px] text-foreground whitespace-nowrap">{row.industry}</td>
                  <td className="px-3 py-2 font-mono text-[12px] text-foreground whitespace-nowrap">{row.location}</td>
                  <td className="px-3 py-2 font-mono text-[12px] text-foreground whitespace-nowrap">{row.engType}</td>
                  <td className="px-3 py-2 font-mono text-[12px] text-foreground">{row.theme}</td>
                  <td className="px-3 py-2 font-mono text-[12px] text-foreground whitespace-nowrap">{row.age}</td>
                  <td className="px-3 py-2 font-mono text-[12px] whitespace-nowrap">
                    <span className={CLASS_COLORS[row.engClass]}>{row.engClass}</span>
                  </td>
                  <td className="px-3 py-2 font-mono text-[12px] whitespace-nowrap">
                    <span className={scoreColor(row.score)}>{row.score.toFixed(2)}</span>
                  </td>
                  <td className="px-3 py-2 font-mono text-[12px] text-foreground whitespace-nowrap">
                    {row.emailBlurred ? (
                      <span className="select-none" style={{ filter: 'blur(2px)' }}>{row.emailDisplay}</span>
                    ) : row.emailDisplay}
                  </td>
                  <td className="px-3 py-2 font-mono text-[12px] text-foreground whitespace-nowrap">
                    {row.belowGate ? (
                      <span className="bg-[#991B1B] text-[#FCA5A5] text-[10px] px-1.5 py-0.5 rounded font-mono">
                        Below gate - not delivered
                      </span>
                    ) : row.routing}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#0A0A0A] to-transparent md:hidden" />
        </div>

        <p className="mt-6 text-center text-[14px] text-muted-foreground">
          Delivered every week. Routable into Clay, any CRM, or webhook. Format adjusts to
          your stack.
        </p>
      </motion.div>
    </section>
  )
}
