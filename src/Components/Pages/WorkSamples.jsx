import { SchoolRounded } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Divider,
  Slide,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import Grid from "@mui/material/Unstable_Grid2";
import Tenzie from "../../assets/tenzie.jpeg";

import Restaurant from "../../assets/restaurant1.jfif";

import EllipsisText from "react-ellipsis-text";
import { useEffect, useState } from "react";

const WorkSamplesInfo = [
  {
    title: "Tenzies Game",
    url: "https://mahdi-hasanzadeh.github.io/Tenzies/",
    information:
      "This is my first game that I have developed.This game is made by using JAVASCRIPT & REACT",
    image: Tenzie,
    buttonTitle: "Play",
    color: "lightgreen",
  },
  {
    title: "Restaurant ConFusion",
    url: "https://mahdi-hasanzadeh.github.io/RestaurantRepo/",
    information:
      "We take inspiration from the Worlds's best cuisines and create a unique fusion experience.Our lipsmacking creation will tickle your culinary sense!",
    image: Restaurant,
    color: "lightblue",
    buttonTitle: "Visit",
  },
];

const WorkSamples = ({ darkMode }) => {
  const [checked, setChecked] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    setChecked(true);
    return () => {
      setChecked(false);
    };
  });

  return (
    <>
      <Box
        className="scroll"
        sx={{
          py: 2,
          height: "100vh",
          backgroundColor: darkMode ? "rgb(35, 30, 30)" : grey[200],
          overflowY: "scroll",
          // borderTopRightRadius: "30%",
        }}
      >
        <Box
          sx={{
            width: "100%",
            // margin: "0 auto",
          }}
        >
          <Divider
            textAlign="center"
            variant="middle"
            sx={{
              "&::after,&::before": {
                borderColor: theme.palette.success.main,
              },
            }}
          >
            <Chip
              icon={<SchoolRounded />}
              size="medium"
              color="success"
              label={<Typography variant="body1">Work Samples</Typography>}
            ></Chip>
          </Divider>
        </Box>

        <Grid
          container
          sx={{
            mx: 2,
            mt: 5,
          }}
          justifyContent={"space-around"}
          alignItems={"center"}
        >
          {WorkSamplesInfo.map((item, index) => {
            return (
              <Grid
                key={index}
                xs={12}
                sm={6}
                md={6}
                lg={4}
                xl={4}
                sx={{
                  px: 2,
                  mb: 2,
                }}
              >
                <Slide
                  direction="up"
                  in={true}
                  style={{
                    transitionDelay: checked ? `${index + 5}99ms` : "0ms",
                  }}
                >
                  <Card
                    sx={{
                      maxWidth: 1,
                      // width: 1,
                      // maxWidth: { xs: 1, sm: 1, md: 345, xl: 345, lg: 345 },
                    }}
                  >
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height={120}
                        image={item.image}
                        alt={item.title}
                      />
                      <CardContent
                        sx={{
                          backgroundColor: item.color || "lightgreen",
                          borderTopRightRadius: "20%",
                        }}
                      >
                        <Typography textAlign={"left"} variant="body1">
                          {item.title}
                        </Typography>
                        <Typography textAlign={"left"} variant="body2">
                          <EllipsisText text={item.information} length={75} />
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button
                        variant="outlined"
                        href={item.url}
                        component="a"
                        target="_blank"
                        rel="noopener noreferrer"
                        size="small"
                      >
                        {item.buttonTitle || "More Info"}
                      </Button>
                    </CardActions>
                  </Card>
                </Slide>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};
export default WorkSamples;
