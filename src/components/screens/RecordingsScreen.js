import React, {useEffect, useState} from 'react';
import { List } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from '../layout/NavBar';
import RecordingTile from './recordings/RecordingTile';

const useStyles = makeStyles((theme) => ({}));
  
  export default function RecordingsScreen() {
    const classes = useStyles();

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      fetch(BASE_URL + '/api/recordings')
      .then((response) => response.json())
      .then((recordings) => recordings.)
    }, []);
  
    return (
      <div>
        <NavBar title="Recordings" />

        <List>
          <RecordingTile fileName="video.h264" fileSize={123435} />
        </List>
      </div>
    );
  }