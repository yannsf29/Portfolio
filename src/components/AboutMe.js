import React from "react";
import author from "../me.jpg";
import { Button, Container, Grid, Typography, Avatar, Box } from '@mui/material';
import { styled } from '@mui/system';

const ProfileImage = styled(Avatar)({
  width: '250px',
  height: '250px',
  margin: 'auto',
  boxShadow: "0 8px 20px 0 rgba(0, 0, 0, 0.15)", 
});

const StyledButton = styled(Button)({
  marginRight: '20px',
  padding: '8px 16px',
  fontWeight: 'bold',
  backgroundColor: '#007BFF', 
  '&:hover': {
    backgroundColor: '#0056b3', 
  }
});

const AboutMe = () => {
  return (
    <Container 
      id="about" 
      sx={{ 
        py: [10, 8],  
        background: 'linear-gradient(45deg, #e9f1f6, #f7f9fc)', 
        borderRadius: '15px',  
      }}
    >
      <Grid container spacing={5}>
        <Grid item lg={6} xs={12}>
          <Box display="flex" justifyContent="center" mb={5}>
            <ProfileImage src={author} alt="author..." />
          </Box>
        </Grid>
        <Grid item lg={6} xs={12}>
          <Typography variant="h4" component="h1" gutterBottom style={{ fontWeight: 'bold', marginBottom: '20px', color: '#212529' }}>
            About Me
          </Typography>
          <Typography variant="body1" paragraph style={{ lineHeight: '1.6', marginBottom: '20px', color: '#343A40' }}>
          Dynamic Full-Stack Web Developer steeped in the meticulous application of JavaScript, React, GraphQL, and TypeScript, nurturing a profound passion for crafting user-centric web applications. I bring to the table an analytical mindset honed for diagnosing and enhancing code quality, flourishing in both solitary and collaborative environments to foster innovation and streamline website functionality. My trajectory illustrates a seasoned leader adept at steering compact teams to the successful realization of comprehensive, start-to-finish projects.
          </Typography>
          <StyledButton variant="contained" color="primary" href="/Yann-Crenn.pdf" download>
            Download Resume
          </StyledButton>
          <StyledButton variant="contained" color="primary" href="https://www.linkedin.com/in/yann-crenn-23812b230/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </StyledButton>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AboutMe;
