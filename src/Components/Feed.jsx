import { Box, Fab, Tooltip } from "@mui/material";

import {
  About,
  Comments,
  Homepage,
  Resume,
  WorkSamples,
  Contact,
} from "./Pages/index.js";

import SwipeableViews from "react-swipeable-views";
import { DarkModeRounded, LightModeRounded } from "@mui/icons-material";

import { useTheme } from "@mui/material";

const Feed = ({ pageNumber, setPageNumber, comments, setDarkMode }) => {
  const theme = useTheme();

  const TabPanel = ({ children, index, pageNumber }) => {
    return (
      <div
        role="tabpanel"
        id={`simple-tabpanel-${pageNumber}`}
        hidden={pageNumber !== index}
      >
        {index === pageNumber && <Box>{children}</Box>}
      </div>
    );
  };

  return (
    <>
      <Tooltip
        arrow
        title={
          theme.palette.mode === "dark"
            ? "Enable Light Mode"
            : "Enable Dark Mode"
        }
        placement="left"
      >
        <Fab
          onClick={setDarkMode}
          size="small"
          sx={{
            position: "absolute",
            top: 9,
            right: 9,
          }}
        >
          {theme.palette.mode === "dark" ? (
            <DarkModeRounded />
          ) : (
            <LightModeRounded />
          )}
        </Fab>
      </Tooltip>

      <SwipeableViews index={pageNumber} onChangeIndex={setPageNumber}>
        <TabPanel index={0} pageNumber={pageNumber}>
          <Homepage />
        </TabPanel>
        <TabPanel index={1} pageNumber={pageNumber}>
          <About />
        </TabPanel>
        <TabPanel index={2} pageNumber={pageNumber}>
          <Resume />
        </TabPanel>
        <TabPanel index={3} pageNumber={pageNumber}>
          <WorkSamples />
        </TabPanel>
        <TabPanel index={4} pageNumber={pageNumber}>
          <Comments comments={comments} />
        </TabPanel>
        <TabPanel index={5} pageNumber={pageNumber}>
          <Contact />
        </TabPanel>
      </SwipeableViews>
    </>
  );
};

export default Feed;
