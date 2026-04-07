import Link from "next/link";

import { BlogLayout } from "@/components/blog/blog-layout";
import { BLOG_PUBLISHED_AT } from "@/lib/blog/posts";
import { generateMetadata as baseGenerateMetadata } from "@/utils/metadata";

const title = "How to Build an Enrichment Waterfall in Clay";
const description =
    "An enrichment waterfall runs multiple providers in sequence so you only pay for what the first tool misses. Here is how to set one up in Clay using Prospeo, Apollo, and Hunter.";
const url = "https://www.richiereach.tech/blog/enrichment-waterfall-clay";

export const metadata = baseGenerateMetadata({
    title: "How to Build an Enrichment Waterfall in Clay - Richie Reach",
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

export default function EnrichmentWaterfallClayPage() {
    return (
        <BlogLayout
            category="Enrichment"
            title={title}
            publishedAt={BLOG_PUBLISHED_AT}
            readTime="5 min"
            jsonLd={articleJsonLd}
        >
            <p>
                An enrichment waterfall is a sequenced set of lookups where each tool only runs if the previous one failed to find a result.
            </p>
            <p>
                Instead of picking one enrichment provider and accepting its coverage gaps, you chain multiple providers so they cover each other&apos;s misses. You pay for each successful lookup, not for each attempt where a tool found nothing.
            </p>

            <h2>Why a waterfall exists</h2>
            <p>
                No single enrichment provider has complete coverage across all B2B contacts. Prospeo has strong coverage for certain profile types. Apollo has different coverage. Hunter fills gaps using domain pattern logic when neither of the first two finds a match.
            </p>
            <p>
                If you run all three in parallel, you pay for duplicate lookups on contacts any of them could find. A waterfall runs them in order and only moves to the next provider if the previous one returned null.
            </p>

            <h2>The three-tier setup</h2>
            <p>
                Tier 1 is your primary provider. Prospeo is a reasonable starting point for most B2B use cases. Its per-lookup cost is low and its match rate on professional email addresses is solid. Run it first on every record.
            </p>
            <p>
                Tier 2 is your fallback. Apollo covers a portion of the records Prospeo misses. It costs more per credit than Prospeo, so you want it running only on the records that need it. Set the condition in Clay: if Prospeo email is null or blank, trigger Apollo enrichment.
            </p>
            <p>
                Tier 3 is your last resort. Hunter uses domain pattern logic. It is useful when the person&apos;s email format can be inferred from the company domain and their name. It costs less per effective lookup than Apollo but covers a smaller portion of misses. Set the condition: if Apollo also returned null, trigger Hunter.
            </p>
            <p>
                If all three miss, the record either delivers with LinkedIn URL only and email null, or gets suppressed from the delivery, depending on your workflow.
            </p>

            <h2>Setting this up in Clay</h2>
            <p>
                In Clay, you handle the waterfall logic using conditional columns. The general structure:
            </p>
            <p>
                Add a Prospeo enrichment column. Map first name, last name, and LinkedIn URL as inputs. Output is the verified email.
            </p>
            <p>
                Add an Apollo enrichment column. Set it to run only if the Prospeo output column is empty. Map the same inputs.
            </p>
            <p>
                Add a Hunter enrichment column. Set it to run only if the Apollo output column is also empty.
            </p>
            <p>
                Add a final email column that resolves to whichever tier returned a result, in priority order: Prospeo first, then Apollo, then Hunter, then null.
            </p>
            <p>
                The exact column formula depends on your Clay table structure, but the logic is the same regardless of how you name the columns.
            </p>
            <p>
                For more on the gate logic, see <Link href="/blog/icp-filtering-outbound">how the ICP gate works</Link>.
            </p>

            <h2>The cost difference with and without an upstream ICP gate</h2>
            <p>
                Without a gate: you run 500 records through the waterfall. At Prospeo primary rates, that is roughly $5.00 before you even factor in Apollo fallback cost on the misses.
            </p>
            <p>
                With an ICP gate upstream that removes records failing on title, geo, or company size: you might run 87 records through the waterfall. The same Prospeo primary rate brings the cost to under $1.00.
            </p>
            <p>
                The waterfall design is useful. The gate upstream is what makes it cheap to run at scale.
            </p>
            <p>
                Richie Reach uses this exact three-tier waterfall after the ICP gate stage. The gate runs first, the waterfall runs on what passes. The enrichment cost per run on a filtered set of around 87 records comes out to roughly $0.87 using Prospeo as the primary tier.
            </p>
            <p>
                If you build the waterfall without a gate, you pay for coverage across a noisy list.
                <br />
                If you build the gate first and run the waterfall on what passes, you pay for coverage where it matters.
            </p>
        </BlogLayout>
    );
}
