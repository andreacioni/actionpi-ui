import { List } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SettingsApplications from '@material-ui/icons/SettingsApplications';
import Videocam from '@material-ui/icons/Videocam';
import SdStorage from '@material-ui/icons/SdStorage';
import React from 'react';
import NavBar from '../layout/NavBar';
import SettingListItem from './settings/SettingListItem';

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
        <SettingListItem icon={<Videocam />} title="Camera" subtitle="Framerate, bit-rate, rotation, size, etc ..." />
        <SettingListItem icon={<SettingsApplications />} title="System" subtitle="Read only file system, Wi-Fi, etc ..." />
        <SettingListItem icon={<SdStorage />} title="Storage" subtitle="File system usage, clear all data, etc ..." />
      </List>
    </div>
  );
}