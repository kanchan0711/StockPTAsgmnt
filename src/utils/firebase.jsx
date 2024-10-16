// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPIVk1S5w2JJ0s7gQna_gjaJnujlJxQAo",
  authDomain: "starptasgnmt.firebaseapp.com",
  projectId: "starptasgnmt",
  storageBucket: "starptasgnmt.appspot.com",
  messagingSenderId: "848405635356",
  appId: "1:848405635356:web:df7802041078c8d60b9ad9",
  measurementId: "G-9MPF3GTQKN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);