// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyCVqfoZAiUgjKwxLdZ9AdZvlpq-vaQK53E",
  authDomain: "elections2024-de1c4.firebaseapp.com",
  projectId: "elections2024-de1c4",
  storageBucket: "elections2024-de1c4.appspot.com",
  messagingSenderId: "96016593695",
  appId: "1:96016593695:web:5ad5b35b9a94f8cb52362a",
  measurementId: "G-8F3CH2J1NL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db=getFirestore(app);

