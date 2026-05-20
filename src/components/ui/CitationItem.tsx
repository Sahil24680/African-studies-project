import type { Citation } from '@/types'

interface Props {
  citation: Citation
  index: number
}

export default function CitationItem({ citation, index }: Props) {
  return (
    <div className="p-4 rounded-lg border border-rim-subtle">
      <p className="font-mono text-sm text-ink-faint leading-relaxed">
        <span className="text-ink-faint mr-2">{index + 1}.</span>
        <span dangerouslySetInnerHTML={{ __html: citation.mla.replace(/\*(.*?)\*/g, '<em>$1</em>') }} />
      </p>
    </div>
  )
}
