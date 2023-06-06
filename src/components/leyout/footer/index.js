import { Box } from "@mui/material";
import { useEffect, useState } from "react";

const Footer = () => {
  const [year, setYear] = useState("");

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100px",
        backgroundColor: "primary.main",
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
      }}
    >
      <h5> All rights are reserved ©{year} .</h5>
    </Box>
  );
};

export default Footer;
