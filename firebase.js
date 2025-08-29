// Import the required modules from Firebase
import { initializeApp } from 'firebase/app'; // add
import { getAuth } from 'firebase/auth'; // add
import { getFirestore } from 'firebase/firestore'; 

// Your Firebase configuration object
const firebaseConfig = {
    apiKey: "AIzaSyDhWEXCaFai0LJ6kHygouW9o5x4AsGbChI",
    authDomain: "areebalearnera.firebaseapp.com",
    projectId: "areebalearnera",
    storageBucket: "areebalearnera.firebasestorage.app",
    messagingSenderId: "795374024151",
    appId: "1:795374024151:web:3598e41aa1bf3f59e70792"
  };


// Initialize Firebase with your configuration object
const app = initializeApp(firebaseConfig);

// Get the Firebase authentication and Firestore database instances
const auth = getAuth(app); // add
const database = getFirestore(app); // add

// Export the Firebase authentication and Firestore database instances
export { auth, database }; //add