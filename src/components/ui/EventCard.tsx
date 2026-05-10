'use client'

import GlareHover from '@/components/animations/GlareHover'
import type { KeyEvent } from '@/types'

const accentMap: Record<string, string> = {
  USA: 'var(--color-usa)',
  UK: 'var(--color-uk)',
  Brazil: 'var(--color-brazil)',
}

interface Props {
  event: KeyEvent
}

export default function EventCard({ event }: Props) {
  const accent = accentMap[event.country]
  return (
    <GlareHover className="rounded-2xl border border-rim bg-card p-6 flex flex-col gap-4 h-full">
      <div className="flex items-center gap-3">
        <span className="font-mono text-sm font-medium" style={{ color: accent }}>{event.year}</span>
        <span className="text-xs text-ink-faint font-mono">{event.location}</span>
      </div>
      <h3 className="font-display text-xl font-bold text-ink">{event.name}</h3>
      <p className="text-sm text-ink-dim leading-relaxed">{event.description}</p>
      <div className="mt-auto pt-4 border-t" style={{ borderColor: accent + '40' }}>
        <p className="text-xs text-ink-faint leading-relaxed italic">{event.significance}</p>
      </div>
    </GlareHover>
  )
}
