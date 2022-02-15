import React, { PureComponent, useEffect, useState } from 'react';



export default function Images() {
    
   const Images = [

    "https://images.unsplash.com/photo-1643685623589-625d36ffb709?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
    "https://images.unsplash.com/photo-1644866679372-11af353e9b0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    "https://images.unsplash.com/photo-1644871829528-20cc68a1bf17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    "https://images.unsplash.com/photo-1587870306141-4f19861e6c73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80"


   ];

   function ShowImage(){
           return Images.map(image => {
                return(
                    <div>
                        <img src={image} width="150"/>
                    </div>
                );
            })

   }

   
  return (
    <section>
        <div className="flex justify-center">    
              <ShowImage />     
                       
        </div>

    </section>
  );
}