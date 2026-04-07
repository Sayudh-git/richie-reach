import { generateMetadata } from "@/utils";
import Background from "@/components/global/background";
import Difference from "@/components/marketing/difference";
import Hero from "@/components/marketing/hero";
// import ComparisonTable from "@/components/marketing/comparison-table"; // REMOVED: Phase 1
// import Hero from "@/components/marketing/hero";
import Workflow from "@/components/marketing/workflow";
import Capibilities from "@/components/marketing/capibilities";
import Integrations from "@/components/marketing/integrations";
import WhoItsFor from "@/components/marketing/who-its-for";
import FAQ from "@/components/marketing/faq";
import Cta from "@/components/marketing/cta";
// import ComparisonTable from "@/components/marketing/comparison-table"; // REMOVED: Phase 1
// import Socials from "@/components/marketing/socials"; // HIDDEN: Phase 1 - Logo grid section
// import WallOfLove from "@/components/marketing/wall-of-love"; // HIDDEN: Phase 1 - Testimonials section

export const metadata = generateMetadata({
    title: "Find Active LinkedIn Leads | Richie Reach",
    description:
        "Richie Reach captures public LinkedIn engagement signals, filters prospects to your ICP before enrichment, and delivers a fresh qualified prospect feed into Clay, HubSpot, or your outbound tools every week.",
    canonical: "https://www.richiereach.tech",
    keywords:
        "LinkedIn engagement leads, signal-led outbound, B2B prospect feed, ICP filtering, enrichment waterfall, LinkedIn signal monitoring, outbound prospect queue, Clay integration, Richie Reach",
    image: "https://www.richiereach.tech/images/hero-image.jpg",
    imageAlt: "Richie Reach - LinkedIn engagement signal feed for B2B outbound teams",
    imageWidth: 1344,
    imageHeight: 768,
});

const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Richie Reach",
    "url": "https://www.richiereach.tech",
    "logo": "https://www.richiereach.tech/logo.png",
    "email": "hello@richiereach.com",
    "description": "Richie Reach is a signal-led outbound engine that captures public LinkedIn engagement, filters prospects to your ICP before enrichment, and delivers qualified prospect feeds into Clay, HubSpot, or outbound tools within 24 hours.",
    "founder": {
        "@type": "Person",
        "name": "Sayudh Mukherjee",
        "jobTitle": "Technical Founder"
    },
    "knowsAbout": [
        "B2B outbound sales",
        "LinkedIn engagement signals",
        "Signal-led outbound",
        "ICP filtering",
        "Outbound prospect enrichment"
    ],
    "sameAs": []
};

const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Richie Reach",
    "url": "https://www.richiereach.tech",
    "description": "Signal-led outbound engine for B2B teams. Captures public LinkedIn engagement, filters to ICP, delivers weekly qualified prospect feed.",
    "publisher": {
        "@type": "Organization",
        "name": "Richie Reach"
    }
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "How do you capture signals?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "We monitor public engagement on LinkedIn. Comments, reactions, and posts around your keywords and themes. No client account access required. We focus on public web information and respect suppression lists."
            }
        },
        {
            "@type": "Question",
            "name": "Is this just LinkedIn scraping?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. We are a signal feed service, not a scraping tool. We deliver processed, ICP-filtered, enriched prospect lists. The technical implementation is managed on our side, and we prioritize responsible data practices."
            }
        },
        {
            "@type": "Question",
            "name": "What about data freshness?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Signals decay fast. We deliver weekly queues within 24 hours of signal capture. This is not a static database where contacts are months old. Freshness is the primary advantage."
            }
        },
        {
            "@type": "Question",
            "name": "Do you handle opt-outs?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. We maintain suppression lists and respect opt-out requests. If someone asks to be removed, they are removed from future deliveries."
            }
        },
        {
            "@type": "Question",
            "name": "What integrations do you support?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "We deliver via CSV download, Clay table, or direct webhook to Smartlead, Lemlist, Instantly, HubSpot, and others. Need a custom integration? We build it."
            }
        },
        {
            "@type": "Question",
            "name": "How is this different from tools?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Tools require operators. We can be the full system. Signal capture, ICP filtering, enrichment, and delivery. Or just the upstream signal feed. You choose the level of involvement."
            }
        },
        {
            "@type": "Question",
            "name": "What is your pricing?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Pricing depends on volume, ICP complexity, and whether you want just the signal feed or full managed outbound service. We start with a pilot to validate fit before discussing long-term pricing. Book a call to discuss your specific needs."
            }
        },
        {
            "@type": "Question",
            "name": "How do I get started?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Book a 20-minute call. We will discuss your ICP, keywords, and signal themes. If it is a fit, we will run a 7-day pilot to deliver a sample feed. No long-term commitment required to test."
            }
        }
    ]
};

const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Richie Reach",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "url": "https://www.richiereach.tech",
    "description": "A signal-led outbound engine for B2B teams. Captures public LinkedIn engagement around target keywords, filters to ICP before enrichment, and delivers a qualified prospect feed into Clay, HubSpot, CSV, or webhooks within 24 hours.",
    "offers": {
        "@type": "Offer",
        "description": "Pricing is scoped to ICP complexity, signal volume, delivery cadence, and service tier. Starts with a 7-day pilot."
    },
    "featureList": [
        "Public LinkedIn engagement signal capture",
        "ICP filtering before enrichment",
        "AI behavioral intent classification",
        "Composite prospect scoring",
        "Enrichment waterfall via Prospeo, Apollo, and Hunter",
        "Clay table, CSV, and webhook delivery",
        "HubSpot CRM sync with signal attribution"
    ],
    "author": {
        "@type": "Person",
        "name": "Sayudh Mukherjee"
    }
};

const HomePage = () => {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
            />
            <div className="min-h-screen">
                <Hero />
                <Difference />
                <Workflow />
                <Capibilities />
                <Integrations />
                {/* <Socials /> */} {/* HIDDEN: Phase 1 - Logo grid "Works with" */}
                {/* <ComparisonTable /> */} {/* REMOVED: Phase 1 - "Why Database is a Dirty Word" section */}
                {/* <WallOfLove /> */} {/* HIDDEN: Phase 1 - Testimonials section */}
                <WhoItsFor /> {/* NEW: Phase 3 - "Who It's For" section */}
                <FAQ /> {/* NEW: Phase 3 - FAQ section */}
                <Cta />
            </div>
        </>
    );
};

export default HomePage;
