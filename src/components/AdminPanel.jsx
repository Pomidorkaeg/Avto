import React, { useState, useEffect } from 'react';
import { 
  fetchPlayers, 
  updatePlayer, 
  deletePlayer, 
  createPlayer,
  fetchCoaches,
  updateCoach,
  deleteCoach,
  createCoach
} from '../utils/adminApi';
import { auth } from '../firebase/config';
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { toast } from 'react-toastify';

const AdminPanel = () => {
  // State management
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [players, setPlayers] = useState([]);
  const [coaches, setCoaches] = useState([]);
  const [editMode, setEditMode] = useState(null);
  const [currentItem, setCurrentItem] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Check if user is logged in
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      if (user) {
        loadPlayers();
        loadCoaches();
      }
    });

    return () => unsubscribe();
  }, []);

  // Data fetching functions
  const loadPlayers = async () => {
    try {
      setLoading(true);
      const data = await fetchPlayers();
      setPlayers(data);
      setError('');
    } catch (err) {
      console.error('Error loading players:', err);
      toast.error('Ошибка загрузки игроков: ' + err.message);
      setError('Ошибка загрузки игроков: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const loadCoaches = async () => {
    try {
      setLoading(true);
      const data = await fetchCoaches();
      setCoaches(data);
      setError('');
    } catch (err) {
      console.error('Error loading coaches:', err);
      toast.error('Ошибка загрузки тренеров: ' + err.message);
      setError('Ошибка загрузки тренеров: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  // Authentication handlers
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      setEmail('');
      setPassword('');
      setError('');
      toast.success('Вход выполнен успешно');
      setSuccess('Вход выполнен успешно');
      
      // Clear success message after 3 seconds
      setTimeout(() => setSuccess(''), 3000);
    } catch (err) {
      console.error('Login failed:', err);
      toast.error('Ошибка входа: ' + err.message);
      setError('Ошибка входа: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      setLoading(true);
      await signOut(auth);
      toast.success('Выход выполнен успешно');
      setSuccess('Выход выполнен успешно');
      
      // Clear success message after 3 seconds
      setTimeout(() => setSuccess(''), 3000);
    } catch (err) {
      console.error('Logout failed:', err);
      toast.error('Ошибка выхода: ' + err.message);
      setError('Ошибка выхода: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  // CRUD operation handlers
  const handleEdit = (item, type) => {
    setEditMode(type);
    setCurrentItem({...item}); // Создаем копию объекта
  };

  const handleCancelEdit = () => {
    setEditMode(null);
    setCurrentItem(null);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      console.log('Updating item:', currentItem);
      
      if (editMode === 'player') {
        await updatePlayer(currentItem);
        await loadPlayers();
      } else {
        await updateCoach(currentItem);
        await loadCoaches();
      }
      
      toast.success(`${editMode === 'player' ? 'Игрок' : 'Тренер'} успешно обновлен`);
      setSuccess(`${editMode === 'player' ? 'Игрок' : 'Тренер'} успешно обновлен`);
      setEditMode(null);
      setCurrentItem(null);
      
      // Clear success message after 3 seconds
      setTimeout(() => setSuccess(''), 3000);
    } catch (err) {
      console.error('Update failed:', err);
      toast.error('Ошибка обновления: ' + err.message);
      setError('Ошибка обновления: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id, type) => {
    if (window.confirm(`Вы уверены, что хотите удалить этого ${type === 'player' ? 'игрока' : 'тренера'}?`)) {
      try {
        setLoading(true);
        console.log('Deleting item:', id, type);
        
        if (type === 'player') {
          await deletePlayer(id);
          await loadPlayers();
        } else {
          await deleteCoach(id);
          await loadCoaches();
        }
        
        toast.success(`${type === 'player' ? 'Игрок' : 'Тренер'} успешно удален`);
        setSuccess(`${type === 'player' ? 'Игрок' : 'Тренер'} успешно удален`);
        
        // Clear success message after 3 seconds
        setTimeout(() => setSuccess(''), 3000);
      } catch (err) {
        console.error('Delete failed:', err);
        toast.error('Ошибка удаления: ' + err.message);
        setError('Ошибка удаления: ' + err.message);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // Обработка вложенных объектов (например, stats)
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setCurrentItem({
        ...currentItem,
        [parent]: {
          ...currentItem[parent],
          [child]: value
        }
      });
    } else {
      setCurrentItem({
        ...currentItem,
        [name]: value
      });
    }
  };

  const handleAddNew = (type) => {
    setEditMode(type === 'player' ? 'newPlayer' : 'newCoach');
    setCurrentItem(type === 'player' ? {
      name: '',
      position: '',
      number: '',
      image: '',
      stats: {
        goals: 0,
        assists: 0,
        games: 0
      }
    } : {
      name: '',
      role: '',
      image: ''
    });
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      console.log('Creating item:', currentItem);
      
      if (editMode === 'newPlayer') {
        await createPlayer(currentItem);
        await loadPlayers();
      } else {
        await createCoach(currentItem);
        await loadCoaches();
      }
      
      toast.success(`${editMode === 'newPlayer' ? 'Игрок' : 'Тренер'} успешно создан`);
      setSuccess(`${editMode === 'newPlayer' ? 'Игрок' : 'Тренер'} успешно создан`);
      setEditMode(null);
      setCurrentItem(null);
      
      // Clear success message after 3 seconds
      setTimeout(() => setSuccess(''), 3000);
    } catch (err) {
      console.error('Create failed:', err);
      toast.error('Ошибка создания: ' + err.message);
      setError('Ошибка создания: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  // Форма редактирования игрока
  const renderPlayerForm = () => {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-xl font-semibold mb-4">
            {editMode === 'player' ? 'Редактировать игрока' : 'Добавить нового игрока'}
          </h2>
          <form onSubmit={editMode === 'player' ? handleUpdate : handleCreate}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Имя</label>
              <input
                type="text"
                name="name"
                value={currentItem.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Позиция</label>
              <input
                type="text"
                name="position"
                value={currentItem.position}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Номер</label>
              <input
                type="text"
                name="number"
                value={currentItem.number}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">URL изображения</label>
              <input
                type="text"
                name="image"
                value={currentItem.image}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Голы</label>
              <input
                type="number"
                name="stats.goals"
                value={currentItem.stats?.goals || 0}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Передачи</label>
              <input
                type="number"
                name="stats.assists"
                value={currentItem.stats?.assists || 0}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Игры</label>
              <input
                type="number"
                name="stats.games"
                value={currentItem.stats?.games || 0}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={handleCancelEdit}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
              >
                Отмена
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                disabled={loading}
              >
                {loading ? 'Сохранение...' : 'Сохранить'}
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  // Форма редактирования тренера
  const renderCoachForm = () => {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-xl font-semibold mb-4">
            {editMode === 'coach' ? 'Редактировать тренера' : 'Добавить нового тренера'}
          </h2>
          <form onSubmit={editMode === 'coach' ? handleUpdate : handleCreate}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Имя</label>
              <input
                type="text"
                name="name"
                value={currentItem.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Должность</label>
              <input
                type="text"
                name="role"
                value={currentItem.role}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">URL изображения</label>
              <input
                type="text"
                name="image"
                value={currentItem.image}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={handleCancelEdit}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
              >
                Отмена
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                disabled={loading}
              >
                {loading ? 'Сохранение...' : 'Сохранить'}
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  // Login Form
  if (!user) {
    return (
      <div className="max-w-md mx-auto mt-24 p-6 bg-white rounded-md shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Гудаута Admin Login</h1>
        {error && <div className="bg-red-100 text-red-700 p-3 rounded mb-4">{error}</div>}
        {success && <div className="bg-green-100 text-green-700 p-3 rounded mb-4">{success}</div>}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fc-green"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fc-green"
              required
            />
          </div>
          <button 
            type="submit" 
            className="btn-primary w-full"
            disabled={loading}
          >
            {loading ? 'Вход...' : 'Войти'}
          </button>
        </form>
      </div>
    );
  }

  // Main Admin Panel
  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6 pb-3 border-b">
        <h1 className="text-2xl font-bold">Гудаута Admin Panel</h1>
        <button onClick={handleLogout} className="btn-secondary" disabled={loading}>
          {loading ? 'Выход...' : 'Выйти'}
        </button>
      </div>
      {error && <div className="bg-red-100 text-red-700 p-3 rounded mb-4">{error}</div>}
      {success && <div className="bg-green-100 text-green-700 p-3 rounded mb-4">{success}</div>}
      {loading && <div className="bg-blue-100 text-blue-700 p-3 rounded mb-4">Загрузка данных...</div>}
      
      <div className="mb-12">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Игроки</h2>
          <button onClick={() => handleAddNew('player')} className="btn-primary" disabled={loading}>
            Добавить игрока
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {players.map(player => (
            <div key={player.id} className="bg-white p-4 rounded-md shadow card-hover">
              <div className="flex items-start mb-4">
                <img src={player.image} alt={player.name} className="w-20 h-20 object-cover rounded-md mr-4" />
                <div>
                  <h3 className="font-semibold">{player.name}</h3>
                  <p className="text-gray-600">Позиция: {player.position}</p>
                  <p className="text-gray-600">Номер: {player.number}</p>
                  <p className="text-gray-600">
                    Голы: {player.stats?.goals || 0} | 
                    Передачи: {player.stats?.assists || 0} | 
                    Игры: {player.stats?.games || 0}
                  </p>
                </div>
              </div>
              <div className="flex justify-end gap-2">
                <button 
                  onClick={() => handleEdit(player, 'player')} 
                  className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                  disabled={loading}
                >
                  Редактировать
                </button>
                <button 
                  onClick={() => handleDelete(player.id, 'player')} 
                  className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  disabled={loading}
                >
                  Удалить
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Тренеры</h2>
          <button onClick={() => handleAddNew('coach')} className="btn-primary" disabled={loading}>
            Добавить тренера
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coaches.map(coach => (
            <div key={coach.id} className="bg-white p-4 rounded-md shadow card-hover">
              <div className="flex items-start mb-4">
                <img src={coach.image} alt={coach.name} className="w-20 h-20 object-cover rounded-md mr-4" />
                <div>
                  <h3 className="font-semibold">{coach.name}</h3>
                  <p className="text-gray-600">Должность: {coach.role}</p>
                </div>
              </div>
              <div className="flex justify-end gap-2">
                <button 
                  onClick={() => handleEdit(coach, 'coach')} 
                  className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                  disabled={loading}
                >
                  Редактировать
                </button>
                <button 
                  onClick={() => handleDelete(coach.id, 'coach')} 
                  className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  disabled={loading}
                >
                  Удалить
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Формы редактирования */}
      {(editMode === 'player' || editMode === 'newPlayer') && renderPlayerForm()}
      {(editMode === 'coach' || editMode === 'newCoach') && renderCoachForm()}
    </div>
  );
};

export default AdminPanel;
