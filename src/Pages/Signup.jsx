import React, { useState } from 'react'
import { Link , useNavigate } from 'react-router-dom'
import { UserAuth } from '../Context/AuthContext'

const Signup = () => {
   let [email ,setemail]=useState('')
   let [password , setpassword] = useState('')
   let {user,signup}=UserAuth()
   let navigate = useNavigate()

   const handlesubmit=async(e)=>{
    e.preventDefault()
    try{ 
           await signup(email,password)
           navigate('/')
    }catch(error){
        console.log(error)
    }

   }

   


    return (
        <>
            <div className='w-full h-screen'>
                <img className='hidden sm:block absolute w-full h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/70805ddd-f38c-4e25-94cd-b5015e444ee0/6e99205c-e34b-4dbe-ba45-b026023791bc/IN-en-20230508-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="" />
                <div className='bg-black/60 fixed top-0 left-0 w-full h-screen '></div>
                <div className='fixed w-full px-4 py-4 z-50'>
                    <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
                     <div className='max-w-[320px] mx-auto py-16'>
                        <h1 className='text-3xl font-bold'>Sign up</h1>
                        <form onSubmit={handlesubmit} className='w-full flex flex-col  py-4'>
                            <input  className='p-3 my-3 bg-gray-700 rounded' 
                            type="email" 
                            placeholder='Email'
                            onChange={(e)=>setemail(e.target.value)}
                             />
                             <input className='p-3 my-3 bg-gray-700 rounded'
                             type="password"
                             placeholder='password' 
                             onChange={(e)=>setpassword(e.target.value)} 
                             />
                             <button className='bg-red-600 py-3 my-6  rounded font-bold'>Sign-up</button>
                             <div className='flex justify-between text-sm text-gray-600 items-center'>
                              <p >   <input className='mr-2' type='checkbox'/> Remember me  </p>
                              <p>Need help ?</p>
                             </div>
                             <p className='py-8'><span className='text-gray-600'>Already subscribed to Netflix?</span>{''} 
                             <Link to='/login'>Sign in</Link>
                             </p>
                        </form>
                     </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Signup