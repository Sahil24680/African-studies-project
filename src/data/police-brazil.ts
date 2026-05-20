import type { CountryPageContent } from '@/types'

export const policeBrazilContent: CountryPageContent = {
  country: 'Brazil',
  accentClass: 'brazil',
  hero: {
    headline: 'Police Violence in Brazil',
    subheadline: 'João Pedro and Police Violence in Brazilian Favelas',
  },
  intro:
    'In Brazil, racial inequality is closely connected to the legacy of slavery and the unequal conditions that followed abolition. Brazil received more enslaved African people than any other country in America, and was also the last country in the Western Hemisphere to officially abolish slavery in 1888. However, after slavery ended, enslaved people were not given any meaningful support, such as land, education, or economic opportunities. This led many to remain trapped in poverty and pushed into low-income communities, shaping patterns of inequality that still exist today. This effect can be seen in many Brazilian cities, especially in favelas, where large Afro-Brazilian populations live. These communities often lack proper healthcare, sanitation, transportation, and educational resources. They also experience heavy police presence and constant security operations. This shows how little support these neighborhoods get compared to how heavily they are policed. Brazil also has one of the deadliest police systems in the world. Human rights reports consistently show that most people killed during police operations are Black, with some states reporting that over 80% to 90% of victims are Afro-Brazilian. Young Black men are targeted the most, showing how racial inequality and police brutality are deeply connected. Unlike many other countries, police operations in Brazil are often highly militarized. Raids commonly involve armored vehicles, helicopters, and heavily armed officers entering crowded residential areas. Instead of focusing only on specific suspects, these operations often impact entire communities and treat low-income communities as dangerous war zones instead of neighborhoods where families live. Human rights organizations have repeatedly criticized these tactics due to the harm they cause to civilians. One widely known example is the killing of João Pedro Matos Pinto in 2020. He was shot during a police raid in a poor community in Rio de Janeiro, and his death received both national and international attention. Many people saw the case as part of a larger pattern of racialized police violence against Afro-Brazilian communities, especially against young Black people. Racial inequality in Brazil also appears in education, employment, and income levels. Afro-Brazilians are still more likely to live in poverty and less likely to have access to higher education and professional jobs. Even with these challenges, Afro-Brazilian communities and activists continue fighting against racial inequality through protests, cultural movements, and community organizing.',
  statistics: [
    {
      id: 'br-1',
      figure: '300+',
      figureNumeric: 300,
      suffix: '+',
      label: 'Years Brazil practiced slavery before officially ending in 1888',
      source: 'Human Rights Watch, 2020',
    },
    {
      id: 'br-2',
      figure: '1888',
      figureNumeric: 1888,
      label: 'Brazil was the last country in the Western Hemisphere to officially abolish slavery',
      source: 'Human Rights Watch, 2020',
    },
    {
      id: 'br-3',
      figure: '80-90%',
      figureNumeric: 0,
      label: 'In some states, over 80% to 90% of people killed in police operations are Afro-Brazilian',
      source: 'Human Rights Watch: UN Experts Spotlight Devastating Police Brutality in Brazil',
    },
    {
      id: 'br-4',
      figure: 'Targeted',
      figureNumeric: 0,
      label: 'Black Brazilians are disproportionately targeted during police operations, especially in low-income neighborhoods and favelas',
      source: 'Human Rights Watch: UN Experts Spotlight Devastating Police Brutality in Brazil',
    },
  ],
  keyEvents: [
    {
      id: 'br-e1',
      year: '2020',
      name: 'Killing of João Pedro Matos Pinto',
      location: 'Rio de Janeiro, Brazil',
      description:
        'João Pedro Matos Pinto was shot during a police raid in a poor community in Rio de Janeiro. His death received both national and international attention.',
      significance:
        'Many people saw the case as part of a larger pattern of racialized police violence against Afro-Brazilian communities, especially against young Black people.',
      country: 'Brazil',
    },
  ],
  systemicPatterns: [
    {
      title: 'Legacy of Slavery',
      description:
        'Brazil received more enslaved African people than any other country in America, and was the last country in the Western Hemisphere to officially abolish slavery in 1888. After slavery ended, enslaved people were not given any meaningful support, such as land, education, or economic opportunities. This led many to remain trapped in poverty and pushed into low-income communities, shaping patterns of inequality that still exist today.',
    },
    {
      title: 'Militarized Policing and Targeting of Favelas',
      description:
        'Human rights reports consistently show that most people killed during police operations are Black, with some states reporting that over 80% to 90% of victims are Afro-Brazilian. Police operations in Brazil are often highly militarized, with raids commonly involving armored vehicles, helicopters, and heavily armed officers entering crowded residential areas. Human rights organizations have repeatedly criticized these tactics due to the harm they cause to civilians.',
    },
    {
      title: 'Mental Health Effects on Families and Communities',
      description:
        'Mass incarceration and aggressive policing create devastating effects on Black families in Brazil, including economic hardship, family separation, emotional trauma, fear of police raids, and housing instability. Repeated exposure to violence can also contribute to PTSD, anxiety, depression, chronic stress, and intergenerational trauma within Black communities.',
    },
  ],
  quote: {
    text: '"Human rights reports consistently show that most people killed during police operations are Black, with some states reporting that over 80% to 90% of victims are Afro-Brazilian."',
    attribution: 'Human Rights Watch',
    role: 'UN Experts Spotlight Devastating Police Brutality in Brazil',
  },
}
