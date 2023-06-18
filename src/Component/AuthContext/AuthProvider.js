import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase.init';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();



const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);

    const createUser =(email,password)=>{
      return  createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const googleSignup =()=>{
       return  signInWithPopup(auth,provider)
    }

    useEffect(()=>{
       const unsubscribe =  onAuthStateChanged(auth,(data)=>{
            setUser(data)
            if(data){
                const user_id = data.uid;
                console.log(user_id)
            }
            else{
                console.log("User Logged Out")
            }
        })
        return()=>{
            unsubscribe();
        }
    },[])


    const logOut=() =>{
        signOut(auth)
    }


    
    return (
        <AuthContext.Provider value ={{user,createUser,signIn,googleSignup,logOut}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;