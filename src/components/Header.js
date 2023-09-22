import React from "react";
import { Box, Typography } from "@mui/material";
import { keyframes } from "@emotion/react";
import backgroundImage from "../wall-and-laptop-background.png";

const zoomAnimation = keyframes`
  0% {
    background-size: 100% 100%;
  }
  100% {
    background-size: 110% 110%;
  }
`;

const Header = () => {
  const headerStyle = {
    width: '100%',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    overflow: 'hidden',
    position: 'relative',
    marginBottom: 8,
    animation: `${zoomAnimation} 10s infinite alternate`, // Apply the zooming animation here
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1,
  };

  const mainInfoStyle = {
    zIndex: 2,
    textAlign: 'center',
    maxWidth: '80%',
    padding: '20px',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: '10px',
    backdropFilter: 'blur(5px)',
  };

  return (
    <Box id="home" className="header-wrapper" sx={headerStyle}>
      <Box sx={overlayStyle}></Box>
      <Box className="main-info" sx={mainInfoStyle}>
        <Typography variant="h2" gutterBottom>
          Web Development
        </Typography>
      </Box>
    </Box>
  );
};

export default Header;
