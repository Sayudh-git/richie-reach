import Link from "next/link";

import {
    SupportPageLayout,
    SupportPageSection,
} from "@/components/support-pages/support-page-layout";
import { generateMetadata as baseGenerateMetadata } from "@/utils/metadata";

const title = "How to Use LinkedIn for B2B Outbound Prospecting";
const description =
    "LinkedIn is the largest source of publicly observable B2B buying behavior. Here is how to use it for outbound prospecting: what signals exist, how to find them, and how to act on them.";
const url = "https://www.richiereach.tech/how-to-use-linkedin-for-outbound";

export const metadata = baseGenerateMetadata({
    title: "How to Use LinkedIn for B2B Outbound Prospecting - Richie Reach",
    description,
    canonical: url,
    openGraphTitle: title,
    openGraphDescription: description,
    keywords:
        "how to use LinkedIn for outbound, LinkedIn outbound prospecting, LinkedIn B2B lead generation, LinkedIn engagement for outbound, LinkedIn signals for sales",
});

const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url,
};

export default function HowToUseLinkedinForOutboundPage() {
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
                    <>
                        <p>
                            LinkedIn is the only major platform where B2B professionals publicly discuss their work problems, vendor evaluations, and category-specific decisions at scale. That makes it a unique source of behavioral signals that no contact database can replicate.
                        </p>
                        <p>
                            Here is what those signals are, where to find them, and how to use them in outbound.
                        </p>
                    </>
                }
                ctaHeading="Talk to the founder"
                ctaSubtext="20-minute call to discuss your ICP and signal themes."
            >
                <SupportPageSection title="What LinkedIn signals look like">
                    <p>Public LinkedIn activity falls into a few observable categories:</p>
                    <p>Comments on posts. Someone writes a specific response to a post about a topic. This is the highest-signal activity because it requires effort and often reveals specific thinking.</p>
                    <p>Reactions on posts. Someone likes, celebrates, or otherwise reacts to a post. Lower effort than a comment, but still evidence of attention.</p>
                    <p>Shares. Someone shares a post to their own network. Usually indicates agreement or enough interest to want their own followers to see it.</p>
                    <p>Posts. Someone publishes their own content about a topic. This is often the strongest signal of all, but harder to capture systematically because the person is the author rather than a responder.</p>
                </SupportPageSection>

                <SupportPageSection title="Finding signals manually">
                    <p>
                        The most accessible manual method is LinkedIn&apos;s post search. Search for a keyword or phrase that describes the problem your product solves. Filter results to &quot;Posts&quot; rather than people or companies. Open posts with meaningful engagement. Look at who commented. Check whether those commenters match your ICP. Record the ones who do along with the context of what they said.
                    </p>
                    <p>This works at low volume. It does not scale beyond about 20 to 30 prospects per week for a solo operator.</p>
                </SupportPageSection>

                <SupportPageSection title="What to do with a signal">
                    <p>Once you have a signal-matched prospect, you have two things a database pull never gives you: a real opener and a timing reason.</p>
                    <p>The opener references what they said or engaged with. Not &quot;I saw you work in [industry]&quot; but something specific to the post they engaged with. This is the difference between a cold pitch and a relevant follow-up.</p>
                    <p>The timing reason is that they engaged this week. That is your window. Reaching out weeks after the engagement loses most of the timing advantage.</p>
                </SupportPageSection>

                <SupportPageSection title="The operational ceiling on manual signal work">
                    <p>
                        For a 5-person SDR team needing 300 to 500 signal-fresh prospects per week, the manual method is not viable. The search is repetitive, the profile filtering is repetitive, and the context capture is too slow at volume.
                    </p>
                    <p>This is where a monitored signal feed replaces the manual pass. The logic is identical. The infrastructure does it continuously and at scale.</p>
                </SupportPageSection>

                <SupportPageSection title="Where Richie Reach fits">
                    <p>
                        Richie Reach automates the signal monitoring, ICP filtering, and enrichment steps described above. You define the keyword themes and ICP criteria. We deliver a weekly feed of signal-matched, enriched prospects into your existing stack.
                    </p>
                    <p>
                        <Link href="/signal-feed-explained">See what a signal feed contains</Link>.
                    </p>
                    <p>
                        <Link href="/how-it-works">See the full pipeline</Link>.
                    </p>
                </SupportPageSection>
            </SupportPageLayout>
        </>
    );
}
