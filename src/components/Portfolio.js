import React from "react";
import netflix from "../images/netflix.png";
import cityGuide from "../images/food.png";
import shoppingcart from "../images/shoppingcart.png";
import taskManager from "../images/cocktail.png";
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardActionArea,
  Button,
  Grid,
} from "@mui/material";
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {
  const projects = [
    {
      title: "Movie Application",
      desc: "Facilitates the discovery of both classic and contemporary films with detailed insights and reviews.",
      img: netflix,
      github: "https://github.com/yannsf29",
    },
    {
      title: "Food Application",
      desc: "Offers a variety of recipes, helping users find their next favorite dish with ease.",
      img: cityGuide,
      github: "https://github.com/yannsf29",
    },
    {
      title: "Shopping Cart Application",
      desc: "Streamlines the online shopping experience with easy item selection and seamless interaction.",
      img: shoppingcart,
      github: "https://github.com/yannsf29",
    },
    {
      title: "Cocktail Application",
      desc: "A virtual bartender guiding users in crafting the perfect cocktail through a vast collection of recipes.",
      img: taskManager,
      github: "https://github.com/yannsf29",
    },
  ];

  const openPopup = (project) => {
    const content = (
      <Box sx={{ textAlign: "center" }}>
        <CardMedia
          component="img"
          image={project.img}
          alt={project.title}
          sx={{ marginBottom: 2, borderRadius: 2, height: "200px" }}
        />
        <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 1 }}>
          {project.title}
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 2 }}>
          {project.desc}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => window.open(project.github, "_blank")}
        >
          View on GitHub
        </Button>
      </Box>
    );
    PopupboxManager.open({ content });
  };

  return (
    <Box id="portfolio" sx={{ padding: "60px 20px", background: "#f8f9fa" }}>
      <Box sx={{ textAlign: "center", marginBottom: "40px" }}>
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            fontWeight: "bold",
            color: "#212529",
            fontSize: { xs: "2rem", md: "3rem" },
          }}
        >
          Portfolio
        </Typography>
        <Typography
          variant="body1"
          sx={{
            maxWidth: "600px",
            margin: "auto",
            color: "#6c757d",
            fontSize: { xs: "0.9rem", md: "1rem" },
          }}
        >
          A showcase of my projects, demonstrating expertise in full-stack
          development and modern web technologies.
        </Typography>
      </Box>

      <Grid container spacing={3} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              onClick={() => openPopup(project)}
              sx={{
                cursor: "pointer",
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: 6,
                },
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image={project.img}
                  alt={project.title}
                />
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>

      <PopupboxContainer
        config={{
          titleBar: { enable: true },
          fadeIn: true,
          fadeInSpeed: 500,
        }}
      />
    </Box>
  );
};

export default Portfolio;
