import { Card, CardContent, CardMedia, Grid } from "@mui/material";
import React from "react";
import html from "../../assets/icons/html.svg";
import css from "../../assets/icons/css.svg";
import js from "../../assets/icons/js.svg";
import react from "../../assets/icons/react.svg";
import node from "../../assets/icons/node.svg";
import figma from "../../assets/icons/figma.svg";
import git from "../../assets/icons/git.svg";
import sass from "../../assets/icons/sass.svg";

const Skills = () => {
  const icons = [
    {
      id: 1,
      name: "HTML",
      image: html,
    },
    {
      id: 2,
      name: "CSS",
      image: css,
    },
    {
      id: 3,
      name: "JAVA SCRIPT",
      image: js,
    },
    {
      id: 4,
      name: "REACT",
      image: react,
    },
    {
      id: 5,
      name: "NODE",
      image: node,
    },
    {
      id: 6,
      name: "FIGMA",
      image: figma,
    },
    {
      id: 7,
      name: "GIT",
      image: git,
    },
    {
      id: 8,
      name: "SASS",
      image: sass,
    },
  ];

  return (
    <>
      <div id="skills" className="skills">
        <h2>Skills</h2>
        <Grid
          container
          rowSpacing={2}
          columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 4 }}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          {icons.map((icon) => (
            <Grid item xs={6} sm={6} md={4} lg={3}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  image={icon.image}
                  alt={icon.name}
                  sx={{
                    maxHeight: { xs: 60, sm: 80, md: 100, lg: 100 },
                    objectFit: "contain",
                  }}
                />
                <CardContent align="center">
                  <h5>{icon.name}</h5>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};

export default Skills;
