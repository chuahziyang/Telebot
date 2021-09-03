import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const app = firebase.initializeApp({
  apiKey: "AIzaSyA73_a7gAAOxUPsYKP6dwkIAeDFsjoE9gU",
  authDomain: "biboapp2.firebaseapp.com",
  projectId: "biboapp2",
  storageBucket: "biboapp2.appspot.com",
  messagingSenderId: "881994095194",
  appId: "1:881994095194:web:8da9071afe64d0876e1663",
  measurementId: "G-RPL7ZPMQHC",
});

// app.firestore();
// Initialize Firebase
const db = app.firestore();

// const db2 = app.firestore();

export { db };
