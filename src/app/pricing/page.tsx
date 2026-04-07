import { generateMetadata as baseGenerateMetadata } from "@/utils/metadata";

import {
    SupportPageLayout,
    SupportPageSection,
} from "@/components/support-pages/support-page-layout";

export const metadata = baseGenerateMetadata({
    title: "How Richie Reach Pricing Works - No Published Plans",
    description:
        "Richie Reach pricing is scoped to ICP complexity, signal volume, delivery cadence, and service tier. No fixed plans. Starts with a 7-day pilot.",
    canonical: "https://www.richiereach.tech/pricing",
    openGraphTitle: "How Richie Reach Pricing Works",
    keywords:
        "Richie Reach pricing, signal feed pricing, managed outbound pricing, B2B signal intelligence cost",
});

export default function PricingPage() {
    return (
        <SupportPageLayout
            label="Pricing"
            title="How Richie Reach Pricing Works"
            intro={
                <p>
                    There is no published pricing plan. Pricing is scoped to four variables.
                </p>
            }
            ctaHeading="Talk to the founder"
            ctaSubtext="20-minute call to discuss what a scoped pilot would look like for your ICP."
        >
            <SupportPageSection title="What affects the price">
                <ol className="list-decimal space-y-5 pl-6">
                    <li>
                        <p className="font-semibold text-foreground">ICP complexity</p>
                        <p>
                            How many filter dimensions your ICP requires. A simple ICP (one geo, one role tier, one industry) costs less to operate than a complex multi-dimensional ICP with many exclusion rules.
                        </p>
                    </li>
                    <li>
                        <p className="font-semibold text-foreground">Signal volume</p>
                        <p>
                            How many keyword themes you monitor and how much engagement those themes generate weekly. Higher-volume themes produce more records per run.
                        </p>
                    </li>
                    <li>
                        <p className="font-semibold text-foreground">Delivery cadence</p>
                        <p>
                            Weekly delivery is standard. Daily delivery for higher-volume clients is available at a different price point.
                        </p>
                    </li>
                    <li>
                        <p className="font-semibold text-foreground">Service tier</p>
                        <p>
                            Three tiers: signal feed only (you manage Clay and sending), signal feed plus Clay routing (we manage delivery into your sending tool), managed outbound (we run signal capture through to reply handling).
                        </p>
                    </li>
                </ol>
            </SupportPageSection>

            <SupportPageSection title="How we scope pricing">
                <p>
                    We do not quote before understanding your ICP, themes, and current outbound setup. Most conversations start with a pilot: a 7-day sample run that validates signal volume in your category and confirms ICP match rate before committing to a monthly scope.
                </p>
                <p>
                    After the pilot, pricing is set based on what the actual run costs to operate at your volume and complexity.
                </p>
            </SupportPageSection>

            <SupportPageSection title="What we do not do">
                <ul className="list-disc space-y-2 pl-6">
                    <li>We do not charge per lead or per record. That pricing structure creates the wrong incentive: more records, not better records.</li>
                    <li>We do not offer a self-serve plan or a free tier. The pilot is the validation step.</li>
                    <li>We do not publish plans because ICP complexity and signal volume vary too much for a fixed-tier structure to be honest.</li>
                </ul>
            </SupportPageSection>
        </SupportPageLayout>
    );
}
