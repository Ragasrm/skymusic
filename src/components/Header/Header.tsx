import { AppBar, Box, CssBaseline, Toolbar, Typography } from '@mui/material'
import './Header.css'

type Props = {}

function Header({}: Props) {
  return (
    <Box sx={{ display: 'flex' }}>
    <CssBaseline />
    <AppBar component="nav">
      <Toolbar className='header-toolbar'>
        <Typography
          variant="h6"
          className='header-title'         
        >
          Sky Musiq
        </Typography>
      </Toolbar>
    </AppBar>
    </Box>
  )
}

export default Header