import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import {useParams} from 'react-router-dom';

const SmartPhone = () => {
    const {category} = useParams();
    const [products,setProducts] = useState([]);

useEffect(()=>{
    fetch(`https://electromart-server2.onrender.com/category/:category?category=${category}`)
    .then(res => res.json())
    .then( data =>{
        console.log(data)
        setProducts(data)
    })
},[category])
   

    return (
        <>
            <h1 className='text-2xl font-bold border-b-4 border-black mt-8'>{category}</h1>
            <p>This category has {products.length} products</p>
            
              <div className='grid gap-y-4 grid-cols-1 md:grid-cols-3 xl:grid-cols-7'>
              {   
              products.map(product => <ProductCard 
                        key={product._id}
                        product = {product}
                    ></ProductCard>)
              }
              </div>
            
            
        </>
    );
};

export default SmartPhone;