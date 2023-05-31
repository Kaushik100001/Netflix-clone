import axios from 'axios'
import React, { useEffect, useState } from 'react'
import requests from '../Request'

const Main = () => {
  const [movies, setMovies] = useState([])

  

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      if (response.data && response.data.results) {
        setMovies(response.data.results)
      } else {
        console.error('Invalid response data:', response.data)
      }
    }).catch((error) => {
      console.error('API request failed:', error)
    })
  }, [])

  let movie
  if (movies.length > 0) {
    movie = movies[Math.floor(Math.random() * movies.length)]
  } 

  // console.log(movie)

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + '...';
    } else {
      return str;
    }
  }

  return (
    <div className='text-white w-full h-full'>
      <div className='w-full h-full'>
       <div  className='absolute w-full h-[710px] bg-gradient-to-r from-black'></div>
        <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`} alt="" />
        <div className='absolute w-full top-[30%] p-4 md:p-8'>
        <h1 className='text-3xl md:text-5xl font-bold'>{movie?.title}</h1>
        <div className='my-4'>
          <button className='border bg-gray-300 text-black border-gray-300 py-2 px-5'>Play</button>
          <button className='border text-white border-gray-300 py-2 px-5 ml-4'>Watch Later</button>
        </div>
        <p className='text-gray-400  text-sm'> Released : {movie?.release_date}</p>
        <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>{truncateString(movie?.overview,150)}</p>
        </div>

      </div>
    </div>
  )
}

export default Main