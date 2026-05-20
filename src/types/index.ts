export interface NavLink {
  label: string
  href: string
  shortLabel: string
  accent: string
}

export interface Statistic {
  id: string
  figure: string
  figureNumeric: number
  suffix?: string
  prefix?: string
  label: string
  subtext?: string
  source?: string
}

export interface TimelineEvent {
  id: string
  year: string
  title: string
  description: string
  country: 'USA' | 'UK' | 'Brazil' | 'Global'
  tags?: string[]
}

export interface KeyEvent {
  id: string
  year: string
  name: string
  location: string
  description: string
  significance: string
  country: 'USA' | 'UK' | 'Brazil'
}

export interface Quote {
  text: string
  attribution: string
  role?: string
}

export interface SystemicPattern {
  title: string
  description: string
}

export interface CountryPageContent {
  country: 'USA' | 'UK' | 'Brazil'
  accentClass: string
  hero: { headline: string; subheadline: string }
  intro: string
  paragraphs: string[]
  statistics: Statistic[]
  keyEvents: KeyEvent[]
  systemicPatterns: SystemicPattern[]
  quote: Quote
}

export interface ConditionDetail {
  id: string
  condition: string
  definition: string
  prevalence: string
  symptoms: string[]
  statistics: Statistic[]
}

export interface FamilyImpactType {
  id: string
  title: string
  description: string
  statistics: Statistic[]
}

export interface Citation {
  id: string
  mla: string
  url?: string
  pages?: string[]
}
