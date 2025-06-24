import React, { useState } from 'react'
import { dummyTrailers } from '../assets/assets'
import Reactplayer from 'react-player'
import { PlaySquareIcon } from 'lucide-react';

const TrailerSection = () => {
    const [currentTrailer,setCurrentTrailer] = useState(dummyTrailers[0]);
  return (
    <div className='px-6 md:px-16 lg:px-36 overflow-hidden mt-20 mb-10'>        
        <p className='text-gray-300 text-lg font-semibold mx-auto'>Trailers</p>
        <div className='relative mt-6 flex justify-center items-center w-full'>
            <Reactplayer url={currentTrailer.videoUrl} width={986}  height={550} controls='true'/>
        </div>
        <div className='group grid grid-cols-4 gap-4 w-full mt-10'>
            {
                dummyTrailers.map((trailer)=>(
                    <div onClick={()=>{setCurrentTrailer(trailer)}} className='relative group-hover:not-hover:opacity-50 hover:translate-x-1 duration-300 maxh-60'>
                        <img src={trailer.image} alt="Trailer" className='h-full w-full'/>
                        <PlaySquareIcon className='absolute w-auto h-12 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform' strokeWidth={1.6}/>
                    </div>
                ))
            }

        </div>
    </div>
  )
}

export default TrailerSection