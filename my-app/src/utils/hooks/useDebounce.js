import React from 'react'
import { useState } from 'react/cjs/react.development';

export default function useDebounce() {
 
    const [typingTimeout, setTypingTimeout] = useState("");

    function debounce(func, wait=1000){

        clearTimeout(typingTimeout);
        const timeout = setTimeout(() => func() , wait );
        setTypingTimeout(timeout);
    }

    return debounce;

}
