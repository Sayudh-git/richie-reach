'use client'

import { motion } from 'motion/react'

interface ModeToggleProps {
  mode: 'inhouse' | 'agency'
  onChange: (m: 'inhouse' | 'agency') => void
}

const OPTIONS: { id: 'inhouse' | 'agency'; label: string }[] = [
  { id: 'inhouse', label: 'I run outbound in-house' },
  { id: 'agency', label: 'I run an outbound agency' },
]

export default function ModeToggle({ mode, onChange }: ModeToggleProps) {
  return (
    <div className="inline-flex rounded-full border border-border bg-background p-1">
      {OPTIONS.map((opt) => (
        <button
          key={opt.id}
          onClick={() => onChange(opt.id)}
          className="relative px-5 py-2 font-mono text-xs transition-colors"
        >
          {mode === opt.id && (
            <motion.div
              layoutId="mode-pill"
              className="absolute inset-0 rounded-full border border-primary bg-emerald-950"
              transition={{ type: 'spring', bounce: 0.2, duration: 0.35 }}
            />
          )}
          <span
            className={`relative z-10 ${
              mode === opt.id ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            {opt.label}
          </span>
        </button>
      ))}
    </div>
  )
}
