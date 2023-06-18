import React from 'react';

const ProductCard = ({product}) => {
  console.log(product)
  const {image,productName,specs,shopName,quantity,category,price} = product;

   //hover:scale-125 duration-300
return (
  <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="">
    <img className="w-64 hover:scale-125 duration-300 rounded-xl" src={image} alt="Shoes"/>
  </figure>
  <div className="card-body items-center text-center">
  <div className="rating rating-sm">
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
</div>
    <h2 className="card-title">{productName}</h2>
    <p className='text-orange-500 mt-0'> <span className='text-2xl'>৳</span>:{price} TK</p>
    <div className="card-actions">
      <button className="btn btn-neutral">Add to cart</button>
    </div>
  </div>
</div>
    );
};

export default ProductCard;