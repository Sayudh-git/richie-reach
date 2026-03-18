import PipelineOverview from '@/components/how-it-works/PipelineOverview'

export default function Section2() {
  return (
    <section className="border-t border-border py-20">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.1em] text-muted-foreground">
          Pipeline Overview
        </p>
        <h2 className="mb-10 text-3xl text-foreground">Nine stages. End to end.</h2>
        <PipelineOverview />
        <div className="mt-8 flex">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-[#2DD4BF]/20 bg-[#0A1A18] px-4 py-2 shadow-[0_0_12px_rgba(45,212,191,0.06)]">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#2DD4BF] opacity-40 animate-ping" />
              <span className="relative h-2 w-2 rounded-full bg-[#2DD4BF] opacity-70" />
            </span>
            <p className="font-mono text-[11px] text-[#2DD4BF]/70">
              Click any stage to jump to the detailed breakdown below.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
