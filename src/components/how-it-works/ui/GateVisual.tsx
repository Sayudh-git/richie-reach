interface RawRecord {
  name: string
  title: string
  company: string
  passed: boolean
  failReason?: string
}

interface GateVisualProps {
  rawRecords: RawRecord[]
  passedRecords: RawRecord[]
}

const GATE_CRITERIA = [
  { label: 'Title Match', type: 'hard' },
  { label: 'Seniority', type: 'soft' },
  { label: 'Company Size', type: 'hard' },
  { label: 'Industry', type: 'soft' },
  { label: 'Funding Stage', type: 'soft' },
  { label: 'Tech Stack', type: 'soft' },
  { label: 'Geography', type: 'hard' },
]

const AVATAR_PALETTE = [
  { bg: '#1e3a5f', fill: '#60a5fa' },
  { bg: '#2e1065', fill: '#c084fc' },
  { bg: '#451a03', fill: '#fbbf24' },
  { bg: '#4c0519', fill: '#f87171' },
  { bg: '#042f2e', fill: '#2dd4bf' },
]

function Avatar({ index }: { name: string; index: number }) {
  const c = AVATAR_PALETTE[index % AVATAR_PALETTE.length]
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" className="shrink-0">
      <circle cx="18" cy="18" r="18" fill={c.bg} />
      <circle cx="18" cy="13" r="5.5" fill={c.fill} opacity="0.9" />
      <path d="M6 34c0-6.627 5.373-12 12-12s12 5.373 12 12" fill={c.fill} opacity="0.55" />
      <circle cx="18" cy="18" r="17.5" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
    </svg>
  )
}

function LinkedInDot() {
  return <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#0A66C2]" />
}

export default function GateVisual({ rawRecords, passedRecords }: GateVisualProps) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-[1fr_160px_1fr]">
      {/* Left — Raw Signals */}
      <div>
        <p className="mb-3 font-mono text-xs tracking-widest text-muted-foreground uppercase">Raw Signals</p>
        <div className="space-y-1.5">
          {rawRecords.map((r, i) => (
            <div
              key={i}
              className={`rounded border px-3 py-2 ${
                r.passed
                  ? 'border-border bg-card'
                  : 'border-[#2D1515] bg-[#160A0A] opacity-60'
              }`}
            >
              <div className="flex items-center gap-2">
                <Avatar name={r.name} index={i} />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <p className="text-xs text-foreground">{r.name}</p>
                    <LinkedInDot />
                  </div>
                  <p className="text-xs text-muted-foreground">{r.title}, {r.company}</p>
                </div>
              </div>
              {!r.passed && r.failReason && (
                <p className="mt-1 ml-10 font-mono text-[10px] text-[#991B1B]">{r.failReason}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Center — Gate criteria */}
      <div className="flex flex-col items-center">
        <p className="mb-3 font-mono text-xs tracking-widest text-muted-foreground uppercase">ICP Gate</p>
        <div className="flex flex-col items-center gap-1.5 w-full">
          {GATE_CRITERIA.map((c, i) => (
            <div
              key={i}
              className={`w-full rounded px-2.5 py-1.5 text-center font-mono text-[10px] ${
                c.type === 'hard'
                  ? 'border border-primary bg-emerald-950 text-primary'
                  : 'border border-border bg-card text-muted-foreground'
              }`}
            >
              {c.label}
              <span className="ml-1 opacity-60">{c.type === 'hard' ? '⬤' : '○'}</span>
            </div>
          ))}
          <div className="mt-1 text-center font-mono text-[9px] text-muted-foreground">
            ⬤ hard gate &nbsp; ○ soft
          </div>
        </div>
      </div>

      {/* Right — Passed ICP */}
      <div>
        <p className="mb-3 font-mono text-xs tracking-widest text-muted-foreground uppercase">Passed ICP</p>
        <div className="space-y-1.5">
          {passedRecords.map((r, i) => (
            <div
              key={i}
              className="relative rounded border border-emerald-900 bg-[#0A0F0C] px-3 py-3"
            >
              <span className="absolute top-2 right-2 font-mono text-[9px] text-emerald-700">
                ICP ✓
              </span>
              <div className="flex items-center gap-3">
                <Avatar name={r.name} index={i} />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <span className="text-emerald-600 text-xs">✓</span>
                    <p className="text-xs text-foreground">{r.name}</p>
                    <LinkedInDot />
                  </div>
                  <p className="text-xs text-muted-foreground">{r.title}, {r.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
