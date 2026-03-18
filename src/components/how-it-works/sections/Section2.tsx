import PipelineOverview from '@/components/how-it-works/PipelineOverview'

export default function Section2() {
  return (
    <section className="border-t border-border py-20">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.1em] text-muted-foreground">
          Pipeline Overview
        </p>
        <h2 className="mb-10 text-2xl text-foreground">Nine stages. End to end.</h2>
        <PipelineOverview />
        <p className="mt-8 text-sm text-muted-foreground">
          Click any stage to jump to the detailed breakdown below.
        </p>
      </div>
    </section>
  )
}
