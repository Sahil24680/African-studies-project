import type { TimelineEvent, Quote } from '@/types'

export const historicalHero = {
  headline: 'A History Built on Violence',
  subheadline: 'Slavery, colonialism, and racial surveillance laid the foundations for modern policing in all three nations.',
}

export const historicalIntro =
  'From the 16th to the 19th century, the transatlantic slave trade forced millions of Africans into slavery throughout Europe and the Americas. Once captured by Europeans, enslaved Africans were dehumanized and treated as property for the rest of their lives. Countries such as the United States, United Kingdom, and Brazil all profited economically from slavery and created racial hierarchies that justified the oppression of Black people. Even after slavery was abolished, its racial inequality still continued through segregation, discriminatory laws, and racial surveillance. Reinforcing negative stereotypes about Black communities has led to high rates of mass incarceration and everlasting racial inequalities throughout the world.'

export const timeline: TimelineEvent[] = [
  {
    id: 'h-1',
    year: '16th to 19th Century',
    title: 'The Transatlantic Slave Trade',
    description:
      'From the 16th to the 19th century, the transatlantic slave trade forced millions of Africans into slavery throughout Europe and the Americas. Once captured by Europeans, enslaved Africans were dehumanized and treated as property for the rest of their lives. Countries such as the United States, United Kingdom, and Brazil all profited economically from slavery and created racial hierarchies that justified the oppression of Black people.',
    country: 'Global',
    tags: ['Slavery', 'Colonialism'],
  },
  {
    id: 'h-2',
    year: 'During Slavery',
    title: 'Slave Patrols in the United States',
    description:
      'During slavery in the United States, slave patrols were used to monitor enslaved Africans, especially to prevent them from escaping. Police violence in the United States is deeply connected to this history of slavery and racial segregation.',
    country: 'USA',
    tags: ['Slave Patrols', 'Policing'],
  },
  {
    id: 'h-3',
    year: '300+ Years',
    title: 'Brazilian Slavery',
    description:
      'Brazil imported more enslaved Africans than any other country in the Americas, and slavery lasted there for more than 300 years before officially ending in 1888. Even after slavery ended, Black Brazilians continued to experience poverty, racial discrimination, and exclusion from economic and educational opportunities.',
    country: 'Brazil',
    tags: ['Slavery', 'Brazil'],
  },
  {
    id: 'h-4',
    year: 'Colonial Era',
    title: "Britain's Role in Slavery and Colonialism",
    description:
      'The United Kingdom played a major role in the transatlantic slave trade and colonized many African and Caribbean nations. Black immigrants from former colonies often experienced discrimination in employment, education, housing, and policing after arriving in Britain.',
    country: 'UK',
    tags: ['Colonialism', 'UK'],
  },
  {
    id: 'h-5',
    year: 'Post-Abolition',
    title: 'Racial Inequality After Slavery',
    description:
      'Even after slavery was abolished, its racial inequality still continued through segregation, discriminatory laws, and racial surveillance. After slavery officially ended in 1865 in the United States, Black Americans continued to experience segregation, racial violence, and discriminatory laws such as Jim Crow laws. Reinforcing negative stereotypes about Black communities has led to high rates of mass incarceration and everlasting racial inequalities throughout the world.',
    country: 'USA',
    tags: ['Segregation', 'Jim Crow'],
  },
  {
    id: 'h-6',
    year: 'Ongoing',
    title: 'Protest Movements and Resistance',
    description:
      'Even though the system has always been against them, Black communities have resisted racism through protests and social movements to bring global attention to racial discrimination. Also, communities with high incarceration rates have a higher chance of poverty, limited opportunities, and mistrust of government officials.',
    country: 'Global',
    tags: ['Protest', 'Resistance'],
  },
]

export const historicalQuote: Quote = {
  text: '"The book explains how Black communities have historically resisted oppression while also discussing how policing and incarceration systems often dehumanize marginalized communities and create long-lasting emotional and psychological harm."',
  attribution: 'Becoming Abolitionists',
  role: 'Chapter 3: Resistance and Reform / Chapter 7: Dehumanization, Disability, and Reform',
}
