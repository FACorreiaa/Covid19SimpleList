import React from "react";
import Moment from "react-moment";
import { Grid, Container, Typography, Paper } from "@material-ui/core";

const Country = ({ data, loading, error }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <Container>
      {error ? (
        <Typography variant="h1" component="h1" color="error" align="center">
          Something went wrong...
        </Typography>
      ) : (
        <>
          <Grid
            container
            direction="column"
            justify="space-between"
            alignItems="center"
          >
            <Moment>{data.Countries.Date}</Moment>
          </Grid>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            {data.Countries.map((row) => (
              <div key={row.name}>
                <Paper elevation={3}>
                  <Grid
                    container
                    direction="column"
                    justify="space-between"
                    alignItems="center"
                  >
                    <Typography color="textSecondary" gutterBottom>
                      {row.Country}
                    </Typography>
                  </Grid>
                  <br />
                  <Grid item xs={12} sm={6}>
                    {" "}
                    <Typography variant="body2" component="p">
                      New confirmed
                    </Typography>
                    <Typography color="textSecondary" gutterBottom>
                      {row.NewConfirmed}
                    </Typography>
                    <Typography variant="body2" component="p">
                      Total Confirmed
                    </Typography>
                    <Typography color="textSecondary" gutterBottom>
                      {row.TotalConfirmed}
                    </Typography>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    {" "}
                    <Typography variant="body2" component="p">
                      New Deaths
                    </Typography>
                    <Typography color="textSecondary" gutterBottom>
                      {row.NewDeaths}
                    </Typography>
                    <Typography variant="body2" component="p">
                      Total Deaths
                    </Typography>
                    <Typography color="textSecondary" gutterBottom>
                      {row.TotalDeaths}
                    </Typography>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    {" "}
                    <Typography variant="body2" component="p">
                      New Recovered
                    </Typography>
                    <Typography color="textSecondary" gutterBottom>
                      {row.NewRecovered}
                    </Typography>
                    <Typography variant="body2" component="p">
                      Total Recovered
                    </Typography>
                    <Typography color="textSecondary" gutterBottom>
                      {row.TotalRecovered}
                    </Typography>
                  </Grid>
                </Paper>
              </div>
            ))}
          </Grid>
        </>
      )}
    </Container>
  );
};

export default Country;
