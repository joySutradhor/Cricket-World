import React from 'react';

import {
  createBrowserRouter,
} from "react-router-dom";
import Main from '../Layout/Main';
import Register from '../Pages/Register/Register';
import Login from '../Pages/Login/Login';
import Banner from '../Pages/Home/Banner';
import Home from '../Pages/Home/Home';
import PopularClass from '../Pages/Classes/PopularClass';
import Dashboard from '../../Dashboard/Dashboard';
import SelectedClass from '../../Dashboard/Pages/SelectedClass';
import PrivateRoute from './../Shared/PrivateRoute';
import AllUsers from '../../Dashboard/Admin/AllUsers';
import AddClass from '../../Dashboard/Instructor/AddClass';
import ManageClass from '../../Dashboard/Admin/ManageClass';
import MyClass from '../../Dashboard/Instructor/MyClass';
import Instructor from '../Pages/Instructor/Instructor';


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/classes",
        element: <PopularClass></PopularClass>
      },

      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path : "instructors" ,
        element : <Instructor></Instructor>
      }

    ]
  },
  {
    path: "/dashboard",
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: "selectedClass",
        element: <SelectedClass></SelectedClass>
      },
      {
        path: "allusers",
        element: <AllUsers></AllUsers>
      },
      {
        path: "addClass",
        element: <AddClass></AddClass>
      },
      {
        path : "myClass",
        element : <MyClass></MyClass>
      } , 
      {
        path : "manageClass" ,
        element : <ManageClass></ManageClass>
      }
    ]
  }


]);

