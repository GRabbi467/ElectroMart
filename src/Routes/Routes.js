import {createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Component/Home/Home";
import Login from './../Component/Login/Login';
import AdminDash from "../Component/AdminDashboard/AdminDash";

export const router = createBrowserRouter([{
    path:'/',
    element:<Main></Main>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/dashboard',
            element:<AdminDash></AdminDash>
        }
    ]
}
    
])

