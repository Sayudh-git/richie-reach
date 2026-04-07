import { generateMetadata as baseGenerateMetadata } from "@/utils/metadata";

import {
    SupportPageLayout,
    SupportPageSection,
} from "@/components/support-pages/support-page-layout";

export const metadata = baseGenerateMetadata({
    title: "Richie Reach for SDR Teams - Weekly Signal-Fresh Prospect Queue",
    description:
        "Give your SDR team a weekly prospect queue of people who recently engaged with content in your category. Less spray, better timing, cleaner deliverability.",
    canonical: "https://www.richiereach.tech/for-sdr-teams",
    openGraphTitle: "Richie Reach for SDR Teams",
    keywords:
        "SDR prospect queue, weekly outbound queue SDR, LinkedIn signal leads SDR teams, signal-fresh prospects SDR",
});

export default function ForSdrTeamsPage() {
    return (
        <SupportPageLayout
            label="For SDR Teams"
            title="Richie Reach for SDR Teams"
            intro={
                <>
                    <p>
                        SDR teams that spray sequences at large, unqualified lists burn deliverability and burn out reps.
                    </p>
                    <p>
                        The math is simple: sending 500 targeted, signal-fresh emails outperforms sending 5,000 generic ones on reply rate, deliverability health, and SDR morale. The problem is that most teams do not have a reliable way to build a 500-record signal-fresh queue every week.
                    </p>
                </>
            }
            ctaHeading="Talk to the founder"
            ctaSubtext="20-minute call to see what the weekly queue looks like for your ICP."
        >
            <SupportPageSection title="What Richie Reach delivers to SDR teams">
                <p>A weekly queue of prospects who:</p>
                <ul className="list-disc space-y-2 pl-6">
                    <li>Match your ICP (role, seniority, company size, industry, geography)</li>
                    <li>Recently engaged publicly with content in your category</li>
                    <li>Have a verified contact path from the enrichment waterfall</li>
                    <li>Include signal context so your opener is not generic</li>
                </ul>
                <p>
                    The queue arrives in your sending tool, Clay table, or CRM. SDRs see why each person is in the queue, not just who they are.
                </p>
            </SupportPageSection>

            <SupportPageSection title="The deliverability angle">
                <p>
                    High-volume sending to unverified, context-free lists degrades your domain reputation. Once you are in spam folders, the only fix is time and a different domain.
                </p>
                <p>
                    A smaller, better-filtered queue reduces send volume, improves per-email relevance, and keeps your domains healthy for longer. For teams that care about deliverability hygiene, fewer, better records beat more raw contacts.
                </p>
            </SupportPageSection>

            <SupportPageSection title="How it connects to your stack">
                <p>
                    We deliver into whatever your team already uses. Clay, Smartlead, Lemlist, Instantly, HubSpot. If you need a custom webhook, we set it up.
                </p>
                <p>
                    SDRs do not change their workflow. They get a better queue at the top of it.
                </p>
            </SupportPageSection>

            <SupportPageSection title="What we need from you">
                <ul className="list-disc space-y-2 pl-6">
                    <li>Your ICP definition (role, seniority, company size, industry, geo, exclusions)</li>
                    <li>Keyword themes your buyers discuss publicly on LinkedIn</li>
                    <li>Your suppression list</li>
                    <li>Your sending tool or CRM endpoint</li>
                </ul>
            </SupportPageSection>
        </SupportPageLayout>
    );
}
