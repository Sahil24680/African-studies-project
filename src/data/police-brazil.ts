import type { CountryPageContent } from '@/types'

export const policeBrazilContent: CountryPageContent = {
  country: 'Brazil',
  accentClass: 'brazil',
  hero: {
    headline: 'Police Violence in Brazil',
    subheadline: 'The deadliest police force in the world—and its Black victims.',
  },
  intro:
    'Brazil has the most lethal police in the world. In 2022, Brazilian security forces killed more than 6,400 people—a new record. The victims are overwhelmingly young, Black, and from favelas (informal communities). This violence is not incidental; it is the continuation of centuries of anti-Black state control, from slavery to Jim Crow-style segregation to the military dictatorship\'s counter-insurgency tactics now deployed against Black communities in the name of the "war on drugs."',
  statistics: [
    {
      id: 'br-1',
      figure: '6,429',
      figureNumeric: 6429,
      label: 'People killed by police in Brazil in 2022 — the highest on record',
      source: 'Brazilian Public Security Forum, 2023',
    },
    {
      id: 'br-2',
      figure: '79',
      figureNumeric: 79,
      suffix: '%',
      label: 'Of those killed by police in Brazil are Black',
      source: 'Brazilian Public Security Forum, 2023',
    },
    {
      id: 'br-3',
      figure: '84',
      figureNumeric: 84,
      suffix: '%',
      label: 'Of victims are under age 29 — overwhelmingly young Black men from favelas',
      source: 'Placeholder Source',
    },
    {
      id: 'br-4',
      figure: '7x',
      figureNumeric: 7,
      suffix: 'x',
      label: 'More likely Black Brazilians are killed by police than white Brazilians',
      source: 'Placeholder Source',
    },
  ],
  keyEvents: [
    {
      id: 'br-e1',
      year: '1993',
      name: 'Candelária Massacre',
      location: 'Rio de Janeiro',
      description:
        'Off-duty military police kill eight street children—most of them Black—sleeping outside the Candelária Church. The killers are linked to death squads operating with impunity.',
      significance:
        'The massacre brought international attention to extrajudicial killings in Brazil and exposed the criminalization of Black youth by the state itself.',
      country: 'Brazil',
    },
    {
      id: 'br-e2',
      year: '1993',
      name: 'Vigário Geral Massacre',
      location: 'Rio de Janeiro',
      description:
        'Military police officers enter the Vigário Geral favela and kill 21 residents in apparent retaliation for the deaths of four officers. Most victims are shot at close range.',
      significance:
        'The massacre revealed the practice of collective punishment of favela communities—a tactic that continues in various forms today.',
      country: 'Brazil',
    },
    {
      id: 'br-e3',
      year: '2010',
      name: 'Operation Alemão / Favela Militarization',
      location: 'Complexo do Alemão, Rio de Janeiro',
      description:
        'A massive military-police operation takes over the Complexo do Alemão favela complex, deploying military vehicles and more than 800 officers. The operation is widely televised as a triumph of order.',
      significance:
        'Critics argue the operation solidified the criminalization of favela residents and normalized military occupation of Black communities under the banner of security.',
      country: 'Brazil',
    },
    {
      id: 'br-e4',
      year: '2019',
      name: 'Jacarezinho and Favela Massacres under Bolsonaro',
      location: 'Rio de Janeiro',
      description:
        'A series of mass police operations under Jair Bolsonaro\'s administration kill dozens at a time in Rio favelas. The 2021 Jacarezinho operation kills 28 people in a single day.',
      significance:
        'The massacres occur under a political mandate explicitly encouraging police lethality. Legal challenges and UN criticism do little to slow the killings.',
      country: 'Brazil',
    },
    {
      id: 'br-e5',
      year: '2023',
      name: 'Continued Killings Under Lula Government',
      location: 'Nationwide, Brazil',
      description:
        'Despite the election of Lula, a left-leaning president, police killings remain at crisis levels. The structural drivers—militarized police, poverty, racial hierarchy—remain intact.',
      significance:
        'The persistence of killings across different administrations underscores that police violence in Brazil is a structural problem, not merely a product of one political party.',
      country: 'Brazil',
    },
  ],
  systemicPatterns: [
    {
      title: 'Military Police and Residual Dictatorship',
      description:
        'Brazil\'s military police forces were trained under the 1964–1985 military dictatorship and retain a counter-insurgency doctrine. This doctrine frames favela residents—disproportionately Black and poor—as internal enemies to be subdued rather than citizens to be protected.',
    },
    {
      title: '"Auto de Resistência" and Impunity',
      description:
        'For decades, police killings in Brazil were routinely classified as "auto de resistência" (resistance killings), effectively shielding officers from investigation. Though the classification was abolished in 2016, impunity remains the norm.',
    },
    {
      title: 'Racial Democracy Myth and Erasure',
      description:
        'Brazil\'s national ideology of "racial democracy"—the idea that the country is uniquely free from racial prejudice—has historically been used to deny the existence of anti-Black racism and deflect demands for accountability.',
    },
  ],
  quote: {
    text: '"In Brazil, being Black and poor is already a death sentence. The police just carry it out."',
    attribution: 'Placeholder — Community Voice, Rio de Janeiro',
    role: 'Placeholder Source, 2022',
  },
}
