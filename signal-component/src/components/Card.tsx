import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { XCircle, AlertTriangle, Ban, CheckCircle2, Flame, Zap } from "lucide-react";

export interface CardData {
    id: number;
    name: string;
    detail: string;
    subtext?: string;
    iconType: "check" | "fire" | "zap" | "error" | "warning" | "ban";
}

interface CardProps {
    data: CardData;
    mode: "static" | "live";
    index: number;
}

export const Card = ({ data, mode, index }: CardProps) => {
    const isLive = mode === "live";

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className={cn(
                "relative w-full p-4 rounded-xl border flex items-center justify-between overflow-hidden transition-all duration-1000",
                isLive
                    ? "bg-richie-black/80 border-richie-green/30 shadow-[0_0_15px_-5px_rgba(0,255,157,0.2)] backdrop-blur-sm"
                    : cn(
                        "bg-neutral-900/50 border-white/5 text-gray-500",
                        // Progressive Decay Styles based on parent class or passed prop (handled via CSS in Simulator for simplicity)
                        "group-data-[decay=stage1]:opacity-80 group-data-[decay=stage1]:animate-pulse",
                        "group-data-[decay=stage2]:opacity-60 group-data-[decay=stage2]:blur-[1px] group-data-[decay=stage2]:border-richie-bad/20",
                        "group-data-[decay=stage3]:opacity-40 group-data-[decay=stage3]:blur-[2px] group-data-[decay=stage3]:border-richie-bad/40 group-data-[decay=stage3]:bg-richie-bad/5"
                    )
            )}
        >
            {/* Live Mode Glow Effect */}
            {isLive && (
                <div className="absolute inset-0 bg-gradient-to-r from-richie-green/5 via-transparent to-transparent opacity-50" />
            )}

            <div className="flex items-center gap-4 z-10">
                {/* Icon */}
                <div className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center border",
                    isLive
                        ? "bg-richie-green/10 border-richie-green/50 text-richie-green shadow-[0_0_10px_rgba(0,255,157,0.3)]"
                        : "bg-white/5 border-white/10 text-gray-600"
                )}>
                    {data.iconType === "check" && <CheckCircle2 className="w-5 h-5" />}
                    {data.iconType === "fire" && <Flame className="w-5 h-5 animate-pulse" />}
                    {data.iconType === "zap" && <Zap className="w-5 h-5" />}
                    {data.iconType === "error" && <XCircle className="w-5 h-5" />}
                    {data.iconType === "warning" && <AlertTriangle className="w-5 h-5" />}
                    {data.iconType === "ban" && <Ban className="w-5 h-5" />}
                </div>

                {/* Text Content */}
                <div className="flex flex-col">
                    <span className={cn(
                        "font-semibold text-sm",
                        isLive ? "text-white" : "text-gray-400"
                    )}>
                        {data.name}
                    </span>
                    <span className={cn(
                        "text-xs",
                        isLive ? "text-richie-green" : "text-gray-600"
                    )}>
                        {data.detail}
                    </span>
                    {data.subtext && (
                        <span className="text-[10px] text-gray-500 mt-0.5 font-mono opacity-70">
                            {data.subtext}
                        </span>
                    )}
                </div>
            </div>

            {/* Score / Status */}
            <div className="z-10 text-right">
                {isLive ? (
                    <div className="flex flex-col items-end">
                        <span className="text-xs text-richie-gold font-mono tracking-wider">SCORE</span>
                        <span className="text-lg font-bold font-mono text-white">
                            {90 + index}
                        </span>
                    </div>
                ) : (
                    <div className="w-2 h-2 rounded-full bg-richie-bad/50" />
                )}
            </div>
        </motion.div>
    );
};
