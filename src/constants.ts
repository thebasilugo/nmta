import { EventData, Meeting, NewsStory, Person, AwardCategory } from './types';

export const EVENTS: EventData[] = [
  {
    id: 'amvca-2025',
    name: "Africa Magic Viewers' Choice Awards (AMVCA)",
    edition: '2025',
    date: 'June 15, 2025',
    location: 'Lagos, Nigeria',
    theme: 'Celebrating African Excellence',
    description: 'The most prestigious awards celebrating excellence in African film and television.',
    highlights: [],
    winners: [],
    notableMoments: [],
    website: 'https://www.dstv.com/africamagic/en-ng/show/amvca'
  },
  {
    id: 'amaa-2025',
    name: 'Africa Movie Academy Awards (AMAA)',
    edition: '2025',
    date: 'July 20, 2025',
    location: 'Lagos, Nigeria',
    theme: 'AMAA CONNECT: PEOPLE, PASSION, EXCELLENCE',
    description: 'Recognizing outstanding achievements in African cinema across the continent.',
    highlights: [],
    winners: [],
    notableMoments: [],
    website: 'https://ama-awards.com'
  },
  {
    id: 'bon-2025',
    name: 'Best of Nollywood Awards',
    edition: '2025',
    date: 'August 10, 2025',
    location: 'Abuja, Nigeria',
    theme: 'Nollywood Pride',
    description: 'Celebrating the finest productions and talents in Nollywood cinema.',
    highlights: [],
    winners: [],
    notableMoments: [],
    website: 'https://bonawards.com'
  },
  {
    id: 'eiff-2025',
    name: 'Eko International Film Festival (EIFF)',
    edition: '2025',
    date: 'September 5, 2025',
    location: 'Lagos, Nigeria',
    theme: 'Lagos to the World',
    description: 'Lagos premier film festival showcasing local and international cinema.',
    highlights: [],
    winners: [],
    notableMoments: [],
    website: 'http://ekoiff.org'
  },
  {
    id: 'afriff-2025',
    name: 'Africa International Film Festival (AFRIFF)',
    edition: '2025',
    date: 'November 12, 2025',
    location: 'Lagos, Nigeria',
    theme: 'RHYTHMS OF THE CONTINENT',
    description: 'Promoting African cinema and fostering cultural exchange through film.',
    highlights: [],
    winners: [],
    notableMoments: [],
    website: 'https://afriff.com'
  },
  {
    id: 'aiff-2025',
    name: 'Abuja International Film Festival (AIFF)',
    edition: '2025',
    date: 'October 15, 2025',
    location: 'Abuja, Nigeria',
    theme: 'FROM SCRIPT TO NATION',
    description: "Nigeria's capital hosts this prestigious international film festival.",
    highlights: [],
    winners: [],
    notableMoments: [],
    website: 'https://abujafilmfestival.com'
  },
  {
    id: 'irep-2025',
    name: 'iREPRESENT International Documentary Film Festival',
    edition: '2025',
    date: 'December 3, 2025',
    location: 'Lagos, Nigeria',
    theme: 'Documenting Reality',
    description: 'Dedicated to showcasing powerful documentary films from Africa and beyond.',
    highlights: [],
    winners: [],
    notableMoments: [],
    website: 'http://irepfilmfestival.com'
  },
  {
    id: 'nollywoodweek-2025',
    name: 'Nollywood Week Film Festival',
    edition: '2025',
    date: 'September 20, 2025',
    location: 'Paris, France & Lagos, Nigeria',
    theme: 'Global Nollywood',
    description: "Celebrating Nollywood's global reach and cultural impact.",
    highlights: [],
    winners: [],
    notableMoments: [],
    website: 'https://www.nollywoodweek.com'
  },
  {
    id: 'rtf-2025',
    name: 'Realtime International Film Festival (RTF)',
    edition: '2025',
    date: 'November 25, 2025',
    location: 'Lagos, Nigeria',
    theme: 'Contemporary Visions',
    description: 'Showcasing contemporary African cinema and emerging filmmakers.',
    highlights: [],
    winners: [],
    notableMoments: [],
    website: 'https://realtimefilmfestival.com'
  }
];

export const NEWS: NewsStory[] = [
  {
    id: '1',
    date: 'May 15, 2025',
    title: 'Rising Stars: New Faces in Nollywood',
    excerpt: 'Discover the fresh talent making waves in the Nigerian film industry.',
    image: 'https://picsum.photos/seed/actor/800/600'
  },
  {
    id: '2',
    date: 'May 10, 2025',
    title: 'NMTA Awards 2025: Nominations Announced',
    excerpt: "See who's in the running for Nigeria's biggest night in entertainment.",
    image: 'https://picsum.photos/seed/awards2/800/600'
  },
  {
    id: '3',
    date: 'May 5, 2025',
    title: 'Nollywood-Hollywood Collaboration Announced',
    excerpt: 'Major studios partner for upcoming international blockbuster.',
    image: 'https://picsum.photos/seed/studio/800/600'
  },
  {
    id: '4',
    date: 'May 3, 2025',
    title: 'New Film Fund Launches for Nigerian Filmmakers',
    excerpt: '₦500 million fund established to support emerging directors.',
    image: 'https://picsum.photos/seed/money/800/600'
  },
  {
    id: '5',
    date: 'May 1, 2025',
    title: 'Nigerian Films Break Box Office Records',
    excerpt: 'Local productions dominate cinema earnings nationwide.',
    image: 'https://picsum.photos/seed/boxoffice/800/600'
  }
];

export const JURY: Person[] = [
  {
    name: 'Ogova Oondego',
    role: 'Film Director & Producer',
    organization: 'Kenya Film Commission',
    description: 'Award-winning filmmaker with over 20 years of experience in African cinema. Known for his groundbreaking work in East African storytelling and cultural preservation through film.',
    country: 'Kenya',
    image: 'https://picsum.photos/seed/ogova/400/400'
  },
  {
    name: 'Sadiq Tafawa Balewa',
    role: 'Film Executive & Producer',
    organization: 'Nigerian Film Corporation',
    description: 'Veteran film executive and producer who has been instrumental in shaping modern Nollywood. His contributions to the industry span over three decades.',
    country: 'Nigeria',
    image: 'https://picsum.photos/seed/sadiq/400/400'
  },
  {
    name: 'Tade Ogidan',
    role: 'Director & Screenwriter',
    organization: 'OGD Pictures',
    description: 'Renowned Nigerian filmmaker known for his compelling narratives and technical excellence. His films have won numerous awards both locally and internationally.',
    country: 'Nigeria',
    image: 'https://picsum.photos/seed/tade/400/400'
  },
  {
    name: 'Bond Emeruwa',
    role: 'Director & Actor',
    organization: 'Independent Filmmaker',
    description: 'Multi-talented filmmaker and actor who has made significant contributions to contemporary Nigerian cinema with his innovative storytelling approach.',
    country: 'Nigeria',
    image: 'https://picsum.photos/seed/bond/400/400'
  },
  {
    name: 'Rikkya Atta',
    role: 'Actress & Producer',
    organization: 'Nollywood Actress Guild',
    description: 'Accomplished actress and producer known for her powerful performances and commitment to promoting women\'s voices in African cinema.',
    country: 'Nigeria',
    image: 'https://picsum.photos/seed/rikkya/400/400'
  },
  {
    name: 'Fred Amata',
    role: 'Director & Actor',
    organization: 'Directors Guild of Nigeria',
    description: 'Veteran actor and director with decades of experience in Nollywood. He has been a mentor to many upcoming filmmakers and continues to shape the industry.',
    country: 'Nigeria',
    image: 'https://picsum.photos/seed/fred/400/400'
  }
];

export const PATRONS: Person[] = [
  {
    name: 'Zeb Ejiro',
    role: 'Pioneer Director & Producer',
    organization: 'Klink Studios',
    description: 'One of the founding fathers of modern Nollywood, Zeb Ejiro has directed over 200 films and mentored countless filmmakers. His work laid the foundation for Nigeria\'s film industry.',
    image: 'https://picsum.photos/seed/zeb/400/400'
  },
  {
    name: 'Mobert Ajaegbu',
    role: 'Producer & Industry Executive',
    organization: 'Film Producers Association',
    description: 'Veteran producer and industry executive who has been instrumental in establishing professional standards in Nollywood production and distribution.',
    image: 'https://picsum.photos/seed/mobert/400/400'
  },
  {
    name: 'Andy Boyo',
    role: 'Producer & Director',
    organization: 'Independent Producer',
    description: 'Acclaimed producer and director known for his high-quality productions and commitment to storytelling excellence in Nigerian cinema.',
    image: 'https://picsum.photos/seed/andy/400/400'
  },
  {
    name: 'Pete Edochie',
    role: 'Veteran Actor',
    organization: 'Actors Guild of Nigeria',
    description: 'Legendary Nigerian actor and cultural icon, Pete Edochie is widely regarded as one of Africa\'s finest actors. His performances have defined excellence in Nollywood for decades.',
    image: 'https://picsum.photos/seed/pete/400/400'
  },
  {
    name: 'Tunde Kelani',
    role: 'Director & Producer',
    organization: 'Mainframe Film & Television Productions',
    description: 'Award-winning filmmaker known for his artistic vision and cultural storytelling. His films have been celebrated at international film festivals worldwide.',
    image: 'https://picsum.photos/seed/tunde/400/400'
  },
  {
    name: 'Mahmoud Alli Balogun',
    role: 'Film Scholar & Educator',
    organization: 'National Film Institute',
    description: 'Distinguished film scholar and educator who has contributed significantly to film education and research in Nigeria. His academic work has shaped film theory in Africa.',
    image: 'https://picsum.photos/seed/mahmoud/400/400'
  }
];

export const CATEGORIES: AwardCategory[] = [
  { id: '1', title: 'Best Feature Film', description: 'Recognizing the most outstanding feature-length cinematic production.' },
  { id: '2', title: 'Best Director', description: 'Honoring exceptional vision and leadership in film direction.' },
  { id: '3', title: 'Best Actor in a Leading Role', description: 'Celebrating powerful and nuanced lead performances by male actors.' },
  { id: '4', title: 'Best Actress in a Leading Role', description: 'Celebrating powerful and nuanced lead performances by female actors.' },
  { id: '5', title: 'Best Cinematography', description: 'Rewarding excellence in visual storytelling and camera work.' },
  { id: '6', title: 'Best Screenplay', description: 'Honoring the foundation of every great film: the written story.' },
  { id: '7', title: 'Best Documentary', description: 'Recognizing excellence in non-fiction storytelling.' },
  { id: '8', title: 'Best Animation', description: 'Celebrating creativity and technical skill in animated works.' }
];

export const MEETINGS: Meeting[] = [
  {
    id: '1',
    title: 'Creators Roundtable: The Future of Nollywood',
    date: 'March 15, 2026',
    time: '4:00 PM WAT',
    description: 'Join top directors and producers to discuss the evolving landscape of African cinema and global distribution.',
    zoomLink: 'https://zoom.us/j/123456789',
    meetingId: '123 456 789'
  },
  {
    id: '2',
    title: 'Actors Workshop: Mastering the Craft',
    date: 'March 22, 2026',
    time: '2:00 PM WAT',
    description: 'A deep dive into character development and performance techniques for the screen.',
    zoomLink: 'https://zoom.us/j/987654321',
    meetingId: '987 654 321'
  }
];
