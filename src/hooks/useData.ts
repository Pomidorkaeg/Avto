import { useState, useEffect } from 'react';
import { Player } from '../types/player';
import { Coach } from '../types/coach';

export const usePlayers = () => {
  const [players, setPlayers] = useState<Player[]>(() => {
    const savedPlayers = localStorage.getItem('players');
    return savedPlayers ? JSON.parse(savedPlayers) : [];
  });

  useEffect(() => {
    localStorage.setItem('players', JSON.stringify(players));
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
  const [coaches, setCoaches] = useState<Coach[]>(() => {
    const savedCoaches = localStorage.getItem('coaches');
    return savedCoaches ? JSON.parse(savedCoaches) : [];
  });

  useEffect(() => {
    localStorage.setItem('coaches', JSON.stringify(coaches));
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