import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import "firebase/compat/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrZU8jSPF9on4Tasn2JqCYel2h7kYqcK0",
  authDomain: "get-it-done-100f7.firebaseapp.com",
  projectId: "get-it-done-100f7",
  storageBucket: "get-it-done-100f7.appspot.com",
  messagingSenderId: "828063423098",
  appId: "1:828063423098:web:cdbd0d34b32b090142b9c3" 
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

export const createUserProfile = async (user, additionalData) => {
if (!user) return;

const userRef = firestore.doc(`users/${user.uid}`)

const snapShot = await userRef.get();

//if the user does not already exist in the forestore db, do this
if(!snapShot.exists) {
  const {email} = user; 
  const {displayName} = additionalData;
  const createdAt = new Date();

  try {
    await userRef.set({
      displayName,
      email,
      createdAt,
    })

  } catch (err) {
    console.log("ERROR CREATING USER",err)
  }
 }
 //we still userRef from this code in case we need it elsewhere later on
 return userRef;

};