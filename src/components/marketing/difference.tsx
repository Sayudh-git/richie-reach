"use client";

import Wrapper from '@/components/global/wrapper';
import { cn } from '@/utils';
import { motion, useScroll, useTransform } from 'motion/react';
import React, { useRef } from 'react';
import { X, Check } from 'lucide-react';

const Difference = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    const oldWay = [
        "Static contact lists",
        "Enrich everyone, filter later",
        "No context for outreach",
        "Timing based on data age",
        "Manual list cleaning"
    ];

    const richieWay = [
        "Recent engagement signals",
        "ICP-filter before enrichment",
        "Waterfall enrichment (Clay/Prospeo)",
        "Context for every contact",
        "Stack-ready delivery"
    ];

    return (
        <section id="difference" className="w-full py-24 lg:py-32 relative bg-[#0A0A0A] overflow-hidden">
            <Wrapper>
                <div className="flex flex-col items-center mb-16">
                    <motion.h2
                        className="text-4xl lg:text-5xl font-bold text-center leading-tight mb-6 text-[#F5F5F5]"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Built <span className="font-serif italic text-emerald-400">for timing</span>.
                    </motion.h2>
                    <p className="text-[#737373] text-lg text-center max-w-2xl">
                        Databases answer who. Signals answer <span className="font-serif italic text-emerald-400">why now to reach out</span>.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 relative max-w-5xl mx-auto">

                    {/* The Old Way Card */}
                    <div className="relative group p-8 rounded-3xl border border-white/5 bg-[#111] overflow-hidden">
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="text-xl font-semibold text-[#525252]">Static Databases</h3>
                            <div className="px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-medium">
                                CONTEXT-FREE
                            </div>
                        </div>
                        <ul className="space-y-5">
                            {oldWay.map((item, i) => (
                                <li key={i} className="flex items-center gap-4 text-[#737373] group-hover:text-[#888] transition-colors">
                                    <div className="bg-[#1A1A1A] rounded-full p-1 flex-shrink-0">
                                        <X className="w-4 h-4 text-[#525252]" />
                                    </div>
                                    <span className="line-through decoration-[#525252]">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Richie Reach Way Card - Glassmorphism & Spotlight */}
                    <motion.div
                        className="relative p-8 rounded-3xl border border-emerald-500/20 bg-[#0F0F0F] overflow-hidden shadow-[0_0_40px_-10px_rgba(16,185,129,0.15)] group"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        {/* Spotlight Effect */}
                        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-emerald-900/10 to-transparent opacity-50" />

                        <div className="relative z-10 flex items-center justify-between mb-8">
                            <h3 className="text-xl font-semibold text-white">Richie Reach</h3>
                            <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium shadow-[0_0_10px_rgba(16,185,129,0.2)]">
                                SIGNAL-FIRST
                            </div>
                        </div>

                        <ul className="relative z-10 space-y-5">
                            {richieWay.map((item, i) => (
                                <motion.li
                                    key={i}
                                    className="flex items-center gap-4 text-white"
                                    initial={{ opacity: 0, x: 10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + i * 0.1 }}
                                >
                                    <div className="bg-emerald-500 rounded-full p-1 flex-shrink-0 shadow-[0_0_10px_rgba(16,185,129,0.4)]">
                                        <Check className="w-4 h-4 text-black font-bold" />
                                    </div>
                                    <span className="font-medium tracking-wide">{item}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                </div>
            </Wrapper>
        </section>
    );
};

const richieWay = [
    "Recent engagement signals",
    "ICP-filter before enrichment",
    "Waterfall enrichment (Clay/Prospeo)",
    "Context for every contact",
    "Stack-ready delivery"
];

export default Difference;
