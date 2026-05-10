'use client'

import { useEffect, useRef } from 'react'

interface Props {
  className?: string
  opacity?: number
}

export default function Iridescence({ className, opacity = 0.18 }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const raf = useRef<number>(0)
  const mouse = useRef({ x: 0.5, y: 0.5 })

  useEffect(() => {
    const canvas = canvasRef.current!
    const ctx = canvas.getContext('2d')!

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.current.x = (e.clientX - rect.left) / rect.width
      mouse.current.y = (e.clientY - rect.top) / rect.height
    }
    window.addEventListener('mousemove', onMove, { passive: true })

    let t = 0
    const draw = () => {
      t += 0.008
      const { width, height } = canvas
      ctx.clearRect(0, 0, width, height)

      const mx = mouse.current.x
      const my = mouse.current.y

      const orbs = [
        { x: (0.3 + Math.sin(t) * 0.25 + mx * 0.15) * width, y: (0.3 + Math.cos(t * 0.7) * 0.25 + my * 0.15) * height, r: width * 0.55, h: (t * 35) % 360 },
        { x: (0.7 + Math.cos(t * 1.2) * 0.2 + mx * 0.1) * width, y: (0.6 + Math.sin(t * 0.9) * 0.2 + my * 0.1) * height, r: width * 0.45, h: (t * 35 + 110) % 360 },
        { x: (0.5 + Math.sin(t * 0.6 + 1) * 0.3) * width, y: (0.5 + Math.cos(t * 1.1 + 2) * 0.25) * height, r: width * 0.4, h: (t * 35 + 230) % 360 },
      ]

      for (const orb of orbs) {
        const grad = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.r)
        grad.addColorStop(0, `hsla(${orb.h}, 80%, 65%, ${opacity})`)
        grad.addColorStop(0.5, `hsla(${(orb.h + 40) % 360}, 70%, 55%, ${opacity * 0.5})`)
        grad.addColorStop(1, `hsla(${(orb.h + 80) % 360}, 60%, 45%, 0)`)
        ctx.fillStyle = grad
        ctx.fillRect(0, 0, width, height)
      }

      raf.current = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      window.removeEventListener('mousemove', onMove)
      if (raf.current) cancelAnimationFrame(raf.current)
    }
  }, [opacity])

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 w-full h-full ${className ?? ''}`}
    />
  )
}
