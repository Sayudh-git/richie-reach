"use client";

import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            touchMultiplier: 2,
        });

        lenisRef.current = lenis;

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        // Handle anchor link clicks for smooth scroll with navbar offset
        const handleAnchorClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement | null;
            if (!anchor) return;

            const href = anchor.getAttribute('href');
            if (!href || href === '#') return;

            const el = document.querySelector(href);
            if (el) {
                e.preventDefault();
                lenis.scrollTo(el as HTMLElement, { offset: -80 });
            }
        };

        document.addEventListener('click', handleAnchorClick);

        return () => {
            document.removeEventListener('click', handleAnchorClick);
            lenis.destroy();
            lenisRef.current = null;
        };
    }, []);

    return <>{children}</>;
};

export default SmoothScroll;
