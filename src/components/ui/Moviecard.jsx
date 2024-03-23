import React, { useState } from 'react'
import '../../styles/Moviecard.css'
import { Comment, Download, Favorite,} from '@mui/icons-material'
import { ThumbDown } from '@mui/icons-material'
import { ThumbUp } from '@mui/icons-material'
import { IconButton, Rating } from '@mui/material'
import { Link } from 'react-router-dom'
import { useData } from '../../context/Favoritecontext'
import { useTopratedData } from '../../context/Topratedcontext'
import CommentModal from '../../utils/CommentModal'
function Moviecard({ movie }) {
  const [isliked, setisliked] = useState(movie.liked);
  const [isdisliked, setisdisliked] = useState(movie.disliked);
  const [isfavorited, setisfavorite] = useState(movie.favorite);
  const[ratingvalue,setRatingvalue]=useState(2);
  const[opencommentsection,setopencommentsection]=useState(false)
  const handleclose=()=>{
    setopencommentsection(false)
  }
  const handleDownload = () => {
   
    const videoUrl = movie.trailer;
    const link = document.createElement('a');
    link.href = videoUrl;
    link.download = movie.title; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);


  };
  const { setData } = useData();
  const handleAddfavorite = () => {
    setData(prevData => [
      ...prevData,
      movie
    ]);
    setisfavorite(!isfavorited)
  };
  const {setTopratedData} =useTopratedData();
  const handleToprated = (value) => {
    value > 4 &&
    setTopratedData(prevData => [
      ...prevData,
      movie
    ]);
   
  };
  return (
    <div className='movie-container'>
      <div style={{position:'relative',display:'inline-block'}}>
        <div style={{position:'absolute',top:0,left:0,zIndex:1}}>
          <IconButton onClick={handleAddfavorite}>
            <Favorite sx={{color: isfavorited?'#05FC04':'white'}}/>
          </IconButton>
        </div>


        <div style={{position:'absolute',bottom:0,left:0,zIndex:1}}>
        <IconButton onClick={handleDownload}>
            <Download sx={{color:'white'}}/>
          </IconButton>      
          </div>
          <Link to={`/playvideo/${movie.id}`}>
        <img src={movie.poster} alt='Movie' style={{ height: 300, width: 200, cursor: 'pointer', borderRadius: 10 }} />
               </Link>
      </div>
      <div>
        <h3 style={{ color: 'white' }}>{movie.title}</h3>
        <div className='icon-container'>
          <div className='icon'>
            <h6 style={{ color: 'white' }}>{movie.likes}</h6>
            <IconButton onClick={() => {
              setisdisliked(false)
              setisliked(!isliked)
              movie.likes++;
              isdisliked && movie.dislikes--;

            }} >
              <ThumbUp sx={{ color: isliked ? 'red' : 'white', cursor: 'pointer' }} />
            </IconButton>
          </div>
          <div className='icon'>
            <h6 style={{ color: 'white' }}>{movie.dislikes}</h6>
            <IconButton onClick={() => {
              setisdisliked(!isdisliked)
              setisliked(false)
              movie.dislikes++;
              isliked && movie.likes--;
            }}>
              <ThumbDown sx={{ color: isdisliked ? 'brown' : 'white', cursor: 'pointer' }} />
            </IconButton>

          </div>
          <div className='icon'>
            <h6 style={{ color: 'white' }}>{movie.comment}</h6>
            <IconButton onClick={()=>setopencommentsection(!opencommentsection)}>
              <Comment sx={{ color: 'white', cursor: 'pointer' }} />
            </IconButton>


          </div>
        </div>
        <div className='rating'>
          <Rating
           name='simple controlled'
          sx={{color:'white'}}
          value={ratingvalue}
          onChange={(event,value)=>{
            setRatingvalue(value)
            handleToprated(value)
          }}
           />
        </div>
      </div>
      <CommentModal open={opencommentsection} handleclose={handleclose}/>
    </div>
  )
}

export default Moviecard
