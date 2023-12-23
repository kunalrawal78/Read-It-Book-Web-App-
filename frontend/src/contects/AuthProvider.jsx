import React, { createContext, useState,useEffect } from 'react'
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,  onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import {  signOut } from "firebase/auth";
import app from '../firebase/firebase.config'

 export const AuthContext=createContext();
const auth=getAuth(app)

const googleprovider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {
const [user,setuser]=useState(null);
const [loading,setloading]=useState(true);

const createUser=(email,password)=>{
  setloading(true)
return createUserWithEmailAndPassword(auth, email, password)
}

// const signupWithGmail=()=>{

// }
const loginwithGoogle=()=>{
    setloading(true)
    return signInWithPopup(auth, googleprovider)
}

const login=(email, password)=>{
    setloading(true)
    return signInWithEmailAndPassword(auth, email, password)
}


const logout=()=>{
    return signOut(auth)
}

useEffect(() => {
const unsubscribe= onAuthStateChanged(auth, currentuser =>{
console.log(currentuser)
setuser(currentuser);
setloading(false)
})
return()=>{
return unsubscribe();

}
}, [])

const authInfo={
    user,
createUser,
loginwithGoogle,
loading,
login,
logout
}

  return (

    
<AuthContext.Provider value={authInfo}>
{children}
</AuthContext.Provider>
    
    
  )
}

export default AuthProvider