import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import PhonelinkIcon from "@mui/icons-material/Phonelink";

const UxCard = ({ id, title, description, image, ux, live }) => {
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
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <Link to={live} target="_blank">
                  <OpenInNewIcon />
                </Link>
              </IconButton>
              <IconButton aria-label="share">
                <Link to={ux} target="_blank">
                  <PhonelinkIcon />
                </Link>
              </IconButton>
            </CardActions>
          </CardContent>
        </Card>
      </Stack>
    </>
  );
};

export default UxCard;
