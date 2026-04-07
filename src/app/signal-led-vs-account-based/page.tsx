import {
    SupportPageLayout,
    SupportPageSection,
} from "@/components/support-pages/support-page-layout";
import { generateMetadata as baseGenerateMetadata } from "@/utils/metadata";

const title = "Signal-Led Outbound vs Account-Based Marketing";
const description =
    "ABM starts with a target account list and works inward. Signal-led outbound starts with who is paying attention this week. Here is how the two approaches differ and when each makes sense.";
const url = "https://www.richiereach.tech/signal-led-vs-account-based";

export const metadata = baseGenerateMetadata({
    title: "Signal-Led Outbound vs Account-Based Marketing - Richie Reach",
    description,
    canonical: url,
    openGraphTitle: title,
    openGraphDescription: description,
    keywords:
        "signal-led outbound vs ABM, signal-led vs account-based marketing, ABM alternative outbound, account-based vs intent-based outbound, when to use ABM vs signals",
});

const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url,
};

export default function SignalLedVsAccountBasedPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
            />
            <SupportPageLayout
                label="Signal Ops"
                title={title}
                intro={
                    <p>
                        Account-based marketing and signal-led outbound both try to solve the same problem: reaching the right people at the right time. They approach it from different directions.
                    </p>
                }
                ctaHeading="Talk to the founder"
                ctaSubtext="20-minute call to discuss your ICP and signal themes."
            >
                <SupportPageSection title="How ABM works">
                    <p>
                        ABM starts with a list of target accounts that your team decides in advance are worth pursuing. The list is built from firmographic criteria, strategic fit, existing relationships, or market intelligence. Once the accounts are defined, marketing and sales coordinate to work them over time through multiple channels.
                    </p>
                    <p>
                        The strength of ABM is focus. A short list of well-researched accounts gets more attention than a broad spray. The limitation is that the timing assumption is often wrong. Just because an account is on your target list does not mean anyone at that company is currently thinking about your category.
                    </p>
                </SupportPageSection>

                <SupportPageSection title="How signal-led outbound works">
                    <p>
                        Signal-led outbound starts with who is publicly paying attention right now, then checks whether they fit the ICP. The direction is inverted. Instead of picking accounts in advance and hoping timing works out, you surface contacts who are showing real engagement with your category this week and then filter for fit.
                    </p>
                    <p>
                        The strength is timing precision. You are not reaching accounts based on their strategic fit alone. You are reaching contacts at the moment when their public behavior suggests attention. The limitation is that you cannot control which accounts surface in any given week. If none of your target accounts generate relevant public engagement, the feed reflects that.
                    </p>
                </SupportPageSection>

                <SupportPageSection title="The main practical differences">
                    <p>ABM gives you control over which accounts you pursue. Signals give you information about who is ready now.</p>
                    <p>ABM works better when you have a short list of named accounts where strategic relationships matter more than timing, and where you are willing to invest sustained multi-channel effort over months.</p>
                    <p>Signal-led works better when your ICP is broad enough that you do not need to force your way into specific accounts, and when timing is a significant variable in whether a conversation lands.</p>
                </SupportPageSection>

                <SupportPageSection title="Using both together">
                    <p>
                        The approaches are not mutually exclusive. A common setup: maintain a short ABM list of strategic target accounts, and use a signal feed to identify which contacts at those accounts (and at non-ABM-list accounts) are showing engagement signals this week.
                    </p>
                    <p>
                        The ABM list defines the universe you care about most. The signal feed surfaces which part of that universe is paying attention right now.
                    </p>
                </SupportPageSection>

                <SupportPageSection title="Where Richie Reach fits">
                    <p>
                        Richie Reach is a signal input layer. It does not build account lists or run ABM campaigns. It identifies who in your ICP is engaged with relevant content this week and delivers that as a prioritized prospect feed.
                    </p>
                    <p>
                        Whether you run it alongside an ABM program or as a standalone outbound input is a workflow decision, not a product constraint.
                    </p>
                </SupportPageSection>
            </SupportPageLayout>
        </>
    );
}
