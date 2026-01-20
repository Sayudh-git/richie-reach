"use client";

import { motion, AnimatePresence } from 'motion/react';
import Wrapper from '../global/wrapper';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { cn } from '@/utils';

const faqs = [
    {
        question: "How do you capture signals?",
        answer: "We monitor public engagement on LinkedIn. Comments, reactions, and posts around your keywords and themes. No client account access required. We focus on public web information and respect suppression lists."
    },
    {
        question: "Is this just LinkedIn scraping?",
        answer: "No. We're a signal feed service, not a scraping tool. We deliver processed, ICP-filtered, enriched prospect lists. The technical implementation is managed on our side, and we prioritize responsible data practices."
    },
    {
        question: "What about data freshness?",
        answer: "Signals decay fast. We deliver weekly queues within 24 hours of signal capture. This isn't a static database where contacts are months old. Freshness is the primary advantage."
    },
    {
        question: "Do you handle opt-outs?",
        answer: "Yes. We maintain suppression lists and respect opt-out requests. If someone asks to be removed, they're removed from future deliveries."
    },
    {
        question: "What integrations do you support?",
        answer: "We deliver via CSV download, Clay table, or direct webhook to Smartlead, Lemlist, Instantly, HubSpot, and others. Need a custom integration? We build it."
    },
    {
        question: "How is this different from tools?",
        answer: "Tools require operators. We can be the full system. Signal capture, ICP filtering, enrichment, and delivery. Or just the upstream signal feed. You choose the level of involvement."
    },
    {
        question: "What's your pricing?",
        answer: "Pricing depends on volume, ICP complexity, and whether you want just the signal feed or full GTME service. We start with a pilot to validate fit before discussing long-term pricing. Book a call to discuss your specific needs."
    },
    {
        question: "How do I get started?",
        answer: "Book a 20-minute call. We'll discuss your ICP, keywords, and signal themes. If it's a fit, we'll run a 7-day pilot to deliver a sample feed. No long-term commitment required to test."
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="w-full py-20 lg:py-32 relative">
            <Wrapper>
                {/* Headline */}
                <motion.h2
                    className="text-5xl lg:text-[64px] font-bold text-white text-center mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    Questions<span className="text-[#00FF94]">?</span>
                </motion.h2>

                {/* Subheadline */}
                <motion.p
                    className="text-lg lg:text-xl text-[#A0A0A0] text-center max-w-xl mx-auto mb-16 lg:mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Everything you need to know before we talk.
                </motion.p>

                {/* FAQ Items */}
                <div className="max-w-[800px] mx-auto space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                                className={cn(
                                    "bg-[#0F0F0F] border rounded-xl overflow-hidden transition-all duration-300",
                                    isOpen
                                        ? "border-[rgba(0,255,148,0.2)] shadow-[0_0_30px_rgba(0,255,148,0.05)]"
                                        : "border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.12)] hover:bg-[rgba(255,255,255,0.02)]"
                                )}
                            >
                                {/* Question */}
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    className="w-full text-left px-6 lg:px-8 py-6 flex items-center justify-between gap-4 cursor-pointer group"
                                >
                                    <span className={cn(
                                        "text-base lg:text-lg font-semibold leading-snug transition-colors duration-300",
                                        isOpen ? "text-white" : "text-[#E0E0E0] group-hover:text-white"
                                    )}>
                                        {faq.question}
                                    </span>
                                    <span className={cn(
                                        "shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300",
                                        isOpen
                                            ? "bg-[#00FF94] text-black rotate-0"
                                            : "bg-[rgba(255,255,255,0.06)] text-[#A0A0A0] group-hover:bg-[rgba(255,255,255,0.1)]"
                                    )}>
                                        {isOpen ? (
                                            <Minus className="w-4 h-4" />
                                        ) : (
                                            <Plus className="w-4 h-4" />
                                        )}
                                    </span>
                                </button>

                                {/* Answer */}
                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{
                                                height: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
                                                opacity: { duration: 0.2 }
                                            }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 lg:px-8 pb-6">
                                                <p className="text-sm lg:text-base text-[#A0A0A0] leading-relaxed">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </Wrapper>
        </section>
    );
};

export default FAQ;
