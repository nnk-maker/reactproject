
import React, { useState } from 'react';
import useFetchImage from "../utils/hooks/useFetchImage";
//import useScroll from "../utils/hooks/useScroll";
import Image from './Image';


export default function Images() {
    
    
    const [page, setPage] = useState(1);
    const [images, setImages, errors, isLoading] = useFetchImage(page);
    
   function handleRemove(index) {
           setImages([
           ...images.slice(0,index), 
           ...images.slice(index+1, 
            images.length)]);

        
   }


   function ShowImage(){
           return images.map((img,index) => ( 
                <Image 
                    image={img.urls.regular} 
                    handleRemove={handleRemove}  
                    index={index} 
                    key={index}/>
                ));

   }

 
  
   
  return isLoading ?  
    <div className="flex h-screen">
        <p className="m-auto">
            <i className="fas fa-circle-notch fa-spin text-5xl text-yellow-400"/>
        </p>
    </div> : (
    <section>
        {
            errors.length > 0 &&
            <div className="flex h-screen">
                <p className="m-auto">{errors[0]}</p>
 
            </div>
        }
       {/* {scrollPosition} */} 
      
       
        <div className="gap-0" style={{ columnCount: 5 }}>    
              <ShowImage />  
        </div>
        {
            errors.length === 0 && (
                <button onClick={()=>{setPage(page + 1)}}>Load More</button>
                )

        }
        
                       
       

    </section>
  );
}