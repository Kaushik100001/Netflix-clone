import { createContext , useCallback , useContext, useEffect , useState } from "react";
import { auth , db } from "../firebase";
import {createUserWithEmailAndPassword , signInWithEmailAndPassword , signOut , onAuthStateChanged} from 'firebase/auth'
import {doc , setDoc} from 'firebase/firestore'
const AuthContext = createContext()

export function AuthContextProvider({children}){
    const [user , setuser] = useState({})

    function signup(email , password){
        createUserWithEmailAndPassword(auth , email , password)
        setDoc(doc(db,'users',email),{
            savedshows:[]
        })
    }
    
    function login(email , password){
        return signInWithEmailAndPassword(auth , email , password)
    }
 function logout(){
    return signOut(auth)
 }

 useEffect(()=>{
    let unsubscribe = onAuthStateChanged(auth , (currentuser)=>{
        setuser(currentuser) 
    })
    return ()=>{
        unsubscribe()
    }
 })

    return (
        <AuthContext.Provider value={{signup ,login,logout,user}}>
            {children}
        </AuthContext.Provider>
    )
}

export function UserAuth(){
    return useContext(AuthContext )
}