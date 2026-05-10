'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedContent from '@/components/animations/AnimatedContent'
import type { TimelineEvent } from '@/types'

const COUNTRY_COLORS: Record<string, string> = {
  USA: 'var(--color-usa)',
  UK: 'var(--color-uk)',
  Brazil: 'var(--color-brazil)',
  Global: 'var(--color-accent)',
}

const COUNTRY_FLAGS: Record<string, string> = {
  USA: '🇺🇸',
  UK: '🇬🇧',
  Brazil: '🇧🇷',
  Global: '🌍',
}

const FILTER_BG: Record<string, string> = {
  All: 'bg-panel border-rim',
  USA: 'bg-usa-muted border-usa',
  UK: 'bg-uk-muted border-uk',
  Brazil: 'bg-brazil-muted border-brazil',
  Global: 'bg-accent-muted border-accent',
}

type Filter = 'All' | 'USA' | 'UK' | 'Brazil' | 'Global'

function TimelineCard({ event, index }: { event: TimelineEvent; index: number }) {
  const [expanded, setExpanded] = useState(false)
  const color = COUNTRY_COLORS[event.country]

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '0px 0px -80px 0px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative group"
    >
      {/* Large year watermark */}
      <div
        className="absolute -top-4 right-4 font-display text-[5rem] font-bold leading-none pointer-events-none select-none opacity-[0.05] group-hover:opacity-[0.08] transition-opacity duration-500"
        style={{ color }}
      >
        {event.year}
      </div>

      <button
        onClick={() => setExpanded(e => !e)}
        className="w-full text-left rounded-2xl border bg-card overflow-hidden transition-all duration-300 group-hover:shadow-lg"
        style={{ borderColor: expanded ? color : 'var(--color-rim)' }}
      >
        {/* Thick colored top border */}
        <div className="h-1 w-full" style={{ background: color }} />

        <div className="p-6">
          {/* Header row */}
          <div className="flex items-start justify-between gap-4 mb-3">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-lg">{COUNTRY_FLAGS[event.country]}</span>
              <span className="font-mono text-sm font-bold" style={{ color }}>{event.year}</span>
              <span
                className="text-[10px] font-mono px-2 py-0.5 rounded-full border"
                style={{ color, borderColor: color + '50', background: color + '15' }}
              >
                {event.country}
              </span>
            </div>
            <motion.div
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="flex-shrink-0 w-7 h-7 rounded-full border border-rim flex items-center justify-center mt-0.5 flex-shrink-0"
              style={expanded ? { borderColor: color, color } : {}}
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="2 4 6 8 10 4" />
              </svg>
            </motion.div>
          </div>

          <h3 className="font-display text-xl font-bold text-ink leading-tight mb-2">{event.title}</h3>

          {/* Tags */}
          {event.tags && (
            <div className="flex flex-wrap gap-1.5 mb-3">
              {event.tags.map(tag => (
                <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-panel text-ink-faint border border-rim-subtle">
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Preview line — always visible */}
          <p className="text-sm text-ink-faint leading-relaxed line-clamp-2">
            {event.description}
          </p>

          {/* Expanded content */}
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="pt-4 mt-4 border-t border-rim-subtle space-y-3">
                  <p className="text-sm text-ink-dim leading-relaxed">{event.description}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </button>
    </motion.div>
  )
}

interface Props {
  events: TimelineEvent[]
  heading?: string
}

const FILTERS: Filter[] = ['All', 'USA', 'UK', 'Brazil', 'Global']

export default function TimelineSection({ events, heading = 'A Timeline of Racial Control' }: Props) {
  const [activeFilter, setActiveFilter] = useState<Filter>('All')

  const filtered = activeFilter === 'All' ? events : events.filter(e => e.country === activeFilter)

  return (
    <section className="section-wrap">
      <AnimatedContent>
        <h2 className="section-heading mb-4">{heading}</h2>
      </AnimatedContent>
      <AnimatedContent delay={0.1} className="mb-8">
        <p className="body-text max-w-2xl">
          Key events across three countries. Click any card to expand details. Filter by country below.
        </p>
      </AnimatedContent>

      {/* Country filter tabs */}
      <AnimatedContent delay={0.15} className="mb-12">
        <div className="flex flex-wrap gap-2">
          {FILTERS.map(f => {
            const active = activeFilter === f
            const color = f === 'All' ? undefined : COUNTRY_COLORS[f]
            return (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-mono border transition-all duration-200"
                style={active && color ? { borderColor: color, color, background: color + '20' } : {}}
              >
                {f !== 'All' && <span>{COUNTRY_FLAGS[f]}</span>}
                <span className={active ? '' : 'text-ink-faint'}>{f}</span>
                <span className="text-xs opacity-60">
                  {f === 'All' ? events.length : events.filter(e => e.country === f).length}
                </span>
              </button>
            )
          })}
        </div>
      </AnimatedContent>

      {/* Timeline grid */}
      <div className="relative">
        {/* Vertical connecting line */}
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2">
          <motion.div
            className="w-full bg-gradient-to-b from-accent via-rim to-rim-subtle origin-top"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            style={{ height: '100%' }}
          />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-5"
          >
            {filtered.map((event, i) => (
              <div
                key={event.id}
                className={
                  /* On desktop, alternate left/right columns with offset to straddle the center line */
                  i % 2 === 0
                    ? 'lg:pr-10'
                    : 'lg:pl-10 lg:mt-20'
                }
              >
                {/* center dot — desktop only */}
                <div
                  className="hidden lg:block absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 bg-canvas z-10"
                  style={{ borderColor: COUNTRY_COLORS[event.country] }}
                />
                <TimelineCard event={event} index={i} />
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <p className="text-center text-ink-faint font-mono py-12">No events for this filter.</p>
        )}
      </div>
    </section>
  )
}
