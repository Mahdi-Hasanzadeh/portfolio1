import Grid from "@mui/material/Unstable_Grid2";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { ToastContainer } from "react-toastify";
import { SidebarContainer, Feed } from "./Components/index.js";
import { toast } from "react-toastify";

const title = [
  "Homepage",
  "About",
  "Resume",
  "Work Samples",
  "Comments",
  "Contact",
];

function App({ comments }) {
  const [darkMode, setDarkMode] = useState(true);

  const Theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      black: {
        main: "#ffffff",
      },
    },
    typography: {
      fontFamily: "InstrumentSerif-Regular,Niconne",
      fontSize: 18,
    },
  });

  const handleDarkMode = () => {
    setDarkMode((prevData) => !prevData);
    if (darkMode) {
      toast.info("Dark Mode Disabled ", {
        autoClose: 1500,
      });
    } else {
      toast.info("Dark Mode Enabled", {
        autoClose: 1500,
      });
    }
  };

  const [pageNumber, setPageNumber] = useState(0);

  const handlePageNumber = (event, newPageNumber) => {
    setPageNumber((prevData) => newPageNumber);
  };
  return (
    <HelmetProvider>
      <Helmet>
        <title>Hasanzadeh Portflio | {title[pageNumber] || "not found"}</title>
      </Helmet>
      <ThemeProvider theme={Theme}>
        <ToastContainer />
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
              darkMode={darkMode}
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
            <Feed
              comments={comments}
              pageNumber={pageNumber}
              setPageNumber={handlePageNumber}
              setDarkMode={handleDarkMode}
              darkMode={darkMode}
            />
          </Grid>
        </Grid>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
