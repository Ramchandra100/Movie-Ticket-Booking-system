import React from 'react'
import { assets } from '../assets/assets'
import { ArrowRightIcon, CalendarIcon, ClockIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import FeaturedSection from './FeaturedSection'

const HeroSection = () => {
    const navigate =useNavigate()
  return (
    <div className='flex flex-col items-start justify-center gap-4 px-6 md:px-16 lg:px-36 bg-[url("/backgroundImage.png")] h-screen  bg-cover bg-center '>
        <img src={assets.marvelLogo} alt="" className='max-h-11 md:h-11 mt-20'/>
        <h1 className='text-5xl md:text-7xl font-semibold'>Gaurdians <br/>of the Galaxy</h1>
        <div className="flex items-center gap-1 md:gap-4 text-gray-300 md:leading-18 max-md:text-sm">
            <span>Action | Advanture | Sci-fi</span>
            <div className="flex items-center gap-1">
            <CalendarIcon className='h-4.5'/>2018
            <ClockIcon className='h-4.5'/>2h 55m
            </div>
        </div>
        <p className='max-w-md text-gray-300'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, delectus tempora at cum reprehenderit minima itaque ullam eum natus eaque assumenda, sed nostrum atque molestias culpa cupiditate quaerat, officiis ut?</p>
        <button className='group flex items-center gap-1 bg-primary hover:bg-primary-dull transition rounded-full px-3 py-2' onClick={()=>navigate('/movies')}>
            Explore
            <ArrowRightIcon className='group-hover:translate-x-1.5 transition w-5'/>
        </button>
    </div>
  )
}

export default HeroSection