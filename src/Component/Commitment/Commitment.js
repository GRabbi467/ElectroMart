import React from 'react';
import img1 from '../Assets/banner/box.png';
import img2 from '../Assets/banner/pay.png';
import img3 from '../Assets/banner/target-audience.png';
import img4 from '../Assets/banner/sell.png';



const Commitment = () => {
    return (
        <>
        <h1 className='text-2xl font-bold border-b-4 border-black mt-8'><span className='bg-black text-white p-2 pb-1 rounded-tr-2xl'>Our Services</span></h1>
        <div className='grid m-4 lg:grid-cols-4 justify-items-center p-6 text-slate-600'>
            <div className=' grid justify-items-center m-3 '>
                <img className='w-20 ' src= {img1} alt="" />
                <p className='text-2xl'>Lowest Delivery Charge</p>
                <small className='text-center'>30 Tk delivery charge all over <br /> Dhaka city and free returns.</small>
            </div>
            <div className=' grid justify-items-center m-3 '>
                <img className='w-20 ' src= {img2} alt="" />
                <p  className='text-2xl'>Pay monthly at 0% APR</p>
                <small className='text-center'>Choose to check out with Apple <br /> Card Monthly Installments.</small>
            </div>
            <div className='grid justify-items-center m-3 '>
                <img className='w-20 ' src= {img3} alt="" />
                <p className='text-2xl text-center'>Personalized Customer</p>
                <small className='text-center'>Engrave your device with <br /> your name or a personal note</small>
            </div>
            <div className='grid justify-items-center m-3 '>
                <img className='w-20 ' src= {img4} alt="" />
                <p className='text-2xl text-center'>Sell Your Products</p>
                <small className='text-center'>Sell Your Products <br /> hassle free from anywhere</small>
            </div> 
        </div>
        </>
    );
};

export default Commitment;