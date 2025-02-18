// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBX5XRkPCK5XuF08R_IPsGEPYRGQ4Kj9mY",
  authDomain: "netflix-gpt-6a95d.firebaseapp.com",
  projectId: "netflix-gpt-6a95d",
  storageBucket: "storageBucket:netflix-gpt-6a95d.appspot.com",
  messagingSenderId: "110017403111",
  appId: "1:110017403111:web:b8ddbfdee4beb041f36a42",
  measurementId: "G-5Z0LJLRB44"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
