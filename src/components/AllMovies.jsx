import React, { useEffect, useState } from 'react'
import '../styles/Allmovie.css'
import { Button } from '@mui/material'
import movies from '../asset/fake-data/Movies';
import Moviecard from './ui/Moviecard';
function AllMovies() {
const[catagory,setcatagory]=useState('All');
const[allmovies,setAllmovies]=useState(movies);
const[filteredmovies,setfiltedmovies]=useState([]);
const[query,setquery]=useState('');
const[searchedmovie,setsearchedmovie]=useState([]);

useEffect(
  ()=>{
  function triggercatagory(){
    if(catagory==='All'){
      setAllmovies(movies)
     }
     if(catagory==='Hollywood'){
       const filteredmovies=allmovies.filter((movie)=>movie.catagory==='Hollywood')
       setfiltedmovies(filteredmovies)
      }
      if(catagory==='Ethiopia'){
       const filteredmovies=allmovies.filter((movie)=>movie.catagory==='Ethiopia')
        setfiltedmovies(filteredmovies)
      }
      if(catagory==='Bollywood'){
       const filteredmovies=allmovies.filter((movie)=>movie.catagory==='Bollywood')
   
       setfiltedmovies(filteredmovies)
      }
  }
  triggercatagory();

  },[catagory]
);
useEffect(()=>{
 const searchedmovie=allmovies.filter((movie)=>{
  if(query===''){
    return movie;
  }
  if(movie.title.toLowerCase().includes(query.toLowerCase())){
    return movie;
  }
  else{
    return console.log('Movie not found...')
  }
 })
 setsearchedmovie(searchedmovie);
},[query])
  return (
    <div className='movies-container'>
      <div className='input-field'>
        <input 
         type="search" name="" 
         placeholder="What are you looking for?" 
         className='input-f'
        value={query} 
        onChange={(e)=>setquery(e.target.value)}
         />
        
          </div>
       <div className='button-container' >
        <Button 
        onClick={()=>setcatagory('All')}
        variant={catagory==="All" ?'contained':'outlined' } sx={{marginRight:5}}>All</Button>
        <Button 
        onClick={()=>setcatagory('Hollywood')}
        variant={catagory==="Hollywood" ?'contained':'outlined' }  sx={{marginRight:5}}>Hollywood</Button>
        <Button onClick={()=>setcatagory('Ethiopia')}
        variant={catagory==="Ethiopia" ?'contained':'outlined' }  sx={{marginRight:5}}>AradaCinema</Button>
        <Button onClick={()=>setcatagory('Bollywood')}
         variant={catagory==="Bollywood" ?'contained':'outlined' }  sx={{marginRight:5}}>Bollywood</Button>
       </div>
       <div className='movie-card-container'>
        { query===''?catagory==='All' ? allmovies.map((movie)=>(
          <Moviecard movie={movie} key={movie.id}/>
        )) :filteredmovies.map((movie)=>(
          <Moviecard movie={movie} key={movie.id}/>
        )):searchedmovie.map((movie)=>(
          <Moviecard movie={movie} key={movie.id}/>
        ))}
     
       
       </div>
      


    </div>
  )
}

export default AllMovies
