import { collection, doc, getDocs, getDoc, setDoc, deleteDoc, addDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

// Получение всех игроков
export const fetchPlayers = async () => {
  try {
    const playersCollection = collection(db, 'players');
    const querySnapshot = await getDocs(playersCollection);
    const players = [];
    
    querySnapshot.forEach((doc) => {
      players.push({
        id: doc.id,
        ...doc.data()
      });
    });
    
    return players;
  } catch (error) {
    console.error('Error fetching players:', error);
    throw error;
  }
};

// Получение игрока по ID
export const getPlayer = async (id) => {
  try {
    const docRef = doc(db, 'players', id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return {
        id: docSnap.id,
        ...docSnap.data()
      };
    } else {
      throw new Error('Player not found');
    }
  } catch (error) {
    console.error('Error getting player:', error);
    throw error;
  }
};

// Обновление игрока
export const updatePlayer = async (player) => {
  try {
    const { id, ...playerData } = player;
    // Если id не существует, используем setDoc вместо updateDoc
    if (!id) {
      throw new Error('Player ID is required for update');
    }
    
    const playerRef = doc(db, 'players', id);
    // Используем setDoc с merge: true для обеспечения обновления
    await setDoc(playerRef, playerData, { merge: true });
    
    console.log('Player updated successfully:', id);
    return {
      id,
      ...playerData
    };
  } catch (error) {
    console.error('Error updating player:', error);
    throw error;
  }
};

// Удаление игрока
export const deletePlayer = async (id) => {
  try {
    if (!id) {
      throw new Error('Player ID is required for deletion');
    }
    
    await deleteDoc(doc(db, 'players', id));
    console.log('Player deleted successfully:', id);
    return id;
  } catch (error) {
    console.error('Error deleting player:', error);
    throw error;
  }
};

// Создание нового игрока
export const createPlayer = async (playerData) => {
  try {
    // Проверка наличия обязательных полей
    if (!playerData.name || !playerData.position || !playerData.number) {
      throw new Error('Name, position, and number are required fields');
    }
    
    // Инициализация stats, если они не предоставлены
    if (!playerData.stats) {
      playerData.stats = {
        goals: 0,
        assists: 0,
        games: 0
      };
    }
    
    const playersCollection = collection(db, 'players');
    const docRef = await addDoc(playersCollection, playerData);
    
    console.log('Player created successfully with ID:', docRef.id);
    return {
      id: docRef.id,
      ...playerData
    };
  } catch (error) {
    console.error('Error creating player:', error);
    throw error;
  }
};

// Получение всех тренеров
export const fetchCoaches = async () => {
  try {
    const coachesCollection = collection(db, 'coaches');
    const querySnapshot = await getDocs(coachesCollection);
    const coaches = [];
    
    querySnapshot.forEach((doc) => {
      coaches.push({
        id: doc.id,
        ...doc.data()
      });
    });
    
    return coaches;
  } catch (error) {
    console.error('Error fetching coaches:', error);
    throw error;
  }
};

// Обновление тренера
export const updateCoach = async (coach) => {
  try {
    const { id, ...coachData } = coach;
    if (!id) {
      throw new Error('Coach ID is required for update');
    }
    
    const coachRef = doc(db, 'coaches', id);
    await setDoc(coachRef, coachData, { merge: true });
    
    console.log('Coach updated successfully:', id);
    return {
      id,
      ...coachData
    };
  } catch (error) {
    console.error('Error updating coach:', error);
    throw error;
  }
};

// Удаление тренера
export const deleteCoach = async (id) => {
  try {
    if (!id) {
      throw new Error('Coach ID is required for deletion');
    }
    
    await deleteDoc(doc(db, 'coaches', id));
    console.log('Coach deleted successfully:', id);
    return id;
  } catch (error) {
    console.error('Error deleting coach:', error);
    throw error;
  }
};

// Создание нового тренера
export const createCoach = async (coachData) => {
  try {
    // Проверка наличия обязательных полей
    if (!coachData.name || !coachData.role) {
      throw new Error('Name and role are required fields');
    }
    
    const coachesCollection = collection(db, 'coaches');
    const docRef = await addDoc(coachesCollection, coachData);
    
    console.log('Coach created successfully with ID:', docRef.id);
    return {
      id: docRef.id,
      ...coachData
    };
  } catch (error) {
    console.error('Error creating coach:', error);
    throw error;
  }
};
