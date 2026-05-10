import type { FamilyImpactType, Quote, Statistic } from '@/types'

export const familiesHero = {
  headline: 'Grief Without Justice',
  subheadline: 'How police violence reverberates through Black families — in grief, economic loss, and trauma passed across generations.',
}

export const familiesIntro =
  'When police kill a Black person, the damage radiates outward. Families are shattered by grief, destabilized by sudden economic loss, and retraumatized by watching justice fail. The effects do not end with the immediate family: research on intergenerational trauma shows that the stress and fear produced by state violence can be transmitted to children who were not yet born when the violence occurred. The mental health of Black families cannot be separated from the conditions under which Black people live.'

export const impactTypes: FamilyImpactType[] = [
  {
    id: 'fi-1',
    title: 'Complicated Grief',
    description:
      'Families of those killed by police often experience "complicated grief"—a form of prolonged mourning intensified by the traumatic nature of the death, the public spectacle, and the denial of justice. Unlike other forms of loss, grief following police violence is compounded by anger, disbelief, and the forced reliving of trauma in coroner\'s inquiries, trials, and media coverage.',
    statistics: [
      {
        id: 'fi1-s1',
        figure: '70',
        figureNumeric: 70,
        suffix: '%',
        label: 'Of bereaved family members meet criteria for complicated grief disorder',
        source: 'Placeholder Source',
      },
    ],
  },
  {
    id: 'fi-2',
    title: 'Economic Instability',
    description:
      'Police killings frequently destroy the economic foundations of families. Primary breadwinners are killed or incarcerated; medical and legal costs accumulate; survivors may lose employment due to grief and trauma. Mass incarceration of Black men—itself a form of state violence—also creates poverty cycles that compound psychological distress in families left behind.',
    statistics: [
      {
        id: 'fi2-s1',
        figure: '30',
        figureNumeric: 30,
        suffix: '%',
        label: 'Drop in household income for families following the killing of a breadwinner by police',
        source: 'Placeholder Source',
      },
    ],
  },
  {
    id: 'fi-3',
    title: 'Children and Developmental Trauma',
    description:
      'Children who witness police violence, lose parents to police killings, or grow up in communities shaped by high policing are at elevated risk for developmental trauma, anxiety, school failure, and later mental health disorders. The "adultification" of Black children by police also means they face the direct trauma of police encounters from a much younger age.',
    statistics: [
      {
        id: 'fi3-s1',
        figure: '1 in 3',
        figureNumeric: 33,
        suffix: '%',
        label: 'Black children in the US will witness police violence in their community before age 18',
        source: 'Placeholder Source',
      },
    ],
  },
  {
    id: 'fi-4',
    title: 'Fear and Hypervigilance Transmitted to Children',
    description:
      'Parents of Black children—particularly mothers—describe intense anxiety about the safety of their children in relation to police. This "the talk"—preparing children for the reality of racist policing—is itself a form of anticipatory grief that imposes psychological burdens on children who must learn to manage their own potential victimization.',
    statistics: [
      {
        id: 'fi4-s1',
        figure: '80',
        figureNumeric: 80,
        suffix: '%',
        label: 'Of Black parents in the US have had "the talk" with their children about police safety',
        source: 'Placeholder Source',
      },
    ],
  },
]

export const intergenerational = {
  title: 'Intergenerational Trauma',
  description:
    'Emerging research in epigenetics and developmental psychology demonstrates that trauma can be transmitted across generations. Enslaved people\'s descendants show measurable physiological markers of stress. The persistent exposure of Black communities to police violence, mass incarceration, and racial terror creates conditions for this kind of transmission—where children inherit not just memories of violence but biological responses shaped by their parents\' traumatic experiences.',
  mechanisms: [
    'Epigenetic changes: stress hormones altering gene expression that is passed to children',
    'Parenting under chronic stress, shaping children\'s early emotional development',
    'Community-level erosion of safety and social cohesion across generations',
    'Narrative transmission: stories of violence passed down as survival knowledge',
    'Economic poverty cycles caused by mass incarceration compounding generational disadvantage',
  ],
}

export const familiesQuote: Quote = {
  text: '"We carry our ancestors\' pain in our bodies, in our nervous systems—every generation of Black people in this country has been asked to survive the unsurvivable."',
  attribution: 'Placeholder — Mental Health Researcher',
  role: 'Placeholder Source, 2023',
}

export const familiesStats: Statistic[] = [
  {
    id: 'fam-s1',
    figure: '2x',
    figureNumeric: 2,
    suffix: 'x',
    label: 'Higher rates of psychological distress in families of police violence victims',
    source: 'Placeholder Source',
  },
  {
    id: 'fam-s2',
    figure: '3 yr',
    figureNumeric: 3,
    label: 'Average length of legal proceedings for families pursuing accountability',
    source: 'Placeholder Source',
  },
  {
    id: 'fam-s3',
    figure: '45',
    figureNumeric: 45,
    suffix: '%',
    label: 'Of Black families affected by police violence report housing instability in the following year',
    source: 'Placeholder Source',
  },
  {
    id: 'fam-s4',
    figure: '58',
    figureNumeric: 58,
    suffix: '%',
    label: 'Of bereaved parents report their children exhibit behavioral problems after losing a family member to police violence',
    source: 'Placeholder Source',
  },
]
