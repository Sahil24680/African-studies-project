import type { CountryPageContent } from '@/types'

export const policeBrazilContent: CountryPageContent = {
  country: 'Brazil',
  accentClass: 'brazil',
  hero: {
    headline: 'Police Violence in Brazil',
    subheadline: 'João Pedro and Police Violence in Brazilian Favelas',
  },
  intro:
    'One of the most significant examples of police violence in Brazil involved João Pedro Matos Pinto, a 14-year-old Black boy who was killed during a police raid in Rio de Janeiro in 2020. João Pedro was inside his home playing with friends when police officers entered the neighborhood during an operation and opened fire. His death caused outrage throughout Brazil and drew international attention to police violence against Black youth. The significance of João Pedro\'s death was that it highlighted how dangerous police operations in poor Black neighborhoods and favelas have become. Many Brazilians viewed the incident as an example of how Black communities are treated as targets rather than citizens deserving protection and safety. Human rights organizations argued that the case reflected broader patterns of racial inequality and excessive police violence in Brazil.',
  statistics: [
    {
      id: 'br-1',
      figure: '300+',
      figureNumeric: 300,
      label: 'Years Brazil practiced slavery — more than any other country in the Americas',
      source: 'Human Rights Watch, 2020',
    },
    {
      id: 'br-2',
      figure: '1888',
      figureNumeric: 1888,
      label: 'Year slavery officially ended in Brazil — the last country in the Americas to abolish it',
      source: 'Human Rights Watch, 2020',
    },
    {
      id: 'br-3',
      figure: 'Targeted',
      figureNumeric: 0,
      label: 'Black Brazilians are disproportionately targeted during police operations, especially in low-income neighborhoods and favelas',
      source: 'Human Rights Watch — UN Experts Spotlight Devastating Police Brutality in Brazil',
    },
    {
      id: 'br-4',
      figure: 'Fear',
      figureNumeric: 0,
      label: 'Police violence in Brazil disproportionately affects Black communities and contributes to fear, instability, and distrust toward law enforcement',
      source: 'Vigils on Two Continents: A Comparative Analysis of Police Brutality in Brazil and the United States',
    },
  ],
  keyEvents: [
    {
      id: 'br-e1',
      year: '2020',
      name: 'Killing of João Pedro Matos Pinto',
      location: 'Rio de Janeiro, Brazil',
      description:
        'João Pedro Matos Pinto, a 14-year-old Black boy, was killed during a police raid in Rio de Janeiro in 2020. João Pedro was inside his home playing with friends when police officers entered the neighborhood during an operation and opened fire.',
      significance:
        "João Pedro's death highlighted how dangerous police operations in poor Black neighborhoods and favelas have become. Many Brazilians viewed the incident as an example of how Black communities are treated as targets rather than citizens deserving protection and safety. Human rights organizations argued that the case reflected broader patterns of racial inequality and excessive police violence in Brazil.",
      country: 'Brazil',
    },
  ],
  systemicPatterns: [
    {
      title: 'Legacy of Slavery',
      description:
        'Brazil imported more enslaved Africans than any other country in the Americas, and slavery lasted there for more than 300 years before officially ending in 1888. Even after slavery ended, Black Brazilians continued to experience poverty, racial discrimination, and exclusion from economic and educational opportunities.',
    },
    {
      title: 'Targeting of Black Communities and Favelas',
      description:
        'According to Human Rights Watch — UN Experts Spotlight Devastating Police Brutality in Brazil, Black Brazilians are disproportionately targeted during police operations, especially in low-income neighborhoods and favelas. Research from Vigils on Two Continents: A Comparative Analysis of Police Brutality in Brazil and the United States explains that police violence in Brazil disproportionately affects Black communities and contributes to fear, instability, and distrust toward law enforcement.',
    },
    {
      title: 'Mental Health Effects on Families and Children',
      description:
        'Mass incarceration and aggressive policing create devastating effects on Black families in Brazil, including economic hardship, family separation, emotional trauma, fear of police raids, and housing instability. Children growing up in heavily policed neighborhoods may constantly fear violence and develop emotional trauma from repeated exposure to police raids and shootings. Repeated exposure to violence can also contribute to PTSD, anxiety, depression, chronic stress, and intergenerational trauma within Black communities.',
    },
  ],
  quote: {
    text: '"According to Human Rights Watch, Black Brazilians are disproportionately targeted during police operations, especially in low-income neighborhoods and favelas."',
    attribution: 'Human Rights Watch',
    role: 'UN Experts Spotlight Devastating Police Brutality in Brazil, 2020',
  },
}
