import { Box, Divider, Chip, Avatar, Typography, Tooltip } from "@mui/material";
import {
  CodeRounded,
  CoffeeRounded,
  GrassRounded,
  KeyboardDoubleArrowRightRounded,
  SchoolRounded,
} from "@mui/icons-material";
import Grid from "@mui/material/Unstable_Grid2";
import CountUp from "react-countup";
import Mahdi from "../../assets/MahdiHasanzadeh.jpg";

import Skills from "../Skills";
import { useTheme } from "@mui/material";

const developerInfo = [
  {
    tooltipTitle: "Projects Done",
    icon: <SchoolRounded />,
    count: 1216,
    delay: 1,
  },
  {
    tooltipTitle: "Grass Growth",
    icon: <GrassRounded />,
    count: 1316,
    delay: 3,
  },
  {
    tooltipTitle: "Coffee Drinked per Project",
    icon: <CoffeeRounded />,
    count: 1123,
    delay: 6,
  },
];

const About = () => {
  const theme = useTheme();
  return (
    <>
      <Box
        className="scroll"
        sx={{
          backgroundColor:
            theme.palette.mode === "dark" ? "#111111" : "rgb(246, 241, 241)",
          height: "100vh",
          overflowY: "scroll",
          overflowX: "hidden",
          borderRadius: "10px",
          py: { xs: 6, sm: 5, md: 1, lg: 1, xl: 1 },
        }}
      >
        <Grid container>
          <Grid xs={12} sm={12} md={8} lg={8} xl={8}>
            {/* first Divider in About.jsx */}
            <Divider
              className="divider-about-tab"
              textAlign="left"
              sx={{
                "&::after,&::before": {
                  borderColor: "orange",
                },
                mx: 2,
              }}
            >
              <Chip
                label={
                  <Typography ml={1}>
                    {" "}
                    <CodeRounded
                      sx={{
                        verticalAlign: "middle",
                      }}
                    />{" "}
                    Full Stack Developer
                  </Typography>
                }
              />
            </Divider>

            <Grid container columns={12} spacing={2}>
              <Grid xs={12} sm={8} md={9} lg={8} xl={10}>
                {/* content */}
                <Box
                  className={theme.palette.mode === "dark" ? "darkBox" : "box"}
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    flexDirection: "column",
                    py: 1.2,
                    gap: 0.5,
                    mx: { xs: 1, sm: 1, md: 0, lg: 1, xl: 1 },
                    mt: { xs: 3, sm: 2, md: 0, lg: 0, xl: 0 },
                  }}
                >
                  <Typography
                    className={
                      theme.palette.mode === "dark"
                        ? "typo-fullname typo-dark"
                        : "typo-fullname typo"
                    }
                    color={theme.palette.mode === "dark" ? "text.primary" : ""}
                    sx={{
                      fontSize: {
                        xs: "19px",
                        sm: "20px",
                        md: "22px",
                        lg: "22px",
                        xl: "22px",
                      },
                      textAlign: "center",
                      ml: { xs: 0, sm: 1, md: 1, lg: 1, xl: 1 },
                    }}
                  >
                    {" "}
                    <KeyboardDoubleArrowRightRounded
                      sx={{
                        verticalAlign: "middle",
                        color: "primary.main",
                      }}
                    />{" "}
                    Full Name: Mahdi Hasanzadeh
                  </Typography>

                  <Typography
                    className={
                      theme.palette.mode === "dark"
                        ? "typo-fullname typo-dark"
                        : "typo-fullname typo"
                    }
                    color={theme.palette.mode === "dark" ? "text.primary" : ""}
                    sx={{
                      fontSize: {
                        xs: "19px",
                        sm: "20px",
                        md: "22px",
                        lg: "22px",
                        xl: "22px",
                      },
                      ml: { xs: 0, sm: 1, md: 1, lg: 1, xl: 1 },
                      textAlign: "center",
                    }}
                  >
                    {" "}
                    <KeyboardDoubleArrowRightRounded
                      sx={{
                        verticalAlign: "middle",
                        color: "primary.main",
                      }}
                    />{" "}
                    Age:25
                  </Typography>

                  <Typography
                    className={
                      theme.palette.mode === "dark"
                        ? "typo-fullname typo-dark"
                        : "typo-fullname typo"
                    }
                    color={theme.palette.mode === "dark" ? "text.primary" : ""}
                    sx={{
                      fontSize: {
                        xs: "19px",
                        sm: "20px",
                        md: "22px",
                        lg: "22px",
                        xl: "22px",
                      },
                      ml: { xs: 0, sm: 1, md: 1, lg: 1, xl: 1 },
                      textAlign: "center",
                    }}
                  >
                    {" "}
                    <KeyboardDoubleArrowRightRounded
                      sx={{
                        verticalAlign: "middle",
                        color: "primary.main",
                      }}
                    />{" "}
                    City:Herat,Afghanistan
                  </Typography>

                  <Typography
                    className={
                      theme.palette.mode === "dark"
                        ? "typo-fullname typo-dark"
                        : "typo-fullname typo"
                    }
                    color={theme.palette.mode === "dark" ? "text.primary" : ""}
                    sx={{
                      fontSize: {
                        xs: "19px",
                        sm: "20px",
                        md: "22px",
                        lg: "22px",
                        xl: "22px",
                      },
                      ml: { xs: 0, sm: 1, md: 1, lg: 1, xl: 1 },
                      textAlign: "center",
                    }}
                  >
                    {" "}
                    <KeyboardDoubleArrowRightRounded
                      sx={{
                        verticalAlign: "middle",
                        color: "primary.main",
                      }}
                    />{" "}
                    Phone Number: 0902-934-2619
                  </Typography>

                  <Typography
                    className={
                      theme.palette.mode === "dark"
                        ? "typo-fullname typo-dark"
                        : "typo-fullname typo"
                    }
                    color={theme.palette.mode === "dark" ? "text.primary" : ""}
                    sx={{
                      fontSize: {
                        xs: "19px",
                        sm: "20px",
                        md: "22px",
                        lg: "22px",
                        xl: "22px",
                      },

                      ml: { xs: 0, sm: 1, md: 1, lg: 1, xl: 1 },
                      textAlign: "center",
                    }}
                  >
                    {" "}
                    <KeyboardDoubleArrowRightRounded
                      sx={{
                        verticalAlign: "middle",
                        color: "primary.main",
                      }}
                    />{" "}
                    Email:mahdi786trygame@gmail.com
                  </Typography>
                </Box>
              </Grid>

              <Grid
                sx={{
                  display: {
                    xs: "none",
                    sm: "block",
                    md: "block",
                    lg: "block",
                    xl: "block",
                  },
                  alignSelf: "center",
                }}
                xs={0}
                sm={4}
                md={3}
                lg={4}
                xl={2}
              >
                <Box
                  sx={{
                    mt: { xs: 3, sm: 2, md: 0, lg: 0, xl: 0 },
                    width: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    gap: 2,
                  }}
                >
                  {developerInfo.map((item, index) => {
                    return (
                      <Tooltip
                        key={index}
                        arrow
                        title={item.tooltipTitle}
                        placement="right"
                      >
                        <Chip
                          icon={item.icon}
                          label={
                            <Typography variant="body1">
                              <CountUp
                                // enableScrollSpy={true}
                                delay={item.delay}
                                duration={3}
                                start={0}
                                seperator=","
                                end={item.count}
                              />
                            </Typography>
                          }
                        />
                      </Tooltip>
                    );
                  })}
                </Box>
              </Grid>
            </Grid>
          </Grid>

          {/* Avatar section */}

          <Grid
            xs={0}
            sm={0}
            md={4}
            lg={4}
            xl={4}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Avatar
              className="about-section-avatar"
              src={Mahdi}
              variant="rounded"
              sx={{
                display: {
                  xs: "none",
                  sm: "none",
                  md: "block",
                  lg: "block",
                  xl: "block",
                },
                height: "220px",
                width: "220px",
              }}
            />
          </Grid>
        </Grid>

        {/* skill Section */}

        <Grid container>
          <Grid
            width={"100vw"}
            sx={{
              mt: 2,
            }}
          >
            <Divider
              className="divider-about-tab"
              variant="middle"
              textAlign="center"
              sx={{
                "&::after , &::before": {
                  borderColor: "lightblue",
                },
              }}
            >
              <Chip label="My Skills" />
            </Divider>

            <Box
              className="skill-box"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "space-around",
                justifyContent: "center",
                gap: 1,
                mt: 1,
              }}
            >
              <Skills skillName={"HTML"} percentage={50} />
              <Skills skillName={"CSS"} percentage={30} />
              <Skills skillName={"JAVASCRIPT"} percentage={35} />
              <Skills skillName={"REACT"} percentage={30} />
              <Skills skillName={"MATERIAL UI"} percentage={20} />
              <Skills skillName={"NodeJS"} percentage={5} />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default About;
