import {React,useState,useEffect} from 'react';
import ProductCard from '../ProductCard/ProductCard';


const ProductAll = () => {
    const [products,setProducts] = useState([]);
    const [page,setPage] = useState(0);
    const [size,setSize] = useState(5);
    const [count,setCount] = useState(0);
   
    useEffect(()=>{
        fetch(`http://localhost:5000/products?page=${page}&size=${size}`)
        .then(res => res.json())
        .then(data => 
            { 
             setProducts(data.allProducts);
             setCount(data.count) 
            })
    },[page,size])
    const pages = Math.ceil( count / size);
    
    return (
        <>
        <h1 className='text-2xl font-bold border-b-4 border-black mt-8'><span className='bg-black text-white p-2 rounded-t-2xl'>All Products</span></h1>
        <div className='grid gap-y-4 grid-cols-1 md:grid-cols-3 xl:grid-cols-7'>
                {
                products.map(product => <ProductCard 
                    key={product._id}
                    product = {product}
                ></ProductCard>)
                }
            </div>

             <div className="pagination text-center border">
             {
               [...Array(pages).keys()].map(number => <button
                key = {number}
                className={page === number && 'selected'}
                onClick={()=>setPage(number)}
               >{number+1}
               </button> )
             }
             <select onChange={event => setSize(event.target.value)}>
             <option value="5" selected>5</option>
             <option value="7">7</option>
             <option value="10">10</option>
             <option value="15">15</option>
             <option value="20">20</option>
             </select>
           </div>
        </>
            
    
    );
};

export default ProductAll;