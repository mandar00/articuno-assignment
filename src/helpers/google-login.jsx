import { auth } from "../misc/firebase";
import firebase from "firebase/app";

export async function GoogleLogin() {
  try {
    const provider = new firebase.auth.GoogleAuthProvider();

    const results = await auth.signInWithPopup(provider);
    if (results) {
      console.log(results);
    }
    alert("google signed in");
  } catch (err) {
    alert(err.message);
  }
}
