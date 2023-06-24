import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase.init';
import { createUserWithEmailAndPassword,
     getAuth, 
     onAuthStateChanged, 
     signInWithEmailAndPassword, 
     signInWithPopup, 
     signOut, 
     updateProfile} from 'firebase/auth';
export const AuthContext = createContext();
const auth = getAuth(app);


const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    const createUser =(email,password)=>{
        setLoading(true)
      return  createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    
    const googleSignup =(provider)=>{
        setLoading(true)
       return  signInWithPopup(auth,provider)
    }

    useEffect(()=>{
       const unsubscribe =  onAuthStateChanged(auth,(data)=>{
            setUser(data)
            setLoading(false)
            if(data){
                const user_id = data.uid;
            }
            else{
                console.log("User Logged Out")
            }
        })
        return()=>{
            unsubscribe();
        }
    },[])


    const updateUser =(userInfo)=>{
       return updateProfile(auth.currentUser,userInfo)
    }


    const logOut=() =>{
        setLoading(true)
        signOut(auth)
    }
    
    

    
    return (
        <AuthContext.Provider value ={{user,loading,createUser,signIn,googleSignup,updateUser,logOut}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;