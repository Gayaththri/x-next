// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "x-next-b1c5c.firebaseapp.com",
  projectId: "x-next-b1c5c",
  storageBucket: "x-next-b1c5c.appspot.com",
  messagingSenderId: "695858546881",
  appId: "1:695858546881:web:2d8b792a085cf931cc6c40",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
