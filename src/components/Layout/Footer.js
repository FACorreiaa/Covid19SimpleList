import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles((theme) => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  paper: {
    paddingBottom: 50,
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    top: "auto",
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: "absolute",
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: "0 auto",
  },
}));
const Footer = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.grow}>
        <AppBar position="fixed" color="default" className={classes.appBar}>
          <Toolbar>
            <Button color="primary">
              <a
                href="https://www.linkedin.com/in/fernando-correia-ab018079/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </a>
            </Button>

            <Button color="primary">
              <a
                href="https://twitter.com/FACorreiaa"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </Button>
            <Button color="primary">
              <a
                href="https://www.facebook.com/Nandooo316"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </Button>
            <Button color="primary">
              <a
                href="https://github.com/FACorreiaa"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </Button>
            <Button color="primary">
              <a
                href="https://facorreiaa.github.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Portfolio
              </a>
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    </React.Fragment>
  );
};

export default Footer;
