import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import GitHub from '@material-ui/icons/GitHub';
import ArrowBack from '@material-ui/icons/ArrowBack';

import packageJson from '../../../package.json';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavBar(props) {

  const classes = useStyles();

  var handleClick = () => props.toggleMenu();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton onClick={handleClick} className={classes.menuButton} color="inherit" aria-label="menu">
            { props.drawerOpened === true ? <ArrowBack/> : <MenuIcon />}
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            ActionPi
            </Typography>
          <Typography className={classes.title} align="right" variant="caption">
            <IconButton color="secondary" aria-label="github" href="https://github.com/andreacioni/actionpi" target="_blank">
              <GitHub />
            </IconButton>
              v{packageJson.version}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );

}