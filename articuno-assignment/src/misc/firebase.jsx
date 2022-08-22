import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBRAmwttyOSwGkwzsvx00I5rTNx2eauSS8",
  authDomain: "articuno-5e4b2.firebaseapp.com",
  projectId: "articuno-5e4b2",
  storageBucket: "articuno-5e4b2.appspot.com",
  messagingSenderId: "476393492948",
  appId: "1:476393492948:web:ec3a087f4e746f83dbc641",
};

const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();
export var db = firebase.firestore();
export const storage = firebase.storage();
