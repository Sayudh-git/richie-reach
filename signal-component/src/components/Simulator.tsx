import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardData } from "./Card";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface SimulatorProps {
    mode: "static" | "live";
}

const STATIC_DATA: CardData[] = [
    { id: 1, name: "Jane Doe", detail: "Email Bounced", subtext: "Data last updated: 2022", iconType: "error" },
    { id: 2, name: "Tech Corp", detail: "False Positive", subtext: "Keyword match: Supply Chain (Not AI)", iconType: "ban" },
    { id: 3, name: "Mark Smith", detail: "Outdated Profile", subtext: "Job changed 8 months ago", iconType: "warning" },
    { id: 4, name: "Unknown User", detail: "Missing Fields", subtext: "Incomplete entry", iconType: "warning" },
];

const LIVE_DATA: CardData[] = [
    { id: 101, name: "Sarah Connor", detail: "Just Liked 'AI Strategy' Post", subtext: "Real-Time Engagement • 2 mins ago", iconType: "check" },
    { id: 102, name: "Mike Ross", detail: "Commented: 'Interested in pricing'", subtext: "High Intent Lead • 5 mins ago", iconType: "fire" },
    { id: 103, name: "Jessica Pearson", detail: "Changed Job to VP of Sales", subtext: "Trigger Event • 1 hour ago", iconType: "zap" },
    { id: 104, name: "Harvey Specter", detail: "Downloaded Whitepaper", subtext: "High Conversion • Live Capture", iconType: "fire" },
];

export const Simulator = ({ mode }: SimulatorProps) => {
    const isLive = mode === "live";
    const [showCTA, setShowCTA] = useState(false);
    const [decayStage, setDecayStage] = useState<"none" | "stage1" | "stage2" | "stage3">("none");

    useEffect(() => {
        if (isLive) {
            setDecayStage("none");
            // Slower CTA appearance for storytelling: 
            // 5 cards * 0.8s stagger = 4s + 1s buffer = 5s. 
            // User requested "pause" before CTA. Let's set it to 7s total (2s pause after last card).
            const timer = setTimeout(() => setShowCTA(true), 7000);
            return () => clearTimeout(timer);
        } else {
            setShowCTA(false);
            // Progressive Decay Timeline - Extended to 12s
            const timer1 = setTimeout(() => setDecayStage("stage1"), 3000); // Flicker
            const timer2 = setTimeout(() => setDecayStage("stage2"), 7000); // Blur
            const timer3 = setTimeout(() => setDecayStage("stage3"), 11000); // Rot

            return () => {
                clearTimeout(timer1);
                clearTimeout(timer2);
                clearTimeout(timer3);
                setDecayStage("none");
            };
        }
    }, [isLive]);

    return (
        <div className="relative w-full max-w-md mx-auto">
            {/* Dashboard Container */}
            <motion.div
                layout
                animate={{ scale: isLive ? [0.98, 1] : 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={cn(
                    "relative w-full h-[480px] rounded-2xl border overflow-hidden transition-all duration-500",
                    isLive
                        ? "bg-black/40 border-richie-green/20 shadow-[0_0_50px_-10px_rgba(0,255,157,0.1)]"
                        : "bg-neutral-900/80 border-white/5 shadow-none"
                )}
            >

                {/* Header */}
                <div className="p-4 border-b border-white/5 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <div className={cn("w-2 h-2 rounded-full", isLive ? "bg-richie-green animate-pulse" : "bg-richie-bad")} />
                        <span className="text-xs font-mono text-white/50 uppercase tracking-widest">
                            {isLive ? "Signal Stream" : "Database_V1.csv"}
                        </span>
                    </div>
                    {isLive && (
                        <div className="text-xs font-mono text-richie-gold animate-pulse">
                            LIVE FEED
                        </div>
                    )}
                </div>

                {/* Content Area */}
                <div className={cn(
                    "p-4 flex flex-col gap-3 relative transition-all duration-700",
                    showCTA && isLive ? "blur-sm opacity-40 grayscale" : ""
                )}>
                    <AnimatePresence mode="wait">
                        {isLive ? (
                            <motion.div
                                key="live-list"
                                className="flex flex-col gap-3"
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                variants={{
                                    visible: { transition: { staggerChildren: 0.8 } }, // 0.8s stagger
                                }}
                            >
                                {LIVE_DATA.map((item, index) => (
                                    <Card key={item.id} data={item} mode="live" index={index} />
                                ))}
                            </motion.div>
                        ) : (
                            <motion.div
                                key="static-list"
                                className="flex flex-col gap-3 group transition-opacity duration-[12000ms]"
                                data-decay={decayStage}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: decayStage === "stage3" ? 0.6 : 1 }} // Drop to 60% opacity
                                exit={{ opacity: 0 }}
                            >
                                {STATIC_DATA.map((item, index) => (
                                    <Card key={item.id} data={item} mode="static" index={index} />
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Scanline Effect */}
                    <AnimatePresence>
                        {isLive && (
                            <motion.div
                                initial={{ top: "-10%", opacity: 0 }}
                                animate={{ top: "120%", opacity: [0, 1, 0] }}
                                transition={{ duration: 2.5, ease: "linear", repeat: Infinity, repeatDelay: 1 }}
                                className="absolute left-0 right-0 h-[2px] bg-richie-green shadow-[0_0_20px_2px_rgba(0,255,157,0.8)] z-20 pointer-events-none"
                            />
                        )}
                    </AnimatePresence>
                </div>

                {/* God Mode CTA Overlay */}
                <AnimatePresence>
                    {showCTA && isLive && (
                        <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/60 backdrop-blur-[2px]">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                className="relative"
                            >
                                <button className="group relative px-10 py-5 bg-richie-green text-black font-bold rounded-full shadow-[0_0_40px_-10px_rgba(0,255,157,0.6)] hover:shadow-[0_0_60px_-5px_rgba(0,255,157,0.9)] transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-3 overflow-hidden">
                                    <div className="flex flex-col items-start leading-none z-10">
                                        <span className="text-xs opacity-80 uppercase tracking-wider font-mono">Stop Guessing</span>
                                        <span className="text-xl tracking-tight">Start Reaching</span>
                                    </div>
                                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform z-10" />

                                    {/* Button Shine Animation */}
                                    <div className="absolute inset-0 -translate-x-full group-hover:animate-[shine_1.5s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12" />

                                    {/* Button Glow */}
                                    <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </button>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
};
