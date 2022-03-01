
import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import useFetchImage from "../utils/hooks/useFetchImage";
//import useScroll from '../utils/hooks/useScroll';
//import useScroll from "../utils/hooks/useScroll";
import Image from './Image';
import Loading from './Loading';


export default function Images() {
    
    
    const [page, setPage] = useState(1);
    
    const [searchTerm, setSearchTerm] = useState(null);

    const [images, setImages, errors, isLoading] = useFetchImage(page, searchTerm);

    //const scrollPosition = useScroll();

    /* useEffect(() => {
        if(scrollPosition >= document.body.offsetHeight - window.innerHeight){
            setPage(page + 1);
        }
               
    }, [scrollPosition]); */
    
   function handleRemove(index) {
           setImages([
           ...images.slice(0,index), 
           ...images.slice(index+1, 
            images.length)]);

        
   }


   function ShowImage(){
           return(
            <InfiniteScroll 
                dataLength={images.length} 
                next={() => setPage(page + 1)}
                hasMore={true}
                className="flex flex-wrap"> 
                {
                    images.map((img,index) => ( 
                            <Image 
                                image={img.urls.regular} 
                                handleRemove={handleRemove}  
                                index={index} 
                                key={index}/>
                            ))
                }

            </InfiniteScroll>
            )

   }

 function handleInput(e){

    setSearchTerm(e.target.value);
 }
  
   
  return (
    <section>
        <div className="my-5">
           <input type="text" 
                  onChange={handleInput} 
                  className="w-full border rounded shadow p-2"
                  placeholder="Search Photos Here "
                  />
        </div>

         {   errors.length > 0 &&
            <div className="flex h-screen">
                <p className="m-auto">{errors[0]}</p>
 
            </div>
        }
       {/* {scrollPosition} */} 
              
              <ShowImage />  
      
        {   isLoading && <Loading/> }
        {/* {
            errors.length === 0 && (
                <button onClick={()=>{setPage(page + 1)}}>Load More</button>
                )

        } */}      

    </section>
  );
}