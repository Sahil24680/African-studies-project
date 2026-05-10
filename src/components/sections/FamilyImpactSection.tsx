'use client'

import AnimatedContent from '@/components/animations/AnimatedContent'
import ScrollReveal from '@/components/animations/ScrollReveal'
import CountUp from '@/components/animations/CountUp'
import FadeContent from '@/components/animations/FadeContent'
import type { FamilyImpactType } from '@/types'

interface Props {
  impactTypes: FamilyImpactType[]
  intergenerational: { title: string; description: string; mechanisms: string[] }
}

export default function FamilyImpactSection({ impactTypes, intergenerational }: Props) {
  return (
    <>
      <section className="section-wrap">
        <AnimatedContent>
          <h2 className="section-heading mb-12">How Families Are Affected</h2>
        </AnimatedContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {impactTypes.map((impact, i) => (
            <AnimatedContent key={impact.id} delay={i * 0.08}>
              <div className="rounded-2xl border border-rim bg-card p-8 h-full flex flex-col gap-4">
                <h3 className="font-display text-xl font-bold text-violet">{impact.title}</h3>
                <p className="text-sm text-ink-dim leading-relaxed">{impact.description}</p>
                {impact.statistics.length > 0 && (
                  <div className="mt-auto pt-4 border-t border-rim">
                    <div className="stat-num text-3xl text-violet">
                      <CountUp
                        to={impact.statistics[0].figureNumeric}
                        suffix={impact.statistics[0].suffix ?? ''}
                        decimals={0}
                      />
                    </div>
                    <p className="text-xs text-ink-faint mt-1">{impact.statistics[0].label}</p>
                  </div>
                )}
              </div>
            </AnimatedContent>
          ))}
        </div>
      </section>

      <section className="py-24 bg-card border-y border-rim">
        <div className="section-wrap">
          <AnimatedContent>
            <h2 className="section-heading mb-6">{intergenerational.title}</h2>
          </AnimatedContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <ScrollReveal
              text={intergenerational.description}
              className="text-lg text-ink-dim leading-relaxed"
            />
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-ink-faint mb-6">Mechanisms of Transmission</p>
              <ul className="space-y-4">
                {intergenerational.mechanisms.map((m, i) => (
                  <FadeContent key={i} delay={i * 0.08}>
                    <li className="flex gap-3 items-start">
                      <span className="text-violet font-mono mt-0.5 flex-shrink-0">0{i + 1}</span>
                      <p className="text-sm text-ink-dim leading-relaxed">{m}</p>
                    </li>
                  </FadeContent>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
