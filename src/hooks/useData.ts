import { useState, useEffect } from 'react';
import { Player } from '../types/player';
import { Coach } from '../types/coach';

const STORAGE_KEYS = {
  PLAYERS: 'players',
  COACHES: 'coaches',
} as const;

// Создаем кастомные события для синхронизации
const EVENTS = {
  PLAYERS_UPDATED: 'playersUpdated',
  COACHES_UPDATED: 'coachesUpdated',
} as const;

// Начальные данные для игроков
const initialPlayers: Player[] = [
  {
    id: '1',
    name: 'Иван Петров',
    position: 'Нападающий',
    number: 10,
    age: 25,
    height: 182,
    weight: 76,
    nationality: 'Россия',
    photo: 'https://placehold.co/600x400/orange/white?text=Player',
    stats: {
      games: 42,
      goals: 15,
      assists: 8,
      yellowCards: 3,
      redCards: 0,
    },
    biography: 'Талантливый нападающий, начал карьеру в юношеской команде.',
    achievements: ['Чемпион России 2022', 'Лучший бомбардир сезона 2021'],
    socialLinks: {
      instagram: 'https://instagram.com/ivpetrov',
      twitter: 'https://twitter.com/ivpetrov',
      vk: 'https://vk.com/ivpetrov',
    },
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

// Начальные данные для тренеров
const initialCoaches: Coach[] = [
  {
    id: '1',
    name: 'Сергей Иванов',
    position: 'Главный тренер',
    age: 52,
    experience: 15,
    nationality: 'Россия',
    photo: 'https://placehold.co/600x400/blue/white?text=Coach',
    biography: 'Опытный тренер с большим международным опытом.',
    specializations: ['Тактика', 'Физическая подготовка', 'Работа с молодежью'],
    achievements: ['Чемпион России 2020', 'Кубок России 2019'],
    socialLinks: {
      instagram: 'https://instagram.com/sivanov',
      twitter: 'https://twitter.com/sivanov',
    },
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

// Функция для загрузки данных из localStorage
const loadFromStorage = <T>(key: string, initialData: T[]): T[] => {
  try {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : initialData;
  } catch (error) {
    console.error(`Ошибка при загрузке ${key}:`, error);
    return initialData;
  }
};

// Функция для сохранения данных в localStorage
const saveToStorage = <T>(key: string, data: T[]): void => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
    // Отправляем кастомное событие для синхронизации
    const eventName = key === STORAGE_KEYS.PLAYERS ? EVENTS.PLAYERS_UPDATED : EVENTS.COACHES_UPDATED;
    window.dispatchEvent(new CustomEvent(eventName, { detail: data }));
    
    // Для отладки
    console.log(`Данные ${key} сохранены:`, data);
  } catch (error) {
    console.error(`Ошибка при сохранении ${key}:`, error);
  }
};

export const usePlayers = () => {
  const [players, setPlayers] = useState<Player[]>(() => 
    loadFromStorage(STORAGE_KEYS.PLAYERS, initialPlayers)
  );

  // Слушаем обновления от других компонентов
  useEffect(() => {
    const handlePlayersUpdate = (e: CustomEvent) => {
      console.log('Получено событие обновления игроков:', e.detail);
      setPlayers(e.detail);
    };

    window.addEventListener(EVENTS.PLAYERS_UPDATED, handlePlayersUpdate as EventListener);
    return () => window.removeEventListener(EVENTS.PLAYERS_UPDATED, handlePlayersUpdate as EventListener);
  }, []);

  // Сохраняем изменения в localStorage при изменении данных
  useEffect(() => {
    saveToStorage(STORAGE_KEYS.PLAYERS, players);
  }, [players]);

  const addPlayer = (player: Omit<Player, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newPlayer = { 
      ...player, 
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    } as Player;
    
    setPlayers(prev => [...prev, newPlayer]);
    return newPlayer;
  };

  const updatePlayer = (player: Player) => {
    const updatedPlayer = {
      ...player,
      updatedAt: new Date().toISOString()
    };
    setPlayers(prev => prev.map(p => p.id === player.id ? updatedPlayer : p));
  };

  const deletePlayer = (id: string) => {
    setPlayers(prev => prev.filter(p => p.id !== id));
  };

  return {
    players,
    addPlayer,
    updatePlayer,
    deletePlayer,
  };
};

export const useCoaches = () => {
  const [coaches, setCoaches] = useState<Coach[]>(() => 
    loadFromStorage(STORAGE_KEYS.COACHES, initialCoaches)
  );

  // Слушаем обновления от других компонентов
  useEffect(() => {
    const handleCoachesUpdate = (e: CustomEvent) => {
      console.log('Получено событие обновления тренеров:', e.detail);
      setCoaches(e.detail);
    };

    window.addEventListener(EVENTS.COACHES_UPDATED, handleCoachesUpdate as EventListener);
    return () => window.removeEventListener(EVENTS.COACHES_UPDATED, handleCoachesUpdate as EventListener);
  }, []);

  // Сохраняем изменения в localStorage при изменении данных
  useEffect(() => {
    saveToStorage(STORAGE_KEYS.COACHES, coaches);
  }, [coaches]);

  const addCoach = (coach: Omit<Coach, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newCoach = { 
      ...coach, 
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    } as Coach;
    
    setCoaches(prev => [...prev, newCoach]);
    return newCoach;
  };

  const updateCoach = (coach: Coach) => {
    const updatedCoach = {
      ...coach,
      updatedAt: new Date().toISOString()
    };
    setCoaches(prev => prev.map(c => c.id === coach.id ? updatedCoach : c));
  };

  const deleteCoach = (id: string) => {
    setCoaches(prev => prev.filter(c => c.id !== id));
  };

  return {
    coaches,
    addCoach,
    updateCoach,
    deleteCoach,
  };
}; 