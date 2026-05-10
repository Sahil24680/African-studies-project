import type { CountryPageContent } from '@/types'

export const policeUsaContent: CountryPageContent = {
  country: 'USA',
  accentClass: 'usa',
  hero: {
    headline: 'Police Violence in the United States',
    subheadline: 'A persistent crisis at the intersection of race, power, and impunity.',
  },
  intro:
    'The United States has one of the highest rates of police killings among wealthy democracies—and racial disparities are staggering. Black Americans are killed by police at more than three times the rate of white Americans, a pattern that has persisted for decades despite waves of protest, legislation, and reform efforts. Beyond the deaths, millions more Black Americans live under the psychological weight of knowing that a routine traffic stop could be fatal.',
  statistics: [
    {
      id: 'usa-1',
      figure: '3.23',
      figureNumeric: 3.23,
      suffix: 'x',
      label: 'More likely Black Americans are killed by police vs. white Americans',
      source: 'The Lancet, 2021',
    },
    {
      id: 'usa-2',
      figure: '1,100+',
      figureNumeric: 1100,
      suffix: '+',
      label: 'People killed by law enforcement annually (estimated)',
      source: 'Mapping Police Violence, 2023',
    },
    {
      id: 'usa-3',
      figure: '28',
      figureNumeric: 28,
      suffix: '%',
      label: 'Of police killings involve Black victims, despite being 13% of the population',
      source: 'Placeholder Source',
    },
    {
      id: 'usa-4',
      figure: '99',
      figureNumeric: 99,
      suffix: '%',
      label: 'Of police killings result in no criminal charges (2013–2021)',
      source: 'Placeholder Source',
    },
  ],
  keyEvents: [
    {
      id: 'usa-e1',
      year: '1991',
      name: 'Rodney King Beating',
      location: 'Los Angeles, California',
      description:
        'Motorist Rodney King is severely beaten by LAPD officers in a traffic stop. Footage of the beating is captured on video—one of the first widely circulated recordings of police brutality.',
      significance:
        'The acquittal of the officers in 1992 sparked the LA Uprising, bringing national attention to systemic police violence against Black Americans.',
      country: 'USA',
    },
    {
      id: 'usa-e2',
      year: '2012',
      name: 'Trayvon Martin',
      location: 'Sanford, Florida',
      description:
        '17-year-old Trayvon Martin is shot and killed by George Zimmerman, a neighborhood watch volunteer. Zimmerman\'s acquittal in 2013 catalyzes the founding of Black Lives Matter.',
      significance:
        'The case galvanized a new generation of activists and forced national conversations about racial profiling and the devaluation of Black life.',
      country: 'USA',
    },
    {
      id: 'usa-e3',
      year: '2014',
      name: 'Michael Brown / Ferguson Uprising',
      location: 'Ferguson, Missouri',
      description:
        '18-year-old Michael Brown is shot and killed by a Ferguson police officer. His body is left in the street for four hours. The Ferguson community erupts in weeks of protest.',
      significance:
        'The Ferguson uprising became a watershed moment for the Black Lives Matter movement and spurred a Justice Department investigation that found systemic racism in Ferguson PD.',
      country: 'USA',
    },
    {
      id: 'usa-e4',
      year: '2020',
      name: 'Murder of George Floyd',
      location: 'Minneapolis, Minnesota',
      description:
        'George Floyd dies after Minneapolis police officer Derek Chauvin kneels on his neck for over nine minutes. Bystander video goes viral globally.',
      significance:
        'Floyd\'s death sparked the largest protest movement in US history and global solidarity demonstrations. Officer Chauvin was convicted of murder in 2021.',
      country: 'USA',
    },
    {
      id: 'usa-e5',
      year: '2022',
      name: 'Murder of Tyre Nichols',
      location: 'Memphis, Tennessee',
      description:
        'Tyre Nichols is beaten to death by five Memphis police officers following a traffic stop. Body camera footage is released to the public.',
      significance:
        'The case renewed debates about police accountability and highlighted that the race of officers does not eliminate anti-Black violence in policing.',
      country: 'USA',
    },
  ],
  systemicPatterns: [
    {
      title: 'Qualified Immunity',
      description:
        'The qualified immunity doctrine shields police officers from civil lawsuits unless they violated "clearly established" law. Critics argue the doctrine has made it nearly impossible to hold officers accountable and operates as a near-total shield against accountability.',
    },
    {
      title: 'Racial Bias in Use-of-Force Decisions',
      description:
        'Research consistently finds that Black Americans face greater use of force in police encounters even when controlling for other factors. Studies using body camera data and administrative records confirm significant racial disparities in how force is applied.',
    },
    {
      title: 'Over-Policing in Black Neighborhoods',
      description:
        'Broken windows policing, aggressive stop-and-frisk tactics, and concentration of policing resources in Black communities produce dramatically higher rates of surveillance, arrest, and use of force in those communities—creating cycles of traumatic encounters.',
    },
  ],
  quote: {
    text: '"Every time we see our people killed with impunity, a little piece of us dies too. That is by design."',
    attribution: 'Placeholder Community Advocate',
    role: 'Quoted in Placeholder Source, 2021',
  },
}
