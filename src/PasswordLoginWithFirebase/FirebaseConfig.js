import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyA5UJ6bmav4g1nh7fdn_c4JKoN-WHzm80Q",
  authDomain: "emailpasswordlogin-937f3.firebaseapp.com",
  projectId: "emailpasswordlogin-937f3",
  storageBucket: "emailpasswordlogin-937f3.appspot.com",
  messagingSenderId: "808772455307",
  appId: "1:808772455307:web:bb91cfd157cc7c046efd8e"
};

const app = initializeApp(firebaseConfig);
export const database = getAuth(app)