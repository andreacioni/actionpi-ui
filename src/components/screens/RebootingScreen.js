import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import { Replay } from '@material-ui/icons';
import NavBar from '../layout/NavBar';

const useStyles = makeStyles((theme) => ({
  centerDiv: {
    'position':'absolute',
    'top': '50%',
    'left': '50%',
    '-moz-transform': 'translateX(-50%) translateY(-50%)',
    '-webkit-transform': 'translateX(-50%) translateY(-50%)',
    'transform': 'translateX(-50%) translateY(-50%)'
  }
}));
  
  export default function RebootingScreen() {
    const classes = useStyles();

    const [waitTime, setWaitTime] = React.useState(120);

    React.useState(() => {
      if(waitTime > 0) {
        setTimeout(() => setWaitTime(waitTime-1), 1000);
      }
    }, [waitTime]);
  
    return (
      <div className={classes.centerDiv}>
        <Typography variant="h3">Rebooting...</Typography>
        <Replay fontSize="large"/>
        <Button disabled={waitTime !== 0} variant="contained" color="primary">Reload ()</Button>
      </div>
    );
  }