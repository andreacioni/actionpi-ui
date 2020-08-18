import { List } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SettingsApplications from '@material-ui/icons/SettingsApplications';
import Videocam from '@material-ui/icons/Videocam';
import SdStorage from '@material-ui/icons/SdStorage';
import React from 'react';
import NavBar from '../layout/NavBar';
import SettingListItem from './settings/SettingListItem';
import { Link } from 'react-router-dom';
import { routes } from '../../App';

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

  return (
    <div>
      <NavBar title="Settings" />

      <List>
        <Link className={classes.link} to={routes.CAMERA_SETTINGS}>
          <SettingListItem icon={<Videocam />} title="Camera" subtitle="Framerate, bit-rate, rotation, size, etc ..." />
        </Link>
        <SettingListItem icon={<SettingsApplications />} title="System" subtitle="Read only file system, Wi-Fi, button actions, etc ..." />
        <SettingListItem icon={<SdStorage />} title="Storage" subtitle="File system usage, clear all data, etc ..." />
      </List>
    </div>
  );
}