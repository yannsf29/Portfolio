import React from "react";
import netflix from "../images/netflix.png";
import cityGuide from "../images/food.png";
import shoppingcart from "../images/shoppingcart.png";
import taskManager from "../images/cocktail.png";
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import { Box, Typography, Grid, Card, CardMedia, CardActionArea } from "@mui/material";
import "react-popupbox/dist/react-popupbox.css";

const Pofrfolio = () => {
  // Netflix
  const openPopupboxNetflix = () => {
    const content = (
      <>
        <Card sx={{ maxWidth: 345, textAlign: 'center' }}>
          <CardMedia
            component="img"
            height="200"
            image={netflix}
          />
          <Typography variant="h6">Movie Application:</Typography>
          <Typography variant="body1">
            Movie Application: A movie buff's paradise, this application facilitates the discovery of both classic and contemporary films, offering detailed insights and reviews.
          </Typography>
          <Typography>
            <b>GitHub:</b> 
            <a className="hyper-link" onClick={() => window.open("https://github.com/yannsf29", "_blank")}>
              https://github.com/yannsf29
            </a>
          </Typography>
        </Card>
      </>
    )
    PopupboxManager.open({ content })
  }

 const popupboxConfigNetflix = {
   titleBar: {
     enable: true,
   },
   fadeIn: true,
   fadeInSpeed: 500
 }

 // food App
 const openPopupboxCityGuide = () => {
  const content = (
    <>
      <Card sx={{ maxWidth: 345, textAlign: 'center' }}>
        <CardMedia
          component="img"
          height="200"
          image={cityGuide}
          alt="Netflix Clone Project..."
        />
        <Typography variant="h6">Food Application:</Typography>
        <Typography variant="body1">
          Food Application: A handy tool for food enthusiasts, this application offers a variety of recipes to explore, helping users find their next favorite dish with ease.
        </Typography>
        <Typography>
          <b>GitHub:</b> 
          <a className="hyper-link" onClick={() => window.open("https://github.com/yannsf29", "_blank")}>
            https://github.com/yannsf29
          </a>
        </Typography>
      </Card>
    </>
  )
  PopupboxManager.open({ content })
}

 const popupboxConfigCityGuide = {
   titleBar: {
     enable: true,
   },
   fadeIn: true,
   fadeInSpeed: 500
 }

 // Portfolio Project

   const content = (
     <>
       <img className="portfolio-image-popupbox" src={shoppingcart} />
       <p>Portfolio:</p>
       <br />
       <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/yannsf29", "_blank")}>https://github.com/yannsf29</a>
     </>
   )
   PopupboxManager.open({ content })

 const openPopupboxPortfolio = () => {
  const content = (
    <>
      <Card sx={{ maxWidth: 345, textAlign: 'center' }}>
        <CardMedia
          component="img"
          height="200"
          image={shoppingcart}        />
        <Typography variant="h6">Shopping Cart Application:</Typography>
        <Typography variant="body1">
        This application streamlines the online shopping experience, ensuring easy item selection and seamless user interaction.
        </Typography>
        <Typography>
          <b>GitHub:</b> 
          <a className="hyper-link" onClick={() => window.open("https://github.com/yannsf29", "_blank")}>
            https://github.com/yannsf29
          </a>
        </Typography>
      </Card>
    </>
  )
  PopupboxManager.open({ content })
}

 const popupboxConfigPortfolio = {
   titleBar: {
     enable: true,
   },
   fadeIn: true,
   fadeInSpeed: 500
 }

 // Cocktail app
 const openPopupboxTaskManager = () => {
  const content = (
    <>
      <Card sx={{ maxWidth: 345, textAlign: 'center' }}>
        <CardMedia
          component="img"
          height="200"
          image={taskManager}
        />
        <Typography variant="h6">Cocktail Application:</Typography>
        <Typography variant="body1">
          Cocktail Application: This application serves as a virtual bartender, guiding users in crafting the perfect cocktail through a vast collection of recipes.
        </Typography>
        <Typography>
          <b>GitHub:</b> 
          <a className="hyper-link" onClick={() => window.open("https://github.com/yannsf29", "_blank")}>
            https://github.com/yannsf29
          </a>
        </Typography>
      </Card>
    </>
  )
  PopupboxManager.open({ content })
}

 

 

 const popupboxConfigTaskManager = {
   titleBar: {
     enable: true,
     text: "project:"
   },
   fadeIn: true,
   fadeInSpeed: 500
 }

  return (
    <Box id="portfolio" className="portfolio-wrapper" sx={{ padding: '60px 100px' }}>
      <Box sx={{ textAlign: 'center', marginBottom: '40px' }}>
        <Typography variant="h3" gutterBottom>
          Portfolio:
        </Typography>
      </Box>

      <Grid container spacing={4} justifyContent="center">
        {[ 
            { img: netflix, onClick: openPopupboxNetflix },
            { img: cityGuide, onClick: openPopupboxCityGuide },
            { img: shoppingcart, onClick: openPopupboxPortfolio },
            { img: taskManager, onClick: openPopupboxTaskManager }
        ].map((project, index) => (
          <Grid item xs={12} md={6} lg={3} key={index}>
            <Card onClick={project.onClick} sx={{ 
                '&:hover': {
                  transform: 'scale(1.03)',
                  boxShadow: 3,
                },
                transition: 'transform 0.3s, boxShadow 0.3s'
            }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image={project.img}
                  alt={project.alt}
                  sx={{
                    transition: 'transform 0.3s',
                    '&:hover': {
                      transform: 'scale(1.1)',
                    },
                  }}
                />
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>

      <PopupboxContainer {...popupboxConfigNetflix} />
      <PopupboxContainer {...popupboxConfigCityGuide} />
      <PopupboxContainer {...popupboxConfigPortfolio} />
      <PopupboxContainer {...popupboxConfigTaskManager} />
    </Box>
  );
};

export default Pofrfolio;
