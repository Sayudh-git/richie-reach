const SKILL_AGENTS = [
  {
    name: 'campaign_selector',
    input: 'engagement_class',
    output: 'campaign_type',
    logic: [
      'evaluating → signal_based',
      'active_buyer → whole_offer',
      'category_engaged → value_asset',
      'surface_engagement → creative_ideas',
      'low data → fallback',
    ],
  },
  {
    name: 'offer_architect',
    input: 'campaign_type',
    output: 'offer_framework',
    logic: [
      'speed: "Get X result in Y days"',
      'risk_reversal: eliminate perceived risk',
      'ease: remove friction, reduce steps',
      'splinter: smaller piece of full value',
      'trial_of_solution: mechanism first',
    ],
  },
  {
    name: 'copy_writer',
    input: 'framework + context',
    output: 'email_copy',
    logic: [
      '8 frameworks: PAS, QVC, BAB, ACCA, 3Cs, Mouse Trap, SCQ, JMM',
      'Lowercase subject, 3-5 words',
      'Body: 60-90 words, soft question CTA',
      'First sentence cannot start with "I"',
      'Grade 8 reading level enforced',
    ],
  },
  {
    name: 'quality_gate',
    input: 'draft_copy',
    output: 'approved | regenerate',
    logic: [
      'Word count within 60-90 range',
      'No exclamation marks',
      'No jargon or buzzwords',
      'CTA is a question, not a demand',
      'Fail → regenerate with feedback',
    ],
  },
]

function BranchConnector({ direction }: { direction: 'down' | 'up' }) {
  return (
    <div className="relative flex justify-center my-1" style={{ height: '32px' }}>
      <svg
        width="100%"
        height="32"
        viewBox="0 0 600 32"
        preserveAspectRatio="none"
        className="w-full max-w-2xl opacity-30"
      >
        {direction === 'down' ? (
          <>
            <path d="M300,0 Q150,16 75,32" stroke="#10B981" strokeWidth="1" fill="none" />
            <path d="M300,0 Q250,16 225,32" stroke="#10B981" strokeWidth="1" fill="none" />
            <path d="M300,0 Q350,16 375,32" stroke="#10B981" strokeWidth="1" fill="none" />
            <path d="M300,0 Q450,16 525,32" stroke="#10B981" strokeWidth="1" fill="none" />
          </>
        ) : (
          <>
            <path d="M75,0 Q150,16 300,32" stroke="#10B981" strokeWidth="1" fill="none" />
            <path d="M225,0 Q250,16 300,32" stroke="#10B981" strokeWidth="1" fill="none" />
            <path d="M375,0 Q350,16 300,32" stroke="#10B981" strokeWidth="1" fill="none" />
            <path d="M525,0 Q450,16 300,32" stroke="#10B981" strokeWidth="1" fill="none" />
          </>
        )}
      </svg>
    </div>
  )
}

export default function Section6() {
  return (
    <section id="section-copy-generation" className="border-t border-border py-20 scroll-mt-16">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.1em] text-muted-foreground">
          Stage 4 — Copy Generation (claude sonnet 4.6)
        </p>
        <h2 className="mb-5 text-3xl text-foreground">Every email is written to the signal, not the job title.</h2>
        <p className="mb-10 max-w-xl text-[15px] leading-[1.75] text-muted-foreground">
          Clay sends the scraped website content, the ICP description, and the engagement context to
          Claude Sonnet via the Anthropic API. The system prompt is around 2,500 tokens and contains
          the full decision logic for campaign selection, offer framing, and email structure.
        </p>

        <div className="space-y-3">
          {/* Orchestrator */}
          <div className="rounded border-t-2 border-primary border-x border-b border-x-border border-b-border bg-card px-5 py-5">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-primary bg-emerald-950">
                <span className="font-mono text-[10px] text-primary">O</span>
              </div>
              <div>
                <p className="font-mono text-sm text-foreground">Orchestrator</p>
                <p className="font-mono text-[11px] text-muted-foreground">claude-sonnet-4-6</p>
              </div>
            </div>
            <div className="mt-3 flex flex-wrap gap-x-6 gap-y-1 font-mono text-[11px] text-muted-foreground">
              <span>inputs: website_content, icp_description, engagement_context</span>
              <span>system prompt: ~2,500 tokens</span>
            </div>
          </div>

          {/* Down connector — fan out */}
          <BranchConnector direction="down" />

          {/* 4 Skill Agents — 2×2 grid */}
          <div className="grid gap-3 sm:grid-cols-2">
            {SKILL_AGENTS.map((agent) => (
              <div key={agent.name} className="rounded border border-border bg-[#0D0D0D] px-5 py-5">
                <span className="font-mono text-xs text-primary">{agent.name}</span>
                <div className="mt-1.5 flex gap-3 font-mono text-[10px] text-muted-foreground">
                  <span>in: {agent.input}</span>
                  <span className="text-border">|</span>
                  <span>out: {agent.output}</span>
                </div>
                <ul className="mt-3 space-y-1.5">
                  {agent.logic.map((item, i) => (
                    <li key={i} className="flex gap-2 text-xs text-muted-foreground">
                      <span className="shrink-0 text-primary opacity-40">–</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Up connector — fan in */}
          <BranchConnector direction="up" />

          {/* Output node */}
          <div className="rounded border border-primary bg-emerald-950 px-5 py-4">
            <p className="mb-2.5 font-mono text-xs text-primary">Output</p>
            <div className="grid gap-x-8 gap-y-1 font-mono text-xs text-foreground sm:grid-cols-2">
              <span>subject_line: string (lowercase, 3-5 words)</span>
              <span>body: string (60-90 words)</span>
              <span>campaign_type: enum</span>
              <span>offer_framework: enum</span>
              <span>copy_framework: enum</span>
              <span>linkedin_opener: string (if applicable)</span>
            </div>
          </div>
        </div>

        <p className="mt-8 text-sm text-muted-foreground">
          14 writing rules are enforced in the system prompt: lowercase subject lines, 60-90 word
          body, soft CTA questions, no jargon, no exclamation marks, Grade 8 reading level, first
          sentence cannot start with &quot;I&quot;.
        </p>
      </div>
    </section>
  )
}
