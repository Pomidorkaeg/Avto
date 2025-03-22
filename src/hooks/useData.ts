import { useState, useEffect } from 'react';
import { Player } from '../types/player';
import { Coach } from '../types/coach';

const STORAGE_KEYS = {
  PLAYERS: 'players',
  COACHES: 'coaches',
  SESSION_ID: 'session_id'
} as const;

// Создаем кастомные события для синхронизации
const EVENTS = {
  PLAYERS_UPDATED: 'playersUpdated',
  COACHES_UPDATED: 'coachesUpdated',
} as const;

// Создаем уникальный идентификатор сессии
const getSessionId = () => {
  let sessionId = localStorage.getItem(STORAGE_KEYS.SESSION_ID);
  if (!sessionId) {
    sessionId = Date.now().toString();
    localStorage.setItem(STORAGE_KEYS.SESSION_ID, sessionId);
  }
  return sessionId;
};

// Создаем или получаем ID сессии
const SESSION_ID = getSessionId();

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
    const data = saved ? JSON.parse(saved) : initialData;
    
    // Сохраняем данные обратно в localStorage, чтобы убедиться,
    // что начальные данные сохранены, если их там не было
    if (!saved) {
      localStorage.setItem(key, JSON.stringify(initialData));
    }
    
    return data;
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
    
    // Установка cookie для сохранения данных на стороне клиента
    document.cookie = `${key}Updated=${Date.now()};path=/;max-age=31536000`;
  } catch (error) {
    console.error(`Ошибка при сохранении ${key}:`, error);
  }
};

export const usePlayers = () => {
  const [players, setPlayers] = useState<Player[]>(() => 
    loadFromStorage(STORAGE_KEYS.PLAYERS, initialPlayers)
  );

  // Проверка данных при инициализации и восстановление данных при необходимости
  useEffect(() => {
    // Если данных нет или они пусты, используем начальные данные
    if (!players.length) {
      console.log('Игроки не найдены, использую начальные данные');
      setPlayers(initialPlayers);
      saveToStorage(STORAGE_KEYS.PLAYERS, initialPlayers);
    }
  }, []);

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

  // Пересохраняем данные при загрузке страницы
  useEffect(() => {
    const handlePageLoad = () => {
      console.log('Страница загружена, сохраняю данные игроков');
      saveToStorage(STORAGE_KEYS.PLAYERS, players);
    };

    window.addEventListener('load', handlePageLoad);
    return () => window.removeEventListener('load', handlePageLoad);
  }, [players]);

  const addPlayer = (player: Omit<Player, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newPlayer = { 
      ...player, 
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    } as Player;
    
    setPlayers(prev => [...prev, newPlayer]);
    // Принудительное сохранение
    setTimeout(() => {
      saveToStorage(STORAGE_KEYS.PLAYERS, [...players, newPlayer]);
    }, 100);
    
    return newPlayer;
  };

  const updatePlayer = (player: Player) => {
    const updatedPlayer = {
      ...player,
      updatedAt: new Date().toISOString()
    };
    
    const updatedPlayers = players.map(p => p.id === player.id ? updatedPlayer : p);
    setPlayers(updatedPlayers);
    
    // Принудительное сохранение
    setTimeout(() => {
      saveToStorage(STORAGE_KEYS.PLAYERS, updatedPlayers);
    }, 100);
  };

  const deletePlayer = (id: string) => {
    const filteredPlayers = players.filter(p => p.id !== id);
    setPlayers(filteredPlayers);
    
    // Принудительное сохранение
    setTimeout(() => {
      saveToStorage(STORAGE_KEYS.PLAYERS, filteredPlayers);
    }, 100);
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

  // Проверка данных при инициализации и восстановление данных при необходимости
  useEffect(() => {
    // Если данных нет или они пусты, используем начальные данные
    if (!coaches.length) {
      console.log('Тренеры не найдены, использую начальные данные');
      setCoaches(initialCoaches);
      saveToStorage(STORAGE_KEYS.COACHES, initialCoaches);
    }
  }, []);

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

  // Пересохраняем данные при загрузке страницы
  useEffect(() => {
    const handlePageLoad = () => {
      console.log('Страница загружена, сохраняю данные тренеров');
      saveToStorage(STORAGE_KEYS.COACHES, coaches);
    };

    window.addEventListener('load', handlePageLoad);
    return () => window.removeEventListener('load', handlePageLoad);
  }, [coaches]);

  const addCoach = (coach: Omit<Coach, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newCoach = { 
      ...coach, 
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    } as Coach;
    
    setCoaches(prev => [...prev, newCoach]);
    
    // Принудительное сохранение
    setTimeout(() => {
      saveToStorage(STORAGE_KEYS.COACHES, [...coaches, newCoach]);
    }, 100);
    
    return newCoach;
  };

  const updateCoach = (coach: Coach) => {
    const updatedCoach = {
      ...coach,
      updatedAt: new Date().toISOString()
    };
    
    const updatedCoaches = coaches.map(c => c.id === coach.id ? updatedCoach : c);
    setCoaches(updatedCoaches);
    
    // Принудительное сохранение
    setTimeout(() => {
      saveToStorage(STORAGE_KEYS.COACHES, updatedCoaches);
    }, 100);
  };

  const deleteCoach = (id: string) => {
    const filteredCoaches = coaches.filter(c => c.id !== id);
    setCoaches(filteredCoaches);
    
    // Принудительное сохранение
    setTimeout(() => {
      saveToStorage(STORAGE_KEYS.COACHES, filteredCoaches);
    }, 100);
  };

  return {
    coaches,
    addCoach,
    updateCoach,
    deleteCoach,
  };
}; 