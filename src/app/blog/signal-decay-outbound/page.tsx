import Link from "next/link";

import { BlogLayout } from "@/components/blog/blog-layout";
import { BLOG_PUBLISHED_AT } from "@/lib/blog/posts";
import { generateMetadata as baseGenerateMetadata } from "@/utils/metadata";

const title = "Signal Decay: Why Outreach Timing Degrades Fast";
const description =
    "A LinkedIn engagement signal from six weeks ago is not the same as one from three days ago. Here is how signal decay works in outbound and why freshness windows matter.";
const url = "https://www.richiereach.tech/blog/signal-decay-outbound";

export const metadata = baseGenerateMetadata({
    title: "Signal Decay: Why Outreach Timing Degrades Fast - Richie Reach",
    description,
    canonical: url,
    openGraphTitle: title,
    openGraphDescription: description,
    keywords: `${title}, signal-led outbound, B2B outbound, Richie Reach`,
});

const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description:
        "A LinkedIn engagement signal from six weeks ago is not the same as one from three days ago. Here is how signal decay works and why freshness windows matter in outbound.",
    author: { "@type": "Person", name: "Sayudh Mukherjee" },
    publisher: { "@type": "Organization", name: "Richie Reach", url: "https://www.richiereach.tech" },
    datePublished: BLOG_PUBLISHED_AT,
    url,
};

export default function SignalDecayPage() {
    return (
        <BlogLayout
            category="Signal Ops"
            title={title}
            publishedAt={BLOG_PUBLISHED_AT}
            readTime="4 min"
            jsonLd={articleJsonLd}
        >
            <p>A signal is only as useful as it is fresh.</p>
            <p>
                When someone publicly engages with content in your category, that engagement reflects where their attention is at that moment. They asked a question. They reacted to a post about a problem they recognize. They commented on something that connects to a decision they are weighing.
            </p>
            <p>
                Two days later, that attention might still be there. Six weeks later, it is probably somewhere else entirely.
            </p>

            <h2>What signal decay is</h2>
            <p>
                Signal decay is the drop in outreach relevance as time passes from the original engagement event. It is not a technical term with a precise formula. It is a practical reality that anyone who runs outbound has noticed: the faster you follow a signal with relevant outreach, the better the response tends to be.
            </p>
            <p>
                The reason is that attention is not durable. Someone who publicly asked about LLM cost benchmarking this week is probably thinking about that problem this week. If you reach them this week, the topic is still live. If you wait eight weeks, they have moved on to the next problem, and your reference to their comment feels out of place rather than relevant.
            </p>

            <h2>Why most signal-based workflows let decay happen anyway</h2>
            <p>
                The common failure mode is capturing signals fast and then slowing down in the processing steps. The signal is fresh when captured. By the time it clears ICP filtering, enrichment, copy generation, sequence setup, and manual review, two to three weeks have passed.
            </p>
            <p>
                The signal was fresh at capture. It was not fresh at send.
            </p>
            <p>
                This is a pipeline architecture problem, not a signal quality problem. The capture is working. The delay between capture and delivery is where the value leaks out.
            </p>

            <h2>What a workable freshness window looks like</h2>
            <p>
                A 7-day lookback on signals is a common operational default. It is short enough that engagement is still recent. It is long enough to accumulate a usable volume for a weekly delivery cycle.
            </p>
            <p>
                Signals older than 14 days start to lose most of their outreach relevance unless the engagement was exceptionally high-signal, something like a specific product comparison question with obvious evaluation language.
            </p>
            <p>
                Signals from the same day or the day before are the strongest. They are also the hardest to act on at scale without fully automated downstream processes.
            </p>
            <p>
                For most teams, the realistic target is: capture within 24 hours of the signal, deliver within 48 to 72 hours, send within the same week. That keeps the reference current when the email arrives.
            </p>

            <h2>Signal freshness in scoring</h2>
            <p>
                Not all signals in a given week are equally fresh. A comment from 4 hours ago and a comment from 6 days ago are both inside a 7-day window. They are not equivalent.
            </p>
            <p>
                Good scoring models apply a recency weight. Older signals within the window score lower. This means records that arrive from very recent engagement rank higher in the queue and go to Day 1 sequences first. Records from older signals within the window rank lower and may enter a slower sequence or wait for the next cycle.
            </p>
            <p>
                This is how you operationalize the decay concept rather than just acknowledging it exists.
            </p>
            <p>
                Richie Reach applies recency as one of four <Link href="/methodology">composite score</Link> inputs. Older signals within the capture window score lower and may fall below the delivery threshold entirely, depending on what the other inputs look like.
            </p>
            <p>
                If you act on fresh signals within the same week, you get a real reason for outreach.
                <br />
                If you let the pipeline delay turn fresh signals stale, you get a reference that no longer lands.
            </p>
        </BlogLayout>
    );
}
