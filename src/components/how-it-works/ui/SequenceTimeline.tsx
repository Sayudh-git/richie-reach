interface TimelineNode {
  day: string
  label: string
  detail: string
  condition?: string
  isReply?: boolean
  isFork?: boolean
  forkBranches?: { label: string; detail: string }[]
}

const NODES: TimelineNode[] = [
  {
    day: 'Day 0',
    label: 'Record enters Lemlist',
    detail: 'Pushed via Clay webhook. Signal metadata attached.',
  },
  {
    day: 'Day 1',
    label: 'Email 1 sent',
    detail: 'Claude-written. Signal referenced in opener. 60-90 words. Soft question CTA.',
    condition: 'From ZapMail mailbox. Lowercase subject, 3-5 words.',
  },
  {
    day: 'Day 3',
    label: 'LinkedIn profile visit',
    detail: 'Automated visit if no reply to Email 1. Signals presence to prospect.',
    condition: 'No reply',
  },
  {
    day: 'Day 5',
    label: 'LinkedIn connection request',
    detail: 'Short note using engagement context from Stage 3.',
    condition: 'No connection yet',
  },
  {
    day: 'Day 7',
    label: 'Fork: connection accepted?',
    detail: '',
    isFork: true,
    forkBranches: [
      { label: 'Accepted', detail: 'LinkedIn DM sent. Claude-written opener, different hook from email.' },
      { label: 'Not accepted', detail: 'Skip to Day 9.' },
    ],
  },
  {
    day: 'Day 9',
    label: 'Email 2 sent',
    detail: 'Follow-up. Different framework from Email 1. Shorter.',
    condition: 'No reply to DM or Day 7 skipped',
  },
  {
    day: 'Day 14',
    label: 'Final email',
    detail: 'Break-up structure. Last soft ask. Sequence closes automatically.',
    condition: 'Still no reply',
  },
  {
    day: 'Any step',
    label: 'Reply received',
    detail: 'Sequence paused immediately. Record synced to HubSpot with reply channel and date.',
    isReply: true,
  },
]

export default function SequenceTimeline() {
  return (
    <div className="relative">
      {NODES.map((node, i) => (
        <div key={i} className="flex gap-4">
          {/* Connector column */}
          <div className="flex flex-col items-center">
            <div
              className={`mt-1 h-3 w-3 shrink-0 rounded-full border-2 ${
                node.isReply
                  ? 'border-primary bg-emerald-900'
                  : node.isFork
                  ? 'border-muted-foreground bg-[rgba(255,255,255,0.08)]'
                  : 'border-border bg-card'
              }`}
            />
            {i < NODES.length - 1 && (
              <div className="w-px flex-1 bg-[rgba(255,255,255,0.08)] my-1" style={{ minHeight: '24px' }} />
            )}
          </div>

          {/* Content */}
          <div className="pb-6 flex-1">
            <div className="flex items-baseline gap-2">
              <span className="font-mono text-xs text-muted-foreground">{node.day}</span>
              {node.condition && (
                <span className="font-mono text-[10px] text-muted-foreground">[{node.condition}]</span>
              )}
            </div>

            {node.isFork && node.forkBranches ? (
              <div className="mt-1 grid grid-cols-2 gap-3">
                {node.forkBranches.map((branch, j) => (
                  <div
                    key={j}
                    className={`rounded border px-3 py-2 ${
                      j === 0
                        ? 'border-[#16A34A] bg-[#0A1A10]'
                        : 'border-border bg-card'
                    }`}
                  >
                    <p className={`text-[12px] font-medium ${j === 0 ? 'text-[#2DD4BF]' : 'text-[#6B7280]'}`}>
                      {branch.label}
                    </p>
                    <p className="mt-0.5 text-[12px] text-muted-foreground">{branch.detail}</p>
                  </div>
                ))}
              </div>
            ) : (
              <>
                <p
                  className={`text-sm ${
                    node.isReply ? 'text-primary' : 'text-foreground'
                  }`}
                >
                  {node.label}
                </p>
                {node.detail && (
                  <p className="mt-0.5 text-xs text-muted-foreground">{node.detail}</p>
                )}
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
