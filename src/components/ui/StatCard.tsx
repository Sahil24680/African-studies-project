'use client'

import SpotlightCard from '@/components/animations/SpotlightCard'
import CountUp from '@/components/animations/CountUp'
import type { Statistic } from '@/types'

const spotlightColors: Record<string, string> = {
  accent: 'rgba(217,119,6,0.18)',
  usa: 'rgba(59,130,246,0.18)',
  uk: 'rgba(239,68,68,0.18)',
  brazil: 'rgba(34,197,94,0.18)',
  violet: 'rgba(139,92,246,0.18)',
}

interface Props {
  stat: Statistic
  accentColor?: string
}

export default function StatCard({ stat, accentColor = 'accent' }: Props) {
  return (
    <SpotlightCard
      spotlightColor={spotlightColors[accentColor] ?? spotlightColors.accent}
      className="rounded-2xl border border-rim bg-card p-8 flex flex-col gap-3 hover:border-rim/70 transition-colors"
    >
      <div className="stat-num text-5xl" style={{ color: `var(--color-${accentColor})` }}>
        {stat.figureNumeric === 0 ? (
          stat.figure
        ) : (
          <CountUp
            to={stat.figureNumeric}
            suffix={stat.suffix ?? ''}
            prefix={stat.prefix ?? ''}
            decimals={stat.figureNumeric % 1 !== 0 ? 2 : 0}
          />
        )}
      </div>
      <p className="text-ink font-sans font-medium leading-snug">{stat.label}</p>
      {stat.source && (
        <p className="text-xs font-mono text-ink-faint">{stat.source}</p>
      )}
    </SpotlightCard>
  )
}
