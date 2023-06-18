import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='w-full h-7 bg-gray-800 text-center'>
            <Link className='text-white ml-4' to='/dashboard'>SELL</Link>
            <Link className='text-white ml-4' to='/care'>Customer Care</Link>
            <Link className='text-white ml-4' to='/contactUS'>Contact Us</Link>
            <Link className='text-white ml-4' to='/faq'>FAQ</Link>
            <Link className='text-white ml-4' to='/about'>About US</Link>
        </div>
    );
};

export default Header;