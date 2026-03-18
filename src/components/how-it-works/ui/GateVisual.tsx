import Avatar from 'boring-avatars'

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

function PersonAvatar({ name }: { name: string }) {
  return (
    <Avatar
      size={36}
      name={name}
      variant="marble"
      colors={["#1A2A2A", "#2DD4BF", "#0A3A3A", "#8B9BB4", "#111111"]}
    />
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
                <PersonAvatar name={r.name} />
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
                <PersonAvatar name={r.name} />
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
