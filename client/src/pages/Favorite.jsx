import React from 'react'
import { dummyShowsData } from '../assets/assets'
import MovieCard from '../components/MovieCard';

const Favorite = () => {
  return dummyShowsData.length>0? (
    <div className='min-h-[80vh] px-6 md:px-16 lg:px-36 overflow-hidden my-20 max-md:my-15 md:pt-15'>
      <h1 className='font-bold text-2xl leading-2'>Your Favorites Are Here</h1>
      <div className="flex gap-6 mt-20  flex-wrap">
        {
          dummyShowsData.map((movie)=>(
            <MovieCard key={movie._id} movie={movie}/>
          ))
        }
      </div>
    </div>
  ) :(
    <div className='flex justify-center items-center h-screen'>
      <h1 className='font-bold text-2xl leading-2'>Unavailable At This Movement</h1>
    </div>
  );
}

export default Favorite