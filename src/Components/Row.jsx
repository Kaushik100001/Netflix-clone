import React, { useEffect, useState } from 'react'
// import requests from '../Request'

import axios from 'axios'
import Movie from './Movie'
import { MdChevronLeft,MdChevronRight} from 'react-icons/md'


const Row = ({title,fetchURL , rowId}) => {
   let [movies , setMovies] = useState([])


   useEffect(()=>{
    axios.get(fetchURL).then((response)=>{
       setMovies(response.data.results)
    })

   },[fetchURL])

   const slideleft=()=>{
    let slider = document.getElementById('slider' + rowId)
    slider.scrollLeft = slider.scrollLeft-500
   }

   const slideright=()=>{
    let slider = document.getElementById('slider' + rowId)
    slider.scrollLeft = slider.scrollLeft+500
   }

  return (
    <div>
    <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
    <div className='relative flex items-center group'>
    <MdChevronLeft onClick={slideleft} className='bg-white left-0 absolute rounded-full opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40}/>
     <div id={'slider'+rowId} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth  scrollbar-hide relative'>
         {
           movies.map((item,id)=>(
             <Movie item={item}/>
           ))

         }
     </div>
     <MdChevronRight onClick={slideright} className='bg-white absolute  rounded-full right-0 opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40}/>

    </div>

    </div>
  )
}

export default Row