import React from 'react';
import {  useNavigate } from 'react-router-dom';

const ProductCard = ({product}) => {
const {image,productName,specs,shopName,quantity,category,price,_id} = product;
 const navigate = useNavigate();
const cartPage=(id)=>{
 navigate(`/${id}`)
}
   
return (
  <div className="card  bg-base-100 drop-shadow-md rounded-none">
  <figure onClick={()=>cartPage(_id)} className="">
    <img className="w-64 hover:scale-125 duration-300 rounded-xl" src={image} alt="Shoes"/>
  </figure>
  <div className=" p-0 m-0 card-body items-center text-center">
  <div className="rating rating-sm">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div>
    <h2 className="card-title leading-none">{productName}</h2>
    <p className='text-orange-500 m-0 '> <span className='text-2xl leading-none'>৳</span>:{price} TK</p>
  </div>
</div>
    );
};

export default ProductCard;