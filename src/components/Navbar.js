import React, { useState } from "react";
import { Link } from "react-scroll";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
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
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const menuItems = [
    { text: "Home", to: "home" },
    { text: "About Me", to: "about" },
    { text: "Services", to: "services" },
    { text: "Experience", to: "experience" },
    { text: "Portfolio", to: "portfolio" },
  ];

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
          menuItems.map((item, index) => (
            <StyledButton key={index}>
              <Link
                smooth={true}
                to={item.to}
                spy={true}
                offset={-70}
                duration={500}
              >
                {item.text}
              </Link>
            </StyledButton>
          ))
        ) : (
          <>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
            >
              <List>
                {menuItems.map((item, index) => (
                  <ListItem button key={index} onClick={toggleDrawer(false)}>
                    <Link
                      smooth={true}
                      to={item.to}
                      spy={true}
                      offset={-70}
                      duration={500}
                    >
                      <ListItemText primary={item.text} />
                    </Link>
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </>
        )}
      </Toolbar>
    </StyledAppBar>
  );
};

export default Navbar;
