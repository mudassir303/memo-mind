// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAYaYswmNFjoXQ8lzau-cA2S38MKUZ7RlY",
  authDomain: "memo-mind-bb2fb.firebaseapp.com",
  projectId: "memo-mind-bb2fb",
  storageBucket: "memo-mind-bb2fb.appspot.com",
  messagingSenderId: "1005642576814",
  appId: "1:1005642576814:web:be75dd254f7f6981c88e3f",
  measurementId: "G-SVZ45FB7Q1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}