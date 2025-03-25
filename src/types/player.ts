export interface Player {
  id: string;
  name: string;
  position: string;
  number: number;
  birthDate: string;
  age: number;
  height: number;
  weight: number;
  nationality: string;
  image: string;
  biography: string;
  achievements: string[];
  socialLinks: {
    instagram?: string;
    twitter?: string;
    facebook?: string;
  };
  stats: {
    matches: number;
    goals: number;
    assists: number;
    yellowCards: number;
    redCards: number;
  };
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}
