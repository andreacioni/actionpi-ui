import { List, ListItemSecondaryAction, Switch, IconButton, CircularProgress, Grid, Button, Icon } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SettingsApplications from '@material-ui/icons/SettingsApplications';
import {Wifi, Replay, SdCard, Camera, Edit, ChevronRight, Check, Cancel, Warning} from '@material-ui/icons';
import React from 'react';
import NavBar from '../layout/NavBar';
import SettingListItem from './settings/SettingListItem';
import { Link } from 'react-router-dom';
import { routes } from '../../App';
import { FramerateDialog, WifiDialog } from './settings/Dialogs';
import { BASE_URL } from '../../globals';

const useStyles = makeStyles((theme) => ({
  screenTitle: {
    'margin-bottom': '20px'
  },
  marginDivider: {
    'margin-bottom': '10px'
  },
  link: {
  'text-decoration': 'none',
  'color': 'inherit'
  },
  loadingIndicator: {
    'position': 'absolute',
    'top': '50%',
    'left': '45%'

  },
  buttonGrid: {
    'margin-top': 10
  }
}));

export default function SettingsScreen() {
  const classes = useStyles();

  const [openFramerateDialog, setOpenFramerateDialog] = React.useState(false);
  const [openWifiDialog, setOpenWifiDialog] = React.useState(false);
  
  const [isLoading, setLoading] = React.useState(true)
  
  const [isFilesystemRW, setFilesystemRW] = React.useState(false);
  const [isHotspotEnabled, setHotspotEnabled] = React.useState(false);
  const [wifiConfig, setWifiConfig] = React.useState({
    ssid: null, 
    password: null
  });
  const [framerate, setFramerate] = React.useState(0);

  const callSetFileSystemRW = (value) => {
    fetch(BASE_URL + '/api/mountrw')
    .catch((e) => {
      console.error('Can\'t mount filesystem R/W', e);
      setFilesystemRW(!value);
    });
  };

  const callSetHotspotEnabled = (value) => {
    const onOff = value === true ? 'on' : 'off';
    fetch(BASE_URL + '/api/hotspot?enable=' + onOff).catch((e) => {
      console.error('Can\'t mount filesystem R/W', e);
      setHotspotEnabled(!value);
    });
  };

  React.useEffect(() => {
    fetch(BASE_URL + '/api/status')
    .then((response) => response.json())
    .then((json) => {
      console.log('Current status:', json);
      setHotspotEnabled(json['system']['hotspot_enabled']);
      setFilesystemRW(json['system']['disk_usage'][0]['rw']);
      setFramerate(json['framerate']);
      setLoading(false);
    })
    .catch((e) => console.log('Can\'t retrieve status', e))
  }, []);

  return (
    <React.Fragment>
      <NavBar title="Settings" />

      {(isLoading === true) 
        ? <CircularProgress className={classes.loadingIndicator} />
        :<List>
          {/* <Link className={classes.link} to={routes.CAMERA_SETTINGS}>
            <SettingListItem icon={<Videocam />} title="Camera" subtitle="Framerate, bit-rate, rotation, size, etc ..." />
            </Link>
            <Link className={classes.link} to={routes.SYSTEM_SETTINGS}>
            <SettingListItem icon={<SettingsApplications />} title="System" subtitle="Read only file system, Wi-Fi, button actions, etc ..." />
            </Link>
            <Link className={classes.link} to={routes.FILESYSTEM_SETTINGS}>
            <SettingListItem icon={<SdStorage />} title="Storage" subtitle="File system usage, clear all data, etc ..." />
          </Link> */}
          <SettingListItem icon={<Camera />} 
            title="Framerate" 
            subtitle="Change recording frame rate" 
            button={false}
            action={<IconButton onClick={() => setOpenFramerateDialog(true)}><Edit/></IconButton>} />
          <SettingListItem icon={<Wifi />} 
            title="Network" 
            subtitle="Manage network connectivity" 
            button={false}
            action={<IconButton onClick={() => setOpenWifiDialog(true)}><Edit/></IconButton>} />
          <SettingListItem 
            icon={<SdCard />} 
            title="Mount R/W" 
            subtitle='After device reboot, filesystem is mounted in R/W mode. This setting is "volatile" and it will be lost after a second reboot.'
            button={false}
            action={<ListItemSecondaryAction><Switch checked={isFilesystemRW} onChange={(_e,checked) => setFilesystemRW(checked)} edge="end"/></ListItemSecondaryAction>} />
          <SettingListItem 
            icon={<Replay />} 
            title="Reboot" 
            subtitle="ActionPi will be rebooted. This is required to apply the changes you made here."
            action={<IconButton title="Reboot to apply changes"><Warning color="primary"/></IconButton>} />
        </List>
      }

      <FramerateDialog 
        initialFramerate={framerate}
        open={openFramerateDialog} 
        onClose={() => setOpenFramerateDialog(!openFramerateDialog)}
      />
      <WifiDialog 
        hotspot={isHotspotEnabled}
        wifiConfig={wifiConfig}
        open={openWifiDialog} 
        onClose={() => setOpenWifiDialog(!openWifiDialog)}
      />
    </React.Fragment>
  );
}