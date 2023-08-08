import React from 'react';
import phone from '../Assets/banner/cell-phone.png';
import laptop from '../Assets/banner/laptop.png';
import smartWatch from '../Assets/banner/smart-watch.png';
import tv from '../Assets/banner/television.png';
import { Link } from 'react-router-dom';


const ProductCategories = () => {
    return (
        <>
        <h1 className='text-2xl font-bold border-b-4 border-black mt-8'><span className='bg-black text-white p-2 pb-1 rounded-tr-2xl'>Top Categories</span></h1>
        <div className='flex flex-col lg:flex-row gap-x-20 justify-center items-center p-4 m-4'> 
       
        <div>
         <Link to ='/category/Smart Phone'> <img src={phone} className='w-36 lg:w-24' alt="cell-phone" /></Link>
          <p className='text-center'>Smart Phone</p>
          </div>
          <div>
          <Link to='/category/Laptop'><img  src={laptop} className='w-36 lg:w-24' alt="laptop" /></Link>
          <p className='text-center'>Laptop</p>
          </div>
          <div>
          <Link to='category/Smart Watch'><img  src={smartWatch} className='w-36 lg:w-24' alt="smart-watch" /></Link>
          <p className='text-center'>Smart Watch</p>
          </div>
          <div>
          <Link to ='category/Smart TV'><img src={tv} className='w-36 lg:w-24' alt="television" /></Link>
          <p className='text-center'>Smart TV</p>
          </div>
          {/* <div>
          <img src={more} className='w-36 lg:w-24' alt="others" />
          <p>Others</p>
        </div> */}
        
    </div>
        </>
        
    );
};

export default ProductCategories;