import React from "react";
import { Link } from "react-scroll";
import { AppBar, Toolbar, Button, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  return (
    <AppBar position="sticky" sx={{
      backgroundColor: 'dark', // Modify as per the exact color if 'dark' doesn't work
      zIndex: 1500,  // Increase this if Navbar is not on top of other elements.
      top: 0,
    }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
        Menu
        </Typography>
        <Button color="inherit" sx={{ marginRight: theme => theme.spacing(2), color: 'white' }}>
          <Link smooth={true} to="home">Home</Link>
        </Button>
        <Button color="inherit" sx={{ marginRight: theme => theme.spacing(2), color: 'white' }}>
          <Link smooth={true} to="about" offset={-110}>about me</Link>
        </Button>
        <Button color="inherit" sx={{ marginRight: theme => theme.spacing(2), color: 'white' }}>
          <Link smooth={true} to="services" offset={-110}>services</Link>
        </Button>
        <Button color="inherit" sx={{ marginRight: theme => theme.spacing(2), color: 'white' }}>
          <Link smooth={true} to="experience" offset={-110}>experience</Link>
        </Button>
        <Button color="inherit" sx={{ marginRight: theme => theme.spacing(2), color: 'white' }}>
          <Link smooth={true} to="portfolio" offset={-110}>portfolio</Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
