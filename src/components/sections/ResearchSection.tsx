'use client'

import AnimatedContent from '@/components/animations/AnimatedContent'

interface ResearchHighlight {
  title: string
  finding: string
  source: string
}

interface Props {
  highlights: ResearchHighlight[]
  heading?: string
}

export default function ResearchSection({ highlights, heading = 'Research Highlights' }: Props) {
  return (
    <section className="section-wrap">
      <AnimatedContent>
        <h2 className="section-heading mb-12">{heading}</h2>
      </AnimatedContent>
      <div className="space-y-6 max-w-3xl">
        {highlights.map((h, i) => (
          <AnimatedContent key={i} delay={i * 0.1}>
            <div className="rounded-xl border-l-2 border-l-violet border border-rim bg-card p-6">
              <h3 className="font-display text-lg font-bold text-ink mb-2">{h.title}</h3>
              <p className="text-sm text-ink-dim leading-relaxed mb-3">{h.finding}</p>
              <p className="text-xs font-mono text-ink-faint">{h.source}</p>
            </div>
          </AnimatedContent>
        ))}
      </div>
    </section>
  )
}
