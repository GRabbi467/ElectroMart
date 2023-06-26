import {React,useState,useEffect} from 'react';
import ProductCard from '../ProductCard/ProductCard';


const ProductAll = () => {
    const [products,setProducts] = useState([]);
   

    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => 
            { 
             setProducts(data[0]); 
            })
    },[])
    
    return (
            <div className='grid gap-y-4 grid-cols-1 md:grid-cols-3 xl:grid-cols-7'>
                {
                products.map(product => <ProductCard 
                    key={product._id}
                    product = {product}
                ></ProductCard>)
                }
            </div>
    
    );
};

export default ProductAll;