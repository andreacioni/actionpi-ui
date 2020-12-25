import { Grid } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Home from '@material-ui/icons/Home';
import Settings from '@material-ui/icons/Settings';
import VideoLibrary from '@material-ui/icons/VideoLibrary';
import React from 'react';
import { Link } from 'react-router-dom';
import packageJson from '../../../package.json';
import { routes } from '../../App';
import { DrawerContext } from '../../context/DrawerContext';
import GitHub from '@material-ui/icons/GitHub';
import LogoImage from '../../images/logo.png'

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
    padding: '10px',
    'background-color': theme.palette.grey[50]
  },
  sunnyIcon: {
    color: 'yellow'
  },
  logo: {
    height: '35px'
  }
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();

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
          }}>
          <div className={classes.drawerHeader} />
          <List>
            <Link className={classes.link} to={routes.HOME} onClick={toggleDrawer}>
              <ListItem button key="Live Video">
                <ListItemIcon><Home /></ListItemIcon>
                <ListItemText primary="Live Video" />
              </ListItem>
            </Link>
            {/* <Link className={classes.link} to={routes.STATS} onClick={toggleDrawer}>
              <ListItem button key="Statistics">
                <ListItemIcon><InsertChart /></ListItemIcon>
                <ListItemText primary="Statistics" />
              </ListItem>
            </Link> */}
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
            {/* <Link className={classes.link} to={routes.LOGS} onClick={toggleDrawer}>
              <ListItem button key="Logs">
                <ListItemIcon><Description /></ListItemIcon>
                <ListItemText primary="Logs" />
              </ListItem>
            </Link> */}
          </List>
          <Divider />
          {/* <center>
            <Typography component="div">
              <Grid component="label" container alignItems="center" spacing={1}>
                <Grid item><WbSunny className={classes.sunnyIcon} /></Grid>
                <Grid item>
                  <Switch checked={darkModeOn} onChange={() => setDarkModeOn(!darkModeOn)} />
                </Grid>
                <Grid item><Brightness2 /></Grid>
              </Grid>
            </Typography>
          </center> */}

          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            className={classes.drawerFooter}>

            <Grid item>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={1}>
                <Grid item>
                  <img src={LogoImage} alt="Logo" className={classes.logo} />
                </Grid>
                <Grid item>
                  <Typography className={classes.title} align="right" variant="h6">
                    ActionPi
                    </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center">
                <Grid item>
                  <IconButton aria-label="github" href="https://github.com/andreacioni/actionpi" target="_blank">
                    <GitHub />
                  </IconButton>
                </Grid>
                <Grid item>
                  <Typography className={classes.title} align="right" variant="caption">
                    v{packageJson.version}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

        </Drawer>
      )}
    </DrawerContext.Consumer>
  );
}