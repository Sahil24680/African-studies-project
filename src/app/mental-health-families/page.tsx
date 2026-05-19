import type { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import StatisticsSection from '@/components/sections/StatisticsSection'
import FamilyImpactSection from '@/components/sections/FamilyImpactSection'
import QuoteSection from '@/components/sections/QuoteSection'
import SourcesSection from '@/components/sections/SourcesSection'
import ScrollReveal from '@/components/animations/ScrollReveal'
import AnimatedContent from '@/components/animations/AnimatedContent'
import {
  familiesHero,
  familiesIntro,
  impactTypes,
  intergenerational,
  familiesQuote,
  familiesStats,
} from '@/data/mental-health-families'
import { citations } from '@/data/sources'

export const metadata: Metadata = { title: 'Mental Health: Families' }

const pageSources = citations.filter(c => c.pages?.includes('families'))

export default function MentalHealthFamiliesPage() {
  return (
    <>
      <HeroSection
        headline={familiesHero.headline}
        subheadline={familiesHero.subheadline}
        eyebrow="Mental Health: Families"
        accentColor="violet"
      />

      <section className="section-wrap border-t border-rim">
        <div className="max-w-3xl">
          <AnimatedContent className="mb-2">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-violet">Context</p>
          </AnimatedContent>
          <ScrollReveal text={familiesIntro} className="text-xl text-ink-dim leading-relaxed" />
        </div>
      </section>

      <StatisticsSection statistics={familiesStats} accentColor="violet" heading="By the Numbers" />
      <FamilyImpactSection impactTypes={impactTypes} intergenerational={intergenerational} />
      <QuoteSection quote={familiesQuote} accentColor="violet" />
      <SourcesSection citations={pageSources} />
    </>
  )
}
