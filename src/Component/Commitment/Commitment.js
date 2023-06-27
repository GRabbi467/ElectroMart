import React from 'react';
import img1 from '../Assets/banner/box.png';
import img2 from '../Assets/banner/pay.png';
import img3 from '../Assets/banner/target-audience.png';

const Commitment = () => {
    return (
        <div className='flex flex-col lg:flex-row gap-x-40 justify-center items-center p-16'>
            <div className='text-center p-8'>
                <img className='w-20 ml-10 lg:ml-20 ' src= {img1} alt="" />
                <p className='text-2xl'>Minimun Delivery Charge</p>
                <small>30 Tk delivery all over Dhaka and free returns. <br /> See checkout for delivery dates.</small>
            </div>
            <div className='text-center p-8'>
                <img className='w-20 ml-10 lg:ml-20' src= {img2} alt="" />
                <p  className='text-2xl'>Pay monthly at 0% APR</p>
                <small>Choose to check out with Apple <br /> Card Monthly Installments.</small>
            </div>
            <div className='text-center p-8'>
                <img className='w-20 ml-14 lg:ml-20' src= {img3} alt="" />
                <p  className='text-2xl'>Personalized Customer</p>
                <small>Engrave your device with <br /> your name or a personal note</small>
            </div>
            
        </div>
    );
};

export default Commitment;