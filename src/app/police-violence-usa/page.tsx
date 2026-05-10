import type { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import IntroSection from '@/components/sections/IntroSection'
import StatisticsSection from '@/components/sections/StatisticsSection'
import KeyEventsSection from '@/components/sections/KeyEventsSection'
import SystemicPatternsSection from '@/components/sections/SystemicPatternsSection'
import QuoteSection from '@/components/sections/QuoteSection'
import SourcesSection from '@/components/sections/SourcesSection'
import { policeUsaContent } from '@/data/police-usa'
import { citations } from '@/data/sources'

export const metadata: Metadata = { title: 'Police Violence: USA' }

const pageSources = citations.filter(c => c.pages?.includes('usa'))

export default function PoliceViolenceUSAPage() {
  return (
    <>
      <HeroSection
        headline={policeUsaContent.hero.headline}
        subheadline={policeUsaContent.hero.subheadline}
        eyebrow="🇺🇸 United States"
        accentColor="usa"
      />
      <IntroSection text={policeUsaContent.intro} />
      <StatisticsSection statistics={policeUsaContent.statistics} accentColor="usa" heading="The Numbers" />
      <KeyEventsSection events={policeUsaContent.keyEvents} heading="Key Events" />
      <SystemicPatternsSection patterns={policeUsaContent.systemicPatterns} accentColor="usa" heading="Systemic Patterns" />
      <QuoteSection quote={policeUsaContent.quote} accentColor="usa" />
      <SourcesSection citations={pageSources} />
    </>
  )
}
