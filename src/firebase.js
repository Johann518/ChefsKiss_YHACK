// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries
//import firebase from 'firebase/app';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUS1bb3BpLCFplAUJLkGEWE8_l7EtJ6ks",
  authDomain: "chefs-kiss-8447d.firebaseapp.com",
  projectId: "chefs-kiss-8447d",
  storageBucket: "chefs-kiss-8447d.appspot.com",
  messagingSenderId: "723713255708",
  appId: "1:723713255708:web:41d0990a282767c76632d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);