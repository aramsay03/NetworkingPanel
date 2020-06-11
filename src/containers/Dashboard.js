import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import Switch from "@material-ui/core/Switch";
import NetworkContainer from "./NetworkContainer";
import { CssBaseline } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {
    blue,
    grey,
    indigo,
    deepOrange
  } from "@material-ui/core/colors";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  typography: {
      fontSize: 10,
  },
  toolbar: {
    paddingRight: 24 // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  menuButtonHidden: {
    display: "none"
  },
  title: {
    flexGrow: 1
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9)
    }
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto"
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column"
  },
  fixedHeight: {
    height: 240
  }
}));

export default function Dashboard() {
  const [darkState, setDarkState] = useState(false);
  const palletType = darkState ? "dark" : "light";
  const mainPrimaryColor = darkState ? blue[900] : grey[300];
  const mainSecondaryColor = darkState ? blue[100] : grey[900];
  const backGroundColor = darkState ? '#1D3354' : grey[300];
  const paperColor = darkState ? '#26537C': grey[200];
  const darkTheme = createMuiTheme({
    palette: {
        type: palletType,
        primary: {
          main: mainPrimaryColor
        },
        secondary: {
          main: mainSecondaryColor
        },
        background: {
            default: backGroundColor,
            paper: paperColor,
        }
     }
    });
  const classes = useStyles();
  const handleThemeChange = () => {
    setDarkState(!darkState);
  };
  
  return (
    <ThemeProvider theme={darkTheme}>
        <CssBaseline />
    <AppBar
        position="static"
        style = {{
            borderRadius: '10px',
            boxShadow: 'none',
            background: 'none',
        }}
    >
        <Toolbar>
        <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              className={classes.title}
            >
              Network Dashboard
            </Typography>
            <FormControlLabel
            control={<Switch checked={darkState} onChange={handleThemeChange}/>}
            label="Dark Mode"
            />
      </Toolbar>
    </AppBar>
        <Container>
            <NetworkContainer/>
        </Container>
    </ThemeProvider>
  );
}