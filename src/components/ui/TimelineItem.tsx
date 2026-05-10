import type { TimelineEvent } from '@/types'

const countryColors: Record<string, string> = {
  USA: 'var(--color-usa)',
  UK: 'var(--color-uk)',
  Brazil: 'var(--color-brazil)',
  Global: 'var(--color-accent)',
}

const countryFlags: Record<string, string> = {
  USA: '🇺🇸',
  UK: '🇬🇧',
  Brazil: '🇧🇷',
  Global: '🌍',
}

interface Props {
  event: TimelineEvent
  index: number
}

export default function TimelineItem({ event, index }: Props) {
  const isLeft = index % 2 === 0
  const color = countryColors[event.country]

  return (
    <div className={`relative flex items-start gap-8 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}>
      {/* dot on the center axis */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-3 items-center justify-center">
        <div className="w-4 h-4 rounded-full border-2 bg-canvas" style={{ borderColor: color }} />
      </div>
      {/* mobile dot */}
      <div className="md:hidden flex-shrink-0 mt-1">
        <div className="w-3 h-3 rounded-full border-2 bg-canvas" style={{ borderColor: color }} />
      </div>

      {/* content card — takes half width on desktop */}
      <div className={`w-full md:w-[calc(50%-2.5rem)] ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
        <div className="rounded-xl border border-rim bg-card p-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-sm font-bold" style={{ color }}>{event.year}</span>
            <span className="text-sm">{countryFlags[event.country]}</span>
            <span className="text-xs text-ink-faint font-mono">{event.country}</span>
          </div>
          <h3 className="font-display text-lg font-bold text-ink mb-2">{event.title}</h3>
          <p className="text-sm text-ink-dim leading-relaxed">{event.description}</p>
          {event.tags && (
            <div className="flex flex-wrap gap-2 mt-4">
              {event.tags.map(tag => (
                <span key={tag} className="text-xs font-mono px-2 py-0.5 rounded-full bg-panel text-ink-faint border border-rim-subtle">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* empty half for layout balance on desktop */}
      <div className="hidden md:block w-[calc(50%-2.5rem)]" />
    </div>
  )
}
