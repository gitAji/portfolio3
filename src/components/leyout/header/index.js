import React, { useState } from "react";

import AppBar from "@mui/material/AppBar";
import {
  Box,
  Drawer,
  IconButton,
  Switch,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import { LogoImg, Nav } from "./styles";
import logo from "../../../assets/logo.png";
import { theme } from "../../../utils/theme";
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <AppBar>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "primary.main",
          padding: ".4rem",
        }}
      >
        <LogoImg src={logo} alt="logo" />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "1rem",
          }}
        ></Box>
        {!isSmallScreen ? (
          <>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                gap: 5,
                fontWeight: "bold",
              }}
            >
              <Nav to="home">Home</Nav>
              <Nav to="skills">Skills</Nav>
              <Nav to="works">Works</Nav>
              <Nav to="contacts">Contacts</Nav>
            </Box>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", gap: 5 }}
            >
              <Switch />
            </Box>
          </>
        ) : (
          <>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Drawer open={mobileOpen} onClose={handleDrawerToggle}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: 5,
                  flexDirection: "column",
                  padding: "1rem",
                }}
              >
                <Nav to="home" onClick={handleDrawerToggle}>
                  Home
                </Nav>
                <Nav to="skills" onClick={handleDrawerToggle}>
                  Skills
                </Nav>
                <Nav to="works" onClick={handleDrawerToggle}>
                  Works
                </Nav>
                <Nav to="contacts" onClick={handleDrawerToggle}>
                  Contacts
                </Nav>
                <Switch />
              </Box>
            </Drawer>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
