import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "potty-snitch.firebaseapp.com",
  databaseURL: "https://potty-snitch-default-rtdb.firebaseio.com",
  projectId: "potty-snitch",
  storageBucket: "potty-snitch.appspot.com",
  messagingSenderId: "499783816793",
  appId: "1:499783816793:web:2b68d1fefac377c83f0348",
  measurementId: "G-5HTN19WPKZ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Ensure this is defined before use

export { db };
