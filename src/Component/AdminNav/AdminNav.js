import React from 'react';
import { Link } from 'react-router-dom';
import { FaAngleDoubleRight} from "react-icons/fa";

const AdminNav = () => {
    return (
    <div className="navbar  w-full bg-slate-200 flex justify-around">
        <div className='lg:hidden'>
        <label htmlFor='dropdown-drawer' tabIndex={0}>
        <FaAngleDoubleRight className=" text-black text-2xl"></FaAngleDoubleRight>
        </label>
        </div>
         
        <div className="shop-name text-2xl hidden lg:block">
            <h1>Store Name </h1>
        </div>

        <div className="">
            <Link to = '/' className="font-mono text-2xl font-bold">ELECTRO MART</Link>
        </div>

        <div className="">
            <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                <img src="https://images.unsplash.com/flagged/photo-1595514191830-3e96a518989b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" />
                </div>
            </label>
            <ul tabIndex={1} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                <a className="justify-between">
                    Profile
                </a>
                </li>
                <li><a>Logout</a></li>
            </ul>
            </div>
        </div>
    </div>
    );
};

export default AdminNav;