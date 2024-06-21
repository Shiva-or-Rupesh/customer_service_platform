// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBw6WH7rHPCALER6GIjCZJ6rrW7MDKPiA0",
  authDomain: "social1-d21d4.firebaseapp.com",
  projectId: "social1-d21d4",
  storageBucket: "social1-d21d4.appspot.com",
  messagingSenderId: "254494822234",
  appId: "1:254494822234:web:e2355245606851313aed63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()