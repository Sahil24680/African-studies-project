import ScrollReveal from '@/components/animations/ScrollReveal'

interface Props {
  text: string
  className?: string
}

export default function IntroSection({ text, className }: Props) {
  return (
    <section className={`section-wrap ${className ?? ''}`}>
      <div className="max-w-3xl">
        <ScrollReveal
          text={text}
          className="text-xl md:text-2xl text-ink-dim leading-relaxed font-sans"
        />
      </div>
    </section>
  )
}
