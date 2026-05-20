'use client'

import ScrollReveal from '@/components/animations/ScrollReveal'
import AnimatedContent from '@/components/animations/AnimatedContent'
import type { Quote } from '@/types'

interface Props {
  quote: Quote
  accentColor?: string
}

export default function QuoteSection({ quote, accentColor = 'accent' }: Props) {
  return (
    <section className="py-24 md:py-32 border-y border-rim bg-card">
      <div className="section-wrap">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedContent>
            <span
              className="font-display text-[8rem] leading-none font-bold opacity-20 block -mb-10"
              style={{ color: `var(--color-${accentColor})` }}
            >
              "
            </span>
          </AnimatedContent>
          <ScrollReveal
            text={quote.text}
            tag="blockquote"
            className="font-display text-2xl md:text-4xl font-bold text-ink leading-tight"
          />
          <AnimatedContent delay={0.3} className="mt-8">
            <p className="font-mono text-sm text-ink-faint">
              {quote.attribution}
              {quote.role && <span className="block text-xs mt-1 opacity-70">{quote.role}</span>}
            </p>
          </AnimatedContent>
        </div>
      </div>
    </section>
  )
}
