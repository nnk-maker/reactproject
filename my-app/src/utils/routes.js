import Home from "../page/Home";
import React from "react";
import Gallery from "../page/Gallery";
import Login from "../page/Login";

export default [

    {

        path: '/',
        exact: true,
        components: <Home/>,

    },

    {
        path: '/gallery',       
        
        components: <Gallery/>,
    },
    {
        path: '/login',
        
        components: <Login/>,
    }


];