LearneraApp is a modern React Native learning application featuring quizzes, progress tracking, 
and user authentication. It is built with React Native for the frontend and Firebase for backend services.

Features:

🔑 User Authentication (Signup/Login using Firebase)

 Courses

 FlashCards

 Quizzes with result storage

 Progress tracking for each user

 Clean and responsive UI

 Chats


 Tech Stack

Frontend: React Native, JavaScript

Backend: Firebase Authentication & Firestore

UI: React Native Components

Open firebase.js.

Replace the placeholders with your Firebase project configuration:

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
};

Firebase Setup Notes

Create a project at Firebase Console
.

Enable Authentication (Email/Password).

Create a Firestore Database.

Copy your config values and paste them into firebase.js

Author

👩‍💻 Areeba Ahmad

📧 Email: areebaahmadzps@gmail.com
