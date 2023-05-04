import { CodeRounded, SchoolRounded } from "@mui/icons-material";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import { Box, Chip, Divider, Slide, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { grey } from "@mui/material/colors";
import { useEffect, useState } from "react";
const Resume = () => {
  const [slideBoolean, setSlideBoolean] = useState(false);

  useEffect(() => {
    setSlideBoolean(true);
  });

  return (
    <Box className="Resume-box" height={"100%"} padding={4}>
      <Grid container mb={3}>
        <Grid xs={12} sm={12} md={12} lg={12} xl={12}>
          <Slide
            direction="down"
            in={slideBoolean}
            style={{
              transitionDelay: slideBoolean ? "500ms" : "0ms",
            }}
          >
            <Divider
              variant="middle"
              sx={{
                "&::after,&::before": {
                  borderColor: "orange",
                },
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
                    My Resume
                  </Typography>
                }
              />
            </Divider>
          </Slide>
        </Grid>
      </Grid>
      <Grid container>
        <Grid
          xs={12}
          sm={12}
          md={6}
          lg={6}
          xl={6}
          sx={{
            mb: { xs: 3, sm: 3, md: 0, lg: 0, xl: 0 },
          }}
        >
          <Slide
            direction="right"
            in={slideBoolean}
            style={{
              transitionDelay: slideBoolean ? "500ms" : "0ms",
            }}
          >
            <Divider
              variant="middle"
              sx={{
                "&::after,&::before": {
                  borderColor: "gray",
                },
              }}
            >
              <Chip
                sx={{
                  backgroundColor: "orange",
                }}
                label={
                  <Typography>
                    Education{" "}
                    <CodeRounded
                      sx={{
                        verticalAlign: "middle",
                      }}
                    />{" "}
                  </Typography>
                }
              />
            </Divider>
          </Slide>

          <Timeline position="alternate">
            <Slide
              direction="up"
              in={slideBoolean}
              style={{
                transitionDelay: slideBoolean ? "900ms" : "0ms",
                transitionDuration: slideBoolean ? "1400ms" : "0ms",
              }}
            >
              <TimelineItem
                className="timeline-item"
                sx={{
                  height: 150,
                }}
              >
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="warning">
                    {" "}
                    <SchoolRounded />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography>1382-1394</Typography>
                  <Typography>Enghalab High School</Typography>
                </TimelineContent>
              </TimelineItem>
            </Slide>

            <Slide
              direction="up"
              in={slideBoolean}
              style={{
                transitionDelay: slideBoolean ? "1300ms" : "0ms",
                transitionDuration: slideBoolean ? "1400ms" : "0ms",
              }}
            >
              <TimelineItem
                className="timeline-item"
                sx={{
                  height: 150,
                }}
              >
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="warning">
                    {" "}
                    <SchoolRounded />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography>1395-1398</Typography>
                  <Typography>Medical Faculty,Herat Universitiy</Typography>
                </TimelineContent>
              </TimelineItem>
            </Slide>

            <Slide
              direction="up"
              in={slideBoolean}
              style={{
                transitionDelay: slideBoolean ? "1900ms" : "0ms",
                transitionDuration: slideBoolean ? "1400ms" : "0ms",
              }}
            >
              <TimelineItem
                className="timeline-item"
                sx={{
                  height: 150,
                }}
              >
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="warning">
                    {" "}
                    <SchoolRounded />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography>1398-1400</Typography>
                  <Typography>
                    Computer Science Faculty,Ghalib University
                  </Typography>
                </TimelineContent>
              </TimelineItem>
            </Slide>
          </Timeline>
        </Grid>
        <Grid xs={12} sm={12} md={6} lg={6} xl={6}>
          <Slide
            direction="right"
            in={slideBoolean}
            style={{
              transitionDelay: slideBoolean ? "500ms" : "0ms",
            }}
          >
            <Divider
              variant="middle"
              sx={{
                "&::after,&::before": {
                  borderColor: "gray",
                },
              }}
            >
              <Chip
                sx={{
                  backgroundColor: "orange",
                }}
                label={
                  <Typography>
                    {" "}
                    <CodeRounded
                      sx={{
                        verticalAlign: "middle",
                      }}
                    />{" "}
                    Experience
                  </Typography>
                }
              />
            </Divider>
          </Slide>
          <Timeline position="alternate">
            <Slide
              direction="up"
              in={slideBoolean}
              style={{
                transitionDelay: slideBoolean ? "900ms" : "0ms",
                transitionDuration: slideBoolean ? "1400ms" : "0ms",
              }}
            >
              <TimelineItem
                className="timeline-item"
                sx={{
                  height: 150,
                }}
              >
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="warning">
                    {" "}
                    <SchoolRounded />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography>1382-1394</Typography>
                  <Typography>Enghalab High School</Typography>
                </TimelineContent>
              </TimelineItem>
            </Slide>

            <Slide
              direction="up"
              in={slideBoolean}
              style={{
                transitionDelay: slideBoolean ? "1300ms" : "0ms",
                transitionDuration: slideBoolean ? "1400ms" : "0ms",
              }}
            >
              <TimelineItem
                className="timeline-item"
                sx={{
                  height: 150,
                }}
              >
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="warning">
                    {" "}
                    <SchoolRounded />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography>1395-1398</Typography>
                  <Typography>Medical Faculty,Herat Universitiy</Typography>
                </TimelineContent>
              </TimelineItem>
            </Slide>

            <Slide
              direction="up"
              in={slideBoolean}
              style={{
                transitionDelay: slideBoolean ? "1900ms" : "0ms",
                transitionDuration: slideBoolean ? "1400ms" : "0ms",
              }}
            >
              <TimelineItem
                className="timeline-item"
                sx={{
                  height: 150,
                }}
              >
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="warning">
                    {" "}
                    <SchoolRounded />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography>1398-1400</Typography>
                  <Typography>
                    Computer Science Faculty,Ghalib University
                  </Typography>
                </TimelineContent>
              </TimelineItem>
            </Slide>
          </Timeline>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Resume;
