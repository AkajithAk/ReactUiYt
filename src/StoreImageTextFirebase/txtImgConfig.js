import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzjfjsfvjsfvhfvywtrwfwygwE",
  authDomain: "jhhjhj-64f8e.firebaseapp.com",
  projectId: "jhhjhj-64f8e",
  storageBucket: "jhhjhj-64f8e.appspot.com",
  messagingSenderId: "480409360012",
  appId: "1:480409360012:web:0ceccab9e05eb390260da9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const imgDB = getStorage(app)
const txtDB = getFirestore(app)

export {imgDB,txtDB};
