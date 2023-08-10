import React, { useContext, useEffect, useRef, useState } from "react";
import { Link} from "react-router-dom";
import { AuthContext } from "../AuthContext/AuthProvider";
import { toast } from "react-hot-toast";
import { getStoredCart } from "../LocalStorage/LocalStorage";
import { FaUserAlt ,FaUserCircle,FaSearch} from "react-icons/fa";
import icon from "../Assets/brandsLogo/E.png";


const Navbar = () => {
  const { user, logOut} = useContext(AuthContext);
  const [selItems, setSelItems] = useState(0);
  const [searchProduct,setSearchProduct] = useState([]);
  console.log(searchProduct);
  
 const boxRef = useRef(null);
  //update the cart from local host
  useEffect(() => {
    const storedCart = getStoredCart();
    const totalItems = Object.keys(storedCart).length;
    setSelItems(totalItems);
  }, [selItems]);
  
 useEffect(()=>{
 if(searchProduct.length){
  boxRef.current.classList.remove('float');
 }
 else{
  boxRef.current.classList.add('float');
 }
 },[searchProduct])

//logout button func.
  const handleLogOut = () => {
    logOut();
    toast.success("User Logged Out");
  };

//search func.
  const handleSearch = (e) => {
    e.preventDefault(); 
    console.log(e.target.search.value)
    if(e.target.search.value === '') return;
   try {
    fetch(`http://localhost:5000/products?search=${e.target.search.value}`)
    .then(res => res.json())
    .then(data=>{
      setSearchProduct(data.searchRes);
    })
   } catch (error) {
    //console.log(error.message)
   }
  };


  return (
    <div
      className=" w-full navbar bg-zinc-950 grid grid-cols-3  gap-4"
      id="userNav"
    >
      <div className="justify-center">
        <div>
          <Link to="/">
            <img
              className="w-10 rounded-full bg-white p-1 block lg:hidden"
              src={icon}
              alt=""
            />
          </Link>
        </div>
        <div className="hidden lg:block">
          <Link
            to="/"
            className="btn btn-ghost text-white font-serif sm:text-xl text-sm"
          >
            Electro Mart
          </Link>
        </div>
      </div>

      
     <div className="justify-center">
     <label className="relative block">
        <span className="absolute  z-50 inset-y-0 left-0 flex items-center pl-2">
          <FaSearch className="h-5 w-5 text-black"></FaSearch>
        </span>
       <form onSubmit={handleSearch} className="form-control relative">
       <input 
          onChange={(e)=>e.target.value === '' && setSearchProduct([])}
          className="placeholder:italic placeholder:text-slate-400 block bg-white w-40 lg:w-96 border border-slate-300
           rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-400 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Search Products..."
          type="text"
          name="search"
        />
        <div ref={boxRef} className="absolute top-11 z-50 w-full max-h-[50vh] float bg-white border rounded-md overflow-y-scroll">
        { searchProduct.length &&
          searchProduct.map(e=><div className="flex gap-x-4" key={e._id}> 
           <div>
           <img src={e.image} alt="product img" className="w-16"></img>
           </div>
            <div>
              <span className="text-blue-700">{e.productName}</span>
              <p className="text-slate-950 font-semibold"> Price: {e.price} Tk</p>
            </div>
          </div>)
        }
        </div>
       </form>
      </label>

     </div>
      <div className="justify-center">
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
              <span className="badge badge-sm indicator-item">{selItems}</span>
            </div>
          </label>

          <div
            tabIndex={0}
            className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow z-50"
          >
            <div className="card-body">
              <span className="font-bold text-lg">{selItems} Items added</span>
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
                  ) 
                  : 
                  (
                    <FaUserAlt className="text-3xl ml-0.5 text-white "></FaUserAlt>
                  )}
                </div>
              </label>
              <ul
                tabIndex={1}
                className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link className="justify-between mb-3 text-md text-white bg-blue-600">
                    {user.email}
                  </Link>
                </li>
                <li>
                  <button
                    className="btn btn-sm btn-block btn-error"
                    onClick={handleLogOut}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="flex">
            <button className="btn btn-sm  ml-6 hidden lg:block">
              <Link to="/signup">Sign In</Link>
            </button>
            <div className="lg:hidden">
              <Link to="/signup">
                <FaUserCircle className="text-white text-2xl inline-block ml-2"></FaUserCircle>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
