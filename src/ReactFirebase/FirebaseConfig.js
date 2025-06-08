// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLdf7G2b_tcW3Thrd-LXso3DtaNmyfzy8",
  authDomain: "ytdb-33696.firebaseapp.com",
  projectId: "ytdb-33696",
  storageBucket: "ytdb-33696.firebasestorage.app",
  messagingSenderId: "537136400252",
  appId: "1:537136400252:web:2879b34e14b1c7ffd706f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export { database,auth,provider }