import React from "react";
import { Box, Typography, Grid, Paper, Avatar } from "@mui/material";

const Services = () => {
  return (
    <Box id="services" className="services" sx={{ padding: '60px 80px' }}> {/* Adjusted the padding here */}
      <Typography variant="h4" align="center" gutterBottom sx={{marginBottom: 5}}>
        My Services
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {[
          { title: "Web Development", desc: "Crafting modern and efficient websites using the latest proven technologies." },
          { title: "React/React Native", desc: "Individualized and results-focused development with React and React Native." },
          { title: "Javascript/Typescript", desc: "Delivering bespoke, results-oriented solutions in JavaScript and TypeScript." },
          { title: "Python/Ruby", desc: "Tailoring high-efficiency applications using Python and Ruby, with a focus on the end goal." },
        ].map((service, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper elevation={3}   sx={{ 
                padding: '20px', 
                textAlign: 'center', 
                minHeight: '250px',
                transition: 'transform 0.3s, background-color 0.3s', // Added a smooth transition
                '&:hover': {
                  transform: 'scale(1.05)',  // Scale the paper on hover
                  backgroundColor: theme => theme.palette.grey[300], // Change background color on hover
                }
              }}>
              <Avatar sx={{
                width: theme => theme.spacing(7),
                height: theme => theme.spacing(7),
                margin: theme => theme.spacing(2, 'auto'),
                backgroundColor: theme => theme.palette.primary.main,
              }}></Avatar>
              <Typography variant="h6" sx={{ margin: theme => theme.spacing(1, 0) }}>
                {service.title}
              </Typography>
              <Typography>{service.desc}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;
