import type { TimelineEvent, Quote } from '@/types'

export const historicalHero = {
  headline: 'A History Built on Violence',
  subheadline: 'Slavery, colonialism, and racial surveillance laid the foundations for modern policing in all three nations.',
}

export const historicalIntro =
  'The policing of Black bodies did not begin with the badge. Across the United States, United Kingdom, and Brazil, systems of racial control—from slavery to colonial surveillance to mass incarceration—shaped the institutions that govern Black communities today. Understanding this history is essential to understanding the mental health crisis it has produced.'

export const timeline: TimelineEvent[] = [
  {
    id: 'h-1',
    year: '1619',
    title: 'Transatlantic Slave Trade: Arrival in America',
    description:
      'The first enslaved Africans arrive in colonial Virginia. The brutal institution of chattel slavery becomes the economic and social foundation of the American South, establishing racial hierarchy enforced through violence.',
    country: 'USA',
    tags: ['Slavery', 'Racial Hierarchy'],
  },
  {
    id: 'h-2',
    year: '1700s',
    title: 'Slave Patrols: The Origins of American Policing',
    description:
      'Southern colonies establish formal slave patrols—organized bodies charged with controlling enslaved populations, suppressing rebellion, and returning runaways. Many historians trace the DNA of American policing directly to these patrols.',
    country: 'USA',
    tags: ['Slave Patrols', 'Origins of Policing'],
  },
  {
    id: 'h-3',
    year: '1500s–1800s',
    title: 'Brazilian Slavery and Colonial Racial Control',
    description:
      'Brazil receives more enslaved Africans than any other country in the Americas—approximately 4.9 million people over 300 years. Colonial and later imperial Brazil develops elaborate legal codes to manage, punish, and contain the Black population.',
    country: 'Brazil',
    tags: ['Slavery', 'Colonialism'],
  },
  {
    id: 'h-4',
    year: '1807',
    title: 'British Abolition of the Slave Trade',
    description:
      'Britain formally abolishes the transatlantic slave trade, though slavery in its colonies continues until 1833. The British Empire\'s involvement in enslaving millions of Africans and its colonial presence across Africa and the Caribbean shapes the racial dynamics of modern Britain.',
    country: 'UK',
    tags: ['Abolition', 'British Empire'],
  },
  {
    id: 'h-5',
    year: '1865',
    title: 'End of US Slavery / Birth of Jim Crow',
    description:
      "The 13th Amendment ends chattel slavery, but Black Codes and later Jim Crow laws immediately re-establish racial control through law enforcement. The Reconstruction Era's promise is violently suppressed.",
    country: 'USA',
    tags: ['Jim Crow', 'Reconstruction'],
  },
  {
    id: 'h-6',
    year: '1948',
    title: 'Windrush Generation Arrives in Britain',
    description:
      'Caribbean migrants invited to rebuild post-war Britain face systemic racism, including from police. The "sus" (suspected persons) law disproportionately targets Black communities for decades.',
    country: 'UK',
    tags: ['Immigration', 'Sus Laws'],
  },
  {
    id: 'h-7',
    year: '1964',
    title: 'US Civil Rights Act',
    description:
      'Landmark legislation formally prohibits racial discrimination. Yet police violence against Black Americans continues largely unabated. The struggle exposes the gap between legal equality and lived reality.',
    country: 'USA',
    tags: ['Civil Rights', 'Legislation'],
  },
  {
    id: 'h-8',
    year: '1981',
    title: 'Brixton Uprising, UK',
    description:
      'Mass uprising in Brixton, South London, following aggressive police "Operation Swamp 81" targeting Black youth. The subsequent Scarman Report acknowledges institutional racism while stopping short of systemic reform.',
    country: 'UK',
    tags: ['Uprising', 'Institutional Racism'],
  },
  {
    id: 'h-9',
    year: '1994',
    title: "Brazil's Military Police Massacre at Candelária",
    description:
      'Off-duty military police officers kill eight street children—most of them Black—sleeping outside the Candelária Church in Rio de Janeiro. The massacre exposes the routine violence of Brazilian police against poor Black youth.',
    country: 'Brazil',
    tags: ['Police Massacre', 'Anti-Black Violence'],
  },
  {
    id: 'h-10',
    year: '2013',
    title: 'Birth of Black Lives Matter',
    description:
      'Following the acquittal of Trayvon Martin\'s killer, Alicia Garza, Patrisse Cullors, and Opal Tometi create the #BlackLivesMatter hashtag, sparking a global movement against police violence.',
    country: 'Global',
    tags: ['BLM', 'Movement Building'],
  },
]

export const historicalQuote: Quote = {
  text: '"Abolition requires that we imagine and build new ways to keep communities safe without relying on systems that have never been designed to keep us safe."',
  attribution: 'Andrea J. Ritchie',
  role: 'Becoming Abolitionists, Chapter 7',
}
