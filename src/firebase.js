// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB5dweqat6oWFeOu4Gd1vchSZdCPRPkJJs",
  authDomain: "dashboard-59cb9.firebaseapp.com",
  projectId: "dashboard-59cb9",
  storageBucket: "dashboard-59cb9.firebasestorage.app",
  messagingSenderId: "404263479122",
  appId: "1:404263479122:web:36c90566db8b91f6befc8b",
  measurementId: "G-T0FW7KB8Q6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export default app;
export { auth, provider };
