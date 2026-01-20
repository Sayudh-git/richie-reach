"use client";

import { Button } from '@/components/ui/button';
import Wrapper from '@/components/global/wrapper';
import { motion } from 'motion/react';
import Link from 'next/link';
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
                        className="p-8 md:p-16 rounded-[40px] border border-white/10 bg-[#111] overflow-hidden relative group"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        {/* Shine Effect on Hover */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out pointer-events-none" />

                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                            Start with a <br className="hidden md:block" />
                            <span className="font-serif italic text-emerald-400">conversation</span>.
                        </h2>

                        <p className="text-lg text-[#888] mb-10 max-w-lg mx-auto">
                            20-minute call to see if this fits your outbound motion.
                        </p>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                            <Button
                                className="h-14 px-8 text-lg font-semibold bg-white text-black hover:bg-gray-200 rounded-full transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_-5px_rgba(255,255,255,0.3)]"
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
        </section >
    );
};

export default Cta;
