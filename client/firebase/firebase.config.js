// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXNBtIfVwPLNoxGX1GAjp_QvXcHRH0rx8",
  authDomain: "quizzbot-ai.firebaseapp.com",
  projectId: "quizzbot-ai",
  storageBucket: "quizzbot-ai.appspot.com",
  messagingSenderId: "803163016781",
  appId: "1:803163016781:web:470d97ea1b35d23e4a1604",
  measurementId: "G-2KPMJK7E2D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
