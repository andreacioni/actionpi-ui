import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import NavBar from '../layout/NavBar';

const useStyles = makeStyles((theme) => ({}));
  
  export default function StatisticsScreen() {
    const classes = useStyles();
  
    return (
      <div>
        <NavBar title="Statistics" />
      </div>
    );
  }