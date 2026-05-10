'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface Props {
  children: React.ReactNode
  delay?: number
  distance?: number
  className?: string
  once?: boolean
}

export default function AnimatedContent({ children, delay = 0, distance = 40, className, once = true }: Props) {
  const ref = useRef(null)
  const inView = useInView(ref, { once, margin: '0px 0px -80px 0px' })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: distance }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}
