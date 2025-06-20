import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
import {MenuIcon, SearchIcon, TicketPlus, XIcon} from 'lucide-react'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'

const Navbar = () => {
  const [isOpen,setIsOpen]= useState(false)
  const {user}= useUser()
  const {openSignIn}= useClerk()
  const navigate = useNavigate()
  return (
    <div className='fixed top-0 left-0 w-full flex justify-between z-50 items-center px-6 md:px-16 lg:px-32 py-5'>
      <Link to='/'>
      <img src={assets.logo} className='w-36 h-auto'></img>
      </Link>

      <div className={`max-md:absolute max-md:top-0 max-md:left-0 max-md:font-medium max-md:text-lg z-50 flex max-md:flex-col max-md:h-screen max-md:justify-center items-center md:flex-row gap-8 min-md:px-8 py-3 min-md:rounded-full md:bg-white/10 md:border border-gray-300/20 overflow-hidden transition-[width] duration-300 backdrop:blur max-md:bg-black/80 ${isOpen?'max-md:w-full':'max-md:w-0'}`}>

        <XIcon className='absolute top-6 right-6 w-6 h-6 md:hidden cursor-pointer' onClick={()=>setIsOpen(!isOpen)}></XIcon>
        <Link to='/' onClick={()=>{scrollTo(0,0),setIsOpen(false)}}>Home</Link>
        <Link to='/movies' onClick={()=>{scrollTo(0,0),setIsOpen(false)}}>Movies</Link>
        <Link to='/' onClick={()=>{scrollTo(0,0),setIsOpen(false)}}>Theater</Link>
        <Link to='/' onClick={()=>{scrollTo(0,0),setIsOpen(false)}}>Release</Link>
        <Link to='/favorite' onClick={()=>{scrollTo(0,0),setIsOpen(false)}}>Favorite</Link>
      </div>

        <MenuIcon className={`min-md:hidden w-8 h-8 absolute top-6 right-6 cursor-pointer ${isOpen?'hidden':'visible'}`} onClick={()=>setIsOpen(!isOpen)}></MenuIcon>

        <div className='flex gap-8 items-center max-md:mr-10'>
          <SearchIcon className='w-6 h-6 cursor-pointer'></SearchIcon>
          {
            !user? (
              <button className='px-6 py-1 max-md:px-2 bg-primary hover:bg-primary-dull rounded-full transition cursor-pointer font-medium' onClick={openSignIn}>Login</button>
            ) : (
              <UserButton>
                <UserButton.MenuItems>
                  <UserButton.Action label='Bookings' labelIcon={<TicketPlus width={15}/>} onClick={()=>navigate('/my-bookings')}></UserButton.Action>
                </UserButton.MenuItems>
              </UserButton>
            )
          }
          
        </div>
      


    </div>
  )
}

export default Navbar