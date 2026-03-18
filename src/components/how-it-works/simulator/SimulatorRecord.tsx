'use client'

import { motion, AnimatePresence } from 'motion/react'
import type { SimRecord } from './simulatorData'

type Phase = 0 | 1 | 2 | 3 | 4 | 5 | 6

interface SimulatorRecordProps {
  record: SimRecord
  phase: Phase
  index: number
  visible: boolean
}

const CLASS_COLORS: Record<string, string> = {
  evaluating: 'bg-emerald-950 border-primary text-primary',
  active_buyer: 'bg-[#0A1A10] border-[#16A34A] text-[#16A34A]',
  category_engaged: 'bg-card border-border text-foreground',
  surface_engagement: 'bg-card border-border text-muted-foreground',
  disqualified: 'bg-[#160A0A] border-[#991B1B] text-[#991B1B]',
}

const ENRICHMENT_COLORS: Record<string, string> = {
  prospeo_primary: 'bg-emerald-950 border-primary text-primary',
  apollo_fallback: 'bg-card border-muted-foreground text-muted-foreground',
  hunter_domain: 'bg-card border-muted-foreground text-muted-foreground',
  linkedin_only: 'bg-[#160A0A] border-muted-foreground text-muted-foreground',
}

const TIER_COLORS: Record<string, string> = {
  HIGH: 'bg-emerald-950 border-primary text-primary',
  MED: 'bg-[#1A1200] border-[#92400E] text-[#D97706]',
  BELOW: 'bg-[#160A0A] border-[#991B1B] text-[#991B1B]',
}

export default function SimulatorRecord({ record, phase, visible }: SimulatorRecordProps) {
  if (!visible) return null

  const isFailed = record.icpResult === 'fail'
  const showIcp = phase >= 2
  const showClass = phase >= 3 && !isFailed
  const showScore = phase >= 4 && !isFailed
  const showEnrich = phase >= 5 && !isFailed && record.scoreTier !== 'BELOW'
  const showDelivered = phase >= 6 && !isFailed && record.scoreTier !== 'BELOW'

  const isDropped =
    (showIcp && isFailed) ||
    (showScore && record.scoreTier === 'BELOW')

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: isDropped ? 0.35 : 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className={`rounded border px-3 py-2.5 ${
        isDropped ? 'border-[#2D1515] bg-[#0D0D0D]' : 'border-border bg-card'
      }`}
    >
      <div className="flex flex-wrap items-center gap-2">
        {/* Name + title */}
        <div className="flex-1 min-w-0">
          <p className="text-xs text-foreground truncate">{record.name}</p>
          <p className="text-[11px] text-muted-foreground truncate">{record.title}, {record.company}</p>
        </div>

        {/* Engagement type badge */}
        {phase >= 1 && (
          <span className="font-mono text-[10px] text-muted-foreground border border-border rounded px-1.5 py-0.5">
            {record.engagementType}
          </span>
        )}

        {/* ICP result */}
        <AnimatePresence>
          {showIcp && (
            <motion.span
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              className={`font-mono text-[10px] rounded border px-1.5 py-0.5 ${
                isFailed
                  ? 'bg-[#160A0A] border-[#991B1B] text-[#991B1B]'
                  : 'bg-[#0A1A10] border-[#16A34A] text-[#16A34A]'
              }`}
            >
              {isFailed ? `✗ ${record.icpFailReason}` : '✓ ICP pass'}
            </motion.span>
          )}
        </AnimatePresence>

        {/* Behavior class */}
        <AnimatePresence>
          {showClass && record.behaviorClass && (
            <motion.span
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              className={`font-mono text-[10px] rounded border px-1.5 py-0.5 ${CLASS_COLORS[record.behaviorClass]}`}
            >
              {record.behaviorClass}
            </motion.span>
          )}
        </AnimatePresence>

        {/* Score */}
        <AnimatePresence>
          {showScore && record.score !== undefined && record.scoreTier && (
            <motion.span
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              className={`font-mono text-[10px] rounded border px-1.5 py-0.5 ${TIER_COLORS[record.scoreTier]}`}
            >
              {record.scoreTier === 'BELOW'
                ? `Below gate: ${record.score}`
                : `${record.scoreTier} ${record.score}`}
            </motion.span>
          )}
        </AnimatePresence>

        {/* Enrichment */}
        <AnimatePresence>
          {showEnrich && record.enrichmentSource && (
            <motion.span
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              className={`font-mono text-[10px] rounded border px-1.5 py-0.5 ${ENRICHMENT_COLORS[record.enrichmentSource]}`}
            >
              {record.enrichmentSource.replace('_', ' ')}
            </motion.span>
          )}
        </AnimatePresence>

        {/* Delivered */}
        <AnimatePresence>
          {showDelivered && (
            <motion.span
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              className="font-mono text-[10px] rounded border border-primary bg-emerald-950 px-1.5 py-0.5 text-primary"
            >
              → Clay
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
