import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthContext/AuthProvider';
import { FaUserAlt } from 'react-icons/fa';
import { toast } from 'react-hot-toast';
import { getStoredCart } from '../LocalStorage/LocalStorage';


const Navbar = () => {
 const {user,logOut,loading} = useContext(AuthContext);
 const [selItems,setSelItems] = useState(0)
  
  
  useEffect(()=>{
  const storedCart = getStoredCart();
  const totalItems = Object.keys(storedCart).length;
  setSelItems(totalItems)
    },[selItems]);
  
 
    const handleLogOut=()=>{
      logOut()
      toast.success('User Logged Out')
    }

    return (
      <div
        className=" w-full navbar bg-stone-900 flex flex-row justify-around"
        id="userNav"
      >
        <div className=" ">
          <Link
            to="/"
            className="btn btn-ghost text-white font-mono sm:text-xl text-sm "
          >
            Electro Mart
          </Link>
        </div>

        <div className="form-control ">
          <input
            type="text"
            placeholder="Search..."
            className="input input-bordered input-accent input-sm w-24 sm:block md:w-auto lg:w-96 max-w-xs"
          />
        </div>

          {/* <div className="form-control">
            <div className="input-group">
              <input type="text" placeholder="Search…" className="input input-bordered" />
              <button className="btn btn-square">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </button>
            </div>
          </div> */}


        <div className="">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">
                  {selItems}
                </span>
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow z-50"
            >
              <div className="card-body">
                <span className="font-bold text-lg">
                  {selItems} Items added
                </span>
                <div className="card-actions">
                  <Link
                    to="/orders"
                    className="btn btn-neutral btn-block bg-black"
                  >
                    View Cart
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {user ? (
            <div className="">
              <div className="dropdown dropdown-end z-50">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    {user?.photoURL ? (
                      <img src={user?.photoURL} alt="userphoto" />
                    ) : (
                      <FaUserAlt className="text-4xl ml-0.5 text-white"></FaUserAlt>
                    )}
                  </div>
                </label>
                <ul
                  tabIndex={1}
                  className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <Link className="justify-between mb-3 text-lg text-white bg-blue-600">
                      {user.email}
                    </Link>
                  </li>
                  <li>
                    <button
                      className="btn btn-sm btn-error"
                      onClick={handleLogOut}
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <button className="btn btn-sm  ml-6">
              <Link to="/signup">Sign Up</Link>
            </button>
          )}
        </div>
      </div>
    );
};

export default Navbar;