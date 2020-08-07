import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({}));
  
  export default function RecordingsScreen() {
    const classes = useStyles();
  
    return (
      <div>
        <Typography variant="h6"> Recordings </Typography>
      </div>
    );
  }