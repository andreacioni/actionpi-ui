import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ButtonGroup, Button, Grid, Paper, Typography } from '@material-ui/core';
import { Thermometer, Speedometer, Memory, Harddisk } from 'mdi-material-ui'; 
import NavBar from '../layout/NavBar';
import StatPaper from './live_video/StatPaper';
import ImgPlaceholder from '../../images/stream_placeholder.png'
import { BASE_URL } from '../../globals'

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

  const [info, setInfo] = useState({
    'system': {
        'cpu_temperature': 0,
        'cpu_load': 0,
        'mem_usage': 0,
        'disk_usage': {
          'mountpoint': '/',
          'percent': 10
        }
    },
    'recording': false,
    'framerate': 0
  })

  useEffect(() => {
    fetch(BASE_URL + '/api/status')
    .then((response) => response.json().then((v) => {
      console.log(v)
      setInfo(v)
    }))
    .catch((e) => console.error('There was an error getting status:', e))
  });
  
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
          <Button disabled={info['recording'] === false}>Stop</Button>
          <Button disabled={info['recording'] === true}>Start</Button>
        </ButtonGroup>
      </center>
      <br/>
      <Paper>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography>Status</Typography>
          </Grid>
          <Grid item xs={6}>
            <StatPaper icon={<Thermometer/>} title={'CPU Temperature'} value={info['system']['cpu_temperature']}/>
          </Grid>
          <Grid item xs={6}>
            <StatPaper icon={<Speedometer/>} title={'CPU Load'} value={info['system']['cpu_load']}/>
          </Grid>
          <Grid item xs={6}>
            <StatPaper icon={<Memory/>} title={'RAM Usage'} value={info['system']['mem_usage']}/>
          </Grid>
          <Grid item xs={6}>
            <StatPaper icon={<Harddisk/>} title={'Disk Usage'} value={info['system']['disk_usage']}/>
          </Grid>
        </Grid>
      </Paper>
      </React.Fragment>
  );
}