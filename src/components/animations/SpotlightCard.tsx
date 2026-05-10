'use client'

import { useRef, useState } from 'react'
import { cn } from '@/lib/utils'

interface Props {
  children: React.ReactNode
  className?: string
  spotlightColor?: string
}

export default function SpotlightCard({ children, className, spotlightColor = 'rgba(217,119,6,0.15)' }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState({ x: 0, y: 0, show: false })

  const handleMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top, show: true })
  }

  return (
    <div
      ref={ref}
      className={cn('relative overflow-hidden', className)}
      onMouseMove={handleMove}
      onMouseLeave={() => setPos(p => ({ ...p, show: false }))}
    >
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-500"
        style={{
          opacity: pos.show ? 1 : 0,
          background: `radial-gradient(300px circle at ${pos.x}px ${pos.y}px, ${spotlightColor}, transparent)`,
        }}
      />
      {children}
    </div>
  )
}
