import React, { PureComponent, useEffect, useRef, useState } from 'react';
import Image from './Image';


export default function Images() {
    
    const [images, setimages] = useState([
        "https://images.unsplash.com/photo-1643685623589-625d36ffb709?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
    "https://images.unsplash.com/photo-1644866679372-11af353e9b0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    "https://images.unsplash.com/photo-1644866679372-11af353e9b0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    "https://images.unsplash.com/photo-1644871829528-20cc68a1bf17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    "https://images.unsplash.com/photo-1587870306141-4f19861e6c73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80"


    ]);

const inputRef = useRef(null);
const varRef = useRef(images.length);

    useEffect(()=>{
            inputRef.current.focus()
           
           console.log(varRef);
    
    },[]);

    //const [updateCount, setupdateCount] = useState(0);
    useEffect(()=>{
        varRef.current =  varRef.current  + 1;
        //setupdateCount(updateCount + 1);
        //varRef.current = images.length;
       // console.log("count");

    });

    const [newImageUrl, setNewImageUrl] = useState("");
    

   function handleRemove(index) {
      // console.log(images.filter((image,i) => i != index));
       //setimages(images.filter((image,i) => i != index));

       console.log([...images.slice(0,index), ...images.slice(index+1, images.length)]);
       setimages([...images.slice(0,index), ...images.slice(index+1, images.length)]);
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
           return images.map((img,index) => <Image image={img} handleRemove={handleRemove}  index={index} key={index}/>);

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