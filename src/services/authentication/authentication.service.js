/* import * as firebase from "firebase";
const loginRequest = (email, password) =>
  firebase.auth().signInWithEmailAndPassword(email, password); */
/* eslint-disable prettier/prettier */
import { signInWithEmailAndPassword } from "firebase/auth";

export const loginRequest = (auth, email, password) =>
  signInWithEmailAndPassword(auth, email, password);
