import { Player } from '@/types/player';

// In a production environment, this would be fetched from a database
// For now, we'll use a local array to simulate storage
export const players: Player[] = [
  {
    id: '1',
    name: 'Иван Петров',
    position: 'Нападающий',
    number: 9,
    birthDate: '15.05.1992',
    height: 182,
    weight: 78,
    nationality: 'Россия',
    image: 'https://placehold.co/300x300/orange/white?text=Иван+Петров',
    matches: 25,
    goals: 15,
    assists: 7,
    yellowCards: 3,
    redCards: 0,
    age: 31,
    biography: 'Опытный нападающий с отличным чувством гола.',
    achievements: ['Лучший бомбардир сезона 2022/23'],
    socialLinks: {
      instagram: 'https://instagram.com/player1',
      vk: 'https://vk.com/player1'
    },
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: '2',
    name: 'Александр Иванов',
    position: 'Полузащитник',
    number: 8,
    birthDate: '23.09.1994',
    height: 179,
    weight: 72,
    nationality: 'Россия',
    image: 'https://placehold.co/300x300/orange/white?text=Александр+Иванов',
    matches: 28,
    goals: 5,
    assists: 12,
    yellowCards: 4,
    redCards: 0,
    age: 29,
    biography: 'Талантливый полузащитник с отличным видением поля.',
    achievements: ['Лучший ассистент сезона 2022/23'],
    socialLinks: {
      instagram: 'https://instagram.com/player2',
      vk: 'https://vk.com/player2'
    },
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: '3',
    name: 'Сергей Смирнов',
    position: 'Защитник',
    number: 4,
    birthDate: '07.12.1995',
    height: 185,
    weight: 80,
    nationality: 'Россия',
    image: 'https://placehold.co/300x300/orange/white?text=Сергей+Смирнов',
    matches: 30,
    goals: 2,
    assists: 3,
    yellowCards: 6,
    redCards: 1,
    age: 28,
    biography: 'Надежный защитник с хорошей игрой головой.',
    achievements: ['Лучший защитник сезона 2021/22'],
    socialLinks: {
      instagram: 'https://instagram.com/player3',
      vk: 'https://vk.com/player3'
    },
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: '4',
    name: 'Дмитрий Козлов',
    position: 'Вратарь',
    number: 1,
    birthDate: '18.03.1993',
    height: 188,
    weight: 82,
    nationality: 'Россия',
    image: 'https://placehold.co/300x300/orange/white?text=Дмитрий+Козлов',
    matches: 32,
    goals: 0,
    assists: 1,
    yellowCards: 1,
    redCards: 0,
    age: 30,
    biography: 'Опытный вратарь с отличной реакцией.',
    achievements: ['Лучший вратарь сезона 2022/23'],
    socialLinks: {
      instagram: 'https://instagram.com/player4',
      vk: 'https://vk.com/player4'
    },
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: '5',
    name: 'Андрей Морозов',
    position: 'Полузащитник',
    number: 10,
    birthDate: '05.07.1996',
    height: 176,
    weight: 70,
    nationality: 'Россия',
    image: 'https://placehold.co/300x300/orange/white?text=Андрей+Морозов',
    matches: 27,
    goals: 8,
    assists: 15,
    yellowCards: 2,
    redCards: 0,
    age: 27,
    biography: 'Креативный полузащитник с отличной техникой.',
    achievements: ['Лучший игрок месяца - Март 2023'],
    socialLinks: {
      instagram: 'https://instagram.com/player5',
      vk: 'https://vk.com/player5'
    },
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: '6',
    name: 'Павел Соколов',
    position: 'Защитник',
    number: 3,
    birthDate: '12.02.1994',
    height: 183,
    weight: 77,
    nationality: 'Россия',
    image: 'https://placehold.co/300x300/orange/white?text=Павел+Соколов',
    matches: 29,
    goals: 1,
    assists: 4,
    yellowCards: 5,
    redCards: 0,
    age: 29,
    biography: 'Универсальный защитник с хорошим первым пасом.',
    achievements: ['Лучший молодой игрок 2020'],
    socialLinks: {
      instagram: 'https://instagram.com/player6',
      vk: 'https://vk.com/player6'
    },
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
];

// Get all players
export const getPlayersData = (): Player[] => {
  return [...players];
};

// Get a specific player by ID
export const getPlayerById = (id: string): Player | undefined => {
  return players.find(player => player.id === id);
};

// Update a player
export const updatePlayer = (updatedPlayer: Player): void => {
  players = players.map(player => 
    player.id === updatedPlayer.id ? updatedPlayer : player
  );
};

// Delete a player
export const deletePlayer = (id: string): void => {
  players = players.filter(player => player.id !== id);
};

// Create a new player
export const createPlayer = (newPlayer: Player): void => {
  // Ensure we don't duplicate IDs
  if (players.some(player => player.id === newPlayer.id)) {
    throw new Error('Player with this ID already exists');
  }
  players.push(newPlayer);
};
