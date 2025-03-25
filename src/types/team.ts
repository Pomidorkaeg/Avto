export interface Team {
  id: string;
  name: string;
  logo: string;
  backgroundImage: string;
  primaryColor: string;
  secondaryColor: string;
  foundedYear: number;
  stadium: string;
  coach: string;
  description: string;
  address: string;
  players: string[];
  matches: number;
  wins: number;
  draws: number;
  losses: number;
  goalsFor: number;
  goalsAgainst: number;
  points: number;
  achievements: string[];
  socialLinks: {
    website?: string;
    instagram?: string;
    facebook?: string;
    twitter?: string;
  };
} 