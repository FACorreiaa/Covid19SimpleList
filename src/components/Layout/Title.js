import React from "react";
import logo from "../../assets/logo.jpeg";
import { Grid, Typography } from "@material-ui/core";
function Title() {
  // Import result is the URL of your image
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Typography variant="h5" component="h2">
        Covid-19 List
      </Typography>
      <img src={logo} alt="Logo" width="250" height="250" />
    </Grid>
  );
}
export default Title;
