import {
  Box,
  Button,
  Card,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import intro from "../../assets/intro.png";
import { theme } from "../../utils/theme";

import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CallIcon from "@mui/icons-material/Call";
import { Link } from "react-router-dom";
import { CTA } from "./styles";
const Home = () => {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <div id="home" className="home">
        <Stack
          justifyContent="center"
          alignItems="center"
          display="flex"
          minHeight="100%"
        >
          <Typography
            variant={isSmallScreen ? "h4" : "h2"}
            gutterBottom
            sx={{ color: "other.white" }}
          >
            Ajeerathan Kumarasamy
          </Typography>
          <Typography
            gutterBottom
            variant={isSmallScreen ? "body2" : "body1"}
            sx={{
              mb: 2,
              color: "other.white",
              fontSize: "1rem",
              letterSpacing: "0.2rem",
              lineHeight: "2rem",
            }}
          >
            Designer | Developer | Nature Lover
          </Typography>
          <Stack flexDirection="row" alignItems="center" gap={5}>
            <Link to="mailTo:kajeerathan@gmail.com">
              <MailOutlineIcon sx={{ color: "other.white" }} />
            </Link>
            <Link to="tel:40071654">
              <CallIcon sx={{ color: "other.white" }} />
            </Link>
          </Stack>
        </Stack>
      </div>
    </>
  );
};

export default Home;
