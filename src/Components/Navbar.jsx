import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../Context/AuthContext'
const Navbar = () => {
    const {user,logout} = UserAuth()
    const navigate = useNavigate() 
    // console.log(user.email)
    
    const handlelogout=async()=>{
      try {
        await logout() ; 
        navigate('/')
      } catch(error) {
         console.log(error)
      }

    }


 
  return (
    <div className='flex justify-between z-[100] absolute w-full mt-2'>
    <Link to='/'>
    <h1 className='text-red-600 md:text-4xl text-2xl font-bold'>Netflix</h1>
    </Link>

   {user?.email ? <div className='text-white mr-3 '>

<Link to='/account' >
<button className='mr-3 rounded px-3 py-2 ' >Account</button>
</Link>
  
<button onClick={handlelogout} className='bg-red-600  rounded px-3 py-2' >Logout</button>



</div>

:  

<div className='text-white mr-3 '>

<Link to='/login' >
<button className='mr-3 rounded px-3 py-2 ' >Sign in</button>
</Link>
<Link to='/signup'>
<button className='bg-red-600  rounded px-3 py-2' >Sign up</button>
</Link>


</div>}
    </div>
  )
}

export default Navbar