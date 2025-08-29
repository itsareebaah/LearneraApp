// Import the required modules from Firebase
import { initializeApp } from 'firebase/app'; // add
import { getAuth } from 'firebase/auth'; // add
import { getFirestore } from 'firebase/firestore'; 

// Your Firebase configuration object
const firebaseConfig = {
     apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
  appId: FIREBASE_APP_ID,
  };


// Initialize Firebase with your configuration object
const app = initializeApp(firebaseConfig);

// Get the Firebase authentication and Firestore database instances
const auth = getAuth(app); // add
const database = getFirestore(app); // add

// Export the Firebase authentication and Firestore database instances
export { auth, database }; //add