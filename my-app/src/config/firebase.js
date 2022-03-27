
// Import the functions you need from the SDKs you need
 import { initializeApp } from "firebase/app";
 import { getAuth } from "firebase/auth";
//import firebase from 'firebase';
//import {firebase} from "firebase";

// Your web app's Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyDSGb9hlNXuQ7MmKWofDXUfFHogdREMAuA",
        authDomain: "depthreactproject.firebaseapp.com",
        projectId: "depthreactproject",
        storageBucket: "depthreactproject.appspot.com",
        messagingSenderId: "176522789506",
        appId: "1:176522789506:web:bc1ccc31d95a5d221a6a9b"
    };
  
 

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
   //export const auth = getAuth(app);
    export const auth = getAuth(app);
    export default app;
    // firebase.initializeApp(firebaseConfig);
    // export {firebase}