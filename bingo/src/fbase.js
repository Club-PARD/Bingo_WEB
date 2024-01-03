// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAr3znaaa2POCxF3pTa1OLhFQxHjGZr2g",
  authDomain: "bingo-1c642.firebaseapp.com",
  projectId: "bingo-1c642",
  storageBucket: "bingo-1c642.appspot.com",
  messagingSenderId: "852368892676",
  appId: "1:852368892676:web:7b6a3934bf645ce9d5a651",
  measurementId: "G-SQQLKRX8QL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);