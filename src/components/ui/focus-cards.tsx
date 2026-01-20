"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/utils';
import Image from 'next/image';

interface FocusCardData {
    title: string;
    description: string;
    illustration?: string;
    stat?: {
        value: string;
        description: string;
    };
    className?: string;
    children?: React.ReactNode;
}

interface FocusCardsProps {
    cards: FocusCardData[];
    className?: string;
}

export const FocusCard: React.FC<{
    card: FocusCardData;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
    className?: string;
}> = ({ card, index, hovered, setHovered, className }) => {
    const isHovered = hovered === index;
    const isBlurred = hovered !== null && hovered !== index;

    return (
        <motion.div
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            className={cn(
                "relative rounded-xl lg:rounded-2xl p-6 lg:p-8 overflow-hidden",
                "bg-cardbox border border-transparent",
                "transition-all duration-300",
                className
            )}
            animate={{
                filter: isBlurred ? "blur(4px) brightness(0.7)" : "blur(0px) brightness(1)",
                scale: isHovered ? 1.02 : 1,
                y: isHovered ? -8 : 0,
            }}
            transition={{ duration: 0.3 }}
        >
            {/* Animated border on hover */}
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        className="absolute inset-0 rounded-xl lg:rounded-2xl pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{
                            background: 'linear-gradient(to right, rgba(0,255,148,0.15), transparent, rgba(0,255,148,0.15))',
                            boxShadow: '0 0 40px rgba(0,255,148,0.15), inset 0 0 0 1px rgba(0,255,148,0.3)',
                        }}
                    />
                )}
            </AnimatePresence>

            {/* Content */}
            <div className="relative z-10">
                {card.stat ? (
                    // Stat card layout
                    <>
                        <h3 className="text-4xl lg:text-6xl font-bold text-[#00FF94] mb-2">
                            {card.stat.value}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                            {card.stat.description}
                        </p>
                    </>
                ) : (
                    // Regular card layout
                    <>
                        <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-lg lg:text-xl font-semibold text-white">
                                {card.title}
                            </h3>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            {card.description}
                        </p>
                        {card.illustration && (
                            <div className="mt-6 relative grow h-48 transition-all duration-300 z-0">
                                <Image
                                    src={card.illustration}
                                    alt={card.title}
                                    width={500}
                                    height={500}
                                    unoptimized
                                    className={cn(
                                        "w-full mx-auto h-full object-contain object-center z-10",
                                        "transition-transform duration-300",
                                        isHovered && "scale-105"
                                    )}
                                />
                            </div>
                        )}
                        {card.children}
                    </>
                )}
            </div>
        </motion.div>
    );
};

export const FocusCards: React.FC<FocusCardsProps> = ({ cards, className }) => {
    const [hovered, setHovered] = useState<number | null>(null);

    return (
        <div className={cn("grid gap-4", className)}>
            {cards.map((card, index) => (
                <FocusCard
                    key={index}
                    card={card}
                    index={index}
                    hovered={hovered}
                    setHovered={setHovered}
                    className={card.className}
                />
            ))}
        </div>
    );
};

export default FocusCards;
