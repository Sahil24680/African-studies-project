import type { Metadata } from 'next'
import Link from 'next/link'
import HeroSection from '@/components/sections/HeroSection'
import StatisticsSection from '@/components/sections/StatisticsSection'
import QuoteSection from '@/components/sections/QuoteSection'
import SourcesSection from '@/components/sections/SourcesSection'
import AnimatedContent from '@/components/animations/AnimatedContent'
import ScrollReveal from '@/components/animations/ScrollReveal'
import FadeContent from '@/components/animations/FadeContent'
import Magnet from '@/components/animations/Magnet'
import ShinyText from '@/components/animations/ShinyText'
import CountUp from '@/components/animations/CountUp'
import { homeHero, globalStats, homeQuote, overviewText } from '@/data/home'
import { citations } from '@/data/sources'

export const metadata: Metadata = { title: 'Home' }

const homeSources = citations.filter(c => c.pages?.includes('home'))

const mentalHealthEffects = [
  { label: 'PTSD', desc: 'Racial trauma developed through exposure to racism and discrimination increases stress levels and can psychologically traumatize Black individuals and their families.' },
  { label: 'Anxiety', desc: 'Repeated exposure to racism, discrimination, incarceration, and violence can contribute to anxiety and fear during police encounters within Black communities.' },
  { label: 'Depression', desc: 'Losing someone or witnessing their incarceration can cause grief, fear, and mistrust towards law enforcement and the justice system.' },
  { label: 'Fear During Police Encounters', desc: 'Police violence impacts more than the individuals who are directly involved. Their families and communities are affected emotionally and socially.' },
  { label: 'Chronic Stress', desc: 'Repeated exposure to racism, discrimination, incarceration, and violence can contribute to long-term psychological harm within Black communities.' },
  { label: 'Intergenerational Trauma', desc: 'Repeated exposure to racism, discrimination, incarceration, and violence can contribute to long-term psychological harm within Black communities that affects both individuals and future generations.' },
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
          <Magnet>
            <Link
              href="/historical-context"
              className="px-6 py-3 rounded-full bg-accent text-canvas text-sm font-bold hover:opacity-90 transition-opacity"
            >
              Start Here →
            </Link>
          </Magnet>
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

      {/* ── THESIS ── */}
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

      {/* ── GLOBAL OVERVIEW ── */}
      <section className="section-wrap pt-0">
        <AnimatedContent className="mb-6">
          <ShinyText
            text="OVERVIEW"
            as="span"
            className="font-mono text-xs uppercase tracking-[0.25em] text-ink-faint"
            shimmerColor="#ffffff"
            speed={5}
          />
        </AnimatedContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <ScrollReveal text={overviewText} className="body-text text-lg" />
          {/* Quick-stat strip */}
          <div className="grid grid-cols-2 gap-4">
            {globalStats.slice(0, 4).map((stat, i) => (
              <FadeContent key={stat.id} delay={i * 0.1}>
                <div className="rounded-xl border border-rim bg-card p-5">
                  <div className="stat-num text-3xl text-accent mb-2">
                    <CountUp
                      to={stat.figureNumeric}
                      suffix={stat.suffix ?? ''}
                      prefix={stat.prefix ?? ''}
                      decimals={stat.figureNumeric % 1 !== 0 ? 2 : 0}
                    />
                  </div>
                  <p className="text-xs text-ink-dim leading-snug">{stat.label}</p>
                </div>
              </FadeContent>
            ))}
          </div>
        </div>
      </section>

      {/* ── COUNTRY NAVIGATION ── */}
      <section className="py-16 bg-card border-y border-rim">
        <div className="section-wrap">
          <AnimatedContent className="mb-10">
            <h2 className="section-heading">
              Three Countries.{' '}
              <span className="text-ink-dim">One Crisis.</span>
            </h2>
          </AnimatedContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                label: 'United States', href: '/police-violence-usa', accent: 'usa', flag: '🇺🇸',
                stat: '3.5×', statLabel: 'Black Americans were about 3.5 times more likely to be killed by police than white Americans between 1980 and 2018',
                desc: 'During slavery, policing in the South included slave patrols, which were created to monitor slaves and suppress resistance. After the abolition of slavery in 1865, these systems evolved into new legal and social structures that continued to restrict their rights and freedom.',
              },
              {
                label: 'United Kingdom', href: '/police-violence-uk', accent: 'uk', flag: '🇬🇧',
                stat: '4x', statLabel: 'Black people are more than four times as likely to be stopped and searched compared to white people in England and Wales',
                desc: "One of the most significant policing practices targeting Black individuals in the UK is stop-and-search. Racial inequality within policing is linked to Britain's history of colonialism and involvement in the transatlantic slave trade.",
              },
              {
                label: 'Brazil', href: '/police-violence-brazil', accent: 'brazil', flag: '🇧🇷',
                stat: '300+', statLabel: 'years Brazil practiced slavery before officially ending in 1888',
                desc: 'Brazil received more enslaved African people than any other country in America, and was also the last country in the Western Hemisphere to officially abolish slavery in 1888.',
              },
            ].map((item, i) => (
              <AnimatedContent key={item.href} delay={i * 0.1}>
                <Link
                  href={item.href}
                  className="group block rounded-2xl border border-rim bg-canvas p-8 hover:bg-panel transition-all duration-300 h-full"
                >
                  <div className="flex items-start justify-between mb-6">
                    <span className="text-4xl">{item.flag}</span>
                    <span
                      className="text-xs font-mono px-2 py-1 rounded-full border opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ color: `var(--color-${item.accent})`, borderColor: `var(--color-${item.accent})50`, background: `var(--color-${item.accent})15` }}
                    >
                      Read more →
                    </span>
                  </div>
                  <div className="stat-num text-4xl mb-1" style={{ color: `var(--color-${item.accent})` }}>
                    {item.stat}
                  </div>
                  <p className="text-xs text-ink-faint mb-5 font-mono">{item.statLabel}</p>
                  <h3 className="font-display text-2xl font-bold text-ink mb-2">{item.label}</h3>
                  <p className="text-sm text-ink-dim leading-relaxed">{item.desc}</p>
                </Link>
              </AnimatedContent>
            ))}
          </div>
        </div>
      </section>

      {/* ── MENTAL HEALTH EFFECTS ── */}
      <section className="section-wrap">
        <AnimatedContent className="mb-4">
          <ShinyText
            text="MENTAL HEALTH EFFECTS"
            as="span"
            className="font-mono text-xs uppercase tracking-[0.25em] text-violet"
            shimmerColor="#c4b5fd"
            speed={4}
          />
        </AnimatedContent>
        <AnimatedContent delay={0.05} className="mb-12">
          <h2 className="section-heading max-w-2xl">
            Beyond the physical harm, the psychological toll
          </h2>
        </AnimatedContent>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-12">
          {mentalHealthEffects.map((item, i) => (
            <AnimatedContent key={item.label} delay={i * 0.08}>
              <div className="rounded-2xl border border-rim bg-card p-6 h-full flex flex-col gap-3 hover:border-violet/40 transition-colors group">
                <div className="w-2 h-2 rounded-full bg-violet group-hover:scale-125 transition-transform" />
                <h3 className="font-display text-lg font-bold text-violet">{item.label}</h3>
                <p className="text-sm text-ink-dim leading-relaxed">{item.desc}</p>
              </div>
            </AnimatedContent>
          ))}
        </div>

        {/* Mental health page links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { href: '/mental-health-individuals', label: 'Effects on Individuals', desc: 'According to "A Growing Dilemma: How Police Brutality Affects Mental Health in Black Communities," police brutality can contribute to PTSD, anxiety, depression, fear during police encounters, chronic stress, and intergenerational trauma.' },
            { href: '/mental-health-families', label: 'Effects on Families', desc: 'Mass incarceration affects families through family separation, financial hardship, housing instability, emotional trauma, anxiety and depression in children, and restriction on employment and education after release.' },
          ].map((item, i) => (
            <AnimatedContent key={item.href} delay={i * 0.1}>
              <Link
                href={item.href}
                className="group block rounded-2xl border border-rim bg-canvas p-8 hover:border-violet/40 hover:bg-panel transition-all duration-300"
              >
                <h3 className="font-display text-2xl font-bold text-ink mb-3 group-hover:text-violet transition-colors">
                  {item.label}
                </h3>
                <p className="text-sm text-ink-dim leading-relaxed mb-4">{item.desc}</p>
                <span className="text-xs font-mono text-ink-faint group-hover:text-violet transition-colors">Explore →</span>
              </Link>
            </AnimatedContent>
          ))}
        </div>
      </section>

      {/* ── QUOTE ── */}
      <QuoteSection quote={homeQuote} />

      {/* ── SOURCES ── */}
      <SourcesSection citations={homeSources} />
    </>
  )
}
