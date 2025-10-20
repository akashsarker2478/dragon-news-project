import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/Firebase.config';

const googleProvider = new GoogleAuthProvider()
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading]  = useState(true)
    // console.log(user,loading)

    // google sign in 
    const googleSignIn = ()=> {
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    //email and password sign in 
    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const loginUser = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOutUser = ()=>{
        return signOut(auth)
    }

    const updateUser = (updateData)=>{
        return updateProfile(auth.currentUser,updateData)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })
        return()=>{
            unsubscribe()
        }
    },[])
    const userInfo ={
        googleSignIn,
        createUser,
        loginUser,
        logOutUser,
        user,
        setUser,
        loading,
        setLoading,
        updateUser

    }
    return (
        <div>
            <AuthContext value={userInfo}>
                {children}
            </AuthContext>
        </div>
    );
};

export default AuthProvider;