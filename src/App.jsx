import Grid from "@mui/material/Unstable_Grid2";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { useState } from "react";

import { Box } from "@mui/material";

import { SidebarContainer, Feed } from "./Components/index.js";

function App() {
  const Theme = createTheme({});

  const [pageNumber, setPageNumber] = useState(0);

  const handlePageNumber = (event, newPageNumber) => {
    setPageNumber((prevData) => newPageNumber);
  };
  return (
    <ThemeProvider theme={Theme}>
      <Grid container>
        <Grid
          // sx={{
          //   height: "100vh",
          //   oveflowY: "hidden",
          // }}
          xs={0}
          sm={0}
          md={3}
          lg={2}
          xl={2}
        >
          <SidebarContainer
            pageNumber={pageNumber}
            setPageNumber={handlePageNumber}
          />
        </Grid>
        <Grid
          // sx={{
          //   height: "100vh",
          //   oveflowY: "hidden",
          // }}
          xs={12}
          sm={12}
          md={9}
          lg={10}
          xl={10}
        >
          <Feed pageNumber={pageNumber} setPageNumber={handlePageNumber} />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
