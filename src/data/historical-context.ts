import type { TimelineEvent, Quote } from '@/types'

export const historicalHero = {
  headline: 'A History Built on Violence',
  subheadline: 'Slavery, colonialism, and racial surveillance laid the foundations for modern policing in all three nations.',
}

export const historicalIntro =
  'From the 16th to the 19th century, the transatlantic slave trade forced millions of Africans into slavery throughout Europe and the Americas. Once captured by Europeans, enslaved Africans were dehumanized and treated as property for the rest of their lives. Countries such as the United States, the United Kingdom, and Brazil all profited economically from slavery and created racial hierarchies that justified the oppression of Black people. Even after slavery was abolished, racial inequality continued through segregation, discriminatory laws, and racial surveillance. Reinforcing negative stereotypes about Black communities has led to high rates of mass incarceration and lasting racial inequalities throughout the world.'

export const timeline: TimelineEvent[] = [
  {
    id: 'h-1',
    year: '16th to 19th Century',
    title: 'The Transatlantic Slave Trade',
    description:
      'From the 16th to the 19th century, the transatlantic slave trade forced millions of Africans into slavery throughout Europe and the Americas. Once captured by Europeans, enslaved Africans were dehumanized and treated as property for the rest of their lives. Countries such as the United States, the United Kingdom, and Brazil all profited economically from slavery and created racial hierarchies that justified the oppression of Black people.',
    country: 'Global',
    tags: ['Slavery', 'Colonialism'],
  },
  {
    id: 'h-2',
    year: 'During Slavery',
    title: 'Slave Patrols in the United States',
    description:
      'During slavery, policing in the South included slave patrols, which were created to monitor slaves and suppress resistance. After the abolition of slavery in 1865, these systems evolved into new legal and social structures that continued to restrict their rights and freedom.',
    country: 'USA',
    tags: ['Slave Patrols', 'Policing'],
  },
  {
    id: 'h-3',
    year: '300+ Years',
    title: 'Brazilian Slavery',
    description:
      'Brazil received more enslaved African people than any other country in America, and was also the last country in the Western Hemisphere to officially abolish slavery in 1888. However, after slavery ended, enslaved people were not given any meaningful support, such as land, education, or economic opportunities. This led many to remain trapped in poverty and pushed into low-income communities, shaping patterns of inequality that still exist today.',
    country: 'Brazil',
    tags: ['Slavery', 'Brazil'],
  },
  {
    id: 'h-4',
    year: 'Colonial Era',
    title: "Britain's Role in Slavery and Colonialism",
    description:
      'In the United Kingdom, racial inequality within policing is linked to the country\'s history of colonialism and involvement in the transatlantic slave trade, which created racial hierarchies in the West. As migration increased after World War II, Black communities in Britain faced discrimination in housing, employment, and community services, as well as heightened policing in urban areas.',
    country: 'UK',
    tags: ['Colonialism', 'UK'],
  },
  {
    id: 'h-5',
    year: 'Post-Abolition',
    title: 'Racial Inequality After Slavery',
    description:
      'Even after slavery was abolished, racial inequality continued through segregation, discriminatory laws, and racial surveillance. Black Americans continued to experience racial violence and discriminatory laws such as Jim Crow laws. Reinforcing negative stereotypes about Black communities has led to high rates of mass incarceration and lasting racial inequalities throughout the world.',
    country: 'USA',
    tags: ['Segregation', 'Jim Crow'],
  },
  {
    id: 'h-6',
    year: 'Ongoing',
    title: 'Protest Movements and Resistance',
    description:
      'Even though the system has always been against them, Black communities have resisted racism through protests and social movements to bring global attention to racial discrimination. Communities with high incarceration rates have a higher chance of poverty, limited opportunities, and are hesitant to trust government officials.',
    country: 'Global',
    tags: ['Protest', 'Resistance'],
  },
]

export const historicalQuote: Quote = {
  text: '"Even after slavery was abolished, racial inequality continued through segregation, discriminatory laws, and racial surveillance. Reinforcing negative stereotypes about Black communities has led to high rates of mass incarceration and lasting racial inequalities throughout the world."',
  attribution: 'Historical Background',
  role: 'Police Violence and Mental Health in the Global Black Experience',
}
