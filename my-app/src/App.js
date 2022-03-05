//import React, { useEffect, useRef, useState } from "react";
import "./assets/css/style.css"
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import routes from "./utils/routes";


//import {BrowserRouter, BrowserRouter as Route, Link, Routes} from  "react-router-dom";



/* function Home() {
  return (
    <p>
      Home <Link to="/gallery">Gallery</Link>

    </p>
  );
} */

 function App() {
    /* const [title, setTitle] = useState("Hellow React"); */
          
    return (
                <Router>

                    <Routes>

                        {

                          routes.map(route => (

                            <Route path={route.path} 
                                  exact={route.exact} 
                                  element={route.components}                                  
                                  />  

                          ))

                        }                       
                                
                      
                         {/*  <Route path="/gallery"  element={<Gallery />} />

                          <Route path="/login" element={<Login />} /> */}

                    </Routes>                                     
                   
                </Router>
                  
           );
    
}  

 


export default App;