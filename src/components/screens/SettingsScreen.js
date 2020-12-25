import { 
  List, 
  ListItemSecondaryAction, 
  Switch, 
  IconButton, 
  CircularProgress, 
  Tooltip,
 } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {Wifi, Replay, SdCard, Edit, Warning} from '@material-ui/icons';
import React from 'react';
import NavBar from '../layout/NavBar';
import SettingListItem from './settings/SettingListItem';
import { useHistory } from 'react-router-dom';
import { WifiDialog, ConfirmReboot } from './settings/Dialogs';
import { BASE_URL } from '../../globals';
import { SettingsContext } from '../../context/SettingsContext'


const useStyles = makeStyles(() => ({
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

  //const [openFramerateDialog, setOpenFramerateDialog] = React.useState(false);
  const [openWifiDialog, setOpenWifiDialog] = React.useState(false);
  const [openConfirmReboot, setOpenConfirmRebootDialog] = React.useState(false);
  
  const [isLoading, setLoading] = React.useState(true)
  const {rebootRequired, setRebootRequired} = React.useContext(SettingsContext);
  
  const [isFilesystemRW, setFilesystemRW] = React.useState(false);
  const [isHotspotEnabled, setHotspotEnabled] = React.useState(false);
  //const [framerate, setFramerate] = React.useState(0);

  const history = useHistory();

  const callSetWiFiConfig = (enableHotspot, countryCode, ssid, password) => {
    if(enableHotspot !== undefined) {
      console.log('New WiFi config received:', enableHotspot, countryCode, ssid, password)
      
      const enable = enableHotspot ? 'on' : 'off';
      fetch(BASE_URL + '/api/hotspot?enable=' + enable + '&ssid=' + (ssid ? encodeURIComponent(ssid) : '') + '&password=' + (password ? encodeURIComponent(password) : '') + '&country_code=' + (countryCode ? countryCode : '')) 
      .then(() => setRebootRequired(true))
      .catch((e) => {
        console.error('Can\'t enable/disable WiFi hotspot', e);
        setHotspotEnabled(!enableHotspot);
      });      
      
      setHotspotEnabled(enableHotspot);
    }
    
    setOpenWifiDialog(false);
  };

  const callSetFileSystemMode = (checked) => {
    const mode = checked ? 'rw' : 'ro';
    fetch(BASE_URL + '/api/mount?mode=' + mode)
    .then(() => setRebootRequired(true))
    .catch((e) => {
      console.error('Can\'t mount filesystem R/W', e);
      setFilesystemRW(!checked);
    });

    setFilesystemRW(checked);
  };

  React.useEffect(() => {
    fetch(BASE_URL + '/api/status')
    .then((response) => response.json())
    .then((json) => {
      console.log('Current status:', json);
      setHotspotEnabled(json['system']['ap_mode'] === 'Master');
      setFilesystemRW(json['system']['disk_usage'][0]['rw']);
      //setFramerate(json['framerate']);
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
          </Link> 
          <SettingListItem icon={<Camera />} 
            title="Framerate" 
            subtitle="Change recording frame rate" 
            button={false}
            action={<IconButton onClick={() => setOpenFramerateDialog(true)}><Edit/></IconButton>} />*/}
          <SettingListItem icon={<Wifi />} 
            title={"Network (" + (isHotspotEnabled ? 'Hotspot' : 'Client') + ")"} 
            subtitle="Manage network connectivity" 
            button={false}
            action={<IconButton onClick={() => setOpenWifiDialog(true)}><Edit/></IconButton>} />
          <SettingListItem 
            icon={<SdCard />} 
            title="Mount R/W" 
            subtitle='After device reboot, filesystem is mounted in R/W mode. This setting is "volatile" and it will be lost after a second reboot.'
            button={false}
            action={<ListItemSecondaryAction><Switch checked={isFilesystemRW} onChange={(_e,checked) => callSetFileSystemMode(checked)} edge="end"/></ListItemSecondaryAction>} />
          <SettingListItem 
            icon={<Replay />} 
            title="Reboot" 
            onClick={() => setOpenConfirmRebootDialog(true)}
            subtitle="ActionPi will be rebooted. This is required to apply the changes you made here."
            action={rebootRequired ? <Tooltip title="Reboot to apply changes"><Warning color="primary"/></Tooltip> : null} />
        </List>
      }

{/*       <FramerateDialog 
        initialFramerate={framerate}
        open={openFramerateDialog} 
        onClose={() => setOpenFramerateDialog(!openFramerateDialog)}
      /> */}
      <WifiDialog 
        hotspotEnabled={isHotspotEnabled}
        open={openWifiDialog} 
        onClose={callSetWiFiConfig}
      />
      <ConfirmReboot 
        open={openConfirmReboot} 
        onCancel={() => setOpenConfirmRebootDialog(false)}
        onConfirm={() => {
          fetch(BASE_URL + '/api/reboot');
          setOpenConfirmRebootDialog(false);
          history.push("/rebooting");
        }}
      />
    </React.Fragment>
  );
}