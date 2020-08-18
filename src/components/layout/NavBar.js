import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowBack from '@material-ui/icons/ArrowBack';
import PropTypes from 'prop-types';


import { DrawerContext } from '../../context/DrawerContext';

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

  return (
    <DrawerContext.Consumer>
      {({isDrawerOpened, toggleDrawer}) => (
        <header className={classes.root}>
          <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
              <IconButton onClick={toggleDrawer} className={classes.menuButton} color="inherit" aria-label="menu">
                {isDrawerOpened === true ? <ArrowBack /> : <MenuIcon />}
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                {props.title}
              </Typography>
            </Toolbar>
          </AppBar>
        </header>
      )}
    </DrawerContext.Consumer>
  );

}

NavBar.propTypes = {
  title: PropTypes.string
}