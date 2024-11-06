// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4GiLPvV-JQFCOJhZexqFRR0Zt53B6sD0",
  authDomain: "budget-tracker-8162b.firebaseapp.com",
  projectId: "budget-tracker-8162b",
  storageBucket: "budget-tracker-8162b.firebasestorage.app",
  messagingSenderId: "882588805208",
  appId: "1:882588805208:web:f4ac54abb354dfc4ebc22d",
  measurementId: "G-X6417NCVBJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const analytics = getAnalytics(app);

export { app, db }