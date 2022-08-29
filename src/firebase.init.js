import { getAuth } from 'firebase/auth'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMr210qlrKn2FLX9zgvSrcsAPAeW73Mvk",
  authDomain: "manageware-40e96.firebaseapp.com",
  projectId: "manageware-40e96",
  storageBucket: "manageware-40e96.appspot.com",
  messagingSenderId: "26032763463",
  appId: "1:26032763463:web:cfaf5b65ff830d2163b762"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;