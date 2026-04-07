import { generateMetadata as baseGenerateMetadata } from "@/utils/metadata";

import {
    SupportPageLayout,
    SupportPageSection,
    SupportPageTable,
} from "@/components/support-pages/support-page-layout";

export const metadata = baseGenerateMetadata({
    title: "Trigify Alternative for LinkedIn Engagement Leads - Richie Reach",
    description:
        "Compare Trigify and Richie Reach for LinkedIn engagement-led outbound. Richie Reach is a managed signal-to-queue workflow with ICP filtering, enrichment, scoring, and delivery.",
    canonical: "https://www.richiereach.tech/alternatives/trigify",
    openGraphTitle: "Trigify Alternative for LinkedIn Engagement Leads",
    openGraphDescription:
        "Compare Trigify and Richie Reach for LinkedIn engagement-led outbound. Richie Reach is a managed signal-to-queue workflow with ICP filtering, enrichment, scoring, and delivery.",
    keywords:
        "Trigify alternative, Trigify competitor, LinkedIn engagement leads, signal-led outbound, Richie Reach, LinkedIn signal feed",
});

export default function TrigifyAlternativePage() {
    return (
        <SupportPageLayout
            label="Alternatives"
            title="Trigify Alternative for LinkedIn Engagement Leads"
            intro={
                <>
                    <p>
                        Trigify and Richie Reach both sit in the LinkedIn engagement signal category, but they solve different operating problems.
                    </p>
                    <p>
                        Trigify is useful when a team wants tooling around social engagement signals. Richie Reach is built for teams that want a managed signal-to-queue workflow: ICP gate, enrichment waterfall, scoring, and delivery into their outbound stack.
                    </p>
                </>
            }
            ctaHeading="Compare your signal workflow"
            ctaSubtext="20-minute call to see whether a managed signal feed fits your outbound motion."
        >
            <SupportPageSection title="Where Richie Reach differs">
                <SupportPageTable
                    headers={["Dimension", "Richie Reach"]}
                    rows={[
                        ["Operating model", "Managed service, not a self-serve dashboard"],
                        ["Primary output", "Weekly ICP-filtered prospect queue with signal context"],
                        ["Filter order", "ICP gate before enrichment spend"],
                        ["Enrichment", "Prospeo, Apollo, and Hunter waterfall after filtering"],
                        ["Delivery", "CSV, Clay table, HubSpot, or webhook"],
                    ]}
                />
            </SupportPageSection>

            <SupportPageSection title="When Richie Reach is a fit">
                <p>
                    Richie Reach is a fit if the problem is not just finding engagement, but turning engagement into a usable outbound queue. The workflow is designed for B2B teams that need source context, ICP filtering, enrichment, and routing attached before a record reaches the SDR or founder.
                </p>
            </SupportPageSection>

            <SupportPageSection title="When a tool may be better">
                <p>
                    If you want to operate the signal workflow yourself, manage dashboards internally, and tune every step inside your own stack, a self-serve tool may be a better fit. Richie Reach is intentionally managed because signal quality, ICP filtering, and enrichment fallback logic need calibration.
                </p>
            </SupportPageSection>
        </SupportPageLayout>
    );
}
