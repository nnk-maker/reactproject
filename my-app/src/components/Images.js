
import React, { useState } from 'react';
import useFetchImage from "../utils/hooks/useFetchImage";
//import useScroll from "../utils/hooks/useScroll";
import Image from './Image';


export default function Images() {
    
    //const [images, setimages] = useState([ ]);
    const [page, setPage] = useState(1);
    const [images, setImages, errors] = useFetchImage(page);
    // const scrollPosition = useScroll();
   // const inputRef = useRef(null);



   /*  useEffect(()=>{
           inputRef.current.focus();
            // console.log(process.env);
            
           // console.log(varRef);
    
    },[]); */

    

    
    //const [newImageUrl, setNewImageUrl] = useState("");
    

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

  /*  function handleAdd() {
       
       if(newImageUrl != ""){
            setImages([newImageUrl, ...images,]);
            setNewImageUrl("");
       }
       
       //images.push();
       //console.log(tempImage);

   }
 */
   /* function handleChange(event) {
       setNewImageUrl(event.target.value);
       //console.log(event.target.value);
   } */

   
  return (
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
        
             {/*  <div className="flex justify-between my-5">
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
              </div>    */}
                       
       

    </section>
  );
}