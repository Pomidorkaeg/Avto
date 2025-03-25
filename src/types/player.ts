export interface Player {
  id: string;
  name: string;
  position: string;
  number: number;
  age: number;
  height: number;
  weight: number;
  nationality: string;
  birthDate: string;
  image: string;
  matches: number;
  goals: number;
  assists: number;
  yellowCards: number;
  redCards: number;
  biography: string;
  achievements: string[];
  socialLinks: {
    instagram?: string;
    twitter?: string;
    vk?: string;
  };
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}
