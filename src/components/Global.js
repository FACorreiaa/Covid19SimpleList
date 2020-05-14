import React from "react";
import Moment from "react-moment";
import {
  Grid,
  Container,
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";
const Global = ({ data, loading, error }) => {
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
        <Grid container direction="column" justify="center" alignItems="center">
          <Card p={3}>
            <CardContent>
              <Typography variant="h5" component="h2">
                Global Count
              </Typography>
              {loading ? (
                <div>Loading...</div>
              ) : (
                <div>
                  <Typography variant="body2" component="p">
                    New Confirmed:
                  </Typography>
                  <Typography color="textSecondary" gutterBottom>
                    {data.Global.NewConfirmed}
                  </Typography>
                  <br />
                  <Typography variant="body2" component="p">
                    Total Confirmed:
                  </Typography>
                  <Typography color="textSecondary" gutterBottom>
                    {data.Global.TotalConfirmed}
                  </Typography>
                  <br />
                  <Typography variant="body2" component="p">
                    New Deaths:
                  </Typography>
                  <Typography color="textSecondary" gutterBottom>
                    {data.Global.NewDeaths}
                  </Typography>
                  <br />{" "}
                  <Typography variant="body2" component="p">
                    Total Deaths:
                  </Typography>
                  <Typography color="textSecondary" gutterBottom>
                    {data.Global.TotalDeaths}
                  </Typography>
                  <br />{" "}
                  <Typography variant="body2" component="p">
                    New Recovered:
                  </Typography>
                  <Typography color="textSecondary" gutterBottom>
                    {data.Global.NewRecovered}
                  </Typography>
                  <br />{" "}
                  <Typography variant="body2" component="p">
                    Total Recovered:
                  </Typography>
                  <Typography color="textSecondary" gutterBottom>
                    {data.Global.TotalRecovered}
                  </Typography>
                </div>
              )}
              <br />
              <Moment>{data.Date}</Moment>
            </CardContent>
          </Card>
        </Grid>
      )}
    </Container>
  );
};

export default Global;
