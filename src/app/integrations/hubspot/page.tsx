import { generateMetadata as baseGenerateMetadata } from "@/utils/metadata";

import {
    SupportPageLayout,
    SupportPageSection,
    SupportPageTable,
} from "@/components/support-pages/support-page-layout";

export const metadata = baseGenerateMetadata({
    title: "Richie Reach and HubSpot - Signal Metadata Synced to CRM",
    description:
        "Richie Reach syncs enriched prospect records to HubSpot with signal metadata as contact properties. Trace a closed deal back to the LinkedIn engagement that triggered it.",
    canonical: "https://www.richiereach.tech/integrations/hubspot",
    openGraphTitle: "Richie Reach and HubSpot",
    keywords:
        "Richie Reach HubSpot integration, HubSpot signal metadata sync, LinkedIn signal CRM, outbound attribution HubSpot",
});

export default function HubspotIntegrationPage() {
    return (
        <SupportPageLayout
            label="Integrations"
            title="Richie Reach and HubSpot"
            intro={
                <>
                    <p>
                        Every record delivered by Richie Reach can sync to HubSpot with the full signal metadata attached as contact properties.
                    </p>
                    <p>
                        This means you can trace a closed deal back to the public engagement signal that triggered it: the keyword theme, the engagement class, the composite score at the time of capture.
                    </p>
                </>
            }
            ctaHeading="Talk to the founder"
            ctaSubtext="20-minute call to walk through the HubSpot sync configuration."
        >
            <SupportPageSection title="Signal fields as HubSpot contact properties">
                <SupportPageTable
                    headers={["Property", "What it maps to"]}
                    rows={[
                        ["signal_theme", "The keyword theme that triggered capture"],
                        ["engagement_type", "Comment, reaction, or share"],
                        ["engagement_class", "Intent class assigned by AI classification"],
                        ["composite_score", "Score at time of delivery (0.00 to 1.00)"],
                        ["icp_fit_score", "ICP gate score at time of filtering"],
                        ["enrichment_source", "Which waterfall tier found the email"],
                        ["signal_capture_date", "Timestamp of original engagement capture"],
                        ["delivery_date", "Timestamp of record delivery to HubSpot"],
                    ]}
                />
            </SupportPageSection>

            <SupportPageSection title="The attribution loop">
                <p>
                    When a deal closes, HubSpot can show which signal theme produced the contact, which engagement class it carried, and what the score was. Over time, this lets you adjust which themes to monitor and which score thresholds to prioritize, based on what actually converts in your specific market.
                </p>
                <p>
                    This is the feedback loop that makes the signal feed better over time, not just a reporting layer.
                </p>
            </SupportPageSection>

            <SupportPageSection title="How sync works">
                <p>
                    We push to HubSpot via Clay webhook or direct API. On the first delivery, we confirm field mapping and custom property setup. Subsequent deliveries are automated.
                </p>
                <p>
                    Existing HubSpot contacts are deduplicated by email to avoid creating duplicate records.
                </p>
            </SupportPageSection>
        </SupportPageLayout>
    );
}
