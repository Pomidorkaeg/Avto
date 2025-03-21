import React, { useState, useEffect } from 'react';
import { Player } from '../../types/player';

const PlayerManagement: React.FC = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [editingPlayer, setEditingPlayer] = useState<Player | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Загрузка игроков из localStorage
    const savedPlayers = localStorage.getItem('players');
    if (savedPlayers) {
      setPlayers(JSON.parse(savedPlayers));
    }
  }, []);

  const handleSave = (player: Player) => {
    const updatedPlayers = editingPlayer
      ? players.map(p => p.id === player.id ? player : p)
      : [...players, { ...player, id: Date.now().toString() }];
    
    setPlayers(updatedPlayers);
    localStorage.setItem('players', JSON.stringify(updatedPlayers));
    setIsModalOpen(false);
    setEditingPlayer(null);
  };

  const handleDelete = (id: string) => {
    const updatedPlayers = players.filter(p => p.id !== id);
    setPlayers(updatedPlayers);
    localStorage.setItem('players', JSON.stringify(updatedPlayers));
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Управление игроками</h2>
        <button
          onClick={() => {
            setEditingPlayer(null);
            setIsModalOpen(true);
          }}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Добавить игрока
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {players.map(player => (
          <div key={player.id} className="border rounded-lg p-4">
            <img
              src={player.photo}
              alt={player.name}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h3 className="text-xl font-semibold">{player.name}</h3>
            <p>{player.position} #{player.number}</p>
            <div className="mt-4 flex space-x-2">
              <button
                onClick={() => {
                  setEditingPlayer(player);
                  setIsModalOpen(true);
                }}
                className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
              >
                Редактировать
              </button>
              <button
                onClick={() => handleDelete(player.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Удалить
              </button>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-full max-w-2xl">
            <h3 className="text-xl font-bold mb-4">
              {editingPlayer ? 'Редактировать игрока' : 'Добавить игрока'}
            </h3>
            <form onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const player: Player = {
                id: editingPlayer?.id || '',
                name: formData.get('name') as string,
                position: formData.get('position') as string,
                number: parseInt(formData.get('number') as string),
                age: parseInt(formData.get('age') as string),
                height: parseInt(formData.get('height') as string),
                weight: parseInt(formData.get('weight') as string),
                nationality: formData.get('nationality') as string,
                photo: formData.get('photo') as string,
                biography: formData.get('biography') as string,
                achievements: (formData.get('achievements') as string).split('\n'),
                socialLinks: {
                  instagram: formData.get('instagram') as string,
                  twitter: formData.get('twitter') as string,
                  vk: formData.get('vk') as string,
                },
                stats: {
                  games: parseInt(formData.get('games') as string),
                  goals: parseInt(formData.get('goals') as string),
                  assists: parseInt(formData.get('assists') as string),
                },
                isActive: formData.get('isActive') === 'true',
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
              };
              handleSave(player);
            }}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1">Имя</label>
                  <input
                    type="text"
                    name="name"
                    defaultValue={editingPlayer?.name}
                    className="w-full border rounded p-2"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-1">Позиция</label>
                  <input
                    type="text"
                    name="position"
                    defaultValue={editingPlayer?.position}
                    className="w-full border rounded p-2"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-1">Номер</label>
                  <input
                    type="number"
                    name="number"
                    defaultValue={editingPlayer?.number}
                    className="w-full border rounded p-2"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-1">Возраст</label>
                  <input
                    type="number"
                    name="age"
                    defaultValue={editingPlayer?.age}
                    className="w-full border rounded p-2"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-1">Рост (см)</label>
                  <input
                    type="number"
                    name="height"
                    defaultValue={editingPlayer?.height}
                    className="w-full border rounded p-2"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-1">Вес (кг)</label>
                  <input
                    type="number"
                    name="weight"
                    defaultValue={editingPlayer?.weight}
                    className="w-full border rounded p-2"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-1">Национальность</label>
                  <input
                    type="text"
                    name="nationality"
                    defaultValue={editingPlayer?.nationality}
                    className="w-full border rounded p-2"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-1">Фото URL</label>
                  <input
                    type="text"
                    name="photo"
                    defaultValue={editingPlayer?.photo}
                    className="w-full border rounded p-2"
                    required
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="block mb-1">Биография</label>
                <textarea
                  name="biography"
                  defaultValue={editingPlayer?.biography}
                  className="w-full border rounded p-2"
                  rows={4}
                  required
                />
              </div>

              <div className="mt-4">
                <label className="block mb-1">Достижения (по одному в строке)</label>
                <textarea
                  name="achievements"
                  defaultValue={editingPlayer?.achievements.join('\n')}
                  className="w-full border rounded p-2"
                  rows={4}
                  required
                />
              </div>

              <div className="grid grid-cols-3 gap-4 mt-4">
                <div>
                  <label className="block mb-1">Instagram</label>
                  <input
                    type="text"
                    name="instagram"
                    defaultValue={editingPlayer?.socialLinks.instagram}
                    className="w-full border rounded p-2"
                  />
                </div>
                <div>
                  <label className="block mb-1">Twitter</label>
                  <input
                    type="text"
                    name="twitter"
                    defaultValue={editingPlayer?.socialLinks.twitter}
                    className="w-full border rounded p-2"
                  />
                </div>
                <div>
                  <label className="block mb-1">VK</label>
                  <input
                    type="text"
                    name="vk"
                    defaultValue={editingPlayer?.socialLinks.vk}
                    className="w-full border rounded p-2"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-4">
                <div>
                  <label className="block mb-1">Игры</label>
                  <input
                    type="number"
                    name="games"
                    defaultValue={editingPlayer?.stats.games}
                    className="w-full border rounded p-2"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-1">Голы</label>
                  <input
                    type="number"
                    name="goals"
                    defaultValue={editingPlayer?.stats.goals}
                    className="w-full border rounded p-2"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-1">Передачи</label>
                  <input
                    type="number"
                    name="assists"
                    defaultValue={editingPlayer?.stats.assists}
                    className="w-full border rounded p-2"
                    required
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="isActive"
                    defaultChecked={editingPlayer?.isActive}
                    className="mr-2"
                  />
                  Активный игрок
                </label>
              </div>

              <div className="mt-6 flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => {
                    setIsModalOpen(false);
                    setEditingPlayer(null);
                  }}
                  className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                >
                  Отмена
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Сохранить
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlayerManagement; 