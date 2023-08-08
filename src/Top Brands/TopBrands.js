import React from 'react';
import apple from '../Component/Assets/brandsLogo/Apple-Logo.png';
import dell from '../Component/Assets/brandsLogo/Dell-Logo.png';
import Microsoft from '../Component/Assets/brandsLogo/Microsoft-Logo.png';
import xiaomi from '../Component/Assets/brandsLogo/Xiaomi-logo.png';
import sony from '../Component/Assets/brandsLogo/Sony-logo.png';
import samsung from '../Component/Assets/brandsLogo/Samsung-Logo-2.png';


const TopBrands = () => {
    return (
        <>
         <h1 className='text-2xl font-bold border-b-4 border-black mt-8'>
            <span className='bg-black text-white p-2 pb-1 rounded-tr-2xl'>Top Brands</span></h1>
        <div className='flex flex-col  lg:flex-row gap-x-20 justify-center items-center p-4 mt-4'>
            <img className='w-36' src={apple}  alt='apple'></img>
            <img className='w-36 ' src={dell} alt='dell'></img>
            <img className='w-36' src={Microsoft} alt='MS'></img>
            <img className='w-36'src={xiaomi} alt='mi'></img>
            <img className='w-36' src={sony} alt='sony'></img>
            <img className='w-36' src={samsung} alt='samsung'></img>  
        </div>
        </>
    );
};

export default TopBrands;