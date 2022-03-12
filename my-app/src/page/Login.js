import React from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";



export default function Login() {
    function handleForm(e){
        e.preventDefault();
        //console.log("submitted");
        const auth = getAuth();
        signInWithEmailAndPassword(auth, "practiceappr@email.com", "password")
        .then((userCredential) => {
              // Signed in 
            const user = userCredential.user;
            
            console.log("this is " + user);
            // ...
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
                    Login
                  </button>
                </div>

            </form>  

          </div>
  
        </div> 
    );
  }
