import Link from "next/link";

import { BlogLayout } from "@/components/blog/blog-layout";
import { generateMetadata as baseGenerateMetadata } from "@/utils/metadata";

const title = "How to Track Outbound Attribution in HubSpot";
const description =
    "Most HubSpot setups track that a contact replied. They do not track why the contact was reached out to in the first place. Here is how to set up signal attribution so you can close the loop.";
const url = "https://www.richiereach.tech/blog/outbound-attribution-hubspot";
const publishedAt = "2026-04-07";

export const metadata = baseGenerateMetadata({
    title: "How to Track Outbound Attribution in HubSpot - Richie Reach",
    description,
    canonical: url,
    openGraphTitle: title,
    openGraphDescription: description,
    keywords:
        "outbound attribution HubSpot, HubSpot cold email tracking, how to track outbound in HubSpot, HubSpot signal attribution, close loop outbound HubSpot",
});

const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    author: { "@type": "Person", name: "Sayudh Mukherjee" },
    publisher: { "@type": "Organization", name: "Richie Reach", url: "https://www.richiereach.tech" },
    datePublished: publishedAt,
    url,
};

export default function OutboundAttributionHubspotPage() {
    return (
        <BlogLayout category="Outbound Ops" title={title} publishedAt={publishedAt} readTime="5 min" jsonLd={articleJsonLd}>
            <p>Most HubSpot outbound setups track what happens to a contact after they enter the CRM. Reply status, deal stage, meeting booked, closed won. These are outcome fields.</p>
            <p>What most setups do not track is the input side: why this contact was reached out to in the first place, what signal triggered the outreach, and what the timing context was at capture.</p>
            <p>Without input-side data, you can see that contact X converted. You cannot see what made contact X different from the 400 contacts who did not.</p>

            <h2>The minimum input fields to track per contact</h2>
            <p>Before any contact enters a sequence, at least three input fields should exist on their HubSpot contact record:</p>
            <p>Why them. The ICP match criteria that caused this person to be selected. Not just &quot;VP of Engineering&quot; as a job title, but the specific filter set that qualified them: title, company size range, industry, geography. This does not need to be long. A short text field or a custom property with the ICP tier is sufficient.</p>
            <p>Why now. The timing signal. If the contact came from a database pull, this field might be empty or set to &quot;database pull, [date].&quot; If it came from a signal source, this field should contain the signal type and topic: &quot;LinkedIn comment, LLM cost benchmarking, [date].&quot;</p>
            <p>Why us. This one is optional at early stage but valuable later: what about the offer matched this contact specifically. Which product tier, which use case, which pain category.</p>

            <h2>The custom properties to add in HubSpot</h2>
            <p>Create these as custom contact properties in HubSpot:</p>
            <p>signal_theme: text field. The keyword topic that triggered capture.</p>
            <p>engagement_type: dropdown. Comment, reaction, share, job change, database pull.</p>
            <p>engagement_class: dropdown. Evaluating, active consideration, category engaged, unknown.</p>
            <p>signal_capture_date: date field.</p>
            <p>composite_score: number field. If you score records before delivery.</p>
            <p>icp_tier: text or dropdown. Which ICP segment this contact belongs to.</p>
            <p>sequence_name: text. Which sequence was used for first outreach.</p>
            <p>These do not replace HubSpot&apos;s native deal and activity tracking. They sit alongside it as the input-side context that explains why the outreach happened. This is one of the operating details in <Link href="/what-is-signal-led-outbound">signal-led outbound</Link>.</p>

            <h2>How to use the data</h2>
            <p>Once you have input-side and output-side data in HubSpot, you can run two analyses that are not possible with outcome fields alone:</p>
            <p>Which input types convert. If contacts with engagement_class &quot;evaluating&quot; close at a higher rate than contacts with engagement_class &quot;category engaged,&quot; that tells you to prioritize evaluating-class signals in future delivery. You cannot know this without the input field.</p>
            <p>Which signal themes produce pipeline. If the signal_theme &quot;LLM cost benchmarking&quot; produces 3 closed deals and &quot;general AI tooling&quot; produces none from the same volume, you shift monitoring toward the first theme. Again, not visible without the field.</p>

            <h2>The feedback loop this creates</h2>
            <p>Tracking input fields transforms the CRM from a record of outcomes into a feedback loop for improving the input layer. Every closed deal traces back to a reason. Every dead sequence can be examined for whether the input was the problem or the execution was.</p>
            <p>This is the operational reason to track attribution. Not for reporting, but for iteration.</p>
            <p>Richie Reach attaches signal_theme, engagement_type, engagement_class, composite_score, and signal_capture_date to every HubSpot contact record as custom properties. The feedback loop is part of the delivery model, not an afterthought.</p>
            <p>See how <Link href="/integrations/hubspot">HubSpot sync</Link> works in detail.</p>
        </BlogLayout>
    );
}
