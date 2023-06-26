import React from 'react';
import { FaTrashAlt } from "react-icons/fa";
import { removeFromDb } from '../LocalStorage/LocalStorage';


const OrderCard = ({order,removeItem}) => {
    const {_id,productName,price,OrderedQuantity,image,quantity} = order;
   
    return (
        <div className='flex justify-around'>
            <img className='w-40 rounded-xl p-0 lg:p-4' src={image} alt="" />
            <div className="mt-6">
                <p className='text-2xl'>{productName}</p>
                <p className='text-green-900 font-bold'>Price : {price} Taka </p>
                <p>Ordered: {OrderedQuantity}</p>
                <p>Stock Available : {quantity}</p>
            </div>
           <div className='mt-14'>
           <button
            className='btn btn-circle btn-outline hover:bg-red-600 hover:text-white'
            onClick={()=>removeItem(_id)}
            ><FaTrashAlt className='text-2xl'/></button>
           </div>
          
        </div>
    );
};

export default OrderCard;