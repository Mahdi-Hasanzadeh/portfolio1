import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Grid from "@mui/material/Unstable_Grid2/Grid2.js";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    {/* <Grid container spacing={1}>
      <Grid xs={12} sm={12} md={10} lg={9} xl={8} bgcolor="yellow">
        grid1
        <Grid container columns={12}>
          <Grid xs={10} sm={10} md={8} lg={7} xl={6} bgcolor={"blue"}>
            nested1
          </Grid>
          <Grid xs={2} sm={2} md={4} lg={5} xl={6} bgcolor={"red"}>
            nested2
          </Grid>
        </Grid>
      </Grid>
      <Grid xs={12} sm={12} md={2} lg={3} xl={4} bgcolor="lightblue">
        grid2
      </Grid>
    </Grid> */}
  </React.StrictMode>
);
