import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyABzYtMXHZFKljltFtK30K1Irl71qRLrRM",
  authDomain: "recepies-c7f4a.firebaseapp.com",
  projectId: "recepies-c7f4a",
  storageBucket: "recepies-c7f4a.firebasestorage.app",
  messagingSenderId: "392265878517",
  appId: "1:392265878517:web:578ec6f5a66f1f492e2ebc",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export const db = getFirestore();
