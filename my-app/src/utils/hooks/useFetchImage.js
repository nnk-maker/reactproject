import Axios from "axios";
import React, { useEffect, useState } from 'react'


const url = process.env.REACT_APP_UNSPLASH_URL
const secret = process.env.REACT_APP_UNSPLASH_KEY
export default function useFetchImage(page) {

    const[images, setImages] = useState([]);

    useEffect( () => {
        Axios.get(
            `${url}?client_id=${secret}&page=${page}`)
        .then(res => {
            setImages(res.data);
            //console.log(res.data);
        } );

    }, [page])
  
   

    return [images, setImages];
    


}
