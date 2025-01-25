import React from "react";
import { Link } from "react-scroll";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/system";

const StyledAppBar = styled(AppBar)({
  backgroundColor: "#000",
  boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.3)",
});

const StyledButton = styled(Button)({
  color: "white",
  fontWeight: "bold",
  "&:hover": {
    color: "#007BFF",
  },
});

const Navbar = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <StyledAppBar position="sticky" sx={{ zIndex: 1500 }}>
      <Toolbar>
        <Typography
          variant="h6"
          sx={{ flexGrow: 1, fontWeight: "bold", color: "white" }}
        >
          My Portfolio
        </Typography>
        {!isMobile ? (
          <>
            <StyledButton>
              <Link
                smooth={true}
                to="home"
                spy={true}
                offset={-70}
                duration={500}
              >
                Home
              </Link>
            </StyledButton>
            <StyledButton>
              <Link
                smooth={true}
                to="about"
                spy={true}
                offset={-70}
                duration={500}
              >
                About Me
              </Link>
            </StyledButton>
            <StyledButton>
              <Link
                smooth={true}
                to="services"
                spy={true}
                offset={-70}
                duration={500}
              >
                Services
              </Link>
            </StyledButton>
            <StyledButton>
              <Link
                smooth={true}
                to="experience"
                spy={true}
                offset={-70}
                duration={500}
              >
                Experience
              </Link>
            </StyledButton>
            <StyledButton>
              <Link
                smooth={true}
                to="portfolio"
                spy={true}
                offset={-70}
                duration={500}
              >
                Portfolio
              </Link>
            </StyledButton>
          </>
        ) : (
          <IconButton edge="end" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
        )}
      </Toolbar>
    </StyledAppBar>
  );
};

export default Navbar;
