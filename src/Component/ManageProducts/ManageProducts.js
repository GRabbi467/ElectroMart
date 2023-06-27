import React, { useContext } from 'react';
import { AuthContext } from './../AuthContext/AuthProvider';
import {useQuery } from '@tanstack/react-query';
import { AiOutlineDelete} from "react-icons/ai";
import { AiOutlineEdit} from 'react-icons/ai';
import { LuEdit } from "react-icons/lu";

const ManageProducts = () => {
    const {user} = useContext(AuthContext);
    

    const url = `http://localhost:5000/products?email=${user?.email}`;

    const {data: products =[], refetch} = useQuery({
        queryKey:['products',user?.email],
        queryFn:async ()=>{
            const res = await fetch(url)
            const data = await res.json();
            return data.productsbyEmail;
        },     
    })
 
    

     

    const handleDelete=(id,productname)=>{
     const consent =  window.confirm(`Are you want to delete ${productname}?`)
 
      if(consent){
        fetch(`http://localhost:5000/products/${id}`,{
        method:"DELETE"
      })
      .then(res => res.json())
      .then(data=>{
       
      })
      }
    }

    const handleEditPrice =(id)=>{
      var num = prompt("Enter Updated Price :");
      const Updatedprice = {price : num}
      if(num >0)
      fetch(`http://localhost:5000/products/${id}`,{
        method:'PATCH',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(Updatedprice)
      })
      .then(res => res.json())
      .then(data=>{
       
      })
    }


    const handleEditQuantity =(id)=>{
      var num = prompt("Enter Updated Quantity:");
      const updataedQuantity = {quantity:num}
      if(num >0)
      fetch(`http://localhost:5000/products/${id}`,{
        method:'PATCH',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(updataedQuantity)
      })
      .then(res => res.json())
      .then(data=>{
       
      })
    }
    
    return (    
   
          
  <div className="">
  <table className="table w-full ">
    <thead>
      <tr className="text-xl">
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
            <tr className="bg-base-200 text-md ">
        <th>{idx+1}</th>
        <td>{product.productName}</td>
        <td>{product.quantity}<LuEdit onClick={()=>handleEditQuantity(product._id)} className='text-lg inline ml-2 text-blue-900 hover:border-2 border-blue-400'/></td> 
        <td className='flex'>{product.price} TK<AiOutlineEdit className='text-xl ml-4 text-blue-900 hover:border-2 border-blue-400' 
        onClick={()=>handleEditPrice(product._id)}/></td>
        <td>{product.category}</td>
        <td><AiOutlineDelete onClick={()=>handleDelete(product._id,product.productName)} className='text-3xl  text-red-600 hover:bg-red-400 hover:rounded-full'></AiOutlineDelete></td>
            </tr>
            )
      }
    </tbody>
  </table>
  </div>

    );
};

export default ManageProducts;