import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCeL4tKePlmSBk-EuAw9H4hum3ZmHX-0gc",
    authDomain: "fir-withcloud.firebaseapp.com",
    projectId: "fir-withcloud",
    storageBucket: "fir-withcloud.appspot.com",
    messagingSenderId: "771434288779",
    appId: "1:771434288779:web:13eea7c3de5cf96519668e",
    measurementId: "G-RE83N0182F"
  };

  const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)