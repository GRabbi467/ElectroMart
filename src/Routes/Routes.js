import {createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Component/Home/Home";
import Login from './../Component/Login/Login';
import AdminDash from "../Component/AdminDashboard/AdminDash";
import Addproducts from "../Component/AdminDashboard/AddProducts/Addproducts";
import ManageProducts from "../Component/ManageProducts/ManageProducts";
import ProductReport from "../Component/ProductReport/ProductReport";
import ProtectedRoute from "../Component/ProtectedRoute/ProtectedRoute";
import SignUp from "../Component/SignUp/SignUp";
import ProductDetails from "../Component/ProductDetails/ProductDetails";
import Order from "../Component/Order/Order";
import OrderCard from "../Component/OrderCard/OrderCard";
import ProceedOrder from "../Component/ProceedOrder/ProceedOrder";
import CategoryDataCard from "../Component/CategoryDataCard/CategoryDataCard";

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
            path:'/signup',
            element:<SignUp/>

        },
        {
            path:'/:id',
            element:<ProductDetails/>,
            loader:({params})=>fetch(`http://localhost:5000/products/${params.id}`)
        },
        {
            path:'/orders',
            element:<Order/>
        },
        {
            path:'/orders/proceed-order',
            element :<ProtectedRoute><ProceedOrder/></ProtectedRoute>
        },
        // {
        //     path:'/categories/category',
        //     element:<CategoryDataCard/>
        // }
    ]
    
    
},
{
    path:'/dashboard',
    element:<ProtectedRoute><AdminDash></AdminDash></ProtectedRoute>,
    children:[
        
        {
            path:'/dashboard/add-products',
            element:<Addproducts></Addproducts>,
        },
        {
            path:'/dashboard/manage-products',
            element:<ManageProducts></ManageProducts>
        },
        {
            path:'/dashboard/product-report',
            element:<ProductReport></ProductReport>
        }
        
    ]
}
    
])

