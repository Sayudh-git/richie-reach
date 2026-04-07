'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { Mail, Linkedin } from 'lucide-react'

interface GridCell {
  day: string
  channel: 'email' | 'linkedin'
  label: string
  detail: string
  condition?: string
}

interface ForkCell {
  day: string
  isFork: true
  branches: { label: string; detail: string; positive?: boolean }[]
}

const DAYS = ['Day 0', 'Day 1', 'Day 3', 'Day 5', 'Day 7', 'Day 9', 'Day 14']

const EMAIL_CELLS: Record<string, GridCell> = {
  'Day 0': {
    day: 'Day 0',
    channel: 'email',
    label: 'Record enters',
    detail: 'Pushed via Clay webhook. Signal metadata attached.',
  },
  'Day 1': {
    day: 'Day 1',
    channel: 'email',
    label: 'Email 1',
    detail: 'Claude-written. Signal referenced in opener. 60-90 words.',
    condition: 'ZapMail mailbox',
  },
  'Day 9': {
    day: 'Day 9',
    channel: 'email',
    label: 'Email 2',
    detail: 'Follow-up. Different framework. Shorter.',
    condition: 'No reply',
  },
  'Day 14': {
    day: 'Day 14',
    channel: 'email',
    label: 'Final email',
    detail: 'Break-up structure. Last soft ask.',
    condition: 'Still no reply',
  },
}

const LINKEDIN_CELLS: Record<string, GridCell> = {
  'Day 3': {
    day: 'Day 3',
    channel: 'linkedin',
    label: 'Profile visit',
    detail: 'Automated visit. Signals presence.',
    condition: 'No reply',
  },
  'Day 5': {
    day: 'Day 5',
    channel: 'linkedin',
    label: 'Connection request',
    detail: 'Short note using engagement context.',
    condition: 'Not connected',
  },
}

const FORK: ForkCell = {
  day: 'Day 7',
  isFork: true,
  branches: [
    { label: 'Accepted', detail: 'LinkedIn DM sent. Different hook from email.', positive: true },
    { label: 'Not accepted', detail: 'Skip to Day 9.' },
  ],
}

function ConditionBadge({ condition }: { condition: string }) {
  return (
    <span className="mt-1.5 inline-flex items-center rounded-sm bg-[rgba(255,255,255,0.06)] px-1.5 py-0.5 font-mono text-[10px] md:text-[9px] text-muted-foreground border border-border">
      if: {condition}
    </span>
  )
}

// Merge all timeline events into a sorted list for mobile
interface TimelineEvent {
  day: string
  dayNum: number
  channel: 'email' | 'linkedin'
  label: string
  detail: string
  condition?: string
  isFork?: boolean
  branches?: { label: string; detail: string; positive?: boolean }[]
}

function buildTimeline(): TimelineEvent[] {
  const events: TimelineEvent[] = []
  const dayNum = (d: string) => parseInt(d.replace('Day ', ''))

  for (const cell of Object.values(EMAIL_CELLS)) {
    events.push({ ...cell, dayNum: dayNum(cell.day) })
  }
  for (const cell of Object.values(LINKEDIN_CELLS)) {
    events.push({ ...cell, dayNum: dayNum(cell.day) })
  }
  events.push({
    day: FORK.day,
    dayNum: dayNum(FORK.day),
    channel: 'linkedin',
    label: 'Fork',
    detail: '',
    isFork: true,
    branches: FORK.branches,
  })

  events.sort((a, b) => a.dayNum - b.dayNum || (a.channel === 'email' ? -1 : 1))
  return events
}

const MOBILE_TIMELINE = buildTimeline()

export default function MultichannelGrid() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <div ref={ref}>
      {/* Mobile vertical timeline */}
      <div className="md:hidden">
        <div className="relative space-y-0">
          {/* Vertical connector line */}
          <div className="absolute top-0 bottom-0 left-[15px] w-px bg-border" />

          {MOBILE_TIMELINE.map((event, i) => (
            <motion.div
              key={`${event.day}-${event.channel}`}
              initial={{ opacity: 0, x: -8 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -8 }}
              transition={{ type: 'spring', stiffness: 300, damping: 24, delay: i * 0.06 }}
              className="relative flex gap-3 py-2"
            >
              {/* Node dot */}
              <div className="relative z-10 mt-1 flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full border border-border bg-card">
                {event.channel === 'email' ? (
                  <Mail className="h-3.5 w-3.5 text-muted-foreground" />
                ) : (
                  <Linkedin className="h-3.5 w-3.5 text-[#0A66C2]" />
                )}
              </div>

              {/* Content */}
              <div className="min-w-0 flex-1 rounded border border-border bg-card px-3 py-2.5">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] tracking-wider text-muted-foreground">{event.day}</span>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground/60">{event.channel}</span>
                </div>

                {event.isFork ? (
                  <>
                    <p className="mt-1 text-[13px] font-medium text-foreground">Fork</p>
                    <div className="mt-1.5 space-y-1">
                      {event.branches?.map((b, bi) => (
                        <div key={bi} className={`rounded px-2 py-1 text-[12px] ${
                          b.positive
                            ? 'bg-[#0A1A10] text-[#2DD4BF]'
                            : 'bg-background text-muted-foreground'
                        }`}>
                          <span className="font-medium">{b.label}:</span> {b.detail}
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <>
                    <p className="mt-1 text-[13px] font-medium text-foreground">{event.label}</p>
                    <p className="mt-0.5 text-[12px] text-muted-foreground leading-snug">{event.detail}</p>
                    {event.condition && <ConditionBadge condition={event.condition} />}
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Desktop grid */}
      <div className="hidden md:block overflow-x-auto">
        <div className="relative min-w-[700px]">
          {/* Flowing scan highlight - sweeps left-to-right over the grid */}
          <motion.div
            className="pointer-events-none absolute inset-y-0 w-[240px] bg-gradient-to-r from-transparent via-[#2DD4BF]/[0.04] to-transparent"
            animate={{ x: ['-240px', '800px'] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', repeatDelay: 3 }}
          />
          {/* Header row - days */}
          <div className="grid grid-cols-[80px_repeat(7,1fr)] gap-1">
            <div />
            {DAYS.map((day, colIndex) => (
              <motion.div
                key={day}
                initial={{ opacity: 0, y: -4 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -4 }}
                transition={{ duration: 0.3, delay: colIndex * 0.05 }}
                className="px-2 py-2 text-center font-mono text-[11px] font-medium tracking-wider text-muted-foreground"
              >
                {day}
              </motion.div>
            ))}
          </div>

          {/* EMAIL row */}
          <div className="grid grid-cols-[80px_repeat(7,1fr)] gap-1">
            <div className="flex items-center">
              <span className="flex items-center gap-1.5 font-mono text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
                <Mail className="h-3.5 w-3.5 shrink-0" />
                Email
              </span>
            </div>
            {DAYS.map((day, colIndex) => {
              const cell = EMAIL_CELLS[day]
              if (!cell) {
                return (
                  <motion.div
                    key={day}
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.3, delay: colIndex * 0.07 }}
                    className="rounded border border-dashed border-border min-h-[72px]"
                  />
                )
              }
              return (
                <motion.div
                  key={day}
                  initial={{ opacity: 0, y: 6 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
                  transition={{ duration: 0.35, delay: colIndex * 0.07 }}
                  className="rounded border border-border bg-card px-2.5 py-2 min-h-[80px] cursor-default hover:border-[rgba(255,255,255,0.15)] transition-colors"
                >
                  <p className="text-[12px] font-medium text-foreground">{cell.label}</p>
                  <p className="mt-0.5 text-[12px] text-muted-foreground leading-snug">{cell.detail}</p>
                  {cell.condition && <ConditionBadge condition={cell.condition} />}
                </motion.div>
              )
            })}
          </div>

          {/* LINKEDIN row */}
          <div className="mt-1 grid grid-cols-[80px_repeat(7,1fr)] gap-1">
            <div className="flex items-center">
              <span className="flex items-center gap-1.5 font-mono text-[11px] font-medium uppercase tracking-widest text-[#0A66C2]">
                <Linkedin className="h-3.5 w-3.5 shrink-0 text-[#0A66C2]" />
                LinkedIn
              </span>
            </div>
            {DAYS.map((day, colIndex) => {
              // Day 7 gets the fork
              if (day === 'Day 7') {
                return (
                  <motion.div
                    key={day}
                    initial={{ opacity: 0, y: 6 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
                    transition={{ duration: 0.35, delay: colIndex * 0.07 }}
                    className="rounded border border-border bg-card px-2.5 py-2 min-h-[72px] relative cursor-default hover:border-[rgba(255,255,255,0.15)] transition-colors"
                  >
                    {/* Diamond indicator */}
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2">
                      <svg width="14" height="14" viewBox="0 0 14 14" className="text-muted-foreground">
                        <path d="M7 0L14 7L7 14L0 7Z" fill="currentColor" opacity="0.3" />
                      </svg>
                    </div>
                    <p className="text-xs font-medium text-foreground">Fork</p>
                    <div className="mt-1 space-y-1">
                      {FORK.branches.map((b, i) => (
                        <div key={i} className={`rounded px-1.5 py-0.5 text-[12px] ${
                          b.positive
                            ? 'bg-[#0A1A10] text-[#2DD4BF]'
                            : 'bg-background text-muted-foreground'
                        }`}>
                          <span className="font-medium">{b.label}:</span> {b.detail}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )
              }

              const cell = LINKEDIN_CELLS[day]
              if (!cell) {
                return (
                  <motion.div
                    key={day}
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.3, delay: colIndex * 0.07 }}
                    className="rounded border border-dashed border-border min-h-[72px]"
                  />
                )
              }
              return (
                <motion.div
                  key={day}
                  initial={{ opacity: 0, y: 6 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
                  transition={{ duration: 0.35, delay: colIndex * 0.07 }}
                  className="rounded border border-border bg-card px-2.5 py-2 min-h-[80px] cursor-default hover:border-[rgba(255,255,255,0.15)] transition-colors"
                >
                  <p className="text-[12px] font-medium text-foreground">{cell.label}</p>
                  <p className="mt-0.5 text-[12px] text-muted-foreground leading-snug">{cell.detail}</p>
                  {cell.condition && <ConditionBadge condition={cell.condition} />}
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Reply row - full width */}
      <motion.div
        className="mt-3 rounded border border-primary bg-emerald-950 px-4 py-3"
        animate={{ opacity: [0.9, 1, 0.9] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-primary" />
          <p className="font-mono text-xs text-primary">Reply received at any step</p>
        </div>
        <p className="mt-1 ml-4 text-xs text-muted-foreground">
          Sequence paused immediately. Record synced to HubSpot with reply channel and date.
        </p>
      </motion.div>
    </div>
  )
}
