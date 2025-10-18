// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAtPwCjVofGvkb9RpA3DbMaGKoTDddVss",
  authDomain: "dragon-news-app-b47de.firebaseapp.com",
  projectId: "dragon-news-app-b47de",
  storageBucket: "dragon-news-app-b47de.firebasestorage.app",
  messagingSenderId: "125043988521",
  appId: "1:125043988521:web:9ef340c5e6ce0ba9d9e438"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);