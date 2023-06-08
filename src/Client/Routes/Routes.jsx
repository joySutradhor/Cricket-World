import React from 'react';

import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from '../Layout/Main';
import Register from '../Pages/Register/Register';
import Login from '../Pages/Login/Login';
import Banner from '../Pages/Home/Banner';

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children : [
       {
        path : "/" ,
        element: <Banner></Banner>
       },
       {
        path : "/login" ,  
        element: <Login></Login>
       },
       {
        path : "/register" ,
        element : <Register></Register>
       },
       
      ]
    },
   
     
  ]);

