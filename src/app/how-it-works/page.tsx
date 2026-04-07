import { generateMetadata as baseGenerateMetadata } from '@/utils/metadata'

import ScrollProgress from '@/components/how-it-works/ScrollProgress'
import ScrollToTop from '@/components/how-it-works/ScrollToTop'
import Section1 from '@/components/how-it-works/sections/Section1'
import Section2 from '@/components/how-it-works/sections/Section2'
import Section3 from '@/components/how-it-works/sections/Section3'
import Section4 from '@/components/how-it-works/sections/Section4'
import Section5 from '@/components/how-it-works/sections/Section5'
import Section6 from '@/components/how-it-works/sections/Section6'
import Section7 from '@/components/how-it-works/sections/Section7'
import Section8 from '@/components/how-it-works/sections/Section8'
import Section9 from '@/components/how-it-works/sections/Section9'
import Section10 from '@/components/how-it-works/sections/Section10'
import Section11 from '@/components/how-it-works/sections/Section11'
import SampleDeliverySection from '@/components/how-it-works/sections/SampleDeliverySection'
import Section12 from '@/components/how-it-works/sections/Section12'
import Section13 from '@/components/how-it-works/sections/Section13'
import CalculatorSection from '@/components/how-it-works/sections/CalculatorSection'
import Section14Cta from '@/components/how-it-works/sections/Section14Cta'

export const metadata = baseGenerateMetadata({
  title: 'How It Works - Richie Reach',
  description: 'Nine-stage pipeline: LinkedIn engagement signal capture, ICP filtering before enrichment, AI intent classification, composite scoring, enrichment waterfall, and weekly delivery into Clay, HubSpot, or your outbound stack within 24 hours.',
  canonical: 'https://www.richiereach.tech/how-it-works',
  keywords: 'how Richie Reach works, LinkedIn signal pipeline, ICP gate before enrichment, AI intent classification, composite prospect scoring, enrichment waterfall Clay, HubSpot CRM sync, signal-to-pipeline',
  image: 'https://www.richiereach.tech/images/hero-image.jpg',
  imageAlt: 'Richie Reach - LinkedIn engagement signal feed for B2B outbound teams',
  imageWidth: 1344,
  imageHeight: 768,
})

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How Richie Reach Turns LinkedIn Engagement Into a Qualified Prospect Feed",
  "description": "A nine-stage pipeline that captures public LinkedIn engagement, filters it to your ICP before enrichment, classifies behavioral intent, scores records, enriches verified contact data, and delivers a weekly prospect feed into your outbound stack.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Signal Monitor",
      "text": "A cron-based monitor polls public LinkedIn engagement around client-defined keyword themes every 4 hours. Each captured event includes the profile URL, engagement type, post context, and timestamp. Deduplication runs on a LinkedIn URN hash."
    },
    {
      "@type": "HowToStep",
      "name": "ICP Gate",
      "text": "Records enter the ICP gate before any enrichment spend. Hard gates on title, geography, or company size drop non-matching records immediately. Soft gates score records lower. Only records that pass enter enrichment."
    },
    {
      "@type": "HowToStep",
      "name": "AI Classification",
      "text": "An AI model reads the engagement text and assigns a behavioral intent class: evaluating, active_buyer, category_engaged, surface_engagement, or disqualified. The class determines which outreach copy framework is used in the next stage."
    },
    {
      "@type": "HowToStep",
      "name": "Composite Scoring",
      "text": "Records are scored from 0.00 to 1.00 based on engagement class weight, ICP fit score, signal recency, and engagement depth. Records scoring below 0.52 are not delivered and not enriched."
    },
    {
      "@type": "HowToStep",
      "name": "Enrichment Waterfall",
      "text": "Only records that clear the ICP gate and score at or above 0.52 enter the enrichment waterfall. Three tools run in sequence: Prospeo (primary), Apollo (fallback), Hunter (domain pattern). If all three miss, the record is delivered with LinkedIn URL only."
    },
    {
      "@type": "HowToStep",
      "name": "Delivery",
      "text": "Enriched records are delivered weekly via CSV, Clay table, or webhook to Smartlead, Lemlist, Instantly, HubSpot, or a custom API endpoint. Every record includes full signal metadata fields."
    },
    {
      "@type": "HowToStep",
      "name": "HubSpot CRM Sync",
      "text": "All active records sync to HubSpot with signal metadata as contact properties. Attribution from a closed deal back to the original signal theme, engagement class, and composite score is available in the CRM."
    }
  ]
}

export default function HowItWorksPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <ScrollProgress />
      <div className="bg-[#0C0C0C]">
        <Section1 />
      </div>
      <Section2 />
      <div className="bg-[#0C0C0C]">
        <Section3 />
      </div>
      <Section4 />
      <div className="bg-[#0C0C0C]">
        <Section5 />
      </div>
      <Section6 />
      <div className="bg-[#0C0C0C]">
        <Section7 />
      </div>
      <Section8 />
      <div className="bg-[#0C0C0C]">
        <Section9 />
      </div>
      <Section10 />
      <div className="bg-[#0C0C0C]">
        <Section11 />
      </div>
      <SampleDeliverySection />
      <div className="bg-[#0C0C0C]">
        <Section12 />
      </div>
      <Section13 />
      <div className="bg-[#0C0C0C]">
        <CalculatorSection />
      </div>
      <Section14Cta />
      <ScrollToTop />
    </>
  )
}
