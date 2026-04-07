import { generateMetadata as baseGenerateMetadata } from "@/utils/metadata";

import {
    SupportPageLayout,
    SupportPageSection,
} from "@/components/support-pages/support-page-layout";

export const metadata = baseGenerateMetadata({
    title: "LinkedIn Engagement Leads: What They Are and When They Work - Richie Reach",
    description:
        "LinkedIn engagement leads are prospects who recently commented on or reacted to posts in your category. Here is what qualifies as a signal, what gets filtered out, and how to use them in outbound.",
    canonical: "https://www.richiereach.tech/linkedin-engagement-leads",
    openGraphTitle: "LinkedIn Engagement Leads: What They Are and When They Work",
    keywords:
        "LinkedIn engagement leads, LinkedIn comment leads, LinkedIn reaction leads, B2B leads from LinkedIn engagement, engagement signal outbound",
});

export default function LinkedinEngagementLeadsPage() {
    return (
        <SupportPageLayout
            label="Signal Ops"
            title="LinkedIn Engagement Leads: What They Are and When They Work"
            intro={
                <>
                    <p>
                        These leads are prospects who recently commented on, reacted to, or shared posts in a content category relevant to your product.
                    </p>
                    <p>
                        The logic is simple. If someone publicly engages with a post about a problem you solve, they are at least aware of the problem. That awareness does not mean they are buyers. It means they are a better starting point than a random contact in a database who has no measurable connection to the category.
                    </p>
                </>
            }
            ctaHeading="Talk to the founder"
            ctaSubtext="20-minute call to see if the signal volume in your category is workable."
        >
            <SupportPageSection title="What qualifies as an engagement signal">
                <p>
                    Not all LinkedIn activity is equal. Comments and reactions are the most common capture types. Comments vary significantly in quality.
                </p>
                <p>
                    High-signal comments tend to ask specific questions, name competing options, mention a decision in progress, or describe a pain point in enough detail that it is clearly real. Low-signal comments are things like &quot;great post,&quot; &quot;thanks for sharing,&quot; or generic agreement. These show activity, not intent.
                </p>
                <p>
                    Reactions carry less signal than comments because they require less effort and reveal less context.
                </p>
            </SupportPageSection>

            <SupportPageSection title="What gets filtered out">
                <p>
                    A raw engagement feed from any LinkedIn keyword set includes a lot of noise. Job posts. Recruiters promoting roles. People self-promoting their own content. Competitors monitoring the category.
                </p>
                <p>
                    Good engagement lead workflows filter for role match, company size, geography, and engagement quality before anyone spends a credit on enrichment. The filter order matters. Enriching everything and filtering later wastes money and produces bloated lists that hurt deliverability.
                </p>
            </SupportPageSection>

            <SupportPageSection title="When these leads work">
                <p>They work best when:</p>
                <ul className="list-disc space-y-2 pl-6">
                    <li>Your ICP is specific enough to filter against</li>
                    <li>Your buyers are active on LinkedIn (most B2B categories are)</li>
                    <li>Your outreach copy references the engagement rather than ignoring it</li>
                    <li>The signal is fresh, captured within the past week</li>
                </ul>
                <p>They work less well when:</p>
                <ul className="list-disc space-y-2 pl-6">
                    <li>Your ICP is so narrow that signal volume is too low to build a weekly queue</li>
                    <li>Your buyers are in categories that do not generate much LinkedIn discussion</li>
                    <li>The engagement is captured but then treated like a generic list anyway</li>
                </ul>
            </SupportPageSection>

            <SupportPageSection title="How Richie Reach delivers engagement leads">
                <p>
                    We capture public engagement around your keyword themes, apply ICP filters before enrichment, and deliver a weekly feed into Clay, HubSpot, CSV, or webhook. Signal context fields travel with every record so your outreach can reference what they actually engaged with.
                </p>
            </SupportPageSection>
        </SupportPageLayout>
    );
}
