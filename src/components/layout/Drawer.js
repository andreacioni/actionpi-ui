import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import VideoLibrary from '@material-ui/icons/VideoLibrary';
import Description from '@material-ui/icons/Description';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Home from '@material-ui/icons/Home'
import InsertChart from '@material-ui/icons/InsertChart';
import Settings from '@material-ui/icons/Settings';
import { Link } from 'react-router-dom';

import { routes } from '../../App'
import { DrawerContext } from '../../context/DrawerContext';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  expandedImg: {
    'width': '100%',
    'height': '100%'
  },
  link: {
    'color': 'grey',
    'text-decoration': 'none'
  },
  drawerFooter: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    fontSize: '0.5rem',
    padding: '10px'
  }
}));

export default function PersistentDrawerLeft(props) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <DrawerContext.Consumer>
      {({ isDrawerOpened, toggleDrawer }) => (
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={isDrawerOpened}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader} />
          <List>
            <Link className={classes.link} to={routes.HOME} onClick={toggleDrawer}>
              <ListItem button key="Live Video">
                <ListItemIcon><Home /></ListItemIcon>
                <ListItemText primary="Live Video" />
              </ListItem>
            </Link>
            <Link className={classes.link} to={routes.STATS} onClick={toggleDrawer}>
              <ListItem button key="Statistics">
                <ListItemIcon><InsertChart /></ListItemIcon>
                <ListItemText primary="Statistics" />
              </ListItem>
            </Link>
            <Link className={classes.link} to={routes.SETTINGS} onClick={toggleDrawer}>
              <ListItem button key="Settings">
                <ListItemIcon><Settings /></ListItemIcon>
                <ListItemText primary="Settings" />
              </ListItem>
            </Link>
            <Link className={classes.link} to={routes.RECORDINGS} onClick={toggleDrawer}>
              <ListItem button key="Recordings">
                <ListItemIcon><VideoLibrary /></ListItemIcon>
                <ListItemText primary="Recordings" />
              </ListItem>
            </Link>
            <Link className={classes.link} to={routes.LOGS} onClick={toggleDrawer}>
              <ListItem button key="Logs">
                <ListItemIcon><Description /></ListItemIcon>
                <ListItemText primary="Logs" />
              </ListItem>
            </Link>
          </List>
          <Divider />
          <Typography className={classes.drawerFooter}>
            ActionPi is made with ❤ by Andrea Cioni
          </Typography>
        </Drawer>
      )}
    </DrawerContext.Consumer>
  );
}