import { DM_Sans, Crimson_Pro, JetBrains_Mono } from "next/font/google";

// Primary font: DM Sans (replaces Space Grotesk and Geist)
export const base = DM_Sans({
    subsets: ["latin"],
    variable: "--font-base",
    weight: ["400", "500", "600", "700"],
    display: "swap",
});

// Heading font: Also DM Sans (for consistency)
export const heading = DM_Sans({
    subsets: ["latin"],
    variable: "--font-heading",
    weight: ["400", "500", "600", "700"],
    display: "swap",
});

// Serif accent font: Crimson Pro (for emphasis words)
export const serif = Crimson_Pro({
    subsets: ["latin"],
    variable: "--font-serif",
    weight: ["600", "700"],
    style: ["italic", "normal"],
    display: "swap",
});

// Code font: JetBrains Mono
export const mono = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-mono",
    weight: ["400", "500", "600", "700"],
    display: "swap",
});
