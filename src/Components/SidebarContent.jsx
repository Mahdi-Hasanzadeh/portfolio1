import { Avatar, Box, Divider, Tab, Tabs, Typography } from "@mui/material";
import { RandomReveal } from "react-random-reveal";
import avatar from "../assets/MahdiHasanzadeh.jpg";
import { useState } from "react";
import {
  Article,
  Assessment,
  Comment,
  CopyrightRounded,
  Face,
  Facebook,
  GitHub,
  HomeRounded,
  Instagram,
} from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { grey, red } from "@mui/material/colors";

const tabData = [
  {
    label: "homepage",
    icon: HomeRounded,
  },
  {
    label: "About",
    icon: Assessment,
  },
  {
    label: "Resume",
    icon: Face,
  },
  {
    label: "Work Samples",
    icon: Article,
  },
  { label: "Comments", icon: Comment },
];

const SidebarContent = ({ pageNumber, setPageNumber, handleDrawer }) => {
  const [start, setStart] = useState(false);

  const tabProps = (index) => {
    return {
      id: `tab-index-${index}`,
      "aria-controls": `tabpanel-${index}`,
    };
  };

  const SocialMediaButton = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.main,
    cursor: "pointer",
    transition: "0.5s ease-in-out",
    "&:hover": {
      translate: "0px 5px",
    },
  }));

  const socialMedia = [
    {
      href: "https://mui.com/material-ui/customization/how-to-customize/#2-reusable-component",
      icon: Facebook,
      color: null,
    },
    {
      href: "https://github.com/Mahdi-Hasanzadeh",
      icon: GitHub,
      color: grey[300],
    },
    {
      href: "",
      icon: Instagram,
      color: red[200],
    },
  ];

  return (
    <>
      <Box>
        {/* Avatar section */}

        <Box
          className="avatar-section"
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

          <Typography
            textAlign={"center"}
            sx={{
              fontSize: {
                xs: "20px",
                sm: "22px",
                md: "24px",
                lg: "26px",
                xl: "28px",
              },
            }}
          >
            <RandomReveal
              isPlaying={true}
              duration={3}
              characters="Mahdi Hasanzadeh"
              onComplete={() => {
                setStart(true);
              }}
            />
          </Typography>

          {start && (
            <Typography
              textAlign={"center"}
              sx={{
                fontSize: {
                  xs: "20px",
                  sm: "22px",
                  md: "24px",
                  lg: "26px",
                  xl: "28px",
                },
              }}
            >
              <RandomReveal
                isPlaying
                duration={5}
                characters="Full stack Developer"
              />
            </Typography>
          )}
          {/* Social Media */}

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 0.3,
            }}
          >
            {socialMedia.map((item, index) => {
              return (
                <SocialMediaButton
                  key={index}
                  component="a"
                  target="_blank"
                  href={item.href}
                  rel="noopener noreferrer"
                >
                  <item.icon
                    sx={{
                      color: item.color ? item.color : null,
                    }}
                  />
                </SocialMediaButton>
              );
            })}
          </Box>
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

        {/* Tabs and Tabs content */}

        <Tabs
          value={pageNumber}
          onChange={setPageNumber}
          variant="scrollable"
          orientation="vertical"
          scrollButtons="auto"
          sx={{
            "& .MuiTab-root": {
              minHeight: "35px",
              m: "5px",
              padding: "7px",
              backgroundColor: "lightgray",
              borderRadius: "10px",
              transition: "0.3s ease-in-out",
            },
            "& .MuiTab-root:hover": {
              backgroundColor: "rgb(229, 227, 227)",
              translate: 5,
            },
          }}
        >
          {tabData.map((item, index) => {
            return (
              <Tab
                key={index}
                {...tabProps(index)}
                label={item.label}
                iconPosition="start"
                icon={<item.icon />}
                onClick={handleDrawer}
              />
            );
          })}
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

      {/* Copyright Section */}

      <Box
        className="copyright-section"
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
