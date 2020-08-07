import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { ButtonGroup, Button } from '@material-ui/core';

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
      <Typography variant="h6">
        Live Video
      </Typography>
      <div>
        <img src="https://via.placeholder.com/320x240" className={classes.expandedImg} />
        <Typography variant="caption" >
          Currently displayed video quality may differ from the recording
        </Typography>
      </div>
      <Typography variant="subtitle1">
        Quick Actions
      </Typography>
      <ButtonGroup size="large" color="primary" aria-label="large outlined secondary button group" variant="contained">
        <Button>Start</Button>
        <Button>Stop</Button>
        <Button>Reboot</Button>
      </ButtonGroup>
    </div>
  );
}