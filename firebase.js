// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDa7RTRsTuS5g-izvlaoIsOENcPZN1QPnY",
  authDomain: "pookarma-505ac.firebaseapp.com",
  projectId: "pookarma-505ac",
  storageBucket: "pookarma-505ac.appspot.com",
  messagingSenderId: "171902580826",
  appId: "1:171902580826:web:4d3cd6d700b64289ef0063"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();