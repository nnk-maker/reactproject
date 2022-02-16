import React, { PureComponent, useEffect, useState } from 'react';



export default function Images() {
    
    const [images, setimages] = useState([
        "https://images.unsplash.com/photo-1643685623589-625d36ffb709?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
    "https://images.unsplash.com/photo-1644866679372-11af353e9b0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    "https://images.unsplash.com/photo-1644866679372-11af353e9b0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    "https://images.unsplash.com/photo-1644871829528-20cc68a1bf17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    "https://images.unsplash.com/photo-1587870306141-4f19861e6c73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80"


    ]);


    const [newImageUrl, setNewImageUrl] = useState("");

   function handleRemove(index) {
       console.log(images.filter((image,i) => i != index));
       setimages(images.filter((image,i) => i != index));
   }

   function ShowImage(){
           return images.map((image,index) => {
                return(
                    <div className="w-1/3 my-4 flex justify-center" key={index}>
                        <img src={image} width="150" onClick={()=>handleRemove(index)}/>
                    </div>
                );
            });

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
        <div className="flex flex-wrap justify-center">    
              <ShowImage />  
        </div>
              <div className="flex justify-between my-5">
                <div className="w-full">
                    <input type="text" className="p-2 border border-gray-800 shadow rounded w-full"
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