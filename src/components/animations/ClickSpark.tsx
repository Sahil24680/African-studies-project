'use client'

import { useEffect, useRef } from 'react'

interface Spark {
  x: number
  y: number
  vx: number
  vy: number
  life: number
  color: string
  size: number
}

const COLORS = ['#D97706', '#F59E0B', '#FCD34D', '#ffffff', '#FBBF24']

export default function ClickSpark() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const sparks = useRef<Spark[]>([])
  const raf = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current!
    const ctx = canvas.getContext('2d')!

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize, { passive: true })

    const onClick = (e: MouseEvent) => {
      const count = 14
      for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.5
        const speed = 2.5 + Math.random() * 5.5
        sparks.current.push({
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 1,
          life: 1,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          size: 1.5 + Math.random() * 2,
        })
      }
    }
    window.addEventListener('click', onClick)

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      sparks.current = sparks.current.filter(s => s.life > 0)

      for (const s of sparks.current) {
        const prevX = s.x - s.vx * 2.5
        const prevY = s.y - s.vy * 2.5

        ctx.save()
        ctx.globalAlpha = s.life * s.life
        ctx.strokeStyle = s.color
        ctx.lineWidth = s.size
        ctx.lineCap = 'round'
        ctx.shadowColor = s.color
        ctx.shadowBlur = 6
        ctx.beginPath()
        ctx.moveTo(prevX, prevY)
        ctx.lineTo(s.x, s.y)
        ctx.stroke()
        ctx.restore()

        s.x += s.vx
        s.y += s.vy
        s.vy += 0.18
        s.vx *= 0.97
        s.life -= 0.038
      }

      raf.current = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('click', onClick)
      if (raf.current) cancelAnimationFrame(raf.current)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[9999]"
    />
  )
}
