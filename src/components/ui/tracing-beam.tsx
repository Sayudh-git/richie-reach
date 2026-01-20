"use client";

import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import { cn } from '@/utils';

interface TracingBeamProps {
    children: React.ReactNode;
    className?: string;
}

export const TracingBeam: React.FC<TracingBeamProps> = ({ children, className }) => {
    const ref = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const [svgHeight, setSvgHeight] = useState(0);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start center", "end center"],
    });

    useEffect(() => {
        if (contentRef.current) {
            setSvgHeight(contentRef.current.offsetHeight);
        }
    }, []);

    // Spring animation for smoother beam movement
    const y1 = useSpring(
        useTransform(scrollYProgress, [0, 0.8], [50, svgHeight]),
        {
            stiffness: 500,
            damping: 90,
        }
    );

    const y2 = useSpring(
        useTransform(scrollYProgress, [0, 1], [50, svgHeight - 200]),
        {
            stiffness: 500,
            damping: 90,
        }
    );

    return (
        <motion.div
            ref={ref}
            className={cn("relative w-full", className)}
        >
            <div className="absolute left-4 md:left-8 top-0 w-px h-full">
                <svg
                    viewBox={`0 0 20 ${svgHeight}`}
                    width="20"
                    height={svgHeight}
                    className="block"
                    aria-hidden="true"
                >
                    {/* Background line */}
                    <motion.path
                        d={`M 1 0 V ${svgHeight}`}
                        fill="none"
                        stroke="rgba(255, 255, 255, 0.08)"
                        strokeWidth="1"
                    />
                    {/* Animated gradient beam */}
                    <motion.path
                        d={`M 1 50 V ${svgHeight}`}
                        fill="none"
                        stroke="url(#gradient)"
                        strokeWidth="2"
                        className="motion-reduce:hidden"
                        style={{
                            pathLength: scrollYProgress,
                        }}
                    />
                    <defs>
                        <motion.linearGradient
                            id="gradient"
                            gradientUnits="userSpaceOnUse"
                            x1="0"
                            x2="0"
                            y1={y1}
                            y2={y2}
                        >
                            <stop stopColor="#00FF94" stopOpacity="0" />
                            <stop stopColor="#00FF94" />
                            <stop offset="0.325" stopColor="#00FF94" />
                            <stop offset="1" stopColor="#00FF94" stopOpacity="0" />
                        </motion.linearGradient>
                    </defs>
                </svg>
                {/* Glowing dot at the leading edge */}
                <motion.div
                    style={{
                        top: y1,
                    }}
                    className="absolute left-[-5px] w-3 h-3 rounded-full bg-[#00FF94] shadow-[0_0_20px_rgba(0,255,148,0.6)]"
                />
            </div>
            <div ref={contentRef} className="pl-12 md:pl-20">
                {children}
            </div>
        </motion.div>
    );
};

export default TracingBeam;
