import React from "react";
import { Box, Typography, Grid, Paper, Avatar } from "@mui/material";
import { styled } from "@mui/system";
import CodeIcon from "@mui/icons-material/Code";
import WebIcon from "@mui/icons-material/Web";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import MemoryIcon from "@mui/icons-material/Memory";

const ServicePaper = styled(Paper)(({ theme }) => ({
  padding: "20px",
  textAlign: "center",
  minHeight: "250px",
  transition: "transform 0.3s, background-color 0.3s",
  "&:hover": {
    transform: "scale(1.05)",
    backgroundColor: "#007BFF",
  },
}));

const ServiceAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(7),
  height: theme.spacing(7),
  margin: theme.spacing(2, "auto"),
  backgroundColor: "#007BFF",
}));

const Services = () => {
  const services = [
    {
      title: "Full-Stack Development",
      desc: "Building robust, scalable applications using React, GraphQL, and TypeScript.",
      icon: <CodeIcon />,
    },
    {
      title: "Frontend Expertise",
      desc: "Designing user-centric web interfaces with React, Redux, and Material-UI.",
      icon: <WebIcon />,
    },
    {
      title: "API Integration",
      desc: "Implementing efficient RESTful APIs and GraphQL endpoints for seamless data flow.",
      icon: <IntegrationInstructionsIcon />,
    },
    {
      title: "Backend Solutions",
      desc: "Crafting high-performance server-side architectures using Node.js, Python, and PHP.",
      icon: <MemoryIcon />,
    },
  ];

  return (
    <Box
      id="services"
      sx={{
        padding: "60px 80px",
        background: "linear-gradient(135deg, #f0f4f8, #ffffff)",
        borderRadius: "15px",
      }}
    >
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ marginBottom: 5, fontWeight: "bold", color: "#212529" }}
      >
        My Services
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <ServicePaper elevation={3}>
              <ServiceAvatar>{service.icon}</ServiceAvatar>
              <Typography
                variant="h6"
                sx={{
                  margin: (theme) => theme.spacing(1, 0),
                  fontWeight: "bold",
                  color: "#343A40",
                }}
              >
                {service.title}
              </Typography>
              <Typography color="textSecondary">{service.desc}</Typography>
            </ServicePaper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;
