import type { Statistic, Quote } from '@/types'

export const homeHero = {
  headline: 'Policing, Violence & the Black Mind',
  subheadline: 'Examining how systemic police violence shapes the mental health of Black individuals and families across the United States, United Kingdom, and Brazil.',
  intro:
    'Police violence against Black people is a major global issue that affects millions of families and communities. In countries such as the United States, the United Kingdom, and Brazil, Black communities are disproportionately affected by police brutality, racial profiling, and mass incarceration. Even though these countries are different in terms of government and cultures, they all share histories of slavery, colonialism, systematic racism, and racial inequality that still influence policing today. Police violence is not just a criminal justice concern; it is also a public and mental health crisis. Multiple encounters or exposure to police brutality can lead to numerous trauma within Black communities. In addition, racial trauma developed through exposure to racism and discrimination increases stress levels and can psychologically traumatize Black individuals and their families.',
}

export const globalStats: Statistic[] = [
  {
    id: 'g-1',
    figure: '3.5x',
    figureNumeric: 3.5,
    suffix: 'x',
    label: 'Black Americans were approximately 3.5 times more likely to be killed by police than white Americans between 1980 and 2018',
    source: 'The Lancet, 2021',
  },
  {
    id: 'g-2',
    figure: '38%',
    figureNumeric: 38,
    suffix: '%',
    label: 'Black Americans make up approximately 13% of the US population but around 38% of the prison population',
    source: 'NAACP Criminal Justice Fact Sheet',
  },
  {
    id: 'g-3',
    figure: '30,000+',
    figureNumeric: 30000,
    suffix: '+',
    label: 'Police violence caused more than 30,000 deaths from 1980 to 2018',
    source: 'The Lancet, 2021',
  },
  {
    id: 'g-4',
    figure: '300+',
    figureNumeric: 300,
    suffix: '+',
    label: 'Brazil imported more enslaved Africans than any other country in the Americas, and slavery lasted there for more than 300 years before officially ending in 1888',
    source: 'Human Rights Watch, 2020',
  },
]

export const homeQuote: Quote = {
  text: '"The book explains how Black communities have historically resisted oppression while also discussing how policing and incarceration systems often dehumanize marginalized communities and create long-lasting emotional and psychological harm."',
  attribution: 'Becoming Abolitionists',
  role: 'Chapter 3: Resistance and Reform / Chapter 7: Dehumanization, Disability, and Reform',
}

export const overviewText =
  'Police violence against Black people is a major global issue that affects millions of families and communities. In countries such as the United States, the United Kingdom, and Brazil, Black communities are disproportionately affected by police brutality, racial profiling, and mass incarceration. Even though these countries are different in terms of government and cultures, they all share histories of slavery, colonialism, systematic racism, and racial inequality that still influence policing today. Police violence is not just a criminal justice concern; it is also a public and mental health crisis.'
