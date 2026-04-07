import { generateMetadata as baseGenerateMetadata } from "@/utils/metadata";

import {
    SupportPageLayout,
    SupportPageSection,
} from "@/components/support-pages/support-page-layout";

export const metadata = baseGenerateMetadata({
    title: "What Is Signal-Led Outbound? - Richie Reach",
    description:
        "Signal-led outbound uses recent public engagement as the reason to reach out, instead of cold contact lists. Here is how it works and when it makes sense for B2B outbound.",
    canonical: "https://www.richiereach.tech/what-is-signal-led-outbound",
    openGraphTitle: "What Is Signal-Led Outbound?",
    keywords:
        "signal-led outbound, what is signal-led outbound, LinkedIn engagement outbound, outbound timing signals, B2B outbound signals",
});

const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "What Is Signal-Led Outbound?",
    "description": "Signal-led outbound uses recent public engagement as the reason to reach out, instead of cold contact lists. Here is how it works and when it makes sense for B2B outbound.",
    "url": "https://www.richiereach.tech/what-is-signal-led-outbound"
};

export default function WhatIsSignalLedOutboundPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
            />
            <SupportPageLayout
                label="Signal Ops"
                title="What Is Signal-Led Outbound?"
                intro={
                    <>
                        <p>
                            Signal-led outbound is a method for B2B cold outreach where you reach out because someone recently did something publicly, not because they match a filter in a contact database.
                        </p>
                        <p>
                            The signal is the behavior. A comment on a relevant post. A reaction to content in your category. A public question that shows they are evaluating options. The outreach follows the behavior, not just the job title.
                        </p>
                    </>
                }
                ctaHeading="Talk to the founder"
                ctaSubtext="20-minute call to see if this motion fits your team."
            >
                <SupportPageSection title="How it differs from list-based outbound">
                    <p>
                        Traditional outbound starts with a list. You buy or build a database of contacts who match your ICP criteria, enrich them, and send a sequence. The problem: that list tells you who they are, not where they are in the buying process or whether they care about your category today.
                    </p>
                    <p>
                        This approach adds a time dimension. Instead of reaching out to a VP of Engineering at a 500-person SaaS company, you reach out to a VP of Engineering at a 500-person SaaS company who publicly asked about LLM cost benchmarking three days ago. That is a different conversation.
                    </p>
                </SupportPageSection>

                <SupportPageSection title="Why timing is part of targeting">
                    <p>
                        The right person at the wrong time behaves like the wrong person. They do not reply, or they reply with &quot;not right now,&quot; and you have burned a touch and some deliverability on a contact who might have been a real opportunity six weeks later.
                    </p>
                    <p>
                        Signals do not solve timing perfectly, but they narrow the window. Someone who engaged with content in your category this week is more likely to be thinking about your category this week than someone who has not engaged with anything you can measure.
                    </p>
                </SupportPageSection>

                <SupportPageSection title="What counts as a signal">
                    <p>
                        Not all public actions are equally useful. A generic &quot;great post&quot; reaction is evidence of LinkedIn activity, not buying intent. A comment that asks a specific question about options, tradeoffs, or timelines is closer to real signal.
                    </p>
                    <p>Good signals tend to include:</p>
                    <ul className="list-disc space-y-2 pl-6">
                        <li>Comments that ask for recommendations or comparisons</li>
                        <li>Questions about implementation, cost, or switching decisions</li>
                        <li>Engagement with posts about a problem your product solves</li>
                        <li>Repeated engagement with the same category over a short window</li>
                    </ul>
                </SupportPageSection>

                <SupportPageSection title="What this does not mean">
                    <p>
                        It does not guarantee intent. Signals are evidence of attention, not certainty about buying plans. Someone engaging with content about AI tooling might be curious, researching for an article, or genuinely evaluating vendors. The signal tells you they are paying attention. It does not tell you they are ready to buy.
                    </p>
                    <p>
                        It also does not replace a good ICP definition. Signals from people who do not match your ICP are still noise, regardless of how recent the engagement is.
                    </p>
                </SupportPageSection>

                <SupportPageSection title="Where Richie Reach fits">
                    <p>
                        Richie Reach captures public engagement around your keyword themes, filters to your ICP before enrichment, and delivers a weekly prospect feed into your existing stack. The signal is the input. Your outreach tools are the output layer.
                    </p>
                </SupportPageSection>
            </SupportPageLayout>
        </>
    );
}
