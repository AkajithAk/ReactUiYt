// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyC0YrfhUD0jBU1fxD2poYdXTrBvT7WbyOQ",
  authDomain: "auth-8c6ac.firebaseapp.com",
  projectId: "auth-8c6ac",
  storageBucket: "auth-8c6ac.appspot.com",
  messagingSenderId: "937201589757",
  appId: "1:937201589757:web:b1b004bdf6504dffb44d94",
  measurementId: "G-PBGS1EBTYC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export {auth,provider}