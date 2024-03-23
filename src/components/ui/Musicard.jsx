import { Pause, PlayCircleRounded } from '@mui/icons-material'
import { IconButton, Rating } from '@mui/material'
import React, { useState } from 'react'
import '../../styles/Music.css'
function Musicard({music}) {
    const[ratingvalue,setRatingvalue]=useState(2)
    const[isplaying,setIsplaying]=useState(false)
  return (
    
      <div className='music-container'>
        <IconButton onClick={()=>setIsplaying(!isplaying)}>
        <PlayCircleRounded sx={{color:'white' ,height:50,width:50,cursor:'pointer'}}/>

        </IconButton>
       
       
       <h4>{music.artist}</h4>
       <h4>{music.title}</h4> 
       <div className='rating'>
          <Rating sx={{color:'white',borderColor:'white'}}
        value={ratingvalue}
        onChange={(event,value)=>setRatingvalue(value)}
       />
       </div>
     

        
      </div>
   
  )
}

export default Musicard
