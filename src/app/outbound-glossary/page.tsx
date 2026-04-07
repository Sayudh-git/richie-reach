import Link from "next/link";

import {
    SupportPageLayout,
    SupportPageSection,
} from "@/components/support-pages/support-page-layout";
import { generateMetadata as baseGenerateMetadata } from "@/utils/metadata";

const title = "Outbound Glossary";
const description =
    "Definitions of the key terms used in signal-led outbound: ICP, enrichment waterfall, intent signal, signal decay, composite score, engagement class, and more.";
const url = "https://www.richiereach.tech/outbound-glossary";

const terms = [
    {
        name: "Signal-Led Outbound",
        description: "A B2B outreach approach where public behavioral signals replace or supplement static contact lists as the primary input for who to reach and when.",
    },
    {
        name: "Signal Feed",
        description: "A regularly delivered set of prospects who recently took a public action related to a topic in your category. Combines contact data with behavioral timing context.",
    },
    {
        name: "ICP (Ideal Customer Profile)",
        description: "Ideal Customer Profile. A definition of the specific type of company and person most likely to buy and benefit from your product. Used as the filter criteria in outbound prospecting.",
    },
    {
        name: "ICP Gate",
        description: "A filtering step that runs before enrichment. Records failing hard gate criteria are dropped immediately without enrichment spend.",
    },
    {
        name: "Hard Gate",
        description: "A binary filter criterion. If a record fails, it is dropped immediately. Used for title, geography, and company size checks before enrichment.",
    },
    {
        name: "Soft Gate",
        description: "A scoring input rather than a hard filter. Records failing soft gates receive a lower composite score but are not immediately dropped.",
    },
    {
        name: "Composite Score",
        description: "A single numerical score assigned to each prospect record based on engagement class weight, ICP fit score, signal recency, and engagement depth. Determines routing priority.",
    },
    {
        name: "Engagement Class",
        description: "A behavioral label assigned to a LinkedIn engagement based on its content. Classes range from evaluating (highest) to surface engagement (lowest) to disqualified.",
    },
    {
        name: "Signal Decay",
        description: "The reduction in outreach relevance as time passes from the original engagement event. A signal from three days ago is stronger than one from six weeks ago.",
    },
    {
        name: "Enrichment Waterfall",
        description: "A sequenced set of contact enrichment lookups where each tool only runs if the previous one failed. Reduces cost by avoiding parallel lookups across multiple providers.",
    },
    {
        name: "Spray and Pray",
        description: "An outbound tactic of sending large volumes of generic outreach to broad contact lists with no timing signals or specific reasoning per contact.",
    },
];

export const metadata = baseGenerateMetadata({
    title: "Outbound Glossary: Key Terms for B2B Signal-Led Outbound - Richie Reach",
    description,
    canonical: url,
    openGraphTitle: title,
    openGraphDescription: description,
    keywords:
        "outbound glossary, B2B outbound terms, what is ICP sales, what is enrichment waterfall, what is intent signal, outbound terminology, signal-led outbound terms",
});

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: "Outbound Glossary: Key Terms for B2B Signal-Led Outbound",
    description: "Definitions of key terms used in signal-led B2B outbound.",
    url,
    hasDefinedTerm: [
        { "@type": "DefinedTerm", name: "ICP", description: "Ideal Customer Profile. A definition of the specific type of company and person most likely to buy and benefit from your product. Used as the filter criteria in outbound prospecting." },
        { "@type": "DefinedTerm", name: "Signal Feed", description: "A regularly delivered set of prospects who recently took a public action related to a topic in your category. Combines contact data with behavioral timing context." },
        { "@type": "DefinedTerm", name: "Signal Decay", description: "The reduction in outreach relevance as time passes from the original engagement event. A signal from three days ago is stronger than one from six weeks ago." },
        { "@type": "DefinedTerm", name: "Enrichment Waterfall", description: "A sequenced set of contact enrichment lookups where each tool only runs if the previous one failed. Reduces cost by avoiding parallel lookups across multiple providers." },
        { "@type": "DefinedTerm", name: "ICP Gate", description: "A filtering step that runs before enrichment. Records failing hard gate criteria are dropped immediately without enrichment spend." },
        { "@type": "DefinedTerm", name: "Composite Score", description: "A single numerical score assigned to each prospect record based on engagement class weight, ICP fit score, signal recency, and engagement depth. Determines routing priority." },
        { "@type": "DefinedTerm", name: "Engagement Class", description: "A behavioral label assigned to a LinkedIn engagement based on its content. Classes range from evaluating (highest) to surface engagement (lowest) to disqualified." },
        { "@type": "DefinedTerm", name: "Hard Gate", description: "A binary filter criterion. If a record fails, it is dropped immediately. Used for title, geography, and company size checks before enrichment." },
        { "@type": "DefinedTerm", name: "Soft Gate", description: "A scoring input rather than a hard filter. Records failing soft gates receive a lower composite score but are not immediately dropped." },
        { "@type": "DefinedTerm", name: "Signal-Led Outbound", description: "A B2B outreach approach where public behavioral signals replace or supplement static contact lists as the primary input for who to reach and when." },
        { "@type": "DefinedTerm", name: "Spray and Pray", description: "An outbound tactic of sending large volumes of generic outreach to broad contact lists with no timing signals or specific reasoning per contact." },
        { "@type": "DefinedTerm", name: "Crawl Budget", description: "The number of pages Googlebot will crawl on a site within a given time period. Relevant for sites with many pages and for indexing speed." },
    ],
};

export default function OutboundGlossaryPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSchema) }}
            />
            <SupportPageLayout
                label="Reference"
                title={title}
                intro={<p>Key terms used in signal-led outbound, defined in plain language.</p>}
                ctaHeading="Talk to the founder"
                ctaSubtext="20-minute call to discuss your ICP and signal themes."
            >
                {terms.map((term) => (
                    <SupportPageSection key={term.name} title={term.name}>
                        <p>{term.description}</p>
                    </SupportPageSection>
                ))}
                <SupportPageSection title="How these terms fit together">
                    <p>
                        These terms describe how the Richie Reach pipeline is designed. The full pipeline is documented on the <Link href="/how-it-works">How It Works</Link> page.
                    </p>
                </SupportPageSection>
            </SupportPageLayout>
        </>
    );
}
