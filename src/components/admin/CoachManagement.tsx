import React, { useState } from 'react';
import { Coach } from '../../types/coach';
import { useCoaches } from '../../hooks/useData';

const CoachManagement: React.FC = () => {
  const { coaches, addCoach, updateCoach, deleteCoach } = useCoaches();
  const [editingCoach, setEditingCoach] = useState<Coach | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSave = (coach: Coach) => {
    if (editingCoach) {
      updateCoach(coach);
    } else {
      addCoach(coach);
    }
    setIsModalOpen(false);
    setEditingCoach(null);
  };

  const handleDelete = (id: string) => {
    deleteCoach(id);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Управление тренерами</h2>
        <button
          onClick={() => {
            setEditingCoach(null);
            setIsModalOpen(true);
          }}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Добавить тренера
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {coaches.map(coach => (
          <div key={coach.id} className="border rounded-lg p-4">
            <img
              src={coach.photo}
              alt={coach.name}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h3 className="text-xl font-semibold">{coach.name}</h3>
            <p>{coach.position}</p>
            <div className="mt-4 flex space-x-2">
              <button
                onClick={() => {
                  setEditingCoach(coach);
                  setIsModalOpen(true);
                }}
                className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
              >
                Редактировать
              </button>
              <button
                onClick={() => handleDelete(coach.id)}
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
              {editingCoach ? 'Редактировать тренера' : 'Добавить тренера'}
            </h3>
            <form onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const coach: Coach = {
                id: editingCoach?.id || '',
                name: formData.get('name') as string,
                position: formData.get('position') as string,
                age: parseInt(formData.get('age') as string),
                nationality: formData.get('nationality') as string,
                photo: formData.get('photo') as string,
                experience: parseInt(formData.get('experience') as string),
                biography: formData.get('biography') as string,
                achievements: (formData.get('achievements') as string).split('\n'),
                specializations: (formData.get('specializations') as string).split('\n'),
                socialLinks: {
                  instagram: formData.get('instagram') as string,
                  twitter: formData.get('twitter') as string,
                  vk: formData.get('vk') as string,
                },
                isActive: formData.get('isActive') === 'true',
                createdAt: editingCoach?.createdAt || new Date().toISOString(),
                updatedAt: new Date().toISOString(),
              };
              handleSave(coach);
            }}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1">Имя</label>
                  <input
                    type="text"
                    name="name"
                    defaultValue={editingCoach?.name}
                    className="w-full border rounded p-2"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-1">Позиция</label>
                  <input
                    type="text"
                    name="position"
                    defaultValue={editingCoach?.position}
                    className="w-full border rounded p-2"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-1">Возраст</label>
                  <input
                    type="number"
                    name="age"
                    defaultValue={editingCoach?.age}
                    className="w-full border rounded p-2"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-1">Национальность</label>
                  <input
                    type="text"
                    name="nationality"
                    defaultValue={editingCoach?.nationality}
                    className="w-full border rounded p-2"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-1">Опыт (лет)</label>
                  <input
                    type="number"
                    name="experience"
                    defaultValue={editingCoach?.experience}
                    className="w-full border rounded p-2"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-1">Фото URL</label>
                  <input
                    type="text"
                    name="photo"
                    defaultValue={editingCoach?.photo}
                    className="w-full border rounded p-2"
                    required
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="block mb-1">Биография</label>
                <textarea
                  name="biography"
                  defaultValue={editingCoach?.biography}
                  className="w-full border rounded p-2"
                  rows={4}
                  required
                />
              </div>

              <div className="mt-4">
                <label className="block mb-1">Достижения (по одному в строке)</label>
                <textarea
                  name="achievements"
                  defaultValue={editingCoach?.achievements.join('\n')}
                  className="w-full border rounded p-2"
                  rows={4}
                  required
                />
              </div>

              <div className="mt-4">
                <label className="block mb-1">Специализации (по одной в строке)</label>
                <textarea
                  name="specializations"
                  defaultValue={editingCoach?.specializations.join('\n')}
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
                    defaultValue={editingCoach?.socialLinks.instagram}
                    className="w-full border rounded p-2"
                  />
                </div>
                <div>
                  <label className="block mb-1">Twitter</label>
                  <input
                    type="text"
                    name="twitter"
                    defaultValue={editingCoach?.socialLinks.twitter}
                    className="w-full border rounded p-2"
                  />
                </div>
                <div>
                  <label className="block mb-1">VK</label>
                  <input
                    type="text"
                    name="vk"
                    defaultValue={editingCoach?.socialLinks.vk}
                    className="w-full border rounded p-2"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="isActive"
                    defaultChecked={editingCoach?.isActive}
                    className="mr-2"
                  />
                  Активный тренер
                </label>
              </div>

              <div className="mt-6 flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => {
                    setIsModalOpen(false);
                    setEditingCoach(null);
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

export default CoachManagement; 