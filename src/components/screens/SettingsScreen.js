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

  const handleClickOpen = () => {
    setOpenFramerateDialog(true);
  };

  const handleClose = () => {
    setOpenFramerateDialog(false);
  };

  const enableHotspotCheckbox = (
  <ListItemSecondaryAction>
    <Checkbox
      edge="end"
    />
  </ListItemSecondaryAction>);

const enableReadWriteCheckbox = (
  <ListItemSecondaryAction>
    <Checkbox
      edge="end"
    />
  </ListItemSecondaryAction>);

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
          subtitle="Enable/Disable the internal WiFi hostpost. When disabling hostspot the ActionPi will try to connect to a configured WiFi network." 
          button={false}
          action={enableHotspotCheckbox} />
        <SettingListItem 
          icon={<SdCard />} 
          title="Mount R/W" 
          subtitle="After a reboot, file system will be mounted in read & write mode." 
          button={false}
          action={enableReadWriteCheckbox} />
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