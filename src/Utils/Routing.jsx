import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Problem'
import About from '../Components/Pod'
import Contact from '../Components/Contact'
import Places from '../Components/Community'
import Profile from '../Components/Profile'

const Routing = () => {
  return (
    <div>
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/places" element={<Places />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </div>
  )
}

export default Routing