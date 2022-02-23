import  Axios  from "axios";
import React, { PureComponent, useEffect, useLayoutEffect, useRef, useState } from 'react';
import Image from './Image';


export default function Images() {
    
    const [images, setimages] = useState([ ]);

const inputRef = useRef(null);
const varRef = useRef(images.length);
const axios = require('axios');
    useEffect(()=>{
           inputRef.current.focus()
           Axios.get("https://api.unsplash.com/photos/?client_id=Q6F2UZogduuqcTc6rRGUs6ZOIo8yhNIpP4tiJHm0CrE")
           .then(res => {
               setimages(res.data);
               //console.log(res.data);
           } );
          // console.log(varRef);
    
    },[]);

    //const [updateCount, setupdateCount] = useState(0);
    useEffect(()=>{
        varRef.current =  varRef.current  + 1;
        //setupdateCount(updateCount + 1);
        //varRef.current = images.length;
       // console.log("count");

    });

    const [myName, setMyName] = useState("krishna");

    useEffect(()=>{
        
        console.log("I am use effect 1");
       
    });

    useLayoutEffect(()=>{
        setMyName("Reactjs");
        console.log("I am use effect 2");
       
    });

    const [newImageUrl, setNewImageUrl] = useState("");
    

   function handleRemove(index) {
      // console.log(images.filter((image,i) => i != index));
       //setimages(images.filter((image,i) => i != index));

      // console.log([...images.slice(0,index), ...images.slice(index+1, images.length)]);
       setimages([
           ...images.slice(0,index), 
           ...images.slice(index+1, 
            images.length)]);

        console.log("I am changing state");
   }

  

   /* function handleMouseEnter() {
       //console.log(e.target);
       setIsHovering(true);
   } */

   /* function crossClass() {
        return `fas fa-times absolute right-0 cursor-pointer opacity-25 hover:opacity-100 ${
            isHovering ? "" : "hidden"
        }`;
   } */

   /* function handleMouseLeave() {

    setIsHovering(false);
       
   } */

   function ShowImage(){
           return images.map((img,index) => ( 
                <Image 
                    image={img.urls.regular} 
                    handleRemove={handleRemove}  
                    index={index} 
                    key={index}/>
                ));

   }

   function handleAdd() {
       
       if(newImageUrl != ""){
            setimages([newImageUrl, ...images,]);
            setNewImageUrl("");
       }
       
       //images.push();
       //console.log(tempImage);

   }

   function handleChange(event) {
       setNewImageUrl(event.target.value);
       //console.log(event.target.value);
   }

   
  return (
    <section>
       {/*  <h1>{varRef.current} Images</h1> */}
       <p>my name is {myName} </p>
        <p>component is updated {varRef.current} times</p>
        <div className="flex flex-wrap justify-center">    
              <ShowImage />  
        </div>
              <div className="flex justify-between my-5">
                <div className="w-full">
                    <input type="text" 
                    id="inputBox"
                    ref={inputRef}
                    className="p-2 border border-gray-800 shadow rounded w-full"
                    value={newImageUrl}
                    onChange = {handleChange}
                    />
                </div>

                    <div className="">
                        <button 
                            disabled={newImageUrl == ""}
                            className= {`p-2 text-white ml-2 ${newImageUrl != "" ? "bg-green-600": "bg-green-300"}`} 
                            onClick={handleAdd}>Add</button>
                    </div>    
              </div>   
                       
       

    </section>
  );
}