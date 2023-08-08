import React, { useEffect, useState } from 'react';
import { getStoredCart, removeFromDb } from '../LocalStorage/LocalStorage';
import OrderCard from '../OrderCard/OrderCard';
import { Cart } from '../Cart/Cart';


const Order = () => {
    const savedCart= [];
    const [cart,setCart] =useState([]);

    const removeItem =(id)=>{
      const updatedCart = cart.filter(remainingProduct => remainingProduct._id !== id);
      setCart(updatedCart);
      removeFromDb(id)
  }
   

    useEffect(()=>{
      const abortController = new AbortController();
      const storedCart = getStoredCart()
      const cartKeys = Object.keys(storedCart);
        fetch('https://electromart-server2.onrender.com/orders',{
          method:'POST',
          headers:{
            'content-type' : 'application/json'
          },
          body:JSON.stringify(cartKeys)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data.length)
          for(const id in storedCart){
            const addedProduct = data.find(product => product._id === id);
            if(addedProduct){
              const OrderedQuantity = storedCart[id];
              addedProduct["OrderedQuantity"] = OrderedQuantity;
              savedCart.push(addedProduct);
            }
          }
         setCart(savedCart);
        })
        return () => {
          abortController.abort()
        }
      },[])
    

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">

          <div className='w-full p-0 lg:p-12 lg:w-1/2'>
            {
                 cart.map(order=> <OrderCard
                     key ={order._id }
                      order = {order}
                     removeItem = {removeItem}
                      ></OrderCard>)
            }
           </div>

          <div className="card-body grid justify-items-center">
            <Cart cart = {cart}></Cart>
          </div>
        </div>
    );
};

export default Order;