import Simulator from '@/components/how-it-works/simulator/Simulator'

export default function Section12() {
  return (
    <section className="relative border-t border-border py-20">
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-emerald-500/[0.03] blur-[160px]" />
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-3 section-label">
          Run the pipeline
        </p>
        <h2 className="mb-2 text-2xl text-foreground">See how a signal becomes a prospect.</h2>
        <p className="mb-8 text-sm text-muted-foreground">Pick a keyword theme. Watch the pipeline run.</p>
        <Simulator />
      </div>
    </section>
  )
}
