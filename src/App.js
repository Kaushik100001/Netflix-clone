import Home from "./Pages/Home";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { AuthContextProvider } from "./Context/AuthContext";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Account from "./Pages/Account";






function App() {
     return (
        <div>
        <AuthContextProvider>
        <Navbar/>
        <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="/login" element={<Login/>} />
         <Route path="/signup" element={<Signup/>} />
         <Route path="/account" element={<Account/>} />
        </Routes>

        </AuthContextProvider>
       
         
           
            
            
        </div>
           
             
          

     )

}

export default App 
