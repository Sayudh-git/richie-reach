import Wrapper from "@/components/global/wrapper";
import { Button } from "@/components/ui/button";
import { generateMetadata as baseGenerateMetadata } from "@/utils/metadata";

const description =
    "Richie Reach is a B2B signal intelligence service built by Sayudh Mukherjee. It captures public LinkedIn engagement, filters to ICP, and delivers a weekly qualified prospect feed for outbound teams.";

export const metadata = baseGenerateMetadata({
    title: "About Richie Reach - Signal-Led Outbound Engine, Built by Sayudh Mukherjee",
    description,
    canonical: "https://www.richiereach.tech/about",
    openGraphTitle: "About Richie Reach",
    openGraphDescription: description,
    keywords:
        "Richie Reach, Sayudh Mukherjee, signal-led outbound, B2B outbound engine, LinkedIn signal feed, technical founder",
    image: "https://www.richiereach.tech/images/hero-image.jpg",
    imageAlt: "Richie Reach - LinkedIn engagement signal feed for B2B outbound teams",
    imageWidth: 1344,
    imageHeight: 768,
});

const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Richie Reach",
    alternateName: "Richie Reach Signal Feed",
    url: "https://www.richiereach.tech",
    logo: "https://www.richiereach.tech/logo.png",
    email: "hello@richiereach.com",
    description:
        "Richie Reach is a B2B signal intelligence service. It captures public LinkedIn engagement around client-defined keyword themes, filters prospects to ICP before enrichment, and delivers a weekly qualified prospect feed into Clay, HubSpot, CSV, or webhook. Built and operated by Sayudh Mukherjee.",
    founder: {
        "@type": "Person",
        name: "Sayudh Mukherjee",
        jobTitle: "Technical Founder",
        url: "https://www.richiereach.tech/about",
        email: "hello@richiereach.com",
    },
    foundingDate: "2025",
    numberOfEmployees: { "@type": "QuantitativeValue", value: 1 },
    knowsAbout: [
        "B2B outbound sales",
        "LinkedIn engagement signal monitoring",
        "Signal-led outbound",
        "ICP filtering before enrichment",
        "Prospect enrichment waterfall",
        "Clay integration",
        "HubSpot CRM sync",
        "Outbound prospect queue design",
    ],
    areaServed: ["US", "CA", "GB", "AU"],
    sameAs: [],
};

const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sayudh Mukherjee",
    jobTitle: "Technical Founder",
    worksFor: {
        "@type": "Organization",
        name: "Richie Reach",
        url: "https://www.richiereach.tech",
    },
    url: "https://www.richiereach.tech/about",
    email: "hello@richiereach.com",
    knowsAbout: [
        "B2B outbound systems",
        "LinkedIn signal intelligence",
        "Signal-led outbound",
        "Outbound pipeline engineering",
        "ICP filtering",
        "Enrichment waterfall design",
    ],
};

export default function AboutPage() {
    return (
        <section className="bg-[#0A0A0A] py-28 md:py-32">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
            />
            <Wrapper>
                <article className="mx-auto max-w-3xl">
                    <p className="section-label mb-4">About</p>
                    <h1 className="text-4xl text-foreground md:text-5xl">
                        Richie Reach
                    </h1>
                    <p className="mt-4 text-[12px] text-muted-foreground">
                        By Sayudh Mukherjee
                    </p>
                    <p className="mt-8 text-[17px] leading-8 text-muted-foreground">
                        A signal-led outbound engine for B2B sales teams. Built by a technical
                        founder, not assembled from off-the-shelf parts.
                    </p>

                    <div className="mt-14 space-y-14">
                        <section className="space-y-5">
                            <h2 className="text-2xl text-foreground md:text-3xl">
                                What Richie Reach does
                            </h2>
                            <div className="space-y-5 text-[17px] leading-8 text-muted-foreground">
                                <p>
                                    Richie Reach captures public category engagement around your keyword
                                    themes, filters prospects to your ICP before enrichment, and delivers
                                    a weekly qualified prospect feed into your existing outbound stack.
                                </p>
                                <p>
                                    The core design principle is filter-first. ICP filtering runs before
                                    enrichment, which means you only pay to enrich contacts who already
                                    passed your criteria. Most outbound stacks do this backwards: enrich
                                    everything, filter later, discard the waste.
                                </p>
                                <p>
                                    Delivery is via Clay table, CSV, or webhook to Smartlead, Lemlist,
                                    Instantly, HubSpot, or a custom endpoint. Signal metadata travels with
                                    every record so outreach openers have a real reference point.
                                </p>
                            </div>
                        </section>

                        <section className="space-y-5">
                            <h2 className="text-2xl text-foreground md:text-3xl">
                                Who built it
                            </h2>
                            <div className="space-y-5 text-[17px] leading-8 text-muted-foreground">
                                <p>
                                    My name is Sayudh Mukherjee. I am the technical founder of Richie Reach.
                                    I built the signal capture infrastructure, the ICP gate logic, the
                                    classification and scoring pipeline, and the enrichment waterfall
                                    in-house. This is not a resold data product or a white-labeled tool
                                    wrapped in an agency layer.
                                </p>
                                <p>
                                    The reason I built it as a managed service rather than a self-serve
                                    product is that the signal-to-pipeline workflow has too many variables
                                    to work well out of the box. ICP definition, keyword theme selection,
                                    enrichment fallback logic, and scoring thresholds all need to be
                                    calibrated per client. A managed layer is the honest way to deliver
                                    this at a quality I can stand behind.
                                </p>
                            </div>
                        </section>

                        <section className="space-y-5">
                            <h2 className="text-2xl text-foreground md:text-3xl">
                                What Richie Reach is not
                            </h2>
                            <div className="space-y-5 text-[17px] leading-8 text-muted-foreground">
                                <p>
                                    It is not a LinkedIn automation tool. It does not send messages or
                                    manage accounts on your behalf.
                                </p>
                                <p>
                                    It is not a static contact database. It does not sell rows from a
                                    static list.
                                </p>
                                <p>
                                    It is not a self-serve SaaS product. There is no login, no trial,
                                    no free tier. The engagement starts with a conversation.
                                </p>
                            </div>
                        </section>

                        <section className="space-y-5">
                            <h2 className="text-2xl text-foreground md:text-3xl">
                                Contact
                            </h2>
                            <div className="space-y-5 text-[17px] leading-8 text-muted-foreground">
                                <p>Email: hello@richiereach.com</p>
                                <p>
                                    For a 20-minute call to discuss your ICP and signal themes:
                                </p>
                                <Button
                                    className="h-12 rounded-full bg-white px-8 text-base font-semibold text-black hover:bg-gray-200"
                                    data-cal-link="sayudh/15min"
                                    data-cal-namespace="15min"
                                    data-cal-config='{"layout":"month_view"}'
                                >
                                    Book a Call
                                </Button>
                            </div>
                        </section>
                    </div>
                </article>
            </Wrapper>
        </section>
    );
}
