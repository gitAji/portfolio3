import React from "react";
import { Nav } from "../leyout/header/styles";
import RoofingIcon from "@mui/icons-material/Roofing";
import ComputerIcon from "@mui/icons-material/Computer";
import { NavIconsWrapper } from "./styles";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { Box } from "@mui/material";
const NavIcons = () => {
  return (
    <Box>
      <NavIconsWrapper>
        <Nav to="home">
          <RoofingIcon
            sx={{
              fontSize: "2rem",
              color: "secondary.main",
              pointer: "cursor",
              cursor: "pointer",
            }}
          />
        </Nav>
        <Nav to="skills">
          <ComputerIcon sx={{ fontSize: "2rem", color: "secondary.main" }} />
        </Nav>
        <Nav to="works">
          <WorkOutlineIcon sx={{ fontSize: "2rem", color: "secondary.main" }} />
        </Nav>
        <Nav to="contacts">
          <MailOutlineIcon sx={{ fontSize: "2rem", color: "secondary.main" }} />
        </Nav>
      </NavIconsWrapper>
    </Box>
  );
};

export default NavIcons;
