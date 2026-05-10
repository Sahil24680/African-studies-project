'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { navLinks } from '@/data/navigation'
import ScrollProgressBar from './ScrollProgressBar'
import { cn } from '@/lib/utils'

const accentColorVars: Record<string, string> = {
  accent: 'var(--color-accent)',
  usa: 'var(--color-usa)',
  uk: 'var(--color-uk)',
  brazil: 'var(--color-brazil)',
  violet: 'var(--color-violet)',
}

export default function Navigation() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <>
      <ScrollProgressBar />
      <nav className="fixed top-[3px] left-0 right-0 z-50 border-b border-rim bg-canvas/90 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20 h-16 flex items-center justify-between">
          <Link href="/" className="font-display text-sm font-bold text-ink tracking-tight leading-none">
            Policing &amp;<br />
            <span className="text-accent">the Black Mind</span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map(link => {
              const active = pathname === link.href
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      'px-3 py-1.5 rounded-lg text-sm font-medium transition-colors',
                      active ? 'text-ink bg-panel' : 'text-ink-dim hover:text-ink hover:bg-panel/60'
                    )}
                    style={active ? { color: accentColorVars[link.accent] } : {}}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-panel transition-colors"
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span className={cn('block w-5 h-px bg-ink transition-transform duration-200', open && 'rotate-45 translate-y-[5px]')} />
            <span className={cn('block w-5 h-px bg-ink transition-opacity duration-200', open && 'opacity-0')} />
            <span className={cn('block w-5 h-px bg-ink transition-transform duration-200', open && '-rotate-45 -translate-y-[5px]')} />
          </button>
        </div>

        {/* Mobile drawer */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="lg:hidden overflow-hidden border-t border-rim"
            >
              <ul className="px-6 py-4 flex flex-col gap-1">
                {navLinks.map(link => {
                  const active = pathname === link.href
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          'block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors',
                          active ? 'bg-panel text-ink' : 'text-ink-dim hover:text-ink hover:bg-panel/60'
                        )}
                        style={active ? { color: accentColorVars[link.accent] } : {}}
                      >
                        {link.label}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  )
}
