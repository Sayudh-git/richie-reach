"use client";

import Icons from '@/components/global/icons';
import Wrapper from '@/components/global/wrapper';
import { cn } from '@/utils';
import { motion } from 'motion/react';
import React from 'react';
import {
    WebhookIcon,
    ZapierIcon,
    ApiIcon,
    SmartleadIcon,
    HubspotIcon,
    SalesforceIcon,
    SlackIcon,
    CsvIcon,
    ClayIcon
} from '@/components/global/integration-icons';

const Integrations = () => {
    return (
        <section id="integrations" className="w-full py-24 lg:py-40 relative bg-[#0A0A0A] overflow-hidden">
            {/* Background Radial Gradient */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-900/10 rounded-full blur-[120px] pointer-events-none" />

            <Wrapper>
                <div className="flex flex-col items-center relative z-10">
                    {/* Headline */}
                    <motion.h2
                        className="text-4xl lg:text-6xl font-bold text-center leading-tight mb-6 text-[#F5F5F5]"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        The center of your <br className="hidden md:block" />
                        <span className="font-serif italic text-emerald-400">outbound universe</span>.
                    </motion.h2>

                    <motion.p
                        className="text-lg text-[#737373] text-center mb-20 max-w-xl leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Richie Reach captures signals from the noise and routes qualified intent to your entire stack.
                    </motion.p>

                    {/* Radar / Solar System Visualization */}
                    <div className="relative w-full max-w-[600px] aspect-square flex items-center justify-center">

                        {/* Orbit Rings */}
                        {[1, 2, 3].map((ring, i) => (
                            <motion.div
                                key={ring}
                                className={cn(
                                    "absolute rounded-full border border-white/5",
                                    ring === 1 && "w-[280px] h-[280px]",
                                    ring === 2 && "w-[440px] h-[440px]",
                                    ring === 3 && "w-[600px] h-[600px] border-white/5",
                                )}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.2 + i * 0.1 }}
                            />
                        ))}

                        {/* Radar Scan Effect */}
                        <motion.div
                            className="absolute w-[600px] h-[600px] rounded-full overflow-hidden opacity-20 pointer-events-none"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        >
                            <div className="w-1/2 h-1/2 absolute top-0 right-0 bg-gradient-to-t from-emerald-500/50 to-transparent blur-3xl origin-bottom-left rotate-[45deg]" />
                        </motion.div>

                        {/* Center Planet: Richie Reach */}
                        <motion.div
                            className="relative z-20 w-32 h-32 rounded-full bg-[#0A0A0A] border border-emerald-500/30 shadow-[0_0_60px_rgba(16,185,129,0.2)] flex items-center justify-center"
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
                        >
                            <div className="absolute inset-0 rounded-full bg-emerald-500/5 animate-pulse" />
                            <Icons.icon className="w-14 h-14 text-emerald-400" />
                        </motion.div>

                        {/* Satellites - Inner Ring */}
                        {[
                            { icon: ClayIcon, label: "Clay", angle: 0 },
                            { icon: HubspotIcon, label: "HubSpot", angle: 120 },
                            { icon: ZapierIcon, label: "Zapier", angle: 240 }
                        ].map((item, i) => (
                            <Satellite
                                key={i}
                                icon={item.icon}
                                label={item.label}
                                radius={140}
                                angle={item.angle}
                                duration={25}
                                delay={i * 0.2}
                                color={(item as any).color}
                            />
                        ))}

                        {/* Satellites - Middle Ring */}
                        {[
                            { icon: SmartleadIcon, label: "Smartlead", angle: 60 },
                            { icon: SlackIcon, label: "Slack", angle: 180 },
                            { icon: CsvIcon, label: "CSV", angle: 300 }
                        ].map((item, i) => (
                            <Satellite
                                key={i}
                                icon={item.icon}
                                label={item.label}
                                radius={220}
                                angle={item.angle}
                                duration={35}
                                reverse
                                delay={0.5 + i * 0.2}
                                color={(item as any).color}
                            />
                        ))}

                        {/* Satellites - Outer Ring */}
                        {[
                            { icon: WebhookIcon, label: "Webhook", angle: 30 },
                            { icon: ApiIcon, label: "API", angle: 150 },
                            { icon: SalesforceIcon, label: "Salesforce", angle: 270 }
                        ].map((item, i) => (
                            <Satellite
                                key={i}
                                icon={item.icon}
                                label={item.label}
                                radius={300}
                                angle={item.angle}
                                duration={45}
                                delay={0.8 + i * 0.2}
                                color={(item as any).color}
                            />
                        ))}

                    </div>
                </div>
            </Wrapper>
        </section>
    );
};

const Satellite = ({ icon: Icon, label, radius, angle, duration, reverse = false, delay, color }: any) => {
    return (
        <motion.div
            className="absolute top-1/2 left-1/2 w-0 h-0"
            animate={{
                rotate: reverse ? [-angle, -angle - 360] : [angle, angle + 360]
            }}
            transition={{
                duration: duration,
                repeat: Infinity,
                ease: "linear",
            }}
        >
            <div
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{
                    transform: `translateX(${radius}px)`
                }}
            >
                <motion.div
                    className="flex flex-col items-center gap-2"
                    // Counter rotate to keep upright
                    animate={{
                        rotate: reverse ? [angle, angle + 360] : [-angle, -angle - 360]
                    }}
                    transition={{
                        duration: duration,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    <div className="w-12 h-12 rounded-2xl bg-[#151515] border border-white/10 flex items-center justify-center shadow-lg hover:border-emerald-500/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-all duration-300">
                        <Icon className={cn("w-5 h-5", color ? color : "text-gray-400")} />
                    </div>
                    <span className="text-xs font-medium text-gray-500 bg-black/50 px-2 py-0.5 rounded-full backdrop-blur-sm border border-white/5">
                        {label}
                    </span>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Integrations;
