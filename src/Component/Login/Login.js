import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext/AuthProvider';
import { toast } from 'react-hot-toast';


const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [error,setError] = useState('');

    const {user,signIn} = useContext(AuthContext);
    
 
    const from = location.state?.from?.pathname || '/';

 

    const handleSubmit =e=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

       signIn(email,password)
       .then((userCredential) => {
        const currentUser = userCredential.user;
        toast.success('Login Successful')
        navigate(from,{replace:true}) 
      })

      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage)
      });

    }
    
    


    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
            <h1 className="text-3xl font-semibold text-center text-blue-800 uppercase">
               login
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
            
            <div className="flex mt-4 gap-x-2">
                
              
                
            </div>

            <p className="mt-8 text-xs font-light text-center text-zinc-950">
                {" "}
                {" "}
                <Link to ='/signup' className="text-xs font-light text-center text-zinc-950 hover:text-purple-600 hover:underline">Don't have an account?</Link>
            </p>
        </div>
        </div>
       
      
    );
};

export default Login;