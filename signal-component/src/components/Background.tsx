import React from "react";

export const Background = () => {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-richie-black">
            {/* Deep gradient background */}
            <div className="absolute inset-0 bg-gradient-to-b from-richie-black via-[#080808] to-[#0a0a0a]" />

            {/* Clearer Grid Pattern */}
            <div
                className="absolute inset-0 opacity-[0.4]"
                style={{
                    backgroundImage: "linear-gradient(to right, #80808012 1px, transparent 1px), linear-gradient(to bottom, #80808012 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                    maskImage: "radial-gradient(circle at center, black 40%, transparent 100%)",
                    WebkitMaskImage: "radial-gradient(circle at center, black 40%, transparent 100%)",
                }}
            />

            {/* Vignette */}
            <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/90" />

            {/* Ambient Glows */}
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-richie-green/5 blur-[150px] rounded-full animate-pulse duration-[10000ms]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-richie-gold/5 blur-[150px] rounded-full animate-pulse duration-[10000ms]" />
        </div>
    );
};
