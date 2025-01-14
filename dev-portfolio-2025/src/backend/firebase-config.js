// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Import Firestore if you need to use it

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBQfdW89ga1Ink9eJg7qD7H6o_JzHdwOOY",
    authDomain: "kk-dev-portfolio.firebaseapp.com",
    projectId: "kk-dev-portfolio",
    storageBucket: "kk-dev-portfolio.firebasestorage.app",
    messagingSenderId: "516586101015",
    appId: "1:516586101015:web:62e34d7e58bba1a3a8bf52",
    measurementId: "G-11YE2TYS8P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app); // Initialize Firestore


export { db, analytics };
