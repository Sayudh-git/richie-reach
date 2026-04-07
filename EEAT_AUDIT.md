# Richie Reach E-E-A-T Audit

Basis: Google helpful content guidance, Moz E-E-A-T framing, and local source review before implementation. Main audit standard: content should be useful to a B2B outbound operator, show first-hand process knowledge, make defensible claims, avoid inflated proof, and make authorship visible.

---
FILE: src/app/page.tsx
PAGE TITLE: Find Active LinkedIn Leads | Richie Reach
E-E-A-T SCORE: 8

EXPERIENCE (does it show first-hand knowledge?): 8 - The homepage describes the actual signal capture, ICP filtering, enrichment, and delivery workflow.
EXPERTISE (does it demonstrate technical depth?): 8 - Structured data and workflow language show clear technical positioning.
AUTHORITATIVENESS (is authorship clear, are claims grounded?): 7 - Organization and founder schema exist, but visible authorship is indirect through the footer.
TRUSTWORTHINESS (no vague claims, no inflated metrics, no fabricated proof?): 8 - Claims are mostly operational, but the "within 24 hours" language should remain tied to actual delivery capability.

AI SLOP DETECTED: YES
AI SLOP PATTERNS FOUND:
  - Em dash usage in image alt and footer-rendered content.
  - Hidden comment contains "Works with."

GOOGLE HELPFUL CONTENT ISSUES:
  - It satisfies the brand/product search intent.
  - It has a clear single claim: signal-led outbound from LinkedIn engagement.
  - It has original process detail, not just generic lead generation copy.
  - A first-hand practitioner could write this, but visible author connection should be stronger.

SPECIFIC LINES TO REWRITE: "Richie Reach - LinkedIn engagement signal feed for B2B outbound teams" uses an em dash in metadata. "- technical founder, not an agency." uses an em dash in visible footer copy.

OVERALL VERDICT: NEEDS MINOR FIXES

---
FILE: src/app/how-it-works/page.tsx
PAGE TITLE: How It Works - Richie Reach
E-E-A-T SCORE: 8

EXPERIENCE: 8 - The page reflects hands-on workflow design with monitoring, gates, scoring, enrichment, and CRM sync.
EXPERTISE: 9 - HowTo schema and stage-level mechanics show strong technical depth.
AUTHORITATIVENESS: 7 - Authorship is not visible on the page.
TRUSTWORTHINESS: 8 - Claims are mostly process claims, though delivery timing should stay framed as service capability rather than universal guarantee.

AI SLOP DETECTED: YES
AI SLOP PATTERNS FOUND:
  - Em dash usage in metadata title and image alt.
  - No visible byline.

GOOGLE HELPFUL CONTENT ISSUES:
  - It satisfies "how does Richie Reach work" intent.
  - It has one clear topic and useful technical specificity.
  - It offers original process detail.
  - A first-hand practitioner would plausibly write it.

SPECIFIC LINES TO REWRITE: "How It Works - Richie Reach" and "Richie Reach - LinkedIn engagement signal feed for B2B outbound teams" should replace em dashes.

OVERALL VERDICT: NEEDS MINOR FIXES

---
FILE: src/app/about/page.tsx
PAGE TITLE: Richie Reach
E-E-A-T SCORE: 9

EXPERIENCE: 9 - The page explicitly states the founder built the signal capture, ICP gate, scoring, and enrichment systems in-house.
EXPERTISE: 9 - It explains the technical scope and managed-service rationale clearly.
AUTHORITATIVENESS: 9 - Organization and Person schema are present.
TRUSTWORTHINESS: 9 - It states what the product is not and avoids unsupported proof.

AI SLOP DETECTED: YES
AI SLOP PATTERNS FOUND:
  - Em dash usage in metadata title and image alt.
  - No visible byline near the title.

GOOGLE HELPFUL CONTENT ISSUES:
  - It satisfies brand disambiguation and founder-intent queries.
  - It has a single clear entity claim.
  - It provides original founder context.
  - A first-hand practitioner wrote this style of page.

SPECIFIC LINES TO REWRITE: "About Richie Reach - Signal-Led Outbound Engine, Built by Sayudh Mukherjee" should replace the em dash. Add a visible "By Sayudh Mukherjee" byline.

OVERALL VERDICT: NEEDS MINOR FIXES

---
FILE: src/app/blog/page.tsx
PAGE TITLE: Outbound Intelligence Blog
E-E-A-T SCORE: 8

EXPERIENCE: 7 - The index summarizes operational posts but does not itself show much first-hand depth.
EXPERTISE: 8 - The topics are focused on concrete outbound mechanisms.
AUTHORITATIVENESS: 7 - Authorship is implied by site identity, not visible here.
TRUSTWORTHINESS: 8 - It avoids inflated claims.

AI SLOP DETECTED: YES
AI SLOP PATTERNS FOUND:
  - Em dash usage in metadata.

GOOGLE HELPFUL CONTENT ISSUES:
  - It satisfies blog discovery intent.
  - It has a clear topic cluster.
  - It is useful as navigation, not a full answer page.
  - A practitioner could maintain this index.

SPECIFIC LINES TO REWRITE: "Outbound Intelligence Blog - Richie Reach" should replace the em dash in metadata.

OVERALL VERDICT: NEEDS MINOR FIXES

---
FILE: src/app/blog/filter-before-enrichment/page.tsx
PAGE TITLE: Why You Should Filter Before Enrichment
E-E-A-T SCORE: 8

EXPERIENCE: 8 - Uses concrete workflow economics and filter-before-enrichment mechanics.
EXPERTISE: 8 - Distinguishes hard gates, soft gates, and enrichment cost order.
AUTHORITATIVENESS: 7 - Article schema has author, but no visible byline.
TRUSTWORTHINESS: 8 - Cost examples are specific and should stay framed as worked examples.

AI SLOP DETECTED: YES
AI SLOP PATTERNS FOUND:
  - Em dash usage in metadata.
  - No visible byline.

GOOGLE HELPFUL CONTENT ISSUES:
  - It satisfies the query well.
  - It has a clear single claim.
  - It contains original operational framing and a cost example.
  - It reads like a practitioner post.

SPECIFIC LINES TO REWRITE: "Why You Should Filter Before Enrichment - Richie Reach" should replace the em dash. Add visible author byline.

OVERALL VERDICT: NEEDS MINOR FIXES

---
FILE: src/app/blog/what-is-intent-data-b2b/page.tsx
PAGE TITLE: What Is Intent Data in B2B Outbound?
E-E-A-T SCORE: 8

EXPERIENCE: 8 - Explains modeled vs behavioral intent with practical limits.
EXPERTISE: 8 - Separates account-level modeled data from person-level behavioral signals.
AUTHORITATIVENESS: 7 - Article schema has author, but no visible byline.
TRUSTWORTHINESS: 9 - It explicitly says signals are evidence, not certainty.

AI SLOP DETECTED: YES
AI SLOP PATTERNS FOUND:
  - Em dash usage in metadata.
  - No visible byline.

GOOGLE HELPFUL CONTENT ISSUES:
  - It satisfies definition and limitation intent.
  - It has a clear single topic.
  - It adds useful distinction between signal types.
  - A practitioner would write this.

SPECIFIC LINES TO REWRITE: "What Is Intent Data in B2B Outbound? - Richie Reach" should replace the em dash. Add visible author byline.

OVERALL VERDICT: NEEDS MINOR FIXES

---
FILE: src/app/blog/signal-decay-outbound/page.tsx
PAGE TITLE: Signal Decay: Why Outreach Timing Degrades Fast
E-E-A-T SCORE: 8

EXPERIENCE: 8 - Describes capture-to-send delays and weekly queue mechanics.
EXPERTISE: 8 - Explains freshness windows, recency weighting, and timing decay.
AUTHORITATIVENESS: 7 - Article schema has author, but no visible byline.
TRUSTWORTHINESS: 8 - Avoids fake precision and states signal decay is practical rather than formulaic.

AI SLOP DETECTED: YES
AI SLOP PATTERNS FOUND:
  - Em dash usage in metadata.
  - No visible byline.

GOOGLE HELPFUL CONTENT ISSUES:
  - It satisfies the timing-decay query.
  - It has a clear single claim.
  - It offers original workflow-level insight.
  - A first-hand outbound operator would plausibly write it.

SPECIFIC LINES TO REWRITE: "Signal Decay: Why Outreach Timing Degrades Fast - Richie Reach" should replace the em dash. Add visible author byline.

OVERALL VERDICT: NEEDS MINOR FIXES

---
FILE: src/app/blog/enrichment-waterfall-clay/page.tsx
PAGE TITLE: How to Build an Enrichment Waterfall in Clay
E-E-A-T SCORE: 8

EXPERIENCE: 8 - Covers actual provider sequencing and Clay conditional logic.
EXPERTISE: 9 - The waterfall explanation is concrete and implementable.
AUTHORITATIVENESS: 7 - Article schema has author, but no visible byline.
TRUSTWORTHINESS: 8 - Cost examples are clear and should remain framed as examples.

AI SLOP DETECTED: YES
AI SLOP PATTERNS FOUND:
  - Em dash usage in metadata.
  - No visible byline.

GOOGLE HELPFUL CONTENT ISSUES:
  - It satisfies how-to search intent.
  - It has a clear one-workflow focus.
  - It includes original operational setup detail.
  - A practitioner would write this.

SPECIFIC LINES TO REWRITE: "How to Build an Enrichment Waterfall in Clay - Richie Reach" should replace the em dash. Add visible author byline.

OVERALL VERDICT: NEEDS MINOR FIXES

---
FILE: src/app/blog/weekly-outbound-queue/page.tsx
PAGE TITLE: How to Build a Weekly Outbound Prospect Queue
E-E-A-T SCORE: 8

EXPERIENCE: 8 - Describes a weekly queue workflow with contact path and execution capacity.
EXPERTISE: 8 - Explains timing, queue sizing, and input criteria.
AUTHORITATIVENESS: 7 - Article schema has author, but no visible byline.
TRUSTWORTHINESS: 8 - It is clear where estimates depend on sending capacity and ICP.

AI SLOP DETECTED: YES
AI SLOP PATTERNS FOUND:
  - Em dash usage in metadata.
  - No visible byline.

GOOGLE HELPFUL CONTENT ISSUES:
  - It satisfies the weekly queue query.
  - It has a clear single claim.
  - It adds implementation detail.
  - A practitioner could write this.

SPECIFIC LINES TO REWRITE: "How to Build a Weekly Outbound Prospect Queue - Richie Reach" should replace the em dash. Add visible author byline.

OVERALL VERDICT: NEEDS MINOR FIXES

---
FILE: src/app/blog/b2b-outbound-timing-problem/page.tsx
PAGE TITLE: The B2B Outbound Timing Problem
E-E-A-T SCORE: 8

EXPERIENCE: 8 - Uses a realistic outbound timing failure mode.
EXPERTISE: 8 - Explains database freshness vs buyer-attention timing.
AUTHORITATIVENESS: 7 - Article schema has author, but no visible byline.
TRUSTWORTHINESS: 9 - It repeatedly states signals narrow timing rather than guarantee outcomes.

AI SLOP DETECTED: YES
AI SLOP PATTERNS FOUND:
  - Em dash usage in metadata.
  - No visible byline.

GOOGLE HELPFUL CONTENT ISSUES:
  - It satisfies timing-problem search intent.
  - It has one clear claim.
  - It adds a useful mental model.
  - A practitioner would write it.

SPECIFIC LINES TO REWRITE: "The B2B Outbound Timing Problem - Richie Reach" should replace the em dash. Add visible author byline.

OVERALL VERDICT: NEEDS MINOR FIXES

---
FILE: src/app/blog/cold-email-deliverability-list-quality/page.tsx
PAGE TITLE: How List Quality Affects Cold Email Deliverability
E-E-A-T SCORE: 8

EXPERIENCE: 8 - Connects list quality to bounce, spam complaints, and domain health.
EXPERTISE: 8 - Separates hard bounces, soft bounces, verification, and secondary domains.
AUTHORITATIVENESS: 7 - Article schema has author, but no visible byline.
TRUSTWORTHINESS: 8 - Mechanism-based claims are defensible, but deliverability thresholds in new content should avoid over-certainty.

AI SLOP DETECTED: YES
AI SLOP PATTERNS FOUND:
  - Em dash usage in metadata.
  - No visible byline.

GOOGLE HELPFUL CONTENT ISSUES:
  - It satisfies deliverability/list-quality intent.
  - It has a focused claim.
  - It provides useful mechanics.
  - A practitioner could write it.

SPECIFIC LINES TO REWRITE: "How List Quality Affects Cold Email Deliverability - Richie Reach" should replace the em dash. Add visible author byline.

OVERALL VERDICT: NEEDS MINOR FIXES

---
FILE: src/app/blog/icp-filtering-outbound/page.tsx
PAGE TITLE: ICP Filtering in Outbound: What It Is and Why Order Matters
E-E-A-T SCORE: 8

EXPERIENCE: 8 - Shows hands-on understanding of gates and workflow order.
EXPERTISE: 8 - Clear hard gate vs soft gate model.
AUTHORITATIVENESS: 7 - Article schema has author, but no visible byline.
TRUSTWORTHINESS: 8 - Worked cost example is specific and should remain framed as an example.

AI SLOP DETECTED: YES
AI SLOP PATTERNS FOUND:
  - Em dash usage in metadata.
  - No visible byline.

GOOGLE HELPFUL CONTENT ISSUES:
  - It satisfies the ICP filtering query.
  - It has a clear order-of-operations claim.
  - It is more specific than generic ICP content.
  - A practitioner would write it.

SPECIFIC LINES TO REWRITE: "ICP Filtering in Outbound: What It Is and Why Order Matters - Richie Reach" should replace the em dash. Add visible author byline.

OVERALL VERDICT: NEEDS MINOR FIXES

---
FILE: src/app/blog/linkedin-comment-leads-quality/page.tsx
PAGE TITLE: What Makes a Good LinkedIn Engagement Signal
E-E-A-T SCORE: 9

EXPERIENCE: 9 - The examples show real signal triage patterns.
EXPERTISE: 9 - It distinguishes activity, attention, evaluation, and scoring weights.
AUTHORITATIVENESS: 7 - Article schema has author, but no visible byline.
TRUSTWORTHINESS: 8 - Uses concrete weights that should match the actual scoring model.

AI SLOP DETECTED: YES
AI SLOP PATTERNS FOUND:
  - Em dash usage in metadata.
  - No visible byline.

GOOGLE HELPFUL CONTENT ISSUES:
  - It satisfies signal-quality intent.
  - It has a clear single claim.
  - It includes specific examples and scoring language.
  - A practitioner would write it.

SPECIFIC LINES TO REWRITE: "What Makes a Good LinkedIn Engagement Signal - Richie Reach" should replace the em dash. Add visible author byline.

OVERALL VERDICT: NEEDS MINOR FIXES

---
FILE: src/app/blog/outbound-without-spray-and-pray/page.tsx
PAGE TITLE: Outbound Without Spray and Pray
E-E-A-T SCORE: 8

EXPERIENCE: 8 - Connects list volume to enrichment, deliverability, and SDR time.
EXPERTISE: 8 - The workflow alternative is specific.
AUTHORITATIVENESS: 7 - Article schema has author, but no visible byline.
TRUSTWORTHINESS: 8 - Avoids overpromising; claims are mechanism-based.

AI SLOP DETECTED: YES
AI SLOP PATTERNS FOUND:
  - Em dash usage in metadata.
  - No visible byline.

GOOGLE HELPFUL CONTENT ISSUES:
  - It satisfies the anti-spray-and-pray query.
  - It has a clear single claim.
  - It explains operational costs rather than generic advice.
  - A practitioner could write it.

SPECIFIC LINES TO REWRITE: "Outbound Without Spray and Pray - Richie Reach" should replace the em dash. Add visible author byline.

OVERALL VERDICT: NEEDS MINOR FIXES

---
FILE: src/app/what-is-signal-led-outbound/page.tsx
PAGE TITLE: What Is Signal-Led Outbound?
E-E-A-T SCORE: 8

EXPERIENCE: 8 - Shows practical signal examples and what signals do not mean.
EXPERTISE: 8 - Clear distinction between list-based and signal-led outbound.
AUTHORITATIVENESS: 7 - WebPage schema exists, but visible byline is missing.
TRUSTWORTHINESS: 9 - It avoids guarantee language and states uncertainty directly.

AI SLOP DETECTED: YES
AI SLOP PATTERNS FOUND:
  - Em dash usage in metadata.
  - No visible byline.

GOOGLE HELPFUL CONTENT ISSUES:
  - It satisfies definition intent.
  - It has a clear single claim.
  - It adds examples and limitations.
  - A practitioner could write it.

SPECIFIC LINES TO REWRITE: "What Is Signal-Led Outbound? - Richie Reach" should replace the em dash. Add visible author byline.

OVERALL VERDICT: NEEDS MINOR FIXES

---
FILE: src/app/linkedin-engagement-leads/page.tsx
PAGE TITLE: LinkedIn Engagement Leads: What They Are and When They Work
E-E-A-T SCORE: 8

EXPERIENCE: 8 - It explains signal capture, noise, and filter order.
EXPERTISE: 8 - Good comments vs low-signal activity are clearly separated.
AUTHORITATIVENESS: 7 - Visible byline is missing.
TRUSTWORTHINESS: 9 - It says engagement does not mean someone is a buyer.

AI SLOP DETECTED: YES
AI SLOP PATTERNS FOUND:
  - Em dash usage in metadata.
  - No visible byline.

GOOGLE HELPFUL CONTENT ISSUES:
  - It satisfies LinkedIn engagement leads intent.
  - It has one clear concept.
  - It includes useful operational filters.
  - A practitioner could write it.

SPECIFIC LINES TO REWRITE: "LinkedIn Engagement Leads: What They Are and When They Work - Richie Reach" should replace the em dash. Add visible author byline.

OVERALL VERDICT: NEEDS MINOR FIXES

---
FILE: src/app/richie-reach-vs-static-databases/page.tsx
PAGE TITLE: Signal-Led Outbound vs Static Databases
E-E-A-T SCORE: 8

EXPERIENCE: 8 - Shows practical tradeoffs between database pulls and signal feeds.
EXPERTISE: 8 - Uses timing, context, and volume/relevance tradeoff clearly.
AUTHORITATIVENESS: 7 - Visible byline is missing.
TRUSTWORTHINESS: 9 - It states signal-led outbound produces fewer records and is not always the best fit.

AI SLOP DETECTED: YES
AI SLOP PATTERNS FOUND:
  - Em dash usage in metadata.
  - No visible byline.

GOOGLE HELPFUL CONTENT ISSUES:
  - It satisfies comparison intent.
  - It has a clear comparison topic.
  - It provides useful tradeoff framing.
  - A practitioner could write it.

SPECIFIC LINES TO REWRITE: "Signal-Led Outbound vs Static Databases - Richie Reach" should replace the em dash. Add visible author byline.

OVERALL VERDICT: NEEDS MINOR FIXES

---
FILE: src/app/for-agencies/page.tsx
PAGE TITLE: Richie Reach for Outbound Agencies
E-E-A-T SCORE: 7

EXPERIENCE: 7 - Agency usage patterns are plausible and operational.
EXPERTISE: 7 - It covers white-label delivery and client input quality.
AUTHORITATIVENESS: 7 - Visible byline is missing.
TRUSTWORTHINESS: 8 - Avoids guarantees and names situations where it does not work.

AI SLOP DETECTED: YES
AI SLOP PATTERNS FOUND:
  - Em dash usage in metadata.
  - No visible byline.

GOOGLE HELPFUL CONTENT ISSUES:
  - It satisfies the agency landing-page intent.
  - It has a clear audience.
  - It could be stronger with a concrete example, but does not need one before deploy.
  - A practitioner could write it.

SPECIFIC LINES TO REWRITE: "Richie Reach for Outbound Agencies - White-Label Signal Feeds" should replace the em dash. Add visible author byline.

OVERALL VERDICT: NEEDS MINOR FIXES

---
FILE: src/app/for-sdr-teams/page.tsx
PAGE TITLE: Richie Reach for SDR Teams
E-E-A-T SCORE: 7

EXPERIENCE: 7 - It reflects SDR queue and deliverability pain.
EXPERTISE: 7 - It explains workflow connection and queue criteria.
AUTHORITATIVENESS: 7 - Visible byline is missing.
TRUSTWORTHINESS: 7 - "500 targeted beats 5,000 generic" is directionally reasonable but should be read as a principle, not a universal benchmark.

AI SLOP DETECTED: YES
AI SLOP PATTERNS FOUND:
  - Em dash usage in metadata.
  - No visible byline.

GOOGLE HELPFUL CONTENT ISSUES:
  - It satisfies SDR team search intent.
  - It has a clear audience.
  - It could use a qualification line around numeric example, but does not require a rewrite.
  - A practitioner could write it.

SPECIFIC LINES TO REWRITE: "Richie Reach for SDR Teams - Weekly Signal-Fresh Prospect Queue" should replace the em dash. Add visible author byline.

OVERALL VERDICT: NEEDS MINOR FIXES

---
FILE: src/app/for-saas/page.tsx
PAGE TITLE: Richie Reach for B2B SaaS Teams
E-E-A-T SCORE: 8

EXPERIENCE: 8 - Captures SaaS timing and buying committee dynamics.
EXPERTISE: 8 - Explains current attention vs prediction clearly.
AUTHORITATIVENESS: 7 - Visible byline is missing.
TRUSTWORTHINESS: 9 - It says the product is not a crystal ball and does not generate inbound.

AI SLOP DETECTED: YES
AI SLOP PATTERNS FOUND:
  - Em dash usage in metadata.
  - No visible byline.

GOOGLE HELPFUL CONTENT ISSUES:
  - It satisfies SaaS use-case intent.
  - It has a clear audience.
  - It includes practical limits.
  - A practitioner could write it.

SPECIFIC LINES TO REWRITE: "Richie Reach for B2B SaaS Teams - Signal Timing for Long Sales Cycles" should replace the em dash. Add visible author byline.

OVERALL VERDICT: NEEDS MINOR FIXES

---
FILE: src/app/integrations/clay/page.tsx
PAGE TITLE: Richie Reach and Clay
E-E-A-T SCORE: 9

EXPERIENCE: 9 - Lists concrete fields and Clay routing patterns.
EXPERTISE: 9 - Strong integration-level specificity.
AUTHORITATIVENESS: 7 - Visible byline is missing.
TRUSTWORTHINESS: 9 - Describes setup and fields without inflated claims.

AI SLOP DETECTED: YES
AI SLOP PATTERNS FOUND:
  - Em dash usage in metadata.
  - No visible byline.

GOOGLE HELPFUL CONTENT ISSUES:
  - It satisfies Clay integration intent.
  - It has a clear single topic.
  - It includes original field-level details.
  - A practitioner would write it.

SPECIFIC LINES TO REWRITE: "Richie Reach and Clay - Signal Leads Delivered Into Clay Tables" should replace the em dash. Add visible author byline.

OVERALL VERDICT: NEEDS MINOR FIXES

---
FILE: src/app/integrations/hubspot/page.tsx
PAGE TITLE: Richie Reach and HubSpot
E-E-A-T SCORE: 9

EXPERIENCE: 9 - Lists CRM fields and attribution loop.
EXPERTISE: 9 - Strong HubSpot mapping specificity.
AUTHORITATIVENESS: 7 - Visible byline is missing.
TRUSTWORTHINESS: 9 - Avoids overclaiming and explains dedupe behavior.

AI SLOP DETECTED: YES
AI SLOP PATTERNS FOUND:
  - Em dash usage in metadata.
  - No visible byline.

GOOGLE HELPFUL CONTENT ISSUES:
  - It satisfies HubSpot integration intent.
  - It has a clear single topic.
  - It includes useful implementation detail.
  - A practitioner would write it.

SPECIFIC LINES TO REWRITE: "Richie Reach and HubSpot - Signal Metadata Synced to CRM" should replace the em dash. Add visible author byline.

OVERALL VERDICT: NEEDS MINOR FIXES

---
FILE: src/app/methodology/page.tsx
PAGE TITLE: How Richie Reach Works: The Full Methodology
E-E-A-T SCORE: 9

EXPERIENCE: 9 - Shows full pipeline from signal capture to feedback loop.
EXPERTISE: 9 - Contains scoring thresholds, waterfall design, fields, and delivery logic.
AUTHORITATIVENESS: 7 - Visible byline is missing.
TRUSTWORTHINESS: 8 - Numeric thresholds and match-rate claims must match the operating model.

AI SLOP DETECTED: YES
AI SLOP PATTERNS FOUND:
  - Em dash usage in section titles.
  - No visible byline.

GOOGLE HELPFUL CONTENT ISSUES:
  - It satisfies methodology intent.
  - It has a clear technical scope.
  - It contains original system details.
  - A practitioner would write it.

SPECIFIC LINES TO REWRITE: "Stage 1 - Signal Capture" through "Stage 7 - CRM Sync and Feedback Loop" should replace em dashes. Add visible author byline.

OVERALL VERDICT: NEEDS MINOR FIXES

---
FILE: src/app/pricing/page.tsx
PAGE TITLE: How Richie Reach Pricing Works
E-E-A-T SCORE: 8

EXPERIENCE: 8 - Explains real pricing variables and pilot process.
EXPERTISE: 8 - Separates ICP complexity, signal volume, cadence, and service tier.
AUTHORITATIVENESS: 7 - Visible byline is missing.
TRUSTWORTHINESS: 9 - Honest about no fixed pricing and no free tier.

AI SLOP DETECTED: YES
AI SLOP PATTERNS FOUND:
  - Em dash usage in metadata.
  - No visible byline.

GOOGLE HELPFUL CONTENT ISSUES:
  - It satisfies pricing intent despite no public plan.
  - It has a clear single topic.
  - It explains the operating variables.
  - A practitioner could write it.

SPECIFIC LINES TO REWRITE: "How Richie Reach Pricing Works - No Published Plans" should replace the em dash. Add visible author byline.

OVERALL VERDICT: NEEDS MINOR FIXES

## Summary Table

| File | E-E-A-T Score | AI Slop | Verdict |
|------|---------------|---------|---------|
| src/app/page.tsx | 8 | YES | NEEDS MINOR FIXES |
| src/app/how-it-works/page.tsx | 8 | YES | NEEDS MINOR FIXES |
| src/app/about/page.tsx | 9 | YES | NEEDS MINOR FIXES |
| src/app/blog/page.tsx | 8 | YES | NEEDS MINOR FIXES |
| src/app/blog/filter-before-enrichment/page.tsx | 8 | YES | NEEDS MINOR FIXES |
| src/app/blog/what-is-intent-data-b2b/page.tsx | 8 | YES | NEEDS MINOR FIXES |
| src/app/blog/signal-decay-outbound/page.tsx | 8 | YES | NEEDS MINOR FIXES |
| src/app/blog/enrichment-waterfall-clay/page.tsx | 8 | YES | NEEDS MINOR FIXES |
| src/app/blog/weekly-outbound-queue/page.tsx | 8 | YES | NEEDS MINOR FIXES |
| src/app/blog/b2b-outbound-timing-problem/page.tsx | 8 | YES | NEEDS MINOR FIXES |
| src/app/blog/cold-email-deliverability-list-quality/page.tsx | 8 | YES | NEEDS MINOR FIXES |
| src/app/blog/icp-filtering-outbound/page.tsx | 8 | YES | NEEDS MINOR FIXES |
| src/app/blog/linkedin-comment-leads-quality/page.tsx | 9 | YES | NEEDS MINOR FIXES |
| src/app/blog/outbound-without-spray-and-pray/page.tsx | 8 | YES | NEEDS MINOR FIXES |
| src/app/what-is-signal-led-outbound/page.tsx | 8 | YES | NEEDS MINOR FIXES |
| src/app/linkedin-engagement-leads/page.tsx | 8 | YES | NEEDS MINOR FIXES |
| src/app/richie-reach-vs-static-databases/page.tsx | 8 | YES | NEEDS MINOR FIXES |
| src/app/for-agencies/page.tsx | 7 | YES | NEEDS MINOR FIXES |
| src/app/for-sdr-teams/page.tsx | 7 | YES | NEEDS MINOR FIXES |
| src/app/for-saas/page.tsx | 8 | YES | NEEDS MINOR FIXES |
| src/app/integrations/clay/page.tsx | 9 | YES | NEEDS MINOR FIXES |
| src/app/integrations/hubspot/page.tsx | 9 | YES | NEEDS MINOR FIXES |
| src/app/methodology/page.tsx | 9 | YES | NEEDS MINOR FIXES |
| src/app/pricing/page.tsx | 8 | YES | NEEDS MINOR FIXES |

## Priority Fix List

1. Files that need major rewrite (block deployment)

None.

2. Files that need minor fixes (fix before deploy)

All audited files need at least one minor fix: visible bylines for blog/support content, em dash cleanup in metadata/content strings, and removal of remaining buzzword language in hidden or visible site strings.

3. Files that are deploy-ready

After the minor fixes above, the content can be deployment-ready. The highest-value next additions are top-of-funnel posts and comparison/workflow posts that target searches around cold email replies, Apollo vs intent, Trigify vs Clay, LinkedIn prospecting without paid tools, and HubSpot attribution.
