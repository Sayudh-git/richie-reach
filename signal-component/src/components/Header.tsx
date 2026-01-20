import React from "react";
import { motion } from "framer-motion";

export const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 h-16 border-b border-white/5 bg-black/10 backdrop-blur-md flex items-center justify-between px-6">
            {/* Logo */}
            <div className="flex items-center gap-1">
                <span className="text-white font-bold tracking-tighter text-lg">
                    Richie Reach
                </span>
                <div className="w-1.5 h-1.5 rounded-full bg-richie-green animate-pulse" />
            </div>

            {/* CTA Button */}
            <button className="px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-medium text-white transition-colors border border-white/10">
                Get Access
            </button>
        </header>
    );
};
