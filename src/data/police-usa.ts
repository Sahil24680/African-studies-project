import type { CountryPageContent } from '@/types'

export const policeUsaContent: CountryPageContent = {
  country: 'USA',
  accentClass: 'usa',
  hero: {
    headline: 'Police Violence in the United States',
    subheadline: 'George Floyd and Police Violence in America',
  },
  intro:
    'In the United States, racial inequality embedded in policing and the justice system stems from the country\'s history of slavery and its long-lasting effects. During slavery, policing in the South included slave patrols, which were created to monitor slaves and suppress resistance. After the abolition of slavery in 1865, these systems evolved into new legal and social structures that continued to restrict their rights and freedom. In the 1980s, the War on Drugs significantly increased policing and incarceration rates, specifically in Black communities. Even though various racial groups were using drugs, laws were enforced that targeted Black neighborhoods through higher arrest rates and harsher sentencing laws. As a result, the United States has one of the highest incarceration rates in the world, with Black Americans representing about 13% of the population but roughly one-third of the prison population. They are imprisoned at nearly five times the rate of white Americans, and the rate is even higher in some states, depending on the sentencing structure. In recent years, these structural issues have become more visible due to publicized police violence cases. The killing of George Floyd in 2020 happened during an arrest in Minneapolis, where a White police officer knelt on his neck for over nine minutes while he was handcuffed and repeated that he could not breathe. Later in the same year, Breonna Taylor, a 26-year-old Black emergency medical worker, was killed inside her home during a police raid. Police were authorized to enter her house without announcing their presence after midnight, which led to a fatal shooting, raising major concerns about warrant practices and accountability in policing. These cases showed the ongoing pattern of how race, geography, and policing interact with one another, leading to unjust treatment for Black communities. Originally founded in 2013, the Black Lives Matter movement became one of the largest social movements after 2020, with protests expanding across the nation and in multiple countries worldwide. Protesters called for reforms to the justice system, such as increased police accountability, greater law enforcement transparency, and the reallocation of public funding toward education, healthcare, and community services. These demands are significant because mass incarceration and losing loved ones to systemic issues contribute to economic instability, PTSD, family separation, and this trauma is passed down to future generations.',
  paragraphs: [
    'In the United States, racial inequality embedded in policing and the justice system stems from the country\'s history of slavery and its long-lasting effects. During slavery, policing in the South included slave patrols, which were created to monitor slaves and suppress resistance. After the abolition of slavery in 1865, these systems evolved into new legal and social structures that continued to restrict their rights and freedom.',
    'In the 1980s, the War on Drugs significantly increased policing and incarceration rates, specifically in Black communities. Even though various racial groups were using drugs, laws were enforced that targeted Black neighborhoods through higher arrest rates and harsher sentencing laws. As a result, the United States has one of the highest incarceration rates in the world, with Black Americans representing about 13% of the population but roughly one-third of the prison population. They are imprisoned at nearly five times the rate of white Americans, and the rate is even higher in some states, depending on the sentencing structure.',
    'In recent years, these structural issues have become more visible due to publicized police violence cases. The killing of George Floyd in 2020 happened during an arrest in Minneapolis, where a White police officer knelt on his neck for over nine minutes while he was handcuffed and repeated that he could not breathe. Later in the same year, Breonna Taylor, a 26-year-old Black emergency medical worker, was killed inside her home during a police raid. Police were authorized to enter her house without announcing their presence after midnight, which led to a fatal shooting, raising major concerns about warrant practices and accountability in policing. These cases showed the ongoing pattern of how race, geography, and policing interact with one another, leading to unjust treatment for Black communities.',
    'Originally founded in 2013, the Black Lives Matter movement became one of the largest social movements after 2020, with protests expanding across the nation and in multiple countries worldwide. Protesters called for reforms to the justice system, such as increased police accountability, greater law enforcement transparency, and the reallocation of public funding toward education, healthcare, and community services. These demands are significant because mass incarceration and losing loved ones to systemic issues contribute to economic instability, PTSD, family separation, and this trauma is passed down to future generations.',
  ],
  statistics: [
    {
      id: 'usa-1',
      figure: '3.5x',
      figureNumeric: 3.5,
      suffix: 'x',
      label: 'Black Americans were about 3.5 times more likely to be killed by police than white Americans between 1980 and 2018',
      source: 'The Lancet, 2021',
    },
    {
      id: 'usa-2',
      figure: '30,000+',
      figureNumeric: 30000,
      suffix: '+',
      label: 'Police violence caused more than 30,000 deaths from 1980 to 2018',
      source: 'The Lancet, 2021',
    },
    {
      id: 'usa-3',
      figure: '38%',
      figureNumeric: 38,
      suffix: '%',
      label: 'Black Americans make up approximately 13% of the US population but around 38% of the prison population',
      source: 'NAACP Criminal Justice Fact Sheet',
    },
    {
      id: 'usa-4',
      figure: '5x',
      figureNumeric: 5,
      suffix: 'x',
      label: 'Black Americans are imprisoned at nearly five times the rate of white Americans',
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
        'The killing of George Floyd in 2020 happened during an arrest in Minneapolis, where a White police officer knelt on his neck for over nine minutes while he was handcuffed and repeated that he could not breathe.',
      significance:
        'These cases showed the ongoing pattern of how race, geography, and policing interact with one another, leading to unjust treatment for Black communities.',
      country: 'USA',
    },
    {
      id: 'usa-e2',
      year: '2020',
      name: 'Killing of Breonna Taylor',
      location: 'Louisville, Kentucky',
      description:
        'Breonna Taylor, a 26-year-old Black emergency medical worker, was killed inside her home during a police raid. Police were authorized to enter her house without announcing their presence after midnight, which led to a fatal shooting.',
      significance:
        'The case raised major concerns about warrant practices and accountability in policing.',
      country: 'USA',
    },
  ],
  systemicPatterns: [
    {
      title: 'Slave Patrols and Segregation Laws',
      description:
        'During slavery, policing in the South included slave patrols, which were created to monitor slaves and suppress resistance. After the abolition of slavery in 1865, these systems evolved into new legal and social structures that continued to restrict their rights and freedom.',
    },
    {
      title: 'War on Drugs and Mass Incarceration',
      description:
        'In the 1980s, the War on Drugs significantly increased policing and incarceration rates, specifically in Black communities. Even though various racial groups were using drugs, laws were enforced that targeted Black neighborhoods through higher arrest rates and harsher sentencing laws. Black Americans represent about 13% of the population but roughly one-third of the prison population, and are imprisoned at nearly five times the rate of white Americans.',
    },
    {
      title: 'Long-Term Psychological Harm',
      description:
        'Mass incarceration and losing loved ones to systemic issues contribute to economic instability, PTSD, family separation, and this trauma is passed down to future generations.',
    },
  ],
  quote: {
    text: '"Mass incarceration and losing loved ones to systemic issues contribute to economic instability, PTSD, family separation, and this trauma is passed down to future generations."',
    attribution: 'United States',
    role: 'Police Violence and Mental Health in the Global Black Experience',
  },
}
