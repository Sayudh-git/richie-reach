import { base, heading, serif, mono } from "@/constants";
import "@/styles/globals.css";
import { cn, generateMetadata } from "@/utils";
import Providers from "@/components/global/providers";
import FlareCursor from "@/components/global/flare-cursor";
import LoadingScreen from "@/components/global/loading-screen";
import SmoothScroll from "@/components/global/smooth-scroll";
import Script from "next/script";

import Footer from "@/components/marketing/footer";
import Navbar from "@/components/marketing/navbar";

export const metadata = generateMetadata();

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <link rel="llms" href="/llms.txt" />
                <link rel="llms-full" href="/llms-full.txt" />
            </head>
            <body
                className={cn(
                    "min-h-dvh bg-background text-foreground font-base antialiased overflow-x-hidden dark",
                    base.variable,
                    heading.variable,
                    serif.variable,
                    mono.variable,
                )}
            >
                {/* JSON-LD Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify([
                            {
                                "@context": "https://schema.org",
                                "@type": "Organization",
                                "name": "Richie Reach",
                                "url": "https://richiereach.tech",
                                "logo": "https://richiereach.tech/icons/icon.svg",
                                "description": "LinkedIn engagement leads for outbound teams. ICP-filtered, enriched, and delivered weekly.",
                                "email": "hello@richiereach.com"
                            },
                            {
                                "@context": "https://schema.org",
                                "@type": "WebApplication",
                                "name": "Richie Reach",
                                "url": "https://richiereach.tech",
                                "applicationCategory": "BusinessApplication",
                                "operatingSystem": "Web",
                                "description": "Find active leads from LinkedIn post engagement. ICP-filtered, enriched, and delivered weekly to your outbound stack.",
                                "offers": {
                                    "@type": "Offer",
                                    "price": "0",
                                    "priceCurrency": "USD",
                                    "description": "Free pilot available — 7-day trial to validate fit"
                                },
                                "featureList": [
                                    "LinkedIn engagement signal monitoring",
                                    "ICP filtering before enrichment",
                                    "Waterfall enrichment via Clay and Prospeo",
                                    "Weekly delivery via CSV, Clay, or webhook",
                                    "Integration with Smartlead, Lemlist, HubSpot, Salesforce",
                                    "No LinkedIn account access required",
                                    "Suppression list management"
                                ]
                            },
                            {
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
                                            "text": "No. We're a signal feed service, not a scraping tool. We deliver processed, ICP-filtered, enriched prospect lists. The technical implementation is managed on our side, and we prioritize responsible data practices."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "What about data freshness?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Signals decay fast. We deliver weekly queues within 24 hours of signal capture. This isn't a static database where contacts are months old. Freshness is the primary advantage."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Do you handle opt-outs?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Yes. We maintain suppression lists and respect opt-out requests. If someone asks to be removed, they're removed from future deliveries."
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
                                        "name": "What's your pricing?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Pricing depends on volume, ICP complexity, and whether you want just the signal feed or full GTME service. We start with a pilot to validate fit before discussing long-term pricing. Book a call to discuss your specific needs."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "How do I get started?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Book a 20-minute call. We'll discuss your ICP, keywords, and signal themes. If it's a fit, we'll run a 7-day pilot to deliver a sample feed. No long-term commitment required to test."
                                        }
                                    }
                                ]
                            },
                            {
                                "@context": "https://schema.org",
                                "@type": "BreadcrumbList",
                                "itemListElement": [
                                    {
                                        "@type": "ListItem",
                                        "position": 1,
                                        "name": "Home",
                                        "item": "https://richiereach.tech"
                                    }
                                ]
                            }
                        ])
                    }}
                />
                <Providers>
                    <LoadingScreen />
                    <FlareCursor />
                    <SmoothScroll>
                        <div className="noise-overlay" aria-hidden="true" />
                        <main className="w-full relative">
                            <Navbar />
                            {children}
                            <Footer />
                        </main>
                    </SmoothScroll>
                </Providers>
                <Script
                    id="cal-embed"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
                        (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
                        Cal("init", "15min", {origin:"https://app.cal.com"});
                        Cal.ns["15min"]("ui", {"cssVarsPerTheme":{"light":{"cal-brand":"#18181b"},"dark":{"cal-brand":"#00ff88"}},"hideEventTypeDetails":false,"layout":"month_view"});
                        `
                    }}
                />
            </body>
        </html >
    );
};
