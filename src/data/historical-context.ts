import type { TimelineEvent, Quote } from '@/types'

export const historicalHero = {
  headline: 'A History Built on Violence',
  subheadline: 'Slavery, colonialism, and racial surveillance laid the foundations for modern policing in all three nations.',
}

export const historicalIntro =
  'The transatlantic slave trade forced millions of Africans into slavery throughout the Americas and Europe. Countries such as the United States, United Kingdom, and Brazil profited economically from slavery and built racial systems that treated Black people as inferior. Even after slavery officially ended, Black communities continued to experience discrimination through segregation, colonial rule, racial surveillance, unequal laws, and discriminatory policing practices. These systems helped create long-lasting racial inequalities that continue to influence policing and incarceration today.'

export const timeline: TimelineEvent[] = [
  {
    id: 'h-1',
    year: 'Centuries of Slavery',
    title: 'The Transatlantic Slave Trade',
    description:
      'The transatlantic slave trade forced millions of Africans into slavery throughout the Americas and Europe. Countries such as the United States, United Kingdom, and Brazil profited economically from slavery and built racial systems that treated Black people as inferior.',
    country: 'Global',
    tags: ['Slavery', 'Colonialism'],
  },
  {
    id: 'h-2',
    year: 'During Slavery',
    title: 'Slave Patrols in the United States',
    description:
      'During slavery in the United States, slave patrols were used to monitor and punish enslaved Africans. Police violence in the United States is deeply connected to this history of slavery and racial segregation.',
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
    title: 'Britain\'s Role in Slavery and Colonialism',
    description:
      'The United Kingdom played a major role in the transatlantic slave trade and colonized many African and Caribbean nations. Black immigrants from former colonies often experienced discrimination in employment, education, housing, and policing after arriving in Britain.',
    country: 'UK',
    tags: ['Colonialism', 'UK'],
  },
  {
    id: 'h-5',
    year: 'Post-Slavery',
    title: 'Discrimination After Slavery',
    description:
      'Even after slavery officially ended, Black communities continued to experience discrimination through segregation, colonial rule, racial surveillance, unequal laws, and discriminatory policing practices. After slavery officially ended in 1865 in the United States, Black Americans continued to experience segregation, racial violence, discriminatory laws, and over-policing through systems such as Jim Crow laws.',
    country: 'USA',
    tags: ['Segregation', 'Jim Crow'],
  },
  {
    id: 'h-6',
    year: 'Ongoing',
    title: 'Protest Movements and Resistance',
    description:
      'Black communities have historically protested against racism, police brutality, segregation, and inequality. Many Black protesters fighting for equality have experienced violence, arrests, intimidation, and surveillance from police forces. The deaths of George Floyd, Breonna Taylor, and many other Black victims of police violence sparked global protests against systemic racism and police brutality.',
    country: 'Global',
    tags: ['Protest', 'Resistance'],
  },
]

export const historicalQuote: Quote = {
  text: '"The book explains how Black communities have historically resisted oppression while also discussing how policing and incarceration systems often dehumanize marginalized communities and create long-lasting emotional and psychological harm."',
  attribution: 'Becoming Abolitionists',
  role: 'Chapter 3: Resistance and Reform / Chapter 7: Dehumanization, Disability, and Reform',
}
