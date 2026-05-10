'use client'

import dynamic from 'next/dynamic'
import SplitText from '@/components/animations/SplitText'
import BlurText from '@/components/animations/BlurText'
import GradientOrbs from '@/components/animations/GradientOrbs'
import AnimatedContent from '@/components/animations/AnimatedContent'

const Iridescence = dynamic(() => import('@/components/animations/Iridescence'), { ssr: false })

const accentColorVars: Record<string, string> = {
  accent: 'var(--color-accent)',
  usa: 'var(--color-usa)',
  uk: 'var(--color-uk)',
  brazil: 'var(--color-brazil)',
  violet: 'var(--color-violet)',
}

interface Props {
  headline: string
  subheadline: string
  accentColor?: string
  eyebrow?: string
  children?: React.ReactNode
  useIridescence?: boolean
}

export default function HeroSection({ headline, subheadline, accentColor = 'accent', eyebrow, children, useIridescence = true }: Props) {
  const color = accentColorVars[accentColor] ?? accentColorVars.accent

  return (
    <section className="relative min-h-[92vh] flex items-center pt-20 overflow-hidden">
      {useIridescence ? (
        <Iridescence opacity={0.22} />
      ) : (
        <GradientOrbs color={color} />
      )}
      <GradientOrbs color={color} />
      {/* grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      <div className="relative z-10 section-wrap w-full">
        {eyebrow && (
          <AnimatedContent delay={0}>
            <p className="font-mono text-xs uppercase tracking-[0.2em] mb-6" style={{ color }}>
              {eyebrow}
            </p>
          </AnimatedContent>
        )}
        <SplitText
          text={headline}
          tag="h1"
          delay={0.1}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-ink leading-none tracking-tight mb-6 max-w-5xl"
        />
        <BlurText
          text={subheadline}
          delay={0.5}
          as="p"
          className="text-lg md:text-xl text-ink-dim max-w-2xl leading-relaxed"
        />
        {children && (
          <AnimatedContent delay={0.8} className="mt-10">
            {children}
          </AnimatedContent>
        )}
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-canvas to-transparent pointer-events-none" />
    </section>
  )
}
