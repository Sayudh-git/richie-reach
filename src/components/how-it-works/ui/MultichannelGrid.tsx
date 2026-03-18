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
    <span className="mt-1.5 inline-flex items-center rounded-sm bg-[rgba(255,255,255,0.06)] px-1.5 py-0.5 font-mono text-[9px] text-muted-foreground border border-border">
      if: {condition}
    </span>
  )
}

export default function MultichannelGrid() {
  return (
    <div>
      {/* Grid container — horizontal scroll on mobile */}
      <div className="overflow-x-auto">
        <div className="min-w-[700px]">
          {/* Header row — days */}
          <div className="grid grid-cols-[80px_repeat(7,1fr)] gap-1">
            <div />
            {DAYS.map((day) => (
              <div key={day} className="px-2 py-2 text-center font-mono text-[11px] font-medium tracking-wider text-muted-foreground">
                {day}
              </div>
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
            {DAYS.map((day) => {
              const cell = EMAIL_CELLS[day]
              if (!cell) {
                return <div key={day} className="rounded border border-dashed border-border min-h-[72px]" />
              }
              return (
                <div key={day} className="rounded border border-border bg-card px-2.5 py-2 min-h-[80px]">
                  <p className="text-[12px] font-medium text-foreground">{cell.label}</p>
                  <p className="mt-0.5 text-[12px] text-muted-foreground leading-snug">{cell.detail}</p>
                  {cell.condition && <ConditionBadge condition={cell.condition} />}
                </div>
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
            {DAYS.map((day) => {
              // Day 7 gets the fork
              if (day === 'Day 7') {
                return (
                  <div key={day} className="rounded border border-border bg-card px-2.5 py-2 min-h-[72px] relative">
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
                            : 'bg-[#0D0D0D] text-[#6B7280]'
                        }`}>
                          <span className="font-medium">{b.label}:</span> {b.detail}
                        </div>
                      ))}
                    </div>
                  </div>
                )
              }

              const cell = LINKEDIN_CELLS[day]
              if (!cell) {
                return <div key={day} className="rounded border border-dashed border-border min-h-[72px]" />
              }
              return (
                <div key={day} className="rounded border border-border bg-card px-2.5 py-2 min-h-[80px]">
                  <p className="text-[12px] font-medium text-foreground">{cell.label}</p>
                  <p className="mt-0.5 text-[12px] text-muted-foreground leading-snug">{cell.detail}</p>
                  {cell.condition && <ConditionBadge condition={cell.condition} />}
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Reply row — full width */}
      <div className="mt-3 rounded border border-primary bg-emerald-950 px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-primary" />
          <p className="font-mono text-xs text-primary">Reply received at any step</p>
        </div>
        <p className="mt-1 ml-4 text-xs text-muted-foreground">
          Sequence paused immediately. Record synced to HubSpot with reply channel and date.
        </p>
      </div>
    </div>
  )
}
