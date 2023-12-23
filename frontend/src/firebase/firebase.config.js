// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9AHubKBGD-tEETvenM1sf_uDy_i42g-4",
  authDomain: "read-it-mern.firebaseapp.com",
  projectId: "read-it-mern",
  storageBucket: "read-it-mern.appspot.com",
  messagingSenderId: "1071877307871",
  appId: "1:1071877307871:web:87627775d91f494a86d86a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default  app;