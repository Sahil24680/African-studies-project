import type { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import IntroSection from '@/components/sections/IntroSection'
import StatisticsSection from '@/components/sections/StatisticsSection'
import KeyEventsSection from '@/components/sections/KeyEventsSection'
import SystemicPatternsSection from '@/components/sections/SystemicPatternsSection'
import QuoteSection from '@/components/sections/QuoteSection'
import SourcesSection from '@/components/sections/SourcesSection'
import { policeUkContent } from '@/data/police-uk'
import { citations } from '@/data/sources'

export const metadata: Metadata = { title: 'Police Violence: UK' }

const pageSources = citations.filter(c => c.pages?.includes('uk'))

export default function PoliceViolenceUKPage() {
  return (
    <>
      <HeroSection
        headline={policeUkContent.hero.headline}
        subheadline={policeUkContent.hero.subheadline}
        eyebrow="🇬🇧 United Kingdom"
        accentColor="uk"
      />
      <IntroSection text={policeUkContent.intro} />
      <StatisticsSection statistics={policeUkContent.statistics} accentColor="uk" heading="The Numbers" />
      <KeyEventsSection events={policeUkContent.keyEvents} heading="Key Events" />
      <SystemicPatternsSection patterns={policeUkContent.systemicPatterns} accentColor="uk" heading="Systemic Patterns" />
      <QuoteSection quote={policeUkContent.quote} accentColor="uk" />
      <SourcesSection citations={pageSources} />
    </>
  )
}
