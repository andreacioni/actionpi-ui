import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from './Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { routes } from '../../App'
import LiveVideoScreen from '../screens/LiveVideoScreen';
import DownloadVideoScreen from '../screens/RecordingsScreen';
import SettingsScreen from '../screens/SettingsScreen'
import StatisticsScreen from '../screens/StatisticsScreen';
import { DrawerContext } from '../../context/DrawerContext';
import { SettingsContext } from '../../context/SettingsContext';
import Footer from './Footer';
import SystemSettingsScreen from '../screens/settings/system/SystemSettingsScreen';
import CameraSettingsScreen from '../screens/settings/camera/CameraSettingsScreen';
import StorageSettingsScreen from '../screens/settings/storage/StorageSettingsScreen';
import RebootingScreen from '../screens/RebootingScreen';
import ConfigureConnectionScreen from '../screens/settings/network/NetworkSettings';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    //padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    //marginLeft: -drawerWidth,
  },
  expandedImg: {
    'width': '100%',
    'height': '100%'
  }
}));

export default function Layout() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [rebootRequired, setRebootRequired] = React.useState(false);

  const drawer = {
    isDrawerOpened: open,
    toggleDrawer: () => {
      setOpen(!open);
    }
  };

  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline />
        <DrawerContext.Provider value={drawer}>
          <SettingsContext.Provider value={{rebootRequired, setRebootRequired}}>
            <Drawer open={open} />
            <main className={classes.content}>
              <div className={classes.drawerHeader} />
              <Switch>
                <Route exact path={routes.HOME}>
                  <LiveVideoScreen useStyles={classes} />
                </Route>
                <Route path={routes.RECORDINGS}>
                  <DownloadVideoScreen useStyles={classes} />
                </Route>
                <Route path={routes.STATS}>
                  <StatisticsScreen useStyles={classes} />
                </Route>
                <Route exact path={routes.SETTINGS}>
                  <SettingsScreen useStyles={classes} />
                </Route>
                <Route path={routes.SYSTEM_SETTINGS}>
                  <SystemSettingsScreen useStyles={classes} />
                </Route>
                <Route path={routes.CAMERA_SETTINGS}>
                  <CameraSettingsScreen useStyles={classes} />
                </Route>
                <Route path={routes.FILESYSTEM_SETTINGS}>
                  <StorageSettingsScreen useStyles={classes} />
                </Route>
                <Route path={routes.NETWORK_SETTINGS}>
                  <ConfigureConnectionScreen useStyles={classes} />
                </Route>
                <Route path={routes.REBOOTING}>
                  <RebootingScreen useStyles={classes} />
                </Route>
              </Switch>
            </main>
            <Footer />
          </SettingsContext.Provider>
        </DrawerContext.Provider>
      </div>
    </Router>
  );
}