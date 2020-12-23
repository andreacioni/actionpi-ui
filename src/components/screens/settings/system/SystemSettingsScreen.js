import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, FormControl, RadioGroup, FormControlLabel, Radio, FormLabel, Switch } from '@material-ui/core';

import SettingsAppBar from '../SettingsAppBar';
import SettingsScreenContainer from '../SettingsScreenContainer'

const useStyles = makeStyles((theme) => ({
  screenTitle: {
    'margin-bottom': '20px'
  },
  marginDivider: {
    'margin-bottom': '10px'
  }
}));

export default function SystemSettingsScreen() {
  const classes = useStyles();

  return (
    <div>
      <SettingsAppBar title="System" />
      <SettingsScreenContainer>
        <FormControl component="fieldset">
          <FormLabel component="legend">WiFi</FormLabel>
          <RadioGroup aria-label="gender" name="gender1">
            <FormControlLabel value="client" control={<Radio />} label="Client" />
            <FormControlLabel value="hotspot" control={<Radio />} label="Hotspot" />
          </RadioGroup>
        </FormControl>

        <Typography />
        
        <FormControlLabel
          control={<Switch checked={true} name="checkedA" />}
          label="Read Only Partition"
        />
      </SettingsScreenContainer>
    </div>
  );
}