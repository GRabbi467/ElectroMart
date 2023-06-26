import React from 'react'
import { Link } from 'react-router-dom';


 const Cart = ({cart}) => {
     
     let total = 0; let shipping = 30,tax = 0;
     for( const product of cart){
        total += parseInt(product.price)
        shipping = 50*cart.length;
        tax = parseFloat((total*0.1).toFixed(2));
     }
  return (
    <div className='grid lg:content-between '>
      <div className='text-xl'> 
    <h4 className='text-3xl text-black mb-5  border-b-4 pb-1 border-black'>Order Summary</h4>
    <p>Selected Items : {cart.length}</p>
    <p>Total Price: {total} Taka</p>
    <p>Total Shipping:{shipping} </p>
    <p>Tax:{total*(.2)}</p>
    <h3>Grand Total: {total+shipping+tax} Taka</h3>
    </div>

    <div className = 'grid grid-column gap-y-4 mt-10'>
      <div>

      </div>
    <Link to= '/orders/proceed-order' className='btn btn-secondary btn-neutral bg-zinc-800 hover:bg-zinc-900'>Proceed Order</Link>
    </div>

    </div>
    
  )
}

export {Cart};