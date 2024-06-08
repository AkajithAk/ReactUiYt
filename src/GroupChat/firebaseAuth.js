import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCZtnxKdGoR88vK6-aYoA4DugG-IqjLjYk",
  authDomain: "groupchat-49f01.firebaseapp.com",
  projectId: "groupchat-49f01",
  storageBucket: "groupchat-49f01.appspot.com",
  messagingSenderId: "699160317995",
  appId: "1:699160317995:web:75761a00d73a3d165a5a6e"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
const database = getFirestore(app)

export {auth,provider,database}