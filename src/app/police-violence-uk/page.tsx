import type { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import IntroSection from '@/components/sections/IntroSection'
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
      <QuoteSection quote={policeUkContent.quote} accentColor="uk" />
      <SourcesSection citations={pageSources} />
    </>
  )
}
