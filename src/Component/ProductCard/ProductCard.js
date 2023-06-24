import React from 'react';

const ProductCard = ({product}) => {
  const {image,productName,specs,shopName,quantity,category,price} = product;
 
   //hover:scale-125 duration-300
return (
  <div className="card w-48 bg-base-100 shadow hover:">
  <figure className="">
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
    <div className="card-actions">
    <button className='w-36 bg-blue-500 hover:bg-blue-700 hover:scale-110 duration-300 text-white rounded-full px-4 py-1.5 font-medium uppercase '>Add to cart</button>
    </div>
  </div>
</div>
    );
};

export default ProductCard;