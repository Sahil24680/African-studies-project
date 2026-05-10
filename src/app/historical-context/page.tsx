import type { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import TimelineSection from '@/components/sections/TimelineSection'
import QuoteSection from '@/components/sections/QuoteSection'
import SourcesSection from '@/components/sections/SourcesSection'
import AnimatedContent from '@/components/animations/AnimatedContent'
import ScrollReveal from '@/components/animations/ScrollReveal'
import { historicalHero, historicalIntro, timeline, historicalQuote } from '@/data/historical-context'
import { citations } from '@/data/sources'

export const metadata: Metadata = { title: 'Historical Context' }

const pageSources = citations.filter(c => c.pages?.includes('historical') || c.pages?.includes('home'))

export default function HistoricalContextPage() {
  return (
    <>
      <HeroSection
        headline={historicalHero.headline}
        subheadline={historicalHero.subheadline}
        eyebrow="Historical Context"
        accentColor="accent"
      />

      <section className="section-wrap border-t border-rim">
        <div className="max-w-3xl">
          <AnimatedContent className="mb-2">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-accent">Context</p>
          </AnimatedContent>
          <ScrollReveal
            text={historicalIntro}
            className="text-xl md:text-2xl text-ink-dim leading-relaxed font-sans"
          />
        </div>
      </section>

      <TimelineSection events={timeline} />
      <QuoteSection quote={historicalQuote} />
      <SourcesSection citations={pageSources} />
    </>
  )
}
