'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import ModeToggle from '@/components/how-it-works/ui/ModeToggle'
import { calcModeA, calcModeB } from '@/lib/calculations'
import Icons from '@/components/global/icons'

const fmtUSD = (n: number) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(n)

const fmtCount = (n: number) => new Intl.NumberFormat('en-US').format(n)

interface SliderProps {
  label: string
  value: number
  min: number
  max: number
  step: number
  format: (v: number) => string
  helper?: string
  onChange: (v: number) => void
}

function Slider({ label, value, min, max, step, format, helper, onChange }: SliderProps) {
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <label className="text-sm text-foreground">{label}</label>
        <span className="font-mono text-sm text-primary">{format(value)}</span>
      </div>
      <input
        type="range"
        className="rr-slider-v2 mt-2"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
      {helper && <p className="mt-1 text-[11px] text-muted-foreground">{helper}</p>}
    </div>
  )
}

function MRow({ label, value, dim }: { label: string; value: string; dim?: boolean }) {
  return (
    <div className="flex items-baseline justify-between gap-2">
      <span className="text-[11px] text-muted-foreground shrink-0">{label}</span>
      <span className={`font-mono text-xs tabular-nums ${dim ? 'text-muted-foreground' : 'text-foreground'}`}>
        {value}
      </span>
    </div>
  )
}

function ModeAInputs({
  monthlyDataSpend, weeklyVolume, currentReplyRate, avgDealValue,
  setMonthlyDataSpend, setWeeklyVolume, setCurrentReplyRate, setAvgDealValue,
}: {
  monthlyDataSpend: number
  weeklyVolume: number
  currentReplyRate: number
  avgDealValue: number
  setMonthlyDataSpend: (v: number) => void
  setWeeklyVolume: (v: number) => void
  setCurrentReplyRate: (v: number) => void
  setAvgDealValue: (v: number) => void
}) {
  return (
    <div className="space-y-8">
      <Slider
        label="Monthly data spend"
        value={monthlyDataSpend}
        min={200}
        max={5000}
        step={50}
        format={(v) => fmtUSD(v)}
        helper="Total spend on enrichment data per month"
        onChange={setMonthlyDataSpend}
      />
      <Slider
        label="Weekly outreach volume"
        value={weeklyVolume}
        min={100}
        max={5000}
        step={50}
        format={(v) => fmtCount(v) + ' records'}
        helper="Records sourced or enriched each week"
        onChange={setWeeklyVolume}
      />
      <Slider
        label="Current reply rate"
        value={currentReplyRate}
        min={0.5}
        max={8}
        step={0.1}
        format={(v) => v.toFixed(1) + '%'}
        helper="Reply rate on current cold outreach"
        onChange={setCurrentReplyRate}
      />
      <Slider
        label="Avg deal value"
        value={avgDealValue}
        min={1000}
        max={50000}
        step={500}
        format={(v) => fmtUSD(v)}
        helper="Average closed deal size"
        onChange={setAvgDealValue}
      />
    </div>
  )
}

function ModeBInputs({
  clientCount, dataSpendPerClient, hoursPerClient, hourlyRate,
  setClientCount, setDataSpendPerClient, setHoursPerClient, setHourlyRate,
}: {
  clientCount: number
  dataSpendPerClient: number
  hoursPerClient: number
  hourlyRate: number
  setClientCount: (v: number) => void
  setDataSpendPerClient: (v: number) => void
  setHoursPerClient: (v: number) => void
  setHourlyRate: (v: number) => void
}) {
  return (
    <div className="space-y-8">
      <Slider
        label="Active client count"
        value={clientCount}
        min={1}
        max={20}
        step={1}
        format={(v) => v + ' clients'}
        helper="Number of active outbound clients"
        onChange={setClientCount}
      />
      <Slider
        label="Data spend per client/mo"
        value={dataSpendPerClient}
        min={50}
        max={1000}
        step={25}
        format={(v) => fmtUSD(v)}
        helper="Enrichment data cost per client per month"
        onChange={setDataSpendPerClient}
      />
      <Slider
        label="Ops hours per client/mo"
        value={hoursPerClient}
        min={2}
        max={40}
        step={1}
        format={(v) => v + ' hrs'}
        helper="Hours spent on outbound ops per client each month"
        onChange={setHoursPerClient}
      />
      <Slider
        label="Your hourly rate"
        value={hourlyRate}
        min={50}
        max={300}
        step={10}
        format={(v) => fmtUSD(v)}
        helper="Effective hourly billing rate"
        onChange={setHourlyRate}
      />
    </div>
  )
}

export default function CalculatorSection() {
  const [mode, setMode] = useState<'inhouse' | 'agency'>('inhouse')
  const [pipelineOpen, setPipelineOpen] = useState(false)

  // Mode A state
  const [monthlyDataSpend, setMonthlyDataSpend] = useState(1000)
  const [weeklyVolume, setWeeklyVolume] = useState(500)
  const [currentReplyRate, setCurrentReplyRate] = useState(2.5)
  const [avgDealValue, setAvgDealValue] = useState(15000)

  // Mode B state
  const [clientCount, setClientCount] = useState(5)
  const [dataSpendPerClient, setDataSpendPerClient] = useState(200)
  const [hoursPerClient, setHoursPerClient] = useState(15)
  const [hourlyRate, setHourlyRate] = useState(100)

  const resultA = calcModeA({ monthlyDataSpend, weeklyVolume, currentReplyRate, avgDealValue })
  const resultB = calcModeB({ clientCount, dataSpendPerClient, hoursPerClient, hourlyRate })

  return (
    <section id="section-calculator" className="border-t border-border py-20">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <div className="mb-2 flex items-center gap-2">
            <Icons.icon className="h-4 w-4 text-emerald-500" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              ROI Calculator
            </span>
          </div>
          <h2 className="mb-2 text-2xl font-semibold text-foreground">
            See the numbers for your setup.
          </h2>
          <p className="mb-8 max-w-xl text-sm text-muted-foreground">
            Two modes: in-house teams and agencies. Adjust the sliders to match your current setup.
          </p>

          <ModeToggle mode={mode} onChange={setMode} />

          <AnimatePresence mode="wait">
            {mode === 'inhouse' ? (
              <motion.div
                key="inhouse"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="mt-10 grid gap-10 md:grid-cols-[1fr_1.6fr]"
              >
                <ModeAInputs
                  monthlyDataSpend={monthlyDataSpend}
                  weeklyVolume={weeklyVolume}
                  currentReplyRate={currentReplyRate}
                  avgDealValue={avgDealValue}
                  setMonthlyDataSpend={setMonthlyDataSpend}
                  setWeeklyVolume={setWeeklyVolume}
                  setCurrentReplyRate={setCurrentReplyRate}
                  setAvgDealValue={setAvgDealValue}
                />

                <div>
                  {/* 3-column output */}
                  <div className="grid gap-3 sm:grid-cols-3">
                    {/* Column 1 — Current */}
                    <div className="rounded border border-border bg-card px-4 py-4">
                      <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                        Your current motion
                      </p>
                      <div className="space-y-2">
                        <MRow label="Data spend/mo" value={fmtUSD(resultA.current.monthlyDataCost)} />
                        <MRow label="Enrichment waste" value={fmtUSD(resultA.current.enrichmentWaste)} />
                        <MRow label="Records/mo" value={fmtCount(resultA.current.recordsPerMonth)} />
                        <MRow label="Reply rate" value={currentReplyRate.toFixed(1) + '%'} />
                        <MRow label="Replies/mo" value={fmtCount(resultA.current.repliesPerMonth)} />
                        <MRow label="Meeting conv." value="18%" dim />
                        <MRow label="Meetings/mo" value={fmtCount(resultA.current.meetingsPerMonth)} />
                      </div>
                      <div className="mt-4 border-t border-border pt-3">
                        <p className="text-[10px] text-muted-foreground">Cost per meeting</p>
                        <p className="mt-0.5 font-mono text-2xl font-bold" style={{ color: '#D97706' }}>
                          {fmtUSD(resultA.current.costPerMeeting)}
                        </p>
                      </div>
                    </div>

                    {/* Column 2 — With RR */}
                    <div className="rounded border border-primary bg-emerald-950 px-4 py-4">
                      <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-emerald-600">
                        Signal-led (Richie Reach)
                      </p>
                      <div className="space-y-2">
                        <MRow label="RR monthly cost" value="$1,800" dim />
                        <div>
                          <MRow label="Records/mo" value={fmtCount(resultA.withRR.recordsContactedPerMonth)} />
                          <p className="mt-0.5 text-[9px] text-muted-foreground leading-snug">
                            Only ICP-matched signals enter your sequence
                          </p>
                        </div>
                        <div>
                          <MRow label="Signal reply rate" value={resultA.withRR.signalReplyRate.toFixed(1) + '%'} />
                          <p className="mt-0.5 text-[9px] text-muted-foreground leading-snug">
                            2.8× uplift from signal context
                          </p>
                        </div>
                        <MRow label="Replies/mo" value={fmtCount(resultA.withRR.repliesPerMonth)} />
                        <div>
                          <MRow label="Meeting conv." value="22%" />
                          <p className="mt-0.5 text-[9px] text-muted-foreground leading-snug">
                            Higher — opener references public engagement
                          </p>
                        </div>
                        <MRow label="Meetings/mo" value={fmtCount(resultA.withRR.meetingsPerMonth)} />
                      </div>
                      <div className="mt-4 border-t border-emerald-900 pt-3">
                        <p className="text-[10px] text-emerald-600">Cost per meeting</p>
                        <p className="mt-0.5 font-mono text-2xl font-bold text-primary">
                          {fmtUSD(resultA.withRR.costPerMeeting)}
                        </p>
                      </div>
                    </div>

                    {/* Column 3 — Delta */}
                    <div className="rounded border border-border bg-card px-4 py-4">
                      <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                        The difference
                      </p>
                      <div className="space-y-2">
                        <MRow label="CPM (current)" value={fmtUSD(resultA.current.costPerMeeting)} />
                        <MRow label="CPM (Richie Reach)" value={fmtUSD(resultA.withRR.costPerMeeting)} />
                      </div>
                      <div className="mt-4 border-t border-border pt-3">
                        <p className="text-[10px] text-muted-foreground">Savings per meeting</p>
                        <p
                          className="mt-0.5 font-mono text-2xl font-bold"
                          style={{ color: resultA.delta.rrCheaper ? '#16A34A' : '#EF4444' }}
                        >
                          {resultA.delta.rrCheaper ? '+' : '−'}
                          {fmtUSD(Math.abs(resultA.delta.savingsPerMeeting))}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Context sentence */}
                  <p className="mt-4 text-[12px] text-muted-foreground leading-snug">
                    {resultA.delta.rrCheaper
                      ? `At ${resultA.withRR.meetingsPerMonth} meetings/month, you reach ${fmtUSD(resultA.withRR.costPerMeeting)} cost per meeting vs ${fmtUSD(resultA.current.costPerMeeting)} on your current approach.`
                      : 'At this data spend and volume, cost per meeting is similar. The difference is signal quality — context-referenced openers vs. cold lists.'}
                  </p>

                  {/* Pipeline accordion */}
                  <div className="mt-4">
                    <button
                      onClick={() => setPipelineOpen((p) => !p)}
                      className="font-mono text-[11px] text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5"
                    >
                      <span>{pipelineOpen ? '▾' : '▸'}</span>
                      {pipelineOpen ? 'Hide' : 'See'} pipeline projection
                    </button>
                    <AnimatePresence>
                      {pipelineOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="mt-3 rounded border border-border bg-card px-5 py-4 space-y-1.5">
                            <p className="text-xs text-muted-foreground">
                              Based on {resultA.withRR.meetingsPerMonth} meetings/month with signal-led outreach:
                            </p>
                            <p className="text-xs text-foreground">
                              25% meeting → opportunity rate = <span className="font-mono text-primary">{resultA.pipeline.opportunities}</span> opportunities/month
                            </p>
                            <p className="text-xs text-foreground">
                              35% close rate = <span className="font-mono text-primary">{resultA.pipeline.newClients}</span> new clients/month
                            </p>
                            <p className="text-xs text-foreground">
                              At {fmtUSD(avgDealValue)} avg deal value = <span className="font-mono text-primary">{fmtUSD(resultA.pipeline.projectedARR)}</span> new ARR/year (projected)
                            </p>
                            <p className="mt-2 text-[11px] text-muted-foreground opacity-70 leading-snug">
                              These are directional estimates based on published benchmarks. Actual results depend on ICP definition, offer quality, and follow-up capacity.
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="agency"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="mt-10 grid gap-10 md:grid-cols-[1fr_1.6fr]"
              >
                <ModeBInputs
                  clientCount={clientCount}
                  dataSpendPerClient={dataSpendPerClient}
                  hoursPerClient={hoursPerClient}
                  hourlyRate={hourlyRate}
                  setClientCount={setClientCount}
                  setDataSpendPerClient={setDataSpendPerClient}
                  setHoursPerClient={setHoursPerClient}
                  setHourlyRate={setHourlyRate}
                />

                <div className="grid gap-3 sm:grid-cols-3">
                  {/* Column 1 — Current */}
                  <div className="rounded border border-border bg-card px-4 py-4">
                    <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      Current ops
                    </p>
                    <div className="space-y-2">
                      <MRow label="Monthly ops cost" value={fmtUSD(resultB.current.monthlyOpsCost)} />
                      <MRow label="Total data spend" value={fmtUSD(resultB.current.totalDataSpend)} />
                      <MRow label="Total hours/mo" value={resultB.current.totalHoursPerMonth + ' hrs'} />
                    </div>
                  </div>

                  {/* Column 2 — With RR */}
                  <div className="rounded border border-primary bg-emerald-950 px-4 py-4">
                    <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-emerald-600">
                      With Richie Reach
                    </p>
                    <div className="space-y-2">
                      <MRow label="Ops cost (with RR)" value={fmtUSD(resultB.withRR.opsCostWithRR)} />
                      <MRow label="Total RR cost" value={fmtUSD(resultB.withRR.totalRRCost)} />
                      <MRow label="Hrs/client (with RR)" value={resultB.withRR.hoursPerClientWithRR.toFixed(1) + ' hrs'} />
                    </div>
                  </div>

                  {/* Column 3 — Hours freed */}
                  <div className="rounded border border-border bg-card px-4 py-4">
                    <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      Hours freed
                    </p>
                    <div className="space-y-2">
                      <MRow label="Freed/client/mo" value={resultB.withRR.hoursFreedPerClient.toFixed(1) + ' hrs'} />
                      <MRow label="Across all clients" value={resultB.withRR.totalFreedHours.toFixed(1) + ' hrs'} />
                    </div>
                    <p className="mt-4 text-[11px] text-muted-foreground leading-snug">
                      Freed hours can be redeployed to client-facing work or used to take on additional clients.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Assumptions */}
          <div className="mt-10 rounded border border-border bg-card px-5 py-4">
            <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">How the math works</p>
            <ul className="space-y-1 text-[12px] text-muted-foreground">
              <li>Current setup meetings: total contacts × reply rate × 18% meeting conversion.</li>
              <li>Signal-led meetings: ICP-filtered contacts (22% of total) × signal reply rate × 22% meeting conversion.</li>
              <li>Signal reply rate: your current rate × 2.8 (Hunter.io benchmark, capped at 12%).</li>
              <li>Richie Reach monthly cost used in calculation: $1,800 (Signal Feed tier).</li>
              <li>Enrichment waste estimate: 78% of unfiltered records × $0.13 blended cost per record.</li>
            </ul>
            <p className="mt-3 text-[11px] text-muted-foreground opacity-70">
              These are estimates. Actual results depend on ICP definition, copy quality, and follow-up capacity.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
