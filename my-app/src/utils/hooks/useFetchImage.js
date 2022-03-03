import { data } from "autoprefixer";
import Axios from "axios";
import React, { useEffect, useState } from 'react'


const api = process.env.REACT_APP_UNSPLASH_API

const secret = process.env.REACT_APP_UNSPLASH_KEY
export default function useFetchImage(page, searchTerm) {

    const[images, setImages] = useState([]);
    const[errors, setErrors] = useState([]);
    const[isLoading, setIsLoading] = useState(false);

    function fetch(res){
        
        const url = searchTerm === null ? 'photos?' : `search/photos?query=${searchTerm}&`
        Axios.get(
            `${api}/${url}client_id=${secret}&page=${page}`
            ).then(res => {

                if(searchTerm === null){
                    fetchRandom(res);
                } else {
                    fetchSearch(res);
                }

               
                    
                    setIsLoading(false);
            //console.log(res.data);
        } ).catch((e) => {
                setErrors(["unable to fetch images"]);
                setIsLoading(false);
        });
    }


    function fetchSearch(res){

       /*  Axios.get(
            `${api}/search/photos?client_id=${secret}&page=${page}&query=${searchTerm}`
            ) */
            if(page > 1) {
                setImages([...images,...res.data.results]);
            } else {
                setImages([...res.data.results]);
            }
           

    }

    function fetchRandom(res) {
          

                    setImages([...images, ...res.data]);
                    //setIsLoading(false);
          
    }

    //console.log(searchTerm);
    useEffect( (res) => {
        setIsLoading(true);
       // const url = searchTerm === null ? "photos" : "search/photos";
      /*  if(searchTerm != null) {
            fetchSearch();
       } else {
            fetchRandom();
       } */
        
       fetch(res);
    }, [page, searchTerm]);

    /* useEffect(() => {
        
        if(searchTerm === null) return;
        setIsLoading(true);
        fetch();
        //fetchSearch();

    },[searchTerm]); */


  
   

    return [images, setImages, errors, isLoading];
    


}
