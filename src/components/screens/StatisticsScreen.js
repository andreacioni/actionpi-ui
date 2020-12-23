import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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