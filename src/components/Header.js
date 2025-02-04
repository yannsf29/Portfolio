import React from "react";
import { Box, Typography, Button } from "@mui/material";
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

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Header = () => {
  const headerStyle = {
    width: "100%",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    overflow: "hidden",
    position: "relative",
    marginBottom: 8,
    animation: `${zoomAnimation} 15s infinite alternate`,
    "@media (max-width:600px)": {
      height: "80vh",
      backgroundSize: "cover",
    },
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background:
      "linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9))",
    zIndex: 1,
  };

  const mainInfoStyle = {
    zIndex: 2,
    textAlign: "center",
    maxWidth: "80%",
    padding: "20px",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: "10px",
    backdropFilter: "blur(10px)",
    animation: `${fadeIn} 1.5s ease-in-out`,
    "@media (max-width:600px)": {
      maxWidth: "90%",
      padding: "15px",
    },
  };

  const buttonStyle = {
    marginTop: "20px",
    padding: "10px 20px",
    fontSize: "1rem",
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#007BFF",
    borderRadius: "25px",
    textTransform: "none",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
    transition: "background-color 0.3s, transform 0.2s",
    "&:hover": {
      backgroundColor: "#0056b3",
      transform: "scale(1.05)",
    },
    "@media (max-width:600px)": {
      padding: "8px 16px",
      fontSize: "0.9rem",
    },
  };

  return (
    <Box id="home" className="header-wrapper" sx={headerStyle}>
      <Box sx={overlayStyle}></Box>
      <Box className="main-info" sx={mainInfoStyle}>
        <Typography
          variant="h2"
          gutterBottom
          sx={{
            fontWeight: "bold",
            color: "#fff",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
            "@media (max-width:600px)": {
              fontSize: "1.8rem",
            },
          }}
        >
          Full-Stack Web Developer
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: "#ddd",
            marginBottom: "20px",
            textShadow: "1px 1px 3px rgba(0, 0, 0, 0.5)",
            "@media (max-width:600px)": {
              fontSize: "1rem",
            },
          }}
        >
          Crafting modern, scalable, and user-centric web applications.
        </Typography>
        <Button sx={buttonStyle} href="#portfolio">
          View My Work
        </Button>
      </Box>
    </Box>
  );
};

export default Header;
