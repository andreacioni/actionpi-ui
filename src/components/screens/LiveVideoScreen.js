import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ButtonGroup, Button, Grid, Paper, Typography } from '@material-ui/core';
import { Thermometer, Speedometer, Memory, Harddisk, Record, Stop } from 'mdi-material-ui'; 
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
    padding: 10,
    margin: 10
  },
  buttonContainer: {
    'text-align': 'center',
    'margin': '10px 0 10px 0'
  },
}));

export default function LiveVideoScreen() {
  const classes = useStyles();

  const [status, setStatus] = useState({
    'system': {
        'cpu_temperature': 0,
        'cpu_load': 0,
        'mem_usage': 0,
        'disk_usage': [{
          'mountpoint': '/',
          'percent': 0
        }]
    },
    'recording': null,
    'framerate': 0
  });

  const [recording, setRecording] = useState(null);
  const [previewImage, setPreviewImage] = useState(ImgPlaceholder);

  let autoFetchInterval;
  const fetchStatusData = () => {
    fetch(BASE_URL + '/status')
    .then((response) => response.json())
    .then((v) => {
      setStatus(v)
      setRecording(v['recording'])
      
      if(autoFetchInterval === undefined) {
        autoFetchInterval = setInterval(fetchStatusData, 2000)
      }
    })
    .catch((e) => console.error('There was an error getting status:', e))
    
    return () => {clearInterval(autoFetchInterval)}
  };
  useEffect(fetchStatusData, []);
  
  let autoRefreshInterval;
  const autoRefreshPreview = () => {
    if(recording) {
      setPreviewImage(BASE_URL + '/preview?' + (new Date().getTime()))
    }
    
    if(autoRefreshInterval === undefined) {
      autoRefreshInterval = setInterval(autoRefreshPreview, 2000)
    }

    return () => {clearInterval(autoRefreshInterval)}
  };
  useEffect(autoRefreshPreview, [recording]);

  const startRecording = (recording) => {
    setRecording(recording)
    
    fetch(BASE_URL + '/' + (recording ? 'start' : 'stop'))
    .then((response) => response)
    .then((v) => {
      setRecording(recording)
    })
    .catch((e) => {
      console.error('There was en error setting recording status:', recording, e);
      setRecording(!recording)
    });
  };

  
  return (
    <React.Fragment>
      <NavBar title="ActionPi" />
      <div>
        <img src={previewImage} alt="Live capture" onError={() => setPreviewImage(ImgPlaceholder)} className={classes.expandedImg} />
        <Typography variant="caption" >
          <i>*Recording quality may be different</i>
        </Typography>
      </div>
      <div className={classes.buttonContainer}>
        <ButtonGroup size="large" color="primary" aria-label="large outlined secondary button group" variant="contained">
          <Button startIcon={<Stop/>} disabled={recording === null || recording === false} onClick={() => startRecording(false)}>Stop</Button>
          <Button startIcon={<Record/>} disabled={recording === null || recording === true} onClick={() => startRecording(true)}>Rec</Button>
        </ButtonGroup>
      </div>
      <div>
        <Paper className={classes.paper}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Typography>Status</Typography>
            </Grid>
            <Grid item xs={6}>
              <StatPaper icon={<Thermometer/>} 
                title={'CPU Temperature'} 
                uom="°C" 
                value={status['system']['cpu_temperature']}/>
            </Grid>
            <Grid item xs={6}>
              <StatPaper 
                icon={<Speedometer/>} 
                title={'CPU Load'} 
                uom="%" 
                value={status['system']['cpu_load']}/>
            </Grid>
            <Grid item xs={6}>
              <StatPaper 
                icon={<Memory/>} 
                title={'RAM Usage'} 
                uom="%" 
                value={status['system']['mem_usage']}/>
            </Grid>
            <Grid item xs={6}>
              <StatPaper 
                icon={<Harddisk/>} 
                title={'Disk Usage'} 
                uom="%" 
                value={status['system']['disk_usage'][0]['percent']}/>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </React.Fragment>
  );
}