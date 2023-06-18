import React, { createContext } from 'react';
import app from '../../firebase.init';
import {getAuth} from 'firebase/auth';




export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const Myinfo = {
        name: "Rabbi"
    }
    
    return (
        <AuthContext.Provider value ={{Myinfo}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;