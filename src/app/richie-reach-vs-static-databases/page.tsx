import { generateMetadata as baseGenerateMetadata } from "@/utils/metadata";

import {
    SupportPageLayout,
    SupportPageSection,
} from "@/components/support-pages/support-page-layout";

export const metadata = baseGenerateMetadata({
    title: "Signal-Led Outbound vs Static Databases - Richie Reach",
    description:
        "Databases tell you who to reach. Signals tell you who to reach and why, today. Here is how the two approaches differ for B2B outbound and when each one fits.",
    canonical: "https://www.richiereach.tech/richie-reach-vs-static-databases",
    openGraphTitle: "Signal-Led Outbound vs Static Databases",
    keywords:
        "signal-led outbound vs databases, Richie Reach vs Apollo, LinkedIn signals vs contact lists, fresh leads vs static data, B2B outbound timing",
});

export default function RichieReachVsStaticDatabasesPage() {
    return (
        <SupportPageLayout
            label="Signal Ops"
            title="Signal-Led Outbound vs Static Databases"
            intro={
                <>
                    <p>Static databases and signal feeds answer different questions.</p>
                    <p>A database answers: who is out there that matches my ICP filters?</p>
                    <p>A signal feed answers: who in my ICP was publicly paying attention to this category recently?</p>
                    <p>Both are useful. They are not the same thing.</p>
                </>
            }
            ctaHeading="Talk to the founder"
            ctaSubtext="Book a call to run the numbers on what signal volume looks like in your category."
        >
            <SupportPageSection title="What databases do well">
                <p>
                    Databases are good at coverage. They hold contact records for large portions of the B2B professional population. If you need to build a large list from a defined set of ICP criteria, a database is the fast path.
                </p>
                <p>
                    The limitation is timing. A contact in a database might have been added six months ago, last verified three months ago, and has not shown any measurable buying activity since. You are reaching out based on who they are, not what they are doing.
                </p>
            </SupportPageSection>

            <SupportPageSection title="What a signal feed adds">
                <p>
                    A signal feed adds a time dimension and a reason.
                </p>
                <p>When someone in your ICP publicly comments on a post about a problem your product solves, you have:</p>
                <ul className="list-disc space-y-2 pl-6">
                    <li>An ICP-matched contact (the who)</li>
                    <li>A recent engagement (the when)</li>
                    <li>A context for outreach (the why)</li>
                </ul>
                <p>
                    The outreach opener can reference what they actually engaged with. That changes the conversation from a cold pitch to a relevant follow-up.
                </p>
            </SupportPageSection>

            <SupportPageSection title="Where the tradeoff is">
                <p>
                    The signal-led approach produces fewer records than a database pull. That is intentional. You are trading volume for relevance and timing. A smaller queue of better-reasoned contacts generally outperforms a large list of cold contacts on reply rate, but the absolute meeting count can vary depending on signal volume in your category.
                </p>
                <p>
                    If your ICP is active on LinkedIn and your keyword themes generate regular discussion, signal volume is usually workable. If your buyers are mostly offline or in a category with minimal public discussion, signals are thinner.
                </p>
            </SupportPageSection>

            <SupportPageSection title="How Richie Reach fits">
                <p>
                    We are not a database. We are a weekly queue builder. We capture signals, filter to your ICP, enrich only what passes, and deliver a ready-to-use feed. The output is fewer, better-reasoned records, not more raw contacts.
                </p>
            </SupportPageSection>
        </SupportPageLayout>
    );
}
