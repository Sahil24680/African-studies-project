'use client'

import SpotlightCard from '@/components/animations/SpotlightCard'
import CountUp from '@/components/animations/CountUp'
import type { ConditionDetail } from '@/types'

interface Props {
  condition: ConditionDetail
}

export default function ConditionCard({ condition }: Props) {
  return (
    <SpotlightCard
      spotlightColor="rgba(139,92,246,0.15)"
      className="rounded-2xl border border-rim bg-card p-8 flex flex-col gap-5"
    >
      <h3 className="font-display text-2xl font-bold text-violet">{condition.condition}</h3>
      <p className="text-sm text-ink-dim leading-relaxed">{condition.definition}</p>

      {condition.statistics.length > 0 && (
        <div className="py-4 border-y border-rim">
          <div className="stat-num text-4xl text-violet">
            <CountUp
              to={condition.statistics[0].figureNumeric}
              suffix={condition.statistics[0].suffix ?? ''}
              decimals={condition.statistics[0].figureNumeric % 1 !== 0 ? 1 : 0}
            />
          </div>
          <p className="text-xs text-ink-faint mt-1">{condition.statistics[0].label}</p>
        </div>
      )}

      <div>
        <p className="text-xs font-mono uppercase tracking-widest text-ink-faint mb-3">Key Symptoms</p>
        <ul className="space-y-1.5">
          {condition.symptoms.map((s, i) => (
            <li key={i} className="text-sm text-ink-dim flex gap-2">
              <span className="text-violet mt-1 flex-shrink-0">—</span>
              {s}
            </li>
          ))}
        </ul>
      </div>
    </SpotlightCard>
  )
}
