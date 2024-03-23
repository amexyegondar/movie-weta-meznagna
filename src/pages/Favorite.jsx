import React from 'react'
import '../styles/Favorite.css'
import { useData } from '../context/Favoritecontext'
import Moviecard from '../components/ui/Moviecard'
function Favorite() {
  const{data}=useData()
  return (
    <>
    <h1>Your Favorite Movies</h1>

    <div className='favorite-container'>
      {data.map((movie)=>(
        <Moviecard movie={movie}/>
      ))}
    </div>
    </>
  )
}

export default Favorite
