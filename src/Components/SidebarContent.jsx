import { Avatar, Box, Divider, Tab, Tabs, Typography } from "@mui/material";

import avatar from "../assets/MahdiHasanzadeh.jpg";
import {
  Article,
  Assessment,
  CopyrightRounded,
  Face,
  HomeRounded,
} from "@mui/icons-material";

const SidebarContent = ({ pageNumber, setPageNumber, handleDrawer }) => {
  const tabProps = (index) => {
    return {
      id: `tab-index-${index}`,
      "aria-controls": `tabpanel-${index}`,
    };
  };
  return (
    <>
      <Box>
        <Box
          sx={{
            mt: { sm: 4, xs: 4, md: 2, lg: 2, xl: 2 },
            color: "whitesmoke",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            justifyContent: "center",
          }}
        >
          <Avatar
            src={avatar}
            variant="rounded"
            sx={{
              height: "120px",
              width: "120px",
              margin: "0 auto",
              borderRadius: 50,
            }}
          />
          <Typography textAlign={"center"} fontSize={"18px"}>
            Mahdi Hasanzadeh
          </Typography>
          <Typography textAlign={"center"} fontSize={"17px"}>
            Full Stack Developer
          </Typography>
        </Box>
        <Divider
          variant="middle"
          sx={{
            mt: 2,
            mb: 2,
            backgroundColor: "whitesmoke",
            "&::before,&::after": {
              borderColor: "white",
            },
          }}
        />
        <Tabs
          value={pageNumber}
          onChange={setPageNumber}
          variant="scrollable"
          orientation="vertical"
          scrollButtons="auto"
          sx={{
            "& .MuiTab-root": {
              minHeight: "45px",
              m: "5px",
              padding: "7px",
              backgroundColor: "lightgray",
              borderRadius: "10px",
            },
          }}
        >
          <Tab
            {...tabProps(0)}
            label="Homepage"
            icon={<HomeRounded />}
            iconPosition="start"
            onClick={handleDrawer}
          />

          <Tab
            {...tabProps(1)}
            label="About"
            icon={<Assessment />}
            iconPosition="start"
            onClick={handleDrawer}
          />

          <Tab
            {...tabProps(2)}
            label="Contact"
            icon={<Article />}
            iconPosition="start"
            onClick={handleDrawer}
          />

          <Tab
            {...tabProps(3)}
            label="Template"
            icon={<Face />}
            iconPosition="start"
            onClick={handleDrawer}
          />
        </Tabs>
      </Box>

      <Divider
        variant="middle"
        sx={{
          mt: 2,
          backgroundColor: "whitesmoke",
          "&::before,&::after": {
            borderColor: "white",
          },
        }}
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: "5px",
          color: "whitesmoke",
          mb: 3,
          mt: 3,
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
          }}
        >
          Designed By: Hasanzadeh
        </Typography>
        <Typography>
          <CopyrightRounded
            sx={{
              verticalAlign: "middle",
            }}
          />
          2024
        </Typography>
      </Box>
    </>
  );
};
export default SidebarContent;
