"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { cn } from '@/utils';

interface HorizontalScrollProps {
    children: React.ReactNode;
    className?: string;
    containerClassName?: string;
}

export const HorizontalScroll: React.FC<HorizontalScrollProps> = ({
    children,
    className,
    containerClassName,
}) => {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    // Transform vertical scroll to horizontal movement
    const x = useTransform(scrollYProgress, [0.1, 0.9], ["5%", "-50%"]);

    return (
        <div
            ref={containerRef}
            className={cn(
                "relative h-[100vh] overflow-hidden",
                containerClassName
            )}
        >
            <div className="sticky top-1/2 -translate-y-1/2 h-fit">
                <motion.div
                    style={{ x }}
                    className={cn(
                        "flex gap-6 lg:gap-8 px-8 lg:px-20",
                        className
                    )}
                >
                    {children}
                </motion.div>
            </div>
        </div>
    );
};

interface ScrollCardProps {
    children: React.ReactNode;
    className?: string;
    index?: number;
}

export const ScrollCard: React.FC<ScrollCardProps> = ({
    children,
    className,
    index = 0,
}) => {
    return (
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
                "flex-shrink-0 w-[85vw] md:w-[500px] lg:w-[450px]",
                "bg-[#0F0F0F] border border-[rgba(255,255,255,0.08)]",
                "rounded-2xl lg:rounded-3xl p-8 lg:p-12",
                "hover:border-[rgba(0,255,148,0.2)]",
                "hover:shadow-[0_8px_40px_rgba(0,255,148,0.1)]",
                "transition-all duration-300 group",
                className
            )}
        >
            {children}
        </motion.div>
    );
};

export default HorizontalScroll;
