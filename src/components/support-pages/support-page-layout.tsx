import type { ReactNode } from "react";

import Wrapper from "@/components/global/wrapper";
import { Button } from "@/components/ui/button";

interface SupportPageLayoutProps {
    label: string;
    title: string;
    author?: string;
    intro: ReactNode;
    ctaHeading: string;
    ctaSubtext: string;
    children: ReactNode;
}

interface SupportPageSectionProps {
    title: string;
    children: ReactNode;
}

interface SupportPageTableProps {
    headers: string[];
    rows: ReactNode[][];
}

function SupportPageCta({
    heading,
    subtext,
}: {
    heading: string;
    subtext: string;
}) {
    return (
        <section className="mt-20 border-t border-border pt-10">
            <div className="rounded-3xl border border-white/[0.08] bg-[#111] p-8 text-center shadow-[0_0_40px_-20px_rgba(16,185,129,0.25)]">
                <h2 className="text-3xl text-foreground md:text-4xl">
                    {heading}
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-[15px] leading-7 text-muted-foreground">
                    {subtext}
                </p>
                <div className="mt-8">
                    <Button
                        className="h-12 rounded-full bg-white px-8 text-base font-semibold text-black hover:bg-gray-200"
                        data-cal-link="sayudh/15min"
                        data-cal-namespace="15min"
                        data-cal-config='{"layout":"month_view"}'
                    >
                        Book a Call
                    </Button>
                </div>
            </div>
        </section>
    );
}

export function SupportPageLayout({
    label,
    title,
    author = "Sayudh Mukherjee",
    intro,
    ctaHeading,
    ctaSubtext,
    children,
}: SupportPageLayoutProps) {
    return (
        <section className="bg-[#0A0A0A] py-28 md:py-32">
            <Wrapper>
                <article className="mx-auto max-w-3xl">
                    <p className="section-label mb-4">{label}</p>
                    <h1 className="text-4xl text-foreground md:text-5xl">
                        {title}
                    </h1>
                    <p className="mt-4 text-[12px] text-muted-foreground">
                        By {author}
                    </p>
                    <div className="mt-8 space-y-6 text-[17px] leading-8 text-muted-foreground">
                        {intro}
                    </div>
                    <div className="mt-14 space-y-14">
                        {children}
                    </div>
                    <SupportPageCta
                        heading={ctaHeading}
                        subtext={ctaSubtext}
                    />
                </article>
            </Wrapper>
        </section>
    );
}

export function SupportPageSection({
    title,
    children,
}: SupportPageSectionProps) {
    return (
        <section className="space-y-5">
            <h2 className="text-2xl text-foreground md:text-3xl">{title}</h2>
            <div className="space-y-5 text-[17px] leading-8 text-muted-foreground">
                {children}
            </div>
        </section>
    );
}

export function SupportPageTable({
    headers,
    rows,
}: SupportPageTableProps) {
    return (
        <div className="overflow-x-auto rounded-2xl border border-border bg-[#111]">
            <table className="w-full border-collapse">
                <thead>
                    <tr className="border-b border-border">
                        {headers.map((header) => (
                            <th
                                key={header}
                                className="px-4 py-3 text-left font-mono text-[11px] uppercase tracking-[0.1em] text-muted-foreground"
                            >
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, rowIndex) => (
                        <tr
                            key={rowIndex}
                            className="border-b border-border last:border-b-0"
                        >
                            {row.map((cell, cellIndex) => (
                                <td
                                    key={`${rowIndex}-${cellIndex}`}
                                    className="px-4 py-3 align-top text-[15px] leading-7 text-muted-foreground"
                                >
                                    {cell}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
