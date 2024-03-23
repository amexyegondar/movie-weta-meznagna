import React from 'react';
import allmusics from '../asset/fake-data/Musicdata';
import Musicard from '../components/ui/Musicard';
import '../styles/Music.css'

function Music() {
  return (
   <div className='musics-container' >
    <span>
      <h2>
        Chill Out With our Musics
      </h2>
    </span>
     {
      allmusics.map((music)=>(
        <Musicard music={music}/>
      ))
     }
      </div>
   
  )
}

export default Music
