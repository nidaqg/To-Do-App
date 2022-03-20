import firebase from "firebase/compat/app";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrZU8jSPF9on4Tasn2JqCYel2h7kYqcK0",
  authDomain: "get-it-done-100f7.firebaseapp.com",
  projectId: "get-it-done-100f7",
  storageBucket: "get-it-done-100f7.appspot.com",
  messagingSenderId: "828063423098",
  appId: "1:828063423098:web:cdbd0d34b32b090142b9c3",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
