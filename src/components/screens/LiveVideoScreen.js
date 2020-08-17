import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { ButtonGroup, Button } from '@material-ui/core';
import NavBar from '../layout/NavBar';

const useStyles = makeStyles((theme) => ({
  expandedImg: {
    'width': '100%',
    'height': '100%'
  }
}));

export default function LiveVideoScreen() {
  const classes = useStyles();

  return (
    <div>
      <NavBar title="ActionPi" />
      <div>
        <img src="https://via.placeholder.com/320x240" className={classes.expandedImg} />
        <Typography variant="caption" >
          <i>*Currently displayed video quality may differ from the recording</i>
        </Typography>
      </div>
      <center>
        <Typography variant="subtitle1">
          Quick Actions
        </Typography>
        <ButtonGroup size="large" color="primary" aria-label="large outlined secondary button group" variant="contained">
          <Button>Start</Button>
          <Button>Stop</Button>
          <Button>Reboot</Button>
        </ButtonGroup>
      </center>
    </div>
  );
}