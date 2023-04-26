import { Box, Divider, Chip, LinearProgress, Typography } from "@mui/material";
const Skills = ({ skillName, percentage }) => {
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

        mb: 2,
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
          sx={{
            width: "85%",
          }}
          value={percentage}
          variant="determinate"
        />
        <Typography sx={{}}>{percentage}%</Typography>
      </Box>
    </Box>
  );
};

export default Skills;
