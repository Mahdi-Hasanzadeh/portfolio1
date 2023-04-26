import { Box, Divider, Chip, LinearProgress, Typography } from "@mui/material";

import { useState, useEffect } from "react";

const Skills = ({ skillName, percentage }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
      // setValue((prevData) =>
      //   prevData >= percentage ? percentage : prevData + 10
      // );
      if (value === percentage) return;
      setValue((prevData) => prevData + Math.ceil(Math.random() * 10));
      if (value >= percentage) setValue(percentage);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [value]);

  return (
    <Box
      className="skill-hover"
      width={"100%"}
      sx={{
        display: "flex",
        gap: 1,
        flexDirection: {
          xs: "column",
          sm: "column",
          md: "row",
          lg: "row",
          xl: "row",
        },
        justifyContent: "center",
        alignItems: "center",
        mb: 3,
        mt: 2,
      }}
    >
      <Divider
        sx={{
          width: {
            xs: "calc(50%-25px)",
            sm: "calc(50%-25px)",
            md: "15%",
            lg: "15%",
            xl: "15%",
          },
        }}
        textAlign="left"
      >
        <Chip label={skillName} />
      </Divider>
      <Box
        width={"100%"}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          gap: 1,
        }}
      >
        <LinearProgress
          color={value < 15 ? "error" : value < 30 ? "warning" : "success"}
          sx={{
            height: 10,
            width: "85%",
            borderRadius: 1,
          }}
          value={value}
          variant="determinate"
        />
        <Typography>{value}%</Typography>
      </Box>
    </Box>
  );
};

export default Skills;
