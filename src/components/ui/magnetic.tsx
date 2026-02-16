"use client";

import { useRef, useEffect } from 'react';
import gsap from 'gsap';

interface MagneticProps {
    children: React.ReactNode;
    className?: string;
    strength?: number;
}

const Magnetic = ({ children, className, strength = 0.3 }: MagneticProps) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            gsap.to(el, {
                x: x * strength,
                y: y * strength,
                duration: 0.4,
                ease: 'power2.out',
            });
        };

        const handleMouseLeave = () => {
            gsap.to(el, {
                x: 0,
                y: 0,
                duration: 0.6,
                ease: 'elastic.out(1, 0.3)',
            });
        };

        el.addEventListener('mousemove', handleMouseMove);
        el.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            el.removeEventListener('mousemove', handleMouseMove);
            el.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [strength]);

    return (
        <div ref={ref} className={className} style={{ display: 'inline-block' }}>
            {children}
        </div>
    );
};

export default Magnetic;
