import { List } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import NavBar from '../layout/NavBar';
import RecordingTile from './recordings/RecordingTile';

const useStyles = makeStyles((theme) => ({}));
  
  export default function RecordingsScreen() {
    const classes = useStyles();
  
    return (
      <div>
        <NavBar title="Recordings" />

        <List>
          <RecordingTile fileName="video.h264" fileSize={123435} />
        </List>
      </div>
    );
  }