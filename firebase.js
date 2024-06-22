// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBYP13J1xmgvT5SZphRpBlRok6av3OPL4",
  authDomain: "robertportfolio-519e7.firebaseapp.com",
  projectId: "robertportfolio-519e7",
  storageBucket: "robertportfolio-519e7.appspot.com",
  messagingSenderId: "794968398410",
  appId: "1:794968398410:web:5e2be61ebefedb9bb964b3",
  measurementId: "G-XXJM0NTVER"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);