// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyAhqqPkgeMQy2hI8nR4FeycCSpXqmEe68k",
  authDomain: "chat-111af.firebaseapp.com",
  projectId: "chat-111af",
  storageBucket: "chat-111af.appspot.com",
  messagingSenderId: "809547794095",
  appId: "1:809547794095:web:aa0e86f085f80fdc39365a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore()

