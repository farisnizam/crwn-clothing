import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA8GEfZJmbj_CQbSOHrtrLCndWu1ek_33Q",
  authDomain: "crwn-clothing-db-49b7e.firebaseapp.com",
  projectId: "crwn-clothing-db-49b7e",
  storageBucket: "crwn-clothing-db-49b7e.appspot.com",
  messagingSenderId: "385412489909",
  appId: "1:385412489909:web:7baf2628fb716f37b054fc",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
