'use client'

import { motion } from 'framer-motion'

interface Props {
  text: string
  className?: string
  delay?: number
  as?: 'p' | 'span' | 'h2' | 'h3'
}

export default function BlurText({ text, className, delay = 0, as: Tag = 'p' }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, filter: 'blur(14px)', y: 12 }}
      animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
      transition={{ duration: 0.9, delay, ease: 'easeOut' }}
    >
      <Tag className={className}>{text}</Tag>
    </motion.div>
  )
}
