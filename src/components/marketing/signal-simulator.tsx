"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/utils';

type CardMode = 'static' | 'live';

const staticCards = [
    {
        id: 1,
        name: "John Doe",
        status: "Email Bounced",
        icon: "❌",
        theme: "red"
    },
    {
        id: 2,
        name: "Jane Smith",
        status: "Last Active: 2022",
        icon: "⚠️",
        theme: "yellow"
    },
    {
        id: 3,
        name: "Tech Corp",
        status: "Keyword: 'Chain' (Not AI)",
        icon: "🚫",
        theme: "red"
    }
];

const liveCards = [
    {
        id: 1,
        name: "Sarah Connor",
        status: "Liked 'AI Strategy' 2m ago",
        icon: "✅",
        score: 98
    },
    {
        id: 2,
        name: "Mike Ross",
        status: "Commented 'Interested in pricing'",
        icon: "🔥",
        score: 95
    },
    {
        id: 3,
        name: "Jessica Pearson",
        status: "Changed to VP Sales",
        icon: "⚡",
        score: 92
    }
];

const SignalSimulator = () => {
    const [mode, setMode] = useState<CardMode>('live');

    return (
        <div className="w-full h-full flex flex-col">
            {/* Toggle Switch */}
            <div className="mb-6">
                <div className={cn(
                    "relative rounded-full p-1 transition-all duration-300",
                    mode === 'static'
                        ? "bg-red-500/10 border border-red-500/20"
                        : "bg-primary/10 border border-primary/20"
                )}>
                    <div className="grid grid-cols-2 gap-1 relative">
                        <motion.div
                            className={cn(
                                "absolute inset-y-1 w-[calc(50%-4px)] rounded-full transition-all duration-300",
                                mode === 'static'
                                    ? "bg-red-500/20 left-1"
                                    : "bg-primary/20 left-[calc(50%+2px)]"
                            )}
                            layout
                        />
                        <button
                            onClick={() => setMode('static')}
                            className={cn(
                                "relative z-10 px-3 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-colors duration-300",
                                mode === 'static'
                                    ? "text-red-400"
                                    : "text-foreground/40 hover:text-foreground/60"
                            )}
                        >
                            Static Database
                        </button>
                        <button
                            onClick={() => setMode('live')}
                            className={cn(
                                "relative z-10 px-3 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-colors duration-300",
                                mode === 'live'
                                    ? "text-primary"
                                    : "text-foreground/40 hover:text-foreground/60"
                            )}
                        >
                            Live Signal
                        </button>
                    </div>
                </div>
            </div>

            {/* Cards Container */}
            <div className="flex-1 space-y-3 overflow-hidden">
                <AnimatePresence mode="wait">
                    {mode === 'static' ? (
                        <motion.div
                            key="static"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-3"
                        >
                            {staticCards.map((card, index) => (
                                <motion.div
                                    key={card.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className={cn(
                                        "p-4 rounded-xl backdrop-blur-md",
                                        "bg-foreground/5 border border-foreground/10",
                                        "hover:bg-foreground/10 transition-all duration-300"
                                    )}
                                >
                                    <div className="flex items-start justify-between gap-3">
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="text-lg">{card.icon}</span>
                                                <h4 className="font-semibold text-sm text-foreground/80 truncate">
                                                    {card.name}
                                                </h4>
                                            </div>
                                            <p className="text-xs text-red-400/90">
                                                {card.status}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    ) : (
                        <motion.div
                            key="live"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-3"
                        >
                            {liveCards.map((card, index) => (
                                <motion.div
                                    key={card.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className={cn(
                                        "relative p-4 rounded-xl backdrop-blur-md",
                                        "bg-primary/5 border border-primary/20",
                                        "hover:bg-primary/10 hover:border-primary/30 transition-all duration-300",
                                        "shadow-[0_0_20px_rgba(0,255,157,0.1)]"
                                    )}
                                >
                                    <div className="flex items-start justify-between gap-3">
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="text-lg">{card.icon}</span>
                                                <h4 className="font-semibold text-sm text-foreground truncate">
                                                    {card.name}
                                                </h4>
                                            </div>
                                            <p className="text-xs text-primary/90">
                                                {card.status}
                                            </p>
                                        </div>
                                        <div className={cn(
                                            "flex-shrink-0 px-2 py-1 rounded-md",
                                            "bg-[#FFD700]/20 border border-[#FFD700]/30"
                                        )}>
                                            <span className="text-xs font-bold text-[#FFD700]">
                                                {card.score}
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default SignalSimulator;
