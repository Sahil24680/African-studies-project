import type { ConditionDetail, Quote, Statistic } from '@/types'

export const individualsHero = {
  headline: 'The Psychological Cost',
  subheadline: 'How police violence shapes the mental health of Black individuals — through direct trauma, chronic stress, and the weight of witnessing.',
}

export const individualsIntro =
  'Police violence does not only harm those directly in its path. Research demonstrates that the threat of violence, the witnessing of violence, and the knowledge that violence against Black people goes unpunished all generate measurable psychological trauma. From PTSD to Racial Battle Fatigue, the mental health toll of living in a society that polices Black bodies is profound and pervasive.'

export const conditions: ConditionDetail[] = [
  {
    id: 'c-1',
    condition: 'Post-Traumatic Stress Disorder (PTSD)',
    definition:
      'PTSD develops following exposure to traumatic events. For Black Americans, police encounters themselves—even without physical harm—can be traumatic enough to trigger PTSD symptoms.',
    prevalence:
      'Black Americans are estimated to experience PTSD at 2–3 times the rate of white Americans, with police violence identified as a key contributing factor.',
    symptoms: [
      'Flashbacks and intrusive memories of violent encounters',
      'Hypervigilance — constant alertness to threat, especially near police',
      'Avoidance of situations that might involve police contact',
      'Sleep disturbances and nightmares',
      'Emotional numbness and detachment',
    ],
    statistics: [
      {
        id: 'c1-s1',
        figure: '2–3x',
        figureNumeric: 2.5,
        suffix: 'x',
        label: 'Higher PTSD rates in Black communities vs. white communities',
        source: 'Placeholder Source',
      },
    ],
  },
  {
    id: 'c-2',
    condition: 'Anxiety and Hypervigilance',
    definition:
      'Chronic exposure to the threat of police violence produces persistent anxiety and hypervigilance—a state of constant readiness for danger that is deeply corrosive to mental and physical health.',
    prevalence:
      'Studies find that Black Americans report significantly higher rates of anxiety related to police contact than white Americans, with many describing ongoing hypervigilance as a survival strategy.',
    symptoms: [
      'Panic responses when seeing police cars or officers',
      'Persistent worry about the safety of family members',
      'Physical symptoms: elevated heart rate, difficulty breathing',
      'Difficulty concentrating due to constant threat monitoring',
      'Social withdrawal to reduce perceived risk',
    ],
    statistics: [
      {
        id: 'c2-s1',
        figure: '68',
        figureNumeric: 68,
        suffix: '%',
        label: 'Of Black adults report race-related stress affecting their mental health',
        source: 'Placeholder Source',
      },
    ],
  },
  {
    id: 'c-3',
    condition: 'Depression',
    definition:
      'Repeated exposure to violence, loss, and systemic injustice—combined with the helplessness of seeing perpetrators face no consequences—is strongly associated with clinical depression.',
    prevalence:
      'Research links community-level police violence to increased rates of depression in Black communities, even among those not directly involved in violent incidents.',
    symptoms: [
      'Persistent sadness and hopelessness following high-profile killings',
      'Loss of interest in community engagement and civic life',
      'Feelings of powerlessness and futility',
      'Difficulty sustaining relationships and employment',
      'Increased substance use as a coping mechanism',
    ],
    statistics: [
      {
        id: 'c3-s1',
        figure: '1.3x',
        figureNumeric: 1.3,
        suffix: 'x',
        label: 'Higher depression rates in Black Americans living in high-policing areas',
        source: 'Placeholder Source',
      },
    ],
  },
  {
    id: 'c-4',
    condition: 'Racial Battle Fatigue',
    definition:
      'A term coined by scholar William A. Smith describing the mental and emotional exhaustion of constantly navigating racism. For Black people, the cumulative burden of police encounters—alongside everyday discrimination—constitutes a form of chronic stress with distinct psychological and physiological consequences.',
    prevalence:
      'While difficult to quantify, racial battle fatigue is recognized by researchers as a significant driver of health disparities in Black communities.',
    symptoms: [
      'Chronic exhaustion from constant vigilance and code-switching',
      'Frustration and anger with little outlet for expression',
      'Resentment of the emotional labor required to educate others about racism',
      'Psychosomatic symptoms: headaches, elevated blood pressure, stomach issues',
      'Disillusionment with institutions, including healthcare',
    ],
    statistics: [
      {
        id: 'c4-s1',
        figure: '4x',
        figureNumeric: 4,
        suffix: 'x',
        label: 'More likely Black Americans report work-related discrimination affecting mental health',
        source: 'Placeholder Source',
      },
    ],
  },
]

export const researchHighlights: { title: string; finding: string; source: string }[] = [
  {
    title: 'Police Killings as a Public Health Crisis',
    finding:
      'A 2018 study published in The Lancet found that each police killing generates approximately 67,000 additional Black Americans experiencing poor mental health, even among those who did not know the victim personally.',
    source: 'Placeholder Source, 2018',
  },
  {
    title: 'Witnessing as Trauma',
    finding:
      'Research on bystander trauma finds that witnessing police violence—including via social media—triggers PTSD symptoms comparable to direct victimization.',
    source: 'Placeholder Source, 2020',
  },
  {
    title: 'The Role of Impunity',
    finding:
      'Studies show that the absence of accountability for police killings compounds psychological harm. Watching perpetrators face no consequences triggers helplessness and grief that intensifies trauma responses.',
    source: 'Placeholder Source, 2021',
  },
]

export const individualsQuote: Quote = {
  text: '"Racism is a traumatic experience... [it] invades the mind, body, and spirit in ways that are lasting and cumulative."',
  attribution: 'Comas-Díaz et al.',
  role: 'Racial Trauma: Theory, Research, and Healing, 2019',
}

export const individualsStats: Statistic[] = [
  {
    id: 'i-s1',
    figure: '63',
    figureNumeric: 63,
    suffix: '%',
    label: 'Of Black Americans say police violence is a major source of anxiety in their lives',
    source: 'Placeholder Source',
  },
  {
    id: 'i-s2',
    figure: '2.5x',
    figureNumeric: 2.5,
    suffix: 'x',
    label: 'Higher likelihood of psychological distress following police contact for Black Americans',
    source: 'Placeholder Source',
  },
  {
    id: 'i-s3',
    figure: '55',
    figureNumeric: 55,
    suffix: '%',
    label: 'Of Black Americans report vicarious trauma from following news of police killings',
    source: 'Placeholder Source',
  },
  {
    id: 'i-s4',
    figure: '40',
    figureNumeric: 40,
    suffix: '%',
    label: 'Of Black respondents avoid therapy due to distrust of white-dominated mental health systems',
    source: 'Placeholder Source',
  },
]
