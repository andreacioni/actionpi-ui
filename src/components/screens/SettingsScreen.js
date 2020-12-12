import { List, ListItemSecondaryAction, Checkbox, IconButton } from '@material-ui/core';
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
  }
}));

export default function SettingsScreen() {
  const classes = useStyles();

  const [openFramerateDialog, setOpenFramerateDialog] = React.useState(false);
  
  const [isFilesystemRW, setFilesystemRW] = React.useState(false);
  const [isHotspotEnabled, setHotspotEnabled] = React.useState(false);

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

  return (
    <React.Fragment>
      <NavBar title="Settings" />

      <List>
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
          action={<ListItemSecondaryAction><Checkbox onChange={(e,checked) => callSetHotspotEnabled(checked)} edge="end"/></ListItemSecondaryAction>} />
        <SettingListItem 
          icon={<SdCard />} 
          title="Mount R/W" 
          subtitle="After a reboot, file system will be mounted in read & write mode." 
          button={false}
          action={<ListItemSecondaryAction><Checkbox onChange={(e,checked) => callSetFileSystemRW(checked)} edge="end"/></ListItemSecondaryAction>} />
        <SettingListItem 
          icon={<Replay />} 
          title="Reboot" 
          subtitle="ActionPi will be rebooted. This is required to apply the changes you made here." />
      </List>

      <FramerateDialog 
        open={openFramerateDialog} 
        onClose={() => setOpenFramerateDialog(!openFramerateDialog)}/>
    </React.Fragment>
  );
}