import React, { useContext, useState } from 'react';
import { AuthContext } from '../AuthContext/AuthProvider';
import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { GoogleAuthProvider } from 'firebase/auth';



const ManageProducts = () => {
    const {user,createUser,googleSignup,logOut} = useContext(AuthContext);
    const [error,setError] = useState('');
    console.log(user)
    const handleSubmit =e=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        if (password.length < 6) {
            setError("Your password must be at least 6 characters"); 
        }
        else if(password !== confirm){
            return setError('Password does not matched!')
        }
        else if (password.search(/[a-z]/i) < 0) {
           setError("Your password must contain at least one letter.");
        }
        else if (password.search(/[0-9]/) < 0) {
           setError("Your password must contain at least one digit."); 
        }
        else{
        createUser(email,password)
        .then((userCredential) => {
          const currentUser = userCredential.user;
          form.reset();
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode,errorMessage);
        });

        }
    }
    //google signup 
    const handleGooleSignIn =()=>{
        const provider = new GoogleAuthProvider();
        googleSignup(provider)
        .then(result=>{
            const user = result.user;
        })
        .then((e)=>{
            const errorcode = error.errorCode;
        })
    }

    const handleLogout=()=>{
        logOut()
    }
      
       

    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
            <h1 className="text-3xl font-semibold text-center text-blue-800 uppercase">
                Seller Sign Up
            </h1>
            <form className="mt-6" onSubmit={handleSubmit}>
                <div className="mb-2">
                    <label
                        for="email"
                        className="block text-sm font-semibold text-zinc-800"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        name='email'
                        className="block w-full px-4 py-2 mt-2 text-blue-800 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        required
                    />
                </div>
                <div className="mb-2">
                    <label
                        for="password"
                        className="block text-sm font-semibold text-zinc-800"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        name='password'
                        className="block w-full px-4 py-2 mt-2 text-blue-800 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        required
                    />
                </div>
                <div className="mb-2">
                    <label
                        for="password"
                        className="block text-sm font-semibold text-zinc-800"
                    >
                       Confirm Password
                    </label>
                    <input
                        type="password"
                        name='confirm'
                        className="block w-full px-4 py-2 mt-2 text-blue-800 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        required
                    />
                </div>
                <Link
                    href="#"
                    className="text-xs text-purple-600 hover:underline"
                >
                    Forget Password?
                </Link>
                <span className='ml-40 text-red-600'><small>{error}</small></span>
                <div className="mt-6">
                    <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform
                     bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                        Login
                    </button>
                </div>
            </form>
            <div className="relative flex items-center justify-center w-full mt-6 border border-t">
                <div className="absolute px-5 bg-white">Or</div>
            </div>
            <div className="flex mt-4 gap-x-2">
                <button
                    type="button"
                    onClick={handleGooleSignIn}
                    className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md  hover:bg-purple-600 hover:text-white  focus:ring-violet-600"    
                >
                    <FaGoogle></FaGoogle>
                </button>
              
                
            </div>

            <p className="mt-8 text-xs font-light text-center text-zinc-950">
                {" "}
                Already have an account?{" "}
                <Link
                    href="#"
                    className="font-medium text-purple-600 hover:underline"
                >   
                </Link>
            </p>
        </div>
        <button onClick={handleLogout} className='btn btn-primary'>Logout</button>
    </div>
    );
};

export default ManageProducts;