"use client";

import React from 'react';
import Wrapper from '@/components/global/wrapper';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="w-full relative mt-16 lg:mt-24 bg-[#0A0A0A] border-t border-[rgba(255,255,255,0.06)]">
            <Wrapper className="py-12 lg:py-16 px-8 lg:px-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-start">
                    {/* Left - Brand */}
                    <div>
                        <h3 className="text-base font-semibold text-white mb-2">
                            Richie Reach
                        </h3>
                        <p className="text-[13px] text-[#808080]">
                            Signal-first outbound infrastructure.
                        </p>
                    </div>

                    {/* Center - Quick Links */}
                    <div>
                        <h4 className="text-xs font-semibold uppercase text-[#A0A0A0] mb-4 tracking-wide">
                            QUICK LINKS
                        </h4>
                        <ul className="space-y-2">
                            {[
                                { label: "How It Works", href: "#workflow" },
                                { label: "Who It's For", href: "#who-its-for" },
                                { label: "FAQ", href: "#faq" }
                            ].map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-[#A0A0A0] hover:text-white transition-colors duration-200"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right - Contact */}
                    <div className="md:text-right">
                        <a
                            href="mailto:hello@richiereach.com"
                            className="text-sm text-[#A0A0A0] hover:text-[#00FF94] transition-colors duration-200"
                        >
                            hello@richiereach.com
                        </a>
                    </div>
                </div>

                {/* Bottom - Copyright */}
                <div className="mt-12 pt-6 border-t border-[rgba(255,255,255,0.04)]">
                    <p className="text-xs text-[#808080] text-center">
                        © 2026 Richie Reach. All rights reserved.
                    </p>
                </div>
            </Wrapper>
        </footer>
    );
};

export default Footer;
