'use client'

import { motion } from 'motion/react'

export default function Section14Cta() {
  return (
    <section id="contact" className="border-t border-border py-24 scroll-mt-16">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111] p-10 md:p-16 group"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Emerald blur spot */}
          <div
            className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-emerald-500/10 blur-[100px]"
          />

          {/* Hover border glow */}
          <div
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
            style={{
              background:
                'linear-gradient(135deg, rgba(16,185,129,0.15) 0%, transparent 50%, rgba(16,185,129,0.08) 100%)',
            }}
          />

          {/* Top edge highlight */}
          <div className="absolute top-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          <div className="relative z-10 text-center">
            <h2 className="font-serif italic text-3xl font-semibold text-foreground md:text-4xl">
              If outbound is a serious priority,{' '}
              <span className="text-emerald-400">let&apos;s talk.</span>
            </h2>

            <p className="mt-5 text-[15px] text-muted-foreground">
              20-minute call to see if Richie Reach fits your outbound motion.
            </p>

            <div className="mt-8">
              <button
                data-cal-link="sayudh/15min"
                data-cal-namespace="15min"
                data-cal-config='{"layout":"month_view"}'
                className="inline-block rounded-full bg-white px-8 py-3 font-mono text-sm font-semibold text-black transition-colors hover:bg-gray-100"
              >
                Book a Fit Call
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
