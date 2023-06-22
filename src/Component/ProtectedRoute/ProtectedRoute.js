import React, { useContext } from 'react';
import { AuthContext } from '../AuthContext/AuthProvider';
import { Navigate, useLocation} from 'react-router-dom';

const ProtectedRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <div className='flex items-center justify-center'><span className=" loading loading-spinner loading-lg"></span></div>
    }
  
    if(!user){
        return <Navigate to ='/login' state={{from:location}} replace></Navigate>
       }
       return children;
        
          
    
   
};

export default ProtectedRoute;