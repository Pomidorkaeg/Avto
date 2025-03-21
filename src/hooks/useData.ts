import { useState, useEffect } from 'react';
import { Player } from '../types/player';
import { Coach } from '../types/coach';

const STORAGE_KEYS = {
  PLAYERS: 'players',
  COACHES: 'coaches',
} as const;

export const usePlayers = () => {
  const [players, setPlayers] = useState<Player[]>(() => {
    try {
      const savedPlayers = localStorage.getItem(STORAGE_KEYS.PLAYERS);
      return savedPlayers ? JSON.parse(savedPlayers) : [];
    } catch (error) {
      console.error('Ошибка при загрузке игроков:', error);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.PLAYERS, JSON.stringify(players));
    } catch (error) {
      console.error('Ошибка при сохранении игроков:', error);
    }
  }, [players]);

  const addPlayer = (player: Omit<Player, 'id'>) => {
    try {
      const newPlayer = { 
        ...player, 
        id: Date.now().toString(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      setPlayers(prev => [...prev, newPlayer]);
      return newPlayer;
    } catch (error) {
      console.error('Ошибка при добавлении игрока:', error);
      throw error;
    }
  };

  const updatePlayer = (player: Player) => {
    try {
      const updatedPlayer = {
        ...player,
        updatedAt: new Date().toISOString()
      };
      setPlayers(prev => prev.map(p => p.id === player.id ? updatedPlayer : p));
    } catch (error) {
      console.error('Ошибка при обновлении игрока:', error);
      throw error;
    }
  };

  const deletePlayer = (id: string) => {
    try {
      setPlayers(prev => prev.filter(p => p.id !== id));
    } catch (error) {
      console.error('Ошибка при удалении игрока:', error);
      throw error;
    }
  };

  return {
    players,
    addPlayer,
    updatePlayer,
    deletePlayer,
  };
};

export const useCoaches = () => {
  const [coaches, setCoaches] = useState<Coach[]>(() => {
    try {
      const savedCoaches = localStorage.getItem(STORAGE_KEYS.COACHES);
      return savedCoaches ? JSON.parse(savedCoaches) : [];
    } catch (error) {
      console.error('Ошибка при загрузке тренеров:', error);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.COACHES, JSON.stringify(coaches));
    } catch (error) {
      console.error('Ошибка при сохранении тренеров:', error);
    }
  }, [coaches]);

  const addCoach = (coach: Omit<Coach, 'id'>) => {
    try {
      const newCoach = { 
        ...coach, 
        id: Date.now().toString(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      setCoaches(prev => [...prev, newCoach]);
      return newCoach;
    } catch (error) {
      console.error('Ошибка при добавлении тренера:', error);
      throw error;
    }
  };

  const updateCoach = (coach: Coach) => {
    try {
      const updatedCoach = {
        ...coach,
        updatedAt: new Date().toISOString()
      };
      setCoaches(prev => prev.map(c => c.id === coach.id ? updatedCoach : c));
    } catch (error) {
      console.error('Ошибка при обновлении тренера:', error);
      throw error;
    }
  };

  const deleteCoach = (id: string) => {
    try {
      setCoaches(prev => prev.filter(c => c.id !== id));
    } catch (error) {
      console.error('Ошибка при удалении тренера:', error);
      throw error;
    }
  };

  return {
    coaches,
    addCoach,
    updateCoach,
    deleteCoach,
  };
}; 