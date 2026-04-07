'use client'

import { Fragment, useEffect, useState } from 'react'

const TOOLS_GROUPS: { name: string; favicon?: string; badge?: string }[][] = [
  [
    { name: 'Clay', favicon: '/icons/tools/clay.png' },
    { name: 'Lemlist', favicon: '/icons/tools/lemlist.png' },
  ],
  [
    { name: 'HubSpot', favicon: '/icons/tools/hubspot.png' },
    { name: 'Prospeo', favicon: '/icons/tools/prospeo.png' },
    { name: 'Apollo', favicon: '/icons/tools/apollo.png' },
    { name: 'Hunter', favicon: '/icons/tools/hunter.png' },
  ],
  [
    { name: 'ZapMail', favicon: '/icons/zapmail.svg' },
  ],
  [
    { name: 'OpenAI', favicon: '/icons/tools/openai.png' },
    { name: 'Anthropic', favicon: '/icons/tools/anthropic.png' },
  ],
]

const ALL_TOOLS = TOOLS_GROUPS.flat()
const TOTAL = ALL_TOOLS.length
const STEP_MS = 600
const PAUSE_MS = 2200

// Filled LinkedIn logo - same as marketing hero
function LinkedInFilledIcon({ className }: { className?: string }) {
  return (
    <svg
      width="72"
      height="72"
      viewBox="0 0 72 72"
      className={className}
      aria-hidden="true"
    >
      <rect width="72" height="72" rx="8" fill="#0A66C2" />
      <path
        d="M51.35 52.28h-7.39V42.05c0-2.44-.05-5.57-3.4-5.57-3.4 0-3.92 2.65-3.92 5.39v10.41h-7.39V30.2h7.1v3.01h.1c.99-1.87 3.4-3.84 7-3.84 7.49 0 8.87 4.93 8.87 11.34v11.57h.03zM24.37 27.19a4.29 4.29 0 1 1 0-8.58 4.29 4.29 0 0 1 0 8.58zm3.7 25.09h-7.4V30.2h7.4v22.08z"
        fill="#fff"
      />
    </svg>
  )
}

export default function Section1() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  useEffect(() => {
    let i = 0
    let timeout: ReturnType<typeof setTimeout>

    function next() {
      setActiveIndex(i)
      i = (i + 1) % TOTAL
      const delay = i === 0 ? PAUSE_MS : STEP_MS
      timeout = setTimeout(next, delay)
    }

    timeout = setTimeout(next, 1000)
    return () => clearTimeout(timeout)
  }, [])

  let globalIndex = 0
  const toolIndex: Record<string, number> = {}
  for (const group of TOOLS_GROUPS) {
    for (const tool of group) {
      toolIndex[tool.name] = globalIndex++
    }
  }

  return (
    <section className="relative mx-auto max-w-6xl px-6 pb-24 pt-28 md:pt-36">
      {/* Subtle dot grid */}
      <div className="pointer-events-none absolute inset-0 rr-dot-grid opacity-60" />

      <div className="relative">
        {/* Zone 1 - Statement block */}
        <div>
          <p className="mb-6 section-label">
            Signal-Led Outbound Engine
          </p>

          <h1 className="text-[38px] leading-[1.4] tracking-tight md:text-[42px]">
            <span className="font-light text-foreground">
              Richie Reach is a signal-led outbound engine that{' '}
            </span>
            <span className="font-medium text-foreground">
              captures public{' '}
              <span className="inline-flex items-center gap-1.5">
                <LinkedInFilledIcon className="inline-block h-[0.7em] w-[0.7em] shrink-0 translate-y-[-0.05em]" />
                LinkedIn
              </span>{' '}
              engagement, filters it to your ICP, classifies it with{' '}
              {/* AI - bold with sparkle icon superscript */}
              <span className="relative inline-block font-bold">
                AI
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/icons/ai.svg"
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none absolute"
                  style={{
                    width: '0.52em',
                    height: '0.52em',
                    top: '-0.15em',
                    right: '-0.48em',
                  }}
                />
              </span>
              ,{' '}
            </span>
            <span className="font-light text-foreground">
              and runs the signal-to-pipeline engine for your outbound team, every week.
            </span>
          </h1>

          <p className="mt-8 mb-10 md:whitespace-nowrap border-l-2 border-primary pl-4 font-mono text-[14px] md:text-[16px] text-primary leading-relaxed">
            Fresh buyer signals. ICP-filtered before enrichment. In your stack within 24 hours of capture.
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-border" />

        {/* Zone 2 - Tools strip */}
        <div className="pt-10 mt-10">
          <p className="mb-5 section-label">
            Tools in the stack
          </p>

          {/* Chip row - wraps on mobile, single row on md+ */}
          <div>
            <div className="flex flex-wrap items-center gap-2">
              {TOOLS_GROUPS.map((group, gi) => (
                <Fragment key={gi}>
                  {gi > 0 && (
                    <div className="shrink-0 self-center border-r border-border h-4 mx-1" />
                  )}
                  {group.map((tool) => {
                    const idx = toolIndex[tool.name]
                    const isActive = activeIndex === idx
                    return (
                      <span
                        key={tool.name}
                        className="shrink-0 flex items-center gap-2.5 rounded-lg border px-4 py-2.5 font-mono text-[13px] cursor-default"
                        style={{
                          borderColor: isActive ? 'rgba(45,212,191,0.5)' : '#1E1E1E',
                          backgroundColor: isActive ? 'rgba(45,212,191,0.06)' : '#111111',
                          color: isActive ? '#D4E5F0' : '#8B9BB4',
                          transition: 'border-color 500ms ease, background-color 500ms ease, color 400ms ease',
                        }}
                      >
                        {tool.favicon ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={tool.favicon}
                            alt=""
                            width={20}
                            height={20}
                            className="h-5 w-5 object-contain"
                            style={{
                              filter: isActive ? 'none' : 'grayscale(100%)',
                              opacity: isActive ? 1 : 0.55,
                              transition: 'filter 500ms ease, opacity 500ms ease',
                            }}
                            loading="lazy"
                          />
                        ) : (
                          <span
                            className="flex h-5 w-5 items-center justify-center rounded font-mono text-[10px] md:text-[9px]"
                            style={{
                              background: isActive ? 'rgba(45,212,191,0.18)' : 'rgba(255,255,255,0.08)',
                              color: isActive ? '#2DD4BF' : '#2DD4BF',
                              transition: 'background 500ms ease',
                            }}
                          >
                            {tool.badge ?? tool.name[0]}
                          </span>
                        )}
                        {tool.name}
                      </span>
                    )
                  })}
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
