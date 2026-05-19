import type { ConditionDetail, Quote, Statistic } from '@/types'

export const individualsHero = {
  headline: 'The Psychological Cost',
  subheadline: 'How police violence shapes the mental health of Black individuals, through direct trauma, chronic stress, and the weight of witnessing.',
}

export const individualsIntro =
  'Repeated exposure to racism, discrimination, incarceration, and violence can contribute to long-term psychological harm within Black communities. According to "A Growing Dilemma: How Police Brutality Affects Mental Health in Black Communities," police brutality can contribute to PTSD, anxiety, depression, fear during police encounters, chronic stress, and intergenerational trauma. Police violence impacts more than the individuals who are directly involved. Their families and communities are affected emotionally and socially because losing someone or witnessing their incarceration can cause grief, fear, and mistrust towards law enforcement and the justice system.'

export const conditions: ConditionDetail[] = [
  {
    id: 'c-1',
    condition: 'Post-Traumatic Stress Disorder (PTSD)',
    definition:
      'PTSD develops following exposure to traumatic events. For Black individuals, police encounters themselves, even without physical harm, can be traumatic enough to trigger PTSD symptoms. Racial trauma developed through exposure to racism and discrimination increases stress levels and can psychologically traumatize Black individuals and their families.',
    prevalence:
      'Repeated exposure to racism, discrimination, incarceration, and violence can contribute to long-term psychological harm. Black communities experience PTSD at significantly higher rates, with police violence identified as a key contributing factor.',
    symptoms: [
      'Flashbacks and intrusive memories of violent encounters',
      'Hypervigilance, constant alertness to threat, especially near police',
      'Avoidance of situations that might involve police contact',
      'Sleep disturbances and nightmares',
      'Emotional numbness and detachment',
    ],
    statistics: [],
  },
  {
    id: 'c-2',
    condition: 'Anxiety',
    definition:
      'Chronic exposure to the threat of police violence produces persistent anxiety. Fear during police encounters is a documented psychological effect of repeated exposure to police brutality within Black communities.',
    prevalence:
      'Black individuals report significantly higher rates of anxiety related to police contact. Police violence impacts more than the individuals who are directly involved, their families and communities are affected emotionally and socially.',
    symptoms: [
      'Fear during police encounters',
      'Persistent worry about the safety of family members',
      'Physical symptoms: elevated heart rate, difficulty breathing',
      'Difficulty concentrating due to constant threat monitoring',
      'Social withdrawal to reduce perceived risk',
    ],
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
      'Repeated exposure to violence, loss, and systemic injustice is strongly associated with clinical depression. Police brutality can contribute to depression, especially in communities that experience this violence as ongoing and inescapable.',
    prevalence:
      'Research links community-level police violence to increased rates of depression in Black communities. Losing someone or witnessing their incarceration can cause grief, fear, and mistrust towards law enforcement and the justice system.',
    symptoms: [
      'Persistent sadness and hopelessness following high-profile killings',
      'Grief from losing someone to police violence or incarceration',
      'Loss of interest in community engagement and civic life',
      'Feelings of powerlessness and futility',
      'Mistrust towards law enforcement and the justice system',
    ],
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
      'Racial trauma develops through repeated exposure to racism and violence over time. As a result, repeated exposure to racism and violence can create long-term psychological harm that affects both individuals and future generations.',
    prevalence:
      'Communities with high incarceration rates have a higher chance of poverty, limited opportunities, and mistrust of government officials. This chronic stress contributes to intergenerational trauma within Black communities.',
    symptoms: [
      'Chronic stress from constant exposure to racial violence',
      'Fear of police raids and encounters',
      'Intergenerational transmission of trauma to children',
      'Mistrust of government officials and institutions',
      'Long-term psychological harm affecting future generations',
    ],
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
      'According to "A Growing Dilemma: How Police Brutality Affects Mental Health in Black Communities," police brutality can contribute to PTSD, anxiety, depression, fear during police encounters, chronic stress, and intergenerational trauma. Police violence impacts more than the individuals who are directly involved, their families and communities are affected emotionally and socially because losing someone or witnessing their incarceration can cause grief, fear, and mistrust towards law enforcement and the justice system.',
    source: 'A Growing Dilemma: How Police Brutality Affects Mental Health in Black Communities',
  },
  {
    title: 'Racial Trauma: Theory, Research, and Healing',
    finding:
      'Repeated exposure to racism, discrimination, incarceration, and violence can contribute to long-term psychological harm within Black communities. As a result, PubMed: Racial Trauma: Theory, Research, and Healing explains that repeated exposure to racism and violence can create long-term psychological harm that affects both individuals and future generations.',
    source: 'PubMed: Racial Trauma: Theory, Research, and Healing',
  },
  {
    title: 'Fatal Police Violence by Race and State in the USA',
    finding:
      'Between 1980 and 2018, Black Americans were about 3.5 times more likely to be killed by police than white Americans and police violence caused more than 30,000 deaths during that period.',
    source: 'The Lancet: Fatal Police Violence by Race and State in the USA, 2021',
  },
]

export const individualsQuote: Quote = {
  text: '"Repeated exposure to racism, discrimination, incarceration, and violence can contribute to long-term psychological harm within Black communities."',
  attribution: 'A Growing Dilemma: How Police Brutality Affects Mental Health in Black Communities',
  role: 'Referenced in the context of police violence and mental health',
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
