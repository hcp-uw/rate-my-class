// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDS7YoIW-KrOzrtuoKpiHDgPh6jlZa6c9Q",
  authDomain: "rate-my-class-2652f.firebaseapp.com",
  projectId: "rate-my-class-2652f",
  storageBucket: "rate-my-class-2652f.appspot.com",
  messagingSenderId: "386744303285",
  appId: "1:386744303285:web:650944fc60cda3ed0688fc",
  measurementId: "G-EGRGK02C87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);