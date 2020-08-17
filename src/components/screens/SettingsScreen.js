import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, FormControl, RadioGroup, FormControlLabel, Radio, FormLabel, Grid, Slider, Divider, Switch, IconButton, ListItemIcon, List, ListItem, ListItemText } from '@material-ui/core';
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';
import RotateLeft from '@material-ui/icons/RotateLeft';
import SettingsApplications from '@material-ui/icons/SettingsApplications';
import Videocam from '@material-ui/icons/Videocam';
import NavBar from '../layout/NavBar';

const useStyles = makeStyles((theme) => ({
  screenTitle: {
    'margin-bottom': '20px'
  },
  marginDivider: {
    'margin-bottom': '10px'
  }
}));

export default function SettingsScreen() {
  const classes = useStyles();

  return (
    <div>
      <NavBar title="Settings" />

      <List>
        <ListItem>
          <ListItemIcon><Videocam /></ListItemIcon>
          <ListItemText primary="Camera" secondary="Framerate, bit-rate, rotation, size, etc ..." />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemIcon><SettingsApplications /></ListItemIcon>
          <ListItemText primary="System" secondary="Read only file system, Wi-Fi, etc ..." />
        </ListItem>
      </List>
    </div>
  );
}