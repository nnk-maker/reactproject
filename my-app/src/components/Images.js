
import React, { useEffect, useState } from 'react';
import useFetchImage from "../utils/hooks/useFetchImage";
import useScroll from '../utils/hooks/useScroll';
//import useScroll from "../utils/hooks/useScroll";
import Image from './Image';
import Loading from './Loading';


export default function Images() {
    
    
    const [page, setPage] = useState(1);
    const [images, setImages, errors, isLoading] = useFetchImage(page);
    const scrollPosition = useScroll();

    useEffect(() => {
        if(scrollPosition >= document.body.offsetHeight - window.innerHeight){
            setPage(page + 1);
        }
        /* console.log(
            scrollPosition, 
            window.innerHeight, 
            document.body.offsetHeight); */
       
    }, [scrollPosition]);
    
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

 if(isLoading) 
    return <Loading/>
  
   
  return (
    <section>
        {
            errors.length > 0 &&
            <div className="flex h-screen">
                <p className="m-auto">{errors[0]}</p>
 
            </div>
        }
       {/* {scrollPosition} */} 
      
       
        <div className="flex flex-wrap" >    
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