import type { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import SourcesSection from '@/components/sections/SourcesSection'
import AnimatedContent from '@/components/animations/AnimatedContent'
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
      <section className="section-wrap">
        <div className="max-w-3xl space-y-6">
          {policeBrazilContent.paragraphs.map((p, i) => (
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
