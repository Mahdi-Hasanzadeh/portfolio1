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
            <Divider
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
                  <Typography>
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
            <Box
              className="box"
              sx={{
                display: "flex",
                alignItems: "flex-start",

                flexDirection: "column",
                padding: 2,
                gap: 2,
              }}
            >
              <Typography>
                {" "}
                <KeyboardDoubleArrowRightRounded
                  sx={{
                    verticalAlign: "middle",
                    color: "primary.main",
                  }}
                />{" "}
                Full Name: Mahdi Hasanzadeh
              </Typography>
              <Typography>
                {" "}
                <KeyboardDoubleArrowRightRounded
                  sx={{
                    verticalAlign: "middle",
                    color: "primary.main",
                  }}
                />{" "}
                Age:25
              </Typography>
              <Typography>
                {" "}
                <KeyboardDoubleArrowRightRounded
                  sx={{
                    verticalAlign: "middle",
                    color: "primary.main",
                  }}
                />{" "}
                City:Herat,Afghanistan
              </Typography>
              <Typography>
                {" "}
                <KeyboardDoubleArrowRightRounded
                  sx={{
                    verticalAlign: "middle",
                    color: "primary.main",
                  }}
                />{" "}
                Phone Number: 0902-934-2619
              </Typography>
              <Typography>
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
        <Grid container>
          <Grid
            width={"100vw"}
            sx={{
              mt: 2,
            }}
          >
            <Divider
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