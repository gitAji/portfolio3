import { Box, useTheme } from "@mui/material";
import { useEffect, useState } from "react";

const Footer = () => {
  const theme = useTheme();
  const [year, setYear] = useState("");

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, [theme]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100px",
        backgroundColor: theme.palette.primary.main,
        position: "relative",
        marginTop: "auto",
      }}
    >
      <h5> All rights are reserved ©{year} .</h5>
    </Box>
  );
};

export default Footer;
