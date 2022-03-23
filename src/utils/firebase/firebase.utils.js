import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB8eyxW3e9lCyZxg2SD_mo9p6YrI_tdpAw",
  authDomain: "crwn-db-e533b.firebaseapp.com",
  projectId: "crwn-db-e533b",
  storageBucket: "crwn-db-e533b.appspot.com",
  messagingSenderId: "589242463631",
  appId: "1:589242463631:web:9748fadd6054103c1607fa",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  console.log(userAuth);
};

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
