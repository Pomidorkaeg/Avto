import { useState, useEffect } from 'react';
import { Player } from '../types/player';
import { Coach } from '../types/coach';

export const usePlayers = () => {
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    const savedPlayers = localStorage.getItem('players');
    if (savedPlayers) {
      setPlayers(JSON.parse(savedPlayers));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('players', JSON.stringify(players));
  }, [players]);

  const addPlayer = (player: Omit<Player, 'id'>) => {
    const newPlayer = { ...player, id: Date.now().toString() };
    setPlayers(prev => [...prev, newPlayer]);
    return newPlayer;
  };

  const updatePlayer = (player: Player) => {
    setPlayers(prev => prev.map(p => p.id === player.id ? player : p));
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
  const [coaches, setCoaches] = useState<Coach[]>([]);

  useEffect(() => {
    const savedCoaches = localStorage.getItem('coaches');
    if (savedCoaches) {
      setCoaches(JSON.parse(savedCoaches));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('coaches', JSON.stringify(coaches));
  }, [coaches]);

  const addCoach = (coach: Omit<Coach, 'id'>) => {
    const newCoach = { ...coach, id: Date.now().toString() };
    setCoaches(prev => [...prev, newCoach]);
    return newCoach;
  };

  const updateCoach = (coach: Coach) => {
    setCoaches(prev => prev.map(c => c.id === coach.id ? coach : c));
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