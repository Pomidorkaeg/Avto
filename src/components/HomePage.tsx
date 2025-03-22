import React, { useEffect, useState } from 'react';
import { usePlayers } from '../hooks/useData';
import { useCoaches } from '../hooks/useData';
import { Player } from '../types/player';
import { Coach } from '../types/coach';

// Ключи для хранения данных
const STORAGE_KEYS = {
  PLAYERS: 'tournament_players',
  COACHES: 'tournament_coaches',
};

const HomePage: React.FC = () => {
  // Получаем данные из хуков
  const { players: hookPlayers } = usePlayers();
  const { coaches: hookCoaches } = useCoaches();
  
  // Локальное состояние для отображения
  const [players, setPlayers] = useState<Player[]>(hookPlayers);
  const [coaches, setCoaches] = useState<Coach[]>(hookCoaches);
  const [loading, setLoading] = useState(true);

  // Обновляем состояние при изменении данных из хуков
  useEffect(() => {
    console.log('HomePage: обновляю игроков из хука', hookPlayers);
    setPlayers(hookPlayers);
  }, [hookPlayers]);

  useEffect(() => {
    console.log('HomePage: обновляю тренеров из хука', hookCoaches);
    setCoaches(hookCoaches);
  }, [hookCoaches]);

  // Слушаем кастомные события обновления
  useEffect(() => {
    const handlePlayersUpdate = (e: CustomEvent) => {
      console.log('HomePage: получено событие обновления игроков', e.detail);
      setPlayers(e.detail);
    };

    const handleCoachesUpdate = (e: CustomEvent) => {
      console.log('HomePage: получено событие обновления тренеров', e.detail);
      setCoaches(e.detail);
    };

    window.addEventListener('playersUpdated', handlePlayersUpdate as EventListener);
    window.addEventListener('coachesUpdated', handleCoachesUpdate as EventListener);

    return () => {
      window.removeEventListener('playersUpdated', handlePlayersUpdate as EventListener);
      window.removeEventListener('coachesUpdated', handleCoachesUpdate as EventListener);
    };
  }, []);

  // Обработчик события storage для синхронизации между вкладками
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      console.log('HomePage: обнаружено изменение в localStorage', e.key, e.newValue);
      if (e.key === STORAGE_KEYS.PLAYERS && e.newValue) {
        const parsedPlayers = JSON.parse(e.newValue);
        setPlayers(parsedPlayers);
      }
      if (e.key === STORAGE_KEYS.COACHES && e.newValue) {
        const parsedCoaches = JSON.parse(e.newValue);
        setCoaches(parsedCoaches);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  // Загрузка данных при первом рендере
  useEffect(() => {
    const loadData = () => {
      try {
        // Проверяем localStorage
        const localPlayers = localStorage.getItem(STORAGE_KEYS.PLAYERS);
        const localCoaches = localStorage.getItem(STORAGE_KEYS.COACHES);
        
        // Проверяем sessionStorage
        const sessionPlayers = sessionStorage.getItem(STORAGE_KEYS.PLAYERS);
        const sessionCoaches = sessionStorage.getItem(STORAGE_KEYS.COACHES);
        
        // Используем данные из localStorage, если они есть
        if (localPlayers) {
          const parsedPlayers = JSON.parse(localPlayers);
          setPlayers(parsedPlayers);
        } 
        // Иначе из sessionStorage
        else if (sessionPlayers) {
          const parsedPlayers = JSON.parse(sessionPlayers);
          setPlayers(parsedPlayers);
        }
        
        // То же самое для тренеров
        if (localCoaches) {
          const parsedCoaches = JSON.parse(localCoaches);
          setCoaches(parsedCoaches);
        } else if (sessionCoaches) {
          const parsedCoaches = JSON.parse(sessionCoaches);
          setCoaches(parsedCoaches);
        }
      } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
      } finally {
        setLoading(false);
      }
    };
    
    loadData();
    
    // Также загружаем данные при событии загрузки страницы
    window.addEventListener('load', loadData);
    return () => window.removeEventListener('load', loadData);
  }, []);

  console.log('HomePage: рендеринг', { players, coaches, loading });

  // Если данные загружаются, показываем индикатор загрузки
  if (loading && players.length === 0 && coaches.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 flex justify-center items-center min-h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Загрузка данных...</h2>
          <div className="animate-spin h-10 w-10 border-4 border-blue-500 rounded-full border-t-transparent mx-auto"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Турнирные таблицы</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {players.length === 0 ? (
          <div className="col-span-3 text-center p-8">
            <p className="text-xl text-gray-500">Нет данных об игроках</p>
          </div>
        ) : (
          players.map(player => (
            <div key={player.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={player.photo || 'https://placehold.co/600x400/orange/white?text=Нет+фото'}
                alt={player.name}
                className="w-full h-48 object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://placehold.co/600x400/orange/white?text=Ошибка+фото';
                }}
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{player.name}</h2>
                <p className="text-gray-600 mb-2">{player.position} #{player.number}</p>
                <p className="text-gray-600 mb-2">Возраст: {player.age}</p>
                <p className="text-gray-600 mb-2">Рост: {player.height} см</p>
                <p className="text-gray-600 mb-2">Вес: {player.weight} кг</p>
                <p className="text-gray-600 mb-2">Национальность: {player.nationality}</p>
                
                {player.stats && (
                  <div className="mt-4">
                    <h3 className="font-semibold mb-2">Статистика:</h3>
                    <p>Игры: {player.stats.games}</p>
                    <p>Голы: {player.stats.goals}</p>
                    <p>Передачи: {player.stats.assists}</p>
                    <p>Желтые карточки: {player.stats.yellowCards}</p>
                    <p>Красные карточки: {player.stats.redCards}</p>
                  </div>
                )}
              </div>
            </div>
          ))
        )}
      </div>

      <div className="mt-12">
        <h2 className="text-3xl font-bold mb-6">Тренерский штаб</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coaches.length === 0 ? (
            <div className="col-span-3 text-center p-8">
              <p className="text-xl text-gray-500">Нет данных о тренерах</p>
            </div>
          ) : (
            coaches.map(coach => (
              <div key={coach.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={coach.photo || 'https://placehold.co/600x400/blue/white?text=Нет+фото'}
                  alt={coach.name}
                  className="w-full h-48 object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://placehold.co/600x400/blue/white?text=Ошибка+фото';
                  }}
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">{coach.name}</h2>
                  <p className="text-gray-600 mb-2">{coach.position}</p>
                  <p className="text-gray-600 mb-2">Возраст: {coach.age}</p>
                  <p className="text-gray-600 mb-2">Опыт: {coach.experience} лет</p>
                  <p className="text-gray-600 mb-2">Национальность: {coach.nationality}</p>
                  
                  {coach.specializations && coach.specializations.length > 0 && (
                    <div className="mt-4">
                      <h3 className="font-semibold mb-2">Специализации:</h3>
                      <ul className="list-disc list-inside">
                        {coach.specializations.map((spec, index) => (
                          <li key={index}>{spec}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage; 