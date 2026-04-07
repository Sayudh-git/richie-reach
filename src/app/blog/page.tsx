import Link from "next/link";

import Wrapper from "@/components/global/wrapper";
import { BLOG_POSTS } from "@/lib/blog/posts";
import { generateMetadata as baseGenerateMetadata } from "@/utils/metadata";

export const metadata = baseGenerateMetadata({
    title: "Outbound Intelligence Blog - Richie Reach",
    description:
        "Operational writing on signal-led outbound, ICP filtering, enrichment, deliverability, and prospect queue design for B2B sales teams.",
    canonical: "https://www.richiereach.tech/blog",
    openGraphTitle: "Outbound Intelligence Blog - Richie Reach",
    openGraphDescription:
        "Operational writing on signal-led outbound, ICP filtering, enrichment, deliverability, and prospect queue design for B2B sales teams.",
    keywords:
        "outbound intelligence blog, signal-led outbound, ICP filtering, enrichment waterfall, deliverability, B2B outbound",
});

export default function BlogIndexPage() {
    return (
        <section className="bg-[#0A0A0A] py-28 md:py-32">
            <Wrapper>
                <div className="mx-auto max-w-5xl">
                    <p className="section-label mb-4">Blog</p>
                    <h1 className="text-4xl text-foreground md:text-5xl">
                        Outbound Intelligence Blog
                    </h1>
                    <p className="mt-6 max-w-2xl text-[17px] leading-8 text-muted-foreground">
                        Operational writing on signal-led outbound, ICP filtering, enrichment,
                        deliverability, and prospect queue design for B2B sales teams.
                    </p>
                    <div className="mt-14 grid gap-4 md:grid-cols-2">
                        {BLOG_POSTS.map((post) => (
                            <Link
                                key={post.slug}
                                href={`/blog/${post.slug}`}
                                className="group rounded-3xl border border-white/[0.08] bg-[#111] p-6 transition-colors hover:border-primary/40"
                            >
                                <p className="section-label mb-4">{post.category}</p>
                                <p className="mb-3 text-xs text-muted-foreground">
                                    {post.publishedAt} · {post.readTime}
                                </p>
                                <h2 className="text-2xl text-foreground transition-colors group-hover:text-primary">
                                    {post.title}
                                </h2>
                                <p className="mt-4 text-[15px] leading-7 text-muted-foreground">
                                    {post.description}
                                </p>
                                <p className="mt-6 text-sm font-semibold text-primary">
                                    Read post
                                </p>
                            </Link>
                        ))}
                    </div>
                </div>
            </Wrapper>
        </section>
    );
}
