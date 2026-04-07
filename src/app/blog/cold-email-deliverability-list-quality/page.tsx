import { BlogLayout } from "@/components/blog/blog-layout";
import { BLOG_PUBLISHED_AT } from "@/lib/blog/posts";
import { generateMetadata as baseGenerateMetadata } from "@/utils/metadata";

const title = "How List Quality Affects Cold Email Deliverability";
const description =
    "Your domain reputation is a direct function of what you send to and how those contacts respond. Here is the mechanical relationship between list quality and deliverability.";
const url = "https://www.richiereach.tech/blog/cold-email-deliverability-list-quality";

export const metadata = baseGenerateMetadata({
    title: "How List Quality Affects Cold Email Deliverability - Richie Reach",
    description,
    canonical: url,
    openGraphTitle: title,
    openGraphDescription: description,
    keywords: `${title}, signal-led outbound, B2B outbound, Richie Reach`,
});

const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    author: { "@type": "Person", name: "Sayudh Mukherjee" },
    publisher: { "@type": "Organization", name: "Richie Reach", url: "https://www.richiereach.tech" },
    datePublished: BLOG_PUBLISHED_AT,
    url,
};

export default function ColdEmailDeliverabilityListQualityPage() {
    return (
        <BlogLayout
            category="Deliverability"
            title={title}
            publishedAt={BLOG_PUBLISHED_AT}
            readTime="5 min"
            jsonLd={articleJsonLd}
        >
            <p>Cold email deliverability is mostly a function of what you send to, not what you send.</p>
            <p>
                You can write the best cold email in the category. If you are sending it to contacts with invalid emails, contacts who never open cold emails, and contacts who mark unsolicited messages as spam at high rates, the email still damages your domain.
            </p>

            <h2>How email providers assess your sending behavior</h2>
            <p>
                Email providers track engagement signals at the sending domain level. When you send from a domain, they note how many of your emails bounce, how many are opened, how many result in spam complaints, and how many are replied to.
            </p>
            <p>
                Over time, this creates a reputation signal for your domain. High bounce rates suggest your list is not well maintained. High spam complaint rates suggest your outreach is reaching people who do not want it. Low engagement rates suggest your messages are not relevant to the people receiving them.
            </p>
            <p>
                None of this is visible to you in real time. It accumulates quietly until your emails start landing in spam folders consistently.
            </p>

            <h2>The bounce rate problem</h2>
            <p>
                There are two kinds of bounces. Hard bounces are permanent failures: the email address does not exist or has been deactivated. Soft bounces are temporary failures: the mailbox is full, the server is temporarily unavailable.
            </p>
            <p>
                Hard bounces are the dangerous ones from a deliverability perspective. Sending to a significant number of invalid addresses tells providers that your list is not properly maintained.
            </p>
            <p>
                The most common cause of high hard bounce rates in outbound is enrichment without verification. Some enrichment tools return email addresses that pattern-match to the domain format without confirming the address is active. These addresses look valid but bounce on delivery.
            </p>
            <p>
                Sending only to verified addresses is the minimum control. Prospeo, Apollo at higher tiers, and Hunter all offer verification as part of their lookup. Any record where the enrichment returns an unverified address should not enter the sending queue.
            </p>

            <h2>Why list size is not the real deliverability risk</h2>
            <p>
                Teams often focus on daily send limits as the primary deliverability lever. Keep sends below a certain number per mailbox per day, and you are safe. This is partially true but incomplete.
            </p>
            <p>
                The daily limit is a rate control. It prevents sudden spikes that look like automated abuse. But you can stay under the daily limit and still damage your domain if the list itself is bad.
            </p>
            <p>
                The right question is not how many emails can you send per day. It is how many of those emails are likely to produce positive engagement signals (opens, replies) versus negative ones (bounces, spam complaints).
            </p>
            <p>
                A smaller, better-filtered list sent at the same daily volume will produce better engagement signals than a large, unfiltered list. Over time, the domain that consistently sends to relevant, verified contacts maintains better reputation than the domain sending to everyone who matches a filter.
            </p>

            <h2>Secondary domains and why they matter</h2>
            <p>
                One reason outbound teams use secondary domains rather than their primary domain for cold outreach is to protect the primary domain from reputation risk.
            </p>
            <p>
                If a cold email campaign produces a spike in spam complaints, the damage stays on the secondary domain. The primary domain, used for product emails, customer communication, and marketing, is unaffected.
            </p>
            <p>
                This is a standard practice, not a workaround. Most cold email infrastructure tools provision secondary domains specifically for this purpose. Warming the secondary domain over two to three weeks before active sending is also standard: gradual sending ramps help establish a positive reputation baseline before volume increases.
            </p>
            <p>
                Good list quality helps both the primary and secondary domains. Bad list quality damages whichever domain you use.
            </p>
            <p>
                Richie Reach delivers only records with verified contact paths. The enrichment waterfall runs Prospeo, Apollo, and Hunter in sequence, and records where all three return null are delivered with LinkedIn URL only, not added to the sending queue.
            </p>
            <p>
                If you send to verified, ICP-filtered contacts, your domain builds reputation slowly and holds it.
                <br />
                If you send to unverified, unfiltered lists, the reputation damage is slow to see and fast to compound.
            </p>
        </BlogLayout>
    );
}
