import React, { useEffect, useState } from 'react';
import { usePlayers } from '../hooks/useData';
import { useCoaches } from '../hooks/useData';

const HomePage: React.FC = () => {
  const { players: initialPlayers } = usePlayers();
  const { coaches: initialCoaches } = useCoaches();
  const [players, setPlayers] = useState(initialPlayers);
  const [coaches, setCoaches] = useState(initialCoaches);

  useEffect(() => {
    const handlePlayersUpdate = (e: CustomEvent) => {
      setPlayers(e.detail);
    };

    const handleCoachesUpdate = (e: CustomEvent) => {
      setCoaches(e.detail);
    };

    window.addEventListener('playersUpdated', handlePlayersUpdate as EventListener);
    window.addEventListener('coachesUpdated', handleCoachesUpdate as EventListener);

    return () => {
      window.removeEventListener('playersUpdated', handlePlayersUpdate as EventListener);
      window.removeEventListener('coachesUpdated', handleCoachesUpdate as EventListener);
    };
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Турнирные таблицы</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {players.map(player => (
          <div key={player.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={player.photo}
              alt={player.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{player.name}</h2>
              <p className="text-gray-600 mb-2">{player.position} #{player.number}</p>
              <p className="text-gray-600 mb-2">Возраст: {player.age}</p>
              <p className="text-gray-600 mb-2">Рост: {player.height} см</p>
              <p className="text-gray-600 mb-2">Вес: {player.weight} кг</p>
              <p className="text-gray-600 mb-2">Национальность: {player.nationality}</p>
              <div className="mt-4">
                <h3 className="font-semibold mb-2">Статистика:</h3>
                <p>Игры: {player.stats.games}</p>
                <p>Голы: {player.stats.goals}</p>
                <p>Передачи: {player.stats.assists}</p>
                <p>Желтые карточки: {player.stats.yellowCards}</p>
                <p>Красные карточки: {player.stats.redCards}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <h2 className="text-3xl font-bold mb-6">Тренерский штаб</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coaches.map(coach => (
            <div key={coach.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={coach.photo}
                alt={coach.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{coach.name}</h2>
                <p className="text-gray-600 mb-2">{coach.position}</p>
                <p className="text-gray-600 mb-2">Возраст: {coach.age}</p>
                <p className="text-gray-600 mb-2">Опыт: {coach.experience} лет</p>
                <p className="text-gray-600 mb-2">Национальность: {coach.nationality}</p>
                <div className="mt-4">
                  <h3 className="font-semibold mb-2">Специализации:</h3>
                  <ul className="list-disc list-inside">
                    {coach.specializations.map((spec, index) => (
                      <li key={index}>{spec}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage; 