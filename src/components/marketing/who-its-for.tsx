"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Wrapper from '../global/wrapper';
import { cn } from '@/utils';
import { useIsMobile } from '@/hooks';

const audiences = [
    {
        headline: "For SaaS companies.",
        description: "Series A-C teams building pipeline at scale. High-ACV deals, long sales cycles, complex buying committees. You need timing, not just targeting.",
        bestFor: [
            "$50K+ ACV deals",
            "6+ month sales cycles",
            "Outbound-first GTM"
        ],
        accent: "B2B SAAS"
    },
    {
        headline: "For outbound agencies.",
        description: "White-label signal feeds that differentiate you on timing, not volume. Better inputs mean easier renewals and happier clients.",
        bestFor: [
            "Multi-client operations",
            "Retention-focused agencies",
            "Premium positioning"
        ],
        accent: "Agencies"
    },
    {
        headline: "For SDR leaders.",
        description: "Give your team a prioritized weekly queue of prospects who raised their hand. Stop burning deliverability on spray-and-pray.",
        bestFor: [
            "5+ person SDR teams",
            "Deliverability-conscious orgs",
            "Pipeline predictability"
        ],
        accent: "SDR Teams"
    }
];

const WhoItsFor = () => {
    const isMobile = useIsMobile();
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Transform vertical scroll to horizontal movement (desktop only)
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.67%"]);

    // Card Component
    const AudienceCard = ({ audience, index }: { audience: typeof audiences[0]; index: number }) => (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
            }}
            className={cn(
                "flex-shrink-0",
                isMobile ? "w-full" : "w-[420px] lg:w-[480px]"
            )}
        >
            <div className={cn(
                "h-full bg-[#0F0F0F] border border-[rgba(255,255,255,0.08)]",
                "rounded-2xl lg:rounded-3xl p-8 lg:p-12",
                "hover:border-[rgba(0,255,148,0.2)]",
                "hover:shadow-[0_20px_60px_rgba(0,255,148,0.08)]",
                "hover:-translate-y-1",
                "transition-all duration-500"
            )}>
                {/* Accent badge */}
                <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[rgba(0,255,148,0.08)] border border-[rgba(0,255,148,0.15)] mb-6">
                    <span className="text-xs font-medium text-[#00FF94] uppercase tracking-wider">
                        {audience.accent}
                    </span>
                </div>

                {/* Headline */}
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 leading-tight">
                    {audience.headline}
                </h3>

                {/* Description */}
                <p className="text-base text-[#A0A0A0] leading-relaxed mb-8">
                    {audience.description}
                </p>

                {/* Best For List */}
                <div className="space-y-3">
                    <p className="text-xs font-semibold text-[#606060] uppercase tracking-wider">
                        Best for
                    </p>
                    {audience.bestFor.map((item, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-3 group/item"
                        >
                            <span className="text-[#00FF94] text-sm group-hover/item:translate-x-1 transition-transform duration-300">
                                →
                            </span>
                            <span className="text-sm text-[#E0E0E0]">
                                {item}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );

    return (
        <section id="who-its-for" className="w-full relative">
            {/* Desktop: Horizontal scroll with sticky headline */}
            {!isMobile ? (
                <div ref={containerRef} className="relative h-[300vh]">
                    {/* Sticky container for entire section */}
                    <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
                        {/* Headline - Always visible and on top */}
                        <div className="relative z-20 text-center px-6 mb-12">
                            <motion.h2
                                className="text-5xl lg:text-[64px] font-bold leading-tight mb-6"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                            >
                                <span className="text-white">Built for </span>
                                <span className="font-serif italic text-[#00FF94]">three</span>
                                <span className="text-white"> teams.</span>
                            </motion.h2>

                            <motion.p
                                className="text-lg lg:text-xl text-[#A0A0A0] max-w-xl mx-auto"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                If outbound drives your business, we deliver the <span className="font-serif italic font-normal text-emerald-400">weekly prospect queue</span>.
                            </motion.p>
                        </div>

                        {/* Horizontal scrolling cards */}
                        <motion.div
                            style={{ x }}
                            className="flex gap-6 lg:gap-8 px-[calc(50vw-210px)] lg:px-[calc(50vw-240px)] will-change-transform"
                        >
                            {audiences.map((audience, index) => (
                                <AudienceCard key={index} audience={audience} index={index} />
                            ))}
                        </motion.div>
                    </div>
                </div>
            ) : (
                // Mobile: Vertical stack
                <Wrapper className="py-20">
                    {/* Headline */}
                    <motion.h2
                        className="text-4xl font-bold text-center leading-tight mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <span className="text-white">Built for </span>
                        <span className="font-serif italic text-[#00FF94]">three</span>
                        <span className="text-white"> teams.</span>
                    </motion.h2>

                    <motion.p
                        className="text-base text-[#A0A0A0] text-center max-w-md mx-auto mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        If outbound drives your business, we deliver the weekly prospect queue.
                    </motion.p>

                    <div className="flex flex-col gap-6">
                        {audiences.map((audience, index) => (
                            <AudienceCard key={index} audience={audience} index={index} />
                        ))}
                    </div>
                </Wrapper>
            )}
        </section>
    );
};

export default WhoItsFor;
