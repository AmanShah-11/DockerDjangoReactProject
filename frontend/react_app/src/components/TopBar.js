import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import HomeIcon from "@material-ui/icons/Home";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

// function ButtonAppBar() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton
//             edge="start"
//             className={classes.menuButton}
//             color="inherit"
//             aria-label="menu"
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" className={classes.title}>
//             Iris Species Predictor
//           </Typography>
//           {/* <Button color="inherit">Login</Button> */}
//         </Toolbar>
//       </AppBar>
//     </div>
//   );
// }

export default function TopBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Iris Species Predictor
          </Typography>
          {props.isAuthenticated ? (
            <Button color="inherit" onClick={() => props.logout()}>
              Logout
            </Button>
          ) : null}
          <IconButton aria-label="home page" color="inherit" href="/">
            <HomeIcon />
          </IconButton>
          {props.isAuthenticated ? (
            <Button color="inherit" href="/update_password">
              Update Password
            </Button>
          ) : null}
          {props.isAuthenticated ? (
            <Button color="inherit" onClick={() => props.logout()}>
              Logout
            </Button>
          ) : null}
        </Toolbar>
      </AppBar>
    </div>
  );
}
