// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzreKoEvrnyFA5DnVSk1fTSuAfUogG_w4",
  authDomain: "registration-page-1affe.firebaseapp.com",
  databaseURL: "https://registration-page-1affe-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "registration-page-1affe",
  storageBucket: "registration-page-1affe.appspot.com",
  messagingSenderId: "797858051806",
  appId: "1:797858051806:web:08275dfe6c293a60f2744f",
  measurementId: "G-8RPKE059HD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);