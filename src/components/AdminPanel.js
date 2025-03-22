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
      const data = await fetchPlayers();
      setPlayers(data);
    } catch (err) {
      setError('Error loading players: ' + err.message);
    }
  };

  const loadCoaches = async () => {
    try {
      const data = await fetchCoaches();
      setCoaches(data);
    } catch (err) {
      setError('Error loading coaches: ' + err.message);
    }
  };

  // Authentication handlers
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setEmail('');
      setPassword('');
      setError('');
    } catch (err) {
      setError('Login failed: ' + err.message);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      setError('Logout failed: ' + err.message);
    }
  };

  // CRUD operation handlers
  const handleEdit = (item, type) => {
    setEditMode(type);
    setCurrentItem(item);
  };

  const handleCancelEdit = () => {
    setEditMode(null);
    setCurrentItem(null);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      if (editMode === 'player') {
        await updatePlayer(currentItem);
        await loadPlayers();
      } else {
        await updateCoach(currentItem);
        await loadCoaches();
      }
      
      setSuccess(`${editMode === 'player' ? 'Player' : 'Coach'} updated successfully`);
      setEditMode(null);
      setCurrentItem(null);
      
      // Clear success message after 3 seconds
      setTimeout(() => setSuccess(''), 3000);
    } catch (err) {
      setError('Update failed: ' + err.message);
    }
  };

  const handleDelete = async (id, type) => {
    if (window.confirm(`Are you sure you want to delete this ${type}?`)) {
      try {
        if (type === 'player') {
          await deletePlayer(id);
          await loadPlayers();
        } else {
          await deleteCoach(id);
          await loadCoaches();
        }
        
        setSuccess(`${type === 'player' ? 'Player' : 'Coach'} deleted successfully`);
        
        // Clear success message after 3 seconds
        setTimeout(() => setSuccess(''), 3000);
      } catch (err) {
        setError('Delete failed: ' + err.message);
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentItem({
      ...currentItem,
      [name]: value
    });
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
      if (editMode === 'newPlayer') {
        await createPlayer(currentItem);
        await loadPlayers();
      } else {
        await createCoach(currentItem);
        await loadCoaches();
      }
      
      setSuccess(`${editMode === 'newPlayer' ? 'Player' : 'Coach'} created successfully`);
      setEditMode(null);
      setCurrentItem(null);
      
      // Clear success message after 3 seconds
      setTimeout(() => setSuccess(''), 3000);
    } catch (err) {
      setError('Create failed: ' + err.message);
    }
  };

  // Login Form
  if (!user) {
    return (
      <div className="max-w-md mx-auto mt-24 p-6 bg-white rounded-md shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Гудаута Admin Login</h1>
        {error && <div className="bg-red-100 text-red-700 p-3 rounded mb-4">{error}</div>}
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
          <button type="submit" className="btn-primary w-full">Login</button>
        </form>
      </div>
    );
  }

  // Main Admin Panel
  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6 pb-3 border-b">
        <h1 className="text-2xl font-bold">Гудаута Admin Panel</h1>
        <button onClick={handleLogout} className="btn-secondary">Logout</button>
      </div>
      {error && <div className="bg-red-100 text-red-700 p-3 rounded mb-4">{error}</div>}
      {success && <div className="bg-green-100 text-green-700 p-3 rounded mb-4">{success}</div>}
      
      <div className="mb-12">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Players</h2>
          <button onClick={() => handleAddNew('player')} className="btn-primary">Add New Player</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {players.map(player => (
            <div key={player.id} className="bg-white p-4 rounded-md shadow card-hover">
              <div className="flex items-start mb-4">
                <img src={player.image} alt={player.name} className="w-20 h-20 object-cover rounded-md mr-4" />
                <div>
                  <h3 className="font-semibold">{player.name}</h3>
                  <p className="text-gray-600">Position: {player.position}</p>
                  <p className="text-gray-600">Number: {player.number}</p>
                  <p className="text-gray-600">
                    Goals: {player.stats?.goals || 0} | 
                    Assists: {player.stats?.assists || 0} | 
                    Games: {player.stats?.games || 0}
                  </p>
                </div>
              </div>
              <div className="flex justify-end gap-2">
                <button onClick={() => handleEdit(player, 'player')} className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">Edit</button>
                <button onClick={() => handleDelete(player.id, 'player')} className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Coaches</h2>
          <button onClick={() => handleAddNew('coach')} className="btn-primary">Add New Coach</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coaches.map(coach => (
            <div key={coach.id} className="bg-white p-4 rounded-md shadow card-hover">
              <div className="flex items-start mb-4">
                <img src={coach.image} alt={coach.name} className="w-20 h-20 object-cover rounded-md mr-4" />
                <div>
                  <h3 className="font-semibold">{coach.name}</h3>
                  <p className="text-gray-600">Role: {coach.role}</p>
                </div>
              </div>
              <div className="flex justify-end gap-2">
                <button onClick={() => handleEdit(coach, 'coach')} className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">Edit</button>
                <button onClick={() => handleDelete(coach.id, 'coach')} className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
