// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmqW_yhiyVLE_iYq77fsp6wzX4JQrHfc0",
  authDomain: "reactnativebosch.firebaseapp.com",
  projectId: "reactnativebosch",
  storageBucket: "reactnativebosch.appspot.com",
  messagingSenderId: "433534069062",
  appId: "1:433534069062:web:6ee88d49633bae6ddc9d47",
  measurementId: "G-QFRDRQPM5Y"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP)
export const FIRESTORE_DB = getFirestore(FIREBASE_APP)
