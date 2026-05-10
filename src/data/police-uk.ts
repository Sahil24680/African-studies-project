import type { CountryPageContent } from '@/types'

export const policeUkContent: CountryPageContent = {
  country: 'UK',
  accentClass: 'uk',
  hero: {
    headline: 'Police Violence in the United Kingdom',
    subheadline: 'From sus laws to strip searches — racism embedded in British policing.',
  },
  intro:
    'Britain presents itself as a more restrained model of policing compared to the United States, yet the data reveals persistent and serious racial disparities. Black people in England and Wales are stopped and searched at approximately nine times the rate of white people. Deaths in police custody disproportionately involve people of color, and accountability remains rare. The legacy of colonial policing continues to shape the relationship between British institutions and Black communities.',
  statistics: [
    {
      id: 'uk-1',
      figure: '9x',
      figureNumeric: 9,
      suffix: 'x',
      label: 'More likely Black people are stopped and searched vs. white people in England & Wales',
      source: 'UK Home Office, 2022/23',
    },
    {
      id: 'uk-2',
      figure: '163',
      figureNumeric: 163,
      label: 'Deaths in or following police custody in England & Wales (2022/23)',
      source: 'IOPC Annual Statistics, 2023',
    },
    {
      id: 'uk-3',
      figure: '3x',
      figureNumeric: 3,
      suffix: 'x',
      label: 'More likely Black people are Tasered by police compared to white people',
      source: 'Placeholder Source',
    },
    {
      id: 'uk-4',
      figure: '0',
      figureNumeric: 0,
      label: 'Police officers convicted of manslaughter following a death in custody since 1990',
      source: 'Inquest UK, 2022',
    },
  ],
  keyEvents: [
    {
      id: 'uk-e1',
      year: '1981',
      name: 'Brixton Uprising',
      location: 'Brixton, South London',
      description:
        'Operation Swamp 81—an aggressive stop-and-search campaign targeting Black youth—triggers days of unrest in Brixton. Hundreds are arrested; dozens of buildings are damaged.',
      significance:
        'The Scarman Report that followed acknowledged "institutional racism" yet proposed only incremental reforms. Many of its recommendations remain unimplemented.',
      country: 'UK',
    },
    {
      id: 'uk-e2',
      year: '1993',
      name: 'Murder of Stephen Lawrence',
      location: 'Eltham, South London',
      description:
        "Teenager Stephen Lawrence is stabbed to death in a racially motivated attack. The Metropolitan Police's botched and racist investigation becomes a national scandal.",
      significance:
        'The 1999 Macpherson Inquiry formally identifies the Metropolitan Police as "institutionally racist"—a landmark acknowledgment that defined British racial discourse for a generation.',
      country: 'UK',
    },
    {
      id: 'uk-e3',
      year: '2011',
      name: 'Mark Duggan Shooting / London Riots',
      location: 'Tottenham, North London',
      description:
        'Mark Duggan is shot dead by Metropolitan Police officers in Tottenham. The killing and subsequent handling of his family triggers community protests that escalate into riots across London and other UK cities.',
      significance:
        'The riots reopened conversations about racial inequality, police violence, and the social conditions driving unrest in Black British communities.',
      country: 'UK',
    },
    {
      id: 'uk-e4',
      year: '2018',
      name: 'Windrush Scandal',
      location: 'Nationwide, UK',
      description:
        'It is revealed that thousands of Caribbean Windrush generation migrants—who came to Britain legally—have been detained, deported, and denied rights under the government\'s "hostile environment" policy.',
      significance:
        'The scandal exposes how state institutions, including immigration enforcement, continue to target Black communities under racially discriminatory policies.',
      country: 'UK',
    },
    {
      id: 'uk-e5',
      year: '2021',
      name: 'Child Q Strip Search Scandal',
      location: 'Hackney, East London',
      description:
        'A 15-year-old Black schoolgirl is strip-searched by police at her school while menstruating. The officers acted on a tip about cannabis that proved false. No appropriate adult was present.',
      significance:
        'The case exposed the routine degradation and sexualized violence Black children experience at the hands of British police, and the "adultification" bias that denies Black children safety.',
      country: 'UK',
    },
  ],
  systemicPatterns: [
    {
      title: 'Section 60 and Disproportionate Stop & Search',
      description:
        'Section 60 orders allow police to stop and search anyone in an area without individual suspicion. Data consistently shows these powers are applied disproportionately to Black and minority ethnic individuals, compounding psychological harm through repeated dehumanization.',
    },
    {
      title: 'Deaths in Custody and Accountability Gap',
      description:
        'Despite hundreds of deaths in or following police custody since 1990, no UK police officer has been convicted of manslaughter. The Independent Office for Police Conduct (IOPC) is widely criticized for slow investigations and rarely recommending prosecution.',
    },
    {
      title: 'Adultification Bias',
      description:
        'Research and case reviews find that police and other authorities systematically view Black children as older, less innocent, and less in need of protection than white children—exposing them to adult-level police treatment from a young age.',
    },
  ],
  quote: {
    text: '"Being stopped and searched as a child changes how you see yourself. It tells you that the state considers you a suspect before you are a person."',
    attribution: 'Placeholder — Community Testimony',
    role: 'Placeholder Source, UK, 2022',
  },
}
