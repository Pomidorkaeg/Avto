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
export const getPlayers = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'players'));
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error('Error getting players:', error);
    throw error;
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

export const createPlayer = async (playerData) => {
  try {
    const docRef = await addDoc(collection(db, 'players'), playerData);
    return {
      id: docRef.id,
      ...playerData
    };
  } catch (error) {
    console.error('Error creating player:', error);
    throw error;
  }
};

export const updatePlayer = async (id, playerData) => {
  try {
    const playerRef = doc(db, 'players', id);
    await updateDoc(playerRef, playerData);
    return {
      id,
      ...playerData
    };
  } catch (error) {
    console.error('Error updating player:', error);
    throw error;
  }
};

export const deletePlayer = async (id) => {
  try {
    await deleteDoc(doc(db, 'players', id));
    return id;
  } catch (error) {
    console.error('Error deleting player:', error);
    throw error;
  }
};

// Coaches
export const getCoaches = async () => {
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

export const createCoach = async (coachData) => {
  try {
    const docRef = await addDoc(collection(db, 'coaches'), coachData);
    return {
      id: docRef.id,
      ...coachData
    };
  } catch (error) {
    console.error('Error creating coach:', error);
    throw error;
  }
};

export const updateCoach = async (id, coachData) => {
  try {
    const coachRef = doc(db, 'coaches', id);
    await updateDoc(coachRef, coachData);
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
    await deleteDoc(doc(db, 'coaches', id));
    return id;
  } catch (error) {
    console.error('Error deleting coach:', error);
    throw error;
  }
};
