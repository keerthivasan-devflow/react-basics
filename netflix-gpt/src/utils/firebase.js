// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwtZAaugxzV_-onlV77Q0r4oiM3GFAi0I",
  authDomain: "netflixgpt-403d8.firebaseapp.com",
  projectId: "netflixgpt-403d8",
  storageBucket: "netflixgpt-403d8.firebasestorage.app",
  messagingSenderId: "92625870375",
  appId: "1:92625870375:web:af6cf218be775fe17d7802",
  measurementId: "G-4QZEBS11K9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
