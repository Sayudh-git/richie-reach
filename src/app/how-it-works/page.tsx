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
  title: 'How It Works — Richie Reach',
  description: 'The full 9-stage signal-led outbound engine. Signal capture, ICP filtering, AI classification, enrichment waterfall, and CRM sync.',
  canonical: '/how-it-works',
})

const schemaData = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://richiereach.tech/how-it-works#webpage",
    "name": "How It Works — Richie Reach",
    "description": "The full 9-stage signal-led outbound engine. Signal capture, ICP filtering, AI classification, enrichment waterfall, and CRM sync.",
    "url": "https://richiereach.tech/how-it-works",
    "isPartOf": { "@id": "https://richiereach.tech/#webpage" }
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://richiereach.tech" },
      { "@type": "ListItem", "position": 2, "name": "How It Works", "item": "https://richiereach.tech/how-it-works" }
    ]
  }
]

export default function HowItWorksPage() {
  return (
    <>
      {/* JSON-LD: static structured data, safe to use dangerouslySetInnerHTML */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <ScrollProgress />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <Section10 />
      <Section11 />
      <SampleDeliverySection />
      <Section12 />
      <Section13 />
      <CalculatorSection />
      <Section14Cta />
      <ScrollToTop />
    </>
  )
}
