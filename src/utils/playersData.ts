import { Player } from '@/types/player';

// Массив для хранения данных игроков
let playersData: Player[] = [
  {
    id: '1',
    name: 'Александр Кокорин',
    position: 'Нападающий',
    number: 9,
    birthDate: '1991-03-19',
    age: 32,
    height: 183,
    weight: 77,
    nationality: 'Россия',
    image: '/players/kokorin.jpg',
    biography: 'Российский футболист, нападающий.',
    achievements: ['Чемпион России 2016/17'],
    socialLinks: {
      instagram: 'https://instagram.com/kokorin',
      twitter: 'https://twitter.com/kokorin'
    },
    stats: {
      matches: 250,
      goals: 100,
      assists: 50,
      yellowCards: 20,
      redCards: 2
    },
    isActive: true,
    createdAt: '2023-01-01T00:00:00Z',
    updatedAt: '2023-01-01T00:00:00Z'
  },
  {
    id: '2',
    name: 'Артем Дзюба',
    position: 'Нападающий',
    number: 22,
    birthDate: '1988-08-22',
    age: 35,
    height: 196,
    weight: 94,
    nationality: 'Россия',
    image: '/players/dzuba.jpg',
    biography: 'Российский футболист, нападающий. Бывший капитан сборной России.',
    achievements: ['Лучший бомбардир РПЛ 2019/20'],
    socialLinks: {
      instagram: 'https://instagram.com/dzuba',
      facebook: 'https://facebook.com/dzuba'
    },
    stats: {
      matches: 300,
      goals: 150,
      assists: 80,
      yellowCards: 30,
      redCards: 3
    },
    isActive: true,
    createdAt: '2023-01-01T00:00:00Z',
    updatedAt: '2023-01-01T00:00:00Z'
  },
  {
    id: '3',
    name: 'Сергей Смирнов',
    position: 'Защитник',
    number: 4,
    birthDate: '1995-12-07',
    age: 28,
    height: 185,
    weight: 80,
    nationality: 'Россия',
    image: 'https://placehold.co/300x300/orange/white?text=Сергей+Смирнов',
    biography: 'Надежный защитник с хорошей игрой головой.',
    achievements: ['Лучший защитник сезона 2021/22'],
    socialLinks: {
      instagram: 'https://instagram.com/player3',
      twitter: 'https://twitter.com/player3'
    },
    stats: {
      matches: 180,
      goals: 10,
      assists: 15,
      yellowCards: 25,
      redCards: 2
    },
    isActive: true,
    createdAt: '2023-01-01T00:00:00Z',
    updatedAt: '2023-01-01T00:00:00Z'
  },
  {
    id: '4',
    name: 'Дмитрий Козлов',
    position: 'Вратарь',
    number: 1,
    birthDate: '1993-03-18',
    age: 30,
    height: 188,
    weight: 82,
    nationality: 'Россия',
    image: 'https://placehold.co/300x300/orange/white?text=Дмитрий+Козлов',
    biography: 'Опытный вратарь с отличной реакцией.',
    achievements: ['Лучший вратарь сезона 2022/23'],
    socialLinks: {
      instagram: 'https://instagram.com/player4',
      twitter: 'https://twitter.com/player4'
    },
    stats: {
      matches: 32,
      goals: 0,
      assists: 1,
      yellowCards: 1,
      redCards: 0
    },
    isActive: true,
    createdAt: '2023-01-01T00:00:00Z',
    updatedAt: '2023-01-01T00:00:00Z'
  },
  {
    id: '5',
    name: 'Андрей Морозов',
    position: 'Полузащитник',
    number: 10,
    birthDate: '1996-07-05',
    age: 27,
    height: 176,
    weight: 70,
    nationality: 'Россия',
    image: 'https://placehold.co/300x300/orange/white?text=Андрей+Морозов',
    biography: 'Креативный полузащитник с отличной техникой.',
    achievements: ['Лучший игрок месяца - Март 2023'],
    socialLinks: {
      instagram: 'https://instagram.com/player5',
      twitter: 'https://twitter.com/player5'
    },
    stats: {
      matches: 27,
      goals: 8,
      assists: 15,
      yellowCards: 2,
      redCards: 0
    },
    isActive: true,
    createdAt: '2023-01-01T00:00:00Z',
    updatedAt: '2023-01-01T00:00:00Z'
  },
  {
    id: '6',
    name: 'Павел Соколов',
    position: 'Защитник',
    number: 3,
    birthDate: '1994-02-12',
    age: 29,
    height: 183,
    weight: 77,
    nationality: 'Россия',
    image: 'https://placehold.co/300x300/orange/white?text=Павел+Соколов',
    biography: 'Универсальный защитник с хорошим первым пасом.',
    achievements: ['Лучший молодой игрок 2020'],
    socialLinks: {
      instagram: 'https://instagram.com/player6',
      twitter: 'https://twitter.com/player6'
    },
    stats: {
      matches: 29,
      goals: 1,
      assists: 4,
      yellowCards: 5,
      redCards: 0
    },
    isActive: true,
    createdAt: '2023-01-01T00:00:00Z',
    updatedAt: '2023-01-01T00:00:00Z'
  }
];

// Получить всех игроков
export const getPlayersData = (): Player[] => {
  return [...playersData];
};

// Получить игрока по ID
export const getPlayerById = (id: string): Player | undefined => {
  return playersData.find(player => player.id === id);
};

// Обновить данные игрока
export const updatePlayer = (updatedPlayer: Player): void => {
  playersData = playersData.map(player => 
    player.id === updatedPlayer.id ? { ...updatedPlayer, updatedAt: new Date().toISOString() } : player
  );
};

// Удалить игрока
export const deletePlayer = (id: string): void => {
  playersData = playersData.filter(player => player.id !== id);
};

// Создать нового игрока
export const createPlayer = (newPlayer: Player): void => {
  if (playersData.some(player => player.id === newPlayer.id)) {
    throw new Error('Игрок с таким ID уже существует');
  }
  playersData.push({
    ...newPlayer,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  });
};
