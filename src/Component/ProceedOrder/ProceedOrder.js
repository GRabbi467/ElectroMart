import React from 'react';
import { Link } from 'react-router-dom';

const ProceedOrder = () => {
    return (
    <>
      <div className="alert alert-success p-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span className='p-5'>Your Order has been confirmed!</span>
      </div>
      <div>
         <Link to = '/' className="btn btn-link">Continue Shopping</Link>
      </div>
    </>
    );
};

export default ProceedOrder;