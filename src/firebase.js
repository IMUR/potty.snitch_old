// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCU4dGjzQRlwYVR868Gjk_w95e5l8bQgy0",
  authDomain: "potty-snitch.firebaseapp.com",
  projectId: "potty-snitch",
  storageBucket: "potty-snitch.appspot.com",
  messagingSenderId: "499783816793",
  appId: "1:499783816793:web:2b68d1fefac377c83f0348"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestoreDb = getFirestore(app);

export { firestoreDb };
