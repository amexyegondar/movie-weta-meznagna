import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Favorite from '../pages/Favorite'
import Music from '../pages/Music'
import Toprated from '../pages/Toprated'
import Playvideo from '../pages/Playvideo'

function Router() {
  
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
     <Route path='/music' element={<Music/>} />
     <Route path='/favorite' element={<Favorite/>} />
     <Route path='/toprated' element={<Toprated/>} />
     <Route path='/playvideo/:id' element={<Playvideo/>}/>
    </Routes>
  )
}

export default Router
