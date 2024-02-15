import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBwHCl5US4Bk5-fjWAnGt1pKJjXIKlYuiY",
  authDomain: "reactlinks-2d34c.firebaseapp.com",
  projectId: "reactlinks-2d34c",
  storageBucket: "reactlinks-2d34c.appspot.com",
  messagingSenderId: "309484114275",
  appId: "1:309484114275:web:7efe52c90c048025f50356",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
