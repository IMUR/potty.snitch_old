// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyAbVsGY-kU4S0-P1wNtDjYSD82a6ThXREk",

  authDomain: "potty-snitch.firebaseapp.com",

  databaseURL: "https://potty-snitch-default-rtdb.firebaseio.com",

  projectId: "potty-snitch",

  storageBucket: "potty-snitch.appspot.com",

  messagingSenderId: "499783816793",

  appId: "1:499783816793:web:2b68d1fefac377c83f0348",

  measurementId: "G-5HTN19WPKZ"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

const db = getFirestore(app);

export { db };
