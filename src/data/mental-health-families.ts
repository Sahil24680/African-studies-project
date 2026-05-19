import type { FamilyImpactType, Quote, Statistic } from '@/types'

export const familiesHero = {
  headline: 'Grief Without Justice',
  subheadline: 'How police violence and mass incarceration reverberate through Black families, in grief, economic loss, and trauma passed across generations.',
}

export const familiesIntro =
  'Mass incarceration is the high rate of imprisonment of people, especially marginalized groups. Black communities are disproportionately affected because of racial profiling, over-policing, and unequal sentencing. According to the NAACP Criminal Justice Fact Sheet, Black Americans are incarcerated at significantly higher rates than white Americans and are portrayed as criminals even for minor actions. This form of racial inequality in incarceration systems is also shown in the United Kingdom and Brazil. Also, communities with high incarceration rates, regardless of the country, have a higher chance of poverty, limited opportunities, and mistrust of government officials. Even though the system has always been against them, Black communities have resisted racism through protests and social movements to bring global attention to racial discrimination.'

export const impactTypes: FamilyImpactType[] = [
  {
    id: 'fi-1',
    title: 'Family Separation',
    description:
      'Mass incarceration and police killings tear families apart. Black families are disproportionately affected because of racial profiling, over-policing, and unequal sentencing. According to the NAACP Criminal Justice Fact Sheet, Black Americans are incarcerated at significantly higher rates than white Americans.',
    statistics: [
      {
        id: 'fi1-s1',
        figure: '38',
        figureNumeric: 38,
        suffix: '%',
        label: 'Of the US prison population is Black, despite being 13% of the total population',
        source: 'NAACP Criminal Justice Fact Sheet',
      },
    ],
  },
  {
    id: 'fi-2',
    title: 'Financial Hardship',
    description:
      'Communities with high incarceration rates have a higher chance of poverty and limited opportunities. Black Americans are portrayed as criminals even for minor actions, leading to disproportionate incarceration that destroys the economic foundations of families.',
    statistics: [
      {
        id: 'fi2-s1',
        figure: '13',
        figureNumeric: 13,
        suffix: '%',
        label: 'Black Americans make up 13% of the US population but approximately 38% of the prison population',
        source: 'NAACP Criminal Justice Fact Sheet',
      },
    ],
  },
  {
    id: 'fi-3',
    title: 'Anxiety and Depression in Children',
    description:
      'Children in families impacted by incarceration or police violence experience elevated anxiety and depression. Losing someone or witnessing their incarceration can cause grief, fear, and mistrust towards law enforcement and the justice system.',
    statistics: [],
  },
  {
    id: 'fi-4',
    title: 'Restriction on Employment and Education After Release',
    description:
      'Incarceration creates lasting restrictions on employment, housing, and education for those who are released. Communities with high incarceration rates have a higher chance of poverty, limited opportunities, and mistrust of government officials. These restrictions affect not only the individual but their entire family.',
    statistics: [
      {
        id: 'fi4-s1',
        figure: '3.5x',
        figureNumeric: 3.5,
        suffix: 'x',
        label: 'More likely Black Americans are killed by police than white Americans between 1980 and 2018',
        source: 'The Lancet, 2021',
      },
    ],
  },
]

export const intergenerational = {
  title: 'Intergenerational Trauma',
  description:
    'As a result of repeated exposure to racism and violence, PubMed: Racial Trauma: Theory, Research, and Healing explains that this can create long-term psychological harm that affects both individuals and future generations. Communities with high incarceration rates, regardless of the country, have a higher chance of poverty, limited opportunities, and mistrust of government officials. These effects often continue across generations and contribute to long-term instability within Black communities.',
  mechanisms: [
    'Family separation',
    'Financial hardship',
    'Housing instability',
    'Emotional trauma',
    'Anxiety and depression in children',
    'Restriction on employment and education after release',
  ],
}

export const familiesQuote: Quote = {
  text: '"The book explains how Black communities have historically resisted oppression while also discussing how policing and incarceration systems often dehumanize marginalized communities and create long-lasting emotional and psychological harm."',
  attribution: 'Becoming Abolitionists',
  role: 'Chapter 7: Dehumanization, Disability, and Reform',
}

export const familiesStats: Statistic[] = [
  {
    id: 'fam-s1',
    figure: '38',
    figureNumeric: 38,
    suffix: '%',
    label: 'Of the US prison population is Black, despite making up 13% of the total US population',
    source: 'NAACP Criminal Justice Fact Sheet',
  },
  {
    id: 'fam-s2',
    figure: '3.5x',
    figureNumeric: 3.5,
    suffix: 'x',
    label: 'More likely Black Americans are killed by police than white Americans (1980 to 2018)',
    source: 'The Lancet, 2021',
  },
  {
    id: 'fam-s4',
    figure: '300+',
    figureNumeric: 300,
    label: 'Years Brazil practiced slavery before officially ending in 1888',
    source: 'Human Rights Watch, 2020',
  },
]
