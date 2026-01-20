"use client";

import { useState } from 'react';
import { capabilities, stats } from '@/constants/capabilities';
import Wrapper from '@/components/global/wrapper';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import { cn } from '@/utils';
import { Button } from "../ui/button";
import Image from "next/image";

interface CardProps {
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

const FocusCard: React.FC<CardProps> = ({
    index,
    hovered,
    setHovered,
    children,
    className,
    delay = 0.4
}) => {
    const isHovered = hovered === index;
    const isBlurred = hovered !== null && hovered !== index;

    return (
        <motion.div
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            className={cn("relative group", className)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            animate={{
                filter: isBlurred ? "blur(3px) brightness(0.7)" : "blur(0px) brightness(1)",
                scale: isHovered ? 1.02 : 1,
            }}
            style={{
                transition: 'filter 0.3s ease, transform 0.3s ease',
            }}
        >
            {/* Animated border glow on hover */}
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        className="absolute -inset-[1px] rounded-xl lg:rounded-2xl pointer-events-none z-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{
                            background: 'linear-gradient(135deg, rgba(0,255,148,0.2), transparent, rgba(0,255,148,0.1))',
                            boxShadow: '0 0 40px rgba(0,255,148,0.1), inset 0 0 0 1px rgba(0,255,148,0.25)',
                        }}
                    />
                )}
            </AnimatePresence>

            {/* Card content */}
            <div className={cn(
                "relative rounded-xl lg:rounded-2xl p-6 lg:p-8 overflow-hidden h-full",
                "bg-cardbox border border-[rgba(255,255,255,0.06)]",
                "transition-all duration-300 z-10",
                isHovered && "border-transparent"
            )}>
                {children}
            </div>
        </motion.div>
    );
};

const Capibilities = () => {
    const [hovered, setHovered] = useState<number | null>(null);

    return (
        <section id="capabilities" className="w-full py-20 lg:py-32 relative">
            {/* Background glow */}
            <div className="hidden lg:block absolute -z-10 top-0 -left-1/4 w-1/2 h-1/2 bg-primary/5 rounded-full blur-[10rem]" />

            <Wrapper>
                {/* Headline with Serif Mixing */}
                <motion.h2
                    className="text-5xl lg:text-[64px] font-bold text-center leading-tight mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <span className="text-white">What you </span>
                    <span className="font-serif italic text-[#00FF94]">get</span>
                    <span className="text-white">.</span>
                </motion.h2>

                <motion.p
                    className="text-lg lg:text-xl text-[#A0A0A0] text-center max-w-2xl mx-auto mb-16 lg:mb-24"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    What lands in your stack every week.
                </motion.p>

                {/* Bento Grid with Focus Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 max-w-5xl mx-auto">
                    {/* First row: 7-5 split */}
                    <FocusCard
                        index={0}
                        hovered={hovered}
                        setHovered={setHovered}
                        className="lg:col-span-7"
                        delay={0.2}
                    >
                        <div className="relative">
                            <h3 className="text-xl font-semibold text-white mb-2">
                                Signal context.
                            </h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                Every prospect includes: signal type, engagement recency, keyword theme. Write openers that reference what they care about.
                            </p>
                        </div>
                        <div className="mt-6 relative h-48 transition-transform duration-500 group-hover:scale-[1.02]">
                            <Image
                                src={capabilities[0].illustration}
                                alt="Signal classification"
                                width={500}
                                height={500}
                                unoptimized
                                className="w-full mx-auto h-full object-contain object-center"
                            />
                        </div>
                    </FocusCard>

                    <FocusCard
                        index={1}
                        hovered={hovered}
                        setHovered={setHovered}
                        className="lg:col-span-5"
                        delay={0.3}
                    >
                        <div className="relative">
                            <h3 className="text-xl font-semibold text-white mb-2">
                                Fresh signals.
                            </h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                Delivered within 24 hours of engagement. Includes timestamps so outreach stays contextual.
                            </p>
                        </div>
                        <div className="mt-6 relative h-48 transition-transform duration-500 group-hover:scale-[1.02]">
                            <Image
                                src={capabilities[1].illustration}
                                alt="Fresh signals"
                                width={500}
                                height={500}
                                unoptimized
                                className="w-full mx-auto h-full object-contain object-center"
                            />
                        </div>
                    </FocusCard>

                    {/* Second row: 4-4-4 split */}
                    <FocusCard
                        index={2}
                        hovered={hovered}
                        setHovered={setHovered}
                        className="lg:col-span-4"
                        delay={0.4}
                    >
                        <div className="relative">
                            <h3 className="text-lg font-semibold text-white mb-2">
                                {capabilities[2].title}
                            </h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                {capabilities[2].description}
                            </p>
                        </div>
                        <div className="mt-6 relative h-48 transition-transform duration-500 group-hover:scale-[1.02]">
                            <Image
                                src={capabilities[2].illustration}
                                alt={capabilities[2].title}
                                width={500}
                                height={500}
                                unoptimized
                                className="w-full mx-auto h-full object-contain object-center"
                            />
                        </div>
                    </FocusCard>

                    <FocusCard
                        index={3}
                        hovered={hovered}
                        setHovered={setHovered}
                        className="lg:col-span-4"
                        delay={0.5}
                    >
                        <div className="relative">
                            <h3 className="text-lg font-semibold text-white mb-2">
                                Weekly delivery
                            </h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                Typical weekly volume is 500 to 2,000 qualified prospects, depending on your themes and ICP.
                            </p>
                        </div>
                        <div className="mt-6 relative h-48 transition-transform duration-500 group-hover:scale-[1.02]">
                            <Image
                                src={capabilities[3].illustration}
                                alt="Weekly delivery"
                                width={500}
                                height={500}
                                unoptimized
                                className="w-full mx-auto h-full object-contain object-center"
                            />
                        </div>
                    </FocusCard>

                    {/* Stats column */}
                    <div className="lg:col-span-4 flex flex-col gap-4">
                        <FocusCard
                            index={4}
                            hovered={hovered}
                            setHovered={setHovered}
                            delay={0.6}
                        >
                            <div className="relative">
                                <h3 className="text-3xl lg:text-4xl font-bold text-[#00FF94] mb-2 group-hover:drop-shadow-[0_0_20px_rgba(0,255,148,0.3)] transition-all duration-300">
                                    ∞ Scale
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    Not limited to a fixed list of profiles. Track as many themes as you need.
                                </p>
                            </div>
                        </FocusCard>

                        <FocusCard
                            index={5}
                            hovered={hovered}
                            setHovered={setHovered}
                            delay={0.7}
                        >
                            <div className="relative">
                                <h3 className="text-2xl lg:text-3xl font-bold text-[#00FF94] mb-2 group-hover:drop-shadow-[0_0_20px_rgba(0,255,148,0.3)] transition-all duration-300">
                                    {stats[1]?.value}
                                </h3>
                                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                                    {stats[1]?.description}
                                </p>
                                <Link href="#contact">
                                    <Button
                                        size="sm"
                                        variant="outline"
                                        className="border-[rgba(255,255,255,0.15)] hover:border-[#00FF94] hover:text-[#00FF94] transition-all duration-300"
                                    >
                                        {stats[1]?.button?.text}
                                    </Button>
                                </Link>
                            </div>
                        </FocusCard>
                    </div>
                </div>
            </Wrapper>
        </section>
    );
};

export default Capibilities;
