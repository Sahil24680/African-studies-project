'use client'

import { useScrollProgress } from '@/hooks/useScrollProgress'

export default function ScrollProgressBar() {
  const progress = useScrollProgress()
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-[3px] bg-rim">
      <div
        className="h-full bg-accent transition-[width] duration-75 ease-linear"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
