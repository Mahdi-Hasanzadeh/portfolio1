import Grid from "@mui/material/Unstable_Grid2";
import { Box, Button, Typography, createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { ToastContainer } from "react-toastify";
import { SidebarContainer, Feed } from "./Components/index.js";
import { toast } from "react-toastify";
import { useMediaQuery, Modal } from "@mui/material";

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
  const [modal, setModal] = useState(false);

  const prefersColorScheme = useMediaQuery(`(prefers-color-scheme:dark)`);

  useEffect(() => {
    setTimeout(() => {
      setModal((prevData) => true);
    }, 3000);
  }, []);

  const handleModal = () => {
    setModal((prevData) => !prevData);
  };

  useEffect(() => {
    if (prefersColorScheme) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, [prefersColorScheme]);

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
  const handlePageIndex = (index) => {
    setPageNumber((prevData) => index);
  };
  return (
    <HelmetProvider>
      <Helmet>
        <title>Hasanzadeh Portflio | {title[pageNumber] || "not found"}</title>
      </Helmet>
      <ThemeProvider theme={Theme}>
        <ToastContainer />
        <Modal
          onClose={handleModal}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          open={modal}
        >
          <Box
            sx={{
              backgroundColor: "grey",
              color: "white",

              width: 1 / 2,
              textAlign: "left",
              p: 2,

              // opacity: 0.9,
            }}
          >
            <Typography>Hello There</Typography>
            <Typography
              variant="body1"
              sx={{
                opacity: 1,
                mb: 2,
              }}
            >
              Welcome To My Portfolio. This is my first Portfolio and it is
              written in{" "}
              <span
                style={{
                  color: "orange",
                  textDecoration: "underline",
                }}
              >
                React
              </span>
              .If you are on{" "}
              <span
                style={{
                  color: "orange",
                  textDecoration: "underline",
                }}
              >
                Mobile Device
              </span>{" "}
              ,you can easily{" "}
              <span
                style={{
                  color: "orange",
                  textDecoration: "underline",
                }}
              >
                Swipe
              </span>{" "}
              between tabs.If you see any bugs and problems in this project,you
              can send me message through Comment Tab. Thank you so much
            </Typography>
            <Typography textAlign="center">Developed By</Typography>
            <Typography textAlign="center" mb={2}>
              Mahdi Hasanzadeh
            </Typography>
            <Box display={"flex"} justifyContent={"center"}>
              <Button onClick={handleModal} variant="contained" color="error">
                Close
              </Button>
            </Box>
          </Box>
        </Modal>
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
            <Feed
              comments={comments}
              pageNumber={pageNumber}
              setPageNumber={handlePageNumber}
              setDarkMode={handleDarkMode}
              handlePageIndex={handlePageIndex}
            />
          </Grid>
        </Grid>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
