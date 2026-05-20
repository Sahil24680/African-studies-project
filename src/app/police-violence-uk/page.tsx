import type { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import SourcesSection from '@/components/sections/SourcesSection'
import AnimatedContent from '@/components/animations/AnimatedContent'
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
      <section className="section-wrap">
        <div className="max-w-3xl space-y-6">
          {policeUkContent.paragraphs.map((p, i) => (
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
