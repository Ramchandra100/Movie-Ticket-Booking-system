import { ArrowRight } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { dummyShowsData } from '../assets/assets'
import MovieCard from './MovieCard'

const FeaturedSection = () => {
    const navigate = useNavigate()
  return (
    <div className='px-6 md:px-16 lg:px-36 overflow-hidden'>
        <div className="relative flex items-center justify-between pt-20 pb-10 text-gray-300">
            <p className='font-medium text-lg'>Now Showing</p>
            <button onClick={()=>{navigate('/movies'); scrollTo(0,0);}} className='group flex gap-1 items-center text-sm cursor-pointer'>Veiw All <ArrowRight className='group-hover:translate-x-1 transition max-md:h-4.5'/></button>
        </div>

        <div className='flex max-sm:justify-center flex-wrap gap-8 mt-8'>
          {dummyShowsData.slice(0,4).map(
            (show)=>(<MovieCard key={show._id} movie={show}/>)
          )}
        </div>

        <div className='flex justify-center mt-20 mb-10'>
            <button onClick={()=>{navigate('/movies'); scrollTo(0,0);}} className='flex items-center gap-1 group bg-primary hover:bg-primary-dull hover:translate-x-1 transition rounded-full px-3 py-2'>Show more <ArrowRight className='group-hover:translate-x-1 transition max-md:w-5'/></button>
        </div>

    </div>
  )
}

export default FeaturedSection