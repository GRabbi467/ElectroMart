import React, { useContext } from 'react';
import { AuthContext } from './../AuthContext/AuthProvider';
import {useQuery } from '@tanstack/react-query';
import { AiOutlineDelete} from "react-icons/ai";


const ManageProducts = () => {
    const {user} = useContext(AuthContext);

    const url = `http://localhost:5000/products?email=${user?.email}`;

    const {data: products =[]} = useQuery({
        queryKey:['products',user?.email],
        queryFn:async ()=>{
            const res = await fetch(url)
            const data = await res.json();
            return data[1];
        },     
    })
    
    return (
        
        <div className="overflow-x-auto">
          
  <table className="table">
    <thead>
      <tr className="">
        <th>Serial</th>
        <th>Name</th>
        <th>Quantity</th>
        <th>Price</th>
        <th>Category</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {
        products.map((product,idx) =>
            <tr className="bg-base-200 text-xl ">
        <th>{idx+1}</th>
        <td>{product.productName}</td>
        <td>{product.quantity}</td>
        <td>{product.price} TK</td>
        <td>{product.category}</td>
        <td><AiOutlineDelete className='text-3xl text-red-600'></AiOutlineDelete></td>
            </tr>
            )
      }
    </tbody>
  </table>
</div>
    );
};

export default ManageProducts;