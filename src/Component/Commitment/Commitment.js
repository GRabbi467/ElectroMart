import React from 'react';
import img1 from '../Assets/banner/box.png';
import img2 from '../Assets/banner/pay.png';
import img3 from '../Assets/banner/target-audience.png';

const Commitment = () => {
    return (
        <div className='grid m-4 lg:grid-cols-3 justify-items-center p-6 text-slate-600'>
            <div className=' grid justify-items-center m-3 '>
                <img className='w-20 ' src= {img1} alt="" />
                <p className='text-2xl '>Minimun Delivery Charge</p>
                <small>30 Tk delivery charge all over <br /> Dhaka city and free returns.</small>
            </div>
            <div className=' grid justify-items-center m-3 '>
                <img className='w-20 ' src= {img2} alt="" />
                <p  className='text-2xl'>Pay monthly at 0% APR</p>
                <small>Choose to check out with Apple <br /> Card Monthly Installments.</small>
            </div>
            <div className='grid justify-items-center m-3 '>
                <img className='w-20 ' src= {img3} alt="" />
                <p className='text-2xl'>Personalized Customer</p>
                <small>Engrave your device with <br /> your name or a personal note</small>
            </div>
            
        </div>
    );
};

export default Commitment;