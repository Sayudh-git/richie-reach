import Link from "next/link";

import { BlogLayout } from "@/components/blog/blog-layout";
import { BLOG_PUBLISHED_AT } from "@/lib/blog/posts";
import { generateMetadata as baseGenerateMetadata } from "@/utils/metadata";

const title = "How to Build a Weekly Outbound Prospect Queue";
const description =
    "A weekly-refreshed queue of ICP-filtered, signal-fresh prospects outperforms a giant static list for most outbound teams. Here is what the right inputs look like.";
const url = "https://www.richiereach.tech/blog/weekly-outbound-queue";

export const metadata = baseGenerateMetadata({
    title: "How to Build a Weekly Outbound Prospect Queue - Richie Reach",
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
    description,
    author: { "@type": "Person", name: "Sayudh Mukherjee" },
    publisher: { "@type": "Organization", name: "Richie Reach", url: "https://www.richiereach.tech" },
    datePublished: BLOG_PUBLISHED_AT,
    url,
};

export default function WeeklyOutboundQueuePage() {
    return (
        <BlogLayout
            category="Outbound Ops"
            title={title}
            publishedAt={BLOG_PUBLISHED_AT}
            readTime="5 min"
            jsonLd={articleJsonLd}
        >
            <p>
                Most outbound teams think about their prospect list as a large thing they build once and then work through. A weekly queue is a different mental model. You build a smaller thing, work through it completely, and rebuild it the following week from fresh inputs.
            </p>
            <p>
                The weekly queue model works better for a few reasons that are worth understanding before deciding which approach fits your motion.
            </p>

            <h2>Why smaller and fresher usually beats larger and static</h2>
            <p>
                A giant static list has a timing problem. The contacts at the bottom of the list were valid when the list was built. By the time your team works through the first few hundred contacts and reaches them, weeks or months have passed. Their role may have changed. Their company may have pivoted. The reason you pulled them from a database might no longer be relevant.
            </p>
            <p>
                A weekly queue, by contrast, starts fresh each cycle. Every record entered this week was relevant this week. You do not carry stale context forward.
            </p>
            <p>
                The tradeoff is volume. A static list gives you a large surface to work from. A weekly queue gives you a smaller surface with higher relevance. Which one produces more meetings depends on your ICP, your market, and how well your sequences perform on different contact types.
            </p>
            <p>
                For most teams with a defined ICP and a clear signal source, the weekly queue wins on meeting rate per contact touched.
            </p>

            <h2>What the right inputs look like</h2>
            <p>
                A weekly queue needs three things attached to every record before it enters.
            </p>
            <p>
                A reason why this specific person. Not &quot;they match my ICP filters,&quot; which is true of millions of people. A specific signal, a recent engagement, a trigger event, something that distinguishes this person from all the other people who also match the ICP filters.
            </p>
            <p>
                A reason why this week. A signal captured this week is why this person enters this week&apos;s queue. Without that time dimension, you are back to a static list with a different name.
            </p>
            <p>
                A verified contact path. Email, LinkedIn profile, or both. No enrichment null. Records without a contact path do not enter the sending queue, they sit in a holding state until enrichment resolves or they are dropped.
            </p>

            <h2>How to build the queue mechanically</h2>
            <p>
                The mechanics depend on your signal source and tooling. A common setup:
            </p>
            <p>
                Signals come from public LinkedIn engagement monitoring, job change tracking, or content interactions. These are captured daily or multiple times per day.
            </p>
            <p>
                Records enter an ICP gate that runs hard checks on role, geography, and company size before any enrichment happens.
            </p>
            <p>
                Records that pass the gate enter enrichment to find verified email addresses.
            </p>
            <p>
                Enriched, verified records score based on signal recency and engagement quality. Higher-scoring records enter the queue first.
            </p>
            <p>
                The queue is delivered weekly: a table, a CSV, or a direct push into your sending tool.
            </p>
            <p>
                Your team works the queue in order of score, runs out of queue by end of week, and the next delivery refreshes it.
            </p>

            <h2>How much volume is workable</h2>
            <p>
                This depends entirely on your sending capacity and ICP. A 5-person SDR team with 30-40 emails per mailbox per day can work through roughly 400 to 800 personalized contacts per week across the team, assuming multi-step sequences.
            </p>
            <p>
                A solo founder can typically work 50 to 150 contacts per week if doing thoughtful outreach with real personalization.
            </p>
            <p>
                Sizing the queue to execution capacity matters. Overbuilding the queue means stale records accumulate at the bottom and the timing advantage disappears.
            </p>
            <p>
                Richie Reach delivers a weekly queue sized to client ICP complexity and sending capacity. Typical delivery is 500 to 2,000 records per week depending on how broad or narrow the ICP is. The queue is not designed to be large. It is designed to be completely workable each week. See <Link href="/how-it-works">How It Works</Link> for the full pipeline.
            </p>
            <p>
                If you build a weekly queue with the right inputs, you run out of records before you run out of week.
                <br />
                If you build a large static list, you run out of freshness before you run out of records.
            </p>
        </BlogLayout>
    );
}
