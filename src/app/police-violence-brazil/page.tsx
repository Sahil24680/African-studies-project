import type { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import IntroSection from '@/components/sections/IntroSection'
import StatisticsSection from '@/components/sections/StatisticsSection'
import KeyEventsSection from '@/components/sections/KeyEventsSection'
import SystemicPatternsSection from '@/components/sections/SystemicPatternsSection'
import QuoteSection from '@/components/sections/QuoteSection'
import SourcesSection from '@/components/sections/SourcesSection'
import { policeBrazilContent } from '@/data/police-brazil'
import { citations } from '@/data/sources'

export const metadata: Metadata = { title: 'Police Violence: Brazil' }

const pageSources = citations.filter(c => c.pages?.includes('brazil'))

export default function PoliceViolenceBrazilPage() {
  return (
    <>
      <HeroSection
        headline={policeBrazilContent.hero.headline}
        subheadline={policeBrazilContent.hero.subheadline}
        eyebrow="🇧🇷 Brazil"
        accentColor="brazil"
      />
      <IntroSection text={policeBrazilContent.intro} />
      <StatisticsSection statistics={policeBrazilContent.statistics} accentColor="brazil" heading="The Numbers" />
      <KeyEventsSection events={policeBrazilContent.keyEvents} heading="Key Events" />
      <SystemicPatternsSection patterns={policeBrazilContent.systemicPatterns} accentColor="brazil" heading="Systemic Patterns" />
      <QuoteSection quote={policeBrazilContent.quote} accentColor="brazil" />
      <SourcesSection citations={pageSources} />
    </>
  )
}
