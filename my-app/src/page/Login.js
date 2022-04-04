import React, { useState } from 'react'
import { signInWithEmailAndPassword } from "firebase/auth";
//import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
//import {firebase} from './Firbase/firebase';
//import app from '../config/firebase';
import { auth } from "../config/firebase";

//import app from 'firebase/compat/app';

export default function Login() {
    const [isLoading, setIsLoading] = useState(false);
    
    function handleForm(e){
        if (isLoading) return;
        setIsLoading(true);
        e.preventDefault();
        //console.log("submitted");
       // const auth = getAuth(app);
        
        
          signInWithEmailAndPassword(auth, "krishna@email.com", "password")
          .then( (res) => {
            console.log(res);
            setIsLoading(false);
             
          } 
            /* (userCredential) => {
                 
                  console.log(res);
                  setIsLoading(false);
                  //alert("signed in")
                  const user = userCredential.user;

                  console.log("this is the handleForm" + user);
                  
                
              } */
          ).catch (err => {
            console.log(err);
            // alert("error")
              //document.getElementById("demo").innerHTML = err.message;
          }) 

    }
    return ( 
      <div className="flex h-screen bg-gray-200">  
          <div className="m-auto w-1/3 text-white flex flex-wrap justify-center shadow-lg rounded-lg bg-gradient-to-br from-indigo-900 to-indigo-700">            
            <form className="m-5 w-10/12" onSubmit={handleForm}>
                <h1 className="w-full text-4xl tracking-widest text-center my-6">
                    Login
                </h1>  

                <div className="w-full my-6">
                  <input type="email"
                          className="p-2 rounded shadow w-full text-black"
                          placeholder="Email or Username"
                          name="email"/>
                </div>

                <div className="w-full my-6">
                  <input type="password"
                          className="p-2 rounded shadow w-full text-black"
                          placeholder="Password"
                          name="password"/>
                </div>

                <div className="w-full my-10">
                  <button type="submit"
                          className="p-2 rounded shadow w-full bg-gradient-to-tr from-yellow-600 bg-yellow-400 text-black">

                      {
                        isLoading ? <i className = "fas fa-circle-notch fa-spin "></i>
                        : ( 
                             "Login" 
                          )
                      }                    
                    
                  </button>
                </div>

            </form>  

          </div>
  
        </div> 
    );
  }
