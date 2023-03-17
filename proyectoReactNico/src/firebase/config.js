
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBmANI1cnscSQGWAYFCqVWUSW-5I235F_s",
  authDomain: "proyecto-react-nico.firebaseapp.com",
  projectId: "proyecto-react-nico",
  storageBucket: "proyecto-react-nico.appspot.com",
  messagingSenderId: "593803616032",
  appId: "1:593803616032:web:1fb9aa9ee703a91ab08145"
};

const app = initializeApp(firebaseConfig);

export const initFirebase = () => app