'use client'

import { motion } from 'framer-motion'

interface Props {
  color?: string
  className?: string
  count?: number
}

const orbs = [
  { size: 500, initialX: 100, initialY: 50, animX: [100, 500, 200, 100], animY: [50, 200, 400, 50], duration: 20 },
  { size: 350, initialX: 400, initialY: 300, animX: [400, 150, 600, 400], animY: [300, 100, 400, 300], duration: 25 },
  { size: 280, initialX: 600, initialY: 100, animX: [600, 300, 700, 600], animY: [100, 350, 150, 100], duration: 18 },
]

export default function GradientOrbs({ color = '#D97706', className }: Props) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className ?? ''}`}>
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full opacity-[0.12] blur-[100px]"
          style={{
            background: color,
            width: orb.size,
            height: orb.size,
            left: orb.initialX,
            top: orb.initialY,
          }}
          animate={{ x: orb.animX, y: orb.animY }}
          transition={{ duration: orb.duration, repeat: Infinity, ease: 'linear', repeatType: 'loop' }}
        />
      ))}
    </div>
  )
}
