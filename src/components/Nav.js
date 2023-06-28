import { Box,AppBar,Toolbar,Typography,Button,IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React,{useState} from 'react';
import { Link } from 'react-router-dom';

const pages = ['FlexDirection' , 'LayoutDirection' , 'AlignContent','AlignItems', 'AlignSelf','FlexWrap' ];

function Nav() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
        <Link style = {{textDecoration: 'none', color: 'white'}} to={'/'}>Home</Link>
          <MenuIcon />
        </IconButton>
        {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          News
        </Typography> */}
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Link style = {{textDecoration: 'none', color: 'white'}} to ={`/${page}`}>
                  {page}
                  </Link>
              </Button>
            ))}
          </Box>
        <Menu
          id='menu-appbar'
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical:'bottom',
            horizontal:'left',
          }}
          keepMounted
          transformOrigin={{
            vertical:'top',
            horizontal:'left',
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display:{ xs:'block' , md: 'none'},
          }}
          >
            {pages.map((page) => (
              <MenuItem key={page} onClick={handleOpenNavMenu}>
                <Typography textAlign={"center"}>
                  <Link style = {{textDecoration: 'none', color: 'white'}} to ={`/${page}`}>
                  {page}
                  </Link>
                </Typography>
              </MenuItem>
            ))}
          </Menu>
      </Toolbar>
    </AppBar>
  </Box>
  );
}

export default Nav;
