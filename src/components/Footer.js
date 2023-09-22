import React from "react";
import { Container, Box, Typography, Grid, Link, IconButton } from "@mui/material";
import { LinkedinShareButton, LinkedinIcon } from "react-share";

const Footer = () => {
  return (
    <Box component="footer" sx={{ backgroundColor: "#333", py: 6, color: "#f7f7f7" }}>
      <Container>
        <Grid container spacing={5} alignItems="center">

          <Grid item lg={4} md={6} sm={6}>
            <Typography gutterBottom variant="h5" color="primary">Contact:</Typography>
            <Typography gutterBottom>Encinitas, California</Typography>
            <Link href="tel:619-366-7343" display="block" color="primary" underline="hover">+1(619) 366 7343</Link>
            <Typography gutterBottom>yanncrenn.softwareengineering@gmail.com</Typography>
          </Grid>
          
          {/* Empty grid space */}
          <Grid item lg={3} md={1} sm={0}></Grid>

          <Grid item lg={5} md={5} sm={6}>
            <Box display="flex" justifyContent="center" mb={3}>
              <LinkedinShareButton
                url={"https://www.linkedin.com/in/yann-crenn-23812b230/"}
                quote={"FullStack Developer"}
                hashtag="#javascript"
              >
                <IconButton sx={{ color: "#0072b1", '&:hover': { color: "#005490" } }}>
                  <LinkedinIcon size={36} round={true} />
                </IconButton>
              </LinkedinShareButton>
            </Box>
            <Typography textAlign="center" variant="body2" color="primary">
              Copyright&copy;
              {new Date().getFullYear()}&nbsp;Yann Crenn | All Rights Reserved
            </Typography>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
