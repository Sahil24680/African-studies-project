'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface Props {
  text: string
  className?: string
  tag?: 'p' | 'span' | 'blockquote'
}

export default function ScrollReveal({ text, className, tag: Tag = 'p' }: Props) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -100px 0px' })
  const words = text.split(' ')

  return (
    <Tag ref={ref} className={className} aria-label={text}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0.1 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: i * 0.035 }}
          className="inline-block mr-[0.3em]"
        >
          {word}
        </motion.span>
      ))}
    </Tag>
  )
}
