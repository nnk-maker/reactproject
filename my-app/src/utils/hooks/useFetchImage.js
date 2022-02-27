import { data } from "autoprefixer";
import Axios from "axios";
import React, { useEffect, useState } from 'react'


const url = process.env.REACT_APP_UNSPLASH_URL
const secret = process.env.REACT_APP_UNSPLASH_KEY
export default function useFetchImage(page) {

    const[images, setImages] = useState([]);
    const[errors, setErrors] = useState([]);
    const[isLoading, setIsLoading] = useState(false);

    useEffect( () => {
        setIsLoading(true);
        Axios.get(
            `${url}?client_id=${secret}&page=${page}`)
        .then(res => {
            setImages([...images, ...res.data]);
            setIsLoading(false);
            //console.log(res.data);
        } ).catch((e) => {
                setErrors(["unable to fetch images"]);
                setIsLoading(false);
        });

    }, [page])
  
   

    return [images, setImages, errors, isLoading];
    


}
