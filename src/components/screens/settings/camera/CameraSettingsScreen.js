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
      <SettingsAppBar title="Camera" />
      <SettingsScreenContainer>
        <Typography variant="subtitle2"> Framerate </Typography>
        <Grid container spacing={2}>
          <Grid item>
            <VolumeDown />
          </Grid>
          <Grid item xs>
            <Slider min={1} max={60} value={10} aria-labelledby="continuous-slider" />
          </Grid>
          <Grid item>
            <VolumeUp />
          </Grid>
        </Grid>

        <Typography variant="subtitle2"> Rotation </Typography>
        <IconButton aria-label="rotate-left">
          <RotateLeft />
        </IconButton>
        <IconButton aria-label="rotate-rigth">
          <RotateRigth />
        </IconButton>

        <Divider className={classes.marginDivider} />

        <Typography variant="subtitle1"> OS </Typography>

        <FormControlLabel
          control={<Switch checked={true} name="checkedA" />}
          label="Read Only Partition"
        />

        <Typography />

        <FormControl component="fieldset">
          <FormLabel component="legend">WiFi</FormLabel>
          <RadioGroup aria-label="gender" name="gender1">
            <FormControlLabel value="client" control={<Radio />} label="Client" />
            <FormControlLabel value="hotspot" control={<Radio />} label="Hotspot" />
          </RadioGroup>
        </FormControl>
      </SettingsScreenContainer>
    </div>
  );
}