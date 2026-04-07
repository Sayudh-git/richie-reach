import Link from "next/link";

import { BlogLayout } from "@/components/blog/blog-layout";
import { BLOG_PUBLISHED_AT } from "@/lib/blog/posts";
import { generateMetadata as baseGenerateMetadata } from "@/utils/metadata";

const title = "Why You Should Filter Before Enrichment";
const description =
    "Enriching everything and filtering later wastes credits, bloats lists, and damages deliverability. Here is why ICP filtering before enrichment is the right order of operations.";
const url = "https://www.richiereach.tech/blog/filter-before-enrichment";

export const metadata = baseGenerateMetadata({
    title: "Why You Should Filter Before Enrichment - Richie Reach",
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

export default function FilterBeforeEnrichmentPage() {
    return (
        <BlogLayout
            category="Signal Ops"
            title={title}
            publishedAt={BLOG_PUBLISHED_AT}
            readTime="4 min"
            jsonLd={articleJsonLd}
        >
            <p>
                Most outbound teams enrich first and filter later. It is the default because it feels thorough. You pull a big list, run it through an enrichment tool, get contact data for everyone, and then start removing people who do not fit.
            </p>
            <p>
                The problem is that you pay for enrichment on records you were going to remove anyway.
            </p>

            <h2>What enrichment actually costs</h2>
            <p>
                Enrichment is not free. Prospeo charges roughly $0.01 per verified email. Apollo charges more for each credit. Hunter charges per lookup. When you enrich 500 records and then filter out 400 of them because they are outside your geo or below your seniority threshold, you paid for 400 lookups you did not need.
            </p>
            <p>
                On a 500-record run with no upstream filter, the cost is roughly $5.00 at Prospeo primary rates. On the same run with an ICP gate that removes 413 records before enrichment, the cost drops to around $0.87. The gate does not do anything clever. It just asks the right questions before anyone spends a credit.
            </p>
            <p>
                The same order of operations matters when you build an <Link href="/blog/enrichment-waterfall-clay">enrichment waterfall</Link>.
            </p>

            <h2>The deliverability side of it</h2>
            <p>
                Large, unfiltered lists hurt more than your budget. When you enrich everything and push it into a sequencer, you send to people who were never a fit. They do not reply. They mark your emails as spam. They never read the subject line. Over time, that signal accumulates in your domain&apos;s reputation.
            </p>
            <p>
                Email providers use engagement signals. A list that consistently produces low open rates and zero replies starts to look like a spam list. The size of the list is not the problem. The composition is.
            </p>
            <p>
                Filtering before enrichment means a smaller sending list. A smaller list with higher relevance produces better engagement signals. Better engagement signals protect your domain over time.
            </p>

            <h2>Hard gates vs soft gates</h2>
            <p>
                Not all filters are the same. A hard gate is a binary check. If the record fails, it is dropped immediately, no enrichment, no further processing. Title outside the target seniority range, company headquartered in an excluded geo, company under the minimum employee count. These are hard gates.
            </p>
            <p>
                A soft gate is a signal. The record passes but enters scoring with a lower weight. Industry is adjacent but not primary. Funding stage is unknown. Tech stack match is uncertain. These records stay in the pipeline but rank lower and may not clear the delivery threshold.
            </p>
            <p>
                Running hard gates before enrichment removes the obvious waste. Running soft gates as scoring criteria removes the marginal waste later. Both steps cost nothing. Enrichment costs money. So the filter runs first.
            </p>

            <h2>Why most teams do it backwards</h2>
            <p>
                The usual reason is convenience. Most enrichment tools accept a large CSV and return a larger one. It feels like the natural starting point. Filter logic requires knowing your ICP well enough to operationalize it, which is a harder starting point than just running the list.
            </p>
            <p>
                But getting filter logic right once means running it on every future list automatically. The one-time cost of defining hard gates pays back on every run after that.
            </p>
            <p>
                Richie Reach runs ICP filtering as Stage 2 of the pipeline, before any enrichment spend. The gate is the reason the enrichment cost per run stays under $1.00 on typical client setups.
            </p>
            <p>
                If you filter first, you pay for fewer records and send to better ones.
                <br />
                If you enrich first, you pay for records you will delete anyway and send to a noisier list.
            </p>
        </BlogLayout>
    );
}
