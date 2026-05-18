import type { CountryPageContent } from '@/types'

export const policeUsaContent: CountryPageContent = {
  country: 'USA',
  accentClass: 'usa',
  hero: {
    headline: 'Police Violence in the United States',
    subheadline: 'George Floyd and Police Violence in America',
  },
  intro:
    'One of the most significant examples of police violence in the United States was the killing of George Floyd in Minneapolis, Minnesota in 2020. Floyd died after police officer Derek Chauvin knelt on his neck for over nine minutes while Floyd repeatedly said, "I can\'t breathe." Video footage of the incident spread rapidly across social media and news stations around the world, leading to protests against police brutality and systemic racism in all 50 states and multiple countries. The significance of George Floyd\'s death was that it became a symbol of the long history of racial violence and unequal policing against Black Americans. Many people viewed the incident as evidence that Black individuals are treated more violently by law enforcement compared to white Americans. Floyd\'s death also strengthened the Black Lives Matter movement and increased demands for police reform and racial justice.',
  statistics: [
    {
      id: 'usa-1',
      figure: '3.5x',
      figureNumeric: 3.5,
      suffix: 'x',
      label: 'More likely Black Americans are killed by police vs. white Americans (1980–2018)',
      source: 'The Lancet — Fatal Police Violence by Race and State in the USA, 2021',
    },
    {
      id: 'usa-2',
      figure: '30,000+',
      figureNumeric: 30000,
      label: 'Estimated deaths caused by police violence in the US from 1980 to 2018',
      source: 'The Lancet — Fatal Police Violence by Race and State in the USA, 2021',
    },
    {
      id: 'usa-3',
      figure: '13',
      figureNumeric: 13,
      suffix: '%',
      label: 'Of the US population is Black, yet Black Americans make up approximately 38% of the prison population',
      source: 'NAACP Criminal Justice Fact Sheet',
    },
    {
      id: 'usa-4',
      figure: '38',
      figureNumeric: 38,
      suffix: '%',
      label: 'Of the US prison population is Black, despite being 13% of the total population',
      source: 'NAACP Criminal Justice Fact Sheet',
    },
  ],
  keyEvents: [
    {
      id: 'usa-e1',
      year: '2020',
      name: 'Murder of George Floyd',
      location: 'Minneapolis, Minnesota',
      description:
        'George Floyd died after police officer Derek Chauvin knelt on his neck for over nine minutes while Floyd repeatedly said, "I can\'t breathe." Video footage of the incident spread rapidly across social media and news stations around the world, leading to protests against police brutality and systemic racism in all 50 states and multiple countries.',
      significance:
        "George Floyd's death became a symbol of the long history of racial violence and unequal policing against Black Americans. Many people viewed the incident as evidence that Black individuals are treated more violently by law enforcement compared to white Americans. Floyd's death also strengthened the Black Lives Matter movement and increased demands for police reform and racial justice.",
      country: 'USA',
    },
  ],
  systemicPatterns: [
    {
      title: 'Slave Patrols and Jim Crow Laws',
      description:
        'Police violence in the United States is deeply connected to slavery and racial segregation. During slavery, slave patrols were used to monitor and punish enslaved Africans. After slavery officially ended in 1865, Black Americans continued to experience segregation, racial violence, discriminatory laws, and over-policing through systems such as Jim Crow laws.',
    },
    {
      title: 'War on Drugs and Mass Incarceration',
      description:
        'Policies such as the War on Drugs disproportionately targeted Black neighborhoods through aggressive policing and harsher sentencing laws. According to the NAACP Criminal Justice Fact Sheet, Black Americans make up approximately 13% of the US population but around 38% of the prison population.',
    },
    {
      title: 'Mental Health Effects',
      description:
        'Police violence and incarceration also contribute to PTSD, anxiety, depression, chronic stress, and intergenerational trauma within Black communities. Research from PubMed — Racial Trauma: Theory, Research, and Healing explains that repeated exposure to racism and violence can create long-term psychological harm that affects both individuals and future generations.',
    },
  ],
  quote: {
    text: '"Research from PubMed — Racial Trauma: Theory, Research, and Healing explains that racial trauma develops through repeated exposure to racism and violence over time. The article explains that trauma caused by racism can negatively affect emotional, psychological, and physical health."',
    attribution: 'PubMed — Racial Trauma: Theory, Research, and Healing',
    role: 'Referenced in the context of US police violence and mental health',
  },
}
