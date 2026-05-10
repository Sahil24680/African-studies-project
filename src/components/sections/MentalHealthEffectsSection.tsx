'use client'

import AnimatedContent from '@/components/animations/AnimatedContent'
import ConditionCard from '@/components/ui/ConditionCard'
import type { ConditionDetail } from '@/types'

interface Props {
  conditions: ConditionDetail[]
  heading?: string
}

export default function MentalHealthEffectsSection({ conditions, heading = 'Psychological Effects' }: Props) {
  return (
    <section className="section-wrap">
      <AnimatedContent>
        <h2 className="section-heading mb-12">{heading}</h2>
      </AnimatedContent>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {conditions.map((condition, i) => (
          <AnimatedContent key={condition.id} delay={i * 0.1}>
            <ConditionCard condition={condition} />
          </AnimatedContent>
        ))}
      </div>
    </section>
  )
}
