import Link from "next/link";

import { BlogLayout } from "@/components/blog/blog-layout";
import { generateMetadata as baseGenerateMetadata } from "@/utils/metadata";

const title = "Why Cold Email Gets No Replies (And What to Fix First)";
const description =
    "Most cold email reply rate problems are not a copy problem. They are a list problem and a timing problem. Here is the diagnostic sequence to work through before touching your sequences.";
const url = "https://www.richiereach.tech/blog/why-cold-email-gets-no-replies";
const publishedAt = "2026-04-07";

export const metadata = baseGenerateMetadata({
    title: "Why Cold Email Gets No Replies (And What to Fix First) - Richie Reach",
    description,
    canonical: url,
    openGraphTitle: title,
    openGraphDescription: description,
    keywords:
        "cold email no replies, why cold email doesn't work, improve cold email reply rate, cold email list quality, outbound not working",
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

export default function WhyColdEmailGetsNoRepliesPage() {
    return (
        <BlogLayout category="Outbound Ops" title={title} publishedAt={publishedAt} readTime="5 min" jsonLd={articleJsonLd}>
            <p>The first instinct when cold email stops working is to rewrite the copy. New subject line, shorter body, different CTA. Sometimes that fixes it. More often it does not, because the copy was not the problem.</p>
            <p>There are three places where cold email breaks. Each one has different symptoms and different fixes. The diagnostic matters because fixing the wrong layer wastes time and sometimes makes things worse.</p>

            <h2>Layer 1: The list</h2>
            <p>The most common cause of low reply rates is a list that does not match the offer closely enough. Not just ICP mismatches on title or company size, but temporal mismatches. People who would care about your product, but not right now.</p>
            <p>A database pull gives you contacts who match your ICP filters. It does not tell you which of those people are currently thinking about the problem you solve. If your list is 90% people who are not in an active consideration window, your reply rate reflects that, not the quality of your copy.</p>
            <p>Signs the list is the problem: consistent low open rates across different subject line tests, very low positive reply rate even on sequences that worked before, high unsubscribe rate from people who do open.</p>
            <p>What to check: How old is the list? Was it filtered before or after enrichment? Is there any recency signal attached to the contacts, or are they just ICP-matched people pulled from a database at an arbitrary point in time? This is where <Link href="/blog/icp-filtering-outbound">ICP filtering</Link> matters.</p>

            <h2>Layer 2: The deliverability</h2>
            <p>If open rates have dropped significantly without a change in list quality or subject lines, the problem is likely deliverability, not copy. Your emails are landing in spam before anyone reads them.</p>
            <p>Signs this is the problem: open rates below 30% on a clean, verified list, sudden drop after a high-volume send, bounce rate above 3% on a recent campaign.</p>
            <p>The fix is not a new subject line. The fix is: check your domain health with Google Postmaster Tools, check bounce rate per campaign, check whether you are sending from a warmed domain or a fresh one, and reduce daily volume until the domain health signal improves.</p>
            <p>Deliverability problems compound. The longer you keep sending on a damaged domain, the worse the reputation gets. Slowing down first is usually the right call.</p>

            <h2>Layer 3: The copy</h2>
            <p>If the list is current and ICP-matched, and deliverability health is clean, then copy is the variable to test. Most copy problems fall into one of three categories.</p>
            <p>No specific reason to reach out. The opener says &quot;I noticed you work in [industry]&quot; or &quot;I saw you are the [title] at [company].&quot; That is not a reason. That is a description of publicly available information the prospect already knows about themselves. A real reason requires something that was true this week, not just always.</p>
            <p>The offer is too abstract. &quot;We help companies improve their outbound results&quot; describes a category, not an outcome. A specific offer attached to a specific mechanism is more testable and more credible than a category description.</p>
            <p>The CTA asks for too much. Asking for a 30-minute demo call in the first email from a cold contact is a high commitment request. A softer ask, asking a question or offering something useful, converts better from cold outreach.</p>

            <h2>The right order to diagnose</h2>
            <p>List quality first. Timing and fit before copy.</p>
            <p>Deliverability second. Domain health before subject lines.</p>
            <p>Copy third. Only after the first two check out.</p>
            <p>Most founders and SDR leaders skip to copy because it feels immediately actionable. The faster fix is usually upstream.</p>
            <p>Richie Reach addresses Layer 1 by delivering a signal-filtered list where every record has a recent engagement event attached. The reason is in the record before anyone starts writing.</p>
            <p>See also: <Link href="/blog/cold-email-deliverability-list-quality">how list quality affects cold email deliverability</Link>.</p>
        </BlogLayout>
    );
}
