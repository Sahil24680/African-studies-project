import type { ConditionDetail, Quote, Statistic } from '@/types'

export const individualsHero = {
  headline: 'The Psychological Cost',
  subheadline: 'How police violence shapes the mental health of Black individuals — through direct trauma, chronic stress, and the weight of witnessing.',
}

export const individualsIntro =
  'Police violence can have devastating effects on mental health within Black communities. Repeated exposure to racism, discrimination, incarceration, and violence can contribute to long-term psychological harm. Research explains that racial trauma develops through repeated exposure to racism and violence over time, and that trauma caused by racism can negatively affect emotional, psychological, and physical health. Repeatedly viewing videos of police violence online can also psychologically traumatize Black individuals even if they were not directly involved in the incident.'

export const conditions: ConditionDetail[] = [
  {
    id: 'c-1',
    condition: 'Post-Traumatic Stress Disorder (PTSD)',
    definition:
      'PTSD develops following exposure to traumatic events. For Black individuals, police encounters themselves — even without physical harm — can be traumatic enough to trigger PTSD symptoms. Racial trauma developed through exposure to racism and discrimination increases stress levels and can psychologically traumatize Black individuals and their families.',
    prevalence:
      'Research published in PubMed on Racial Trauma: Theory, Research, and Healing explains that racial trauma develops through repeated exposure to racism and violence over time. Black communities experience PTSD at significantly higher rates than white communities, with police violence identified as a key contributing factor.',
    symptoms: [
      'Flashbacks and intrusive memories of violent encounters',
      'Hypervigilance — constant alertness to threat, especially near police',
      'Avoidance of situations that might involve police contact',
      'Sleep disturbances and nightmares',
      'Emotional numbness and detachment',
    ],
    statistics: [],
  },
  {
    id: 'c-2',
    condition: 'Anxiety and Hypervigilance',
    definition:
      'Chronic exposure to the threat of police violence produces persistent anxiety and hypervigilance — a state of constant readiness for danger that is deeply corrosive to mental and physical health. Fear during police encounters is a documented psychological effect of repeated exposure to police brutality within Black communities.',
    prevalence:
      'Studies find that Black individuals report significantly higher rates of anxiety related to police contact. Many describe ongoing hypervigilance as a survival strategy shaped by generations of racial violence and discriminatory policing.',
    symptoms: [
      'Panic responses when seeing police cars or officers',
      'Persistent worry about the safety of family members',
      'Physical symptoms: elevated heart rate, difficulty breathing',
      'Difficulty concentrating due to constant threat monitoring',
      'Social withdrawal to reduce perceived risk',
      'Fear during police encounters',
    ],
    statistics: [
      {
        id: 'c2-s1',
        figure: '38',
        figureNumeric: 38,
        suffix: '%',
        label: 'Of the US prison population is Black, despite being 13% of the total population — a driver of community-level anxiety',
        source: 'NAACP Criminal Justice Fact Sheet',
      },
    ],
  },
  {
    id: 'c-3',
    condition: 'Depression',
    definition:
      'Repeated exposure to violence, loss, and systemic injustice — combined with the helplessness of seeing perpetrators face no consequences — is strongly associated with clinical depression. Police brutality can contribute to emotional exhaustion and depression, especially in communities that experience this violence as ongoing and inescapable.',
    prevalence:
      'Research links community-level police violence to increased rates of depression in Black communities, even among those not directly involved in violent incidents. Children in families affected by incarceration also experience elevated anxiety and depression.',
    symptoms: [
      'Persistent sadness and hopelessness following high-profile killings',
      'Emotional exhaustion from repeated exposure to violence',
      'Loss of interest in community engagement and civic life',
      'Feelings of powerlessness and futility',
      'Difficulty sustaining relationships and employment',
      'Increased substance use as a coping mechanism',
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
    condition: 'Chronic Stress and Racial Trauma',
    definition:
      'Racial trauma develops through repeated exposure to racism and violence over time. According to research on racial trauma theory, trauma caused by racism can negatively affect emotional, psychological, and physical health in ways that are lasting and cumulative. This chronic stress affects Black individuals even when they are not direct victims of police violence.',
    prevalence:
      'Racial trauma is recognized by researchers as a significant driver of health disparities in Black communities globally. The cumulative burden of police encounters, alongside everyday discrimination, constitutes a form of chronic stress with distinct psychological and physiological consequences.',
    symptoms: [
      'Chronic exhaustion from constant vigilance',
      'Frustration and anger with little outlet for expression',
      'Psychosomatic symptoms: headaches, elevated blood pressure, stomach issues',
      'Disillusionment with institutions, including healthcare and law enforcement',
      'Long-term psychological harm affecting future generations',
    ],
    statistics: [
      {
        id: 'c4-s1',
        figure: '3.5x',
        figureNumeric: 3.5,
        suffix: 'x',
        label: 'More likely Black Americans are killed by police than white Americans (1980–2018)',
        source: 'The Lancet, 2021',
      },
    ],
  },
]

export const researchHighlights: { title: string; finding: string; source: string }[] = [
  {
    title: 'Racial Trauma: Theory, Research, and Healing',
    finding:
      'Research published on PubMed explains that racial trauma develops through repeated exposure to racism and violence over time. The study explains that trauma caused by racism can negatively affect emotional, psychological, and physical health in ways that are lasting and cumulative across generations.',
    source: 'PubMed — Racial Trauma: Theory, Research, and Healing',
  },
  {
    title: 'Police Brutality and Mental Health in Black Communities',
    finding:
      'According to A Growing Dilemma: How Police Brutality Affects Mental Health in Black Communities, police brutality can contribute to PTSD, anxiety, depression, emotional exhaustion, fear during police encounters, chronic stress, and intergenerational trauma. The article also explains that repeatedly viewing videos of police violence online can psychologically traumatize Black individuals even if they were not directly involved.',
    source: 'A Growing Dilemma: How Police Brutality Affects Mental Health in Black Communities',
  },
  {
    title: 'Fatal Police Violence by Race and State in the USA',
    finding:
      'Research published in The Lancet found that Black Americans were approximately 3.5 times more likely to be killed by police than white Americans between 1980 and 2018. The study also estimated that police violence caused more than 30,000 deaths during that period.',
    source: 'The Lancet — Fatal Police Violence by Race and State in the USA, 2021',
  },
]

export const individualsQuote: Quote = {
  text: '"Research from PubMed — Racial Trauma: Theory, Research, and Healing explains that racial trauma develops through repeated exposure to racism and violence over time. The article explains that trauma caused by racism can negatively affect emotional, psychological, and physical health."',
  attribution: 'PubMed — Racial Trauma: Theory, Research, and Healing',
  role: 'Cited in: A Growing Dilemma: How Police Brutality Affects Mental Health in Black Communities',
}

export const individualsStats: Statistic[] = [
  {
    id: 'i-s1',
    figure: '3.5x',
    figureNumeric: 3.5,
    suffix: 'x',
    label: 'More likely Black Americans are killed by police than white Americans (1980–2018)',
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
