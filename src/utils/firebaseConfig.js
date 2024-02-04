import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDV9HxttWHRjEgU14euBemOrXRb_LRSekQ",
  authDomain: "my-meals-app-2d85d.firebaseapp.com",
  projectId: "my-meals-app-2d85d",
  storageBucket: "my-meals-app-2d85d.appspot.com",
  messagingSenderId: "236556680367",
  appId: "1:236556680367:web:f19f83755fa04aba0aa85a",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
