import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaAngleDoubleRight, FaUserAlt} from "react-icons/fa";
import { AuthContext } from '../AuthContext/AuthProvider';

const AdminNav = (props) => {
    console.log(props)
    
    
    const {user} = useContext(AuthContext);
    console.log(user)

    const handleLogOut=()=>{
        console.log('handle log')
    }
    return (
    <div className="navbar  w-full bg-slate-200 flex justify-around">
        <div className='lg:hidden'>
        <label htmlFor='dropdown-drawer' tabIndex={0}>
        <FaAngleDoubleRight className=" text-black text-2xl"></FaAngleDoubleRight>
        </label>
        </div>
         
        <div className="shop-name text-2xl hidden lg:block">
            <h2>{props.shopname}</h2>
        </div>

        <div className="">
            <Link to = '/' className="font-mono text-2xl font-bold">ELECTRO MART</Link>
        </div>

        <div className="">
            <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                {
                    user?.photoURL ? <img src={user?.photoURL} /> : <FaUserAlt className='text-4xl ml-0.5'></FaUserAlt>
                }
                </div>
            </label>
            <ul tabIndex={1} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                <a className="justify-between text-green-950">
                    {user.email}
                </a>
                </li>
                <li><button className='btn btn-sm btn-error' onClick={handleLogOut}>Logout</button></li>
            </ul>
            </div>
        </div>
    </div>
    );
};

export default AdminNav;