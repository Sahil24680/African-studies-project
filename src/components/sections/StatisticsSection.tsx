'use client'

import AnimatedContent from '@/components/animations/AnimatedContent'
import StatCard from '@/components/ui/StatCard'
import type { Statistic } from '@/types'

interface Props {
  statistics: Statistic[]
  accentColor?: string
  heading?: string
}

export default function StatisticsSection({ statistics, accentColor = 'accent', heading }: Props) {
  return (
    <section className="section-wrap">
      {heading && (
        <AnimatedContent>
          <h2 className="section-heading mb-12">{heading}</h2>
        </AnimatedContent>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {statistics.map((stat, i) => (
          <AnimatedContent key={stat.id} delay={i * 0.08}>
            <StatCard stat={stat} accentColor={accentColor} />
          </AnimatedContent>
        ))}
      </div>
    </section>
  )
}
