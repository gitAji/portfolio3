import React, { useState } from "react";

import { Box, Stack, useMediaQuery } from "@mui/material";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import AcademicWorks from "./academic";
import PaidWorks from "./paid";
import UxWorks from "./ux";
import { theme } from "../../utils/theme";

const Works = () => {
  const [value, setValue] = useState("1");
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <div id="works" className="works">
        <h2>Works</h2>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Web Sites" value="1" />
              <Tab label="UX / UI" value="2" />
              <Tab label="Paid Works" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Stack direction={isSmallScreen ? "column" : "row"}>
              <AcademicWorks />
            </Stack>
          </TabPanel>
          <TabPanel value="2">
            {" "}
            <Stack direction={isSmallScreen ? "column" : "row"}>
              <UxWorks />
            </Stack>{" "}
          </TabPanel>
          <TabPanel value="3">
            <Stack direction={isSmallScreen ? "column" : "row"}>
              <PaidWorks />
            </Stack>
          </TabPanel>
        </TabContext>
      </div>
    </>
  );
};

export default Works;
