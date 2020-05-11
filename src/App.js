import React, { useState, useEffect } from "react";
import Moment from "react-moment";
import {
  Grid,
  Container,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import Box from "@material-ui/core/Box";
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

    console.log(data);
  }, []);

  return (
    <div>
      <Header />
      <Container>
        <Grid container direction="column" justify="center" alignItems="center">
          <Typography variant="h5" component="h2">
            Covid-19 List
          </Typography>
        </Grid>
        <Grid container direction="column" justify="center" alignItems="center">
          <Card p={3} className={classes.root}>
            <CardContent>
              <Typography variant="h5" component="h2">
                Global Count
              </Typography>
              {console.log(data)}
              {error && <div>Something Went Wrong...</div>}
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
        <Grid>
          <TableContainer p={3} component={Paper}>
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
          </TableContainer>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
