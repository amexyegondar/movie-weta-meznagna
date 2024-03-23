import React from 'react';
import User from '@mui/icons-material/Person';
import Profile from '@mui/icons-material/Person2';
import Subscription from '@mui/icons-material/Subscriptions'
import Downloads from '@mui/icons-material/Download'
import Seen from "@mui/icons-material/RemoveRedEye"
import Rated from '@mui/icons-material/Star'
import Logout from '@mui/icons-material/Logout'

import {  Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'

   const list = () => (
    <Box
      sx={{ width:250, }}
      role="presentation"
     
    >
      <List>
        {/* {['User', 'Profile', 'Subscription', 'Downloads'].map((text, index) => ( */}
          <ListItem key={User} disablePadding>
            <ListItemButton>
             
              <ListItemText primary="Miki Shibabaw" />
            </ListItemButton>
          </ListItem>
          
        {/* ))} */}
        <ListItem key={Profile} disablePadding>
            <ListItemButton>
              <ListItemIcon>
               <Profile sx={{color:'white'}}/>
              </ListItemIcon>
              <ListItemText primary="Profile"/>
            </ListItemButton>
          </ListItem>
          <ListItem key={Subscription} disablePadding>
            <ListItemButton>
              <ListItemIcon>
               <Subscription sx={{color:'white'}}/>
              </ListItemIcon>
              <ListItemText primary="Subscription" />
            </ListItemButton>
          </ListItem>  
          <ListItem key="Downloads" disablePadding>
            <ListItemButton>
              <ListItemIcon>
               <Downloads sx={{color:'white'}}/>
              </ListItemIcon>
              <ListItemText primary="Downloads" />
            </ListItemButton>
          </ListItem>
      </List>
      <Divider />
      <List>
        {/* {['Seen', 'Rated', 'Logout'].map((text, index) => ( */}
          <ListItem key="Seen" disablePadding>
            <ListItemButton >
              <ListItemIcon>
                <Seen sx={{color:'white'}}/>
              </ListItemIcon>
              <ListItemText primary="Seen" />
            </ListItemButton>
          </ListItem>
        {/* ))} */}
        <ListItem key="Rated" disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Rated sx={{color:'white'}}/>
              </ListItemIcon>
              <ListItemText primary="Rated" />
            </ListItemButton>
          </ListItem>
          <ListItem key="Logout"disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Logout sx={{color:'white'}}/>
              </ListItemIcon>
              <ListItemText primary="LogOut"/>
            </ListItemButton>
          </ListItem>
          
      </List>
    </Box>
  );
export default list