// config.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDhWEXCaFai0LJ6kHygouW9o5x4AsGbChI",
    authDomain: "areebalearnera.firebaseapp.com",
    projectId: "areebalearnera",
    storageBucket: "areebalearnera.firebasestorage.app",
    messagingSenderId: "795374024151",
    appId: "1:795374024151:web:3598e41aa1bf3f59e70792"
  };


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
