import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, FormControl, RadioGroup, FormControlLabel, Radio, FormLabel } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  screenTitle: {
    'margin-bottom': '20px'
  }
}));

export default function SettingsScreen() {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h6" className={classes.screenTitle}> Settings </Typography>
      <FormControl component="fieldset">
        <FormLabel component="legend">Gender</FormLabel>
        <RadioGroup aria-label="gender" name="gender1">
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
          <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" />
        </RadioGroup>
      </FormControl>
    </div>
  );
}