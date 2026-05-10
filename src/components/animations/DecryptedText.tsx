'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$@%&'

interface Props {
  text: string
  className?: string
  delay?: number
  speed?: number
}

export default function DecryptedText({ text, className, delay = 0, speed = 40 }: Props) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const [displayed, setDisplayed] = useState(text)
  const started = useRef(false)

  useEffect(() => {
    if (!inView || started.current) return
    started.current = true

    const timeout = setTimeout(() => {
      const totalFrames = 30
      let frame = 0
      const interval = setInterval(() => {
        frame++
        setDisplayed(
          text
            .split('')
            .map((char, i) => {
              if (char === ' ') return ' '
              const revealAt = Math.floor((i / text.length) * totalFrames)
              return frame >= revealAt ? char : CHARS[Math.floor(Math.random() * CHARS.length)]
            })
            .join('')
        )
        if (frame >= totalFrames) clearInterval(interval)
      }, speed)
      return () => clearInterval(interval)
    }, delay * 1000)

    return () => clearTimeout(timeout)
  }, [inView, text, delay, speed])

  return (
    <span ref={ref} className={className} aria-label={text}>
      {displayed}
    </span>
  )
}
