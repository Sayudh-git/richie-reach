"use client";

import { motion } from 'motion/react';
import React from 'react';

interface TextRevealProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    stagger?: number;
}

const TextReveal = ({ children, className, delay = 0, stagger = 0.04 }: TextRevealProps) => {
    const elements = React.Children.toArray(children);
    let wordIndex = 0;

    const renderAnimatedContent = (child: React.ReactNode): React.ReactNode => {
        if (typeof child === 'string') {
            const parts = child.split(/(\s+)/);
            return parts.map((part, i) => {
                if (/^\s+$/.test(part)) {
                    return part;
                }
                const idx = wordIndex++;
                return (
                    <motion.span
                        key={`word-${idx}-${i}`}
                        className="inline-block"
                        initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
                        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.5,
                            delay: delay + idx * stagger,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                    >
                        {part}
                    </motion.span>
                );
            });
        }
        if (React.isValidElement(child)) {
            const idx = wordIndex++;
            return (
                <motion.span
                    key={`el-${idx}`}
                    className="inline-block"
                    initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
                    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.5,
                        delay: delay + idx * stagger,
                        ease: [0.16, 1, 0.3, 1],
                    }}
                >
                    {child}
                </motion.span>
            );
        }
        return child;
    };

    return (
        <span className={className}>
            {elements.map((el, i) => (
                <React.Fragment key={i}>
                    {renderAnimatedContent(el)}
                </React.Fragment>
            ))}
        </span>
    );
};

export default TextReveal;
