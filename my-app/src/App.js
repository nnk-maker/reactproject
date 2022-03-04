//import React, { useEffect, useRef, useState } from "react";
import "./assets/css/style.css"
import Images from "./components/Images";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

//import {BrowserRouter, BrowserRouter as Route, Link, Routes} from  "react-router-dom";

function Gallery(){

  return (

    <section className="flex justify-center">
           
                    <div className="w-10/12">
                      <div className="text-center">
                       {/*  <div className="my-4">{title}</div> */}
                    
                        <Images />

                      </div>
                      
                    </div>
            </section>
  );


}

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
                      <Route path="/gallery" element={<Gallery />} />
                  </Routes>
                    
                   
                </Router>
                  
           );
    
}  

 


export default App;