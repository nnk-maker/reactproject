import React, { useEffect, useState } from 'react'
//import { useState } from 'react/cjs/react.development'

export default function useScroll() {
  
    const [scrollPosition, setScrollPosition] = useState(null);

    function handleScroll(){

        setScrollPosition(window.scrollY);

    }

    useEffect(() => {
      document.addEventListener('scroll',handleScroll) 
      return () => document.removeEventListener('scroll',handleScroll)
    }, []);

    return scrollPosition;

}
