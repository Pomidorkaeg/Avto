import { db } from '../firebase/config';
import { 
  collection, 
  getDocs, 
  doc, 
  getDoc, 
  setDoc, 
  updateDoc, 
  deleteDoc, 
  addDoc 
} from 'firebase/firestore';

// Players
export const fetchPlayers = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'players'));
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error('Error getting players:', error);
    throw error; // Пробрасываем ошибку для обработки в компоненте
  }
};

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

// В adminApi.js
export const updatePlayer = async (playerData) => {
  try {
    const playerRef = doc(db, 'players', playerData.id);
    await setDoc(playerRef, playerData, { merge: true });
    toast.success('Игрок обновлен!');
    return true;
  } catch (error) {
    toast.error('Ошибка: ' + error.message);
    return false;
  }
};

// В AdminPanel.js
const handleSave = async () => {
  await updatePlayer(currentPlayer);
  loadPlayers(); // Автоматически обновляем список
};

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

export const createPlayer = async (playerData) => {
  try {
    // Проверяем, что данные игрока не пустые
    if (!playerData || Object.keys(playerData).length === 0) {
      throw new Error('Player data is required');
    }
    
    // Если у игрока уже есть ID, используем setDoc
    if (playerData.id) {
      const playerRef = doc(db, 'players', playerData.id);
      const { id, ...data } = playerData;
      await setDoc(playerRef, data);
      console.log('Player created with existing ID:', playerData.id);
      return playerData;
    } else {
      // Иначе используем addDoc для создания нового документа
      const docRef = await addDoc(collection(db, 'players'), playerData);
      console.log('Player created with new ID:', docRef.id);
      return {
        id: docRef.id,
        ...playerData
      };
    }
  } catch (error) {
    console.error('Error creating player:', error);
    throw error;
  }
};

// Coaches
export const fetchCoaches = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'coaches'));
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error('Error getting coaches:', error);
    throw error;
  }
};

export const getCoach = async (id) => {
  try {
    const docRef = doc(db, 'coaches', id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return {
        id: docSnap.id,
        ...docSnap.data()
      };
    } else {
      throw new Error('Coach not found');
    }
  } catch (error) {
    console.error('Error getting coach:', error);
    throw error;
  }
};

export const updateCoach = async (coach) => {
  try {
    const { id, ...coachData } = coach;
    if (!id) {
      throw new Error('Coach ID is required for update');
    }
    
    const coachRef = doc(db, 'coaches', id);
    // Используем setDoc с merge: true для обеспечения обновления
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

export const createCoach = async (coachData) => {
  try {
    // Проверяем, что данные тренера не пустые
    if (!coachData || Object.keys(coachData).length === 0) {
      throw new Error('Coach data is required');
    }
    
    // Если у тренера уже есть ID, используем setDoc
    if (coachData.id) {
      const coachRef = doc(db, 'coaches', coachData.id);
      const { id, ...data } = coachData;
      await setDoc(coachRef, data);
      console.log('Coach created with existing ID:', coachData.id);
      return coachData;
    } else {
      // Иначе используем addDoc для создания нового документа
      const docRef = await addDoc(collection(db, 'coaches'), coachData);
      console.log('Coach created with new ID:', docRef.id);
      return {
        id: docRef.id,
        ...coachData
      };
    }
  } catch (error) {
    console.error('Error creating coach:', error);
    throw error;
  }
};
