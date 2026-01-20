"use client";

import React from 'react';
import Wrapper from '../global/wrapper';
import { Button } from '../ui/button';
import Link from 'next/link';
import { motion } from 'motion/react';
import { cn } from '@/utils';
import { ArrowRight, Twitter, Linkedin, Briefcase, Building2 } from 'lucide-react';
import NextImage from 'next/image';

// Handoff Queue Item Component
const QueueItem = ({ role, type, priority, time, delay }: any) => (
    <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay }}
        className="flex items-center justify-between p-3 mb-2 rounded-lg bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] hover:bg-[rgba(255,255,255,0.05)] transition-colors"
    >
        <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[rgba(255,255,255,0.1)] flex items-center justify-center">
                <Briefcase className="w-4 h-4 text-[#A0A0A0]" />
            </div>
            <div>
                <p className="text-sm font-medium text-[#F5F5F5]">{role}</p>
                <p className="text-xs text-[#737373]">{type}</p>
            </div>
        </div>
        <div className="flex flex-col items-end gap-1">
            <span className={cn(
                "text-[10px] uppercase font-bold px-1.5 py-0.5 rounded-sm tracking-wide",
                priority === 'HIGH' ? "text-emerald-400 bg-emerald-400/10" : "text-[#737373] bg-[rgba(255,255,255,0.05)]"
            )}>
                {priority}
            </span>
            <span className="text-[10px] text-[#525252]">{time}</span>
        </div>
    </motion.div>
);

const Hero = () => {
    return (
        <section className="relative w-full min-h-[90vh] flex flex-col items-center pt-28 pb-0 overflow-hidden bg-[#0A0A0A]">

            {/* Wallpaper Container */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-x-4 top-4 bottom-0 rounded-t-[32px] overflow-hidden">
                    {/* Hero Background Image */}
                    <div className="absolute inset-0">
                        <NextImage
                            src="/images/hero-image.jpg"
                            alt="Background"
                            fill
                            className="object-cover opacity-60"
                            priority
                        />
                    </div>

                    {/* Gradient Overlays for Text Readability & Fade */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/40 via-[#0A0A0A]/60 to-[#0A0A0A]" />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#0A0A0A_90%)] opacity-80" />

                    {/* Subtle Noise Texture */}
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay" />
                </div>
            </div>

            <Wrapper className="relative z-10 flex flex-col items-center">

                {/* Hero Content - Centered */}
                <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center space-y-8 mt-12 lg:mt-20">

                    {/* Overline */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] backdrop-blur-md"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-xs font-medium text-[#D4D4D4] tracking-wide">Signal-First Outbound Infrastructure</span>
                    </motion.div>

                    {/* Main Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl md:text-6xl lg:text-[76px] font-bold tracking-tight leading-[1.05] text-[#F5F5F5]"
                    >
                        Stop cold outreach. Start signal-driven <br className="hidden md:block" />
                        <span className="font-serif italic font-normal text-emerald-400">prospecting</span>.
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg md:text-xl text-[#737373] max-w-2xl mx-auto leading-relaxed"
                    >
                        Fresh signals from public LinkedIn engagement, ICP-filtered before enrichment, delivered within 24 hours.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4 pt-4"
                    >
                        <Button
                            className="bg-emerald-600 hover:bg-emerald-500 text-white font-medium px-8 py-6 rounded-2xl text-base shadow-[0_4px_20px_rgba(16,185,129,0.2)] transition-all hover:shadow-[0_4px_30px_rgba(16,185,129,0.3)] hover:-translate-y-0.5"
                            data-cal-link="sayudh/15min"
                            data-cal-namespace="15min"
                            data-cal-config='{"layout":"month_view"}'
                        >
                            Talk to Founder
                        </Button>
                        <Link href="#workflow">
                            <Button
                                variant="outline"
                                className="border-[rgba(255,255,255,0.1)] text-[#D4D4D4] hover:bg-[rgba(255,255,255,0.05)] hover:text-white px-8 py-6 rounded-2xl text-base transition-colors"
                            >
                                How It Works
                            </Button>
                        </Link>
                    </motion.div>
                </div>

                {/* Handoff Queue Visualization - "Emerging" from Hero */}
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                    className="w-full max-w-5xl mt-20 relative"
                >
                    {/* Top glass interface */}
                    <div className="relative rounded-t-3xl border border-[rgba(255,255,255,0.08)] border-b-0 bg-[#0A0A0A] overflow-hidden shadow-2xl">
                        {/* Header */}
                        <div className="flex items-center justify-between px-6 py-4 border-b border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)]">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-[#262626] border border-[#404040]" />
                                <div className="w-3 h-3 rounded-full bg-[#262626] border border-[#404040]" />
                                <div className="w-3 h-3 rounded-full bg-[#262626] border border-[#404040]" />
                            </div>
                            <div className="text-[10px] font-mono text-[#525252] uppercase tracking-wider">
                                LIVE SIGNAL QUEUE
                            </div>
                        </div>

                        {/* Queue List */}
                        <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#0A0A0A]">
                            <div className="space-y-1">
                                <p className="text-[10px] uppercase text-[#525252] font-semibold tracking-wider px-3 mb-2">Recent Signals</p>
                                <QueueItem role="VP Sales" type="Enterprise SaaS" priority="HIGH" time="4m ago" delay={0.8} />
                                <QueueItem role="Head of Growth" type="B2B Fintech" priority="HIGH" time="8m ago" delay={0.9} />
                                <QueueItem role="Director, Marketing" type="HR Tech" priority="MED" time="15m ago" delay={1.0} />
                                <QueueItem role="Founder" type="Dev Tools" priority="HIGH" time="1m ago" delay={1.1} />
                                <QueueItem role="VP Product" type="Analytics SaaS" priority="MED" time="22m ago" delay={1.2} />
                            </div>
                            <div className="hidden md:block space-y-1">
                                <p className="text-[10px] uppercase text-[#525252] font-semibold tracking-wider px-3 mb-2">Live Signal Queue</p>
                                <div className="h-full rounded-lg border border-[rgba(255,255,255,0.06)] border-dashed bg-[rgba(255,255,255,0.01)] flex items-center justify-center">
                                    <div className="text-center space-y-2 opacity-50">
                                        <div className="w-12 h-12 mx-auto rounded-full bg-[rgba(255,255,255,0.1)]" />
                                        <div className="w-24 h-2 mx-auto rounded-full bg-[rgba(255,255,255,0.1)]" />
                                        <div className="w-16 h-2 mx-auto rounded-full bg-[rgba(255,255,255,0.05)]" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Fade to page */}
                        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#0A0A0A] to-transparent pointer-events-none" />
                    </div>
                </motion.div>

            </Wrapper>

            {/* Seamless fade to next section */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent pointer-events-none z-20" />
        </section>
    );
};

export default Hero;
