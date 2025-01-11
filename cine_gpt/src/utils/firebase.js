// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsFTZr8qZYWBdeYy45Dq_3vOq88bOGXP8",
  authDomain: "cinegpt-2d2e4.firebaseapp.com",
  projectId: "cinegpt-2d2e4",
  storageBucket: "cinegpt-2d2e4.firebasestorage.app",
  messagingSenderId: "908306754311",
  appId: "1:908306754311:web:55821ec30883a73f5c73a2"
};

// // Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();