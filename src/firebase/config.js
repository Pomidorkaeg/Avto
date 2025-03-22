import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDf9GMzXbp1QZcEaHZPJKaTLgxJMdN-GHY",
  authDomain: "gudauta-team-panel.firebaseapp.com",
  projectId: "gudauta-team-panel",
  storageBucket: "gudauta-team-panel.appspot.com",
  messagingSenderId: "389574721934",
  appId: "1:389574721934:web:6c8a7b4ff4535a8c4f79e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
