import React from 'react';

import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from '../Layout/Main';

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children : [
       {
        path : "/" ,
        element: <p>There is last projects</p>
       }, 

      ]
    },
  ]);
