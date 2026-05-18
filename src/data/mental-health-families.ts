import type { FamilyImpactType, Quote, Statistic } from '@/types'

export const familiesHero = {
  headline: 'Grief Without Justice',
  subheadline: 'How police violence and mass incarceration reverberate through Black families — in grief, economic loss, and trauma passed across generations.',
}

export const familiesIntro =
  'Mass incarceration refers to the large-scale imprisonment of people, especially marginalized racial groups. Black communities are disproportionately affected because of racial profiling, over-policing, and unequal sentencing practices. When police kill or incarcerate a Black person, the damage radiates outward. Families are shattered by grief, destabilized by sudden economic loss, and retraumatized by watching justice fail. The effects do not end with the immediate family — research on intergenerational trauma shows that the stress and fear produced by state violence can be transmitted to children who were not yet born when the violence occurred.'

export const impactTypes: FamilyImpactType[] = [
  {
    id: 'fi-1',
    title: 'Family Separation',
    description:
      'Mass incarceration and police killings tear families apart. The sudden absence of a parent or family member — whether through death or imprisonment — creates profound disruption to family structure, childhood development, and community stability. Black families are disproportionately affected by these separations due to systemic racial bias in policing and sentencing.',
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
      'Police killings and incarceration frequently destroy the economic foundations of families. Primary breadwinners are killed or incarcerated; legal costs accumulate; survivors may lose employment due to grief and trauma. Mass incarceration of Black individuals — itself a form of state violence — creates poverty cycles that compound psychological distress in families left behind.',
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
    title: 'Children: Anxiety, Depression, and Developmental Trauma',
    description:
      'Children in families impacted by incarceration or police violence experience elevated anxiety and depression. Children who witness police violence, lose parents to police killings, or grow up in communities shaped by high policing are at elevated risk for developmental trauma, school failure, and long-term mental health disorders. These effects often continue across generations and contribute to long-term instability within Black communities.',
    statistics: [],
  },
  {
    id: 'fi-4',
    title: 'Barriers to Employment and Education After Release',
    description:
      'Incarceration creates lasting barriers to employment, housing, and education for those who are released. These barriers affect not only the individual but their entire family, reinforcing cycles of poverty and instability. Black communities face these challenges at disproportionate rates due to racial inequality within the criminal justice system.',
    statistics: [
      {
        id: 'fi4-s1',
        figure: '3.5x',
        figureNumeric: 3.5,
        suffix: 'x',
        label: 'More likely Black Americans are killed by police than white Americans — leaving families permanently affected',
        source: 'The Lancet, 2021',
      },
    ],
  },
]

export const intergenerational = {
  title: 'Intergenerational Trauma',
  description:
    'Research on racial trauma explains that repeated exposure to racism and violence over time can create long-term psychological harm that affects both individuals and future generations. Policies such as the War on Drugs disproportionately targeted Black neighborhoods through aggressive policing and harsher sentencing laws, creating cycles of trauma that persist across generations. The persistent exposure of Black communities to police violence, mass incarceration, and racial terror creates conditions for this kind of transmission — where children inherit not just memories of violence but the psychological and physiological responses shaped by their parents\' traumatic experiences.',
  mechanisms: [
    'Family separation',
    'Financial hardship',
    'Housing instability',
    'Emotional trauma',
    'Anxiety and depression in children',
    'Barriers to employment and education after release',
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
    label: 'More likely Black Americans are killed by police than white Americans (1980–2018)',
    source: 'The Lancet, 2021',
  },
  {
    id: 'fam-s4',
    figure: '300+',
    figureNumeric: 300,
    label: 'Years Brazil practiced slavery — creating generational trauma that continues to affect Black Brazilian families today',
    source: 'Human Rights Watch, 2020',
  },
]
