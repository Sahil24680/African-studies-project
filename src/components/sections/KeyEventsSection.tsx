'use client'

import AnimatedContent from '@/components/animations/AnimatedContent'
import EventCard from '@/components/ui/EventCard'
import type { KeyEvent } from '@/types'

interface Props {
  events: KeyEvent[]
  heading?: string
}

export default function KeyEventsSection({ events, heading = 'Key Events' }: Props) {
  return (
    <section className="section-wrap">
      <AnimatedContent>
        <h2 className="section-heading mb-12">{heading}</h2>
      </AnimatedContent>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {events.map((event, i) => (
          <AnimatedContent key={event.id} delay={i * 0.07}>
            <EventCard event={event} />
          </AnimatedContent>
        ))}
      </div>
    </section>
  )
}
