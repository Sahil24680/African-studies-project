import type { ConditionDetail, Quote, Statistic } from '@/types'

export const individualsHero = {
  headline: 'The Psychological Cost',
  subheadline: 'How police violence shapes the mental health of Black individuals, through direct trauma, chronic stress, and the weight of witnessing.',
}

export const individualsIntro =
  'Repeated exposure to racism, discrimination, incarceration, and violence can contribute to long-term psychological harm within Black communities. Police violence impacts more than the individuals who are directly involved. Their families and communities are affected emotionally and socially because losing someone or witnessing their incarceration can cause grief, fear, and mistrust towards law enforcement and the justice system.'

export const conditions: ConditionDetail[] = [
  {
    id: 'c-1',
    condition: 'Post-Traumatic Stress Disorder (PTSD)',
    definition:
      'Racial trauma developed through exposure to racism and discrimination increases stress levels and can psychologically traumatize Black individuals and their families.',
    prevalence: '',
    symptoms: [],
    statistics: [],
  },
  {
    id: 'c-2',
    condition: 'Anxiety',
    definition:
      'Repeated exposure to racism, discrimination, incarceration, and violence can contribute to anxiety and fear during police encounters within Black communities.',
    prevalence: '',
    symptoms: [],
    statistics: [
      {
        id: 'c2-s1',
        figure: '38',
        figureNumeric: 38,
        suffix: '%',
        label: 'Black Americans make up approximately 13% of the US population but around 38% of the prison population',
        source: 'NAACP Criminal Justice Fact Sheet',
      },
    ],
  },
  {
    id: 'c-3',
    condition: 'Depression',
    definition:
      'Losing someone or witnessing their incarceration can cause grief, fear, and mistrust towards law enforcement and the justice system, contributing to depression within Black communities.',
    prevalence: '',
    symptoms: [],
    statistics: [
      {
        id: 'c3-s1',
        figure: '30,000+',
        figureNumeric: 30000,
        label: 'Estimated deaths caused by police violence in the US from 1980 to 2018',
        source: 'The Lancet, 2021',
      },
    ],
  },
  {
    id: 'c-4',
    condition: 'Chronic Stress and Intergenerational Trauma',
    definition:
      'Repeated exposure to racism, discrimination, incarceration, and violence can contribute to long-term psychological harm within Black communities that affects both individuals and future generations.',
    prevalence: '',
    symptoms: [],
    statistics: [
      {
        id: 'c4-s1',
        figure: '3.5x',
        figureNumeric: 3.5,
        suffix: 'x',
        label: 'More likely Black Americans are killed by police than white Americans (1980 to 2018)',
        source: 'The Lancet, 2021',
      },
    ],
  },
]

export const researchHighlights: { title: string; finding: string; source: string }[] = [
  {
    title: 'Police Brutality and Mental Health in Black Communities',
    finding:
      'Repeated exposure to racism, discrimination, incarceration, and violence can contribute to long-term psychological harm within Black communities. Police violence impacts more than the individuals who are directly involved. Their families and communities are affected emotionally and socially because losing someone or witnessing their incarceration can cause grief, fear, and mistrust towards law enforcement and the justice system.',
    source: 'Young-Drake, Reginald, et al. A Growing Dilemma: How Police Brutality Affects Mental Health in Black Communities. Thurgood Marshall Civil Rights Center at Howard University School of Law, 2021.',
  },
  {
    title: 'Racial Trauma: Theory, Research, and Healing',
    finding:
      'Repeated exposure to racism, discrimination, incarceration, and violence can contribute to long-term psychological harm within Black communities that affects both individuals and future generations.',
    source: 'Carter, Robert T., et al. Racial Trauma: Theory, Research, and Healing. American Psychologist, vol. 74, no. 1, 2019.',
  },
  {
    title: 'Fatal Police Violence by Race and State in the USA',
    finding:
      'Between 1980 and 2018, Black Americans were about 3.5 times more likely to be killed by police than white Americans and police violence caused more than 30,000 deaths during that period.',
    source: 'Feldman, Justin M., et al. Fatal Police Violence by Race and State in the USA, 1980 to 2019. The Lancet, vol. 398, no. 10307, 2021.',
  },
]

export const individualsQuote: Quote = {
  text: '"Repeated exposure to racism, discrimination, incarceration, and violence can contribute to long-term psychological harm within Black communities."',
  attribution: 'A Growing Dilemma: How Police Brutality Affects Mental Health in Black Communities',
  role: 'Young-Drake, Reginald, et al. Thurgood Marshall Civil Rights Center, 2021',
}

export const individualsStats: Statistic[] = [
  {
    id: 'i-s1',
    figure: '3.5x',
    figureNumeric: 3.5,
    suffix: 'x',
    label: 'More likely Black Americans are killed by police than white Americans (1980 to 2018)',
    source: 'The Lancet, 2021',
  },
  {
    id: 'i-s2',
    figure: '30,000+',
    figureNumeric: 30000,
    label: 'Estimated deaths from police violence in the US from 1980 to 2018',
    source: 'The Lancet, 2021',
  },
  {
    id: 'i-s3',
    figure: '38',
    figureNumeric: 38,
    suffix: '%',
    label: 'Of the US prison population is Black, despite being 13% of the total US population',
    source: 'NAACP Criminal Justice Fact Sheet',
  },
]
