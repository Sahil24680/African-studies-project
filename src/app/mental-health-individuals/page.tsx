import type { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import StatisticsSection from '@/components/sections/StatisticsSection'
import MentalHealthEffectsSection from '@/components/sections/MentalHealthEffectsSection'
import ResearchSection from '@/components/sections/ResearchSection'
import QuoteSection from '@/components/sections/QuoteSection'
import SourcesSection from '@/components/sections/SourcesSection'
import ScrollReveal from '@/components/animations/ScrollReveal'
import AnimatedContent from '@/components/animations/AnimatedContent'
import {
  individualsHero,
  individualsIntro,
  conditions,
  researchHighlights,
  individualsQuote,
  individualsStats,
} from '@/data/mental-health-individuals'
import { citations } from '@/data/sources'

export const metadata: Metadata = { title: 'Mental Health: Individuals' }

const pageSources = citations.filter(c => c.pages?.includes('individuals'))

export default function MentalHealthIndividualsPage() {
  return (
    <>
      <HeroSection
        headline={individualsHero.headline}
        subheadline={individualsHero.subheadline}
        eyebrow="Mental Health: Individuals"
        accentColor="violet"
      />

      <section className="section-wrap border-t border-rim">
        <div className="max-w-3xl">
          <AnimatedContent className="mb-2">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-violet">Context</p>
          </AnimatedContent>
          <ScrollReveal text={individualsIntro} className="text-xl text-ink-dim leading-relaxed" />
        </div>
      </section>

      <StatisticsSection statistics={individualsStats} accentColor="violet" heading="By the Numbers" />
      <MentalHealthEffectsSection conditions={conditions} />
      <ResearchSection highlights={researchHighlights} />
      <QuoteSection quote={individualsQuote} accentColor="violet" />
      <SourcesSection citations={pageSources} />
    </>
  )
}
