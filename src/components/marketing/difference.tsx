"use client";

import Wrapper from '@/components/global/wrapper';
import { cn } from '@/utils';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import React, { useRef } from 'react';
import { X, Check, ArrowRight } from 'lucide-react';

const Difference = () => {
    // Mouse spotlight for the Richie Reach card
    const cardRef = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
    };

    const oldWay = [
        { text: "Static contact lists", detail: "30-90 days old" },
        { text: "Enrich everyone, filter later", detail: "60%+ waste" },
        { text: "No context for outreach", detail: "Generic templates" },
        { text: "Timing based on data age", detail: "Missed windows" },
        { text: "Manual list cleaning", detail: "Hours per week" },
    ];

    const richieWay = [
        { text: "Recent engagement signals", detail: "< 7 days fresh" },
        { text: "ICP-filter before enrichment", detail: "Save 60%+ credits" },
        { text: "Waterfall enrichment (Clay/Prospeo)", detail: "Full coverage" },
        { text: "Context for every contact", detail: "Personalized openers" },
        { text: "Stack-ready delivery", detail: "CSV, Clay, webhook" },
    ];

    return (
        <section id="difference" className="w-full py-24 lg:py-32 relative bg-[#0A0A0A] overflow-hidden section-fade-top">
            <Wrapper>
                <div className="flex flex-col items-center mb-16">
                    <motion.h2
                        className="text-4xl lg:text-5xl font-bold text-center leading-tight mb-6 text-gradient-subtle"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Built <span className="font-serif italic text-emerald-400">for timing</span>.
                    </motion.h2>
                    <motion.p
                        className="text-[#737373] text-lg text-center max-w-2xl"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        Databases answer who. Signals answer <span className="font-serif italic text-emerald-400">why now to reach out</span>.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 relative max-w-5xl mx-auto">

                    {/* Connecting arrow between cards (desktop only) */}
                    <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                        <motion.div
                            className="w-12 h-12 rounded-full bg-[#0A0A0A] border border-[rgba(255,255,255,0.1)] flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.5)]"
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                        >
                            <ArrowRight className="w-5 h-5 text-emerald-400" />
                        </motion.div>
                    </div>

                    {/* The Old Way Card */}
                    <motion.div
                        className="relative group p-8 lg:p-10 rounded-3xl border border-white/5 bg-[#111] overflow-hidden"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    >
                        {/* Subtle red glow on hover */}
                        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-red-500/5 blur-[100px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                        <div className="relative z-10">
                            <div className="flex items-center justify-between mb-8">
                                <h3 className="text-xl font-semibold text-[#525252]">Static Databases</h3>
                                <div className="px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-[10px] font-semibold uppercase tracking-wider">
                                    Outdated
                                </div>
                            </div>
                            <ul className="space-y-4">
                                {oldWay.map((item, i) => (
                                    <motion.li
                                        key={i}
                                        className="flex items-start gap-4 group/item"
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 + i * 0.08, duration: 0.5 }}
                                    >
                                        <div className="bg-[#1A1A1A] rounded-full p-1 flex-shrink-0 mt-0.5">
                                            <X className="w-3.5 h-3.5 text-[#525252]" />
                                        </div>
                                        <div className="flex-1">
                                            <span className="text-[#606060] line-through decoration-[#404040] text-sm">{item.text}</span>
                                            <span className="block text-[11px] text-[#404040] mt-0.5">{item.detail}</span>
                                        </div>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* Richie Reach Way Card - with cursor spotlight */}
                    <motion.div
                        ref={cardRef}
                        onMouseMove={handleMouseMove}
                        className="relative p-8 lg:p-10 rounded-3xl border border-emerald-500/20 bg-[#0F0F0F] overflow-hidden group"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    >
                        {/* Cursor-following spotlight */}
                        <motion.div
                            className="absolute pointer-events-none rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            style={{
                                width: 300,
                                height: 300,
                                x: useSpring(useTransform(mouseX, v => v - 150), { stiffness: 200, damping: 30 }),
                                y: useSpring(useTransform(mouseY, v => v - 150), { stiffness: 200, damping: 30 }),
                                background: 'radial-gradient(circle, rgba(0,255,148,0.08) 0%, transparent 70%)',
                            }}
                        />

                        {/* Static ambient glow */}
                        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-emerald-500/8 blur-[100px] rounded-full pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-emerald-900/8 to-transparent" />

                        <div className="relative z-10">
                            <div className="flex items-center justify-between mb-8">
                                <h3 className="text-xl font-semibold text-white">Richie Reach</h3>
                                <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-semibold uppercase tracking-wider shadow-[0_0_10px_rgba(16,185,129,0.15)]">
                                    Signal-First
                                </div>
                            </div>

                            <ul className="space-y-4">
                                {richieWay.map((item, i) => (
                                    <motion.li
                                        key={i}
                                        className="flex items-start gap-4 group/item"
                                        initial={{ opacity: 0, x: 10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 + i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                    >
                                        <div className="bg-emerald-500 rounded-full p-1 flex-shrink-0 mt-0.5 shadow-[0_0_12px_rgba(16,185,129,0.35)]">
                                            <Check className="w-3.5 h-3.5 text-black" strokeWidth={3} />
                                        </div>
                                        <div className="flex-1">
                                            <span className="text-white font-medium text-sm">{item.text}</span>
                                            <span className="block text-[11px] text-emerald-400/60 mt-0.5">{item.detail}</span>
                                        </div>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>

                        {/* Bottom emerald gradient line */}
                        <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
                    </motion.div>

                </div>
            </Wrapper>
        </section>
    );
};

export default Difference;
