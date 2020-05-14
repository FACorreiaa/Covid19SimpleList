import React from "react";

import { Grid, Container } from "@material-ui/core";

const Home = () => {
  return (
    <Container>
      <Grid container direction="column" justify="center" alignItems="center">
        This is a prototype of Web App and a PWA to render a JSON with Covid-19
        data and get some metrics. The result is to be shown on my masters at
        Instituto Politécnico do Cavado e Ave in Barcelos.
      </Grid>
      <br />
      <Grid container direction="column" justify="center" alignItems="center">
        Above you can navigate through the application.
      </Grid>
      <br />
      <Grid container direction="column" justify="center" alignItems="center">
        My name is and below you can find more data about me.
      </Grid>
      <br />
    </Container>
  );
};

export default Home;
