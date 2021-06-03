
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBBcw-OQ8qKLLJwxHg2mKw97fasCnOkb3U",
    authDomain: "react-app-courses-266ec.firebaseapp.com",
    projectId: "react-app-courses-266ec",
    storageBucket: "react-app-courses-266ec.appspot.com",
    messagingSenderId: "615530372459",
    appId: "1:615530372459:web:433bb56abe031ac5f3402e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export {
    db,
    googleAuthProvider,
    firebase
  }