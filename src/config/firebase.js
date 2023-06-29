// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3TteH4F81k3a_4sW8VQzWc1AiFT5ldg8",
  authDomain: "robertportfolio-c0569.firebaseapp.com",
  projectId: "robertportfolio-c0569",
  storageBucket: "robertportfolio-c0569.appspot.com",
  messagingSenderId: "169647220706",
  appId: "1:169647220706:web:82e40548a7897cbcf4fbbb",
  measurementId: "G-86SW3JZE0Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);