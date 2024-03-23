import React from 'react'
import '../styles/Toprated.css'
import { useTopratedData } from '../context/Topratedcontext'
import Moviecard from '../components/ui/Moviecard';
function Toprated() {
  const {toprateddata}=useTopratedData();
  return (
    <>
    <h1>Your Top rated Movies</h1>
    <div className='toprated-container' >
     
       {
        toprateddata.map((movie)=>(
          <Moviecard movie={movie}/>
        ))
       }
    </div>
    </>
  )
}

export default Toprated
