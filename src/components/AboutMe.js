import React from "react";
import author from "../me.jpg";
import {
  Button,
  Container,
  Grid,
  Typography,
  Avatar,
  Box,
} from "@mui/material";
import { styled } from "@mui/system";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const ProfileImage = styled(Avatar)({
  width: "250px",
  height: "250px",
  margin: "auto",
  boxShadow: "0 8px 20px rgba(0, 0, 0, 0.25)",
  border: "5px solid #fff",
});

const StyledButton = styled(Button)({
  marginRight: "20px",
  padding: "10px 20px",
  fontWeight: "bold",
  borderRadius: "30px",
  backgroundColor: "#007BFF",
  minWidth: "200px",
  transition: "background-color 0.3s ease",
  "&:hover": {
    backgroundColor: "#0056b3",
  },
});

const AboutMe = () => {
  return (
    <Container
      id="about"
      sx={{
        py: [10, 8],
        px: [2, 4],
        backgroundColor: "#000",
        borderRadius: "15px",
        color: "#f7f7f7",
        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
      }}
    >
      <Grid container spacing={5} alignItems="center">
        <Grid item lg={6} xs={12}>
          <Box display="flex" justifyContent="center" mb={5}>
            <ProfileImage src={author} alt="author" />
          </Box>
        </Grid>
        <Grid item lg={6} xs={12}>
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: "bold",
              marginBottom: "20px",
              color: "#fff",
            }}
          >
            About Me
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{
              lineHeight: 1.8,
              marginBottom: "20px",
              color: "#ccc",
            }}
          >
            Results-driven Full-Stack Web Developer with expertise in
            JavaScript, PHP, Python, React, GraphQL, and TypeScript,
            specializing in building scalable, user-focused web applications.
            Known for exceptional problem-solving skills, particularly in
            debugging and resolving complex platform issues to ensure optimal
            functionality and user satisfaction. Adept at collaborating with
            cross-functional teams and leveraging agile methodologies to deliver
            high-quality solutions. Passionate about optimizing performance and
            reliability, having successfully implemented architectures and
            systems that significantly improved application speed, stability,
            and engagement.
          </Typography>
          <StyledButton variant="contained" href="/Yann-Crenn.pdf" download>
            Download Resume
          </StyledButton>
          <StyledButton
            variant="contained"
            href="https://www.linkedin.com/in/yann-crenn-23812b230/"
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<LinkedInIcon />}
          >
            LinkedIn
          </StyledButton>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutMe;
