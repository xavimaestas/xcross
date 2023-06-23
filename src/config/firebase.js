
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth' 
import { getFirestore } from 'firebase/firestore'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAZsp_36sL3wIINSO2AeOVlTg_UF10MR14",
  authDomain: "crosser-b296d.firebaseapp.com",
  databaseURL: "https://crosser-b296d-default-rtdb.firebaseio.com",
  projectId: "crosser-b296d",
  storageBucket: "crosser-b296d.appspot.com",
  messagingSenderId: "697559925774",
  appId: "1:697559925774:web:f35b1605a0cbbdf3fa285f"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
export const user = auth.currentUser
export const db = getFirestore(app)