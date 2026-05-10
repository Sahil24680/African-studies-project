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
  { label: 'PTSD', desc: 'Flashbacks, hypervigilance, and trauma responses triggered by police encounters—even without physical harm.' },
  { label: 'Anxiety & Depression', desc: 'Persistent fear, helplessness, and grief from watching violence go unpunished affect entire communities.' },
  { label: 'Racial Battle Fatigue', desc: 'The cumulative psychological toll of navigating racism and the constant threat of state violence.' },
  { label: 'Intergenerational Trauma', desc: 'Stress and fear from police violence transmitted to children—biologically and through lived experience.' },
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
            text="THESIS"
            as="span"
            className="font-mono text-xs uppercase tracking-[0.25em] text-accent"
            shimmerColor="#FCD34D"
            speed={4}
          />
        </AnimatedContent>
        <div className="max-w-3xl">
          <ScrollReveal
            text={homeHero.thesis}
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
                stat: '3.23×', statLabel: 'more likely Black Americans are killed by police',
                desc: 'From slave patrols to modern use-of-force — tracing centuries of anti-Black policing.',
              },
              {
                label: 'United Kingdom', href: '/police-violence-uk', accent: 'uk', flag: '🇬🇧',
                stat: '9×', statLabel: 'more likely Black people face stop-and-search',
                desc: 'Sus laws, Brixton, Stephen Lawrence — racism embedded in British institutions.',
              },
              {
                label: 'Brazil', href: '/police-violence-brazil', accent: 'brazil', flag: '🇧🇷',
                stat: '6,429', statLabel: 'people killed by police in 2022 — a record',
                desc: 'The world\'s deadliest police force and its disproportionate toll on Black Brazilians.',
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
            Beyond the physical harm — the psychological toll
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
            { href: '/mental-health-individuals', label: 'Effects on Individuals', desc: 'PTSD, anxiety, depression, and racial battle fatigue — the direct psychological impact on Black people who face or witness police violence.' },
            { href: '/mental-health-families', label: 'Effects on Families', desc: 'Complicated grief, economic instability, and trauma that crosses generations — how policing reshapes Black family life.' },
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
