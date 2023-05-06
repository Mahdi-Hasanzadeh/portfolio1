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
              width: { xs: "90%", sm: "70%", md: "50%" },
              height: { xs: "100vh", md: "90%" },
              textAlign: "left",
              p: 4,
              overflowY: "scroll",
            }}
          >
            <Typography sx={{ mb: 1 }}>Hello There</Typography>
            <Typography
              textAlign="justify"
              variant="body1"
              sx={{
                textIndent: 7,
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
                React.{"  "}
              </span>
              For Designing part,I use{" "}
              <span
                style={{
                  color: "orange",
                  textDecoration: "underline",
                }}
              >
                {" "}
                MUI (Material UI){" "}
              </span>{" "}
              <br />
              You change{" "}
              <span
                style={{
                  color: "orange",
                  textDecoration: "underline",
                }}
              >
                Theme
              </span>{" "}
              of the Website by clicking on the button at the top right corner
              of your device.Defautl Theme will be choosed based on your{" "}
              <span
                style={{
                  color: "orange",
                  textDecoration: "underline",
                }}
              >
                System Theme Mode.
              </span>
              <br />
              If you are on{" "}
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
              can send me message through Comment Tab.
            </Typography>
            <Typography textAlign="justify">Thanks</Typography>
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
