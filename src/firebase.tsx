
import { initializeApp } from "firebase/app";
import {getAuth as auth,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut as signOutWithEmailAndPassword} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDQoPBJSOixXMe7KpRXYc94DJeCwTTrIk8",
  authDomain: "eccomerce-project-ff576.firebaseapp.com",
  projectId: "eccomerce-project-ff576",
  storageBucket: "eccomerce-project-ff576.appspot.com",
  messagingSenderId: "195085437536",
  appId: "1:195085437536:web:a23442669dbbdf8fdb9105"
};


const app = initializeApp(firebaseConfig);

export const signup = createUserWithEmailAndPassword;
export const signin = signInWithEmailAndPassword;

export const signOut = signOutWithEmailAndPassword


export const getAuth = auth;