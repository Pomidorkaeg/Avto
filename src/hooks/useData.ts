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

// Функция для загрузки данных из localStorage
const loadFromStorage = <T>(key: string): T[] => {
  try {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    console.error(`Ошибка при загрузке ${key}:`, error);
    return [];
  }
};

// Функция для сохранения данных в localStorage
const saveToStorage = <T>(key: string, data: T[]): void => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
    // Отправляем кастомное событие
    window.dispatchEvent(new CustomEvent(key + 'Updated', { detail: data }));
  } catch (error) {
    console.error(`Ошибка при сохранении ${key}:`, error);
  }
};

export const usePlayers = () => {
  const [players, setPlayers] = useState<Player[]>(() => loadFromStorage(STORAGE_KEYS.PLAYERS));

  // Слушаем обновления от других компонентов
  useEffect(() => {
    const handlePlayersUpdate = (e: CustomEvent) => {
      setPlayers(e.detail);
    };

    window.addEventListener(EVENTS.PLAYERS_UPDATED, handlePlayersUpdate as EventListener);
    return () => window.removeEventListener(EVENTS.PLAYERS_UPDATED, handlePlayersUpdate as EventListener);
  }, []);

  // Сохраняем изменения в localStorage
  useEffect(() => {
    saveToStorage(STORAGE_KEYS.PLAYERS, players);
  }, [players]);

  const addPlayer = (player: Omit<Player, 'id'>) => {
    const newPlayer = { 
      ...player, 
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
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
  const [coaches, setCoaches] = useState<Coach[]>(() => loadFromStorage(STORAGE_KEYS.COACHES));

  // Слушаем обновления от других компонентов
  useEffect(() => {
    const handleCoachesUpdate = (e: CustomEvent) => {
      setCoaches(e.detail);
    };

    window.addEventListener(EVENTS.COACHES_UPDATED, handleCoachesUpdate as EventListener);
    return () => window.removeEventListener(EVENTS.COACHES_UPDATED, handleCoachesUpdate as EventListener);
  }, []);

  // Сохраняем изменения в localStorage
  useEffect(() => {
    saveToStorage(STORAGE_KEYS.COACHES, coaches);
  }, [coaches]);

  const addCoach = (coach: Omit<Coach, 'id'>) => {
    const newCoach = { 
      ...coach, 
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
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