import { generateMetadata as baseGenerateMetadata } from "@/utils/metadata";

import {
    SupportPageLayout,
    SupportPageSection,
} from "@/components/support-pages/support-page-layout";

export const metadata = baseGenerateMetadata({
    title: "Richie Reach for B2B SaaS Teams - Signal Timing for Long Sales Cycles",
    description:
        "For B2B SaaS companies with high ACVs and long sales cycles, reaching prospects during active evaluation windows matters more than contact volume.",
    canonical: "https://www.richiereach.tech/for-saas",
    openGraphTitle: "Richie Reach for B2B SaaS Teams",
    keywords:
        "B2B SaaS outbound signals, LinkedIn engagement leads SaaS, signal-led outbound SaaS, high ACV outbound timing",
});

export default function ForSaasPage() {
    return (
        <SupportPageLayout
            label="For SaaS"
            title="Richie Reach for B2B SaaS Teams"
            intro={
                <>
                    <p>
                        For B2B SaaS companies with high ACVs and long sales cycles, cold outreach timing matters more than volume.
                    </p>
                    <p>
                        A prospect who is not in a buying cycle right now is not a lead. They are a future lead. The problem with most outbound stacks is they treat the two the same. You enrich a database pull, push it into sequences, and hope the timing works out for someone.
                    </p>
                    <p>Signal-led outbound narrows the timing problem.</p>
                </>
            }
            ctaHeading="Talk to the founder"
            ctaSubtext="20-minute call to discuss if signal timing fits your outbound motion."
        >
            <SupportPageSection title="Why timing is harder in enterprise-adjacent SaaS">
                <p>
                    The longer the sales cycle, the more important it is to reach people when they are actively thinking about the problem. A VP of Engineering who is mid-evaluation is a fundamentally different conversation than the same person three months before the budget discussion starts.
                </p>
                <p>
                    Signals do not tell you exactly where someone is in their decision cycle. But public engagement with content in your category is a measurable proxy for current attention. It is not perfect. It is better than nothing.
                </p>
            </SupportPageSection>

            <SupportPageSection title="Buying committee coverage">
                <p>
                    For high-ACV deals, you are usually selling to more than one person. Signal monitoring across keyword themes often surfaces multiple people from the same account at different seniority levels. That gives you a natural multi-thread without manually building a contact list per account.
                </p>
                <p>
                    We do not map full accounts by default, but we can scope monitoring to produce cross-functional signals from target accounts if your ICP definition includes it.
                </p>
            </SupportPageSection>

            <SupportPageSection title="What Richie Reach delivers for SaaS teams">
                <p>
                    A weekly feed of contacts who match your ICP, engaged with public content related to your category this week, and have enriched contact data and signal context attached. Format: Clay table, CSV, or webhook to your CRM.
                </p>
            </SupportPageSection>

            <SupportPageSection title="What it does not do">
                <p>
                    It does not generate inbound leads. It does not predict which accounts are about to close. It is an outbound input layer, not a crystal ball.
                </p>
            </SupportPageSection>
        </SupportPageLayout>
    );
}
