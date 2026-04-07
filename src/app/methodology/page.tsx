import Link from "next/link";

import { generateMetadata as baseGenerateMetadata } from "@/utils/metadata";

import {
    SupportPageLayout,
    SupportPageSection,
    SupportPageTable,
} from "@/components/support-pages/support-page-layout";

export const metadata = baseGenerateMetadata({
    title: "How Richie Reach Works: Signal-to-Pipeline Methodology",
    description:
        "Signal capture, ICP filtering before enrichment, AI intent classification, composite scoring, enrichment waterfall, and delivery. The full methodology behind Richie Reach.",
    canonical: "https://www.richiereach.tech/methodology",
    openGraphTitle: "How Richie Reach Works: Methodology",
    keywords:
        "Richie Reach methodology, signal capture ICP filter scoring enrichment, how signal-led outbound works, outbound pipeline methodology",
});

export default function MethodologyPage() {
    return (
        <SupportPageLayout
            label="Methodology"
            title="How Richie Reach Works: The Full Methodology"
            intro={
                <p>
                    This page covers how signals are captured, filtered, classified, scored, enriched, and delivered. It is the technical detail behind the nine-stage pipeline.
                </p>
            }
            ctaHeading="Talk to the founder"
            ctaSubtext="20-minute call to discuss your keyword themes and ICP."
        >
            <SupportPageSection title="Stage 1 - Signal Capture">
                <p>
                    A cron-based monitor polls public LinkedIn engagement around client-defined keyword themes every 4 hours. Each captured event includes the LinkedIn profile URL, engagement type (comment, reaction, share), post context, and timestamp.
                </p>
                <p>
                    Deduplication runs on a LinkedIn URN hash. If the same person appears across multiple posts in the same week, the records are merged to one with the engagement count incremented.
                </p>
                <p>
                    The monitor runs on our infrastructure. No client account access is required.
                </p>
            </SupportPageSection>

            <SupportPageSection title="Stage 2 - ICP Gate">
                <p>
                    Records enter the ICP gate before any enrichment spend.
                </p>
                <p>
                    Hard gates (role, geography, company size) drop non-matching records immediately. Records that fail hard gates are not enriched. Soft gates (industry, funding stage, tech stack) reduce the composite score but do not automatically drop the record.
                </p>
                <p>
                    The gate runs on publicly available company and person information. Enrichment only starts after a record clears the gate. This is the primary cost control mechanism.
                </p>
            </SupportPageSection>

            <SupportPageSection title="Stage 3 - AI Classification">
                <p>
                    An AI model reads the engagement text and assigns a behavioral intent class.
                </p>
                <SupportPageTable
                    headers={["Class", "What it means"]}
                    rows={[
                        ["evaluating", "Comparing options or asking for recommendations"],
                        ["active_buyer", "Mentions timeline, budget, or switching decision"],
                        ["category_engaged", "Thoughtful engagement, no evaluation language"],
                        ["surface_engagement", "Generic positive reaction, minimal signal value"],
                        ["disqualified", "Job posts, self-promotion, off-topic content"],
                    ]}
                />
                <p>
                    The class is used in composite scoring and determines which outreach copy framework is applied.
                </p>
            </SupportPageSection>

            <SupportPageSection title="Stage 4 - Composite Scoring">
                <p>
                    Records are scored from 0.00 to 1.00. Inputs: engagement class weight, ICP fit score, signal recency (older signals score lower), engagement depth (comment vs reaction, length of comment).
                </p>
                <p>
                    Records scoring 0.74 and above: HIGH. Delivered first. Records scoring 0.52 to 0.73: MED. Delivered. Records scoring below 0.52: not enriched, not delivered.
                </p>
            </SupportPageSection>

            <SupportPageSection title="Stage 5 - Enrichment Waterfall">
                <p>
                    Only records that clear the ICP gate and score at or above 0.52 enter the enrichment waterfall.
                </p>
                <p>
                    Three tools run in sequence: Prospeo (primary, approximately 83% match rate), Apollo (fallback), Hunter (domain pattern, last resort). If all three miss, the record is delivered with LinkedIn URL only and email set to null.
                </p>
                <p>
                    Approximate cost per enrichment run on a filtered set of 87 records: $0.87. On an unfiltered set of 500 records: $5.00. The gate drives the cost difference.
                </p>
            </SupportPageSection>

            <SupportPageSection title="Stage 6 - Delivery">
                <p>
                    Enriched records are delivered weekly via CSV, Clay table, or webhook to Smartlead, Lemlist, Instantly, HubSpot, or a custom API endpoint. Every record includes the full signal metadata so context travels with the contact into your outreach tools.
                </p>
            </SupportPageSection>

            <SupportPageSection title="Stage 7 - CRM Sync and Feedback Loop">
                <p>
                    If HubSpot is in the stack, all active records sync with signal metadata as contact properties. When a deal closes, the signal theme, engagement class, and score at the time of capture are available in the CRM.
                </p>
                <p>
                    This attribution data is used to refine which keyword themes and score thresholds produce real pipeline in your specific market, not just replies.
                </p>
                <p>
                    <Link href="/how-it-works" className="text-primary hover:underline">
                        See the full interactive pipeline on the How It Works page.
                    </Link>
                </p>
            </SupportPageSection>
        </SupportPageLayout>
    );
}
