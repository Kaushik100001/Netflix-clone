import {getFirestore} from 'firebase/firestore'
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyATNdSIjjNNSb6YgigvX_JftWWka5yKBoc",
  authDomain: "netflix-clone-c6e4c.firebaseapp.com",
  projectId: "netflix-clone-c6e4c",
  storageBucket: "netflix-clone-c6e4c.appspot.com",
  messagingSenderId: "713144394718",
  appId: "1:713144394718:web:a398cd5a011bee0cf6334f"
};


 export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db= getFirestore(app)