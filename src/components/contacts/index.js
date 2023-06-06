import { Card, Divider, Stack, Typography, Button, Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { SocialMedia } from "./styles";

const Contacts = () => {
  const email = "kajeerathan@gmail.com";
  const phone = "tel:40071654";
  return (
    <>
      <div id="contacts" className="contacts">
        <h2>Contacts</h2>

        <Divider />
        <Grid container spacing={2}>
          <Grid item xs={2} sm={2} md={2}>
            <SocialMedia>
              <GitHubIcon />
              <InstagramIcon />
              <LinkedInIcon />
              <YouTubeIcon />
            </SocialMedia>
          </Grid>
          <Grid item xs={10} sm={10} md={10}>
            <Card
              elevation={0}
              sx={{
                width: "80%",
                p: 4,
                height: 300,
                justifyContent: "space-between",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <h5>Get In Touch</h5> <Divider />
              <Typography variant="body2">
                I am currently looking for new opportunities. My inbox is always
                open. Whether you have a question or just want to say Hello, I
                will be available on the click of below buttons ✌️
              </Typography>
              <Stack direction="row" spacing={2}>
                <Link to={`mailto:${email}`}>
                  <Button variant="contained">Mail Me</Button>
                </Link>
                <Link to={phone}>
                  <Button variant="outlined">Call Me</Button>
                </Link>
              </Stack>
            </Card>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Contacts;
