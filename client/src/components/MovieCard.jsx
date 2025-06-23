import React from 'react'
import { useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets';
import timeFormate from '../lib/timeFormate';
import { StarIcon } from 'lucide-react';

const MovieCard = ({movie}) => {
    const navigate = useNavigate();
  return (
    <div className='flex flex-col h-90 max-md:w-30 max-md:h-60 md:w-66 bg-gray-800 rounded-2xl transition duration-300 hover:translate-y-1'>
        <img onClick={()=>{navigate(`/movies/${movie._id}`); scrollTo(0,0);}} src={movie.backdrop_path} alt="" className='rounded-lg object-cover md:object-right-bottom w-full h-40 md:h-60 cursor-pointer'/>
        <p className='md:text-lg max-md:text-sm text-gray-200 font-semibold pl-3 truncate mt-1'>{movie.title}</p>
        <p className='pl-3 text-sm font-medium text-gray-200'>{new Date(movie.release_date).getFullYear()} | {movie.genres.slice(0,2).map(gen => gen.name).join(' ')}  | {timeFormate(movie.runtime)}</p>
        <div className='px-3 flex justify-between mt-5 mb-2 max-md:mt-2 max-md:text-xs '>
            <button onClick={()=>{navigate(`/movies/${movie._id}`); scrollTo(0,0);}} className='bg-primary hover:bg-primary-dull px-2 py-0.5 font-semibold rounded-2xl text-white cursor-pointer'>Buy Tickets</button>
            <p className='flex gap-1 items-center'><StarIcon className='h-5 w-5 fill-primary text-primary'/> {movie.vote_average.toFixed(1)}</p>
        </div>
    </div>
  )
}

export default MovieCard