import { generateMetadata as baseGenerateMetadata } from "@/utils/metadata";

import {
    SupportPageLayout,
    SupportPageSection,
} from "@/components/support-pages/support-page-layout";

export const metadata = baseGenerateMetadata({
    title: "Richie Reach for Outbound Agencies - White-Label Signal Feeds",
    description:
        "White-label LinkedIn engagement signal feeds for outbound agencies. Better inputs mean easier client renewals and a clear differentiation from volume-based competitors.",
    canonical: "https://www.richiereach.tech/for-agencies",
    openGraphTitle: "Richie Reach for Outbound Agencies",
    keywords:
        "white-label LinkedIn signal feed, outbound agency signal data, LinkedIn leads for agencies, B2B agency prospect feed",
});

export default function ForAgenciesPage() {
    return (
        <SupportPageLayout
            label="For Agencies"
            title="Richie Reach for Outbound Agencies"
            intro={
                <>
                    <p>
                        If you run outbound campaigns for clients, the quality of your input data determines how your results look, and how long clients stay.
                    </p>
                    <p>
                        Most agency input is the same: Apollo pulls, LinkedIn Sales Nav exports, or bought list providers. The data is the same across agencies because it comes from the same sources. Differentiation on results becomes harder when inputs are identical.
                    </p>
                </>
            }
            ctaHeading="Talk to the founder"
            ctaSubtext="20-minute call to discuss how a white-label feed fits your client setup."
        >
            <SupportPageSection title="What a signal feed changes">
                <p>
                    A weekly engagement signal feed gives you a different input type: prospects from your client&apos;s ICP who recently engaged with relevant content publicly.
                </p>
                <p>
                    This changes two things. First, the opening line of every outreach has a real reason attached. Not &quot;I saw you work in SaaS,&quot; but a reference to what they actually engaged with. That is a different conversation. Second, the feed is fresh by construction. You are not running the same list a competitor ran last quarter.
                </p>
            </SupportPageSection>

            <SupportPageSection title="How agencies typically use Richie Reach">
                <p>
                    The most common setup: we deliver a weekly signal feed for each client, formatted for their sending stack. You receive a CSV, Clay table, or webhook-ready feed with signal context fields attached. Your team writes the sequences, handles sending, and manages replies.
                </p>
                <p>
                    If you want us to handle more of the stack, we can run signal capture through delivery end to end. The service level adjusts to what you need per client.
                </p>
            </SupportPageSection>

            <SupportPageSection title="White-label delivery">
                <p>
                    The output format is yours. There is no Richie Reach branding in the CSV or CRM fields. You present the signal feed as your input methodology.
                </p>
            </SupportPageSection>

            <SupportPageSection title="What works well for agencies">
                <ul className="list-disc space-y-2 pl-6">
                    <li>Clients with defined ICPs and existing sending infrastructure</li>
                    <li>Multi-client operations where you need a repeatable input source per client</li>
                    <li>Situations where improving reply rates matters more than increasing send volume</li>
                </ul>
            </SupportPageSection>

            <SupportPageSection title="What does not work">
                <ul className="list-disc space-y-2 pl-6">
                    <li>Clients without a defined ICP (signals cannot be filtered to a target that does not exist)</li>
                    <li>Clients who want guaranteed meetings from the data feed (signals improve odds, they do not guarantee outcomes)</li>
                </ul>
            </SupportPageSection>
        </SupportPageLayout>
    );
}
