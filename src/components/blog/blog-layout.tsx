import Link from "next/link";
import {
    Children,
    cloneElement,
    isValidElement,
    type ReactElement,
    type ReactNode,
} from "react";

import Wrapper from "@/components/global/wrapper";
import { Button } from "@/components/ui/button";
import { BLOG_POSTS } from "@/lib/blog/posts";

interface BlogLayoutProps {
    category: string;
    title: string;
    description?: string;
    author?: string;
    publishedAt: string;
    readTime: string;
    jsonLd: Record<string, unknown>;
    children: ReactNode;
}

type HeadingItem = {
    id: string;
    text: string;
};

export function BlogLayout({
    category,
    title,
    description,
    author = "Sayudh Mukherjee",
    publishedAt,
    readTime,
    jsonLd,
    children,
}: BlogLayoutProps) {
    const { content, headings } = prepareArticleContent(children);
    const showTableOfContents = headings.length >= 4;
    const relatedPosts = BLOG_POSTS.filter(
        (post) => post.category === category && post.title !== title,
    ).slice(0, 3);

    return (
        <section className="bg-[#0A0A0A] py-28 md:py-32">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Wrapper>
                <article className="mx-auto max-w-[680px]">
                    <Link
                        href="/blog"
                        className="mb-8 inline-flex text-sm font-semibold text-primary underline-offset-4 hover:underline"
                    >
                        Back to Blog
                    </Link>
                    <div className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-[12px] text-muted-foreground">
                        <span className="section-label mb-0">{category}</span>
                        <span aria-hidden="true">·</span>
                        <span>{publishedAt}</span>
                        <span aria-hidden="true">·</span>
                        <span>{readTime}</span>
                        <span aria-hidden="true">·</span>
                        <span>By {author}</span>
                    </div>
                    <h1 className="text-4xl text-foreground md:text-5xl">
                        {title}
                    </h1>
                    {description ? (
                        <p className="mt-6 text-[17px] leading-8 text-muted-foreground">
                            {description}
                        </p>
                    ) : null}
                    {showTableOfContents ? (
                        <nav
                            aria-label="Article sections"
                            className="mt-10 rounded-3xl border border-white/[0.08] bg-[#111] p-6"
                        >
                            <p className="section-label mb-4">In this article</p>
                            <ol className="space-y-3 text-[15px] leading-7 text-muted-foreground">
                                {headings.map((heading) => (
                                    <li key={heading.id}>
                                        <a
                                            href={`#${heading.id}`}
                                            className="underline-offset-4 transition-colors hover:text-primary hover:underline"
                                        >
                                            {heading.text}
                                        </a>
                                    </li>
                                ))}
                            </ol>
                        </nav>
                    ) : null}
                    <div className="mt-14 space-y-8 text-[17px] leading-8 text-muted-foreground [&_a]:text-primary [&_a]:underline-offset-4 [&_a:hover]:underline [&_blockquote]:border-l [&_blockquote]:border-primary/50 [&_blockquote]:pl-5 [&_blockquote]:text-foreground [&_h2]:pt-4 [&_h2]:text-2xl [&_h2]:text-foreground [&_h2]:md:text-3xl [&_h3]:pt-2 [&_h3]:text-xl [&_h3]:text-foreground [&_li]:pl-1 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-6 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6">
                        {content}
                    </div>
                    {relatedPosts.length > 0 ? (
                        <section className="mt-20 border-t border-border pt-10">
                            <p className="section-label mb-5">Related reading</p>
                            <div className="grid gap-4">
                                {relatedPosts.map((post) => (
                                    <Link
                                        key={post.slug}
                                        href={`/blog/${post.slug}`}
                                        className="group rounded-3xl border border-white/[0.08] bg-[#111] p-5 transition-colors hover:border-primary/40"
                                    >
                                        <p className="text-xs text-muted-foreground">
                                            {post.category} · {post.readTime}
                                        </p>
                                        <h2 className="mt-3 text-xl text-foreground transition-colors group-hover:text-primary">
                                            {post.title}
                                        </h2>
                                        <p className="mt-3 text-[14px] leading-6 text-muted-foreground">
                                            {post.description}
                                        </p>
                                    </Link>
                                ))}
                            </div>
                        </section>
                    ) : null}
                    <BlogCta />
                </article>
            </Wrapper>
        </section>
    );
}

function prepareArticleContent(children: ReactNode) {
    const headings: HeadingItem[] = [];

    const content = Children.map(children, (child) => {
        if (!isValidElement(child) || child.type !== "h2") {
            return child;
        }

        const heading = child as ReactElement<{
            children?: ReactNode;
            id?: string;
        }>;
        const text = getTextContent(heading.props.children);
        if (!text) {
            return child;
        }

        const id = slugify(text);
        headings.push({ id, text });

        return cloneElement(heading, {
            id: heading.props.id ?? id,
        });
    });

    return { content, headings };
}

function getTextContent(node: ReactNode): string {
    if (typeof node === "string" || typeof node === "number") {
        return String(node);
    }

    if (Array.isArray(node)) {
        return node.map(getTextContent).join("");
    }

    return "";
}

function slugify(value: string) {
    return value
        .toLowerCase()
        .replace(/&/g, "and")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
}

function BlogCta() {
    return (
        <section className="mt-20 border-t border-border pt-10">
            <div className="rounded-3xl border border-white/[0.08] bg-[#111] p-8 text-center shadow-[0_0_40px_-20px_rgba(16,185,129,0.25)]">
                <h2 className="text-3xl text-foreground md:text-4xl">
                    Talk to the founder
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-[15px] leading-7 text-muted-foreground">
                    20-minute call to discuss your keyword themes and ICP.
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
