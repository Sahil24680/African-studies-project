import type { CountryPageContent } from '@/types'

export const policeUsaContent: CountryPageContent = {
  country: 'USA',
  accentClass: 'usa',
  hero: {
    headline: 'Police Violence in the United States',
    subheadline: 'George Floyd and Police Violence in America',
  },
  intro:
    'One of the most significant examples of police violence in the United States was the killing of George Floyd in Minneapolis, Minnesota in 2020. Floyd died after police officer Derek Chauvin, a white male, knelt on his neck for over nine minutes while Floyd repeated "I can\'t breathe." Video footage of the incident spread rapidly across social media and news stations around the world, leading to protests against police brutality and systemic racism throughout the US and multiple countries. Many people see Floyd\'s death as evidence of how Black individuals are treated violently by law enforcement. They are about 3.5 times more likely to be killed by police than white Americans, a symbol of racial violence, and Floyd\'s death also strengthened the Black Lives Matter movement and increased demands for police reform and racial justice. In addition, police violence in the United States is connected to slavery and racial segregation. During slavery, slave patrols were used to monitor enslaved Africans, especially to prevent them from escaping. Even after slavery officially ended in 1865, Black Americans continued to experience segregation, racial violence, and discriminatory laws such as Jim Crow laws. The article states that between 1980 and 2018, Black Americans were about 3.5 times more likely to be killed by police than white Americans and police violence caused more than 30,000 deaths during that period. Mass incarceration has also had devastating effects on Black communities in the United States. Policies such as the War on Drugs disproportionately targeted Black neighborhoods through aggressive policing and harsher sentencing laws. According to the NAACP Criminal Justice Fact Sheet, Black Americans make up approximately 13% of the US population but around 38% of the prison population. As a result, PubMed: Racial Trauma: Theory, Research, and Healing explains that repeated exposure to racism and violence can create long-term psychological harm that affects both individuals and future generations.',
  statistics: [
    {
      id: 'usa-1',
      figure: '3.5x',
      figureNumeric: 3.5,
      suffix: 'x',
      label: 'Black Americans were about 3.5 times more likely to be killed by police than white Americans between 1980 and 2018',
      source: 'The Lancet: Fatal Police Violence by Race and State in the USA, 2021',
    },
    {
      id: 'usa-2',
      figure: '30,000+',
      figureNumeric: 30000,
      suffix: '+',
      label: 'Police violence caused more than 30,000 deaths from 1980 to 2018',
      source: 'The Lancet: Fatal Police Violence by Race and State in the USA, 2021',
    },
    {
      id: 'usa-3',
      figure: '38%',
      figureNumeric: 38,
      suffix: '%',
      label: 'Black Americans make up approximately 13% of the US population but around 38% of the prison population',
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
        'George Floyd died after police officer Derek Chauvin, a white male, knelt on his neck for over nine minutes while Floyd repeated "I can\'t breathe." Video footage of the incident spread rapidly across social media and news stations around the world, leading to protests against police brutality and systemic racism throughout the US and multiple countries.',
      significance:
        "Many people see Floyd's death as evidence of how Black individuals are treated violently by law enforcement. They are about 3.5 times more likely to be killed by police than white Americans. Floyd's death also strengthened the Black Lives Matter movement and increased demands for police reform and racial justice.",
      country: 'USA',
    },
  ],
  systemicPatterns: [
    {
      title: 'Slave Patrols and Jim Crow Laws',
      description:
        'Police violence in the United States is connected to slavery and racial segregation. During slavery, slave patrols were used to monitor enslaved Africans, especially to prevent them from escaping. Even after slavery officially ended in 1865, Black Americans continued to experience segregation, racial violence, and discriminatory laws such as Jim Crow laws.',
    },
    {
      title: 'War on Drugs and Mass Incarceration',
      description:
        'Policies such as the War on Drugs disproportionately targeted Black neighborhoods through aggressive policing and harsher sentencing laws. According to the NAACP Criminal Justice Fact Sheet, Black Americans make up approximately 13% of the US population but around 38% of the prison population.',
    },
    {
      title: 'Long-Term Psychological Harm',
      description:
        'As a result of mass incarceration and police violence, PubMed: Racial Trauma: Theory, Research, and Healing explains that repeated exposure to racism and violence can create long-term psychological harm that affects both individuals and future generations.',
    },
  ],
  quote: {
    text: '"As a result, PubMed: Racial Trauma: Theory, Research, and Healing explains that repeated exposure to racism and violence can create long-term psychological harm that affects both individuals and future generations."',
    attribution: 'PubMed: Racial Trauma: Theory, Research, and Healing',
    role: 'Referenced in the context of US police violence and mass incarceration',
  },
}
