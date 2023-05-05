import { useEffect, useState } from "react";
import { SidebarContent } from "./index.js";
import { Box, Drawer, Fab, Button, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material";
import { Menu, KeyboardArrowLeftRounded } from "@mui/icons-material";
import { grey } from "@mui/material/colors";

const SidebarContainer = ({ pageNumber, setPageNumber }) => {
  const [drawerOpened, setDrawerOpened] = useState(false);

  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  useEffect(() => {
    if (isMdUp) setDrawerOpened(false);
  }, [isMdUp]);

  const handleDrawer = () => {
    setDrawerOpened((prevData) => !prevData);
  };
  return (
    <>
      <Fab
        onClick={() => {
          setDrawerOpened((prevData) => !prevData);
        }}
        sx={{
          display: {
            xs: "block",
            sm: "block",
            md: "none",
            lg: "none",
            xl: "none",
          },
          position: "absolute",
          top: "2px",
          left: "2px",
        }}
      >
        <Menu />
      </Fab>
      <Box
        className="scroll"
        sx={{
          backgroundColor: theme.palette.mode === "dark" ? grey[900] : grey[50],
          height: "100vh",
          overflowY: "scroll",
          overflowX: "hidden",
          borderRadius: "8px",
        }}
      >
        <SidebarContent pageNumber={pageNumber} setPageNumber={setPageNumber} />

        <Drawer
          className="drawer scroll"
          variant="temporary"
          onClose={handleDrawer}
          sx={{
            display: {
              sm: "block",
              xs: "block",
              md: "none",
              lg: "none",
              xl: "none",
            },

            "& .MuiDrawer-paper": {
              backgroundColor:
                theme.palette.mode === "dark" ? "#000000" : grey[50],
            },
          }}
          open={drawerOpened}
        >
          <Button
            variant="outlined"
            size="small"
            sx={{
              position: "absolute",
              right: 0,
              top: 0,
              marginLeft: "auto",
              color: "primary.main",
            }}
            onClick={handleDrawer}
          >
            <KeyboardArrowLeftRounded />
          </Button>
          <SidebarContent
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
            handleDrawer={handleDrawer}
          />
        </Drawer>
      </Box>
    </>
  );
};
export default SidebarContainer;
