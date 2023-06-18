// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyAC2yZlqplWjxBN7SJHa1XbyXoA7qrdLhU",
  authDomain: "ecommerce-13b71.firebaseapp.com",
  projectId: "ecommerce-13b71",
  storageBucket: "ecommerce-13b71.appspot.com",
  messagingSenderId: "786671211114",
  appId: "1:786671211114:web:8ef71bb891767e68b67013",
  measurementId: "G-73LM3H3XNP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);