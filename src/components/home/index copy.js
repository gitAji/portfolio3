import {
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
import FileDownloadIcon from "@mui/icons-material/FileDownload";

const Home = () => {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <div id="home" className="home">
        <Card
          elevation={0}
          sx={{ minHeight: "100vh", p: 5, mt: 5, backgroundColor: "#333" }}
        >
          <Stack
            direction={isSmallScreen ? "column" : "row"}
            justifyContent="space-between"
            alignItems=""
            spacing={2}
          >
            <Paper
              elevation={0}
              spacing={5}
              sx={{ p: 5, backgroundColor: "#333" }}
            >
              <Typography
                variant="h4"
                gutterBottom
                sx={{ color: "secondary.main" }}
              >
                Hi, I'm Ajee
              </Typography>
              {/*}
              <Typography
                gutterBottom
                variant="body2"
                sx={{
                  mb: 2,
                  color: "#fff",
                  fontSize: "1rem",
                  letterSpacing: "0.1rem",
                  lineHeight: "2rem",
                }}
              >
                I am currently learning to code and I am a nature lover. My
                passion is to design visually appealing and functional websites.
                I am also interested in exploring new technologies and expanding
                my knowledge. My website showcases my portfolio of projects,
                skills, and provides a way to contact me. It also gives you
                access to the GitHub and live demo links of all my projects. I
                am currently on the lookout for a job as a{" "}
                <Button>junior web developer</Button> or{" "}
                <Button> UX designer</Button> and willing to consider any
                relevant opportunities.
              </Typography>
              */}
              <Stack
                direction={isSmallScreen ? "column" : "row"}
                justifyContent="left"
                spacing={5}
                marginTop={5}
              >
                <Button
                  startIcon={<MailOutlineIcon />}
                  variant="outlined"
                  size={isSmallScreen ? "small" : "large"}
                >
                  Contact Me
                </Button>
                {/*
                <Button startIcon={<FileDownloadIcon />} variant="contained">
                  Download CV
                </Button> */}
              </Stack>
            </Paper>
            {/*
            <Paper elevation={0} sx={{ p: 6, mt: 5, backgroundColor: "#333" }}>
              <img src={intro} alt="intro" height={"300"} />
            </Paper>
            */}
          </Stack>
        </Card>
      </div>
    </>
  );
};

export default Home;
