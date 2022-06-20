// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import{getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyC5L_QWRlOwwFNSKd-h0_9WduwNgdgk7dc",
  authDomain: "budget-app-acce3.firebaseapp.com",
  projectId: "budget-app-acce3",
  storageBucket: "budget-app-acce3.appspot.com",
  messagingSenderId: "184472923282",
  appId: "1:184472923282:web:ceea99a5c8378bf1e50a4b",
  measurementId: "G-YG371FSQ7M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app)
const analytics = getAnalytics(app);

export  {auth,db};
