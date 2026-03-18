'use client'

import { useEffect, useReducer, useRef } from 'react'
import { SIMULATOR_THEMES } from './simulatorData'
import SimulatorRecord from './SimulatorRecord'

type Phase = 0 | 1 | 2 | 3 | 4 | 5 | 6

const PHASE_LABELS: Record<Phase, string> = {
  0: 'Ready',
  1: 'Signal monitor firing...',
  2: 'ICP gate running...',
  3: 'AI classification...',
  4: 'Composite scoring...',
  5: 'Enrichment waterfall...',
  6: 'Pipeline complete. Records ready for delivery.',
}

const PHASE_DELAYS: number[] = [0, 800, 1800, 3200, 4600, 5800, 7400]

interface State {
  themeId: string
  phase: Phase
  visibleCount: number
  running: boolean
}

type Action =
  | { type: 'SET_THEME'; themeId: string }
  | { type: 'SET_PHASE'; phase: Phase }
  | { type: 'SET_VISIBLE'; count: number }
  | { type: 'SET_RUNNING'; running: boolean }
  | { type: 'RESET' }

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SET_THEME':
      return { ...state, themeId: action.themeId, phase: 0, visibleCount: 0, running: false }
    case 'SET_PHASE':
      return { ...state, phase: action.phase }
    case 'SET_VISIBLE':
      return { ...state, visibleCount: action.count }
    case 'SET_RUNNING':
      return { ...state, running: action.running }
    case 'RESET':
      return { ...state, phase: 0, visibleCount: 0, running: false }
    default:
      return state
  }
}

export default function Simulator() {
  const [state, dispatch] = useReducer(reducer, {
    themeId: SIMULATOR_THEMES[0].id,
    phase: 0,
    visibleCount: 0,
    running: false,
  })

  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([])
  const hasAutoRun = useRef(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const clearAllTimeouts = () => {
    timeoutsRef.current.forEach(clearTimeout)
    timeoutsRef.current = []
  }

  const selectedTheme = SIMULATOR_THEMES.find((t) => t.id === state.themeId)!

  const runPipeline = () => {
    clearAllTimeouts()
    dispatch({ type: 'RESET' })
    dispatch({ type: 'SET_RUNNING', running: true })

    // Phase 1: show records one by one
    const t1 = setTimeout(() => {
      dispatch({ type: 'SET_PHASE', phase: 1 })
      selectedTheme.records.forEach((_, i) => {
        const t = setTimeout(() => {
          dispatch({ type: 'SET_VISIBLE', count: i + 1 })
        }, i * 120)
        timeoutsRef.current.push(t)
      })
    }, PHASE_DELAYS[1])

    // Phases 2–6
    for (let p = 2; p <= 6; p++) {
      const t = setTimeout(() => {
        dispatch({ type: 'SET_PHASE', phase: p as Phase })
      }, PHASE_DELAYS[p])
      timeoutsRef.current.push(t)
    }

    // Done
    const tDone = setTimeout(() => {
      dispatch({ type: 'SET_RUNNING', running: false })
    }, PHASE_DELAYS[6] + 500)

    timeoutsRef.current.push(t1, tDone)
  }

  // Auto-trigger on scroll into view
  useEffect(() => {
    if (!containerRef.current) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAutoRun.current) {
          hasAutoRun.current = true
          const t = setTimeout(() => runPipeline(), 800)
          timeoutsRef.current.push(t)
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(containerRef.current)
    return () => observer.disconnect()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleThemeChange = (themeId: string) => {
    clearAllTimeouts()
    dispatch({ type: 'SET_THEME', themeId })
  }

  const deliveredCount = selectedTheme.records.filter(
    (r) => r.icpResult === 'pass' && r.scoreTier !== 'BELOW'
  ).length

  return (
    <div ref={containerRef}>
      {/* Controls */}
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <select
          value={state.themeId}
          onChange={(e) => handleThemeChange(e.target.value)}
          disabled={state.running}
          className="rounded border border-border bg-card px-3 py-2 font-mono text-sm text-foreground focus:outline-none focus:border-primary disabled:opacity-50"
        >
          {SIMULATOR_THEMES.map((t) => (
            <option key={t.id} value={t.id}>
              {t.label}
            </option>
          ))}
        </select>

        <button
          onClick={runPipeline}
          disabled={state.running}
          className="rounded border border-primary bg-emerald-950 px-4 py-2 font-mono text-sm text-primary transition-colors hover:bg-emerald-900 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {state.running ? 'Running...' : state.phase === 6 ? 'Run again' : 'Run pipeline'}
        </button>

        {state.phase === 6 && (
          <span className="font-mono text-xs text-muted-foreground">
            {deliveredCount} of {selectedTheme.records.length} records delivered
          </span>
        )}
      </div>

      {/* Phase label */}
      {state.phase > 0 && (
        <div className="mb-4 flex items-center gap-2">
          <div
            className={`h-1.5 w-1.5 rounded-full ${
              state.running ? 'bg-primary animate-pulse' : 'bg-[#16A34A]'
            }`}
          />
          <p className="font-mono text-xs text-muted-foreground">{PHASE_LABELS[state.phase]}</p>
        </div>
      )}

      {/* Phase progress */}
      {state.phase > 0 && (
        <div className="mb-5 flex gap-1">
          {([1, 2, 3, 4, 5, 6] as Phase[]).map((p) => (
            <div
              key={p}
              className={`h-0.5 flex-1 rounded-full transition-colors duration-500 ${
                state.phase >= p ? 'bg-primary' : 'bg-[rgba(255,255,255,0.08)]'
              }`}
            />
          ))}
        </div>
      )}

      {/* Records */}
      {state.phase === 0 ? (
        <div className="rounded border border-border bg-card px-6 py-10 text-center">
          <p className="font-mono text-xs text-muted-foreground">Select a theme and click &quot;Run pipeline&quot;</p>
        </div>
      ) : (
        <div className="space-y-2">
          {selectedTheme.records.map((record, i) => (
            <SimulatorRecord
              key={record.id}
              record={record}
              phase={state.phase}
              index={i}
              visible={i < state.visibleCount}
            />
          ))}
        </div>
      )}
    </div>
  )
}
