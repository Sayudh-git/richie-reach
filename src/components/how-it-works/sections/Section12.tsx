import Simulator from '@/components/how-it-works/simulator/Simulator'

export default function Section12() {
  return (
    <section className="border-t border-border py-20">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.1em] text-muted-foreground">
          Run the pipeline
        </p>
        <h2 className="mb-2 text-2xl text-foreground">See how a signal becomes a prospect.</h2>
        <p className="mb-8 text-sm text-muted-foreground">Pick a keyword theme. Watch the pipeline run.</p>
        <Simulator />
      </div>
    </section>
  )
}
