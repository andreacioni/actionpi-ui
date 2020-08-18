import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, FormControl, RadioGroup, FormControlLabel, Radio, FormLabel, Grid, Slider, Divider, Switch, IconButton } from '@material-ui/core';
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';
import RotateLeft from '@material-ui/icons/RotateLeft';
import RotateRigth from '@material-ui/icons/RotateRight';
import NavBar from '../../../layout/NavBar';

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
      <NavBar title="System Settings" />

      <Typography variant="subtitle1"> Video </Typography>

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

      <Divider className={classes.marginDivider}/>
      
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

    </div>
  );
}