import {
  Box,
  Divider,
  Chip,
  Avatar,
  Typography,
  LinearProgress,
} from "@mui/material";
import {
  CodeRounded,
  KeyboardDoubleArrowRightRounded,
} from "@mui/icons-material";
import Grid from "@mui/material/Unstable_Grid2";

import Mahdi from "../../assets/MahdiHasanzadeh.jpg";

import Skills from "../Skills";

const About = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "rgb(246, 241, 241)",
          overflowY: "auto",
          overflowX: "auto",
          borderRadius: "10px",
          mb: 5,
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

            {/* content */}
            <Box
              className="box"
              sx={{
                display: "flex",
                alignItems: "flex-start",
                flexDirection: "column",
                padding: { xs: 0, sm: 0, md: 2, lg: 2, xl: 2 },
                gap: 2,
                mt: { xs: 3, sm: 2, md: 0, lg: 0, xl: 0 },
              }}
            >
              <Typography
                className="typo-fullname typo"
                sx={{
                  fontSize: {
                    xs: "15px",
                    sm: "16px",
                    md: "18px",
                    lg: "18px",
                    xl: "18px",
                  },
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
                Full Name: Mahdi Hasanzadeh
              </Typography>

              <Typography
                className="typo-age typo"
                sx={{
                  fontSize: {
                    xs: "15px",
                    sm: "16px",
                    md: "18px",
                    lg: "18px",
                    xl: "18px",
                  },
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
                className="typo-city typo"
                sx={{
                  fontSize: {
                    xs: "15px",
                    sm: "16px",
                    md: "18px",
                    lg: "18px",
                    xl: "18px",
                  },
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
                className="typo-phone-number typo"
                sx={{
                  fontSize: {
                    xs: "15px",
                    sm: "16px",
                    md: "18px",
                    lg: "18px",
                    xl: "18px",
                  },
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
                className="typo-email typo"
                sx={{
                  fontSize: {
                    xs: "15px",
                    sm: "16px",
                    md: "18px",
                    lg: "18px",
                    xl: "18px",
                  },
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
                height: "200px",
                width: "200px",
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
              <Skills skillName={"JAVASCRIPT"} percentage={20} />
              <Skills skillName={"NodeJS"} percentage={5} />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default About;
