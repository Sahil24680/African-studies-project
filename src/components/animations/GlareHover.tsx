'use client'

import { useRef, useState } from 'react'
import { cn } from '@/lib/utils'

interface Props {
  children: React.ReactNode
  className?: string
}

export default function GlareHover({ children, className }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 })

  const handleMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    setGlare({ x, y, opacity: 0.12 })
  }

  return (
    <div
      ref={ref}
      className={cn('relative overflow-hidden', className)}
      onMouseMove={handleMove}
      onMouseLeave={() => setGlare(g => ({ ...g, opacity: 0 }))}
    >
      {children}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,${glare.opacity}) 0%, transparent 60%)`,
        }}
      />
    </div>
  )
}
