import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='w-full  bg-gray-800 text-center border-none '>
            <Link className='text-white ml-4' to='/dashboard'>SELL</Link>
            <Link className='text-white ml-4' to='/care'>Care</Link>
            <Link className='text-white ml-4' to='/contact'>Contact</Link>
            <Link className='text-white ml-4' to='/faq'>FAQ</Link>
            <Link className='text-white ml-4' to='/about'>About</Link>
        </div>
    );
};

export default Header;