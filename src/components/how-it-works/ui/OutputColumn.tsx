import { motion } from 'motion/react'

interface OutputItem {
  label: string
  value: string
  highlight?: boolean
}

interface OutputColumnProps {
  title: string
  items: OutputItem[]
  isPrimary?: boolean
  animKey?: number
}

export default function OutputColumn({ title, items, isPrimary, animKey = 0 }: OutputColumnProps) {
  return (
    <div
      className={`rounded border px-5 py-5 ${
        isPrimary ? 'border-primary bg-emerald-950' : 'border-border bg-card'
      }`}
    >
      <p className="mb-4 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
        {title}
      </p>
      <div className="space-y-3">
        {items.map((item) => (
          <div key={item.label}>
            <p className="text-xs text-muted-foreground">{item.label}</p>
            <motion.p
              key={`${animKey}-${item.label}`}
              className={`mt-0.5 font-mono ${
                item.highlight
                  ? 'text-lg font-semibold text-primary'
                  : 'text-sm text-foreground'
              }`}
              initial={{ opacity: 0.6 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.15 }}
            >
              {item.value}
            </motion.p>
          </div>
        ))}
      </div>
    </div>
  )
}
