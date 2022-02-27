import Axios from "axios";
import React, { useState } from 'react'


const url = process.env.REACT_APP_UNSPLASH_URL
const secret = process.env.REACT_APP_UNSPLASH_KEY
export default function useFetchImage() {

    const[images, setImages] = useState([]);
  
    Axios.get(
        `${url}?client_id=${secret}`)
    .then(res => {
        setImages(res.data);
        //console.log(res.data);
    } );

    return [images, setImages];
    


}
