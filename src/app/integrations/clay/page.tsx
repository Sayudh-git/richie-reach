import { generateMetadata as baseGenerateMetadata } from "@/utils/metadata";

import {
    SupportPageLayout,
    SupportPageSection,
    SupportPageTable,
} from "@/components/support-pages/support-page-layout";

export const metadata = baseGenerateMetadata({
    title: "Richie Reach and Clay - Signal Leads Delivered Into Clay Tables",
    description:
        "Richie Reach delivers LinkedIn engagement leads directly into Clay tables with signal metadata attached. Here is what each field contains and how teams route records from Clay into sequences.",
    canonical: "https://www.richiereach.tech/integrations/clay",
    openGraphTitle: "Richie Reach and Clay",
    keywords:
        "Richie Reach Clay integration, LinkedIn signal leads Clay, Clay enrichment waterfall, Clay prospect table signal metadata",
});

export default function ClayIntegrationPage() {
    return (
        <SupportPageLayout
            label="Integrations"
            title="Richie Reach and Clay"
            intro={
                <>
                    <p>
                        Richie Reach delivers signal records directly into Clay tables.
                    </p>
                    <p>
                        Every record that passes the ICP gate and enrichment waterfall arrives in Clay with the full signal metadata attached: engagement type, keyword theme, engagement recency, behavioral intent class, and composite score.
                    </p>
                </>
            }
            ctaHeading="Talk to the founder"
            ctaSubtext="20-minute call to walk through how the Clay table fits your existing workflow."
        >
            <SupportPageSection title="What arrives in Clay">
                <SupportPageTable
                    headers={["Field", "What it contains"]}
                    rows={[
                        ["person_name", "Full name"],
                        ["linkedin_url", "LinkedIn profile URL"],
                        ["title", "Job title"],
                        ["company_name", "Company name"],
                        ["company_size_range", "Employee count range"],
                        ["industry", "Industry category"],
                        ["location", "Country or region"],
                        ["signal_type", "Comment, reaction, or share"],
                        ["signal_theme", "The keyword theme that triggered capture"],
                        ["signal_recency", "Days since engagement"],
                        ["engagement_class", "evaluating, active_buyer, category_engaged, surface_engagement"],
                        ["composite_score", "0.00 to 1.00"],
                        ["email", "Verified email or null if not found"],
                        ["enrichment_source", "Which waterfall tier found the email"],
                    ]}
                />
            </SupportPageSection>

            <SupportPageSection title="How teams use it in Clay">
                <p>
                    Most teams route from the Richie Reach table into their own Clay waterfall. Common patterns:
                </p>
                <ul className="list-disc space-y-2 pl-6">
                    <li>Route by score threshold: HIGH records (0.74 and above) to one sequence, MED records (0.52 to 0.73) to another</li>
                    <li>Additional enrichment: Clearbit, Clay&apos;s built-in enricher, tech stack lookups</li>
                    <li>CRM push to HubSpot or Salesforce with signal fields mapped to custom properties</li>
                    <li>Copy generation using the signal_theme and engagement_class fields as inputs</li>
                </ul>
                <p>
                    The signal fields give Clay enough context to write personalized openers without a separate enrichment step for intent data.
                </p>
            </SupportPageSection>

            <SupportPageSection title="What we set up">
                <p>
                    We provision the Clay table, set the webhook endpoint, and confirm field mapping before the first delivery. Ongoing delivery is automated. You access the table as a standard Clay data source.
                </p>
            </SupportPageSection>
        </SupportPageLayout>
    );
}
