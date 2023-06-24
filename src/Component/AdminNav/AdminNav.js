import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaAngleDoubleRight, FaDropbox, FaUserAlt} from "react-icons/fa";
import { RxExit } from "react-icons/rx";
import { AuthContext } from '../AuthContext/AuthProvider';
import { toast } from 'react-hot-toast';

const AdminNav = () => {
    const navigate= useNavigate();
    
    
    const {user,logOut} = useContext(AuthContext);

    const handleLogOut=()=>{
       logOut()
       toast.success('Log Out Successful')
       navigate('/')
       
    }
    return (
    <div className="navbar w-full bg-slate-200 flex justify-around">
        <div className='lg:hidden'>
        <label htmlFor='dropdown-drawer' tabIndex={0}>
        <FaAngleDoubleRight className=" text-black text-2xl"></FaAngleDoubleRight>
        </label>
        </div>
         
        <div className="shop-name text-2xl hidden lg:block">
            <h2>Shop Name & LOGO</h2>
        </div>

        <div className="">
            <Link to = '/' className="font-mono text-2xl font-bold">ELECTRO MART</Link>
        </div>

        <div className="">
            <div className="dropdown dropdown-end">
            <label tabIndex={-1} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                {
                    user?.photoURL ? <img src={user?.photoURL} alt='USER_phot0' /> : <FaUserAlt className='text-4xl ml-0.5'></FaUserAlt>
                }
                </div>
            </label>

            <ul tabIndex={-1} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                <Link className="justify-between text-lg text-black bg-green-300">
                    {user.email}
                </Link>
                </li>
            </ul>
            </div>
            <RxExit className='text-3xl ml-48 text-red-700 hover:scale-125 duration-300' onClick={handleLogOut}></RxExit>
        </div>
        
    </div>
    );
};
export default AdminNav;