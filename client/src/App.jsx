import React from 'react'
import Footer from './components/footer'
import Navbar from './components/navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Movies from './pages/Movies'
import MovieDetails from './pages/MovieDetails'
import MyBookings from './pages/MyBookings'
import SeatLayout from './pages/SeatLayout'
import Favorite from './pages/Favorite'

const App = () => {
  return (
    <>
    <Footer></Footer>
    <Navbar></Navbar>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movies' element={<Movies/>}/>
        <Route path='/movies/:id' element={<MovieDetails/>}/>
        <Route path='/my-bookings' element={<MyBookings/>}/>
        <Route path='/movies/:id/:date' element={<SeatLayout/>}/>
        <Route path='/favorite' element={<Favorite/>}/>
    </Routes>
    </>
  )
}

export default App