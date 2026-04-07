import Link from "next/link";

import { BlogLayout } from "@/components/blog/blog-layout";
import { BLOG_PUBLISHED_AT } from "@/lib/blog/posts";
import { generateMetadata as baseGenerateMetadata } from "@/utils/metadata";

const title = "ICP Filtering in Outbound: What It Is and Why Order Matters";
const description =
    "ICP filtering is the step that removes prospects who do not match your ideal customer profile before any other processing happens. Here is what it covers and why running it first changes the economics.";
const url = "https://www.richiereach.tech/blog/icp-filtering-outbound";

export const metadata = baseGenerateMetadata({
    title: "ICP Filtering in Outbound: What It Is and Why Order Matters - Richie Reach",
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

export default function IcpFilteringOutboundPage() {
    return (
        <BlogLayout
            category="Signal Ops"
            title={title}
            publishedAt={BLOG_PUBLISHED_AT}
            readTime="4 min"
            jsonLd={articleJsonLd}
        >
            <p>
                An ICP gate removes contacts who do not match your ideal customer profile before they enter <Link href="/blog/enrichment-waterfall-clay">enrichment waterfall</Link>, copy generation, or your CRM.
            </p>
            <p>
                Most teams define an ICP but filter against it too late. They enrich a large raw list, push it into their CRM, write sequences against it, and filter out the mismatches when results come back poor. By then, they have already spent enrichment credits on the non-fits and sent sequences to contacts who were never going to convert.
            </p>

            <h2>What the gate covers operationally</h2>
            <p>
                An ICP definition that is operational has specific filter criteria that can be checked against publicly available data without enrichment. The most common:
            </p>
            <p>
                Title and role. What job functions are you selling to? What titles specifically? What seniority level? VP and above, director and above, individual contributors in a specific function, founders only.
            </p>
            <p>
                Geography. Which countries, regions, or cities? This is often a hard exclusion. A US-focused product selling to EU decision-makers is usually a poor fit on both sides.
            </p>
            <p>
                Company size. Employee count range. Under 50 is often too small for enterprise tools. Over 10,000 is often too slow for early-stage products. The right range depends on your product&apos;s fit and your sales motion.
            </p>
            <p>
                Industry. Which verticals are your best customers in? Which have you repeatedly failed in? Industry is sometimes a soft filter (adjacent verticals still worth exploring) and sometimes a hard one (totally unrelated sectors never convert).
            </p>

            <h2>Hard gates and soft gates</h2>
            <p>
                A hard gate is a binary check. The record either passes or gets dropped. Title outside target seniority: dropped. Company in excluded geography: dropped. No computation after that.
            </p>
            <p>
                A soft gate is a scoring input. The record passes but enters downstream processing with a lower weight. Industry is adjacent but not primary: score reduced. Company size is at the low end of the acceptable range: score reduced.
            </p>
            <p>
                Operationalizing your ICP means deciding, for each filter dimension, whether it is a hard gate or a soft gate. Hard gates should cover the obvious non-fits. Soft gates handle the marginal cases that might still convert.
            </p>

            <h2>Why running filters first changes the economics</h2>
            <p>
                The reason to run ICP filters before enrichment is cost control. You pay for enrichment only on records that passed the filter. You do not pay for records you were going to remove anyway.
            </p>
            <p>
                If your raw signal pool is 500 records and 413 fail on hard gate criteria, you enter enrichment with 87 records. At $0.01 per Prospeo lookup, that is $0.87. Without the gate, the same 500 records cost $5.00 to enrich, and you still end up with 87 viable contacts after filtering.
            </p>
            <p>
                The gate does not change the output. It changes what you pay to get there.
            </p>

            <h2>What a well-defined ICP enables downstream</h2>
            <p>
                Once the gate runs at Stage 1 of the pipeline, everything downstream gets cleaner. Enrichment is cheaper. Copy personalization is more specific because the audience is narrower. Sequence routing is simpler because you are not branching for 15 different contact types. Deliverability is better because you are sending to a more relevant set.
            </p>
            <p>
                ICP clarity is not a marketing concept. It is an operational input that determines how much waste you generate at every downstream step.
            </p>
            <p>
                Richie Reach runs the ICP gate as Stage 2, before enrichment, before scoring, and before any delivery. The gate criteria are defined per client at onboarding based on their ICP definition and exclusion rules.
            </p>
            <p>
                If your ICP gate is tight and runs first, every downstream step gets cheaper and more accurate.
                <br />
                If your ICP gate runs last, you pay full price to process records you should have dropped at the start.
            </p>
        </BlogLayout>
    );
}
