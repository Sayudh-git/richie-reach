const NEW_POST_DATE = "2026-04-07";
const ORIGINAL_POST_DATE = "2026-04-04";

export const BLOG_POSTS = [
    {
        slug: "why-cold-email-gets-no-replies",
        title: "Why Cold Email Gets No Replies (And What to Fix First)",
        category: "Outbound Ops",
        publishedAt: NEW_POST_DATE,
        readTime: "5 min",
        description:
            "Diagnostic framework for cold email reply rate problems. List quality and timing come before copy.",
    },
    {
        slug: "outbound-stack-early-stage-startup",
        title: "Outbound Stack for an Early-Stage Startup: What You Actually Need",
        category: "Outbound Ops",
        publishedAt: NEW_POST_DATE,
        readTime: "5 min",
        description:
            "What tools an early-stage startup or solo founder actually needs to run outbound, and what to skip.",
    },
    {
        slug: "how-to-find-high-intent-linkedin-prospects",
        title: "How to Find High-Intent LinkedIn Prospects Without Paid Tools",
        category: "Signal Ops",
        publishedAt: NEW_POST_DATE,
        readTime: "5 min",
        description:
            "Manual method for finding people currently engaging with relevant LinkedIn content, and when to automate it.",
    },
    {
        slug: "is-apollo-enough-or-do-you-need-intent-data",
        title: "Is Apollo Enough, or Do You Need Intent Data?",
        category: "Signal Ops",
        publishedAt: NEW_POST_DATE,
        readTime: "4 min",
        description:
            "When a contact database alone is sufficient and when a signal layer changes the output.",
    },
    {
        slug: "how-to-personalize-cold-email-at-scale",
        title: "How to Personalize Cold Email at Scale Without Fabricating Context",
        category: "Outbound Ops",
        publishedAt: NEW_POST_DATE,
        readTime: "4 min",
        description:
            "Signal-based personalization versus AI-generated icebreakers and manual research.",
    },
    {
        slug: "do-you-need-trigify-or-is-clay-enough",
        title: "Do You Need a Signal Tool Like Trigify, or Is Clay Enough?",
        category: "Signal Ops",
        publishedAt: NEW_POST_DATE,
        readTime: "4 min",
        description:
            "Clay is enrichment. Signal tools are the input layer. They solve different gaps.",
    },
    {
        slug: "outbound-attribution-hubspot",
        title: "How to Track Outbound Attribution in HubSpot",
        category: "Outbound Ops",
        publishedAt: NEW_POST_DATE,
        readTime: "5 min",
        description:
            "How to track why a contact was reached out to, not just what happened after.",
    },
    {
        slug: "sales-triggers-b2b-outbound",
        title: "Sales Triggers for B2B Outbound: Which Ones Actually Improve Timing",
        category: "Signal Ops",
        publishedAt: NEW_POST_DATE,
        readTime: "5 min",
        description:
            "Evaluation framework for job change, funding, website visit, hiring, and LinkedIn engagement signals.",
    },
    {
        slug: "filter-before-enrichment",
        title: "Why You Should Filter Before Enrichment",
        category: "Signal Ops",
        publishedAt: ORIGINAL_POST_DATE,
        readTime: "4 min",
        description:
            "Why running ICP filters before enrichment reduces wasted credits, protects deliverability, and produces cleaner prospect lists than enrich-everything approaches.",
    },
    {
        slug: "what-is-intent-data-b2b",
        title: "What Is Intent Data in B2B Outbound?",
        category: "Signal Ops",
        publishedAt: ORIGINAL_POST_DATE,
        readTime: "5 min",
        description:
            "What intent data means in a B2B outbound context, the difference between behavioral signals and third-party intent feeds, and when signal evidence is reliable.",
    },
    {
        slug: "signal-decay-outbound",
        title: "Signal Decay: Why Outreach Timing Degrades Fast",
        category: "Signal Ops",
        publishedAt: ORIGINAL_POST_DATE,
        readTime: "4 min",
        description:
            "How quickly a public engagement signal loses outreach relevance, why stale signals produce worse results than no signal at all, and what a workable freshness window looks like.",
    },
    {
        slug: "enrichment-waterfall-clay",
        title: "How to Build an Enrichment Waterfall in Clay",
        category: "Enrichment",
        publishedAt: ORIGINAL_POST_DATE,
        readTime: "5 min",
        description:
            "A step-by-step explanation of enrichment waterfall logic using Prospeo, Apollo, and Hunter inside Clay, including cost per run with and without an ICP gate upstream.",
    },
    {
        slug: "weekly-outbound-queue",
        title: "How to Build a Weekly Outbound Prospect Queue",
        category: "Outbound Ops",
        publishedAt: ORIGINAL_POST_DATE,
        readTime: "5 min",
        description:
            "Why a smaller, weekly-refreshed queue outperforms a giant static list for outbound teams, and what the right inputs to a weekly queue look like.",
    },
    {
        slug: "b2b-outbound-timing-problem",
        title: "The B2B Outbound Timing Problem",
        category: "Outbound Ops",
        publishedAt: ORIGINAL_POST_DATE,
        readTime: "4 min",
        description:
            "Why the correct prospect at the wrong time behaves like the wrong prospect, how most outbound stacks ignore timing entirely, and what a timing signal actually tells you.",
    },
    {
        slug: "cold-email-deliverability-list-quality",
        title: "How List Quality Affects Cold Email Deliverability",
        category: "Deliverability",
        publishedAt: ORIGINAL_POST_DATE,
        readTime: "5 min",
        description:
            "The direct relationship between what goes into a sending list and what happens to domain reputation, bounce rate, and reply rate over time.",
    },
    {
        slug: "icp-filtering-outbound",
        title: "ICP Filtering in Outbound: What It Is and Why Order Matters",
        category: "Signal Ops",
        publishedAt: ORIGINAL_POST_DATE,
        readTime: "4 min",
        description:
            "What ICP filtering means operationally, why most teams filter too late in their workflow, and what changes when you gate before enrichment instead of after.",
    },
    {
        slug: "linkedin-comment-leads-quality",
        title: "What Makes a Good LinkedIn Engagement Signal",
        category: "Signal Ops",
        publishedAt: ORIGINAL_POST_DATE,
        readTime: "4 min",
        description:
            "The difference between a high-signal LinkedIn comment and noise, how to classify engagement quality before outreach, and when engagement evidence is worth acting on.",
    },
    {
        slug: "outbound-without-spray-and-pray",
        title: "Outbound Without Spray and Pray",
        category: "Outbound Ops",
        publishedAt: ORIGINAL_POST_DATE,
        readTime: "5 min",
        description:
            "What spray-and-pray outbound actually costs in deliverability and SDR time, and what a tighter, signal-first approach looks like mechanically.",
    },
] as const;

export const BLOG_PUBLISHED_AT = ORIGINAL_POST_DATE;
