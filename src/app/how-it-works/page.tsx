import { Metadata } from 'next'

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
import Section12 from '@/components/how-it-works/sections/Section12'
import Section13 from '@/components/how-it-works/sections/Section13'
import CalculatorSection from '@/components/how-it-works/sections/CalculatorSection'
import Section14Cta from '@/components/how-it-works/sections/Section14Cta'

export const metadata: Metadata = {
  title: 'How It Works — Richie Reach',
  description: 'The full 9-stage signal-led outbound engine. Signal capture, ICP filtering, AI classification, enrichment waterfall, and CRM sync.',
}

export default function HowItWorksPage() {
  return (
    <>
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
      <Section12 />
      <Section13 />
      <CalculatorSection />
      <Section14Cta />
      <ScrollToTop />
    </>
  )
}
