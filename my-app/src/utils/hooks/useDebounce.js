import React from 'react'
import { useState } from 'react/cjs/react.development';

export default function useDebounce(func, wait=1000) {
 
    const [typingTimeout, setTypingTimeout] = useState("");

    function debounce(text){

        clearTimeout(typingTimeout);
        const timeout = setTimeout(() => {
            func();//setSearchTerm(text);
        }, wait );
        setTypingTimeout(timeout);
    }

    return debounce;

}
