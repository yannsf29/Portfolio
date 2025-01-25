import React from "react";
import {
  Container,
  Box,
  Typography,
  Grid,
  Link,
  IconButton,
} from "@mui/material";
import { LinkedinShareButton, LinkedinIcon } from "react-share";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#000",
        py: 6,
        color: "#f7f7f7",
        borderTop: "2px solid #333",
      }}
    >
      <Container>
        <Grid container spacing={5}>
          <Grid item lg={4} md={6} sm={12}>
            <Typography
              gutterBottom
              variant="h5"
              sx={{ color: "#fff", fontWeight: "bold" }}
            >
              Contact
            </Typography>
            <Typography gutterBottom>Encinitas, California</Typography>
            <Link
              href="tel:619-366-7343"
              display="block"
              sx={{
                color: "#007BFF",
                textDecoration: "none",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              +1(619) 366 7343
            </Link>
            <Typography gutterBottom>
              <Link
                href="mailto:yanncrenn.softwareengineering@gmail.com"
                sx={{
                  color: "#007BFF",
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                yanncrenn.softwareengineering@gmail.com
              </Link>
            </Typography>
          </Grid>

          <Grid
            item
            lg={4}
            md={6}
            sm={12}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Box>
              <LinkedinShareButton
                url={"https://www.linkedin.com/in/yann-crenn-23812b230/"}
                quote={"FullStack Developer"}
                hashtag="#javascript"
              >
                <IconButton
                  sx={{
                    color: "#0072b1",
                    transition: "color 0.3s",
                    "&:hover": { color: "#005490" },
                  }}
                >
                  <LinkedinIcon size={36} round={true} />
                </IconButton>
              </LinkedinShareButton>
            </Box>
          </Grid>

          <Grid item lg={4} md={12} sm={12} textAlign="center">
            <Typography variant="body2" sx={{ color: "#bbb" }}>
              Copyright&copy; {new Date().getFullYear()} Yann Crenn | All Rights
              Reserved
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontSize: "0.8rem", color: "#666", mt: 1 }}
            >
              Built with ❤️ using React and Material-UI
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
