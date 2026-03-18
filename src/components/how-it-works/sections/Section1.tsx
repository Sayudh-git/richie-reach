import { Fragment } from 'react'

const TOOLS_GROUPS: { name: string; favicon?: string; badge?: string }[][] = [
  [
    { name: 'Clay', favicon: 'https://www.google.com/s2/favicons?domain=clay.com&sz=64' },
    { name: 'Lemlist', favicon: 'https://www.google.com/s2/favicons?domain=lemlist.com&sz=64' },
  ],
  [
    { name: 'HubSpot', favicon: 'https://www.google.com/s2/favicons?domain=hubspot.com&sz=64' },
    { name: 'Prospeo', favicon: 'https://www.google.com/s2/favicons?domain=prospeo.io&sz=64' },
    { name: 'Apollo', favicon: 'https://www.google.com/s2/favicons?domain=apollo.io&sz=64' },
    { name: 'Hunter', favicon: 'https://www.google.com/s2/favicons?domain=hunter.io&sz=64' },
  ],
  [
    { name: 'ZapMail', badge: 'ZM' },
  ],
  [
    { name: 'OpenAI', favicon: 'https://www.google.com/s2/favicons?domain=openai.com&sz=64' },
    { name: 'Anthropic', favicon: 'https://www.google.com/s2/favicons?domain=anthropic.com&sz=64' },
  ],
]

export default function Section1() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
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
            and delivers a fresh, context-tagged prospect queue into your outbound stack every week.
          </span>
        </h1>

        <p className="mt-8 max-w-[680px] text-[16px] leading-[1.7]" style={{ color: '#8B9BB4' }}>
          It is not a database, a scraping tool, or a sending platform. It sits upstream of Clay,
          Lemlist, and HubSpot. It improves the inputs before they reach your execution layer.
        </p>

        <p className="mt-6 mb-12 max-w-[580px] border-l-2 border-primary pl-4 font-mono text-[16px] text-primary">
          Fresh buyer signals. ICP-filtered before enrichment. Delivered within 24 hours of capture.
        </p>
      </div>

      {/* Divider */}
      <div className="border-t border-[#1E1E1E]" />

      {/* Zone 2 — Tools strip */}
      <div className="pt-10 mt-10">
        <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.12em]" style={{ color: '#6B7280' }}>
          Tools in the stack
        </p>
        <div className="flex flex-wrap items-center gap-2">
          {TOOLS_GROUPS.map((group, gi) => (
            <Fragment key={gi}>
              {gi > 0 && (
                <div className="hidden self-center border-r border-[#1E1E1E] h-4 mx-1 sm:block" />
              )}
              {group.map((tool) => (
                <span
                  key={tool.name}
                  className="group flex items-center gap-2.5 rounded-lg border border-[#1E1E1E] bg-[#111111] px-4 py-2.5 font-mono text-[13px] transition-colors duration-200 hover:border-[#2DD4BF]/40 cursor-default"
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
      </div>
    </section>
  )
}
