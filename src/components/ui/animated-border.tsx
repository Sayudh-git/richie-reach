"use client";

import React from 'react';
import { motion } from 'motion/react';
import { cn } from '@/utils';

interface AnimatedBorderProps {
    children: React.ReactNode;
    className?: string;
    containerClassName?: string;
    borderColor?: string;
    duration?: number;
}

export const AnimatedBorder: React.FC<AnimatedBorderProps> = ({
    children,
    className,
    containerClassName,
    borderColor = "#00FF94",
    duration = 4,
}) => {
    return (
        <div className={cn("relative", containerClassName)}>
            {/* Animated gradient border */}
            <div className="absolute -inset-[1px] rounded-3xl overflow-hidden">
                <motion.div
                    className="absolute inset-0"
                    style={{
                        background: `conic-gradient(from 0deg, transparent, ${borderColor}40, transparent, ${borderColor}40, transparent)`,
                    }}
                    animate={{
                        rotate: 360,
                    }}
                    transition={{
                        duration,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
            </div>

            {/* Inner content with background */}
            <div className={cn(
                "relative rounded-3xl",
                className
            )}>
                {children}
            </div>
        </div>
    );
};

// Shimmer button variant
export const ShimmerBorder: React.FC<AnimatedBorderProps> = ({
    children,
    className,
    containerClassName,
    borderColor = "#00FF94",
}) => {
    return (
        <div className={cn("relative group", containerClassName)}>
            {/* Shimmer effect on hover */}
            <div className="absolute -inset-[1px] rounded-3xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div
                    className="absolute inset-0 animate-shimmer"
                    style={{
                        background: `linear-gradient(90deg, transparent, ${borderColor}30, transparent)`,
                        backgroundSize: '200% 100%',
                    }}
                />
            </div>

            {/* Static border */}
            <div className="absolute -inset-[1px] rounded-3xl border border-[rgba(255,255,255,0.08)] group-hover:border-[rgba(0,255,148,0.2)] transition-colors duration-300" />

            {/* Inner content */}
            <div className={cn(
                "relative rounded-3xl",
                className
            )}>
                {children}
            </div>
        </div>
    );
};

export default AnimatedBorder;
