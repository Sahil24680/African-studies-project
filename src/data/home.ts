import type { Statistic, Quote } from '@/types'

export const homeHero = {
  headline: 'Policing, Violence & the Black Mind',
  subheadline: 'Examining how systemic police violence shapes the mental health of Black individuals and families across the United States, United Kingdom, and Brazil.',
  thesis:
    'Police violence against Black people is a major global issue that affects millions of families and communities. In countries such as the United States, the United Kingdom, and Brazil, Black communities are disproportionately affected by police brutality, racial profiling, and mass incarceration. Police violence is not just a criminal justice concern; it is also a public and mental health crisis. Multiple encounters or exposure to police brutality can lead to PTSD, anxiety, depression, emotional trauma, and intergenerational trauma within Black communities.',
}

export const globalStats: Statistic[] = [
  {
    id: 'g-1',
    figure: '3.5x',
    figureNumeric: 3.5,
    suffix: 'x',
    label: 'More likely Black Americans are killed by police vs. white Americans (1980–2018)',
    source: 'The Lancet, 2021',
  },
  {
    id: 'g-2',
    figure: '38',
    figureNumeric: 38,
    suffix: '%',
    label: 'Of the US prison population is Black, despite being 13% of the total population',
    source: 'NAACP Criminal Justice Fact Sheet',
  },
  {
    id: 'g-3',
    figure: '30,000+',
    figureNumeric: 30000,
    suffix: '+',
    label: 'Deaths caused by police violence in the US between 1980 and 2018',
    source: 'The Lancet, 2021',
  },
  {
    id: 'g-4',
    figure: '300+',
    figureNumeric: 300,
    label: 'Years Brazil practiced slavery — more than any other country in the Americas',
    source: 'Human Rights Watch, 2020',
  },
]

export const homeQuote: Quote = {
  text: '"The book explains how Black communities have historically resisted oppression while also discussing how policing and incarceration systems often dehumanize marginalized communities and create long-lasting emotional and psychological harm."',
  attribution: 'Becoming Abolitionists',
  role: 'Chapter 3: Resistance and Reform / Chapter 7: Dehumanization, Disability, and Reform',
}

export const overviewText =
  'Police violence against Black people is a major global issue affecting millions of families and communities. In countries such as the United States, the United Kingdom, and Brazil, Black communities are disproportionately affected by police brutality, racial profiling, and mass incarceration. Even though these countries are different in terms of government and cultures, they all share histories of slavery, colonialism, systematic racism, and racial inequality that still influence policing today. Police violence is not just a criminal justice concern; it is also a public and mental health crisis.'
