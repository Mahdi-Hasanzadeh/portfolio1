import { Box } from "@mui/material";

import {
  About,
  Comments,
  Homepage,
  Resume,
  WorkSamples,
  Contact,
} from "./Pages/index.js";

import SwipeableViews from "react-swipeable-views";

const Feed = ({ pageNumber, setPageNumber, comments }) => {
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
  );
};

export default Feed;
