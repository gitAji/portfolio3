import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";

import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GitHubIcon from "@mui/icons-material/GitHub";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const ProjectCard = ({
  id,
  title,
  image,
  description,
  requirements,
  deliverables,
  technologies,
  tools,
  github,
  live,
}) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Stack direction="row" gap={5} padding={2}>
        <Card sx={{ maxWidth: 345, p: 1 }} key={id}>
          <CardMedia component="img" height="224" image={image} alt={title} />

          <CardContent>
            <Typography gutterBottom variant="button" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <Link to={live} target="_blank">
                <OpenInNewIcon />
              </Link>
            </IconButton>
            <IconButton aria-label="share">
              <Link to={github} target="_blank">
                <GitHubIcon />
              </Link>
            </IconButton>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Requirements:{requirements}</Typography>
              <Typography paragraph>Deliverable:{deliverables}</Typography>
              <Typography paragraph>Technologies:{technologies}</Typography>
              <Typography>Tools:{tools}</Typography>
            </CardContent>
          </Collapse>
        </Card>
      </Stack>
    </>
  );
};
export default ProjectCard;
