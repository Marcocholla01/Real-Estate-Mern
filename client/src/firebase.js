// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "practicess.firebaseapp.com",
  projectId: "practicess",
  storageBucket: "practicess.appspot.com",
  messagingSenderId: "119585651761",
  appId: "1:119585651761:web:97fb4f5e4bfa6e9a3da910",
  measurementId: "G-PVTSMCEXLV",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
