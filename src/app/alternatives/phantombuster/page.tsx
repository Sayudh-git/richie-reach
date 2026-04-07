import { generateMetadata as baseGenerateMetadata } from "@/utils/metadata";

import {
    SupportPageLayout,
    SupportPageSection,
    SupportPageTable,
} from "@/components/support-pages/support-page-layout";

export const metadata = baseGenerateMetadata({
    title: "PhantomBuster Alternative for LinkedIn Signal Workflows - Richie Reach",
    description:
        "Compare PhantomBuster and Richie Reach for LinkedIn signal-led outbound. Richie Reach is not a LinkedIn automation tool. It delivers ICP-filtered, enriched signal queues.",
    canonical: "https://www.richiereach.tech/alternatives/phantombuster",
    openGraphTitle: "PhantomBuster Alternative for LinkedIn Signal Workflows",
    openGraphDescription:
        "Compare PhantomBuster and Richie Reach for LinkedIn signal-led outbound. Richie Reach is not a LinkedIn automation tool. It delivers ICP-filtered, enriched signal queues.",
    keywords:
        "PhantomBuster alternative, PhantomBuster competitor, LinkedIn signal workflow, LinkedIn engagement leads, signal-led outbound, Richie Reach",
});

export default function PhantomBusterAlternativePage() {
    return (
        <SupportPageLayout
            label="Alternatives"
            title="PhantomBuster Alternative for LinkedIn Signal Workflows"
            intro={
                <>
                    <p>
                        PhantomBuster is an automation tool. Richie Reach is a managed signal intelligence service.
                    </p>
                    <p>
                        The difference matters. Richie Reach does not send LinkedIn messages, manage LinkedIn accounts, or ask clients to operate automations. It captures public engagement signals, filters them to ICP, enriches the records, and delivers a qualified queue into the tools the team already uses.
                    </p>
                </>
            }
            ctaHeading="Talk through your signal workflow"
            ctaSubtext="20-minute call to see whether a managed queue is a better fit than operating LinkedIn automations yourself."
        >
            <SupportPageSection title="Where Richie Reach differs">
                <SupportPageTable
                    headers={["Dimension", "Richie Reach"]}
                    rows={[
                        ["Tool category", "Managed signal intelligence service"],
                        ["LinkedIn account access", "No client LinkedIn account access required"],
                        ["Primary output", "ICP-filtered, enriched weekly prospect queue"],
                        ["Workflow order", "Signal capture, ICP gate, enrichment, scoring, delivery"],
                        ["Delivery", "CSV, Clay table, HubSpot, or webhook"],
                    ]}
                />
            </SupportPageSection>

            <SupportPageSection title="When Richie Reach is a fit">
                <p>
                    Richie Reach is a fit when your team wants signal-led outbound inputs without running LinkedIn automations internally. The service is built around the record that reaches the queue, not the automation that captured it.
                </p>
            </SupportPageSection>

            <SupportPageSection title="When PhantomBuster may be better">
                <p>
                    If you want a general automation tool and have someone internally responsible for building, monitoring, and maintaining workflows, PhantomBuster may be a better fit. Richie Reach is for teams that want a managed signal feed rather than another tool to operate.
                </p>
            </SupportPageSection>
        </SupportPageLayout>
    );
}
