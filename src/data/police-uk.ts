import type { CountryPageContent } from '@/types'

export const policeUkContent: CountryPageContent = {
  country: 'UK',
  accentClass: 'uk',
  hero: {
    headline: 'Police Violence in the United Kingdom',
    subheadline: 'Mark Duggan and Institutional Racism in Britain',
  },
  intro:
    'In the United Kingdom, racial inequality within policing is linked to the country\'s history of colonialism and involvement in the transatlantic slave trade, which created racial hierarchies in the West. As migration increased after World War II, Black communities in Britain faced discrimination in housing, employment, and community services, as well as heightened policing in urban areas. Even though they make up a small percentage of the population, Black people in the UK are more likely to experience the use of force by police officers, mainly just because of their race. One of the most significant policing practices targeting Black individuals in the UK is stop-and-search. In England and Wales, Black people are more than four times as likely to be stopped and searched compared to white people. In some urban areas, such as parts of London, young Black men are the most frequently targeted group. However, a significant amount of stop-and-search encounters do not lead to arrest or charges, which has raised concerns that this is based on racial profiling and suspicion instead of clear evidence. As a result, Black people are hypervigilant in public even when they have done nothing wrong. Conflict between Black communities and the police became even worse during the Brixton uprisings of 1981. High unemployment, poor housing, and aggressive policing in a mostly Black neighborhood caused many years of frustration and anger over racism and inequality. More recent cases, like the death of Chris Kaba in 2022, caused more debate about police violence in the UK. Police killed him during a car stop in London, which led to protests and discussions about how Black people are often seen as dangerous by police. The case also raised more concerns about racism and unfair treatment in British policing. Beyond policing, racial inequality can also be seen in jobs, education, and housing. Black people in the UK are still more likely to face unfair treatment in these areas compared to white people. Because of this, community groups and anti-racist movements in the UK continue fighting against racial inequality through activism, education, and efforts to change unfair policies.',
  statistics: [
    {
      id: 'uk-1',
      figure: '4x',
      figureNumeric: 4,
      suffix: 'x',
      label: 'Black people are more than four times as likely to be stopped and searched compared to white people in England and Wales',
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
      year: '1981',
      name: 'Brixton Uprisings',
      location: 'Brixton, London',
      description:
        'High unemployment, poor housing, and aggressive policing in a mostly Black neighborhood caused many years of frustration and anger over racism and inequality, leading to the Brixton uprisings of 1981.',
      significance:
        'Brixton became a turning point that exposed how deeply policing practices were connected to broader social and economic exclusion of Black communities in Britain.',
      country: 'UK',
    },
    {
      id: 'uk-e2',
      year: '2011',
      name: 'Killing of Mark Duggan',
      location: 'Tottenham, North London',
      description:
        'Mark Duggan, a Black British man, was shot and killed by police officers in Tottenham, London. After his death, protests demanding justice quickly spread throughout London and later developed into riots across England.',
      significance:
        "Mark Duggan's death exposed growing frustration within Black communities regarding racial profiling, discrimination, and aggressive policing practices in Britain. Many Black Britons believed the incident reflected broader issues of institutional racism within the police force.",
      country: 'UK',
    },
    {
      id: 'uk-e3',
      year: '2022',
      name: 'Death of Chris Kaba',
      location: 'London',
      description:
        'Police killed Chris Kaba during a car stop in London, which led to protests and discussions about how Black people are often seen as dangerous by police.',
      significance:
        'The case raised more concerns about racism and unfair treatment in British policing and renewed public debate about accountability in the use of force.',
      country: 'UK',
    },
  ],
  systemicPatterns: [
    {
      title: 'Stop-and-Search Policing',
      description:
        'One of the most significant policing practices targeting Black individuals in the UK is stop-and-search. In England and Wales, Black people are more than four times as likely to be stopped and searched compared to white people. A significant amount of stop-and-search encounters do not lead to arrest or charges, which has raised concerns that this is based on racial profiling and suspicion instead of clear evidence. As a result, Black people are hypervigilant in public even when they have done nothing wrong.',
    },
    {
      title: 'History of Colonialism and Slavery',
      description:
        "Racial inequality within policing is linked to Britain's history of colonialism and involvement in the transatlantic slave trade, which created racial hierarchies in the West. As migration from former colonies increased after World War II, Black communities in Britain faced discrimination in housing, employment, and community services, as well as heightened policing in urban areas.",
    },
    {
      title: 'Incarceration and Mental Health Effects',
      description:
        'Black communities in Britain are disproportionately affected by incarceration and criminal justice discrimination. Families impacted by incarceration often experience financial hardship, emotional stress, family instability, and anxiety and depression. Repeated exposure to racism and police violence can also contribute to PTSD, depression, and fear during police encounters.',
    },
  ],
  quote: {
    text: '"Research published in The British Journal of Criminology: Racial Disparities in Civilian Response to Police Use of Force found that police use of force in London disproportionately affects Black communities and contributes to distrust toward police institutions."',
    attribution: 'Bradford, Ben, and Jonathan Jackson',
    role: 'The British Journal of Criminology, vol. 63, no. 2, 2023',
  },
}
