import { Divider, FormControl, FormControlLabel, FormLabel, Grid, IconButton, Radio, RadioGroup, Slider, Switch, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import RotateLeft from '@material-ui/icons/RotateLeft';
import RotateRigth from '@material-ui/icons/RotateRight';
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';
import React from 'react';
import SettingsAppBar from '../SettingsAppBar';
import SettingsScreenContainer from '../SettingsScreenContainer';

const useStyles = makeStyles((theme) => ({
  screenTitle: {
    'margin-bottom': '20px'
  },
  marginDivider: {
    'margin-bottom': '10px'
  }
}));

export default function CameraSettingsScreen() {
  const classes = useStyles();

  return (
    <div>
      <SettingsAppBar title="Storage" />
      <SettingsScreenContainer>
        
      </SettingsScreenContainer>
    </div>
  );
}