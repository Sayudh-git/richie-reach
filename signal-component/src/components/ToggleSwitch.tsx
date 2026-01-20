import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface ToggleSwitchProps {
    mode: "static" | "live";
    setMode: (mode: "static" | "live") => void;
}

export const ToggleSwitch = ({ mode, setMode }: ToggleSwitchProps) => {
    const isLive = mode === "live";
    const [showDecayWarning, setShowDecayWarning] = React.useState(false);

    React.useEffect(() => {
        if (!isLive) {
            const timer = setTimeout(() => setShowDecayWarning(true), 2000);
            return () => clearTimeout(timer);
        } else {
            setShowDecayWarning(false);
        }
    }, [isLive]);

    return (
        <div className="flex flex-col items-center gap-4 relative">
            {/* Switch Container */}
            <div
                className={cn(
                    "relative w-[340px] h-24 rounded-full p-2 cursor-pointer transition-colors duration-500 shadow-2xl border border-white/10 backdrop-blur-md overflow-hidden",
                    isLive
                        ? "bg-gradient-to-r from-richie-black to-richie-green/20 shadow-[0_0_40px_-10px_rgba(0,255,157,0.3)]"
                        : "bg-gradient-to-r from-richie-bad/10 to-richie-black shadow-[0_0_40px_-10px_rgba(239,68,68,0.1)]"
                )}
                onClick={() => setMode(isLive ? "static" : "live")}
            >
                {/* Pulse Effect for Live Mode Invitation */}
                {!isLive && showDecayWarning && (
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 w-16 h-16 bg-richie-green/20 rounded-full blur-xl animate-pulse" />
                )}


                {/* Pulse Ring for Live Side */}
                {!isLive && showDecayWarning && (
                    <div className="absolute right-1 top-1 bottom-1 w-[48%] rounded-full border border-richie-green/50 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite] opacity-75" />
                )}

                {/* Sliding Handle */}
                <motion.div
                    layout
                    className={cn(
                        "absolute top-1 bottom-1 w-[48%] rounded-full shadow-lg z-10",
                        isLive ? "bg-richie-green shadow-[0_0_20px_-5px_rgba(0,255,157,0.6)]" : "bg-neutral-700"
                    )}
                    initial={false}
                    animate={{
                        left: isLive ? "51%" : "1%",
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                    }}
                />

                {/* Labels */}
                <div className="absolute inset-0 flex items-center justify-between px-6 pointer-events-none">
                    <div className={cn(
                        "relative z-20 text-[10px] font-bold tracking-wider transition-colors duration-300 w-[45%] text-center leading-tight",
                        !isLive ? "text-white" : "text-white/30"
                    )}>
                        GETTING LEADS THE OLD WAY
                    </div>
                    <div className={cn(
                        "relative z-20 text-[10px] font-bold tracking-wider transition-colors duration-300 w-[45%] text-center leading-tight",
                        isLive ? "text-black" : "text-white/30"
                    )}>
                        HIGH INTENT SIGNALS DETECTED
                    </div>
                </div>
            </div>

            <div className="text-xs text-white/30 tracking-[0.2em] uppercase font-mono">
                {isLive ? "Signal Active" : "Legacy Mode"}
            </div>

            {/* Handwritten Note - Permanent & Repositioned */}
            <motion.div
                initial={{ opacity: 0, rotate: -10, y: 20 }}
                animate={{ opacity: 1, rotate: -5, y: 0 }}
                className="absolute -right-4 -bottom-12 md:-right-24 md:-bottom-16 flex flex-col items-start pointer-events-none z-50"
            >
                <svg width="50" height="50" viewBox="0 0 100 100" className="absolute -left-6 -top-6 rotate-[-10deg] stroke-richie-gold fill-none stroke-[3px]">
                    {/* Arrow pointing UP and slightly LEFT into the Live button */}
                    <path d="M 20 90 Q 40 50 70 30 M 70 30 L 50 35 M 70 30 L 65 50" />
                </svg>
                <span className="font-[family-name:var(--font-caveat)] text-xl md:text-2xl text-richie-gold rotate-[-5deg] whitespace-nowrap">
                    The Richie-Reach System
                </span>
            </motion.div>
        </div>
    );
};
