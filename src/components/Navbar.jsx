import React, { useRef } from 'react';
import '../styles/Navbar.css';
import { deepOrange } from '@mui/material/colors';
import { Avatar, Button, IconButton, SwipeableDrawer } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import list from '../utils/Modal';
import { Link } from 'react-router-dom';
import { Menu } from '@mui/icons-material';

function Navbar() {
    const [open, setOpen] = React.useState(false);
    const toggleDrawer = () => setOpen(!open);
    const menuRef=useRef();
    const toggleMenu = () => menuRef.current.classList.toggle("show-menu");
    return (
        <div className='navbar'>
            <div className='logo-container'>
                <p style={{ fontSize: 20, fontWeight: 900, cursor: 'pointer' }}>
                    Wetat Meznagna
                </p>
            </div>
            <div className='navbar-section' ref={menuRef} >
                <Link to='/home'>
                    <Button variant='text'>Home</Button>
                </Link>
                <Link to='/music'>
                    <Button variant='text'>Music</Button>
                </Link>
                <Link to='/favorite'>
                    <Button variant='text'>Favorite</Button>
                </Link>
                <Link to='/toprated'>
                    <Button variant='text'>Top Rated</Button>
                </Link>
            </div>
            <div className='profile-section'>
                <IconButton aria-label='Download'>
                    <DownloadIcon />
                </IconButton>
                <div onClick={toggleDrawer}>
                    <Avatar className='avatar' sx={{ bgcolor: deepOrange[500], marginRight: 5, cursor: 'pointer', height: 50, width: 50 }}>N</Avatar>
                </div>
                <SwipeableDrawer
                    anchor='right'
                    open={open}
                    onClose={toggleDrawer}
                    onOpen={toggleDrawer}
                    PaperProps={{
                        sx: {
                            backgroundColor: "black",
                            color: "white",
                            fontFamily: "Poppins"
                        }
                    }}
                >
                    {list()}
                </SwipeableDrawer>
            </div>
            <div className='mobile-menu' >
                  <IconButton onClick={toggleMenu}>
                <Menu/>
            </IconButton>
            </div>
          
        </div>
    )
}

export default Navbar;
