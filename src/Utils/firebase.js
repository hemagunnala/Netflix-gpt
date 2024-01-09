// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDplQRw_12u9N_rc-cFE9jyARgim4qiNmI",
  authDomain: "netflixgpt-6775e.firebaseapp.com",
  projectId: "netflixgpt-6775e",
  storageBucket: "netflixgpt-6775e.appspot.com",
  messagingSenderId: "941131642010",
  appId: "1:941131642010:web:cb587224ad5dc30adc5b23",
  measurementId: "G-7QJM6RYK81"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
