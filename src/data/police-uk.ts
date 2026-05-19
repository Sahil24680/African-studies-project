import type { CountryPageContent } from '@/types'

export const policeUkContent: CountryPageContent = {
  country: 'UK',
  accentClass: 'uk',
  hero: {
    headline: 'Police Violence in the United Kingdom',
    subheadline: 'Mark Duggan and Institutional Racism in Britain',
  },
  intro:
    'One of the most significant incidents involving police violence in the United Kingdom was the killing of Mark Duggan in London in 2011. Duggan, a Black British man, was shot and killed by police officers in Tottenham. After his death, protests demanding justice quickly spread throughout London and later developed into riots across England. The significance of Mark Duggan\'s death was that it exposed growing frustration within Black communities regarding racial profiling, discrimination, and aggressive policing practices in Britain. Many Black Britons believed the incident reflected broader issues of institutional racism within the police force. The riots demonstrated the deep mistrust many Black communities had toward law enforcement and the government.',
  statistics: [
    {
      id: 'uk-1',
      figure: 'Higher',
      figureNumeric: 0,
      label: 'Black people in England and Wales are stopped and searched at significantly higher rates than white people',
      source: 'UK Ethnicity Facts and Figures',
    },
    {
      id: 'uk-2',
      figure: 'Distrust',
      figureNumeric: 0,
      label: 'Police use of force in London disproportionately affects Black communities and contributes to distrust toward police institutions',
      source: 'The British Journal of Criminology: Racial Disparities in Civilian Response to Police Use of Force',
    },
    {
      id: 'uk-3',
      figure: 'PTSD',
      figureNumeric: 0,
      label: 'Repeated exposure to racism and police violence can also contribute to PTSD, depression, and fear during police encounters',
      source: 'A Growing Dilemma: How Police Brutality Affects Mental Health in Black Communities',
    },
    {
      id: 'uk-4',
      figure: 'Impact',
      figureNumeric: 0,
      label: 'Families impacted by incarceration often experience financial hardship, emotional stress, family instability, and anxiety and depression',
      source: 'A Growing Dilemma: How Police Brutality Affects Mental Health in Black Communities',
    },
  ],
  keyEvents: [
    {
      id: 'uk-e1',
      year: '2011',
      name: 'Killing of Mark Duggan',
      location: 'Tottenham, North London',
      description:
        'Mark Duggan, a Black British man, was shot and killed by police officers in Tottenham, London. After his death, protests demanding justice quickly spread throughout London and later developed into riots across England.',
      significance:
        "Mark Duggan's death exposed growing frustration within Black communities regarding racial profiling, discrimination, and aggressive policing practices in Britain. Many Black Britons believed the incident reflected broader issues of institutional racism within the police force. The riots demonstrated the deep mistrust many Black communities had toward law enforcement and the government.",
      country: 'UK',
    },
  ],
  systemicPatterns: [
    {
      title: 'Stop-and-Search Policing',
      description:
        'One major issue in the UK is stop-and-search policing practices. According to UK Ethnicity Facts and Figures, Black people in England and Wales are stopped and searched at significantly higher rates than white people.',
    },
    {
      title: 'History of Slavery and Colonialism',
      description:
        "Britain's history of slavery and colonialism also contributed to racial inequality within policing. The United Kingdom played a major role in the transatlantic slave trade and colonized many African and Caribbean nations. Black immigrants from former colonies often experienced discrimination in employment, education, housing, and policing after arriving in Britain.",
    },
    {
      title: 'Incarceration and Mental Health Effects',
      description:
        'Black communities in Britain are also disproportionately affected by incarceration and criminal justice discrimination. Families impacted by incarceration often experience financial hardship, emotional stress, family instability, and anxiety and depression. Repeated exposure to racism and police violence can also contribute to PTSD, depression, and fear during police encounters. Many Black Britons report feeling unsafe or unfairly targeted during interactions with police officers.',
    },
  ],
  quote: {
    text: '"Research published in The British Journal of Criminology: Racial Disparities in Civilian Response to Police Use of Force found that police use of force in London disproportionately affects Black communities and contributes to distrust toward police institutions."',
    attribution: 'The British Journal of Criminology',
    role: 'Racial Disparities in Civilian Response to Police Use of Force',
  },
}
