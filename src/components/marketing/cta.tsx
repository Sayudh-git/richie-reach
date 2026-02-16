"use client";

import { Button } from '@/components/ui/button';
import Wrapper from '@/components/global/wrapper';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const Cta = () => {
    return (
        <section id="contact" className="w-full py-24 lg:py-32 relative overflow-hidden bg-[#0A0A0A]">

            {/* Background Spotlights */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl opacity-20 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/20 rounded-full blur-[120px]" />
            </div>

            <Wrapper>
                <div className="max-w-4xl mx-auto text-center relative z-10">

                    <motion.div
                        className="relative p-8 md:p-16 rounded-3xl md:rounded-[40px] border border-white/[0.08] bg-[#111] overflow-hidden group"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        {/* Hover border glow — sits behind content */}
                        <div className="absolute inset-0 rounded-3xl md:rounded-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                            style={{
                                background: 'linear-gradient(135deg, rgba(16,185,129,0.15) 0%, transparent 50%, rgba(16,185,129,0.08) 100%)',
                            }}
                        />

                        {/* Sweep shimmer — diagonal light sweep on hover */}
                        <div
                            className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            style={{
                                background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.03) 45%, rgba(255,255,255,0.06) 50%, rgba(255,255,255,0.03) 55%, transparent 60%)',
                                backgroundSize: '200% 100%',
                                animation: 'cta-shimmer 1.5s ease-in-out',
                            }}
                        />

                        {/* Top edge highlight */}
                        <div className="absolute top-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                        <h2 className="text-4xl md:text-6xl font-bold text-gradient-subtle mb-6 tracking-tight relative z-10">
                            Start with a <br className="hidden md:block" />
                            <span className="font-serif italic text-emerald-400">conversation</span>.
                        </h2>

                        <p className="text-lg text-[#888] mb-10 max-w-lg mx-auto relative z-10">
                            20-minute call to see if this fits your outbound motion.
                        </p>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-4 relative z-10">
                            <Button
                                className="h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg font-semibold bg-white text-black hover:bg-gray-200 rounded-full transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_-5px_rgba(255,255,255,0.3)] w-full sm:w-auto"
                                data-cal-link="sayudh/15min"
                                data-cal-namespace="15min"
                                data-cal-config='{"layout":"month_view"}'
                            >
                                Book Call with Founder
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                        </div>
                    </motion.div>

                </div>
            </Wrapper>
        </section>
    );
};

export default Cta;
