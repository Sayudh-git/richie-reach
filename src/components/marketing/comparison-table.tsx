"use client";

import React from 'react';
import Wrapper from '../global/wrapper';
import { motion } from 'motion/react';
import { cn } from '@/utils';

const comparisonData = [
    {
        metric: "Data Freshness",
        staticDb: "30-90 Days Old",
        richieReach: "<5 Minutes (Zero-Day)",
    },
    {
        metric: "Intent Source",
        staticDb: "Job Titles (Guesswork)",
        richieReach: "Active Engagement (Proof)",
    },
    {
        metric: "Cost Model",
        staticDb: "$0.50 per Lead",
        richieReach: "Flat Rate / Uncapped",
    },
    {
        metric: "Signal Noise",
        staticDb: "High (Keywords match 'Chain')",
        richieReach: "Zero (Context Filtering)",
    },
    {
        metric: "Volume Limits",
        staticDb: "Capped at 1,000-5,000/mo",
        richieReach: "Unlimited",
    },
];

const ComparisonTable = () => {
    return (
        <section className="relative w-full py-16 lg:py-24 overflow-hidden">
            <Wrapper>
                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 lg:mb-16"
                >
                    Why &quot;Database&quot; is a Dirty Word
                </motion.h2>

                {/* Table - Desktop */}
                <div className="hidden md:block">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/5 backdrop-blur-sm"
                    >
                        {/* Table Header */}
                        <div className="grid grid-cols-3 gap-4 p-6 border-b border-foreground/10 bg-foreground/5">
                            <div className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">
                                Metric
                            </div>
                            <div className="font-semibold text-sm uppercase tracking-wider text-muted-foreground text-center">
                                ❌ Static Databases
                            </div>
                            <div className={cn(
                                "font-semibold text-sm uppercase tracking-wider text-center",
                                "text-primary"
                            )}>
                                ✅ Richie-Reach
                            </div>
                        </div>

                        {/* Table Rows */}
                        {comparisonData.map((row, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                                className={cn(
                                    "grid grid-cols-3 gap-4 p-6 transition-all duration-300",
                                    "hover:bg-foreground/10",
                                    index !== comparisonData.length - 1 && "border-b border-foreground/5"
                                )}
                            >
                                <div className="font-medium text-foreground">
                                    {row.metric}
                                </div>
                                <div className="text-muted-foreground text-center">
                                    {row.staticDb}
                                </div>
                                <div className={cn(
                                    "text-center font-bold text-foreground",
                                    "relative"
                                )}>
                                    <span className="relative z-10">{row.richieReach}</span>
                                    <div className="absolute inset-0 bg-primary/5 rounded-lg -z-0" />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Glow effect for Richie-Reach column */}
                    <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-primary/10 blur-[100px] -z-10 pointer-events-none" />
                </div>

                {/* Table - Mobile (Stacked Cards) */}
                <div className="md:hidden space-y-6">
                    {comparisonData.map((row, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="rounded-xl border border-foreground/10 bg-foreground/5 p-5 space-y-4"
                        >
                            <h3 className="font-semibold text-lg">{row.metric}</h3>

                            <div className="space-y-3">
                                <div className="flex items-start gap-3">
                                    <span className="text-base mt-0.5">❌</span>
                                    <div>
                                        <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                                            Static Databases
                                        </p>
                                        <p className="text-sm text-muted-foreground">{row.staticDb}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3 p-3 bg-primary/5 rounded-lg border border-primary/20">
                                    <span className="text-base mt-0.5">✅</span>
                                    <div>
                                        <p className="text-xs uppercase tracking-wider text-primary mb-1">
                                            Richie-Reach
                                        </p>
                                        <p className="text-sm font-bold">{row.richieReach}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Wrapper>
        </section>
    );
};

export default ComparisonTable;
