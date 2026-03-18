import { Fragment } from 'react'

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
    { name: 'ZapMail', badge: 'ZM' },
  ],
  [
    { name: 'OpenAI', favicon: '/icons/tools/openai.png' },
    { name: 'Anthropic', favicon: '/icons/tools/anthropic.png' },
  ],
]

export default function Section1() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 pb-24 pt-24 md:pt-32">
      {/* Subtle dot grid */}
      <div className="pointer-events-none absolute inset-0 rr-dot-grid opacity-60" />

      <div className="relative">
        {/* Zone 1 — Statement block */}
        <div>
          <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.12em]" style={{ color: '#6B7280' }}>
            Signal-Led Outbound Engine
          </p>

          <h1 className="text-[38px] leading-[1.2] tracking-tight md:text-[42px]">
            <span className="font-light text-foreground">
              Richie Reach is a signal-led outbound engine that{' '}
            </span>
            <span className="font-semibold text-foreground">
              captures public LinkedIn engagement, filters it to your ICP, classifies it with AI,{' '}
            </span>
            <span className="font-light text-foreground">
              and runs the signal-to-pipeline engine for your outbound team, every week.
            </span>
          </h1>

          <p className="mt-10 mb-12 max-w-[580px] border-l-2 border-primary pl-4 font-mono text-[16px] text-primary">
            Fresh buyer signals. ICP-filtered before enrichment. In your stack within 24 hours of capture.
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-[#1E1E1E]" />

        {/* Zone 2 — Tools strip */}
        <div className="pt-10 mt-10">
          <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.12em]" style={{ color: '#6B7280' }}>
            Tools in the stack
          </p>
          <div className="relative">
          <div className="flex flex-nowrap items-center gap-2 overflow-x-auto pb-2 -mx-6 px-6">
            {TOOLS_GROUPS.map((group, gi) => (
              <Fragment key={gi}>
                {gi > 0 && (
                  <div className="shrink-0 self-center border-r border-[#1E1E1E] h-4 mx-1" />
                )}
                {group.map((tool) => (
                  <span
                    key={tool.name}
                    className="shrink-0 group flex items-center gap-2.5 rounded-lg border border-[#1E1E1E] bg-[#111111] px-4 py-2.5 font-mono text-[13px] transition-colors duration-200 hover:border-[#2DD4BF]/40 cursor-default"
                    style={{ color: '#8B9BB4' }}
                  >
                    {tool.favicon ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={tool.favicon}
                        alt=""
                        width={20}
                        height={20}
                        className="h-5 w-5 opacity-60 grayscale transition-all duration-200 group-hover:opacity-90 group-hover:grayscale-0"
                        loading="lazy"
                      />
                    ) : (
                      <span className="flex h-5 w-5 items-center justify-center rounded bg-[rgba(255,255,255,0.08)] font-mono text-[9px] text-primary">
                        {tool.badge ?? tool.name[0]}
                      </span>
                    )}
                    {tool.name}
                  </span>
                ))}
              </Fragment>
            ))}
          </div>
          <div className="pointer-events-none absolute right-0 inset-y-0 w-12 bg-gradient-to-l from-[#0A0A0A] to-transparent md:hidden" />
          </div>
        </div>
      </div>
    </section>
  )
}
