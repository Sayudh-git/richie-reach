'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'motion/react'

interface Stage {
  label: string
  inHouse: boolean
  id?: string
}

const STAGES: Stage[] = [
  { label: 'Signal Monitor', inHouse: true, id: '#section-signal-monitor' },
  { label: 'ICP Gate', inHouse: true, id: '#section-icp-gate' },
  { label: 'AI Classification', inHouse: false, id: '#section-ai-classification' },
  { label: 'Copy Generation', inHouse: true, id: '#section-copy-generation' },
  { label: 'Composite Score', inHouse: true, id: '#section-composite-score' },
  { label: 'Enrichment', inHouse: false, id: '#section-enrichment' },
  { label: 'ZapMail Infra', inHouse: false, id: '#section-zapmail' },
  { label: 'Lemlist Sequence', inHouse: false, id: '#section-lemlist' },
  { label: 'HubSpot CRM', inHouse: false, id: '#section-hubspot' },
]

function scrollToSection(id: string) {
  const el = document.querySelector(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

const FILL_DURATION = 2.2
const FILL_EASE: [number, number, number, number] = [0.4, 0, 0.2, 1]

export default function PipelineOverview() {
  const containerRef = useRef<HTMLDivElement>(null)
  const trackWidthRef = useRef(0)
  const [hasPlayed, setHasPlayed] = useState(false)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          trackWidthRef.current = el.offsetWidth
          setHasPlayed(true)
          observer.disconnect()
        }
      },
      { threshold: 0.4 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div>
      {/* Desktop horizontal pipeline */}
      <div className="hidden md:block">
        <div ref={containerRef} className="relative">
          {/* Dark base track */}
          <div className="absolute top-[22px] left-0 right-0 h-[2px] bg-[#2A2A2A]" />
          {/* Emerald fill */}
          <motion.div
            className="absolute top-[22px] left-0 right-0 h-[2px] bg-[rgba(45,212,191,0.3)]"
            style={{ transformOrigin: 'left' }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: hasPlayed ? 1 : 0 }}
            transition={{ duration: FILL_DURATION, ease: FILL_EASE }}
          />
          {/* Leading dot */}
          <motion.div
            className="absolute top-[18px] h-2 w-2 rounded-full bg-primary z-10"
            initial={{ x: 0 }}
            animate={{ x: hasPlayed ? trackWidthRef.current - 8 : 0 }}
            transition={{ duration: FILL_DURATION, ease: FILL_EASE }}
          />
          {/* Stage nodes */}
          <div className="relative flex items-start justify-between">
            {STAGES.map((stage, i) => {
              const nodeDelay = (i / (STAGES.length - 1)) * FILL_DURATION
              return (
                <button
                  key={i}
                  onClick={() => stage.id && scrollToSection(stage.id)}
                  className="group flex flex-col items-center gap-2 px-1 cursor-pointer"
                  style={{ minWidth: 0 }}
                >
                  <div
                    className={`relative h-[46px] w-[46px] rounded-full border-2 flex items-center justify-center transition-colors ${
                      stage.inHouse
                        ? 'border-primary bg-emerald-950 group-hover:bg-emerald-900'
                        : 'border-border bg-card group-hover:border-muted-foreground'
                    }`}
                  >
                    {hasPlayed && (
                      <motion.div
                        className="absolute inset-0 rounded-full bg-emerald-950"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ delay: nodeDelay, duration: 0.4 }}
                      />
                    )}
                    <span className="relative z-10 font-mono text-[13px] font-semibold text-center leading-none text-muted-foreground">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <span
                    className={`text-center font-mono text-[12px] font-medium leading-snug max-w-[80px]`}
                    style={{ color: stage.inHouse ? '#F0EDE8' : '#B0BAC9' }}
                  >
                    {stage.label}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
        {/* Legend */}
        <div className="mt-5 flex items-center gap-5">
          <div className="flex items-center gap-2">
            <div className="h-2.5 w-2.5 rounded-full border-2 border-primary" />
            <span className="font-mono text-[12px] text-muted-foreground">In-house built</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2.5 w-2.5 rounded-full border-2 border-border" />
            <span className="font-mono text-[12px] text-muted-foreground">Third-party tool</span>
          </div>
        </div>
      </div>

      {/* Mobile vertical pipeline */}
      <div className="md:hidden">
        <div className="relative space-y-0">
          {STAGES.map((stage, i) => (
            <div key={i}>
              <button
                onClick={() => stage.id && scrollToSection(stage.id)}
                className="group flex w-full items-center gap-3 py-2"
              >
                <div
                  className={`h-8 w-8 shrink-0 rounded-full border-2 flex items-center justify-center ${
                    stage.inHouse
                      ? 'border-primary bg-emerald-950'
                      : 'border-border bg-card'
                  }`}
                >
                  <span className="font-mono text-[9px] font-bold text-muted-foreground">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <span
                  className={`font-mono text-sm ${
                    stage.inHouse ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {stage.label}
                </span>
              </button>
              {i < STAGES.length - 1 && (
                <div className="ml-4 h-3 w-px bg-[rgba(255,255,255,0.08)]" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
