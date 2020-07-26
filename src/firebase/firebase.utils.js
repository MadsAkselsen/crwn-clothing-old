import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var config = {
  apiKey: "AIzaSyBoUzTJy6kuu25cR2BsN0Fj-uwIKT7tNjQ",
  authDomain: "crwn-db-98498.firebaseapp.com",
  databaseURL: "https://crwn-db-98498.firebaseio.com",
  projectId: "crwn-db-98498",
  storageBucket: "crwn-db-98498.appspot.com",
  messagingSenderId: "939702476254",
  appId: "1:939702476254:web:4299f0484b7f69fcb9914f",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
