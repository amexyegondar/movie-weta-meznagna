import { IconButton, Modal } from '@mui/material'
import React, {  useState } from 'react'
import  '../styles/CommentModal.css'
import { Close, Reply, Send, ThumbDown, ThumbUp } from '@mui/icons-material'
function CommentModal({open,handleclose}) {
    const[comments,setComments]=useState([
        'Awesome!!','The best one !!','I love it!!'
    ])
    const[comment,setComment]=useState('');

   
  return (
   
  <Modal open={open} onClose={()=>handleclose()} style={{ height:"99vh",width:"60vh" ,backgroundColor:'gray',marginTop:'15vh', marginLeft:'33%',borderRadius:10}} >
  <div className='modal'>
  <div className='comment-header'>
    <h2>What people think...</h2>
    <IconButton onClick={()=>{
       handleclose()
        
        }}>
    <Close sx={{color:'white',cursor:'pointer'}}/>
    </IconButton>
   
    </div>
    
    <div className='comments'>
        <div className='comment-section'>
        {
            comments.map((comment,index)=>(
                <div key={index} className='comment'>
                    <p>
                     {comment}
                    </p>
                    <div className='comment-icon-container'>
                        <ThumbUp fontSize='small' sx={{color:'white',cursor:'pointer'}} />
                        <ThumbDown fontSize='small' sx={{color:'white',cursor:'pointer'}}/>
                        <Reply fontSize='small' sx={{color:'white',cursor:'pointer'}}/>
                        
                    </div>
                </div>
            ))
        }
        </div>
        
       
    </div>
    <div className='input-container'>
            <input type="text" placeholder='What about this!' autoFocus name="" id="" value={comment} onChange={(e)=>setComment(e.target.value)} />
           <IconButton
            onClick={
                ()=>  {
                    comment!==''&&
                    setComments(comments=>[...comments,comment])
                    setComment('')
                    } }>
            <Send fontSize='large' sx={{color:'white',}}/>
           </IconButton>
        </div>
  </div>
    
   
   </Modal>
  
  
  )
}

export default CommentModal
