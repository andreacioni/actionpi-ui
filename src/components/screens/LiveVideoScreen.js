import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ButtonGroup, Button, Grid, Paper, Typography } from '@material-ui/core';
import { Thermometer } from 'mdi-material-ui'; 
import NavBar from '../layout/NavBar';
import StatPaper from './live_video/StatPaper';
import ImgPlaceholder from '../../images/stream_placeholder.png'

const useStyles = makeStyles((theme) => ({
  expandedImg: {
    'width': '100%',
    'height': '100%'
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  }
}));

export default function LiveVideoScreen() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <NavBar title="ActionPi" />
      <div>
        <img src={ImgPlaceholder} alt="Live capture" className={classes.expandedImg} />
        <Typography variant="caption" >
          <i>*Recording quality may be different</i>
        </Typography>
      </div>
      <center>
        <br/>
        <ButtonGroup size="large" color="primary" aria-label="large outlined secondary button group" variant="contained">
          <Button>Stop</Button>
          <Button>Start</Button>
        </ButtonGroup>
      </center>
      <Typography>Status</Typography>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <StatPaper icon={Thermometer} title={'CPU Temperature'} value={30}/>
        </Grid>
        <Grid item xs={6}>
          <StatPaper title={'CPU Load'} value={12}/>
        </Grid>
        <Grid item xs={6}>
          <StatPaper title={'RAM Usage'} value={60}/>
        </Grid>
        <Grid item xs={6}>
          <StatPaper title={'Disk Usage'} value={40}/>
        </Grid>
      </Grid>
      </React.Fragment>
  );
}