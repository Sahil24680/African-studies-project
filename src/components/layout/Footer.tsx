import Link from 'next/link'
import { navLinks } from '@/data/navigation'

export default function Footer() {
  return (
    <footer className="border-t border-rim bg-card mt-24">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <p className="font-display text-lg font-bold text-ink mb-3">
              Policing, Violence &amp; the Black Mind
            </p>
            <p className="text-sm text-ink-faint leading-relaxed">
              A project by Mamota Mim &amp; Rezoan Sahil examining police violence and mental health across the US, UK, and Brazil.
            </p>
          </div>
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-ink-faint mb-4">Pages</p>
            <ul className="space-y-2">
              {navLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-ink-dim hover:text-ink transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-ink-faint mb-4">Course</p>
            <p className="text-sm text-ink-dim leading-relaxed">
              Final Project — Global Black Experience<br />
              Sources include <em>Becoming Abolitionists</em> by Andrea J. Ritchie and five academic sources.
            </p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-rim-subtle">
          <p className="text-xs text-ink-faint font-mono text-center">
            © 2025 Mamota Mim &amp; Rezoan Sahil · All sources cited in MLA format on each page
          </p>
        </div>
      </div>
    </footer>
  )
}
