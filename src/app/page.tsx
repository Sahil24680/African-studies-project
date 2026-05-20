import type { Metadata } from 'next'
import Link from 'next/link'
import HeroSection from '@/components/sections/HeroSection'
import SourcesSection from '@/components/sections/SourcesSection'
import AnimatedContent from '@/components/animations/AnimatedContent'
import ScrollReveal from '@/components/animations/ScrollReveal'
import FadeContent from '@/components/animations/FadeContent'
import Magnet from '@/components/animations/Magnet'
import ShinyText from '@/components/animations/ShinyText'
import { homeHero } from '@/data/home'
import { historicalIntro } from '@/data/historical-context'
import { intergenerational } from '@/data/mental-health-families'
import { citations } from '@/data/sources'

export const metadata: Metadata = { title: 'Home' }

const homeSources = citations.filter(c => c.pages?.includes('home'))

const massIncarcerationP1 =
  'Mass incarceration is the high rate of imprisonment of people, especially marginalized groups. Black communities are disproportionately affected because of racial profiling, over-policing, and unequal sentencing. Black Americans are incarcerated at significantly higher rates than white Americans and are portrayed as criminals even for minor actions. This form of racial inequality in incarceration systems is also shown in the United Kingdom and Brazil.'

const massIncarcerationP2 =
  'Also, communities with high incarceration rates, regardless of the country, have a higher chance of poverty, limited opportunities, and are hesitant to trust government officials. Even though the system has always been against them, Black communities have resisted racism through protests and social movements to bring global attention to racial discrimination.'

const mentalHealthEffects = [
  { label: 'PTSD' },
  { label: 'Anxiety' },
  { label: 'Depression' },
  { label: 'Fear during police encounters' },
  { label: 'Chronic stress' },
  { label: 'Intergenerational trauma' },
]

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <HeroSection
        headline={homeHero.headline}
        subheadline={homeHero.subheadline}
        eyebrow="A Project by Mamota Mim & Rezoan Sahil"
        accentColor="accent"
        useIridescence={true}
      >
        <div className="flex flex-wrap gap-3">
          {[
            { href: '/police-violence-usa', flag: '🇺🇸', label: 'USA' },
            { href: '/police-violence-uk', flag: '🇬🇧', label: 'UK' },
            { href: '/police-violence-brazil', flag: '🇧🇷', label: 'Brazil' },
          ].map(link => (
            <Magnet key={link.href}>
              <Link
                href={link.href}
                className="flex items-center gap-2 px-5 py-3 rounded-full border border-rim bg-card/60 backdrop-blur text-sm font-medium text-ink-dim hover:text-ink hover:border-rim/70 transition-colors"
              >
                <span>{link.flag}</span>
                <span>{link.label}</span>
              </Link>
            </Magnet>
          ))}
        </div>
      </HeroSection>

      {/* ── INTRO ── */}
      <section className="section-wrap border-t border-rim">
        <AnimatedContent className="mb-6">
          <ShinyText
            text="INTRO"
            as="span"
            className="font-mono text-xs uppercase tracking-[0.25em] text-accent"
            shimmerColor="#FCD34D"
            speed={4}
          />
        </AnimatedContent>
        <div className="max-w-3xl">
          <ScrollReveal
            text={homeHero.intro}
            className="font-display text-2xl md:text-3xl font-bold text-ink leading-snug"
          />
        </div>
      </section>

      {/* ── HISTORICAL BACKGROUND ── */}
      <section className="section-wrap border-t border-rim">
        <AnimatedContent className="mb-6">
          <ShinyText
            text="HISTORICAL BACKGROUND"
            as="span"
            className="font-mono text-xs uppercase tracking-[0.25em] text-accent"
            shimmerColor="#FCD34D"
            speed={4}
          />
        </AnimatedContent>
        <div className="max-w-3xl">
          <ScrollReveal text={historicalIntro} className="body-text text-lg" />
        </div>
      </section>

      {/* ── MENTAL HEALTH EFFECTS ── */}
      <section className="section-wrap border-t border-rim">
        <AnimatedContent className="mb-4">
          <ShinyText
            text="MENTAL HEALTH EFFECTS"
            as="span"
            className="font-mono text-xs uppercase tracking-[0.25em] text-violet"
            shimmerColor="#c4b5fd"
            speed={4}
          />
        </AnimatedContent>
        <AnimatedContent delay={0.05} className="mb-8 max-w-3xl">
          <p className="body-text text-lg">
            Repeated exposure to racism, discrimination, incarceration, and violence can contribute to long-term psychological harm within Black communities, such as:
          </p>
        </AnimatedContent>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8 max-w-3xl">
          {mentalHealthEffects.map((item, i) => (
            <AnimatedContent key={item.label} delay={i * 0.08}>
              <div className="rounded-2xl border border-rim bg-card p-5 flex items-center gap-3 hover:border-violet/40 transition-colors group">
                <div className="w-2 h-2 rounded-full bg-violet flex-shrink-0 group-hover:scale-125 transition-transform" />
                <span className="font-display text-sm font-bold text-violet">{item.label}</span>
              </div>
            </AnimatedContent>
          ))}
        </div>

        <AnimatedContent className="max-w-3xl">
          <p className="body-text text-lg">
            Police violence impacts more than the individuals who are directly involved. Their families and communities are affected emotionally and socially because losing someone or witnessing their incarceration can cause grief, fear, and mistrust towards law enforcement and the justice system.
          </p>
        </AnimatedContent>
      </section>

      {/* ── MASS INCARCERATION ── */}
      <section className="section-wrap border-t border-rim">
        <AnimatedContent className="mb-6">
          <ShinyText
            text="MASS INCARCERATION"
            as="span"
            className="font-mono text-xs uppercase tracking-[0.25em] text-accent"
            shimmerColor="#FCD34D"
            speed={4}
          />
        </AnimatedContent>
        <div className="max-w-3xl space-y-6">
          <AnimatedContent>
            <ScrollReveal text={massIncarcerationP1} className="body-text text-lg" />
          </AnimatedContent>

          <AnimatedContent>
            <p className="text-sm font-medium text-ink-dim">Mass incarceration affects families through:</p>
            <ul className="mt-3 space-y-2">
              {intergenerational.mechanisms.map((m, i) => (
                <FadeContent key={m} delay={i * 0.05}>
                  <li className="flex items-center gap-3 text-sm text-ink-dim">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    {m}
                  </li>
                </FadeContent>
              ))}
            </ul>
          </AnimatedContent>

          <AnimatedContent>
            <ScrollReveal text={massIncarcerationP2} className="body-text text-lg" />
          </AnimatedContent>
        </div>
      </section>

      {/* ── SOURCES ── */}
      <SourcesSection citations={homeSources} />
    </>
  )
}
