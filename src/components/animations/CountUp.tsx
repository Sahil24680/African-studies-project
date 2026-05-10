'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface Props {
  to: number
  from?: number
  duration?: number
  suffix?: string
  prefix?: string
  className?: string
  decimals?: number
}

export default function CountUp({ to, from = 0, duration = 2.2, suffix = '', prefix = '', className, decimals = 0 }: Props) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const [value, setValue] = useState(from)
  const hasStarted = useRef(false)

  useEffect(() => {
    if (!inView || hasStarted.current) return
    hasStarted.current = true

    let startTime: number | null = null
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const elapsed = timestamp - startTime
      const progress = Math.min(elapsed / (duration * 1000), 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = from + (to - from) * eased
      setValue(Number(current.toFixed(decimals)))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [inView, from, to, duration, decimals])

  return (
    <span ref={ref} className={className}>
      {prefix}{decimals > 0 ? value.toFixed(decimals) : Math.floor(value).toLocaleString()}{suffix}
    </span>
  )
}
