import type { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import SourcesSection from '@/components/sections/SourcesSection'
import AnimatedContent from '@/components/animations/AnimatedContent'
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
      <section className="section-wrap">
        <div className="max-w-3xl space-y-6">
          {policeUsaContent.paragraphs.map((p, i) => (
            <AnimatedContent key={i} delay={i * 0.05}>
              <p className="text-xl md:text-2xl text-ink-dim leading-relaxed font-sans">{p}</p>
            </AnimatedContent>
          ))}
        </div>
      </section>
      <SourcesSection citations={pageSources} />
    </>
  )
}
