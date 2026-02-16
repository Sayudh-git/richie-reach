"use client";

import React, { useState, useEffect, useRef } from 'react';
import Wrapper from '../global/wrapper';
import { Button } from '../ui/button';
import Magnetic from '../ui/magnetic';
import Link from 'next/link';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { cn } from '@/utils';
import { Briefcase } from 'lucide-react';
import NextImage from 'next/image';

const allQueueData = [
    { role: "VP Sales", type: "Enterprise SaaS", priority: "HIGH" as const, time: "4m ago" },
    { role: "Head of Growth", type: "B2B Fintech", priority: "HIGH" as const, time: "8m ago" },
    { role: "Director, Marketing", type: "HR Tech", priority: "MED" as const, time: "15m ago" },
    { role: "Founder", type: "Dev Tools", priority: "HIGH" as const, time: "1m ago" },
    { role: "VP Product", type: "Analytics SaaS", priority: "MED" as const, time: "22m ago" },
    { role: "CRO", type: "Cybersecurity", priority: "HIGH" as const, time: "2m ago" },
    { role: "Head of Ops", type: "Fintech SaaS", priority: "MED" as const, time: "6m ago" },
    { role: "CMO", type: "MarTech", priority: "HIGH" as const, time: "3m ago" },
    { role: "SDR Manager", type: "HRTech", priority: "MED" as const, time: "11m ago" },
    { role: "VP Revenue", type: "PLG SaaS", priority: "HIGH" as const, time: "5m ago" },
];

// Handoff Queue Item Component
const QueueItem = ({ role, type, priority, time }: {
    role: string;
    type: string;
    priority: "HIGH" | "MED";
    time: string;
}) => (
    <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -30 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center justify-between p-3 rounded-lg bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] hover:bg-[rgba(255,255,255,0.05)] transition-colors"
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
    const sectionRef = useRef<HTMLElement>(null);
    const [visibleItems, setVisibleItems] = useState(allQueueData.slice(0, 5));
    const currentIndexRef = useRef(5);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"],
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

    // Auto-cycling queue items
    useEffect(() => {
        const interval = setInterval(() => {
            setVisibleItems(prev => {
                const nextItem = allQueueData[currentIndexRef.current % allQueueData.length];
                currentIndexRef.current++;
                return [...prev.slice(1), nextItem];
            });
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section ref={sectionRef} className="relative w-full min-h-[90vh] flex flex-col items-center pt-28 pb-0 overflow-hidden bg-[#0A0A0A]">

            {/* Wallpaper Container with Parallax */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    className="absolute inset-x-4 top-4 bottom-0 rounded-t-[32px] overflow-hidden"
                    style={{ y: backgroundY }}
                >
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

                    {/* Local Noise Texture */}
                    <div
                        className="absolute inset-0 mix-blend-overlay pointer-events-none"
                        style={{
                            opacity: 0.15,
                            backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
                            backgroundRepeat: 'repeat',
                            backgroundSize: '256px 256px',
                        }}
                    />
                </motion.div>
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
                        <span className="text-xs font-medium text-[#D4D4D4] tracking-wide">LinkedIn Leads</span>
                    </motion.div>

                    {/* Main Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                        className="text-5xl md:text-6xl lg:text-[76px] font-bold tracking-tight leading-[1.05] text-[#F5F5F5]"
                    >
                        Find active leads from
                        <br className="hidden md:block" />
                        <svg className="inline-block align-middle h-[0.72em] w-[0.72em] relative -top-[0.05em] rounded-[0.08em] mx-1" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
                            <rect width="72" height="72" rx="8" fill="#0A66C2"/>
                            <path d="M51.35 52.28h-7.39V42.05c0-2.44-.05-5.57-3.4-5.57-3.4 0-3.92 2.65-3.92 5.39v10.41h-7.39V30.2h7.1v3.01h.1c.99-1.87 3.4-3.84 7-3.84 7.49 0 8.87 4.93 8.87 11.34v11.57h.03zM24.37 27.19a4.29 4.29 0 1 1 0-8.58 4.29 4.29 0 0 1 0 8.58zm3.7 25.09h-7.4V30.2h7.4v22.08z" fill="#fff"/>
                        </svg>{' '}
                        <span className="font-serif italic font-normal text-emerald-400">engagement</span>.
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="text-lg md:text-xl text-[#737373] max-w-2xl mx-auto leading-relaxed tracking-[0.01em]"
                    >
                        Get prospects who engaged with posts about your topic this week. Filtered to your ICP, ready for outreach.
                    </motion.p>

                    {/* CTAs with Magnetic Effect */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4 pt-4"
                    >
                        <Magnetic>
                            <Button
                                className="bg-emerald-600 hover:bg-emerald-500 text-white font-medium px-8 py-6 rounded-2xl text-base shadow-[0_4px_20px_rgba(16,185,129,0.2)] transition-all hover:shadow-[0_4px_30px_rgba(16,185,129,0.3)] hover:-translate-y-0.5"
                                data-cal-link="sayudh/15min"
                                data-cal-namespace="15min"
                                data-cal-config='{"layout":"month_view"}'
                            >
                                Talk to Founder
                            </Button>
                        </Magnetic>
                        <Magnetic>
                            <Link href="#workflow">
                                <Button
                                    variant="outline"
                                    className="border-[rgba(255,255,255,0.1)] text-[#D4D4D4] hover:bg-[rgba(255,255,255,0.05)] hover:text-white px-8 py-6 rounded-2xl text-base transition-colors"
                                >
                                    How It Works
                                </Button>
                            </Link>
                        </Magnetic>
                    </motion.div>
                </div>

                {/* Handoff Queue Visualization - "Emerging" from Hero */}
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
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
                                Recent LinkedIn Activity
                            </div>
                        </div>

                        {/* Queue List */}
                        <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#0A0A0A]">
                            <div>
                                <p className="text-[10px] uppercase text-[#525252] font-semibold tracking-wider px-3 mb-0.5">Recent LinkedIn Activity</p>
                                <p className="text-[11px] text-[#525252] px-3 mb-3">Prospects who engaged with &apos;marketing automation&apos; posts last week.</p>
                                {/* Fixed height container to prevent layout shift during cycling */}
                                <div className="h-[300px] overflow-hidden relative">
                                    <div className="flex flex-col gap-2">
                                        <AnimatePresence mode="popLayout" initial={false}>
                                            {visibleItems.map((item) => (
                                                <QueueItem
                                                    key={`${item.role}-${item.type}`}
                                                    role={item.role}
                                                    type={item.type}
                                                    priority={item.priority}
                                                    time={item.time}
                                                />
                                            ))}
                                        </AnimatePresence>
                                    </div>
                                </div>
                            </div>
                            <div className="hidden md:block space-y-1">
                                <p className="text-[10px] uppercase text-[#525252] font-semibold tracking-wider px-3 mb-2">Signal Preview</p>
                                <div className="h-full rounded-lg border border-[rgba(255,255,255,0.06)] border-dashed bg-[rgba(255,255,255,0.01)] flex flex-col justify-center gap-3 p-4">
                                    {[0, 1, 2].map((i) => (
                                        <div key={i} className="flex items-center gap-3 animate-pulse" style={{ animationDelay: `${i * 200}ms` }}>
                                            <div className="w-8 h-8 rounded-full bg-[rgba(255,255,255,0.06)] flex-shrink-0" />
                                            <div className="flex-1 space-y-1.5">
                                                <div className="h-2.5 bg-[rgba(255,255,255,0.06)] rounded-full w-3/4" />
                                                <div className="h-2 bg-[rgba(255,255,255,0.04)] rounded-full w-1/2" />
                                            </div>
                                            <div className="h-4 w-10 bg-[rgba(255,255,255,0.04)] rounded-sm" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Fade to page */}
                        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#0A0A0A] to-transparent pointer-events-none" />
                    </div>
                </motion.div>

            </Wrapper>

            {/* Seamless fade to next section */}
            <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-[#0A0A0A] to-transparent pointer-events-none z-20" />
        </section>
    );
};

export default Hero;
