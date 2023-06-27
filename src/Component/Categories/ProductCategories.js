import React, { useEffect, useState } from 'react';
import phone from '../Assets/banner/cell-phone.png';
import laptop from '../Assets/banner/laptop.png';
import smartWatch from '../Assets/banner/smart-watch.png';
import tv from '../Assets/banner/television.png';
import more from '../Assets/banner/more.png';
import CategoryDataCard from '../CategoryDataCard/CategoryDataCard';
import { useNavigate } from 'react-router-dom';


const ProductCategories = () => {
    const [category,setCategory] = useState('');
    const [categoryData,setCategoryData] = useState([]);
    const navigate = useNavigate()
    useEffect(()=>{
        const url = `http://localhost:5000/products?category=${category}`;
        fetch(url)
        .then(res => res.json())
        .then(data => 
            { setCategoryData(data[3])
            })
    },[category])

    const handleSelectCategory = (category)=>{
          
           
    }
   
    return (
        <>
        <h1 className='text-2xl font-bold border-b-4 border-black mt-8'><span className='bg-black text-white p-2 pb-0 rounded-t-2xl'>Top Categories</span></h1>
        <div className='flex flex-col lg:flex-row gap-x-20 justify-center items-center p-4'> 
       
        <div >
          <img  onClick={()=>handleSelectCategory('Smart Phone')} src={phone} className='w-24' alt="cell-phone" />
          <p>Smart Phone</p>
          </div>
          <div>
          <img onClick={()=>handleSelectCategory('Laptop')} src={laptop} className='w-24' alt="laptop" />
          <p>Laptop</p>
          </div>
          <div>
          <img onClick={()=>handleSelectCategory('Smart Watch')}  src={smartWatch} className='w-24' alt="smart-watch" />
          <p>Smart Watch</p>
          </div>
          <div>
          <img onClick={()=>handleSelectCategory('Smart TV')} src={tv} className='w-24' alt="television" />
          <p>Television</p>
          </div>
          <div>
          <img onClick={()=>handleSelectCategory('Others')} src={more} className='w-24' alt="others" />
          <p className='ml-3'>Others</p>
        </div>
        
           
        {/* <div>
           {
            categoryData.map(product => <CategoryDataCard
            key = {product._id}
            product = {product}
            ></CategoryDataCard>)
           }
           </div> */}
    </div>
        </>
        
    );
};

export default ProductCategories;