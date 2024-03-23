import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Movies from '../asset/fake-data/Movies';
import { Card, CardContent, CardMedia, IconButton } from '@mui/material';
import { Comment, ThumbDown, ThumbUp } from '@mui/icons-material';
import Moviecard from '../components/ui/Moviecard';
import '../styles/Playvideo.css'
function Playvideo() {
    const { id } = useParams();
    const movie = Movies.find((movie) => movie.id === id);
    const [isliked, setisliked] = useState(movie.liked);
    const [isdisliked, setisdisliked] = useState(movie.disliked);
    const relatedmovies = Movies.filter((media) => media.catagory === movie.catagory)
    return (
        <div style={{ display: 'flex', justifyContent: 'center', height: '100vh' }}>
           
            <Card raised sx={{ width: '50%', backgroundColor: 'black' }}>
                <h1>{movie.title}</h1>
                <CardMedia
                    component="iframe"
                    
                   
                    src={movie.trailer}
                    title={movie.title}
                    sx={{ borderColor: 'rgb(255, 208, 0)', borderRadius: 10, height:400  }}
                    
                />
                <CardContent sx={{ backgroundColor: 'black', color: 'white', textAlign: 'center', padding:0}}>
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
                            <IconButton>
                                <Comment sx={{ color: 'white', cursor: 'pointer' }} />
                            </IconButton>


                        </div>
                    </div>
                    <p1 style={{color:'rgb(255, 208, 0)'}}>Story</p1><h4 style={{color:'rgb(255, 208, 0)'}}>{movie.story}</h4>
                </CardContent>

            </Card>
            <div className='moviecard-container' style={{marginTop:700}}>
                {relatedmovies.map((movie) => (
                    <Moviecard movie={movie} key={movie.id} />
                )
                )}


            </div>
        </div>
    );
}

export default Playvideo;
