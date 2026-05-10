import type { Citation } from '@/types'

interface Props {
  citation: Citation
  index: number
}

export default function CitationItem({ citation, index }: Props) {
  const content = (
    <p className="font-mono text-sm text-ink-faint leading-relaxed">
      <span className="text-ink-faint mr-2">{index + 1}.</span>
      <span dangerouslySetInnerHTML={{ __html: citation.mla.replace(/\*(.*?)\*/g, '<em>$1</em>') }} />
    </p>
  )

  if (citation.url) {
    return (
      <a
        href={citation.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block p-4 rounded-lg border border-rim-subtle hover:border-rim transition-colors hover:bg-panel group"
      >
        {content}
        <span className="text-xs text-ink-faint group-hover:text-accent transition-colors mt-1 block font-mono">
          ↗ View source
        </span>
      </a>
    )
  }

  return <div className="p-4 rounded-lg border border-rim-subtle">{content}</div>
}
