export interface Winner {
  category: string;
  winner: string;
  work?: string;
}

export interface EventData {
  id: string;
  name: string;
  edition: string;
  date: string;
  location: string;
  theme: string;
  description: string;
  highlights: string[];
  winners: Winner[];
  notableMoments: string[];
  website?: string;
}

export interface Meeting {
  id: string;
  title: string;
  date: string;
  time: string;
  description: string;
  zoomLink: string;
  meetingId: string;
}

export interface NewsStory {
  id: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
}

export interface Person {
  name: string;
  role: string;
  organization: string;
  description: string;
  country?: string;
  image: string;
}

export interface AwardCategory {
  id: string;
  title: string;
  description: string;
}
