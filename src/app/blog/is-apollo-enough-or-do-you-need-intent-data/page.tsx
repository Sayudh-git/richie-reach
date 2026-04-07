import Link from "next/link";

import { BlogLayout } from "@/components/blog/blog-layout";
import { generateMetadata as baseGenerateMetadata } from "@/utils/metadata";

const title = "Is Apollo Enough, or Do You Need Intent Data?";
const description =
    "Apollo is a database. Intent data adds a time dimension. Here is when Apollo alone is sufficient and when adding a signal layer actually changes your outbound results.";
const url = "https://www.richiereach.tech/blog/is-apollo-enough-or-do-you-need-intent-data";
const publishedAt = "2026-04-07";

export const metadata = baseGenerateMetadata({
    title: "Is Apollo Enough, or Do You Need Intent Data? - Richie Reach",
    description,
    canonical: url,
    openGraphTitle: title,
    openGraphDescription: description,
    keywords:
        "Apollo vs intent data, is Apollo enough for outbound, Apollo alternatives, when to use intent data B2B, Apollo vs signal-led outbound",
});

const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    author: { "@type": "Person", name: "Sayudh Mukherjee" },
    publisher: { "@type": "Organization", name: "Richie Reach", url: "https://www.richiereach.tech" },
    datePublished: publishedAt,
    url,
};

export default function IsApolloEnoughPage() {
    return (
        <BlogLayout category="Signal Ops" title={title} publishedAt={publishedAt} readTime="4 min" jsonLd={articleJsonLd}>
            <p>Apollo is good at one thing: finding contact information for people who match a set of demographic and firmographic filters. If you know you want VP of Engineering at Series B SaaS companies in the US with 100 to 500 employees, Apollo can find you that list.</p>
            <p>What Apollo cannot tell you is which of those people are currently thinking about the problem you solve.</p>

            <h2>What Apollo does and does not do</h2>
            <p>Apollo is a contact database with search and enrichment capabilities. The data is verified periodically. The coverage is broad. The filter set is comprehensive. For building lists from defined ICP criteria, it is one of the better tools in the category.</p>
            <p>The limitation is that database records do not have timestamps on attention. A contact who was a perfect ICP match six months ago is still in the database. Their job title might have changed. The problem they were thinking about has certainly shifted. You do not know which of your Apollo list is actively in a buying window for your category right now. That timing issue is part of <Link href="/blog/signal-decay-outbound">signal decay</Link>.</p>

            <h2>When Apollo alone is sufficient</h2>
            <p>Apollo is sufficient when:</p>
            <p>Your ICP is very tight and your conversion funnel compensates for timing blindness. If you sell to a small category of buyers and your product is immediately obvious once they see it, timing matters less because the category awareness is low. You reach them, they learn what the category is, they evaluate or they do not.</p>
            <p>Your sequences are long enough to catch people in multiple potential timing windows. A 6-step sequence over 30 days reaches the same person at slightly different moments. Some timing hits better than others.</p>
            <p>Your send volume is high enough that a small percentage of correctly timed contacts produces enough pipeline. This works if deliverability is healthy and the ICP definition is tight.</p>

            <h2>When you need something beyond Apollo</h2>
            <p>A signal layer adds value when:</p>
            <p>Your ICP is broad enough that a large percentage of your Apollo list is not in an active consideration window at any given time. More filtering by timing reduces waste.</p>
            <p>Your outreach copy quality depends on a specific reason to reach out. If your opener is &quot;I saw you are the VP of Engineering at [company],&quot; Apollo is sufficient for that. If your opener references a specific thing the person said publicly about a problem in your category, you need a signal source, not just a database.</p>
            <p>Your deliverability health is declining and you need to reduce volume without reducing pipeline. Fewer, better-timed contacts on a signal layer produce better engagement signals per send, which is better for domain reputation.</p>

            <h2>They are not competitors</h2>
            <p>Apollo and a signal feed are not either/or. Apollo is useful for enrichment fallback in a waterfall. A signal feed provides the upstream input that determines who enters enrichment in the first place.</p>
            <p>The practical setup: signal monitoring identifies who engaged with relevant content this week, ICP filters remove non-fits, Apollo (or Prospeo, Hunter) enriches what passes. Apollo is a tool in the enrichment layer, not a replacement for the signal layer.</p>
            <p>Richie Reach uses Apollo as the second tier in its enrichment waterfall, after Prospeo primary. It is not the source of truth for who enters the pipeline. It is the fallback for finding contact paths.</p>
            <p>See how the <Link href="/blog/enrichment-waterfall-clay">enrichment waterfall</Link> works.</p>
        </BlogLayout>
    );
}
