import { Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import React from "react";

const UxCard = ({ id, title, description, image }) => {
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
        </Card>
      </Stack>
    </>
  );
};

export default UxCard;
