'use client'

import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { cn } from '@/lib/utils'

interface Props {
  text: string
  className?: string
  shimmerColor?: string
  speed?: number
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
}

export default function ShinyText({ text, className, shimmerColor = '#ffffff', speed = 3, as: Tag = 'span' }: Props) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <Tag
      ref={ref}
      className={cn('relative inline-block overflow-hidden', className)}
      style={{
        backgroundImage: inView
          ? `linear-gradient(110deg, currentColor 40%, ${shimmerColor} 50%, currentColor 60%)`
          : 'none',
        backgroundSize: '200% 100%',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: inView ? 'transparent' : undefined,
        backgroundClip: 'text',
        animation: inView ? `shimmerSweep ${speed}s ease-in-out infinite` : 'none',
      }}
    >
      {text}
    </Tag>
  )
}
