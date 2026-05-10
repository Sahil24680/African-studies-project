import type { NavLink } from '@/types'

export const navLinks: NavLink[] = [
  { label: 'Home', shortLabel: 'Home', href: '/', accent: 'accent' },
  { label: 'Historical Context', shortLabel: 'History', href: '/historical-context', accent: 'accent' },
  { label: 'USA', shortLabel: 'USA', href: '/police-violence-usa', accent: 'usa' },
  { label: 'United Kingdom', shortLabel: 'UK', href: '/police-violence-uk', accent: 'uk' },
  { label: 'Brazil', shortLabel: 'Brazil', href: '/police-violence-brazil', accent: 'brazil' },
  { label: 'Individuals', shortLabel: 'Individuals', href: '/mental-health-individuals', accent: 'violet' },
  { label: 'Families', shortLabel: 'Families', href: '/mental-health-families', accent: 'violet' },
]
