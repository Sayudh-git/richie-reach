"use client";

import React, { useRef } from 'react';
import Wrapper from '../global/wrapper';
import { motion, useScroll, useTransform } from 'motion/react';
import { Radio, Target, Zap } from 'lucide-react';

const steps = [
    {
        number: "01",
        label: "Monitor",
        title: (
            <>
                Track the <span className="font-serif italic font-normal text-emerald-400">signal</span>
            </>
        ),
        description: "Monitor public engagement around your keywords. Comments, reactions, and posts from your target market. No account access needed."
    },
    {
        number: "02",
        label: "Filter",
        title: (
            <>
                Filter <span className="font-serif italic font-normal text-emerald-400">first</span>
            </>
        ),
        description: "Apply ICP rules before enrichment. Geography, role, seniority, company size, industry. Eliminate waste before you pay for credits."
    },
    {
        number: "03",
        label: "Action",
        title: "Push to your stack",
        description: "CSV, Clay table, or webhook into your outbound stack. Your choice."
    },
];

const Workflow = () => {
    return (
        <section id="workflow" className="w-full py-24 lg:py-40 relative bg-[#0A0A0A] overflow-hidden">
            <Wrapper>
                <div className="flex flex-col items-center">
                    <motion.h2
                        className="text-4xl lg:text-5xl font-bold text-center leading-tight text-[#F5F5F5] mb-20"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        How it <span className="font-serif italic text-emerald-400">works</span>.
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16 w-full max-w-6xl mx-auto">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                className="relative flex flex-col items-start px-4"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                            >
                                {/* Giant Number */}
                                <div className="text-[120px] lg:text-[160px] font-bold leading-[0.8] text-transparent tracking-tighter select-none font-serif italic mb-[-40px] z-0 opacity-20"
                                    style={{ WebkitTextStroke: "2px rgba(255,255,255,0.2)" }}>
                                    {step.number}
                                </div>

                                {/* Content Card */}
                                <div className="relative z-10 pl-4 border-l border-emerald-500/30">
                                    <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
                                    <p className="text-[#a3a3a3] leading-relaxed max-w-xs">
                                        {step.description}
                                    </p>
                                </div>

                                {/* Background Decorative Gradient */}
                                <div
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full blur-[80px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                                    style={{
                                        background: `radial-gradient(circle, rgba(16,185,129,0.1) 0%, transparent 70%)`
                                    }}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Wrapper>
        </section>
    );
};

export default Workflow;
