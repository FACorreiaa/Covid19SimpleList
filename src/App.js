import React, { useState, useEffect } from "react";
import Title from "./components/Layout/Title";
import Moment from "react-moment";
import {
  Grid,
  Container,
  Card,
  CardContent,
  Typography,
  Paper,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import axios from "axios";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  table: {
    minWidth: 650,
  },
});

function App() {
  const classes = useStyles();
  const [data, setData] = useState({ Global: {}, Countries: [], Date: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const dateToFormat = data.Date;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(false);
        setLoading(true);
        const result = await axios("https://api.covid19api.com/summary");
        setData(result.data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <Container>
        <Title />
        {error ? (
          <Typography variant="h1" component="h1" color="error" align="center">
            Something went wrong...
          </Typography>
        ) : (
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Card p={3} className={classes.root}>
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
                    <Typography
                      className={classes.title}
                      color="textSecondary"
                      gutterBottom
                    >
                      {data.Global.NewConfirmed}
                    </Typography>
                    <br />
                    <Typography variant="body2" component="p">
                      Total Confirmed:
                    </Typography>
                    <Typography
                      className={classes.title}
                      color="textSecondary"
                      gutterBottom
                    >
                      {data.Global.TotalConfirmed}
                    </Typography>
                    <br />
                    <Typography variant="body2" component="p">
                      New Deaths:
                    </Typography>
                    <Typography
                      className={classes.title}
                      color="textSecondary"
                      gutterBottom
                    >
                      {data.Global.NewDeaths}
                    </Typography>
                    <br />{" "}
                    <Typography variant="body2" component="p">
                      Total Deaths:
                    </Typography>
                    <Typography
                      className={classes.title}
                      color="textSecondary"
                      gutterBottom
                    >
                      {data.Global.TotalDeaths}
                    </Typography>
                    <br />{" "}
                    <Typography variant="body2" component="p">
                      New Recovered:
                    </Typography>
                    <Typography
                      className={classes.title}
                      color="textSecondary"
                      gutterBottom
                    >
                      {data.Global.NewRecovered}
                    </Typography>
                    <br />{" "}
                    <Typography variant="body2" component="p">
                      Total Recovered:
                    </Typography>
                    <Typography
                      className={classes.title}
                      color="textSecondary"
                      gutterBottom
                    >
                      {data.Global.TotalRecovered}
                    </Typography>
                  </div>
                )}
                <br />
                <Moment>{dateToFormat}</Moment>
              </CardContent>
            </Card>
          </Grid>
        )}

        <br />
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          {data.Countries.map((row) => (
            <div className={classes.root} key={row.name}>
              <Paper elevation={3}>
                <Grid
                  container
                  direction="column"
                  justify="space-between"
                  alignItems="center"
                >
                  <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                  >
                    {row.Country}
                  </Typography>
                </Grid>
                <br />
                <Grid item xs={12} sm={6}>
                  {" "}
                  <Typography variant="body2" component="p">
                    New confirmed
                  </Typography>
                  <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                  >
                    {row.NewConfirmed}
                  </Typography>
                  <Typography variant="body2" component="p">
                    Total Confirmed
                  </Typography>
                  <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                  >
                    {row.TotalConfirmed}
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={6}>
                  {" "}
                  <Typography variant="body2" component="p">
                    New Deaths
                  </Typography>
                  <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                  >
                    {row.NewDeaths}
                  </Typography>
                  <Typography variant="body2" component="p">
                    Total Deaths
                  </Typography>
                  <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                  >
                    {row.TotalDeaths}
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={6}>
                  {" "}
                  <Typography variant="body2" component="p">
                    New Recovered
                  </Typography>
                  <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                  >
                    {row.NewRecovered}
                  </Typography>
                  <Typography variant="body2" component="p">
                    Total Recovered
                  </Typography>
                  <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                  >
                    {row.TotalRecovered}
                  </Typography>
                </Grid>
              </Paper>
            </div>
          ))}
          {/* <TableContainer p={3} component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Country</TableCell>
                  <TableCell align="right">New Confirmed</TableCell>
                  <TableCell align="right">New Deaths</TableCell>
                  <TableCell align="right">New Recovered</TableCell>
                  <TableCell align="right">Total Confirmed</TableCell>
                  <TableCell align="right">Total Deaths</TableCell>
                  <TableCell align="right">Total Recovered</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.Countries.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.Country}
                    </TableCell>
                    <TableCell align="right">{row.NewConfirmed}</TableCell>
                    <TableCell align="right">{row.TotalConfirmed}</TableCell>
                    <TableCell align="right">{row.NewDeaths}</TableCell>
                    <TableCell align="right">{row.TotalDeaths}</TableCell>
                    <TableCell align="right">{row.NewRecovered}</TableCell>
                    <TableCell align="right">{row.TotalRecovered}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer> */}
        </Grid>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
