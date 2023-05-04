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

const Feed = ({
  pageNumber,
  setPageNumber,
  comments,
  darkMode,
  setDarkMode,
}) => {
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
        title={darkMode ? "Enable Light Mode" : "Enable Dark Mode"}
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
          {darkMode ? <DarkModeRounded /> : <LightModeRounded />}
        </Fab>
      </Tooltip>

      <SwipeableViews index={pageNumber} onChangeIndex={setPageNumber}>
        <TabPanel index={0} pageNumber={pageNumber}>
          <Homepage />
        </TabPanel>
        <TabPanel index={1} pageNumber={pageNumber}>
          <About darkMode={darkMode} />
        </TabPanel>
        <TabPanel index={2} pageNumber={pageNumber}>
          <Resume darkMode={darkMode} />
        </TabPanel>
        <TabPanel index={3} pageNumber={pageNumber}>
          <WorkSamples darkMode={darkMode} />
        </TabPanel>
        <TabPanel index={4} pageNumber={pageNumber}>
          <Comments darkMode={darkMode} comments={comments} />
        </TabPanel>
        <TabPanel index={5} pageNumber={pageNumber}>
          <Contact darkMode={darkMode} />
        </TabPanel>
      </SwipeableViews>
    </>
  );
};

export default Feed;
