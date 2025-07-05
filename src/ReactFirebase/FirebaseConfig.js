// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyDLdf7G2b_tcW3Thrd-LXso3DtaNmyfzy8",
  // authDomain: "ytdb-33696.firebaseapp.com",
  // projectId: "ytdb-33696",
  // storageBucket: "ytdb-33696.firebasestorage.app",
  // messagingSenderId: "537136400252",
  // appId: "1:537136400252:web:2879b34e14b1c7ffd706f9"
   apiKey: "AIzaSyD_36kC5qUBJSmmyOJbYcO7LGaYDYqzRKQ",
  authDomain: "fir-yt-536e4.firebaseapp.com",
  projectId: "fir-yt-536e4",
  storageBucket: "fir-yt-536e4.appspot.com",
  messagingSenderId: "22549970528",
  appId: "1:22549970528:web:886ab0fccdfbab66118d05"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app)
const auth = getAuth(app)
const storage = getStorage(app) 
const provider = new GoogleAuthProvider()

export { database,auth,provider,storage }