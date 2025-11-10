import React from "react";
import aiprotfolio from "../images/aiprotfolio.png";
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

const AIPortfolio = () => {
  const project = {
    title: "AI Knowledge Assistant",
    desc: "An internal AI tool that uses retrieval-augmented generation (RAG) to answer company questions from internal documentation, with a Vite + React frontend and Dockerized backend.",
    img: aiprotfolio,
    demo: "https://yann-tool-ai-1skt.vercel.app", // ✅ your live app
  };

  const openPopup = () => {
    const content = (
      <Box sx={{ textAlign: "center" }}>
        <CardMedia
          component="img"
          image={project.img}
          alt={project.title}
          sx={{
            marginBottom: 2,
            borderRadius: 2,
            maxHeight: 260,
            objectFit: "cover",
          }}
        />
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", marginBottom: 1 }}
        >
          {project.title}
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 3 }}>
          {project.desc}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => window.open(project.demo, "_blank")}
        >
          Open Live Demo
        </Button>
      </Box>
    );

    PopupboxManager.open({ content });
  };

  return (
    <Box
      id="ai-tools"
      sx={{
        padding: "70px 20px 50px",
        background: "#0f172a",
      }}
    >
      <Box sx={{ textAlign: "center", marginBottom: "40px" }}>
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            fontWeight: "bold",
            color: "#f9fafb",
            fontSize: { xs: "2rem", md: "3rem" },
          }}
        >
          AI Tools & Integrations
        </Typography>
        <Typography
          variant="body1"
          sx={{
            maxWidth: "650px",
            margin: "auto",
            color: "#9ca3af",
            fontSize: { xs: "0.9rem", md: "1rem" },
          }}
        >
          Highlighting my work integrating AI into real products, from
          retrieval-augmented generation pipelines to modern React frontends.
        </Typography>
      </Box>

      <Grid container justifyContent="center">
        <Grid item xs={12} sm={10} md={7}>
          <Card
            onClick={openPopup}
            sx={{
              cursor: "pointer",
              borderRadius: 3,
              overflow: "hidden",
              backgroundColor: "#020617",
              boxShadow: "0 22px 60px rgba(15,23,42,0.9)",
              transition: "transform 0.35s, box-shadow 0.35s",
              "&:hover": {
                transform: "translateY(-6px) scale(1.02)",
                boxShadow: "0 30px 90px rgba(15,23,42,1)",
              },
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="320"
                image={project.img}
                alt={project.title}
                sx={{ objectFit: "cover" }}
              />
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>

      <PopupboxContainer
        config={{
          titleBar: { enable: true, text: project.title },
          fadeIn: true,
          fadeInSpeed: 400,
        }}
      />
    </Box>
  );
};

export default AIPortfolio;
