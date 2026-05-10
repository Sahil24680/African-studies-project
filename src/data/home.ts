import type { Statistic, Quote } from '@/types'

export const homeHero = {
  headline: 'Policing, Violence & the Black Mind',
  subheadline: 'Examining how systemic police violence shapes the mental health of Black individuals and families across the United States, United Kingdom, and Brazil.',
  thesis:
    'Police violence against Black communities is not merely a matter of physical harm—it is a sustained assault on psychological well-being. Through the lens of history, data, and lived experience, this project traces the mental health consequences of state violence across three nations.',
}

export const globalStats: Statistic[] = [
  {
    id: 'g-1',
    figure: '3+',
    figureNumeric: 3,
    suffix: 'x',
    label: 'More likely Black people are killed by police vs. white peers in the US',
    source: 'The Lancet, 2021',
  },
  {
    id: 'g-2',
    figure: '68',
    figureNumeric: 68,
    suffix: '%',
    label: 'Of Black adults in the US report racial discrimination causes significant stress',
    source: 'Placeholder Source',
  },
  {
    id: 'g-3',
    figure: '6,000+',
    figureNumeric: 6000,
    suffix: '+',
    label: 'People killed by police in Brazil in 2022 — the highest on record',
    source: 'Human Rights Watch, 2023',
  },
  {
    id: 'g-4',
    figure: '2x',
    figureNumeric: 2,
    suffix: 'x',
    label: 'More likely Black people are diagnosed with PTSD following police encounters',
    source: 'Placeholder Source',
  },
]

export const homeQuote: Quote = {
  text: '"The police are not here to protect us. They are here to manage and contain us."',
  attribution: 'Placeholder — Becoming Abolitionists',
  role: 'Chapter 3: Resistance and Reform',
}

export const overviewText =
  'This project examines the intersection of policing and mental health across three countries with the highest documented rates of police violence against Black people. Using academic research, government data, and community testimony, we trace the psychological toll of state-sanctioned violence from historical roots to present-day trauma.'
