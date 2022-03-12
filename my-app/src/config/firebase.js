
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
//import {firebase} from "firebase";



    // Your web app's Firebase configuration
        const firebaseConfig = {
            apiKey: "AIzaSyCw8F6awM1srZP3-96bxOyh843gYzVA21s",
            authDomain: "practiceappr.firebaseapp.com",
            projectId: "practiceappr",
            storageBucket: "practiceappr.appspot.com",
            messagingSenderId: "13232760352",
            appId: "1:13232760352:web:4d4ad1719ca17ae2937e45"
        };

        // Initialize Firebase
    const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

 


    


