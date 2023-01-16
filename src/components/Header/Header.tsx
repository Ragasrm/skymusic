import { AppBar, Box, CssBaseline, IconButton, Toolbar, Typography } from '@mui/material';
import { NavLink } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

import './Header.css'
import { useState } from 'react';
import DrawerComponent from '../DrawerComponent/DrawerComponent';

type Props = {}

function Header(props: Props) {
  const [isMobile, setIsMobile] = useState(false)
  return (
    <Box sx={{ display: 'flex' }}>
    <CssBaseline />
    <AppBar component="nav">
      <Toolbar className='header-toolbar'>
      <IconButton
            className='hambergar'
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={()=>setIsMobile(!isMobile)}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        <Typography
          variant="h6"
          className='header-title'         
        >
          Sky Musiq
        </Typography>
        {
          isMobile ? 
          <DrawerComponent openDrawer={isMobile} setIsMobile={setIsMobile}/>
          :
          <Box component={'div'}  sx={{ display: { xs: 'none', sm: 'block' } }}>
            <NavLink exact to="/" className='link' activeClassName='active' >
              Top Albums
            </NavLink>
            <NavLink to="/about" className='link' activeClassName='active' >
              your Favorites
            </NavLink>
          </Box>

        }
        
      </Toolbar>
    </AppBar>
    </Box>
  )
}

export default Header