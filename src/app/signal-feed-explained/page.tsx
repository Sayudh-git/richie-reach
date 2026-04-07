import Link from "next/link";

import {
    SupportPageLayout,
    SupportPageSection,
} from "@/components/support-pages/support-page-layout";
import { generateMetadata as baseGenerateMetadata } from "@/utils/metadata";

const title = "What Is a B2B Signal Feed?";
const description =
    "A signal feed for outbound is a regularly delivered set of prospects who recently engaged with content in your category. Here is what it contains, how it is built, and when it is useful.";
const url = "https://www.richiereach.tech/signal-feed-explained";

export const metadata = baseGenerateMetadata({
    title: "What Is a B2B Signal Feed? - Richie Reach",
    description,
    canonical: url,
    openGraphTitle: title,
    openGraphDescription: description,
    keywords:
        "what is a signal feed, B2B signal feed, outbound signal feed, signal-based lead feed, behavioral intent feed outbound",
});

const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url,
};

export default function SignalFeedExplainedPage() {
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
                            A signal feed is a regularly delivered list of B2B prospects who recently took a public action related to a topic in your category.
                        </p>
                        <p>
                            The action is the signal. A comment on a LinkedIn post about a problem you solve. A reaction to content about a category you operate in. A question asked publicly about options in your space. Each of these is observable evidence that the person is paying attention to something relevant.
                        </p>
                        <p>
                            The feed is the delivery mechanism. Instead of one-off searches or manual monitoring, a signal feed runs continuously, captures events as they happen, filters them to your ICP, and delivers qualified records on a set cadence, typically weekly.
                        </p>
                    </>
                }
                ctaHeading="Talk to the founder"
                ctaSubtext="20-minute call to discuss your ICP and signal themes."
            >
                <SupportPageSection title="What a signal feed contains">
                    <p>Each record in a well-built signal feed includes:</p>
                    <p>The contact: name, title, company, LinkedIn URL. The same fields you would find in a contact database.</p>
                    <p>The signal context: what engagement type triggered capture (comment, reaction, share), which keyword theme the post was related to, when the engagement happened.</p>
                    <p>The enrichment: verified email address from a waterfall of enrichment providers, or a LinkedIn URL only if enrichment found no match.</p>
                    <p>The quality signal: an intent classification and a composite score indicating how strong the signal is and where the contact should route in your sequences.</p>
                </SupportPageSection>

                <SupportPageSection title="How it differs from a contact database">
                    <p>A contact database contains people who match demographic and firmographic criteria. It answers who.</p>
                    <p>A signal feed contains people who match those same criteria and recently did something that indicates current attention. It answers who and why now.</p>
                    <p>The tradeoff is volume. A database pull gives you more contacts. A signal feed gives you fewer contacts with more reason attached to each one.</p>
                </SupportPageSection>

                <SupportPageSection title="When a signal feed is the right input">
                    <p>
                        Signal feeds work best when your ICP is active on LinkedIn and generates regular discussion in your keyword categories, your outreach copy benefits from a specific reason to reach out rather than just a job title match, and your sending volume is deliberate rather than high-volume spray.
                    </p>
                    <p>
                        They work less well when your category generates very little public LinkedIn discussion, or when your ICP is so narrow that signal volume does not produce enough contacts per week to sustain outbound.
                    </p>
                </SupportPageSection>

                <SupportPageSection title="How Richie Reach delivers it">
                    <p>
                        Richie Reach is a managed signal feed service. We monitor public LinkedIn engagement around your keyword themes, apply ICP filters before enrichment, classify and score each record, and deliver a weekly feed into Clay, HubSpot, CSV, or webhook. You bring the ICP definition and keyword themes. We bring the infrastructure and delivery.
                    </p>
                    <p>
                        See the full pipeline on the <Link href="/how-it-works">How It Works</Link> page.
                    </p>
                </SupportPageSection>
            </SupportPageLayout>
        </>
    );
}
