'use client'

import AnimatedContent from '@/components/animations/AnimatedContent'
import ScrollReveal from '@/components/animations/ScrollReveal'
import type { SystemicPattern } from '@/types'

interface Props {
  patterns: SystemicPattern[]
  accentColor?: string
  heading?: string
}

export default function SystemicPatternsSection({ patterns, accentColor = 'accent', heading = 'Systemic Patterns' }: Props) {
  return (
    <section className="section-wrap">
      <AnimatedContent>
        <h2 className="section-heading mb-12">{heading}</h2>
      </AnimatedContent>
      <div className="space-y-12 max-w-3xl">
        {patterns.map((pattern, i) => (
          <AnimatedContent key={i} delay={i * 0.1} className="flex gap-6">
            <div
              className="flex-shrink-0 w-1 rounded-full mt-1"
              style={{ background: `var(--color-${accentColor})` }}
            />
            <div>
              <h3 className="font-display text-xl font-bold text-ink mb-3">{pattern.title}</h3>
              <ScrollReveal text={pattern.description} className="body-text" />
            </div>
          </AnimatedContent>
        ))}
      </div>
    </section>
  )
}
