// Import the functions from the SDKs
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeFqqgkdsccdTRHM0X2JiERiohs3a75ZY",
  authDomain: "blog-7622a.firebaseapp.com",
  projectId: "blog-7622a",
  storageBucket: "blog-7622a.appspot.com",
  messagingSenderId: "194555707118",
  appId: "1:194555707118:web:18b34272360402b069fdff",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
