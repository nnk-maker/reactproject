import { data } from "autoprefixer";
import Axios from "axios";
import React, { useEffect, useState } from 'react'


const api = process.env.REACT_APP_UNSPLASH_API

const secret = process.env.REACT_APP_UNSPLASH_KEY
export default function useFetchImage(page, searchTerm) {

    const[images, setImages] = useState([]);
    const[errors, setErrors] = useState([]);
    const[isLoading, setIsLoading] = useState(false);
    //console.log(searchTerm);
    useEffect( () => {
        setIsLoading(true);
       // const url = searchTerm === null ? "photos" : "search/photos";
        Axios.get(
            `${api}/photos?client_id=${secret}&page=${page}`)
            .then(res => {
               
                  setImages([...images, ...res.data]);
                  setIsLoading(false);
            //console.log(res.data);
        } ).catch((e) => {
                setErrors(["unable to fetch images"]);
                setIsLoading(false);
        });

    }, [page]);

    useEffect(() => {
        
        if(searchTerm === null) return;
        Axios.get(
            `${api}/search/photos?client_id=${secret}&page=${page}&query=${searchTerm}`)
            .then(res => {
               
                    setImages([...res.data.results]);
                    setIsLoading(false);
            //console.log(res.data);
        } ).catch((e) => {
                setErrors(["unable to fetch images"]);
                setIsLoading(false);
        });

    },[searchTerm]);


  
   

    return [images, setImages, errors, isLoading];
    


}
