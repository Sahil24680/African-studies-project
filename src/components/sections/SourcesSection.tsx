'use client'

import DecryptedText from '@/components/animations/DecryptedText'
import FadeContent from '@/components/animations/FadeContent'
import CitationItem from '@/components/ui/CitationItem'
import type { Citation } from '@/types'

interface Props {
  citations: Citation[]
}

export default function SourcesSection({ citations }: Props) {
  if (citations.length === 0) return null

  return (
    <section className="section-wrap border-t border-rim mt-8">
      <h2 className="font-mono text-2xl font-bold text-ink mb-10">
        <DecryptedText text="SOURCES" />
      </h2>
      <div className="space-y-3 max-w-4xl">
        {citations.map((citation, i) => (
          <FadeContent key={citation.id} delay={i * 0.06}>
            <CitationItem citation={citation} index={i} />
          </FadeContent>
        ))}
      </div>
    </section>
  )
}
