import { List, ListItemSecondaryAction, Checkbox, IconButton, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SettingsApplications from '@material-ui/icons/SettingsApplications';
import {Wifi, Replay, SdCard, Camera, Edit} from '@material-ui/icons';
import React from 'react';
import NavBar from '../layout/NavBar';
import SettingListItem from './settings/SettingListItem';
import { Link } from 'react-router-dom';
import { routes } from '../../App';
import FramerateDialog from './settings/FramerateDialog';
import { BASE_URL } from '../../globals';

const useStyles = makeStyles((theme) => ({
  screenTitle: {
    'margin-bottom': '20px'
  },
  marginDivider: {
    'margin-bottom': '10px'
  },
  link: {
  'text-decoration': 'none'
  },
  loadingIndicator: {
    'position': 'absolute',
    'top': '50%',
    'left': '45%'

  }
}));

export default function SettingsScreen() {
  const classes = useStyles();

  const [openFramerateDialog, setOpenFramerateDialog] = React.useState(false);
  
  const [isLoading, setLoading] = React.useState(true)
  const [isFilesystemRW, setFilesystemRW] = React.useState(false);
  const [isHotspotEnabled, setHotspotEnabled] = React.useState(false);
  const [framerate, setFramerate] = React.useState(0);

  const callSetFileSystemRW = (value) => {
    fetch(BASE_URL + '/api/mountrw')
    .catch((e) => {
      console.error('Can\'t mount filesystem R/W', e);
      setFilesystemRW(!value);
    });

    setFilesystemRW(value);
  };

  const callSetHotspotEnabled = (value) => {
    const onOff = value === true ? 'on' : 'off';
    fetch(BASE_URL + '/api/hotspot?enable=' + onOff).catch((e) => {
      console.error('Can\'t mount filesystem R/W', e);
      setHotspotEnabled(!value);
    });
    
    setHotspotEnabled(value);
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
            title="WiFi hotspot" 
            subtitle="Enable/Disable the internal WiFi hotspost. When disabling hotsspot the ActionPi will try to connect to a configured WiFi network." 
            button={false}
            action={<ListItemSecondaryAction><Checkbox checked={isHotspotEnabled} onChange={(e,checked) => callSetHotspotEnabled(checked)} edge="end"/></ListItemSecondaryAction>} />
          <SettingListItem 
            icon={<SdCard />} 
            title="Mount R/W" 
            subtitle="After a reboot, file system will be mounted in read & write mode." 
            button={false}
            action={<ListItemSecondaryAction><Checkbox checked={isFilesystemRW} onChange={(e,checked) => callSetFileSystemRW(checked)} edge="end"/></ListItemSecondaryAction>} />
          <SettingListItem 
            icon={<Replay />} 
            title="Reboot" 
            subtitle="ActionPi will be rebooted. This is required to apply the changes you made here." />
        </List>
      }

      {console.log(framerate)}

      <FramerateDialog 
        initialFramerate={framerate}
        open={openFramerateDialog} 
        onClose={() => setOpenFramerateDialog(!openFramerateDialog)}
      />
    </React.Fragment>
  );
}