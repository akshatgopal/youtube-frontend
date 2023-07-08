import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: process.env.APIKEY,
  authDomain: "video-97c11.firebaseapp.com",
  projectId: "video-97c11",
  storageBucket: "video-97c11.appspot.com",
  messagingSenderId: "355038273518",
  appId: "1:355038273518:web:6b6fbffc6cf835a09cf8ff",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export default app;
